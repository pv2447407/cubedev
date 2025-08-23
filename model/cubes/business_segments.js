// Business Segments for Multi-Dimensional Analysis

// Note: Segments are defined as extensions of base cubes
// They cannot be directly joined but can be used in queries
cube(`customer_segments`, {
  extends: customer,
  
  segments: {
    // Customer Status Segments
    active_customers: {
      sql: `${CUBE}."BLOCKED" = '' OR ${CUBE}."BLOCKED" IS NULL`,
      title: `Active Customers`,
      description: `Customers not blocked from transactions`
    },
    
    blocked_customers: {
      sql: `${CUBE}."BLOCKED" != '' AND ${CUBE}."BLOCKED" IS NOT NULL`,
      title: `Blocked Customers`,
      description: `Customers blocked from transactions`
    },
    
    privacy_restricted_customers: {
      sql: `${CUBE}."PRIVACY_BLOCKED" = true`,
      title: `Privacy Restricted`,
      description: `Customers with privacy restrictions`
    },
    
    // Financial Segments
    customers_with_balance: {
      sql: `CAST(${CUBE}."BALANCE" AS DECIMAL(19,4)) > 0`,
      title: `Customers with Outstanding Balance`,
      description: `Customers who owe money`
    },
    
    customers_with_credit: {
      sql: `CAST(${CUBE}."BALANCE" AS DECIMAL(19,4)) < 0`,
      title: `Customers with Credit Balance`,
      description: `Customers with credit on account`
    },
    
    high_value_customers: {
      sql: `CAST(${CUBE}."BALANCE" AS DECIMAL(19,4)) > 10000`,
      title: `High Value Customers`,
      description: `Customers with balance over 10,000`
    },
    
    // Tax and VAT Segments
    tax_liable_customers: {
      sql: `${CUBE}."TAX_LIABLE" = true`,
      title: `Tax Liable Customers`,
      description: `Customers subject to tax`
    },
    
    vat_inclusive_pricing: {
      sql: `${CUBE}."PRICES_INCLUDING_VAT" = true`,
      title: `VAT Inclusive Pricing`,
      description: `Customers with prices including VAT`
    },
    
    // Geographic Segments
    domestic_customers: {
      sql: `${CUBE}."COUNTRY_REGION_CODE" = 'US'`,
      title: `Domestic Customers`,
      description: `Customers in the United States`
    },
    
    international_customers: {
      sql: `${CUBE}."COUNTRY_REGION_CODE" != 'US' AND ${CUBE}."COUNTRY_REGION_CODE" IS NOT NULL`,
      title: `International Customers`,
      description: `Customers outside the United States`
    },
    
    european_customers: {
      sql: `${CUBE}."COUNTRY_REGION_CODE" IN ('DE', 'FR', 'IT', 'ES', 'NL', 'BE', 'AT', 'PL', 'SE', 'DK')`,
      title: `European Customers`,
      description: `Customers in European countries`
    },
    
    // Communication Segments
    email_enabled_customers: {
      sql: `${CUBE}."E_MAIL" IS NOT NULL AND ${CUBE}."E_MAIL" != ''`,
      title: `Email Enabled`,
      description: `Customers with email addresses`
    },
    
    mobile_enabled_customers: {
      sql: `${CUBE}."MOBILE_PHONE_NO" IS NOT NULL AND ${CUBE}."MOBILE_PHONE_NO" != ''`,
      title: `Mobile Enabled`,
      description: `Customers with mobile phone numbers`
    },
    
    // Payment Terms Segments
    net_30_customers: {
      sql: `${CUBE}."PAYMENT_TERMS_CODE" = 'NET30'`,
      title: `Net 30 Payment Terms`,
      description: `Customers with 30-day payment terms`
    },
    
    immediate_payment_customers: {
      sql: `${CUBE}."PAYMENT_TERMS_CODE" IN ('COD', 'CASH', 'IMMEDIATE')`,
      title: `Immediate Payment`,
      description: `Customers requiring immediate payment`
    },
    
    // Compound Segments
    high_risk_customers: {
      sql: `(${CUBE}."BLOCKED" != '' AND ${CUBE}."BLOCKED" IS NOT NULL) OR CAST(${CUBE}."BALANCE" AS DECIMAL(19,4)) > 50000`,
      title: `High Risk Customers`,
      description: `Blocked customers or those with very high balances`
    },
    
    vip_customers: {
      sql: `CAST(${CUBE}."BALANCE" AS DECIMAL(19,4)) > 25000 AND (${CUBE}."BLOCKED" = '' OR ${CUBE}."BLOCKED" IS NULL) AND ${CUBE}."CUSTOMER_PRICE_GROUP" IN ('VIP', 'PREMIUM')`,
      title: `VIP Customers`,
      description: `Active high-value customers with premium pricing`
    }
  }
});

