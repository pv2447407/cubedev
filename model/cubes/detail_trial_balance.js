// Detail Trial Balance Cube
// Provides opening balance, net change, and closing balance calculations

cube(`detail_trial_balance`, {
  sql: `
    SELECT 
      a."NO",
      a."NAME",
      a."ACCOUNT_TYPE",
      a."ACCOUNT_CATEGORY",
      a."ACCOUNT_SUBCATEGORY_DESCRIPT",
      a."INCOME_BALANCE",
      a."DIRECT_POSTING",
      a."BLOCKED",
      a."RECONCILIATION_ACCOUNT",
      a."COMPANY_ID",
      
      -- Opening Balance
      (
        SELECT COALESCE(SUM(
          CASE 
            -- Balance Sheet accounts carry forward all historical balances
            WHEN a."ACCOUNT_CATEGORY" IN ('Assets', 'Liabilities', 'Equity') THEN
              CASE 
                WHEN e."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) THEN
                  CASE 
                    WHEN a."ACCOUNT_CATEGORY" = 'Assets' THEN
                      CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4))
                    WHEN a."ACCOUNT_CATEGORY" IN ('Liabilities', 'Equity') THEN
                      CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4))
                    ELSE 0
                  END
                ELSE 0
              END
            -- Income Statement accounts only from fiscal year start
            WHEN a."ACCOUNT_CATEGORY" IN ('Income', 'Expense', 'Cost of Goods Sold') THEN
              CASE 
                WHEN e."POSTING_DATE" >= 
                  CASE 
                    WHEN EXTRACT(MONTH FROM CURRENT_DATE) >= 4
                    THEN DATE(EXTRACT(YEAR FROM CURRENT_DATE)::TEXT || '-04-01')
                    ELSE DATE((EXTRACT(YEAR FROM CURRENT_DATE) - 1)::TEXT || '-04-01')
                  END
                  AND e."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE)
                THEN
                  CASE 
                    WHEN a."ACCOUNT_CATEGORY" = 'Income' THEN
                      CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4))
                    WHEN a."ACCOUNT_CATEGORY" IN ('Expense', 'Cost of Goods Sold') THEN
                      CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4))
                    ELSE 0
                  END
                ELSE 0
              END
            ELSE 0
          END
        ), 0)
        FROM BUSINESS_CENTRAL.G_L_ENTRY e
        WHERE e."G_LACCOUNT_NO" = a."NO"
          AND e."COMPANY_ID" = a."COMPANY_ID"
      ) as opening_balance,
      
      -- Period Debits
      (
        SELECT COALESCE(SUM(CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4))), 0)
        FROM BUSINESS_CENTRAL.G_L_ENTRY e
        WHERE e."G_LACCOUNT_NO" = a."NO"
          AND e."COMPANY_ID" = a."COMPANY_ID"
          AND e."POSTING_DATE" >= DATE_TRUNC('month', CURRENT_DATE)
          AND e."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month'
      ) as period_debits,
      
      -- Period Credits
      (
        SELECT COALESCE(SUM(CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4))), 0)
        FROM BUSINESS_CENTRAL.G_L_ENTRY e
        WHERE e."G_LACCOUNT_NO" = a."NO"
          AND e."COMPANY_ID" = a."COMPANY_ID"
          AND e."POSTING_DATE" >= DATE_TRUNC('month', CURRENT_DATE)
          AND e."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month'
      ) as period_credits,
      
      -- Net Change
      (
        SELECT COALESCE(SUM(
          CASE 
            WHEN a."ACCOUNT_CATEGORY" IN ('Assets', 'Expense', 'Cost of Goods Sold') THEN
              CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4))
            WHEN a."ACCOUNT_CATEGORY" IN ('Liabilities', 'Equity', 'Income') THEN
              CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4))
            ELSE 0
          END
        ), 0)
        FROM BUSINESS_CENTRAL.G_L_ENTRY e
        WHERE e."G_LACCOUNT_NO" = a."NO"
          AND e."COMPANY_ID" = a."COMPANY_ID"
          AND e."POSTING_DATE" >= DATE_TRUNC('month', CURRENT_DATE)
          AND e."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month'
      ) as net_change,
      
      -- Closing Balance
      (
        SELECT COALESCE(SUM(
          CASE 
            -- Balance Sheet accounts: all transactions up to period end
            WHEN a."ACCOUNT_CATEGORY" IN ('Assets', 'Liabilities', 'Equity') THEN
              CASE 
                WHEN e."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month' THEN
                  CASE 
                    WHEN a."ACCOUNT_CATEGORY" = 'Assets' THEN
                      CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4))
                    WHEN a."ACCOUNT_CATEGORY" IN ('Liabilities', 'Equity') THEN
                      CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4))
                    ELSE 0
                  END
                ELSE 0
              END
            -- Income Statement accounts: fiscal YTD only
            WHEN a."ACCOUNT_CATEGORY" IN ('Income', 'Expense', 'Cost of Goods Sold') THEN
              CASE 
                WHEN e."POSTING_DATE" >= 
                  CASE 
                    WHEN EXTRACT(MONTH FROM CURRENT_DATE) >= 4
                    THEN DATE(EXTRACT(YEAR FROM CURRENT_DATE)::TEXT || '-04-01')
                    ELSE DATE((EXTRACT(YEAR FROM CURRENT_DATE) - 1)::TEXT || '-04-01')
                  END
                  AND e."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month'
                THEN
                  CASE 
                    WHEN a."ACCOUNT_CATEGORY" = 'Income' THEN
                      CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4))
                    WHEN a."ACCOUNT_CATEGORY" IN ('Expense', 'Cost of Goods Sold') THEN
                      CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4))
                    ELSE 0
                  END
                ELSE 0
              END
            ELSE 0
          END
        ), 0)
        FROM BUSINESS_CENTRAL.G_L_ENTRY e
        WHERE e."G_LACCOUNT_NO" = a."NO"
          AND e."COMPANY_ID" = a."COMPANY_ID"
      ) as closing_balance,
      
      -- YTD Debits
      (
        SELECT COALESCE(SUM(CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4))), 0)
        FROM BUSINESS_CENTRAL.G_L_ENTRY e
        WHERE e."G_LACCOUNT_NO" = a."NO"
          AND e."COMPANY_ID" = a."COMPANY_ID"
          AND e."POSTING_DATE" >= 
            CASE 
              WHEN EXTRACT(MONTH FROM CURRENT_DATE) >= 4
              THEN DATE(EXTRACT(YEAR FROM CURRENT_DATE)::TEXT || '-04-01')
              ELSE DATE((EXTRACT(YEAR FROM CURRENT_DATE) - 1)::TEXT || '-04-01')
            END
          AND e."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month'
      ) as ytd_debits,
      
      -- YTD Credits
      (
        SELECT COALESCE(SUM(CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4))), 0)
        FROM BUSINESS_CENTRAL.G_L_ENTRY e
        WHERE e."G_LACCOUNT_NO" = a."NO"
          AND e."COMPANY_ID" = a."COMPANY_ID"
          AND e."POSTING_DATE" >= 
            CASE 
              WHEN EXTRACT(MONTH FROM CURRENT_DATE) >= 4
              THEN DATE(EXTRACT(YEAR FROM CURRENT_DATE)::TEXT || '-04-01')
              ELSE DATE((EXTRACT(YEAR FROM CURRENT_DATE) - 1)::TEXT || '-04-01')
            END
          AND e."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month'
      ) as ytd_credits,
      
      -- YTD Net Change
      (
        SELECT COALESCE(SUM(
          CASE 
            WHEN a."ACCOUNT_CATEGORY" IN ('Assets', 'Expense', 'Cost of Goods Sold') THEN
              CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4))
            WHEN a."ACCOUNT_CATEGORY" IN ('Liabilities', 'Equity', 'Income') THEN
              CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4))
            ELSE 0
          END
        ), 0)
        FROM BUSINESS_CENTRAL.G_L_ENTRY e
        WHERE e."G_LACCOUNT_NO" = a."NO"
          AND e."COMPANY_ID" = a."COMPANY_ID"
          AND e."POSTING_DATE" >= 
            CASE 
              WHEN EXTRACT(MONTH FROM CURRENT_DATE) >= 4
              THEN DATE(EXTRACT(YEAR FROM CURRENT_DATE)::TEXT || '-04-01')
              ELSE DATE((EXTRACT(YEAR FROM CURRENT_DATE) - 1)::TEXT || '-04-01')
            END
          AND e."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month'
      ) as ytd_net_change,
      
      -- Transaction Count
      (
        SELECT COUNT(DISTINCT e."ENTRY_NO")
        FROM BUSINESS_CENTRAL.G_L_ENTRY e
        WHERE e."G_LACCOUNT_NO" = a."NO"
          AND e."COMPANY_ID" = a."COMPANY_ID"
      ) as transaction_count,
      
      -- Period Transaction Count
      (
        SELECT COUNT(DISTINCT e."ENTRY_NO")
        FROM BUSINESS_CENTRAL.G_L_ENTRY e
        WHERE e."G_LACCOUNT_NO" = a."NO"
          AND e."COMPANY_ID" = a."COMPANY_ID"
          AND e."POSTING_DATE" >= DATE_TRUNC('month', CURRENT_DATE)
          AND e."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month'
      ) as period_transaction_count
      
    FROM BUSINESS_CENTRAL.G_L_ACCOUNT a
  `,
  
  title: `Detail Trial Balance`,
  description: `Comprehensive trial balance with opening, closing, and movement calculations`,
  
  measures: {
    // Opening Balance
    opening_balance: {
      sql: `${CUBE}.opening_balance`,
      type: `sum`,
      format: `currency`,
      title: `Opening Balance`
    },
    
    // Period Debits
    period_debits: {
      sql: `${CUBE}.period_debits`,
      type: `sum`,
      format: `currency`,
      title: `Period Debits`
    },
    
    // Period Credits
    period_credits: {
      sql: `${CUBE}.period_credits`,
      type: `sum`,
      format: `currency`,
      title: `Period Credits`
    },
    
    // Net Change
    net_change: {
      sql: `${CUBE}.net_change`,
      type: `sum`,
      format: `currency`,
      title: `Net Change`
    },
    
    // Closing Balance
    closing_balance: {
      sql: `${CUBE}.closing_balance`,
      type: `sum`,
      format: `currency`,
      title: `Closing Balance`
    },
    
    // YTD Debits
    ytd_debits: {
      sql: `${CUBE}.ytd_debits`,
      type: `sum`,
      format: `currency`,
      title: `YTD Debits`
    },
    
    // YTD Credits
    ytd_credits: {
      sql: `${CUBE}.ytd_credits`,
      type: `sum`,
      format: `currency`,
      title: `YTD Credits`
    },
    
    // YTD Net Change
    ytd_net_change: {
      sql: `${CUBE}.ytd_net_change`,
      type: `sum`,
      format: `currency`,
      title: `YTD Net Change`
    },
    
    // Transaction Count
    transaction_count: {
      sql: `${CUBE}.transaction_count`,
      type: `sum`,
      title: `Transaction Count`
    },
    
    // Period Transaction Count
    period_transaction_count: {
      sql: `${CUBE}.period_transaction_count`,
      type: `sum`,
      title: `Period Transaction Count`
    },
    
    // Account Count
    account_count: {
      sql: `${CUBE}."NO"`,
      type: `countDistinct`,
      title: `Account Count`
    }
  },
  
  dimensions: {
    // Account dimensions
    no: {
      sql: `${CUBE}."NO"`,
      type: `string`,
      primaryKey: true,
      title: `Account No`
    },
    
    name: {
      sql: `${CUBE}."NAME"`,
      type: `string`,
      title: `Account Name`
    },
    
    account_type: {
      sql: `${CUBE}."ACCOUNT_TYPE"`,
      type: `string`,
      title: `Account Type`
    },
    
    account_category: {
      sql: `${CUBE}."ACCOUNT_CATEGORY"`,
      type: `string`,
      title: `Account Category`
    },
    
    account_subcategory_descript: {
      sql: `${CUBE}."ACCOUNT_SUBCATEGORY_DESCRIPT"`,
      type: `string`,
      title: `Account Subcategory`
    },
    
    income_balance: {
      sql: `${CUBE}."INCOME_BALANCE"`,
      type: `string`,
      title: `Income/Balance`
    },
    
    direct_posting: {
      sql: `${CUBE}."DIRECT_POSTING"`,
      type: `boolean`,
      title: `Direct Posting`
    },
    
    blocked: {
      sql: `${CUBE}."BLOCKED"`,
      type: `boolean`,
      title: `Blocked`
    },
    
    reconciliation_account: {
      sql: `${CUBE}."RECONCILIATION_ACCOUNT"`,
      type: `boolean`,
      title: `Reconciliation Account`
    },
    
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`,
      title: `Company ID`
    },
    
    // Calculated dimensions
    normal_balance_side: {
      sql: `
        CASE 
          WHEN ${CUBE}."ACCOUNT_CATEGORY" IN ('Assets', 'Expense', 'Cost of Goods Sold') THEN 'Debit'
          WHEN ${CUBE}."ACCOUNT_CATEGORY" IN ('Liabilities', 'Equity', 'Income') THEN 'Credit'
          ELSE 'N/A'
        END
      `,
      type: `string`,
      title: `Normal Balance Side`
    },
    
    financial_statement: {
      sql: `
        CASE 
          WHEN ${CUBE}."ACCOUNT_CATEGORY" IN ('Assets', 'Liabilities', 'Equity') THEN 'Balance Sheet'
          WHEN ${CUBE}."ACCOUNT_CATEGORY" IN ('Income', 'Expense', 'Cost of Goods Sold') THEN 'Income Statement'
          ELSE 'Other'
        END
      `,
      type: `string`,
      title: `Financial Statement`
    },
    
    account_status: {
      sql: `
        CASE 
          WHEN ${CUBE}."BLOCKED" = true THEN 'Blocked'
          WHEN ${CUBE}."DIRECT_POSTING" = false THEN 'No Direct Posting'
          ELSE 'Active'
        END
      `,
      type: `string`,
      title: `Account Status`
    }
  },
  
  segments: {
    // Account Category Segments
    balance_sheet_accounts: {
      sql: `${CUBE}."ACCOUNT_CATEGORY" IN ('Assets', 'Liabilities', 'Equity')`,
      title: `Balance Sheet Accounts`
    },
    
    income_statement_accounts: {
      sql: `${CUBE}."ACCOUNT_CATEGORY" IN ('Income', 'Expense', 'Cost of Goods Sold')`,
      title: `Income Statement Accounts`
    },
    
    assets: {
      sql: `${CUBE}."ACCOUNT_CATEGORY" = 'Assets'`,
      title: `Assets`
    },
    
    liabilities: {
      sql: `${CUBE}."ACCOUNT_CATEGORY" = 'Liabilities'`,
      title: `Liabilities`
    },
    
    equity: {
      sql: `${CUBE}."ACCOUNT_CATEGORY" = 'Equity'`,
      title: `Equity`
    },
    
    income: {
      sql: `${CUBE}."ACCOUNT_CATEGORY" = 'Income'`,
      title: `Income`
    },
    
    expense: {
      sql: `${CUBE}."ACCOUNT_CATEGORY" = 'Expense'`,
      title: `Expense`
    },
    
    cogs: {
      sql: `${CUBE}."ACCOUNT_CATEGORY" = 'Cost of Goods Sold'`,
      title: `Cost of Goods Sold`
    },
    
    // Account Status Segments
    active_accounts: {
      sql: `${CUBE}."BLOCKED" = false AND ${CUBE}."DIRECT_POSTING" = true`,
      title: `Active Accounts`
    },
    
    reconciliation_accounts: {
      sql: `${CUBE}."RECONCILIATION_ACCOUNT" = true`,
      title: `Reconciliation Accounts`
    },
    
    posting_accounts: {
      sql: `${CUBE}."ACCOUNT_TYPE" = 'Posting'`,
      title: `Posting Accounts`
    },
    
    // Balance-based segments
    accounts_with_balance: {
      sql: `ABS(${CUBE}.closing_balance) > 0.01`,
      title: `Accounts with Balance`
    },
    
    accounts_with_activity: {
      sql: `${CUBE}.period_transaction_count > 0`,
      title: `Accounts with Period Activity`
    }
  }
});