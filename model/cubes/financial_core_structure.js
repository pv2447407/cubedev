// Core Financial Data Structure with Enhanced Relationships and Segments
// This file establishes the foundational cubes and joins for financial analysis

// Enhanced GL Account with Complete Relationships and Segments
cube(`g_l_account_enhanced`, {
  extends: g_l_account,
  
  joins: {
    company: {
      relationship: `many_to_one`,
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`
    },
    
    // GL Entry relationship - all entries for this account
    g_l_entry: {
      relationship: `one_to_many`,
      sql: `${CUBE}."NO" = ${g_l_entry}."G_LACCOUNT_NO" AND ${CUBE}."COMPANY_ID" = ${g_l_entry}."COMPANY_ID"`
    },
    
    // GL Budget Entry relationship - all budget entries for this account
    g_l_budget_entry: {
      relationship: `one_to_many`,
      sql: `${CUBE}."NO" = ${g_l_budget_entry}."G_L_ACCOUNT_NO" AND ${CUBE}."COMPANY_ID" = ${g_l_budget_entry}."COMPANY_ID"`
    },
    
    // Default Dimension relationship
    default_dimension: {
      relationship: `one_to_many`,
      sql: `${CUBE}."NO" = ${default_dimension}."NO" AND ${default_dimension}."TABLE_ID" = 15 AND ${CUBE}."COMPANY_ID" = ${default_dimension}."COMPANY_ID"`
    },
    
  },
  
  segments: {
    // Account Type Segments
    posting_accounts: {
      sql: `${CUBE}."ACCOUNT_TYPE" = 'Posting'`,
      title: `Posting Accounts Only`
    },
    
    heading_accounts: {
      sql: `${CUBE}."ACCOUNT_TYPE" = 'Heading'`,
      title: `Heading Accounts`
    },
    
    total_accounts: {
      sql: `${CUBE}."ACCOUNT_TYPE" IN ('Total', 'End-Total', 'Begin-Total')`,
      title: `Total/Subtotal Accounts`
    },
    
    // Account Category Segments
    assets: {
      sql: `${CUBE}."ACCOUNT_CATEGORY" = 'Assets'`,
      title: `Asset Accounts`
    },
    
    liabilities: {
      sql: `${CUBE}."ACCOUNT_CATEGORY" = 'Liabilities'`,
      title: `Liability Accounts`
    },
    
    equity: {
      sql: `${CUBE}."ACCOUNT_CATEGORY" = 'Equity'`,
      title: `Equity Accounts`
    },
    
    income: {
      sql: `${CUBE}."ACCOUNT_CATEGORY" = 'Income'`,
      title: `Income/Revenue Accounts`
    },
    
    cost_of_goods_sold: {
      sql: `${CUBE}."ACCOUNT_CATEGORY" = 'Cost of Goods Sold'`,
      title: `COGS Accounts`
    },
    
    expense: {
      sql: `${CUBE}."ACCOUNT_CATEGORY" = 'Expense'`,
      title: `Expense Accounts`
    },
    
    // Balance Sheet vs Income Statement
    balance_sheet_accounts: {
      sql: `${CUBE}."ACCOUNT_CATEGORY" IN ('Assets', 'Liabilities', 'Equity')`,
      title: `Balance Sheet Accounts`
    },
    
    income_statement_accounts: {
      sql: `${CUBE}."ACCOUNT_CATEGORY" IN ('Income', 'Cost of Goods Sold', 'Expense')`,
      title: `Income Statement Accounts`
    },
    
    // Account Status Segments
    active_accounts: {
      sql: `${CUBE}."BLOCKED" = false AND ${CUBE}."DIRECT_POSTING" = true`,
      title: `Active Posting Accounts`
    },
    
    blocked_accounts: {
      sql: `${CUBE}."BLOCKED" = true`,
      title: `Blocked Accounts`
    },
    
    reconciliation_accounts: {
      sql: `${CUBE}."RECONCILIATION_ACCOUNT" = true`,
      title: `Reconciliation Accounts`
    },
    
    // Tax-related Segments
    tax_liable_accounts: {
      sql: `${CUBE}."TAX_LIABLE" = true`,
      title: `Tax Liable Accounts`
    }
  }
});

// Enhanced GL Entry with Complete Relationships and Segments
cube(`g_l_entry_enhanced`, {
  extends: g_l_entry,
  
  joins: {
    company: {
      relationship: `many_to_one`,
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`
    },
    
    // GL Account relationship with extended account info
    g_l_account: {
      relationship: `many_to_one`,
      sql: `${CUBE}."G_LACCOUNT_NO" = ${g_l_account}."NO" AND ${CUBE}."COMPANY_ID" = ${g_l_account}."COMPANY_ID"`
    },
    
    // Dimension Set Entry relationship for dimensional analysis
    dimension_set_entry: {
      relationship: `one_to_many`,
      sql: `${CUBE}."DIMENSION_SET_ID" = ${dimension_set_entry}."DIMENSION_SET_ID" AND ${CUBE}."COMPANY_ID" = ${dimension_set_entry}."COMPANY_ID"`
    },
    
    // Customer relationship (when source is customer)
    customer: {
      relationship: `many_to_one`,
      sql: `${CUBE}."SOURCE_NO" = ${customer}."NO" AND ${CUBE}."SOURCE_TYPE" = 'Customer' AND ${CUBE}."COMPANY_ID" = ${customer}."COMPANY_ID"`
    },
    
    // Employee relationship (when source is employee)
    employee: {
      relationship: `many_to_one`,
      sql: `${CUBE}."SOURCE_NO" = ${employee}."NO" AND ${CUBE}."SOURCE_TYPE" = 'Employee' AND ${CUBE}."COMPANY_ID" = ${employee}."COMPANY_ID"`
    },
    
    // Bank Account relationship (via balance account)
    bank_account: {
      relationship: `many_to_one`,
      sql: `${CUBE}."BAL_ACCOUNT_NO" = ${bank_account}."NO" AND ${CUBE}."BAL_ACCOUNT_TYPE" = 'Bank Account' AND ${CUBE}."COMPANY_ID" = ${bank_account}."COMPANY_ID"`
    }
  },
  
  segments: {
    // Document Type Segments
    invoices: {
      sql: `${CUBE}."DOCUMENT_TYPE" = 'Invoice'`,
      title: `Invoice Entries`
    },
    
    payments: {
      sql: `${CUBE}."DOCUMENT_TYPE" = 'Payment'`,
      title: `Payment Entries`
    },
    
    credit_memos: {
      sql: `${CUBE}."DOCUMENT_TYPE" = 'Credit Memo'`,
      title: `Credit Memo Entries`
    },
    
    journal_entries: {
      sql: `${CUBE}."DOCUMENT_TYPE" = ' ' OR ${CUBE}."DOCUMENT_TYPE" IS NULL`,
      title: `Journal Entries`
    },
    
    // Source Type Segments
    customer_entries: {
      sql: `${CUBE}."SOURCE_TYPE" = 'Customer'`,
      title: `Customer-Related Entries`
    },
    
    vendor_entries: {
      sql: `${CUBE}."SOURCE_TYPE" = 'Vendor'`,
      title: `Vendor-Related Entries`
    },
    
    employee_entries: {
      sql: `${CUBE}."SOURCE_TYPE" = 'Employee'`,
      title: `Employee-Related Entries`
    },
    
    bank_entries: {
      sql: `${CUBE}."SOURCE_TYPE" = 'Bank Account'`,
      title: `Bank-Related Entries`
    },
    
    // Transaction Type Segments
    debit_entries: {
      sql: `CAST(${CUBE}."DEBIT_AMOUNT" AS DECIMAL(19,4)) > 0`,
      title: `Debit Entries`
    },
    
    credit_entries: {
      sql: `CAST(${CUBE}."CREDIT_AMOUNT" AS DECIMAL(19,4)) > 0`,
      title: `Credit Entries`
    },
    
    // Status Segments
    reversed_entries: {
      sql: `${CUBE}."REVERSED" = true`,
      title: `Reversed Entries`
    },
    
    active_entries: {
      sql: `${CUBE}."REVERSED" = false`,
      title: `Active (Non-Reversed) Entries`
    },
    
    system_created_entries: {
      sql: `${CUBE}."SYSTEM_CREATED_ENTRY" = true`,
      title: `System-Created Entries`
    },
    
    // Tax Segments
    tax_liable_entries: {
      sql: `${CUBE}."TAX_LIABLE" = true`,
      title: `Tax Liable Entries`
    },
    
    vat_entries: {
      sql: `CAST(${CUBE}."VAT_AMOUNT" AS DECIMAL(19,4)) != 0`,
      title: `Entries with VAT`
    },
    
    // Posting Group Segments
    general_posting_entries: {
      sql: `${CUBE}."GEN_BUS_POSTING_GROUP" IS NOT NULL OR ${CUBE}."GEN_PROD_POSTING_GROUP" IS NOT NULL`,
      title: `Entries with General Posting Groups`
    },
    
    vat_posting_entries: {
      sql: `${CUBE}."VAT_BUS_POSTING_GROUP" IS NOT NULL OR ${CUBE}."VAT_PROD_POSTING_GROUP" IS NOT NULL`,
      title: `Entries with VAT Posting Groups`
    }
  }
});

