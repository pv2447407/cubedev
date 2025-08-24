// Chart of Accounts Hierarchy Structure
// Handles account hierarchies, parent-child relationships, and roll-ups

cube(`chart_of_accounts_hierarchy`, {
  sql: `
    WITH RECURSIVE account_hierarchy AS (
      -- Base case: top-level accounts (no parent or self-referencing)
      SELECT 
        a."NO" as account_no,
        a."NAME" as account_name,
        a."ACCOUNT_TYPE" as account_type,
        a."ACCOUNT_CATEGORY" as account_category,
        a."ACCOUNT_SUBCATEGORY_DESCRIPT" as subcategory,
        a."INDENTATION" as indentation_level,
        a."TOTALING" as totaling_range,
        a."NO" as top_parent_account,
        a."NAME" as top_parent_name,
        0 as hierarchy_level,
        a."NO"::TEXT as hierarchy_path,
        a."COMPANY_ID" as company_id
      FROM BUSINESS_CENTRAL.G_L_ACCOUNT a
      WHERE a."INDENTATION" = 0 
        OR a."INDENTATION" IS NULL
      
      UNION ALL
      
      -- Recursive case: child accounts
      SELECT 
        child."NO" as account_no,
        child."NAME" as account_name,
        child."ACCOUNT_TYPE" as account_type,
        child."ACCOUNT_CATEGORY" as account_category,
        child."ACCOUNT_SUBCATEGORY_DESCRIPT" as subcategory,
        child."INDENTATION" as indentation_level,
        child."TOTALING" as totaling_range,
        parent.top_parent_account,
        parent.top_parent_name,
        parent.hierarchy_level + 1 as hierarchy_level,
        parent.hierarchy_path || '>' || child."NO"::TEXT as hierarchy_path,
        child."COMPANY_ID" as company_id
      FROM BUSINESS_CENTRAL.G_L_ACCOUNT child
      INNER JOIN account_hierarchy parent
        ON child."COMPANY_ID" = parent.company_id
        AND child."INDENTATION" = parent.indentation_level + 1
        AND child."NO" > parent.account_no
        AND (
          -- Child should be within parent's totaling range if specified
          parent.totaling_range IS NULL 
          OR child."NO" BETWEEN 
            SPLIT_PART(parent.totaling_range, '..', 1) 
            AND SPLIT_PART(parent.totaling_range, '..', 2)
        )
    )
    SELECT * FROM account_hierarchy
  `,
  
  joins: {
    company: {
      relationship: `many_to_one`,
      sql: `${CUBE}.company_id = ${company}."ID"`
    },
    
    g_l_entry: {
      relationship: `one_to_many`,
      sql: `${CUBE}.account_no = ${g_l_entry}."G_LACCOUNT_NO" AND ${CUBE}.company_id = ${g_l_entry}."COMPANY_ID"`
    },
    
    g_l_budget_entry: {
      relationship: `one_to_many`,
      sql: `${CUBE}.account_no = ${g_l_budget_entry}."G_L_ACCOUNT_NO" AND ${CUBE}.company_id = ${g_l_budget_entry}."COMPANY_ID"`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [account_no, account_name, hierarchy_level]
    },
    
    total_accounts: {
      sql: `${CUBE}.account_no`,
      type: `countDistinct`,
      title: `Total Accounts`
    },
    
    max_hierarchy_depth: {
      sql: `${CUBE}.hierarchy_level`,
      type: `max`,
      title: `Maximum Hierarchy Depth`
    },
    
    avg_hierarchy_depth: {
      sql: `${CUBE}.hierarchy_level`,
      type: `avg`,
      title: `Average Hierarchy Depth`
    },
    
    posting_accounts_count: {
      sql: `CASE WHEN ${CUBE}.account_type = 'Posting' THEN ${CUBE}.account_no ELSE NULL END`,
      type: `countDistinct`,
      title: `Number of Posting Accounts`
    },
    
    heading_accounts_count: {
      sql: `CASE WHEN ${CUBE}.account_type = 'Heading' THEN ${CUBE}.account_no ELSE NULL END`,
      type: `countDistinct`,
      title: `Number of Heading Accounts`
    },
    
    total_accounts_count: {
      sql: `CASE WHEN ${CUBE}.account_type IN ('Total', 'Begin-Total', 'End-Total') THEN ${CUBE}.account_no ELSE NULL END`,
      type: `countDistinct`,
      title: `Number of Total/Subtotal Accounts`
    }
  },
  
  dimensions: {
    account_no: {
      sql: `${CUBE}.account_no`,
      type: `string`,
      primary_key: true,
      title: `Account Number`
    },
    
    account_name: {
      sql: `${CUBE}.account_name`,
      type: `string`,
      title: `Account Name`
    },
    
    account_type: {
      sql: `${CUBE}.account_type`,
      type: `string`,
      title: `Account Type`
    },
    
    account_category: {
      sql: `${CUBE}.account_category`,
      type: `string`,
      title: `Account Category`
    },
    
    subcategory: {
      sql: `${CUBE}.subcategory`,
      type: `string`,
      title: `Account Subcategory`
    },
    
    indentation_level: {
      sql: `${CUBE}.indentation_level`,
      type: `number`,
      title: `Indentation Level`
    },
    
    totaling_range: {
      sql: `${CUBE}.totaling_range`,
      type: `string`,
      title: `Totaling Range`
    },
    
    top_parent_account: {
      sql: `${CUBE}.top_parent_account`,
      type: `string`,
      title: `Top Parent Account`
    },
    
    top_parent_name: {
      sql: `${CUBE}.top_parent_name`,
      type: `string`,
      title: `Top Parent Name`
    },
    
    hierarchy_level: {
      sql: `${CUBE}.hierarchy_level`,
      type: `number`,
      title: `Hierarchy Level`
    },
    
    hierarchy_path: {
      sql: `${CUBE}.hierarchy_path`,
      type: `string`,
      title: `Full Hierarchy Path`
    },
    
    company_id: {
      sql: `${CUBE}.company_id`,
      type: `string`
    },
    
    // Derived dimensions for easier filtering
    is_parent_account: {
      sql: `CASE WHEN ${CUBE}.account_type IN ('Heading', 'Begin-Total') THEN 'Yes' ELSE 'No' END`,
      type: `string`,
      title: `Is Parent Account`
    },
    
    is_leaf_account: {
      sql: `CASE WHEN ${CUBE}.account_type = 'Posting' THEN 'Yes' ELSE 'No' END`,
      type: `string`,
      title: `Is Leaf Account`
    },
    
    hierarchy_level_name: {
      sql: `
        CASE 
          WHEN ${CUBE}.hierarchy_level = 0 THEN 'Top Level'
          WHEN ${CUBE}.hierarchy_level = 1 THEN 'Level 1'
          WHEN ${CUBE}.hierarchy_level = 2 THEN 'Level 2'
          WHEN ${CUBE}.hierarchy_level = 3 THEN 'Level 3'
          WHEN ${CUBE}.hierarchy_level = 4 THEN 'Level 4'
          ELSE 'Level ' || ${CUBE}.hierarchy_level
        END
      `,
      type: `string`,
      title: `Hierarchy Level Name`
    },
    
    // Financial statement mapping
    financial_statement: {
      sql: `
        CASE 
          WHEN ${CUBE}.account_category IN ('Assets', 'Liabilities', 'Equity') THEN 'Balance Sheet'
          WHEN ${CUBE}.account_category IN ('Income', 'Cost of Goods Sold', 'Expense') THEN 'Income Statement'
          ELSE 'Other'
        END
      `,
      type: `string`,
      title: `Financial Statement`
    }
  },
  
  segments: {
    // Hierarchy Level Segments
    top_level_accounts: {
      sql: `${CUBE}.hierarchy_level = 0`,
      title: `Top Level Accounts`
    },
    
    first_level_accounts: {
      sql: `${CUBE}.hierarchy_level = 1`,
      title: `First Level Accounts`
    },
    
    second_level_accounts: {
      sql: `${CUBE}.hierarchy_level = 2`,
      title: `Second Level Accounts`
    },
    
    leaf_level_accounts: {
      sql: `${CUBE}.account_type = 'Posting'`,
      title: `Leaf Level (Posting) Accounts`
    },
    
    // Account Type Hierarchy Segments
    parent_accounts: {
      sql: `${CUBE}.account_type IN ('Heading', 'Begin-Total')`,
      title: `Parent Accounts`
    },
    
    summary_accounts: {
      sql: `${CUBE}.account_type IN ('Total', 'End-Total')`,
      title: `Summary/Total Accounts`
    },
    
    // Category-based Hierarchy Segments
    asset_hierarchy: {
      sql: `${CUBE}.account_category = 'Assets' OR ${CUBE}.top_parent_account IN (SELECT "NO" FROM BUSINESS_CENTRAL.G_L_ACCOUNT WHERE "ACCOUNT_CATEGORY" = 'Assets')`,
      title: `Asset Account Hierarchy`
    },
    
    liability_hierarchy: {
      sql: `${CUBE}.account_category = 'Liabilities' OR ${CUBE}.top_parent_account IN (SELECT "NO" FROM BUSINESS_CENTRAL.G_L_ACCOUNT WHERE "ACCOUNT_CATEGORY" = 'Liabilities')`,
      title: `Liability Account Hierarchy`
    },
    
    equity_hierarchy: {
      sql: `${CUBE}.account_category = 'Equity' OR ${CUBE}.top_parent_account IN (SELECT "NO" FROM BUSINESS_CENTRAL.G_L_ACCOUNT WHERE "ACCOUNT_CATEGORY" = 'Equity')`,
      title: `Equity Account Hierarchy`
    },
    
    revenue_hierarchy: {
      sql: `${CUBE}.account_category = 'Income' OR ${CUBE}.top_parent_account IN (SELECT "NO" FROM BUSINESS_CENTRAL.G_L_ACCOUNT WHERE "ACCOUNT_CATEGORY" = 'Income')`,
      title: `Revenue Account Hierarchy`
    },
    
    expense_hierarchy: {
      sql: `${CUBE}.account_category IN ('Expense', 'Cost of Goods Sold') OR ${CUBE}.top_parent_account IN (SELECT "NO" FROM BUSINESS_CENTRAL.G_L_ACCOUNT WHERE "ACCOUNT_CATEGORY" IN ('Expense', 'Cost of Goods Sold'))`,
      title: `Expense Account Hierarchy`
    }
  },
  
  pre_aggregations: {
    account_hierarchy_rollup: {
      measures: [
        total_accounts,
        posting_accounts_count,
        heading_accounts_count,
        total_accounts_count
      ],
      dimensions: [
        account_category,
        account_type,
        hierarchy_level,
        top_parent_account,
        financial_statement
      ],
      refreshKey: {
        every: `1 day`
      }
    }
  }
});