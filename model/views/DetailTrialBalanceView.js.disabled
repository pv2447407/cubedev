// Detail Trial Balance View
// Comprehensive transaction-level financial close and reconciliation capabilities
// Handles opening balances, period movements, and closing balances with fiscal year considerations

view(`detail_trial_balance_view`, {
  description: `Detailed trial balance with opening/closing balances, period movements, and multi-dimensional analysis`,
  
  includes: [
    // Account master data
    g_l_account.no,
    g_l_account.name,
    g_l_account.account_type,
    g_l_account.account_category,
    g_l_account.account_subcategory_descript,
    g_l_account.blocked,
    g_l_account.direct_posting,
    g_l_account.company_id,
    
    // Opening Balance (Beginning of selected period)
    {
      name: `opening_balance`,
      sql: `
        (
          SELECT COALESCE(SUM(
            CASE 
              -- Balance Sheet accounts carry forward balances
              WHEN ${g_l_account.account_category} IN ('Assets', 'Liabilities', 'Equity') THEN
                CASE 
                  WHEN ${g_l_account.account_category} = 'Assets' THEN
                    CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4))
                  WHEN ${g_l_account.account_category} IN ('Liabilities', 'Equity') THEN
                    CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4))
                  ELSE 0
                END
              -- Income Statement accounts reset at fiscal year start
              WHEN ${g_l_account.account_category} IN ('Income', 'Expense', 'Cost of Goods Sold') THEN
                CASE 
                  -- Only include if within current fiscal year
                  WHEN e."POSTING_DATE" >= 
                    CASE 
                      WHEN EXTRACT(MONTH FROM DATE_TRUNC('month', CURRENT_DATE)) >= 4
                      THEN DATE(EXTRACT(YEAR FROM DATE_TRUNC('month', CURRENT_DATE))::TEXT || '-04-01')
                      ELSE DATE((EXTRACT(YEAR FROM DATE_TRUNC('month', CURRENT_DATE)) - 1)::TEXT || '-04-01')
                    END
                  THEN
                    CASE 
                      WHEN ${g_l_account.account_category} = 'Income' THEN
                        CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4))
                      WHEN ${g_l_account.account_category} IN ('Expense', 'Cost of Goods Sold') THEN
                        CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4))
                      ELSE 0
                    END
                  ELSE 0
                END
              ELSE 0
            END
          ), 0)
          FROM BUSINESS_CENTRAL.G_L_ENTRY e
          WHERE e."G_LACCOUNT_NO" = ${g_l_account.no}
            AND e."COMPANY_ID" = ${g_l_account.company_id}
            AND e."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE)
        )
      `,
      type: `number`,
      format: `currency`,
      title: `Opening Balance`
    },
    
    // Period Debits
    {
      name: `period_debit_amount`,
      sql: `
        (
          SELECT COALESCE(SUM(CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4))), 0)
          FROM BUSINESS_CENTRAL.G_L_ENTRY e
          WHERE e."G_LACCOUNT_NO" = ${g_l_account.no}
            AND e."COMPANY_ID" = ${g_l_account.company_id}
            AND e."POSTING_DATE" >= DATE_TRUNC('month', CURRENT_DATE)
            AND e."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month'
        )
      `,
      type: `number`,
      format: `currency`,
      title: `Period Debits`
    },
    
    // Period Credits
    {
      name: `period_credit_amount`,
      sql: `
        (
          SELECT COALESCE(SUM(CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4))), 0)
          FROM BUSINESS_CENTRAL.G_L_ENTRY e
          WHERE e."G_LACCOUNT_NO" = ${g_l_account.no}
            AND e."COMPANY_ID" = ${g_l_account.company_id}
            AND e."POSTING_DATE" >= DATE_TRUNC('month', CURRENT_DATE)
            AND e."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month'
        )
      `,
      type: `number`,
      format: `currency`,
      title: `Period Credits`
    },
    
    // Net Change (Period Movement)
    {
      name: `net_change`,
      sql: `
        (
          SELECT COALESCE(SUM(
            CASE 
              WHEN ${g_l_account.account_category} IN ('Assets', 'Expense', 'Cost of Goods Sold') THEN
                CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4))
              WHEN ${g_l_account.account_category} IN ('Liabilities', 'Equity', 'Income') THEN
                CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4))
              ELSE 0
            END
          ), 0)
          FROM BUSINESS_CENTRAL.G_L_ENTRY e
          WHERE e."G_LACCOUNT_NO" = ${g_l_account.no}
            AND e."COMPANY_ID" = ${g_l_account.company_id}
            AND e."POSTING_DATE" >= DATE_TRUNC('month', CURRENT_DATE)
            AND e."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month'
        )
      `,
      type: `number`,
      format: `currency`,
      title: `Net Change`
    },
    
    // Closing Balance
    {
      name: `closing_balance`,
      sql: `
        (
          SELECT COALESCE(SUM(
            CASE 
              -- Balance Sheet accounts
              WHEN ${g_l_account.account_category} IN ('Assets', 'Liabilities', 'Equity') THEN
                CASE 
                  WHEN ${g_l_account.account_category} = 'Assets' THEN
                    CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4))
                  WHEN ${g_l_account.account_category} IN ('Liabilities', 'Equity') THEN
                    CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4))
                  ELSE 0
                END
              -- Income Statement accounts (fiscal year to date)
              WHEN ${g_l_account.account_category} IN ('Income', 'Expense', 'Cost of Goods Sold') THEN
                CASE 
                  WHEN e."POSTING_DATE" >= 
                    CASE 
                      WHEN EXTRACT(MONTH FROM DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month' - INTERVAL '1 day') >= 4
                      THEN DATE(EXTRACT(YEAR FROM DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month' - INTERVAL '1 day')::TEXT || '-04-01')
                      ELSE DATE((EXTRACT(YEAR FROM DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month' - INTERVAL '1 day') - 1)::TEXT || '-04-01')
                    END
                  THEN
                    CASE 
                      WHEN ${g_l_account.account_category} = 'Income' THEN
                        CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4))
                      WHEN ${g_l_account.account_category} IN ('Expense', 'Cost of Goods Sold') THEN
                        CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4))
                      ELSE 0
                    END
                  ELSE 0
                END
              ELSE 0
            END
          ), 0)
          FROM BUSINESS_CENTRAL.G_L_ENTRY e
          WHERE e."G_LACCOUNT_NO" = ${g_l_account.no}
            AND e."COMPANY_ID" = ${g_l_account.company_id}
            AND e."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month'
        )
      `,
      type: `number`,
      format: `currency`,
      title: `Closing Balance`
    },
    
    // YTD Totals (Fiscal Year to Date)
    {
      name: `ytd_debit_amount`,
      sql: `
        (
          SELECT COALESCE(SUM(CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4))), 0)
          FROM BUSINESS_CENTRAL.G_L_ENTRY e
          WHERE e."G_LACCOUNT_NO" = ${g_l_account.no}
            AND e."COMPANY_ID" = ${g_l_account.company_id}
            AND e."POSTING_DATE" >= 
              CASE 
                WHEN EXTRACT(MONTH FROM CURRENT_DATE) >= 4
                THEN DATE(EXTRACT(YEAR FROM CURRENT_DATE)::TEXT || '-04-01')
                ELSE DATE((EXTRACT(YEAR FROM CURRENT_DATE) - 1)::TEXT || '-04-01')
              END
            AND e."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month'
        )
      `,
      type: `number`,
      format: `currency`,
      title: `YTD Debits`
    },
    
    {
      name: `ytd_credit_amount`,
      sql: `
        (
          SELECT COALESCE(SUM(CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4))), 0)
          FROM BUSINESS_CENTRAL.G_L_ENTRY e
          WHERE e."G_LACCOUNT_NO" = ${g_l_account.no}
            AND e."COMPANY_ID" = ${g_l_account.company_id}
            AND e."POSTING_DATE" >= 
              CASE 
                WHEN EXTRACT(MONTH FROM CURRENT_DATE) >= 4
                THEN DATE(EXTRACT(YEAR FROM CURRENT_DATE)::TEXT || '-04-01')
                ELSE DATE((EXTRACT(YEAR FROM CURRENT_DATE) - 1)::TEXT || '-04-01')
              END
            AND e."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month'
        )
      `,
      type: `number`,
      format: `currency`,
      title: `YTD Credits`
    },
    
    {
      name: `ytd_net_change`,
      sql: `
        (
          SELECT COALESCE(SUM(
            CASE 
              WHEN ${g_l_account.account_category} IN ('Assets', 'Expense', 'Cost of Goods Sold') THEN
                CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4))
              WHEN ${g_l_account.account_category} IN ('Liabilities', 'Equity', 'Income') THEN
                CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4))
              ELSE 0
            END
          ), 0)
          FROM BUSINESS_CENTRAL.G_L_ENTRY e
          WHERE e."G_LACCOUNT_NO" = ${g_l_account.no}
            AND e."COMPANY_ID" = ${g_l_account.company_id}
            AND e."POSTING_DATE" >= 
              CASE 
                WHEN EXTRACT(MONTH FROM CURRENT_DATE) >= 4
                THEN DATE(EXTRACT(YEAR FROM CURRENT_DATE)::TEXT || '-04-01')
                ELSE DATE((EXTRACT(YEAR FROM CURRENT_DATE) - 1)::TEXT || '-04-01')
              END
            AND e."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month'
        )
      `,
      type: `number`,
      format: `currency`,
      title: `YTD Net Change`
    },
    
    // Period-end Adjustments Indicator
    {
      name: `has_adjusting_entries`,
      sql: `
        (
          SELECT 
            CASE 
              WHEN COUNT(*) > 0 THEN 'Yes'
              ELSE 'No'
            END
          FROM BUSINESS_CENTRAL.G_L_ENTRY e
          WHERE e."G_LACCOUNT_NO" = ${g_l_account.no}
            AND e."COMPANY_ID" = ${g_l_account.company_id}
            AND e."POSTING_DATE" >= DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month' - INTERVAL '5 days'
            AND e."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month'
            AND (e."DESCRIPTION" ILIKE '%adjust%' OR e."DESCRIPTION" ILIKE '%accru%' OR e."DESCRIPTION" ILIKE '%reclass%')
        )
      `,
      type: `string`,
      title: `Has Adjusting Entries`
    },
    
    // Transaction Count for Period
    {
      name: `period_transaction_count`,
      sql: `
        (
          SELECT COUNT(*)
          FROM BUSINESS_CENTRAL.G_L_ENTRY e
          WHERE e."G_LACCOUNT_NO" = ${g_l_account.no}
            AND e."COMPANY_ID" = ${g_l_account.company_id}
            AND e."POSTING_DATE" >= DATE_TRUNC('month', CURRENT_DATE)
            AND e."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month'
        )
      `,
      type: `number`,
      title: `Period Transactions`
    },
    
    // Average Transaction Size
    {
      name: `avg_transaction_size`,
      sql: `
        (
          SELECT 
            CASE 
              WHEN COUNT(*) > 0 THEN
                ABS(SUM(CAST(e."AMOUNT" AS DECIMAL(19,4))) / COUNT(*))
              ELSE 0
            END
          FROM BUSINESS_CENTRAL.G_L_ENTRY e
          WHERE e."G_LACCOUNT_NO" = ${g_l_account.no}
            AND e."COMPANY_ID" = ${g_l_account.company_id}
            AND e."POSTING_DATE" >= DATE_TRUNC('month', CURRENT_DATE)
            AND e."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month'
        )
      `,
      type: `number`,
      format: `currency`,
      title: `Avg Transaction Size`
    },
    
    // Balance Validation Check
    {
      name: `balance_check`,
      sql: `
        (
          SELECT 
            CASE 
              WHEN ABS(
                -- Opening Balance
                (SELECT COALESCE(SUM(
                  CASE 
                    WHEN ${g_l_account.account_category} IN ('Assets', 'Expense', 'Cost of Goods Sold') THEN
                      CAST(e1."DEBIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e1."CREDIT_AMOUNT" AS DECIMAL(19,4))
                    WHEN ${g_l_account.account_category} IN ('Liabilities', 'Equity', 'Income') THEN
                      CAST(e1."CREDIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e1."DEBIT_AMOUNT" AS DECIMAL(19,4))
                    ELSE 0
                  END
                ), 0)
                FROM BUSINESS_CENTRAL.G_L_ENTRY e1
                WHERE e1."G_LACCOUNT_NO" = ${g_l_account.no}
                  AND e1."COMPANY_ID" = ${g_l_account.company_id}
                  AND e1."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE))
                +
                -- Net Change
                (SELECT COALESCE(SUM(
                  CASE 
                    WHEN ${g_l_account.account_category} IN ('Assets', 'Expense', 'Cost of Goods Sold') THEN
                      CAST(e2."DEBIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e2."CREDIT_AMOUNT" AS DECIMAL(19,4))
                    WHEN ${g_l_account.account_category} IN ('Liabilities', 'Equity', 'Income') THEN
                      CAST(e2."CREDIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e2."DEBIT_AMOUNT" AS DECIMAL(19,4))
                    ELSE 0
                  END
                ), 0)
                FROM BUSINESS_CENTRAL.G_L_ENTRY e2
                WHERE e2."G_LACCOUNT_NO" = ${g_l_account.no}
                  AND e2."COMPANY_ID" = ${g_l_account.company_id}
                  AND e2."POSTING_DATE" >= DATE_TRUNC('month', CURRENT_DATE)
                  AND e2."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month')
                -
                -- Closing Balance
                (SELECT COALESCE(SUM(
                  CASE 
                    WHEN ${g_l_account.account_category} IN ('Assets', 'Expense', 'Cost of Goods Sold') THEN
                      CAST(e3."DEBIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e3."CREDIT_AMOUNT" AS DECIMAL(19,4))
                    WHEN ${g_l_account.account_category} IN ('Liabilities', 'Equity', 'Income') THEN
                      CAST(e3."CREDIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e3."DEBIT_AMOUNT" AS DECIMAL(19,4))
                    ELSE 0
                  END
                ), 0)
                FROM BUSINESS_CENTRAL.G_L_ENTRY e3
                WHERE e3."G_LACCOUNT_NO" = ${g_l_account.no}
                  AND e3."COMPANY_ID" = ${g_l_account.company_id}
                  AND e3."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month')
              ) < 0.01 THEN 'Balanced'
              ELSE 'Imbalanced'
            END
        )
      `,
      type: `string`,
      title: `Balance Check`
    },
    
    // Fiscal Period Information
    {
      name: `fiscal_year`,
      sql: `
        CASE 
          WHEN EXTRACT(MONTH FROM CURRENT_DATE) >= 4
          THEN EXTRACT(YEAR FROM CURRENT_DATE) + 1
          ELSE EXTRACT(YEAR FROM CURRENT_DATE)
        END
      `,
      type: `string`,
      title: `Fiscal Year`
    },
    
    {
      name: `fiscal_period`,
      sql: `
        CASE 
          WHEN EXTRACT(MONTH FROM CURRENT_DATE) >= 4
          THEN 'P' || LPAD((EXTRACT(MONTH FROM CURRENT_DATE) - 3)::TEXT, 2, '0')
          ELSE 'P' || LPAD((EXTRACT(MONTH FROM CURRENT_DATE) + 9)::TEXT, 2, '0')
        END
      `,
      type: `string`,
      title: `Fiscal Period`
    },
    
    {
      name: `calendar_month`,
      sql: `TO_CHAR(CURRENT_DATE, 'YYYY-MM')`,
      type: `string`,
      title: `Calendar Month`
    },
    
    // Account Classification
    {
      name: `financial_statement`,
      sql: `
        CASE 
          WHEN ${g_l_account.account_category} IN ('Assets', 'Liabilities', 'Equity') THEN 'Balance Sheet'
          WHEN ${g_l_account.account_category} IN ('Income', 'Expense', 'Cost of Goods Sold') THEN 'Income Statement'
          ELSE 'Other'
        END
      `,
      type: `string`,
      title: `Financial Statement`
    },
    
    {
      name: `normal_balance`,
      sql: `
        CASE 
          WHEN ${g_l_account.account_category} IN ('Assets', 'Expense', 'Cost of Goods Sold') THEN 'Debit'
          WHEN ${g_l_account.account_category} IN ('Liabilities', 'Equity', 'Income') THEN 'Credit'
          ELSE 'N/A'
        END
      `,
      type: `string`,
      title: `Normal Balance`
    }
  ],
  
  segments: {
    // Account Category Segments
    balance_sheet_accounts: {
      sql: `${g_l_account.account_category} IN ('Assets', 'Liabilities', 'Equity')`,
      title: `Balance Sheet Accounts`
    },
    
    income_statement_accounts: {
      sql: `${g_l_account.account_category} IN ('Income', 'Expense', 'Cost of Goods Sold')`,
      title: `Income Statement Accounts`
    },
    
    assets: {
      sql: `${g_l_account.account_category} = 'Assets'`,
      title: `Asset Accounts`
    },
    
    liabilities: {
      sql: `${g_l_account.account_category} = 'Liabilities'`,
      title: `Liability Accounts`
    },
    
    equity: {
      sql: `${g_l_account.account_category} = 'Equity'`,
      title: `Equity Accounts`
    },
    
    revenue: {
      sql: `${g_l_account.account_category} = 'Income'`,
      title: `Revenue Accounts`
    },
    
    expenses: {
      sql: `${g_l_account.account_category} IN ('Expense', 'Cost of Goods Sold')`,
      title: `Expense Accounts`
    },
    
    // Account Type Segments
    posting_accounts_only: {
      sql: `${g_l_account.account_type} = 'Posting'`,
      title: `Posting Accounts Only`
    },
    
    active_accounts: {
      sql: `${g_l_account.blocked} = false AND ${g_l_account.direct_posting} = true`,
      title: `Active Accounts`
    },
    
    // Balance Segments
    accounts_with_activity: {
      sql: `EXISTS (
        SELECT 1 
        FROM BUSINESS_CENTRAL.G_L_ENTRY e 
        WHERE e."G_LACCOUNT_NO" = ${g_l_account.no}
          AND e."COMPANY_ID" = ${g_l_account.company_id}
          AND e."POSTING_DATE" >= DATE_TRUNC('month', CURRENT_DATE)
          AND e."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month'
      )`,
      title: `Accounts with Period Activity`
    },
    
    accounts_with_balance: {
      sql: `EXISTS (
        SELECT 1 
        FROM BUSINESS_CENTRAL.G_L_ENTRY e 
        WHERE e."G_LACCOUNT_NO" = ${g_l_account.no}
          AND e."COMPANY_ID" = ${g_l_account.company_id}
        HAVING ABS(SUM(CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4)))) > 0.01
      )`,
      title: `Accounts with Balance`
    },
    
    // Reconciliation Segments
    unreconciled_accounts: {
      sql: `${g_l_account.reconciliation_account} = true`,
      title: `Reconciliation Accounts`
    },
    
    accounts_with_adjustments: {
      sql: `EXISTS (
        SELECT 1 
        FROM BUSINESS_CENTRAL.G_L_ENTRY e 
        WHERE e."G_LACCOUNT_NO" = ${g_l_account.no}
          AND e."COMPANY_ID" = ${g_l_account.company_id}
          AND e."POSTING_DATE" >= DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month' - INTERVAL '5 days'
          AND e."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month'
          AND (e."DESCRIPTION" ILIKE '%adjust%' OR e."DESCRIPTION" ILIKE '%accru%')
      )`,
      title: `Accounts with Period-End Adjustments`
    }
  }
});