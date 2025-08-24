// Period-End Reconciliation View
// Specialized view for month-end and year-end closing processes
// Includes variance analysis, reconciliation status, and audit trails

view(`period_end_reconciliation_view`, {
  description: `Period-end reconciliation and closing view with variance analysis and audit trails`,
  
  includes: [
    // Base account information
    g_l_account.no,
    g_l_account.name,
    g_l_account.account_category,
    g_l_account.reconciliation_account,
    g_l_account.company_id,
    
    // Current Period Balances
    {
      name: `current_period_balance`,
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
      title: `Current Period Balance`
    },
    
    // Prior Period Balance (Same Period Last Year)
    {
      name: `prior_year_period_balance`,
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
            AND e."POSTING_DATE" >= DATE_TRUNC('month', CURRENT_DATE) - INTERVAL '1 year'
            AND e."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) - INTERVAL '1 year' + INTERVAL '1 month'
        )
      `,
      type: `number`,
      format: `currency`,
      title: `Prior Year Same Period`
    },
    
    // Year-over-Year Variance
    {
      name: `yoy_variance`,
      sql: `
        (
          SELECT 
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
              AND e1."POSTING_DATE" >= DATE_TRUNC('month', CURRENT_DATE)
              AND e1."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month')
            -
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
              AND e2."POSTING_DATE" >= DATE_TRUNC('month', CURRENT_DATE) - INTERVAL '1 year'
              AND e2."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) - INTERVAL '1 year' + INTERVAL '1 month')
        )
      `,
      type: `number`,
      format: `currency`,
      title: `YoY Variance`
    },
    
    // YoY Variance Percentage
    {
      name: `yoy_variance_pct`,
      sql: `
        (
          SELECT 
            CASE 
              WHEN ABS(COALESCE(SUM(
                CASE 
                  WHEN ${g_l_account.account_category} IN ('Assets', 'Expense', 'Cost of Goods Sold') THEN
                    CAST(e2."DEBIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e2."CREDIT_AMOUNT" AS DECIMAL(19,4))
                  WHEN ${g_l_account.account_category} IN ('Liabilities', 'Equity', 'Income') THEN
                    CAST(e2."CREDIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e2."DEBIT_AMOUNT" AS DECIMAL(19,4))
                  ELSE 0
                END
              ), 0)) > 0.01 THEN
                ((SELECT COALESCE(SUM(
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
                  AND e1."POSTING_DATE" >= DATE_TRUNC('month', CURRENT_DATE)
                  AND e1."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month')
                -
                (SELECT COALESCE(SUM(
                  CASE 
                    WHEN ${g_l_account.account_category} IN ('Assets', 'Expense', 'Cost of Goods Sold') THEN
                      CAST(e2."DEBIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e2."CREDIT_AMOUNT" AS DECIMAL(19,4))
                    WHEN ${g_l_account.account_category} IN ('Liabilities', 'Equity', 'Income') THEN
                      CAST(e2."CREDIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e2."DEBIT_AMOUNT" AS DECIMAL(19,4))
                    ELSE 0
                  END
                ), 0))
                * 100.0 / 
                ABS(COALESCE(SUM(
                  CASE 
                    WHEN ${g_l_account.account_category} IN ('Assets', 'Expense', 'Cost of Goods Sold') THEN
                      CAST(e2."DEBIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e2."CREDIT_AMOUNT" AS DECIMAL(19,4))
                    WHEN ${g_l_account.account_category} IN ('Liabilities', 'Equity', 'Income') THEN
                      CAST(e2."CREDIT_AMOUNT" AS DECIMAL(19,4)) - CAST(e2."DEBIT_AMOUNT" AS DECIMAL(19,4))
                    ELSE 0
                  END
                ), 0.01))
              ELSE 0
            END
          FROM BUSINESS_CENTRAL.G_L_ENTRY e2
          WHERE e2."G_LACCOUNT_NO" = ${g_l_account.no}
            AND e2."COMPANY_ID" = ${g_l_account.company_id}
            AND e2."POSTING_DATE" >= DATE_TRUNC('month', CURRENT_DATE) - INTERVAL '1 year'
            AND e2."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) - INTERVAL '1 year' + INTERVAL '1 month'
        )
      `,
      type: `number`,
      format: `percent`,
      title: `YoY Variance %`
    },
    
    // Last 5 Days Activity (Period-End Adjustments)
    {
      name: `period_end_adjustments`,
      sql: `
        (
          SELECT COALESCE(SUM(ABS(CAST(e."AMOUNT" AS DECIMAL(19,4)))), 0)
          FROM BUSINESS_CENTRAL.G_L_ENTRY e
          WHERE e."G_LACCOUNT_NO" = ${g_l_account.no}
            AND e."COMPANY_ID" = ${g_l_account.company_id}
            AND e."POSTING_DATE" >= DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month' - INTERVAL '5 days'
            AND e."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month'
        )
      `,
      type: `number`,
      format: `currency`,
      title: `Period-End Adjustments`
    },
    
    // Reconciliation Status
    {
      name: `reconciliation_status`,
      sql: `
        CASE 
          WHEN ${g_l_account.reconciliation_account} = false THEN 'N/A'
          WHEN NOT EXISTS (
            SELECT 1 
            FROM BUSINESS_CENTRAL.G_L_ENTRY e
            WHERE e."G_LACCOUNT_NO" = ${g_l_account.no}
              AND e."COMPANY_ID" = ${g_l_account.company_id}
              AND e."POSTING_DATE" >= DATE_TRUNC('month', CURRENT_DATE)
              AND e."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month'
          ) THEN 'No Activity'
          WHEN EXISTS (
            SELECT 1 
            FROM BUSINESS_CENTRAL.G_L_ENTRY e
            WHERE e."G_LACCOUNT_NO" = ${g_l_account.no}
              AND e."COMPANY_ID" = ${g_l_account.company_id}
              AND e."POSTING_DATE" >= DATE_TRUNC('month', CURRENT_DATE)
              AND e."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month'
              AND e."DESCRIPTION" ILIKE '%reconcil%'
          ) THEN 'Reconciled'
          ELSE 'Pending'
        END
      `,
      type: `string`,
      title: `Reconciliation Status`
    },
    
    // Days Since Last Reconciliation
    {
      name: `days_since_reconciliation`,
      sql: `
        (
          SELECT COALESCE(
            DATEDIFF(
              day, 
              MAX(e."POSTING_DATE"), 
              CURRENT_DATE
            ), 
            999
          )
          FROM BUSINESS_CENTRAL.G_L_ENTRY e
          WHERE e."G_LACCOUNT_NO" = ${g_l_account.no}
            AND e."COMPANY_ID" = ${g_l_account.company_id}
            AND e."DESCRIPTION" ILIKE '%reconcil%'
        )
      `,
      type: `number`,
      title: `Days Since Reconciliation`
    },
    
    // Unusual Activity Flag
    {
      name: `unusual_activity_flag`,
      sql: `
        CASE 
          -- Check for unusual transaction volume
          WHEN (
            SELECT COUNT(*)
            FROM BUSINESS_CENTRAL.G_L_ENTRY e
            WHERE e."G_LACCOUNT_NO" = ${g_l_account.no}
              AND e."COMPANY_ID" = ${g_l_account.company_id}
              AND e."POSTING_DATE" >= DATE_TRUNC('month', CURRENT_DATE)
              AND e."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month'
          ) > 2 * (
            SELECT AVG(monthly_count)
            FROM (
              SELECT COUNT(*) as monthly_count
              FROM BUSINESS_CENTRAL.G_L_ENTRY e2
              WHERE e2."G_LACCOUNT_NO" = ${g_l_account.no}
                AND e2."COMPANY_ID" = ${g_l_account.company_id}
                AND e2."POSTING_DATE" >= DATE_TRUNC('month', CURRENT_DATE) - INTERVAL '3 months'
                AND e2."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE)
              GROUP BY DATE_TRUNC('month', e2."POSTING_DATE")
            ) avg_calc
          ) THEN 'High Volume'
          
          -- Check for large individual transactions
          WHEN EXISTS (
            SELECT 1
            FROM BUSINESS_CENTRAL.G_L_ENTRY e
            WHERE e."G_LACCOUNT_NO" = ${g_l_account.no}
              AND e."COMPANY_ID" = ${g_l_account.company_id}
              AND e."POSTING_DATE" >= DATE_TRUNC('month', CURRENT_DATE)
              AND e."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month'
              AND ABS(CAST(e."AMOUNT" AS DECIMAL(19,4))) > 5 * (
                SELECT AVG(ABS(CAST(e2."AMOUNT" AS DECIMAL(19,4))))
                FROM BUSINESS_CENTRAL.G_L_ENTRY e2
                WHERE e2."G_LACCOUNT_NO" = ${g_l_account.no}
                  AND e2."COMPANY_ID" = ${g_l_account.company_id}
                  AND e2."POSTING_DATE" >= DATE_TRUNC('month', CURRENT_DATE) - INTERVAL '3 months'
                  AND e2."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE)
              )
          ) THEN 'Large Transaction'
          
          -- Check for weekend/holiday postings
          WHEN EXISTS (
            SELECT 1
            FROM BUSINESS_CENTRAL.G_L_ENTRY e
            WHERE e."G_LACCOUNT_NO" = ${g_l_account.no}
              AND e."COMPANY_ID" = ${g_l_account.company_id}
              AND e."POSTING_DATE" >= DATE_TRUNC('month', CURRENT_DATE)
              AND e."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month'
              AND EXTRACT(DOW FROM e."POSTING_DATE") IN (0, 6)
          ) THEN 'Weekend Activity'
          
          ELSE 'Normal'
        END
      `,
      type: `string`,
      title: `Unusual Activity Flag`
    },
    
    // Closing Entry Required
    {
      name: `closing_entry_required`,
      sql: `
        CASE 
          WHEN ${g_l_account.account_category} IN ('Income', 'Expense', 'Cost of Goods Sold') 
            AND EXISTS (
              SELECT 1
              FROM BUSINESS_CENTRAL.G_L_ENTRY e
              WHERE e."G_LACCOUNT_NO" = ${g_l_account.no}
                AND e."COMPANY_ID" = ${g_l_account.company_id}
                AND e."POSTING_DATE" >= 
                  CASE 
                    WHEN EXTRACT(MONTH FROM CURRENT_DATE) >= 4
                    THEN DATE(EXTRACT(YEAR FROM CURRENT_DATE)::TEXT || '-04-01')
                    ELSE DATE((EXTRACT(YEAR FROM CURRENT_DATE) - 1)::TEXT || '-04-01')
                  END
            )
            AND EXTRACT(MONTH FROM CURRENT_DATE) = 3  -- March (fiscal year end)
          THEN 'Yes'
          ELSE 'No'
        END
      `,
      type: `string`,
      title: `Closing Entry Required`
    },
    
    // Last Modified Information
    {
      name: `last_entry_date`,
      sql: `
        (
          SELECT MAX(e."POSTING_DATE")
          FROM BUSINESS_CENTRAL.G_L_ENTRY e
          WHERE e."G_LACCOUNT_NO" = ${g_l_account.no}
            AND e."COMPANY_ID" = ${g_l_account.company_id}
        )
      `,
      type: `time`,
      title: `Last Entry Date`
    },
    
    {
      name: `last_entry_user`,
      sql: `
        (
          SELECT e."USER_ID"
          FROM BUSINESS_CENTRAL.G_L_ENTRY e
          WHERE e."G_LACCOUNT_NO" = ${g_l_account.no}
            AND e."COMPANY_ID" = ${g_l_account.company_id}
          ORDER BY e."ENTRY_NO" DESC
          LIMIT 1
        )
      `,
      type: `string`,
      title: `Last Entry User`
    },
    
    // Audit Trail Count
    {
      name: `audit_entry_count`,
      sql: `
        (
          SELECT COUNT(*)
          FROM BUSINESS_CENTRAL.G_L_ENTRY e
          WHERE e."G_LACCOUNT_NO" = ${g_l_account.no}
            AND e."COMPANY_ID" = ${g_l_account.company_id}
            AND e."POSTING_DATE" >= DATE_TRUNC('month', CURRENT_DATE)
            AND e."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month'
            AND (
              e."REVERSED" = true 
              OR e."REVERSED_ENTRY_NO" IS NOT NULL
              OR e."DESCRIPTION" ILIKE '%correct%'
              OR e."DESCRIPTION" ILIKE '%adjust%'
              OR e."DESCRIPTION" ILIKE '%revers%'
            )
        )
      `,
      type: `number`,
      title: `Audit Entry Count`
    }
  ],
  
  segments: {
    // Reconciliation Status Segments
    pending_reconciliation: {
      sql: `${g_l_account.reconciliation_account} = true AND EXISTS (
        SELECT 1 
        FROM BUSINESS_CENTRAL.G_L_ENTRY e
        WHERE e."G_LACCOUNT_NO" = ${g_l_account.no}
          AND e."COMPANY_ID" = ${g_l_account.company_id}
          AND e."POSTING_DATE" >= DATE_TRUNC('month', CURRENT_DATE)
          AND e."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month'
          AND NOT EXISTS (
            SELECT 1 
            FROM BUSINESS_CENTRAL.G_L_ENTRY e2
            WHERE e2."G_LACCOUNT_NO" = ${g_l_account.no}
              AND e2."COMPANY_ID" = ${g_l_account.company_id}
              AND e2."POSTING_DATE" >= DATE_TRUNC('month', CURRENT_DATE)
              AND e2."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month'
              AND e2."DESCRIPTION" ILIKE '%reconcil%'
          )
      )`,
      title: `Pending Reconciliation`
    },
    
    reconciled: {
      sql: `${g_l_account.reconciliation_account} = true AND EXISTS (
        SELECT 1 
        FROM BUSINESS_CENTRAL.G_L_ENTRY e
        WHERE e."G_LACCOUNT_NO" = ${g_l_account.no}
          AND e."COMPANY_ID" = ${g_l_account.company_id}
          AND e."POSTING_DATE" >= DATE_TRUNC('month', CURRENT_DATE)
          AND e."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month'
          AND e."DESCRIPTION" ILIKE '%reconcil%'
      )`,
      title: `Reconciled`
    },
    
    // Variance Segments
    significant_variance: {
      sql: `ABS(
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
          AND e1."POSTING_DATE" >= DATE_TRUNC('month', CURRENT_DATE)
          AND e1."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month')
        -
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
          AND e2."POSTING_DATE" >= DATE_TRUNC('month', CURRENT_DATE) - INTERVAL '1 year'
          AND e2."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) - INTERVAL '1 year' + INTERVAL '1 month')
      ) > 10000`,
      title: `Significant Variance (>10K)`
    },
    
    // Activity Segments
    has_adjustments: {
      sql: `EXISTS (
        SELECT 1
        FROM BUSINESS_CENTRAL.G_L_ENTRY e
        WHERE e."G_LACCOUNT_NO" = ${g_l_account.no}
          AND e."COMPANY_ID" = ${g_l_account.company_id}
          AND e."POSTING_DATE" >= DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month' - INTERVAL '5 days'
          AND e."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month'
      )`,
      title: `Has Period-End Adjustments`
    },
    
    seg_unusual_activity: {
      sql: `1=1`, // Placeholder - would use the unusual_activity_flag calculation
      title: `Has Unusual Activity Detected`
    },
    
    // Closing Required
    requires_closing: {
      sql: `${g_l_account.account_category} IN ('Income', 'Expense', 'Cost of Goods Sold') 
        AND EXTRACT(MONTH FROM CURRENT_DATE) = 3`,
      title: `Requires Closing Entry`
    }
  }
});