// Enhanced GL Budget Entry with Complete Relationships and Segments
cube(`g_l_budget_entry_enhanced`, {
  extends: g_l_budget_entry,
  
  joins: {
    company: {
      relationship: `many_to_one`,
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`
    },
    
    g_l_account: {
      relationship: `many_to_one`,
      sql: `${CUBE}."G_L_ACCOUNT_NO" = ${g_l_account}."NO" AND ${CUBE}."COMPANY_ID" = ${g_l_account}."COMPANY_ID"`
    },
    
    dimension_set_entry: {
      relationship: `one_to_many`,
      sql: `${CUBE}."DIMENSION_SET_ID" = ${dimension_set_entry}."DIMENSION_SET_ID" AND ${CUBE}."COMPANY_ID" = ${dimension_set_entry}."COMPANY_ID"`
    }
  },
  
  segments: {
    // Budget Name Segments
    current_year_budget: {
      sql: `${CUBE}."BUDGET_NAME" LIKE '%${new Date().getFullYear()}%'`,
      title: `Current Year Budget`
    },
    
    prior_year_budget: {
      sql: `${CUBE}."BUDGET_NAME" LIKE '%${new Date().getFullYear() - 1}%'`,
      title: `Prior Year Budget`
    },
    
    working_budget: {
      sql: `${CUBE}."BUDGET_NAME" LIKE '%WORKING%' OR ${CUBE}."BUDGET_NAME" LIKE '%WIP%'`,
      title: `Working Budget`
    },
    
    approved_budget: {
      sql: `${CUBE}."BUDGET_NAME" LIKE '%APPROVED%' OR ${CUBE}."BUDGET_NAME" LIKE '%FINAL%'`,
      title: `Approved Budget`
    },
    
    forecast_budget: {
      sql: `${CUBE}."BUDGET_NAME" LIKE '%FORECAST%' OR ${CUBE}."BUDGET_NAME" LIKE '%FCST%'`,
      title: `Forecast Budget`
    },
    
    // Dimension-based Segments
    has_business_unit: {
      sql: `${CUBE}."BUSINESS_UNIT_CODE" IS NOT NULL AND ${CUBE}."BUSINESS_UNIT_CODE" != ''`,
      title: `Budget with Business Unit`
    },
    
    has_global_dimension_1: {
      sql: `${CUBE}."GLOBAL_DIMENSION_1_CODE" IS NOT NULL AND ${CUBE}."GLOBAL_DIMENSION_1_CODE" != ''`,
      title: `Budget with Global Dimension 1`
    },
    
    has_global_dimension_2: {
      sql: `${CUBE}."GLOBAL_DIMENSION_2_CODE" IS NOT NULL AND ${CUBE}."GLOBAL_DIMENSION_2_CODE" != ''`,
      title: `Budget with Global Dimension 2`
    }
  }
});

// Time-based Join Relationships for Financial Analysis
cube(`financial_time_analysis`, {
  sql: `
    SELECT 
      ge."ENTRY_NO" as gl_entry_no,
      ge."POSTING_DATE" as posting_date,
      ge."G_LACCOUNT_NO" as account_no,
      ge."AMOUNT" as actual_amount,
      be."AMOUNT" as budget_amount,
      ge."COMPANY_ID" as company_id
    FROM BUSINESS_CENTRAL.G_L_ENTRY ge
    LEFT JOIN BUSINESS_CENTRAL.G_L_BUDGET_ENTRY be
      ON ge."G_LACCOUNT_NO" = be."G_L_ACCOUNT_NO"
      AND DATE_TRUNC('month', ge."POSTING_DATE") = DATE_TRUNC('month', be."DATE")
      AND ge."COMPANY_ID" = be."COMPANY_ID"
      AND be."BUDGET_NAME" = 'CURRENT'
  `,
  
  joins: {
    g_l_account: {
      relationship: `many_to_one`,
      sql: `${CUBE}.account_no = ${g_l_account}."NO" AND ${CUBE}.company_id = ${g_l_account}."COMPANY_ID"`
    },
    
    company: {
      relationship: `many_to_one`,
      sql: `${CUBE}.company_id = ${company}."ID"`
    }
  },
  
  measures: {
    total_actual: {
      sql: `CAST(${CUBE}.actual_amount AS DECIMAL(19,4))`,
      type: `sum`,
      format: `currency`,
      title: `Total Actual Amount`
    },
    
    total_budget: {
      sql: `CAST(${CUBE}.budget_amount AS DECIMAL(19,4))`,
      type: `sum`,
      format: `currency`,
      title: `Total Budget Amount`
    },
    
    budget_variance: {
      sql: `CAST(${CUBE}.actual_amount AS DECIMAL(19,4)) - COALESCE(CAST(${CUBE}.budget_amount AS DECIMAL(19,4)), 0)`,
      type: `sum`,
      format: `currency`,
      title: `Budget Variance`
    },
    
    budget_variance_percentage: {
      sql: `
        CASE 
          WHEN COALESCE(CAST(${CUBE}.budget_amount AS DECIMAL(19,4)), 0) != 0 
          THEN ((CAST(${CUBE}.actual_amount AS DECIMAL(19,4)) - CAST(${CUBE}.budget_amount AS DECIMAL(19,4))) / ABS(CAST(${CUBE}.budget_amount AS DECIMAL(19,4)))) * 100
          ELSE NULL 
        END
      `,
      type: `avg`,
      format: `percent`,
      title: `Budget Variance %`
    },
    
    budget_utilization: {
      sql: `
        CASE 
          WHEN COALESCE(CAST(${CUBE}.budget_amount AS DECIMAL(19,4)), 0) != 0 
          THEN (CAST(${CUBE}.actual_amount AS DECIMAL(19,4)) / ABS(CAST(${CUBE}.budget_amount AS DECIMAL(19,4)))) * 100
          ELSE NULL 
        END
      `,
      type: `avg`,
      format: `percent`,
      title: `Budget Utilization %`
    }
  },
  
  dimensions: {
    gl_entry_no: {
      sql: `${CUBE}.gl_entry_no`,
      type: `number`,
      primary_key: true
    },
    
    posting_date: {
      sql: `${CUBE}.posting_date`,
      type: `time`
    },
    
    account_no: {
      sql: `${CUBE}.account_no`,
      type: `string`
    },
    
    company_id: {
      sql: `${CUBE}.company_id`,
      type: `string`
    },
    
    // Fiscal Year Dimensions
    fiscal_year: {
      sql: `
        CASE 
          WHEN EXTRACT(MONTH FROM ${CUBE}.posting_date) >= 4
          THEN EXTRACT(YEAR FROM ${CUBE}.posting_date) + 1
          ELSE EXTRACT(YEAR FROM ${CUBE}.posting_date)
        END
      `,
      type: `number`,
      title: `Fiscal Year`
    },
    
    fiscal_quarter: {
      sql: `
        CASE 
          WHEN EXTRACT(MONTH FROM ${CUBE}.posting_date) >= 4
          THEN 'FY' || (EXTRACT(YEAR FROM ${CUBE}.posting_date) + 1) || '-Q' || 
               CEIL((EXTRACT(MONTH FROM ${CUBE}.posting_date) - 4 + 1) / 3.0)
          ELSE 'FY' || EXTRACT(YEAR FROM ${CUBE}.posting_date) || '-Q' || 
               CEIL((EXTRACT(MONTH FROM ${CUBE}.posting_date) + 12 - 4 + 1) / 3.0)
        END
      `,
      type: `string`,
      title: `Fiscal Quarter`
    },
    
    fiscal_period: {
      sql: `
        CASE 
          WHEN EXTRACT(MONTH FROM ${CUBE}.posting_date) >= 4
          THEN 'P' || LPAD((EXTRACT(MONTH FROM ${CUBE}.posting_date) - 4 + 1)::TEXT, 2, '0')
          ELSE 'P' || LPAD((EXTRACT(MONTH FROM ${CUBE}.posting_date) + 12 - 4 + 1)::TEXT, 2, '0')
        END
      `,
      type: `string`,
      title: `Fiscal Period`
    },
    
    calendar_year: {
      sql: `EXTRACT(YEAR FROM ${CUBE}.posting_date)`,
      type: `number`,
      title: `Calendar Year`
    },
    
    calendar_month: {
      sql: `TO_CHAR(${CUBE}.posting_date, 'YYYY-MM')`,
      type: `string`,
      title: `Calendar Month`
    }
  },
  
  segments: {
    over_budget: {
      sql: `CAST(${CUBE}.actual_amount AS DECIMAL(19,4)) > COALESCE(CAST(${CUBE}.budget_amount AS DECIMAL(19,4)), 0)`,
      title: `Over Budget`
    },
    
    under_budget: {
      sql: `CAST(${CUBE}.actual_amount AS DECIMAL(19,4)) < COALESCE(CAST(${CUBE}.budget_amount AS DECIMAL(19,4)), 0)`,
      title: `Under Budget`
    },
    
    on_budget: {
      sql: `ABS(CAST(${CUBE}.actual_amount AS DECIMAL(19,4)) - COALESCE(CAST(${CUBE}.budget_amount AS DECIMAL(19,4)), 0)) < 100`,
      title: `On Budget (Within $100)`
    },
    
    no_budget: {
      sql: `${CUBE}.budget_amount IS NULL`,
      title: `No Budget Set`
    }
  }
});