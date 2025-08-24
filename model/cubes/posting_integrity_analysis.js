// Posting Integrity Analysis Cube
// Validates account balances, posting rules, and identifies potential issues

cube(`posting_integrity_analysis`, {
  sql: `
    WITH account_balances AS (
      SELECT 
        a."NO" as account_no,
        a."NAME" as account_name,
        a."ACCOUNT_CATEGORY" as account_category,
        a."ACCOUNT_TYPE" as account_type,
        a."INCOME_BALANCE" as income_balance,
        a."DEBIT_CREDIT" as normal_balance,
        a."DIRECT_POSTING" as direct_posting,
        a."BLOCKED" as blocked,
        a."COMPANY_ID" as company_id,
        
        -- Calculate raw debit/credit totals
        COALESCE(SUM(CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4))), 0) as total_debits,
        COALESCE(SUM(CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4))), 0) as total_credits,
        
        -- Calculate proper balance based on account type
        CASE 
          WHEN a."ACCOUNT_CATEGORY" IN ('Assets', 'Expense', 'Cost of Goods Sold') THEN
            -- Debit normal balance accounts
            COALESCE(SUM(CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4))), 0) - 
            COALESCE(SUM(CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4))), 0)
          WHEN a."ACCOUNT_CATEGORY" IN ('Liabilities', 'Equity', 'Income') THEN
            -- Credit normal balance accounts
            COALESCE(SUM(CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4))), 0) - 
            COALESCE(SUM(CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4))), 0)
          ELSE 0
        END as normalized_balance,
        
        -- Count transactions
        COUNT(DISTINCT e."ENTRY_NO") as transaction_count,
        COUNT(DISTINCT DATE(e."POSTING_DATE")) as posting_days,
        MIN(e."POSTING_DATE") as first_posting_date,
        MAX(e."POSTING_DATE") as last_posting_date,
        
        -- Identify unusual patterns
        COUNT(DISTINCT e."SOURCE_TYPE") as source_type_count,
        COUNT(DISTINCT e."DOCUMENT_TYPE") as document_type_count,
        COUNT(DISTINCT e."USER_ID") as unique_users,
        
        -- Reversal analysis
        SUM(CASE WHEN e."REVERSED" = true THEN 1 ELSE 0 END) as reversed_entry_count,
        
        -- Period activity
        SUM(CASE 
          WHEN e."POSTING_DATE" >= DATE_TRUNC('month', CURRENT_DATE) 
          THEN 1 ELSE 0 
        END) as current_month_entries,
        
        SUM(CASE 
          WHEN e."POSTING_DATE" >= DATE_TRUNC('year', CURRENT_DATE) 
          THEN 1 ELSE 0 
        END) as current_year_entries
        
      FROM BUSINESS_CENTRAL.G_L_ACCOUNT a
      LEFT JOIN BUSINESS_CENTRAL.G_L_ENTRY e
        ON a."NO" = e."G_LACCOUNT_NO"
        AND a."COMPANY_ID" = e."COMPANY_ID"
      GROUP BY 
        a."NO", a."NAME", a."ACCOUNT_CATEGORY", a."ACCOUNT_TYPE",
        a."INCOME_BALANCE", a."DEBIT_CREDIT", a."DIRECT_POSTING",
        a."BLOCKED", a."COMPANY_ID"
    )
    SELECT * FROM account_balances
  `,
  
  joins: {
    company: {
      relationship: `many_to_one`,
      sql: `${CUBE}.company_id = ${company}."ID"`
    }
  },
  
  measures: {
    account_count: {
      sql: `${CUBE}.account_no`,
      type: `countDistinct`,
      title: `Total Accounts`
    },
    
    total_balance: {
      sql: `${CUBE}.normalized_balance`,
      type: `sum`,
      format: `currency`,
      title: `Total Balance`
    },
    
    total_debits: {
      sql: `${CUBE}.total_debits`,
      type: `sum`,
      format: `currency`,
      title: `Total Debits`
    },
    
    total_credits: {
      sql: `${CUBE}.total_credits`,
      type: `sum`,
      format: `currency`,
      title: `Total Credits`
    },
    
    // Balance validation measures
    balance_check: {
      sql: `ABS(SUM(${CUBE}.total_debits) - SUM(${CUBE}.total_credits))`,
      type: `number`,
      format: `currency`,
      title: `Trial Balance Check`,
      description: `Should be zero for balanced books`
    },
    
    accounts_with_abnormal_balance: {
      sql: `
        CASE 
          WHEN ${CUBE}.account_category IN ('Assets', 'Expense', 'Cost of Goods Sold') 
            AND ${CUBE}.normalized_balance < 0 THEN ${CUBE}.account_no
          WHEN ${CUBE}.account_category IN ('Liabilities', 'Equity', 'Income') 
            AND ${CUBE}.normalized_balance > 0 THEN ${CUBE}.account_no
          ELSE NULL
        END
      `,
      type: `countDistinct`,
      title: `Accounts with Abnormal Balance`,
      description: `Count of accounts with balance opposite to their normal balance`
    },
    
    // Posting integrity measures
    blocked_accounts_with_activity: {
      sql: `
        CASE 
          WHEN ${CUBE}.blocked = true AND ${CUBE}.transaction_count > 0 
            AND ${CUBE}.last_posting_date > DATEADD(month, -3, CURRENT_DATE)
          THEN ${CUBE}.account_no
          ELSE NULL
        END
      `,
      type: `countDistinct`,
      title: `Blocked Accounts with Recent Activity`,
      description: `Blocked accounts that have transactions in last 3 months`
    },
    
    indirect_posting_violations: {
      sql: `
        CASE 
          WHEN ${CUBE}.direct_posting = false 
            AND ${CUBE}.account_type = 'Posting'
            AND ${CUBE}.transaction_count > 0
          THEN ${CUBE}.account_no
          ELSE NULL
        END
      `,
      type: `countDistinct`,
      title: `Indirect Posting Violations`,
      description: `Accounts with indirect posting that have direct entries`
    },
    
    // Activity measures
    inactive_accounts: {
      sql: `
        CASE 
          WHEN ${CUBE}.last_posting_date < DATEADD(day, -90, CURRENT_DATE) 
            OR ${CUBE}.last_posting_date IS NULL
          THEN ${CUBE}.account_no
          ELSE NULL
        END
      `,
      type: `countDistinct`,
      title: `Inactive Accounts (90+ days)`
    },
    
    high_activity_accounts: {
      sql: `
        CASE 
          WHEN ${CUBE}.transaction_count > 1000
          THEN ${CUBE}.account_no
          ELSE NULL
        END
      `,
      type: `countDistinct`,
      title: `High Activity Accounts (1000+ transactions)`
    },
    
    average_transactions_per_account: {
      sql: `${CUBE}.transaction_count`,
      type: `avg`,
      title: `Average Transactions per Account`
    },
    
    // Reversal analysis
    reversal_rate: {
      sql: `
        CASE 
          WHEN SUM(${CUBE}.transaction_count) > 0
          THEN (SUM(${CUBE}.reversed_entry_count)::FLOAT / SUM(${CUBE}.transaction_count)) * 100
          ELSE 0
        END
      `,
      type: `number`,
      format: `percent`,
      title: `Reversal Rate %`
    },
    
    accounts_with_reversals: {
      sql: `
        CASE 
          WHEN ${CUBE}.reversed_entry_count > 0
          THEN ${CUBE}.account_no
          ELSE NULL
        END
      `,
      type: `countDistinct`,
      title: `Accounts with Reversed Entries`
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
    
    account_category: {
      sql: `${CUBE}.account_category`,
      type: `string`,
      title: `Account Category`
    },
    
    account_type: {
      sql: `${CUBE}.account_type`,
      type: `string`,
      title: `Account Type`
    },
    
    normal_balance: {
      sql: `${CUBE}.normal_balance`,
      type: `string`,
      title: `Normal Balance (Debit/Credit)`
    },
    
    income_balance: {
      sql: `${CUBE}.income_balance`,
      type: `string`,
      title: `Income/Balance Sheet`
    },
    
    direct_posting: {
      sql: `${CUBE}.direct_posting`,
      type: `boolean`,
      title: `Direct Posting Allowed`
    },
    
    blocked: {
      sql: `${CUBE}.blocked`,
      type: `boolean`,
      title: `Account Blocked`
    },
    
    normalized_balance: {
      sql: `${CUBE}.normalized_balance`,
      type: `number`,
      format: `currency`,
      title: `Normalized Balance`
    },
    
    transaction_count: {
      sql: `${CUBE}.transaction_count`,
      type: `number`,
      title: `Transaction Count`
    },
    
    posting_days: {
      sql: `${CUBE}.posting_days`,
      type: `number`,
      title: `Days with Postings`
    },
    
    first_posting_date: {
      sql: `${CUBE}.first_posting_date`,
      type: `time`,
      title: `First Posting Date`
    },
    
    last_posting_date: {
      sql: `${CUBE}.last_posting_date`,
      type: `time`,
      title: `Last Posting Date`
    },
    
    days_since_last_posting: {
      sql: `DATEDIFF(day, ${CUBE}.last_posting_date, CURRENT_DATE)`,
      type: `number`,
      title: `Days Since Last Posting`
    },
    
    source_type_count: {
      sql: `${CUBE}.source_type_count`,
      type: `number`,
      title: `Unique Source Types`
    },
    
    document_type_count: {
      sql: `${CUBE}.document_type_count`,
      type: `number`,
      title: `Unique Document Types`
    },
    
    unique_users: {
      sql: `${CUBE}.unique_users`,
      type: `number`,
      title: `Unique Users`
    },
    
    reversed_entry_count: {
      sql: `${CUBE}.reversed_entry_count`,
      type: `number`,
      title: `Reversed Entry Count`
    },
    
    current_month_entries: {
      sql: `${CUBE}.current_month_entries`,
      type: `number`,
      title: `Current Month Entries`
    },
    
    current_year_entries: {
      sql: `${CUBE}.current_year_entries`,
      type: `number`,
      title: `Current Year Entries`
    },
    
    // Calculated integrity flags
    has_abnormal_balance: {
      sql: `
        CASE 
          WHEN ${CUBE}.account_category IN ('Assets', 'Expense', 'Cost of Goods Sold') 
            AND ${CUBE}.normalized_balance < 0 THEN 'Yes'
          WHEN ${CUBE}.account_category IN ('Liabilities', 'Equity', 'Income') 
            AND ${CUBE}.normalized_balance > 0 THEN 'Yes'
          ELSE 'No'
        END
      `,
      type: `string`,
      title: `Has Abnormal Balance`
    },
    
    posting_integrity_status: {
      sql: `
        CASE 
          WHEN ${CUBE}.blocked = true AND ${CUBE}.transaction_count > 0 
            AND ${CUBE}.last_posting_date > DATEADD(month, -3, CURRENT_DATE)
            THEN 'Blocked with Activity'
          WHEN ${CUBE}.direct_posting = false 
            AND ${CUBE}.account_type = 'Posting'
            AND ${CUBE}.transaction_count > 0
            THEN 'Indirect Posting Violation'
          WHEN ${CUBE}.account_type = 'Posting' 
            AND ${CUBE}.transaction_count = 0
            THEN 'Unused Posting Account'
          WHEN ${CUBE}.blocked = true
            THEN 'Blocked'
          ELSE 'OK'
        END
      `,
      type: `string`,
      title: `Posting Integrity Status`
    },
    
    activity_classification: {
      sql: `
        CASE 
          WHEN ${CUBE}.transaction_count = 0 OR ${CUBE}.transaction_count IS NULL
            THEN 'No Activity'
          WHEN ${CUBE}.last_posting_date < DATEADD(day, -365, CURRENT_DATE)
            THEN 'Dormant (1+ year)'
          WHEN ${CUBE}.last_posting_date < DATEADD(day, -90, CURRENT_DATE)
            THEN 'Inactive (90+ days)'
          WHEN ${CUBE}.last_posting_date < DATEADD(day, -30, CURRENT_DATE)
            THEN 'Low Activity (30+ days)'
          WHEN ${CUBE}.transaction_count > 1000
            THEN 'Very High Activity'
          WHEN ${CUBE}.transaction_count > 100
            THEN 'High Activity'
          ELSE 'Normal Activity'
        END
      `,
      type: `string`,
      title: `Activity Classification`
    },
    
    company_id: {
      sql: `${CUBE}.company_id`,
      type: `string`
    }
  },
  
  segments: {
    // Balance validation segments
    unbalanced_accounts: {
      sql: `ABS(${CUBE}.total_debits - ${CUBE}.total_credits) > 0.01`,
      title: `Unbalanced Accounts`
    },
    
    abnormal_balances: {
      sql: `
        (${CUBE}.account_category IN ('Assets', 'Expense', 'Cost of Goods Sold') 
          AND ${CUBE}.normalized_balance < 0)
        OR 
        (${CUBE}.account_category IN ('Liabilities', 'Equity', 'Income') 
          AND ${CUBE}.normalized_balance > 0)
      `,
      title: `Abnormal Balance Accounts`
    },
    
    zero_balance: {
      sql: `ABS(${CUBE}.normalized_balance) < 0.01`,
      title: `Zero Balance Accounts`
    },
    
    // Posting integrity segments
    posting_violations: {
      sql: `
        (${CUBE}.blocked = true AND ${CUBE}.transaction_count > 0 
          AND ${CUBE}.last_posting_date > DATEADD(month, -3, CURRENT_DATE))
        OR 
        (${CUBE}.direct_posting = false 
          AND ${CUBE}.account_type = 'Posting'
          AND ${CUBE}.transaction_count > 0)
      `,
      title: `Posting Violations`
    },
    
    blocked_accounts: {
      sql: `${CUBE}.blocked = true`,
      title: `Blocked Accounts`
    },
    
    indirect_posting: {
      sql: `${CUBE}.direct_posting = false AND ${CUBE}.account_type = 'Posting'`,
      title: `Indirect Posting Accounts`
    },
    
    // Activity segments
    active_accounts: {
      sql: `${CUBE}.last_posting_date >= DATEADD(day, -30, CURRENT_DATE)`,
      title: `Active Accounts (30 days)`
    },
    
    inactive_accounts_segment: {
      sql: `${CUBE}.last_posting_date < DATEADD(day, -90, CURRENT_DATE) OR ${CUBE}.last_posting_date IS NULL`,
      title: `Inactive Accounts (90+ days)`
    },
    
    dormant_accounts: {
      sql: `${CUBE}.last_posting_date < DATEADD(day, -365, CURRENT_DATE) OR ${CUBE}.last_posting_date IS NULL`,
      title: `Dormant Accounts (1+ year)`
    },
    
    high_volume_accounts: {
      sql: `${CUBE}.transaction_count > 100`,
      title: `High Volume Accounts (100+ transactions)`
    },
    
    // Reversal segments
    has_reversals: {
      sql: `${CUBE}.reversed_entry_count > 0`,
      title: `Accounts with Reversals`
    },
    
    high_reversal_rate: {
      sql: `
        ${CUBE}.transaction_count > 0 AND 
        (${CUBE}.reversed_entry_count::FLOAT / ${CUBE}.transaction_count) > 0.1
      `,
      title: `High Reversal Rate (>10%)`
    },
    
    // Account category segments
    balance_sheet: {
      sql: `${CUBE}.account_category IN ('Assets', 'Liabilities', 'Equity')`,
      title: `Balance Sheet Accounts`
    },
    
    income_statement: {
      sql: `${CUBE}.account_category IN ('Income', 'Expense', 'Cost of Goods Sold')`,
      title: `Income Statement Accounts`
    },
    
    posting_accounts: {
      sql: `${CUBE}.account_type = 'Posting'`,
      title: `Posting Accounts`
    },
    
    heading_accounts: {
      sql: `${CUBE}.account_type = 'Heading'`,
      title: `Heading Accounts`
    }
  },
  
  pre_aggregations: {
    // Posting integrity summary
    posting_integrity_summary: {
      measures: [
        account_count,
        total_balance,
        total_debits,
        total_credits,
        balance_check,
        accounts_with_abnormal_balance,
        blocked_accounts_with_activity,
        indirect_posting_violations,
        inactive_accounts,
        reversal_rate
      ],
      dimensions: [
        account_category,
        account_type,
        posting_integrity_status,
        activity_classification
      ],
      refresh_key: {
        every: `1 hour`
      }
    },
    
    // Daily balance validation
    daily_balance_validation: {
      measures: [
        total_debits,
        total_credits,
        balance_check,
        accounts_with_abnormal_balance
      ],
      dimensions: [
        account_category,
        has_abnormal_balance
      ],
      time_dimension: last_posting_date,
      granularity: `day`,
      refresh_key: {
        every: `30 minutes`
      }
    }
  }
});