// GL Account Segments
cube(`g_l_account_segments`, {
  extends: g_l_account,
  
  segments: {
    // Account Type Segments
    posting_accounts: {
      sql: `${CUBE}."ACCOUNT_TYPE" = 'Posting'`,
      title: `Posting Accounts`,
      description: `Accounts that accept direct posting`
    },
    
    heading_accounts: {
      sql: `${CUBE}."ACCOUNT_TYPE" = 'Heading'`,
      title: `Heading Accounts`,
      description: `Heading/grouping accounts`
    },
    
    total_accounts: {
      sql: `${CUBE}."ACCOUNT_TYPE" IN ('Total', 'Begin-Total', 'End-Total')`,
      title: `Total Accounts`,
      description: `Accounts used for totaling`
    },
    
    // Financial Statement Segments
    income_statement_accounts: {
      sql: `${CUBE}."INCOME_BALANCE" = 'Income Statement'`,
      title: `Income Statement`,
      description: `P&L accounts`
    },
    
    balance_sheet_accounts: {
      sql: `${CUBE}."INCOME_BALANCE" = 'Balance Sheet'`,
      title: `Balance Sheet`,
      description: `Balance sheet accounts`
    },
    
    // Account Category Segments
    assets: {
      sql: `${CUBE}."ACCOUNT_CATEGORY" = 'Assets'`,
      title: `Asset Accounts`,
      description: `Asset accounts`
    },
    
    liabilities: {
      sql: `${CUBE}."ACCOUNT_CATEGORY" = 'Liabilities'`,
      title: `Liability Accounts`,
      description: `Liability accounts`
    },
    
    equity: {
      sql: `${CUBE}."ACCOUNT_CATEGORY" = 'Equity'`,
      title: `Equity Accounts`,
      description: `Equity accounts`
    },
    
    revenue: {
      sql: `${CUBE}."ACCOUNT_CATEGORY" IN ('Income', 'Revenue')`,
      title: `Revenue Accounts`,
      description: `Revenue and income accounts`
    },
    
    expense: {
      sql: `${CUBE}."ACCOUNT_CATEGORY" IN ('Expense', 'Cost of Goods Sold')`,
      title: `Expense Accounts`,
      description: `Expense and COGS accounts`
    },
    
    // Posting Control Segments
    direct_posting_enabled: {
      sql: `${CUBE}."DIRECT_POSTING" = true`,
      title: `Direct Posting Enabled`,
      description: `Accounts allowing direct posting`
    },
    
    blocked_accounts: {
      sql: `${CUBE}."BLOCKED" = true`,
      title: `Blocked Accounts`,
      description: `Accounts blocked from use`
    },
    
    reconciliation_accounts: {
      sql: `${CUBE}."RECONCILIATION_ACCOUNT" = true`,
      title: `Reconciliation Accounts`,
      description: `Accounts requiring reconciliation`
    },
    
    tax_accounts: {
      sql: `${CUBE}."TAX_LIABLE" = true OR ${CUBE}."VAT_BUS_POSTING_GROUP" IS NOT NULL OR ${CUBE}."VAT_PROD_POSTING_GROUP" IS NOT NULL`,
      title: `Tax-Related Accounts`,
      description: `Accounts related to tax processing`
    }
  }
});

