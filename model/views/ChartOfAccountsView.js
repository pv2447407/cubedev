// Chart of Accounts View
// Comprehensive account structure with balance calculations and posting integrity analysis

view(`chart_of_accounts_view`, {
  description: `Complete Chart of Accounts view with balances, net changes, and posting integrity analysis`,
  
  includes: [
    // Include all fields from g_l_account
    g_l_account.no,
    g_l_account.name,
    g_l_account.account_type,
    g_l_account.account_category,
    g_l_account.account_subcategory_descript,
    g_l_account.income_balance,
    g_l_account.direct_posting,
    g_l_account.blocked,
    g_l_account.reconciliation_account,
    g_l_account.gen_bus_posting_group,
    g_l_account.gen_prod_posting_group,
    g_l_account.vat_bus_posting_group,
    g_l_account.vat_prod_posting_group,
    g_l_account.tax_liable,
    g_l_account.tax_area_code,
    g_l_account.company_id,
    
    // Custom measures that use SQL subqueries to avoid join issues
    {
      name: `balance`,
      sql: `
        (
          SELECT COALESCE(SUM(
            CASE 
              WHEN ${g_l_account.account_category} IN ('Assets', 'Liabilities', 'Equity') THEN
                CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4))
              WHEN ${g_l_account.account_category} IN ('Income', 'Cost of Goods Sold', 'Expense') THEN
                CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4))
              ELSE 0
            END
          ), 0)
          FROM BUSINESS_CENTRAL.G_L_ENTRY e
          WHERE e."G_LACCOUNT_NO" = ${g_l_account.no}
            AND e."COMPANY_ID" = ${g_l_account.company_id}
        )
      `,
      type: `number`,
      format: `currency`,
      title: `Current Balance`
    },
    
    {
      name: `debit_balance`,
      sql: `
        (
          SELECT COALESCE(SUM(CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4))), 0)
          FROM BUSINESS_CENTRAL.G_L_ENTRY e
          WHERE e."G_LACCOUNT_NO" = ${g_l_account.no}
            AND e."COMPANY_ID" = ${g_l_account.company_id}
        )
      `,
      type: `number`,
      format: `currency`,
      title: `Total Debits`
    },
    
    {
      name: `credit_balance`,
      sql: `
        (
          SELECT COALESCE(SUM(CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4))), 0)
          FROM BUSINESS_CENTRAL.G_L_ENTRY e
          WHERE e."G_LACCOUNT_NO" = ${g_l_account.no}
            AND e."COMPANY_ID" = ${g_l_account.company_id}
        )
      `,
      type: `number`,
      format: `currency`,
      title: `Total Credits`
    },
    
    {
      name: `net_change`,
      sql: `
        (
          SELECT COALESCE(SUM(
            CASE 
              WHEN e."POSTING_DATE" >= DATE_TRUNC('month', CURRENT_DATE) THEN
                CASE 
                  WHEN ${g_l_account.account_category} IN ('Assets', 'Liabilities', 'Equity') THEN
                    CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4))
                  WHEN ${g_l_account.account_category} IN ('Income', 'Cost of Goods Sold', 'Expense') THEN
                    CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4))
                  ELSE 0
                END
              ELSE 0
            END
          ), 0)
          FROM BUSINESS_CENTRAL.G_L_ENTRY e
          WHERE e."G_LACCOUNT_NO" = ${g_l_account.no}
            AND e."COMPANY_ID" = ${g_l_account.company_id}
        )
      `,
      type: `number`,
      format: `currency`,
      title: `Net Change (Current Period)`
    },
    
    {
      name: `net_change_ytd`,
      sql: `
        (
          SELECT COALESCE(SUM(
            CASE 
              WHEN EXTRACT(YEAR FROM e."POSTING_DATE") = EXTRACT(YEAR FROM CURRENT_DATE) THEN
                CASE 
                  WHEN ${g_l_account.account_category} IN ('Assets', 'Liabilities', 'Equity') THEN
                    CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4))
                  WHEN ${g_l_account.account_category} IN ('Income', 'Cost of Goods Sold', 'Expense') THEN
                    CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4))
                  ELSE 0
                END
              ELSE 0
            END
          ), 0)
          FROM BUSINESS_CENTRAL.G_L_ENTRY e
          WHERE e."G_LACCOUNT_NO" = ${g_l_account.no}
            AND e."COMPANY_ID" = ${g_l_account.company_id}
        )
      `,
      type: `number`,
      format: `currency`,
      title: `YTD Net Change`
    },
    
    {
      name: `transaction_count`,
      sql: `
        (
          SELECT COUNT(DISTINCT e."ENTRY_NO")
          FROM BUSINESS_CENTRAL.G_L_ENTRY e
          WHERE e."G_LACCOUNT_NO" = ${g_l_account.no}
            AND e."COMPANY_ID" = ${g_l_account.company_id}
        )
      `,
      type: `number`,
      title: `Transaction Count`
    },
    
    {
      name: `days_since_last_activity`,
      sql: `
        (
          SELECT COALESCE(DATEDIFF(day, MAX(e."POSTING_DATE"), CURRENT_DATE), 999)
          FROM BUSINESS_CENTRAL.G_L_ENTRY e
          WHERE e."G_LACCOUNT_NO" = ${g_l_account.no}
            AND e."COMPANY_ID" = ${g_l_account.company_id}
        )
      `,
      type: `number`,
      title: `Days Since Last Activity`
    },
    
    {
      name: `average_transaction_amount`,
      sql: `
        (
          SELECT 
            CASE 
              WHEN COUNT(DISTINCT e."ENTRY_NO") > 0 THEN
                ABS(SUM(CAST(e."AMOUNT" AS DECIMAL(19,4))) / COUNT(DISTINCT e."ENTRY_NO"))
              ELSE 0
            END
          FROM BUSINESS_CENTRAL.G_L_ENTRY e
          WHERE e."G_LACCOUNT_NO" = ${g_l_account.no}
            AND e."COMPANY_ID" = ${g_l_account.company_id}
        )
      `,
      type: `number`,
      format: `currency`,
      title: `Average Transaction Amount`
    },
    
    {
      name: `posting_integrity_score`,
      sql: `
        CASE 
          WHEN ${g_l_account.direct_posting} = false AND EXISTS (
            SELECT 1 FROM BUSINESS_CENTRAL.G_L_ENTRY e 
            WHERE e."G_LACCOUNT_NO" = ${g_l_account.no} 
              AND e."COMPANY_ID" = ${g_l_account.company_id}
          ) THEN 0
          WHEN ${g_l_account.blocked} = true AND EXISTS (
            SELECT 1 FROM BUSINESS_CENTRAL.G_L_ENTRY e 
            WHERE e."G_LACCOUNT_NO" = ${g_l_account.no} 
              AND e."COMPANY_ID" = ${g_l_account.company_id}
          ) THEN 0
          WHEN ${g_l_account.account_type} = 'Heading' AND EXISTS (
            SELECT 1 FROM BUSINESS_CENTRAL.G_L_ENTRY e 
            WHERE e."G_LACCOUNT_NO" = ${g_l_account.no} 
              AND e."COMPANY_ID" = ${g_l_account.company_id}
          ) THEN 0
          ELSE 100
        END
      `,
      type: `number`,
      title: `Posting Integrity Score`
    },
    
    {
      name: `has_unbalanced_entries`,
      sql: `
        (
          SELECT 
            CASE 
              WHEN ABS(
                SUM(CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4))) - 
                SUM(CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4)))
              ) > 0.01 THEN 'Yes'
              ELSE 'No'
            END
          FROM BUSINESS_CENTRAL.G_L_ENTRY e
          WHERE e."G_LACCOUNT_NO" = ${g_l_account.no}
            AND e."COMPANY_ID" = ${g_l_account.company_id}
        )
      `,
      type: `string`,
      title: `Has Unbalanced Entries`
    },
    
    // Fiscal year calculations
    {
      name: `current_fiscal_year_balance`,
      sql: `
        (
          SELECT COALESCE(SUM(
            CASE 
              WHEN (
                CASE 
                  WHEN EXTRACT(MONTH FROM e."POSTING_DATE") >= 4
                  THEN EXTRACT(YEAR FROM e."POSTING_DATE") + 1
                  ELSE EXTRACT(YEAR FROM e."POSTING_DATE")
                END
              ) = (
                CASE 
                  WHEN EXTRACT(MONTH FROM CURRENT_DATE) >= 4
                  THEN EXTRACT(YEAR FROM CURRENT_DATE) + 1
                  ELSE EXTRACT(YEAR FROM CURRENT_DATE)
                END
              ) THEN
                CASE 
                  WHEN ${g_l_account.account_category} IN ('Assets', 'Liabilities', 'Equity') THEN
                    CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4))
                  WHEN ${g_l_account.account_category} IN ('Income', 'Cost of Goods Sold', 'Expense') THEN
                    CAST(e."CREDIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e."DEBIT_AMOUNT" AS DECIMAL(19,4))
                  ELSE 0
                END
              ELSE 0
            END
          ), 0)
          FROM BUSINESS_CENTRAL.G_L_ENTRY e
          WHERE e."G_LACCOUNT_NO" = ${g_l_account.no}
            AND e."COMPANY_ID" = ${g_l_account.company_id}
        )
      `,
      type: `number`,
      format: `currency`,
      title: `Current Fiscal Year Balance`
    },
    
    // Derived dimensions
    {
      name: `account_status`,
      sql: `
        CASE 
          WHEN ${g_l_account.blocked} = true THEN 'Blocked'
          WHEN ${g_l_account.direct_posting} = false THEN 'No Direct Posting'
          ELSE 'Active'
        END
      `,
      type: `string`,
      title: `Account Status`
    },
    
    {
      name: `account_classification`,
      sql: `
        CASE 
          WHEN ${g_l_account.reconciliation_account} = true THEN 'Reconciliation'
          WHEN ${g_l_account.account_type} = 'Heading' THEN 'Heading'
          WHEN ${g_l_account.account_type} = 'Total' THEN 'Total'
          WHEN ${g_l_account.account_type} = 'Begin-Total' THEN 'Begin-Total'
          WHEN ${g_l_account.account_type} = 'End-Total' THEN 'End-Total'
          ELSE 'Posting'
        END
      `,
      type: `string`,
      title: `Account Classification`
    },
    
    {
      name: `normal_balance_side`,
      sql: `
        CASE 
          WHEN ${g_l_account.account_category} IN ('Assets', 'Expense', 'Cost of Goods Sold') THEN 'Debit'
          WHEN ${g_l_account.account_category} IN ('Liabilities', 'Equity', 'Income') THEN 'Credit'
          ELSE 'N/A'
        END
      `,
      type: `string`,
      title: `Normal Balance Side`
    },
    
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
    }
  ],
  
  segments: {
    // Account Category Segments
    assets: {
      sql: `${g_l_account.account_category} = 'Assets'`,
      title: `Assets`
    },
    
    liabilities: {
      sql: `${g_l_account.account_category} = 'Liabilities'`,
      title: `Liabilities`
    },
    
    equity: {
      sql: `${g_l_account.account_category} = 'Equity'`,
      title: `Equity`
    },
    
    income: {
      sql: `${g_l_account.account_category} = 'Income'`,
      title: `Income`
    },
    
    expense: {
      sql: `${g_l_account.account_category} = 'Expense'`,
      title: `Expense`
    },
    
    cogs: {
      sql: `${g_l_account.account_category} = 'Cost of Goods Sold'`,
      title: `Cost of Goods Sold`
    },
    
    // Balance Sheet vs Income Statement
    
    balance_sheet_accounts: {
      sql: `${g_l_account.account_category} IN ('Assets', 'Liabilities', 'Equity')`,
      title: `Balance Sheet Accounts`
    },
    
    income_statement_accounts: {
      sql: `${g_l_account.account_category} IN ('Income', 'Expense', 'Cost of Goods Sold')`,
      title: `Income Statement Accounts`
    },
    
    // Account Type Segments
    
    posting_accounts: {
      sql: `${g_l_account.account_type} = 'Posting'`,
      title: `Posting Accounts`
    },
    
    heading_accounts: {
      sql: `${g_l_account.account_type} = 'Heading'`,
      title: `Heading Accounts`
    },
    
    total_accounts: {
      sql: `${g_l_account.account_type} IN ('Total', 'Begin-Total', 'End-Total')`,
      title: `Total Accounts`
    },
    
    // Status Segments
    
    active_accounts: {
      sql: `${g_l_account.blocked} = false AND ${g_l_account.direct_posting} = true`,
      title: `Active Accounts`
    },
    
    blocked_accounts: {
      sql: `${g_l_account.blocked} = true`,
      title: `Blocked Accounts`
    },
    
    reconciliation_accounts: {
      sql: `${g_l_account.reconciliation_account} = true`,
      title: `Reconciliation Accounts`
    },
    
    // Activity Segments
    
    active_in_current_period: {
      sql: `EXISTS (
        SELECT 1 FROM BUSINESS_CENTRAL.G_L_ENTRY e 
        WHERE e."G_LACCOUNT_NO" = ${g_l_account.no} 
        AND e."COMPANY_ID" = ${g_l_account.company_id}
        AND e."POSTING_DATE" >= DATE_TRUNC('month', CURRENT_DATE)
      )`,
      title: `Active in Current Period`
    },
    
    inactive_accounts: {
      sql: `NOT EXISTS (
        SELECT 1 FROM BUSINESS_CENTRAL.G_L_ENTRY e 
        WHERE e."G_LACCOUNT_NO" = ${g_l_account.no} 
        AND e."COMPANY_ID" = ${g_l_account.company_id}
        AND e."POSTING_DATE" >= DATEADD(month, -3, CURRENT_DATE)
      )`,
      title: `Inactive Accounts (90+ days)`
    }
  }
});