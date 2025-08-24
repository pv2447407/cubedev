// Chart of Accounts Hierarchy View
// Provides hierarchical rollups with proper balance calculations for totaling accounts

view(`chart_of_accounts_hierarchy_view`, {
  description: `Hierarchical chart of accounts with parent-child rollups and totaling calculations`,
  
  cubes: [
    {
      join_path: chart_of_accounts_hierarchy,
      prefix: true,
      includes: '*'
    }
  ],
  
  measures: {
    // Hierarchical balance calculation
    hierarchy_balance: {
      sql: `
        CASE 
          WHEN ${chart_of_accounts_hierarchy.account_type} IN ('Total', 'End-Total', 'Begin-Total') THEN
            -- For total accounts, sum up accounts in the totaling range
            (
              SELECT COALESCE(SUM(
                CASE 
                  WHEN a."ACCOUNT_CATEGORY" IN ('Assets', 'Liabilities', 'Equity') THEN
                    CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4))
                  WHEN a."ACCOUNT_CATEGORY" IN ('Income', 'Cost of Goods Sold', 'Expense') THEN
                    CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4))
                  ELSE 0
                END
              ), 0)
              FROM BUSINESS_CENTRAL.G_L_ACCOUNT a
              JOIN BUSINESS_CENTRAL.G_L_ENTRY e 
                ON a."NO" = e."G_LACCOUNT_NO" 
                AND a."COMPANY_ID" = e."COMPANY_ID"
              WHERE a."COMPANY_ID" = ${chart_of_accounts_hierarchy.company_id}
                AND ${chart_of_accounts_hierarchy.totaling_range} IS NOT NULL
                AND (
                  -- Handle different totaling formats
                  CASE 
                    WHEN ${chart_of_accounts_hierarchy.totaling_range} LIKE '%..%' THEN
                      a."NO" BETWEEN 
                        SPLIT_PART(${chart_of_accounts_hierarchy.totaling_range}, '..', 1) 
                        AND SPLIT_PART(${chart_of_accounts_hierarchy.totaling_range}, '..', 2)
                    WHEN ${chart_of_accounts_hierarchy.totaling_range} LIKE '%|%' THEN
                      a."NO" = ANY(STRING_TO_ARRAY(${chart_of_accounts_hierarchy.totaling_range}, '|'))
                    ELSE
                      a."NO" = ${chart_of_accounts_hierarchy.totaling_range}
                  END
                )
            )
          WHEN ${chart_of_accounts_hierarchy.account_type} = 'Posting' THEN
            -- For posting accounts, use a simpler calculation
            (
              SELECT COALESCE(SUM(
                CASE 
                  WHEN a."ACCOUNT_CATEGORY" IN ('Assets', 'Liabilities', 'Equity') THEN
                    CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4))
                  WHEN a."ACCOUNT_CATEGORY" IN ('Income', 'Cost of Goods Sold', 'Expense') THEN
                    CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4))
                  ELSE 0
                END
              ), 0)
              FROM BUSINESS_CENTRAL.G_L_ACCOUNT a
              LEFT JOIN BUSINESS_CENTRAL.G_L_ENTRY e 
                ON a."NO" = e."G_LACCOUNT_NO" 
                AND a."COMPANY_ID" = e."COMPANY_ID"
              WHERE a."NO" = ${chart_of_accounts_hierarchy.account_no}
                AND a."COMPANY_ID" = ${chart_of_accounts_hierarchy.company_id}
            )
          ELSE 0
        END
      `,
      type: `number`,
      format: `currency`,
      title: `Hierarchical Balance`
    },
    
    // Rollup to parent level
    parent_level_balance: {
      sql: `
        (
          SELECT COALESCE(SUM(
            CASE 
              WHEN child."ACCOUNT_CATEGORY" IN ('Assets', 'Liabilities', 'Equity') THEN
                CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4))
              WHEN child."ACCOUNT_CATEGORY" IN ('Income', 'Cost of Goods Sold', 'Expense') THEN
                CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4))
              ELSE 0
            END
          ), 0)
          FROM BUSINESS_CENTRAL.G_L_ACCOUNT child
          LEFT JOIN BUSINESS_CENTRAL.G_L_ENTRY e 
            ON child."NO" = e."G_LACCOUNT_NO" 
            AND child."COMPANY_ID" = e."COMPANY_ID"
          WHERE child."COMPANY_ID" = ${chart_of_accounts_hierarchy.company_id}
            AND child."INDENTATION" > ${chart_of_accounts_hierarchy.indentation_level}
            AND child."NO" > ${chart_of_accounts_hierarchy.account_no}
            AND child."NO" < COALESCE(
              (
                SELECT MIN(next."NO")
                FROM BUSINESS_CENTRAL.G_L_ACCOUNT next
                WHERE next."COMPANY_ID" = ${chart_of_accounts_hierarchy.company_id}
                  AND next."INDENTATION" <= ${chart_of_accounts_hierarchy.indentation_level}
                  AND next."NO" > ${chart_of_accounts_hierarchy.account_no}
              ),
              'ZZZZZZZZZZ'
            )
        )
      `,
      type: `number`,
      format: `currency`,
      title: `Parent Level Balance (with children)`
    },
    
    // Net change for hierarchy
    hierarchy_net_change: {
      sql: `
        (
          SELECT COALESCE(SUM(
            CASE 
              WHEN e."POSTING_DATE" >= DATE_TRUNC('month', CURRENT_DATE) THEN
                CASE 
                  WHEN a."ACCOUNT_CATEGORY" IN ('Assets', 'Liabilities', 'Equity') THEN
                    CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4))
                  WHEN a."ACCOUNT_CATEGORY" IN ('Income', 'Cost of Goods Sold', 'Expense') THEN
                    CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4))
                  ELSE 0
                END
              ELSE 0
            END
          ), 0)
          FROM BUSINESS_CENTRAL.G_L_ACCOUNT a
          LEFT JOIN BUSINESS_CENTRAL.G_L_ENTRY e 
            ON a."NO" = e."G_LACCOUNT_NO" 
            AND a."COMPANY_ID" = e."COMPANY_ID"
          WHERE a."NO" = ${chart_of_accounts_hierarchy.account_no}
            AND a."COMPANY_ID" = ${chart_of_accounts_hierarchy.company_id}
            AND ${chart_of_accounts_hierarchy.account_type} = 'Posting'
        )
      `,
      type: `number`,
      format: `currency`,
      title: `Net Change (Current Period)`
    },
    
    // Count of child accounts
    child_account_count: {
      sql: `
        (
          SELECT COUNT(DISTINCT child."NO")
          FROM BUSINESS_CENTRAL.G_L_ACCOUNT child
          WHERE child."COMPANY_ID" = ${chart_of_accounts_hierarchy.company_id}
            AND child."INDENTATION" > ${chart_of_accounts_hierarchy.indentation_level}
            AND child."NO" > ${chart_of_accounts_hierarchy.account_no}
            AND child."NO" < COALESCE(
              (
                SELECT MIN(next."NO")
                FROM BUSINESS_CENTRAL.G_L_ACCOUNT next
                WHERE next."COMPANY_ID" = ${chart_of_accounts_hierarchy.company_id}
                  AND next."INDENTATION" <= ${chart_of_accounts_hierarchy.indentation_level}
                  AND next."NO" > ${chart_of_accounts_hierarchy.account_no}
              ),
              'ZZZZZZZZZZ'
            )
        )
      `,
      type: `number`,
      title: `Number of Child Accounts`
    },
    
    // Posting account balance only (excluding children)
    own_balance: {
      sql: `
        CASE 
          WHEN ${chart_of_accounts_hierarchy.account_type} = 'Posting' THEN
            (
              SELECT COALESCE(SUM(
                CASE 
                  WHEN ${chart_of_accounts_hierarchy.account_category} IN ('Assets', 'Liabilities', 'Equity') THEN
                    CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4))
                  WHEN ${chart_of_accounts_hierarchy.account_category} IN ('Income', 'Cost of Goods Sold', 'Expense') THEN
                    CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4))
                  ELSE 0
                END
              ), 0)
              FROM BUSINESS_CENTRAL.G_L_ENTRY e
              WHERE e."G_LACCOUNT_NO" = ${chart_of_accounts_hierarchy.account_no}
                AND e."COMPANY_ID" = ${chart_of_accounts_hierarchy.company_id}
            )
          ELSE 0
        END
      `,
      type: `number`,
      format: `currency`,
      title: `Own Balance (Excluding Children)`
    },
    
    transaction_count: {
      sql: `
        (
          SELECT COUNT(DISTINCT e."ENTRY_NO")
          FROM BUSINESS_CENTRAL.G_L_ENTRY e
          WHERE e."G_LACCOUNT_NO" = ${chart_of_accounts_hierarchy.account_no}
            AND e."COMPANY_ID" = ${chart_of_accounts_hierarchy.company_id}
        )
      `,
      type: `number`,
      title: `Transaction Count`
    }
  },
  
  dimensions: {
    // Include all hierarchy dimensions
    account_no: {
      sql: `${chart_of_accounts_hierarchy.account_no}`,
      type: `string`,
      primary_key: true
    },
    
    account_name: {
      sql: `${chart_of_accounts_hierarchy.account_name}`,
      type: `string`
    },
    
    account_type: {
      sql: `${chart_of_accounts_hierarchy.account_type}`,
      type: `string`
    },
    
    account_category: {
      sql: `${chart_of_accounts_hierarchy.account_category}`,
      type: `string`
    },
    
    hierarchy_level: {
      sql: `${chart_of_accounts_hierarchy.hierarchy_level}`,
      type: `number`
    },
    
    hierarchy_path: {
      sql: `${chart_of_accounts_hierarchy.hierarchy_path}`,
      type: `string`
    },
    
    top_parent_account: {
      sql: `${chart_of_accounts_hierarchy.top_parent_account}`,
      type: `string`
    },
    
    top_parent_name: {
      sql: `${chart_of_accounts_hierarchy.top_parent_name}`,
      type: `string`
    },
    
    indentation_level: {
      sql: `${chart_of_accounts_hierarchy.indentation_level}`,
      type: `number`
    },
    
    totaling_range: {
      sql: `${chart_of_accounts_hierarchy.totaling_range}`,
      type: `string`
    },
    
    financial_statement: {
      sql: `${chart_of_accounts_hierarchy.financial_statement}`,
      type: `string`
    },
    
    is_parent: {
      sql: `${chart_of_accounts_hierarchy.is_parent_account}`,
      type: `string`
    },
    
    is_leaf: {
      sql: `${chart_of_accounts_hierarchy.is_leaf_account}`,
      type: `string`
    },
    
    // Calculated hierarchy indicators
    has_children: {
      sql: `
        CASE 
          WHEN EXISTS (
            SELECT 1
            FROM BUSINESS_CENTRAL.G_L_ACCOUNT child
            WHERE child."COMPANY_ID" = ${chart_of_accounts_hierarchy.company_id}
              AND child."INDENTATION" > ${chart_of_accounts_hierarchy.indentation_level}
              AND child."NO" > ${chart_of_accounts_hierarchy.account_no}
              AND child."NO" < COALESCE(
                (
                  SELECT MIN(next."NO")
                  FROM BUSINESS_CENTRAL.G_L_ACCOUNT next
                  WHERE next."COMPANY_ID" = ${chart_of_accounts_hierarchy.company_id}
                    AND next."INDENTATION" <= ${chart_of_accounts_hierarchy.indentation_level}
                    AND next."NO" > ${chart_of_accounts_hierarchy.account_no}
                ),
                'ZZZZZZZZZZ'
              )
          ) THEN 'Yes'
          ELSE 'No'
        END
      `,
      type: `string`,
      title: `Has Children`
    },
    
    // Formatted display
    indented_name: {
      sql: `REPEAT('  ', ${chart_of_accounts_hierarchy.indentation_level}) || ${chart_of_accounts_hierarchy.account_name}`,
      type: `string`,
      title: `Indented Account Name`
    },
    
    account_display: {
      sql: `
        ${chart_of_accounts_hierarchy.account_no} || ' - ' || 
        REPEAT('  ', ${chart_of_accounts_hierarchy.indentation_level}) || 
        ${chart_of_accounts_hierarchy.account_name}
      `,
      type: `string`,
      title: `Account Display`
    }
  },
  
  segments: {
    // Hierarchy level segments
    top_level_only: {
      sql: `${chart_of_accounts_hierarchy.hierarchy_level} = 0`,
      title: `Top Level Accounts Only`
    },
    
    parent_accounts: {
      sql: `${chart_of_accounts_hierarchy.is_parent_account} = 'Yes'`,
      title: `Parent Accounts`
    },
    
    leaf_accounts: {
      sql: `${chart_of_accounts_hierarchy.is_leaf_account} = 'Yes'`,
      title: `Leaf Accounts`
    },
    
    // Account type segments
    posting_accounts: {
      sql: `${chart_of_accounts_hierarchy.account_type} = 'Posting'`,
      title: `Posting Accounts`
    },
    
    heading_accounts: {
      sql: `${chart_of_accounts_hierarchy.account_type} = 'Heading'`,
      title: `Heading Accounts`
    },
    
    total_accounts: {
      sql: `${chart_of_accounts_hierarchy.account_type} IN ('Total', 'Begin-Total', 'End-Total')`,
      title: `Total Accounts`
    },
    
    // Financial statement segments
    balance_sheet: {
      sql: `${chart_of_accounts_hierarchy.financial_statement} = 'Balance Sheet'`,
      title: `Balance Sheet`
    },
    
    income_statement: {
      sql: `${chart_of_accounts_hierarchy.financial_statement} = 'Income Statement'`,
      title: `Income Statement`
    },
    
    // Category-based hierarchy
    assets_hierarchy: {
      sql: `${chart_of_accounts_hierarchy.account_category} = 'Assets' 
        OR ${chart_of_accounts_hierarchy.top_parent_account} IN (
          SELECT "NO" FROM BUSINESS_CENTRAL.G_L_ACCOUNT 
          WHERE "ACCOUNT_CATEGORY" = 'Assets'
        )`,
      title: `Assets Hierarchy`
    },
    
    liabilities_hierarchy: {
      sql: `${chart_of_accounts_hierarchy.account_category} = 'Liabilities' 
        OR ${chart_of_accounts_hierarchy.top_parent_account} IN (
          SELECT "NO" FROM BUSINESS_CENTRAL.G_L_ACCOUNT 
          WHERE "ACCOUNT_CATEGORY" = 'Liabilities'
        )`,
      title: `Liabilities Hierarchy`
    },
    
    equity_hierarchy: {
      sql: `${chart_of_accounts_hierarchy.account_category} = 'Equity' 
        OR ${chart_of_accounts_hierarchy.top_parent_account} IN (
          SELECT "NO" FROM BUSINESS_CENTRAL.G_L_ACCOUNT 
          WHERE "ACCOUNT_CATEGORY" = 'Equity'
        )`,
      title: `Equity Hierarchy`
    },
    
    revenue_hierarchy: {
      sql: `${chart_of_accounts_hierarchy.account_category} = 'Income' 
        OR ${chart_of_accounts_hierarchy.top_parent_account} IN (
          SELECT "NO" FROM BUSINESS_CENTRAL.G_L_ACCOUNT 
          WHERE "ACCOUNT_CATEGORY" = 'Income'
        )`,
      title: `Revenue Hierarchy`
    },
    
    expense_hierarchy: {
      sql: `${chart_of_accounts_hierarchy.account_category} IN ('Expense', 'Cost of Goods Sold') 
        OR ${chart_of_accounts_hierarchy.top_parent_account} IN (
          SELECT "NO" FROM BUSINESS_CENTRAL.G_L_ACCOUNT 
          WHERE "ACCOUNT_CATEGORY" IN ('Expense', 'Cost of Goods Sold')
        )`,
      title: `Expense Hierarchy`
    }
  },
  
  pre_aggregations: {
    // Hierarchy rollup cache
    hierarchy_rollup: {
      measures: [
        hierarchy_balance,
        parent_level_balance,
        own_balance,
        hierarchy_net_change,
        child_account_count,
        transaction_count
      ],
      dimensions: [
        account_no,
        account_name,
        account_type,
        account_category,
        hierarchy_level,
        top_parent_account,
        financial_statement
      ],
      refresh_key: {
        every: `1 hour`
      }
    },
    
    // Top-level summary
    top_level_summary: {
      measures: [
        hierarchy_balance,
        parent_level_balance,
        child_account_count
      ],
      dimensions: [
        account_no,
        account_name,
        account_category,
        financial_statement
      ],
      segments: [top_level_only],
      refresh_key: {
        every: `30 minutes`
      }
    }
  }
});