// Employee Segments
cube(`employee_segments`, {
  extends: employee,
  
  segments: {
    // Employment Status Segments
    active_employees: {
      sql: `${CUBE}."STATUS" = 'Active' OR (${CUBE}."TERMINATION_DATE" IS NULL OR ${CUBE}."TERMINATION_DATE" > CURRENT_DATE)`,
      title: `Active Employees`,
      description: `Currently employed staff`
    },
    
    terminated_employees: {
      sql: `${CUBE}."STATUS" = 'Terminated' OR (${CUBE}."TERMINATION_DATE" IS NOT NULL AND ${CUBE}."TERMINATION_DATE" <= CURRENT_DATE)`,
      title: `Terminated Employees`,
      description: `Former employees`
    },
    
    // Demographics Segments
    young_employees: {
      sql: `EXTRACT(YEAR FROM AGE(CURRENT_DATE, ${CUBE}."BIRTH_DATE")) < 30`,
      title: `Young Employees`,
      description: `Employees under 30 years old`
    },
    
    senior_employees: {
      sql: `EXTRACT(YEAR FROM AGE(CURRENT_DATE, ${CUBE}."BIRTH_DATE")) >= 50`,
      title: `Senior Employees`,
      description: `Employees 50 years and older`
    },
    
    // Tenure Segments
    new_employees: {
      sql: `${CUBE}."EMPLOYMENT_DATE" >= CURRENT_DATE - INTERVAL '90 days'`,
      title: `New Employees`,
      description: `Employees hired in last 90 days`
    },
    
    long_tenure_employees: {
      sql: `EXTRACT(YEAR FROM AGE(CURRENT_DATE, ${CUBE}."EMPLOYMENT_DATE")) >= 5`,
      title: `Long Tenure`,
      description: `Employees with 5+ years of service`
    },
    
    // Management Segments
    managers: {
      sql: `EXISTS (SELECT 1 FROM BUSINESS_CENTRAL.EMPLOYEE e2 WHERE e2."MANAGER_NO" = ${CUBE}."NO" AND e2."COMPANY_ID" = ${CUBE}."COMPANY_ID")`,
      title: `Managers`,
      description: `Employees who manage others`
    },
    
    individual_contributors: {
      sql: `NOT EXISTS (SELECT 1 FROM BUSINESS_CENTRAL.EMPLOYEE e2 WHERE e2."MANAGER_NO" = ${CUBE}."NO" AND e2."COMPANY_ID" = ${CUBE}."COMPANY_ID")`,
      title: `Individual Contributors`,
      description: `Non-management employees`
    }
  }
});

// GL Entry Transaction Segments
cube(`g_l_entry_segments`, {
  extends: g_l_entry,
  
  segments: {
    // Time-based Segments
    current_month_entries: {
      sql: `TO_CHAR(${CUBE}."POSTING_DATE", 'YYYY-MM') = TO_CHAR(CURRENT_DATE, 'YYYY-MM')`,
      title: `Current Month`,
      description: `Entries from current month`
    },
    
    current_year_entries: {
      sql: `EXTRACT(YEAR FROM ${CUBE}."POSTING_DATE") = EXTRACT(YEAR FROM CURRENT_DATE)`,
      title: `Current Year`,
      description: `Entries from current year`
    },
    
    prior_year_entries: {
      sql: `EXTRACT(YEAR FROM ${CUBE}."POSTING_DATE") = EXTRACT(YEAR FROM CURRENT_DATE) - 1`,
      title: `Prior Year`,
      description: `Entries from previous year`
    },
    
    // Transaction Type Segments
    debit_entries: {
      sql: `CAST(${CUBE}."DEBIT_AMOUNT" AS DECIMAL(19,4)) > 0`,
      title: `Debit Entries`,
      description: `Debit transactions`
    },
    
    credit_entries: {
      sql: `CAST(${CUBE}."CREDIT_AMOUNT" AS DECIMAL(19,4)) > 0`,
      title: `Credit Entries`,
      description: `Credit transactions`
    },
    
    reversed_entries: {
      sql: `${CUBE}."REVERSED" = true`,
      title: `Reversed Entries`,
      description: `Reversed/cancelled entries`
    },
    
    // Document Type Segments
    invoice_entries: {
      sql: `${CUBE}."DOCUMENT_TYPE" IN ('Invoice', 'Credit Memo')`,
      title: `Invoice Entries`,
      description: `Invoice-related entries`
    },
    
    payment_entries: {
      sql: `${CUBE}."DOCUMENT_TYPE" = 'Payment'`,
      title: `Payment Entries`,
      description: `Payment transactions`
    },
    
    journal_entries: {
      sql: `${CUBE}."SOURCE_CODE" LIKE 'GEN%' OR ${CUBE}."JOURNAL_BATCH_NAME" IS NOT NULL`,
      title: `Journal Entries`,
      description: `General journal entries`
    },
    
    // Value Segments
    high_value_transactions: {
      sql: `ABS(CAST(${CUBE}."AMOUNT" AS DECIMAL(19,4))) > 10000`,
      title: `High Value Transactions`,
      description: `Transactions over 10,000`
    },
    
    tax_entries: {
      sql: `CAST(${CUBE}."VAT_AMOUNT" AS DECIMAL(19,4)) != 0 OR ${CUBE}."TAX_LIABLE" = true`,
      title: `Tax Entries`,
      description: `Entries with tax implications`
    },
    
    // Dimensional Segments
    global_dimension_1_entries: {
      sql: `${CUBE}."GLOBAL_DIMENSION_1_CODE" IS NOT NULL AND ${CUBE}."GLOBAL_DIMENSION_1_CODE" != ''`,
      title: `Dimension 1 Entries`,
      description: `Entries with Global Dimension 1`
    },
    
    global_dimension_2_entries: {
      sql: `${CUBE}."GLOBAL_DIMENSION_2_CODE" IS NOT NULL AND ${CUBE}."GLOBAL_DIMENSION_2_CODE" != ''`,
      title: `Dimension 2 Entries`,
      description: `Entries with Global Dimension 2`
    },
    
    multi_dimensional_entries: {
      sql: `${CUBE}."DIMENSION_SET_ID" IS NOT NULL AND ${CUBE}."DIMENSION_SET_ID" > 0`,
      title: `Multi-Dimensional`,
      description: `Entries with dimension sets`
    }
  }
});

