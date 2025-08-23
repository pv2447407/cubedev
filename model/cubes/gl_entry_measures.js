// GL Entry Financial Measures
cube(`g_l_entry`, {
  sql: `SELECT * FROM BUSINESS_CENTRAL.G_L_ENTRY`,
  
  joins: {
    company: {
      relationship: `many_to_one`,
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`
    },
    g_l_account: {
      relationship: `many_to_one`,
      sql: `${CUBE}."G_LACCOUNT_NO" = ${g_l_account}."NO" AND ${CUBE}."COMPANY_ID" = ${g_l_account}."COMPANY_ID"`
    },
    dimension_set_entry: {
      relationship: `many_to_one`,
      sql: `${CUBE}."DIMENSION_SET_ID" = ${dimension_set_entry}."DIMENSION_SET_ID" AND ${CUBE}."COMPANY_ID" = ${dimension_set_entry}."COMPANY_ID"`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [entry_no, posting_date, g_laccount_no]
    },
    
    // Total amount (sum of amount field)
    total_amount: {
      sql: `CAST(${CUBE}."AMOUNT" AS DECIMAL(19,4))`,
      type: `sum`,
      format: `currency`
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
    
    // Total VAT amount
    total_vat_amount: {
      sql: `CAST(${CUBE}."VAT_AMOUNT" AS DECIMAL(19,4))`,
      type: `sum`,
      format: `currency`
    },
    
    // Net amount (debits - credits)
    net_amount: {
      sql: `CAST(${CUBE}."DEBIT_AMOUNT" AS DECIMAL(19,4)) - CAST(${CUBE}."CREDIT_AMOUNT" AS DECIMAL(19,4))`,
      type: `sum`,
      format: `currency`,
      title: `Net Amount (Debits - Credits)`
    },
    
    // Average transaction amount
    average_transaction_amount: {
      sql: `CAST(${CUBE}."AMOUNT" AS DECIMAL(19,4))`,
      type: `avg`,
      format: `currency`
    },
    
    // Count of debit transactions
    debit_transaction_count: {
      sql: `CASE WHEN CAST(${CUBE}."DEBIT_AMOUNT" AS DECIMAL(19,4)) > 0 THEN 1 ELSE NULL END`,
      type: `count`,
      title: `Number of Debit Transactions`
    },
    
    // Count of credit transactions
    credit_transaction_count: {
      sql: `CASE WHEN CAST(${CUBE}."CREDIT_AMOUNT" AS DECIMAL(19,4)) > 0 THEN 1 ELSE NULL END`,
      type: `count`,
      title: `Number of Credit Transactions`
    },
    
    // Count of reversed entries
    reversed_entries_count: {
      sql: `CASE WHEN ${CUBE}."REVERSED" = true THEN 1 ELSE NULL END`,
      type: `count`,
      title: `Number of Reversed Entries`
    },
    
    // Running balance (cumulative sum)
    running_balance: {
      sql: `CAST(${CUBE}."AMOUNT" AS DECIMAL(19,4))`,
      type: `runningTotal`,
      format: `currency`
    }
  },
  
  dimensions: {
    entry_no: {
      sql: `${CUBE}."ENTRY_NO"`,
      type: `number`,
      primaryKey: true
    },
    
    system_id: {
      sql: `${CUBE}."SYSTEM_ID"`,
      type: `string`
    },
    
    dimension_set_id: {
      sql: `${CUBE}."DIMENSION_SET_ID"`,
      type: `number`
    },
    
    posting_date: {
      sql: `${CUBE}."POSTING_DATE"`,
      type: `time`
    },
    
    document_date: {
      sql: `${CUBE}."DOCUMENT_DATE"`,
      type: `time`
    },
    
    document_type: {
      sql: `${CUBE}."DOCUMENT_TYPE"`,
      type: `string`
    },
    
    document_no: {
      sql: `${CUBE}."DOCUMENT_NO"`,
      type: `string`
    },
    
    g_laccount_no: {
      sql: `${CUBE}."G_LACCOUNT_NO"`,
      type: `string`
    },
    
    g_laccount_name: {
      sql: `${CUBE}."G_LACCOUNT_NAME"`,
      type: `string`
    },
    
    description: {
      sql: `${CUBE}."DESCRIPTION"`,
      type: `string`
    },
    
    source_type: {
      sql: `${CUBE}."SOURCE_TYPE"`,
      type: `string`
    },
    
    source_no: {
      sql: `${CUBE}."SOURCE_NO"`,
      type: `string`
    },
    
    source_code: {
      sql: `${CUBE}."SOURCE_CODE"`,
      type: `string`
    },
    
    journal_batch_name: {
      sql: `${CUBE}."JOURNAL_BATCH_NAME"`,
      type: `string`
    },
    
    global_dimension_1_code: {
      sql: `${CUBE}."GLOBAL_DIMENSION_1_CODE"`,
      type: `string`
    },
    
    global_dimension_2_code: {
      sql: `${CUBE}."GLOBAL_DIMENSION_2_CODE"`,
      type: `string`
    },
    
    business_unit_code: {
      sql: `${CUBE}."BUSINESS_UNIT_CODE"`,
      type: `string`
    },
    
    user_id: {
      sql: `${CUBE}."USER_ID"`,
      type: `string`
    },
    
    reversed: {
      sql: `${CUBE}."REVERSED"`,
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
    
    tax_liable: {
      sql: `${CUBE}."TAX_LIABLE"`,
      type: `boolean`
    },
    
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    }
  }
});