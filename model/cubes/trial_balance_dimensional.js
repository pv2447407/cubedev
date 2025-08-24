// Trial Balance Dimensional Cube
// Enhanced trial balance with dimensional filtering and period calculations
// Supports department, cost center, project, and other dimension analysis

cube(`trial_balance_dimensional`, {
  sql: `
    SELECT 
      a."NO" as account_no,
      a."NAME" as account_name,
      a."ACCOUNT_TYPE" as account_type,
      a."ACCOUNT_CATEGORY" as account_category,
      a."ACCOUNT_SUBCATEGORY_DESCRIPT" as subcategory,
      a."BLOCKED" as blocked,
      a."DIRECT_POSTING" as direct_posting,
      a."RECONCILIATION_ACCOUNT" as reconciliation_account,
      a."COMPANY_ID" as company_id,
      e."ENTRY_NO" as entry_no,
      e."POSTING_DATE" as posting_date,
      e."DOCUMENT_NO" as document_no,
      e."DESCRIPTION" as description,
      e."AMOUNT" as amount,
      e."DEBIT_AMOUNT" as debit_amount,
      e."CREDIT_AMOUNT" as credit_amount,
      e."DIMENSION_SET_ID" as dimension_set_id,
      e."GLOBAL_DIMENSION_1_CODE" as global_dimension_1_code,
      e."GLOBAL_DIMENSION_2_CODE" as global_dimension_2_code,
      e."BUSINESS_UNIT_CODE" as business_unit_code,
      e."SOURCE_CODE" as source_code,
      e."JOURNAL_BATCH_NAME" as journal_batch_name,
      e."REASON_CODE" as reason_code,
      e."REVERSED" as reversed,
      e."REVERSED_ENTRY_NO" as reversed_entry_no,
      
      -- Dimension Values
      d1."NAME" as dimension_1_name,
      d2."NAME" as dimension_2_name,
      bu."NAME" as business_unit_name,
      
      -- Fiscal Period Calculations
      CASE 
        WHEN EXTRACT(MONTH FROM e."POSTING_DATE") >= 4
        THEN EXTRACT(YEAR FROM e."POSTING_DATE") + 1
        ELSE EXTRACT(YEAR FROM e."POSTING_DATE")
      END as fiscal_year,
      
      CASE 
        WHEN EXTRACT(MONTH FROM e."POSTING_DATE") >= 4
        THEN EXTRACT(MONTH FROM e."POSTING_DATE") - 3
        ELSE EXTRACT(MONTH FROM e."POSTING_DATE") + 9
      END as fiscal_period_no,
      
      -- Period Classification
      CASE 
        WHEN e."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) THEN 'Prior'
        WHEN e."POSTING_DATE" >= DATE_TRUNC('month', CURRENT_DATE) 
         AND e."POSTING_DATE" < DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month' THEN 'Current'
        ELSE 'Future'
      END as period_classification,
      
      -- Adjustment Entry Indicator
      CASE 
        WHEN e."DESCRIPTION" ILIKE '%adjust%' 
          OR e."DESCRIPTION" ILIKE '%accru%' 
          OR e."DESCRIPTION" ILIKE '%reclass%'
          OR e."DESCRIPTION" ILIKE '%closing%'
          OR e."DESCRIPTION" ILIKE '%year-end%'
        THEN 'Yes'
        ELSE 'No'
      END as is_adjustment_entry
      
    FROM BUSINESS_CENTRAL.G_L_ACCOUNT a
    INNER JOIN BUSINESS_CENTRAL.G_L_ENTRY e 
      ON a."NO" = e."G_LACCOUNT_NO" 
      AND a."COMPANY_ID" = e."COMPANY_ID"
    LEFT JOIN BUSINESS_CENTRAL.DIMENSION_VALUE d1 
      ON e."GLOBAL_DIMENSION_1_CODE" = d1."CODE" 
      AND e."COMPANY_ID" = d1."COMPANY_ID"
      AND d1."DIMENSION_CODE" = (
        SELECT "GLOBAL_DIMENSION_1_CODE" 
        FROM BUSINESS_CENTRAL.GENERAL_LEDGER_SETUP 
        WHERE "COMPANY_ID" = e."COMPANY_ID"
      )
    LEFT JOIN BUSINESS_CENTRAL.DIMENSION_VALUE d2 
      ON e."GLOBAL_DIMENSION_2_CODE" = d2."CODE" 
      AND e."COMPANY_ID" = d2."COMPANY_ID"
      AND d2."DIMENSION_CODE" = (
        SELECT "GLOBAL_DIMENSION_2_CODE" 
        FROM BUSINESS_CENTRAL.GENERAL_LEDGER_SETUP 
        WHERE "COMPANY_ID" = e."COMPANY_ID"
      )
    LEFT JOIN BUSINESS_CENTRAL.BUSINESS_UNIT bu 
      ON e."BUSINESS_UNIT_CODE" = bu."CODE" 
      AND e."COMPANY_ID" = bu."COMPANY_ID"
  `,
  
  joins: {
    company: {
      relationship: `many_to_one`,
      sql: `${CUBE}.company_id = ${company}."ID"`
    },
    
    dimension_set_entry: {
      relationship: `one_to_many`,
      sql: `${CUBE}.dimension_set_id = ${dimension_set_entry}."DIMENSION_SET_ID" 
        AND ${CUBE}.company_id = ${dimension_set_entry}."COMPANY_ID"`
    }
  },
  
  measures: {
    // Opening Balance (before current period)
    opening_balance: {
      sql: `
        SUM(
          CASE 
            WHEN ${CUBE}.period_classification = 'Prior' THEN
              CASE 
                WHEN ${CUBE}.account_category IN ('Assets', 'Expense', 'Cost of Goods Sold') THEN
                  CAST(${CUBE}.debit_amount AS DECIMAL(19,4)) - CAST(${CUBE}.credit_amount AS DECIMAL(19,4))
                WHEN ${CUBE}.account_category IN ('Liabilities', 'Equity', 'Income') THEN
                  CAST(${CUBE}.credit_amount AS DECIMAL(19,4)) - CAST(${CUBE}.debit_amount AS DECIMAL(19,4))
                ELSE 0
              END
            ELSE 0
          END
        )
      `,
      type: `number`,
      format: `currency`,
      title: `Opening Balance`
    },
    
    // Period Movements
    period_debit: {
      sql: `
        SUM(
          CASE 
            WHEN ${CUBE}.period_classification = 'Current' THEN
              CAST(${CUBE}.debit_amount AS DECIMAL(19,4))
            ELSE 0
          END
        )
      `,
      type: `number`,
      format: `currency`,
      title: `Period Debit`
    },
    
    period_credit: {
      sql: `
        SUM(
          CASE 
            WHEN ${CUBE}.period_classification = 'Current' THEN
              CAST(${CUBE}.credit_amount AS DECIMAL(19,4))
            ELSE 0
          END
        )
      `,
      type: `number`,
      format: `currency`,
      title: `Period Credit`
    },
    
    net_change: {
      sql: `
        SUM(
          CASE 
            WHEN ${CUBE}.period_classification = 'Current' THEN
              CASE 
                WHEN ${CUBE}.account_category IN ('Assets', 'Expense', 'Cost of Goods Sold') THEN
                  CAST(${CUBE}.debit_amount AS DECIMAL(19,4)) - CAST(${CUBE}.credit_amount AS DECIMAL(19,4))
                WHEN ${CUBE}.account_category IN ('Liabilities', 'Equity', 'Income') THEN
                  CAST(${CUBE}.credit_amount AS DECIMAL(19,4)) - CAST(${CUBE}.debit_amount AS DECIMAL(19,4))
                ELSE 0
              END
            ELSE 0
          END
        )
      `,
      type: `number`,
      format: `currency`,
      title: `Net Change`
    },
    
    // Closing Balance
    closing_balance: {
      sql: `
        SUM(
          CASE 
            WHEN ${CUBE}.period_classification IN ('Prior', 'Current') THEN
              CASE 
                WHEN ${CUBE}.account_category IN ('Assets', 'Expense', 'Cost of Goods Sold') THEN
                  CAST(${CUBE}.debit_amount AS DECIMAL(19,4)) - CAST(${CUBE}.credit_amount AS DECIMAL(19,4))
                WHEN ${CUBE}.account_category IN ('Liabilities', 'Equity', 'Income') THEN
                  CAST(${CUBE}.credit_amount AS DECIMAL(19,4)) - CAST(${CUBE}.debit_amount AS DECIMAL(19,4))
                ELSE 0
              END
            ELSE 0
          END
        )
      `,
      type: `number`,
      format: `currency`,
      title: `Closing Balance`
    },
    
    // YTD Totals
    ytd_debit: {
      sql: `
        SUM(
          CASE 
            WHEN ${CUBE}.fiscal_year = (
              CASE 
                WHEN EXTRACT(MONTH FROM CURRENT_DATE) >= 4
                THEN EXTRACT(YEAR FROM CURRENT_DATE) + 1
                ELSE EXTRACT(YEAR FROM CURRENT_DATE)
              END
            ) AND ${CUBE}.period_classification IN ('Prior', 'Current') THEN
              CAST(${CUBE}.debit_amount AS DECIMAL(19,4))
            ELSE 0
          END
        )
      `,
      type: `number`,
      format: `currency`,
      title: `YTD Debit`
    },
    
    ytd_credit: {
      sql: `
        SUM(
          CASE 
            WHEN ${CUBE}.fiscal_year = (
              CASE 
                WHEN EXTRACT(MONTH FROM CURRENT_DATE) >= 4
                THEN EXTRACT(YEAR FROM CURRENT_DATE) + 1
                ELSE EXTRACT(YEAR FROM CURRENT_DATE)
              END
            ) AND ${CUBE}.period_classification IN ('Prior', 'Current') THEN
              CAST(${CUBE}.credit_amount AS DECIMAL(19,4))
            ELSE 0
          END
        )
      `,
      type: `number`,
      format: `currency`,
      title: `YTD Credit`
    },
    
    // Transaction Counts
    transaction_count: {
      sql: `COUNT(DISTINCT ${CUBE}.entry_no)`,
      type: `number`,
      title: `Transaction Count`
    },
    
    period_transaction_count: {
      sql: `
        COUNT(DISTINCT 
          CASE 
            WHEN ${CUBE}.period_classification = 'Current' THEN ${CUBE}.entry_no
            ELSE NULL
          END
        )
      `,
      type: `number`,
      title: `Period Transactions`
    },
    
    // Adjustment Entries
    adjustment_amount: {
      sql: `
        SUM(
          CASE 
            WHEN ${CUBE}.is_adjustment_entry = 'Yes' THEN
              ABS(CAST(${CUBE}.amount AS DECIMAL(19,4)))
            ELSE 0
          END
        )
      `,
      type: `number`,
      format: `currency`,
      title: `Adjustment Amount`
    },
    
    adjustment_count: {
      sql: `
        COUNT(DISTINCT 
          CASE 
            WHEN ${CUBE}.is_adjustment_entry = 'Yes' THEN ${CUBE}.entry_no
            ELSE NULL
          END
        )
      `,
      type: `number`,
      title: `Adjustment Entry Count`
    },
    
    // Reversed Entries
    reversed_amount: {
      sql: `
        SUM(
          CASE 
            WHEN ${CUBE}.reversed = true THEN
              ABS(CAST(${CUBE}.amount AS DECIMAL(19,4)))
            ELSE 0
          END
        )
      `,
      type: `number`,
      format: `currency`,
      title: `Reversed Amount`
    },
    
    // Account Count
    account_count: {
      sql: `COUNT(DISTINCT ${CUBE}.account_no)`,
      type: `number`,
      title: `Account Count`
    }
  },
  
  dimensions: {
    // Account Dimensions
    account_no: {
      sql: `${CUBE}.account_no`,
      type: `string`,
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
    
    // Global Dimensions
    global_dimension_1_code: {
      sql: `${CUBE}.global_dimension_1_code`,
      type: `string`,
      title: `Dimension 1 Code`
    },
    
    dimension_1_name: {
      sql: `${CUBE}.dimension_1_name`,
      type: `string`,
      title: `Dimension 1 Name`
    },
    
    global_dimension_2_code: {
      sql: `${CUBE}.global_dimension_2_code`,
      type: `string`,
      title: `Dimension 2 Code`
    },
    
    dimension_2_name: {
      sql: `${CUBE}.dimension_2_name`,
      type: `string`,
      title: `Dimension 2 Name`
    },
    
    business_unit_code: {
      sql: `${CUBE}.business_unit_code`,
      type: `string`,
      title: `Business Unit Code`
    },
    
    business_unit_name: {
      sql: `${CUBE}.business_unit_name`,
      type: `string`,
      title: `Business Unit Name`
    },
    
    // Time Dimensions
    posting_date: {
      sql: `${CUBE}.posting_date`,
      type: `time`,
      title: `Posting Date`
    },
    
    fiscal_year: {
      sql: `${CUBE}.fiscal_year`,
      type: `string`,
      title: `Fiscal Year`
    },
    
    fiscal_period_no: {
      sql: `${CUBE}.fiscal_period_no`,
      type: `number`,
      title: `Fiscal Period Number`
    },
    
    fiscal_period: {
      sql: `'P' || LPAD(${CUBE}.fiscal_period_no::TEXT, 2, '0')`,
      type: `string`,
      title: `Fiscal Period`
    },
    
    period_classification: {
      sql: `${CUBE}.period_classification`,
      type: `string`,
      title: `Period Classification`
    },
    
    // Transaction Dimensions
    entry_no: {
      sql: `${CUBE}.entry_no`,
      type: `number`,
      primaryKey: true,
      title: `Entry Number`
    },
    
    document_no: {
      sql: `${CUBE}.document_no`,
      type: `string`,
      title: `Document Number`
    },
    
    description: {
      sql: `${CUBE}.description`,
      type: `string`,
      title: `Description`
    },
    
    source_code: {
      sql: `${CUBE}.source_code`,
      type: `string`,
      title: `Source Code`
    },
    
    journal_batch_name: {
      sql: `${CUBE}.journal_batch_name`,
      type: `string`,
      title: `Journal Batch`
    },
    
    // Flags
    is_adjustment_entry: {
      sql: `${CUBE}.is_adjustment_entry`,
      type: `string`,
      title: `Is Adjustment Entry`
    },
    
    reversed: {
      sql: `${CUBE}.reversed`,
      type: `boolean`,
      title: `Reversed`
    },
    
    blocked: {
      sql: `${CUBE}.blocked`,
      type: `boolean`,
      title: `Account Blocked`
    },
    
    direct_posting: {
      sql: `${CUBE}.direct_posting`,
      type: `boolean`,
      title: `Direct Posting`
    },
    
    reconciliation_account: {
      sql: `${CUBE}.reconciliation_account`,
      type: `boolean`,
      title: `Reconciliation Account`
    },
    
    // Financial Statement Classification
    financial_statement: {
      sql: `
        CASE 
          WHEN ${CUBE}.account_category IN ('Assets', 'Liabilities', 'Equity') THEN 'Balance Sheet'
          WHEN ${CUBE}.account_category IN ('Income', 'Expense', 'Cost of Goods Sold') THEN 'Income Statement'
          ELSE 'Other'
        END
      `,
      type: `string`,
      title: `Financial Statement`
    },
    
    normal_balance: {
      sql: `
        CASE 
          WHEN ${CUBE}.account_category IN ('Assets', 'Expense', 'Cost of Goods Sold') THEN 'Debit'
          WHEN ${CUBE}.account_category IN ('Liabilities', 'Equity', 'Income') THEN 'Credit'
          ELSE 'N/A'
        END
      `,
      type: `string`,
      title: `Normal Balance`
    },
    
    company_id: {
      sql: `${CUBE}.company_id`,
      type: `string`
    }
  },
  
  segments: {
    // Financial Statement Segments
    balance_sheet: {
      sql: `${CUBE}.account_category IN ('Assets', 'Liabilities', 'Equity')`,
      title: `Balance Sheet`
    },
    
    income_statement: {
      sql: `${CUBE}.account_category IN ('Income', 'Expense', 'Cost of Goods Sold')`,
      title: `Income Statement`
    },
    
    // Account Category Segments
    assets: {
      sql: `${CUBE}.account_category = 'Assets'`,
      title: `Assets`
    },
    
    liabilities: {
      sql: `${CUBE}.account_category = 'Liabilities'`,
      title: `Liabilities`
    },
    
    equity: {
      sql: `${CUBE}.account_category = 'Equity'`,
      title: `Equity`
    },
    
    revenue: {
      sql: `${CUBE}.account_category = 'Income'`,
      title: `Revenue`
    },
    
    expenses: {
      sql: `${CUBE}.account_category IN ('Expense', 'Cost of Goods Sold')`,
      title: `Expenses`
    },
    
    // Period Segments
    current_period: {
      sql: `${CUBE}.period_classification = 'Current'`,
      title: `Current Period`
    },
    
    prior_periods: {
      sql: `${CUBE}.period_classification = 'Prior'`,
      title: `Prior Periods`
    },
    
    current_fiscal_year: {
      sql: `${CUBE}.fiscal_year = (
        CASE 
          WHEN EXTRACT(MONTH FROM CURRENT_DATE) >= 4
          THEN EXTRACT(YEAR FROM CURRENT_DATE) + 1
          ELSE EXTRACT(YEAR FROM CURRENT_DATE)
        END
      )`,
      title: `Current Fiscal Year`
    },
    
    // Account Type Segments
    posting_accounts: {
      sql: `${CUBE}.account_type = 'Posting'`,
      title: `Posting Accounts`
    },
    
    active_accounts: {
      sql: `${CUBE}.blocked = false AND ${CUBE}.direct_posting = true`,
      title: `Active Accounts`
    },
    
    reconciliation_accounts: {
      sql: `${CUBE}.reconciliation_account = true`,
      title: `Reconciliation Accounts`
    },
    
    // Entry Type Segments
    adjustment_entries: {
      sql: `${CUBE}.is_adjustment_entry = 'Yes'`,
      title: `Adjustment Entries`
    },
    
    reversed_entries: {
      sql: `${CUBE}.reversed = true`,
      title: `Reversed Entries`
    },
    
    // Dimension Segments
    has_dimension_1: {
      sql: `${CUBE}.global_dimension_1_code IS NOT NULL AND ${CUBE}.global_dimension_1_code != ''`,
      title: `Has Dimension 1`
    },
    
    has_dimension_2: {
      sql: `${CUBE}.global_dimension_2_code IS NOT NULL AND ${CUBE}.global_dimension_2_code != ''`,
      title: `Has Dimension 2`
    },
    
    has_business_unit: {
      sql: `${CUBE}.business_unit_code IS NOT NULL AND ${CUBE}.business_unit_code != ''`,
      title: `Has Business Unit`
    }
  },
  
  pre_aggregations: {
    // Monthly Trial Balance
    monthly_trial_balance: {
      measures: [
        opening_balance,
        period_debit,
        period_credit,
        net_change,
        closing_balance,
        transaction_count
      ],
      dimensions: [
        account_no,
        account_name,
        account_category,
        fiscal_year,
        fiscal_period,
        global_dimension_1_code,
        global_dimension_2_code,
        business_unit_code
      ],
      time_dimension: posting_date,
      granularity: `month`,
      partition_granularity: `quarter`,
      refresh_key: {
        every: `1 hour`,
        incremental: true,
        update_window: `7 day`
      }
    },
    
    // Daily Trial Balance for Current Month
    daily_trial_balance: {
      measures: [
        period_debit,
        period_credit,
        net_change,
        closing_balance,
        transaction_count
      ],
      dimensions: [
        account_no,
        account_name,
        account_category,
        global_dimension_1_code,
        global_dimension_2_code
      ],
      time_dimension: posting_date,
      granularity: `day`,
      refresh_key: {
        every: `30 minutes`,
        incremental: true,
        update_window: `1 day`
      }
    }
  }
});