// Dynamic Dimension-Based Segments
cube(`dimension_segments`, {
  sql: `
    SELECT DISTINCT
      dse.*,
      d."NAME" as dimension_name,
      dv."NAME" as dimension_value_name
    FROM BUSINESS_CENTRAL.DIMENSION_SET_ENTRY dse
    JOIN BUSINESS_CENTRAL.DIMENSION d ON dse."DIMENSION_CODE" = d."CODE" AND dse."COMPANY_ID" = d."COMPANY_ID"
    JOIN BUSINESS_CENTRAL.DIMENSION_VALUE dv ON dse."DIMENSION_VALUE_CODE" = dv."CODE" AND dse."DIMENSION_CODE" = dv."DIMENSION_CODE" AND dse."COMPANY_ID" = dv."COMPANY_ID"
  `,
  
  segments: {
    // Cost Center Segments
    cost_center_a: {
      sql: `${CUBE}."DIMENSION_CODE" = 'COSTCENTER' AND ${CUBE}."DIMENSION_VALUE_CODE" = 'A'`,
      title: `Cost Center A`,
      description: `Transactions for Cost Center A`
    },
    
    cost_center_b: {
      sql: `${CUBE}."DIMENSION_CODE" = 'COSTCENTER' AND ${CUBE}."DIMENSION_VALUE_CODE" = 'B'`,
      title: `Cost Center B`,
      description: `Transactions for Cost Center B`
    },
    
    // Department Segments
    sales_department: {
      sql: `${CUBE}."DIMENSION_CODE" = 'DEPARTMENT' AND ${CUBE}."DIMENSION_VALUE_CODE" IN ('SALES', 'SALES-01', 'SALES-02')`,
      title: `Sales Department`,
      description: `Sales department transactions`
    },
    
    finance_department: {
      sql: `${CUBE}."DIMENSION_CODE" = 'DEPARTMENT' AND ${CUBE}."DIMENSION_VALUE_CODE" IN ('FINANCE', 'FIN', 'ACCOUNTING')`,
      title: `Finance Department`,
      description: `Finance department transactions`
    },
    
    operations_department: {
      sql: `${CUBE}."DIMENSION_CODE" = 'DEPARTMENT' AND ${CUBE}."DIMENSION_VALUE_CODE" IN ('OPS', 'OPERATIONS', 'PRODUCTION')`,
      title: `Operations Department`,
      description: `Operations department transactions`
    },
    
    // Project Segments
    project_based: {
      sql: `${CUBE}."DIMENSION_CODE" = 'PROJECT' AND ${CUBE}."DIMENSION_VALUE_CODE" IS NOT NULL`,
      title: `Project-Based`,
      description: `Transactions with project codes`
    },
    
    // Region Segments
    north_region: {
      sql: `${CUBE}."DIMENSION_CODE" = 'REGION' AND ${CUBE}."DIMENSION_VALUE_CODE" IN ('NORTH', 'N', 'NORTHEAST', 'NORTHWEST')`,
      title: `North Region`,
      description: `Northern region transactions`
    },
    
    south_region: {
      sql: `${CUBE}."DIMENSION_CODE" = 'REGION' AND ${CUBE}."DIMENSION_VALUE_CODE" IN ('SOUTH', 'S', 'SOUTHEAST', 'SOUTHWEST')`,
      title: `South Region`,
      description: `Southern region transactions`
    }
  }
});