// GL Account Financial Measures
cube(`g_l_account`, {
  sql: `SELECT * FROM BUSINESS_CENTRAL.G_L_ACCOUNT`,
  
  joins: {
    company: {
      relationship: `many_to_one`,
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [no, name, account_type]
    },
    
    // Total balance
    total_balance: {
      sql: `CAST(${CUBE}."BALANCE" AS DECIMAL(19,4))`,
      type: `sum`,
      format: `currency`,
      title: `Total Account Balance`
    },
    
    // Total debit amount
    total_debit_amount: {
      sql: `CAST(${CUBE}."DEBIT_AMOUNT" AS DECIMAL(19,4))`,
      type: `sum`,
      format: `currency`
    },
    
    // Total credit amount
    total_credit_amount: {
      sql: `CAST(${CUBE}."CREDIT_AMOUNT" AS DECIMAL(19,4))`,
      type: `sum`,
      format: `currency`
    },
    
    // Average account balance
    average_balance: {
      sql: `CAST(${CUBE}."BALANCE" AS DECIMAL(19,4))`,
      type: `avg`,
      format: `currency`
    },
    
    // Count by account type
    posting_accounts_count: {
      sql: `CASE WHEN ${CUBE}."ACCOUNT_TYPE" = 'Posting' THEN 1 ELSE NULL END`,
      type: `count`,
      title: `Posting Accounts`
    },
    
    heading_accounts_count: {
      sql: `CASE WHEN ${CUBE}."ACCOUNT_TYPE" = 'Heading' THEN 1 ELSE NULL END`,
      type: `count`,
      title: `Heading Accounts`
    },
    
    total_accounts_count: {
      sql: `CASE WHEN ${CUBE}."ACCOUNT_TYPE" = 'Total' THEN 1 ELSE NULL END`,
      type: `count`,
      title: `Total Accounts`
    },
    
    begin_total_accounts_count: {
      sql: `CASE WHEN ${CUBE}."ACCOUNT_TYPE" = 'Begin-Total' THEN 1 ELSE NULL END`,
      type: `count`,
      title: `Begin-Total Accounts`
    },
    
    end_total_accounts_count: {
      sql: `CASE WHEN ${CUBE}."ACCOUNT_TYPE" = 'End-Total' THEN 1 ELSE NULL END`,
      type: `count`,
      title: `End-Total Accounts`
    },
    
    // Count of blocked accounts
    blocked_accounts_count: {
      sql: `CASE WHEN ${CUBE}."BLOCKED" = true THEN 1 ELSE NULL END`,
      type: `count`,
      title: `Blocked Accounts`
    },
    
    // Count of direct posting accounts
    direct_posting_accounts_count: {
      sql: `CASE WHEN ${CUBE}."DIRECT_POSTING" = true THEN 1 ELSE NULL END`,
      type: `count`,
      title: `Direct Posting Accounts`
    },
    
    // Count of reconciliation accounts
    reconciliation_accounts_count: {
      sql: `CASE WHEN ${CUBE}."RECONCILIATION_ACCOUNT" = true THEN 1 ELSE NULL END`,
      type: `count`,
      title: `Reconciliation Accounts`
    },
    
    // Income statement accounts
    income_statement_accounts_count: {
      sql: `CASE WHEN ${CUBE}."INCOME_BALANCE" = 'Income Statement' THEN 1 ELSE NULL END`,
      type: `count`,
      title: `Income Statement Accounts`
    },
    
    // Balance sheet accounts
    balance_sheet_accounts_count: {
      sql: `CASE WHEN ${CUBE}."INCOME_BALANCE" = 'Balance Sheet' THEN 1 ELSE NULL END`,
      type: `count`,
      title: `Balance Sheet Accounts`
    },
    
    // Tax liable accounts
    tax_liable_accounts_count: {
      sql: `CASE WHEN ${CUBE}."TAX_LIABLE" = true THEN 1 ELSE NULL END`,
      type: `count`,
      title: `Tax Liable Accounts`
    }
  },
  
  dimensions: {
    no: {
      sql: `${CUBE}."NO"`,
      type: `string`,
      primaryKey: true
    },
    
    system_id: {
      sql: `${CUBE}."SYSTEM_ID"`,
      type: `string`
    },
    
    name: {
      sql: `${CUBE}."NAME"`,
      type: `string`
    },
    
    account_type: {
      sql: `${CUBE}."ACCOUNT_TYPE"`,
      type: `string`
    },
    
    income_balance: {
      sql: `${CUBE}."INCOME_BALANCE"`,
      type: `string`
    },
    
    account_category: {
      sql: `${CUBE}."ACCOUNT_CATEGORY"`,
      type: `string`
    },
    
    account_subcategory_descript: {
      sql: `${CUBE}."ACCOUNT_SUBCATEGORY_DESCRIPT"`,
      type: `string`
    },
    
    blocked: {
      sql: `${CUBE}."BLOCKED"`,
      type: `boolean`
    },
    
    direct_posting: {
      sql: `${CUBE}."DIRECT_POSTING"`,
      type: `boolean`
    },
    
    reconciliation_account: {
      sql: `${CUBE}."RECONCILIATION_ACCOUNT"`,
      type: `boolean`
    },
    
    new_page: {
      sql: `${CUBE}."NEW_PAGE"`,
      type: `boolean`
    },
    
    tax_liable: {
      sql: `${CUBE}."TAX_LIABLE"`,
      type: `boolean`
    },
    
    gen_bus_posting_group: {
      sql: `${CUBE}."GEN_BUS_POSTING_GROUP"`,
      type: `string`
    },
    
    gen_prod_posting_group: {
      sql: `${CUBE}."GEN_PROD_POSTING_GROUP"`,
      type: `string`
    },
    
    vat_bus_posting_group: {
      sql: `${CUBE}."VAT_BUS_POSTING_GROUP"`,
      type: `string`
    },
    
    vat_prod_posting_group: {
      sql: `${CUBE}."VAT_PROD_POSTING_GROUP"`,
      type: `string`
    },
    
    gen_posting_type: {
      sql: `${CUBE}."GEN_POSTING_TYPE"`,
      type: `string`
    },
    
    tax_area_code: {
      sql: `${CUBE}."TAX_AREA_CODE"`,
      type: `string`
    },
    
    comment: {
      sql: `${CUBE}."COMMENT"`,
      type: `boolean`
    },
    
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    }
  }
});