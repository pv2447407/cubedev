cube(`g_l_entry`, {
  sql_table: `"BUSINESS_CENTRAL"."G_L_ENTRY"`,
  
  data_source: `default`,
  
  joins: {
    company: {
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    g_laccount_no: {
      sql: `${CUBE}."G_LACCOUNT_NO"`,
      type: `string`
    },
    
    shortcut_dimension_7_code: {
      sql: `${CUBE}."SHORTCUT_DIMENSION_7_CODE"`,
      type: `string`
    },
    
    no_series: {
      sql: `${CUBE}."NO_SERIES"`,
      type: `string`
    },
    
    tax_area_code: {
      sql: `${CUBE}."TAX_AREA_CODE"`,
      type: `string`
    },
    
    gst_hst: {
      sql: `${CUBE}."GST_HST"`,
      type: `string`
    },
    
    reversed: {
      sql: `${CUBE}."REVERSED"`,
      type: `boolean`
    },
    
    source_type: {
      sql: `${CUBE}."SOURCE_TYPE"`,
      type: `string`
    },
    
    user_id: {
      sql: `${CUBE}."USER_ID"`,
      type: `string`
    },
    
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    },
    
    journal_templ_name: {
      sql: `${CUBE}."JOURNAL_TEMPL_NAME"`,
      type: `string`
    },
    
    shortcut_dimension_3_code: {
      sql: `${CUBE}."SHORTCUT_DIMENSION_3_CODE"`,
      type: `string`
    },
    
    additional_currency_amount: {
      sql: `${CUBE}."ADDITIONAL_CURRENCY_AMOUNT"`,
      type: `string`
    },
    
    prior_year_entry: {
      sql: `${CUBE}."PRIOR_YEAR_ENTRY"`,
      type: `boolean`
    },
    
    quantity: {
      sql: `${CUBE}."QUANTITY"`,
      type: `string`
    },
    
    system_modified_by: {
      sql: `${CUBE}."SYSTEM_MODIFIED_BY"`,
      type: `string`
    },
    
    gen_bus_posting_group: {
      sql: `${CUBE}."GEN_BUS_POSTING_GROUP"`,
      type: `string`
    },
    
    shortcut_dimension_5_code: {
      sql: `${CUBE}."SHORTCUT_DIMENSION_5_CODE"`,
      type: `string`
    },
    
    non_deductible_vatamount: {
      sql: `${CUBE}."NON_DEDUCTIBLE_VATAMOUNT"`,
      type: `string`
    },
    
    system_id: {
      sql: `${CUBE}."SYSTEM_ID"`,
      type: `string`
    },
    
    fa_entry_type: {
      sql: `${CUBE}."FA_ENTRY_TYPE"`,
      type: `string`
    },
    
    shortcut_dimension_6_code: {
      sql: `${CUBE}."SHORTCUT_DIMENSION_6_CODE"`,
      type: `string`
    },
    
    credit_amount: {
      sql: `${CUBE}."CREDIT_AMOUNT"`,
      type: `string`
    },
    
    system_created_by: {
      sql: `${CUBE}."SYSTEM_CREATED_BY"`,
      type: `string`
    },
    
    global_dimension_2_code: {
      sql: `${CUBE}."GLOBAL_DIMENSION_2_CODE"`,
      type: `string`
    },
    
    ste_transaction_id: {
      sql: `${CUBE}."STE_TRANSACTION_ID"`,
      type: `string`
    },
    
    ic_partner_code: {
      sql: `${CUBE}."IC_PARTNER_CODE"`,
      type: `string`
    },
    
    non_deductible_vatamount_acy: {
      sql: `${CUBE}."NON_DEDUCTIBLE_VATAMOUNT_ACY"`,
      type: `string`
    },
    
    gen_prod_posting_group: {
      sql: `${CUBE}."GEN_PROD_POSTING_GROUP"`,
      type: `string`
    },
    
    account_id: {
      sql: `${CUBE}."ACCOUNT_ID"`,
      type: `string`
    },
    
    vat_bus_posting_group: {
      sql: `${CUBE}."VAT_BUS_POSTING_GROUP"`,
      type: `string`
    },
    
    description: {
      sql: `${CUBE}."DESCRIPTION"`,
      type: `string`
    },
    
    amount: {
      sql: `${CUBE}."AMOUNT"`,
      type: `string`
    },
    
    shortcut_dimension_8_code: {
      sql: `${CUBE}."SHORTCUT_DIMENSION_8_CODE"`,
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
    
    reason_code: {
      sql: `${CUBE}."REASON_CODE"`,
      type: `string`
    },
    
    add_currency_debit_amount: {
      sql: `${CUBE}."ADD_CURRENCY_DEBIT_AMOUNT"`,
      type: `string`
    },
    
    document_type: {
      sql: `${CUBE}."DOCUMENT_TYPE"`,
      type: `string`
    },
    
    document_no: {
      sql: `${CUBE}."DOCUMENT_NO"`,
      type: `string`
    },
    
    business_unit_code: {
      sql: `${CUBE}."BUSINESS_UNIT_CODE"`,
      type: `string`
    },
    
    job_no: {
      sql: `${CUBE}."JOB_NO"`,
      type: `string`
    },
    
    vat_amount: {
      sql: `${CUBE}."VAT_AMOUNT"`,
      type: `string`
    },
    
    external_document_no: {
      sql: `${CUBE}."EXTERNAL_DOCUMENT_NO"`,
      type: `string`
    },
    
    global_dimension_1_code: {
      sql: `${CUBE}."GLOBAL_DIMENSION_1_CODE"`,
      type: `string`
    },
    
    source_no: {
      sql: `${CUBE}."SOURCE_NO"`,
      type: `string`
    },
    
    add_currency_credit_amount: {
      sql: `${CUBE}."ADD_CURRENCY_CREDIT_AMOUNT"`,
      type: `string`
    },
    
    use_tax: {
      sql: `${CUBE}."USE_TAX"`,
      type: `boolean`
    },
    
    shortcut_dimension_4_code: {
      sql: `${CUBE}."SHORTCUT_DIMENSION_4_CODE"`,
      type: `string`
    },
    
    bal_account_type: {
      sql: `${CUBE}."BAL_ACCOUNT_TYPE"`,
      type: `string`
    },
    
    bal_account_no: {
      sql: `${CUBE}."BAL_ACCOUNT_NO"`,
      type: `string`
    },
    
    g_laccount_name: {
      sql: `${CUBE}."G_LACCOUNT_NAME"`,
      type: `string`
    },
    
    source_code: {
      sql: `${CUBE}."SOURCE_CODE"`,
      type: `string`
    },
    
    tax_liable: {
      sql: `${CUBE}."TAX_LIABLE"`,
      type: `boolean`
    },
    
    comment: {
      sql: `${CUBE}."COMMENT"`,
      type: `string`
    },
    
    journal_batch_name: {
      sql: `${CUBE}."JOURNAL_BATCH_NAME"`,
      type: `string`
    },
    
    system_created_entry: {
      sql: `${CUBE}."SYSTEM_CREATED_ENTRY"`,
      type: `boolean`
    },
    
    allocation_account_no: {
      sql: `${CUBE}."ALLOCATION_ACCOUNT_NO"`,
      type: `string`
    },
    
    prod_order_no: {
      sql: `${CUBE}."PROD_ORDER_NO"`,
      type: `string`
    },
    
    debit_amount: {
      sql: `${CUBE}."DEBIT_AMOUNT"`,
      type: `string`
    },
    
    tax_group_code: {
      sql: `${CUBE}."TAX_GROUP_CODE"`,
      type: `string`
    },
    
    system_created_at: {
      sql: `${CUBE}."SYSTEM_CREATED_AT"`,
      type: `time`
    },
    
    vat_reporting_date: {
      sql: `${CUBE}."VAT_REPORTING_DATE"`,
      type: `time`
    },
    
    last_modified_date_time: {
      sql: `${CUBE}."LAST_MODIFIED_DATE_TIME"`,
      type: `time`
    },
    
    system_modified_at: {
      sql: `${CUBE}."SYSTEM_MODIFIED_AT"`,
      type: `time`
    },
    
    posting_date: {
      sql: `${CUBE}."POSTING_DATE"`,
      type: `time`
    },
    
    document_date: {
      sql: `${CUBE}."DOCUMENT_DATE"`,
      type: `time`
    }
  },
  
  measures: {
    count: {
      type: `count`
    },
    
    dimension_changes_count: {
      sql: `${CUBE}."DIMENSION_CHANGES_COUNT"`,
      type: `sum`
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
