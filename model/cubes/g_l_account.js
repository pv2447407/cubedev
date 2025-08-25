cube(`g_l_account`, {
  sql_table: `"BUSINESS_CENTRAL"."G_L_ACCOUNT"`,
  
  data_source: `default`,
  
  joins: {
    company: {
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    system_modified_by: {
      sql: `${CUBE}."SYSTEM_MODIFIED_BY"`,
      type: `string`
    },
    
    system_created_by: {
      sql: `${CUBE}."SYSTEM_CREATED_BY"`,
      type: `string`
    },
    
    global_dimension_2_filter: {
      sql: `${CUBE}."GLOBAL_DIMENSION_2_FILTER"`,
      type: `string`
    },
    
    account_category: {
      sql: `${CUBE}."ACCOUNT_CATEGORY"`,
      type: `string`
    },
    
    omit_default_descr_in_jnl: {
      sql: `${CUBE}."OMIT_DEFAULT_DESCR_IN_JNL"`,
      type: `boolean`
    },
    
    vat_amt: {
      sql: `${CUBE}."VAT_AMT"`,
      type: `string`
    },
    
    consol_debit_acc: {
      sql: `${CUBE}."CONSOL_DEBIT_ACC"`,
      type: `string`
    },
    
    vat_reporting_date_filter: {
      sql: `${CUBE}."VAT_REPORTING_DATE_FILTER"`,
      type: `string`
    },
    
    credit_amount: {
      sql: `${CUBE}."CREDIT_AMOUNT"`,
      type: `string`
    },
    
    add_currency_balance_at_date: {
      sql: `${CUBE}."ADD_CURRENCY_BALANCE_AT_DATE"`,
      type: `string`
    },
    
    global_dimension_1_code: {
      sql: `${CUBE}."GLOBAL_DIMENSION_1_CODE"`,
      type: `string`
    },
    
    add_currency_debit_amount: {
      sql: `${CUBE}."ADD_CURRENCY_DEBIT_AMOUNT"`,
      type: `string`
    },
    
    net_change: {
      sql: `${CUBE}."NET_CHANGE"`,
      type: `string`
    },
    
    income_balance: {
      sql: `${CUBE}."INCOME_BALANCE"`,
      type: `string`
    },
    
    tax_area_code: {
      sql: `${CUBE}."TAX_AREA_CODE"`,
      type: `string`
    },
    
    budgeted_credit_amount: {
      sql: `${CUBE}."BUDGETED_CREDIT_AMOUNT"`,
      type: `string`
    },
    
    balance_at_date: {
      sql: `${CUBE}."BALANCE_AT_DATE"`,
      type: `string`
    },
    
    budgeted_debit_amount: {
      sql: `${CUBE}."BUDGETED_DEBIT_AMOUNT"`,
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
    
    budgeted_amount: {
      sql: `${CUBE}."BUDGETED_AMOUNT"`,
      type: `string`
    },
    
    tax_group_code: {
      sql: `${CUBE}."TAX_GROUP_CODE"`,
      type: `string`
    },
    
    debit_amount: {
      sql: `${CUBE}."DEBIT_AMOUNT"`,
      type: `string`
    },
    
    vat_bus_posting_group: {
      sql: `${CUBE}."VAT_BUS_POSTING_GROUP"`,
      type: `string`
    },
    
    dimension_set_idfilter: {
      sql: `${CUBE}."DIMENSION_SET_IDFILTER"`,
      type: `string`
    },
    
    cost_type_no: {
      sql: `${CUBE}."COST_TYPE_NO"`,
      type: `string`
    },
    
    account_subcategory_descript: {
      sql: `${CUBE}."ACCOUNT_SUBCATEGORY_DESCRIPT"`,
      type: `string`
    },
    
    business_unit_filter: {
      sql: `${CUBE}."BUSINESS_UNIT_FILTER"`,
      type: `string`
    },
    
    date_filter: {
      sql: `${CUBE}."DATE_FILTER"`,
      type: `string`
    },
    
    balance: {
      sql: `${CUBE}."BALANCE"`,
      type: `string`
    },
    
    account_type: {
      sql: `${CUBE}."ACCOUNT_TYPE"`,
      type: `string`
    },
    
    exchange_rate_adjustment: {
      sql: `${CUBE}."EXCHANGE_RATE_ADJUSTMENT"`,
      type: `string`
    },
    
    new_page: {
      sql: `${CUBE}."NEW_PAGE"`,
      type: `boolean`
    },
    
    consol_translation_method: {
      sql: `${CUBE}."CONSOL_TRANSLATION_METHOD"`,
      type: `string`
    },
    
    additional_currency_net_change: {
      sql: `${CUBE}."ADDITIONAL_CURRENCY_NET_CHANGE"`,
      type: `string`
    },
    
    system_id: {
      sql: `${CUBE}."SYSTEM_ID"`,
      type: `string`,
      primary_key: true
    },
    
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    },
    
    picture: {
      sql: `${CUBE}."PICTURE"`,
      type: `string`
    },
    
    direct_posting: {
      sql: `${CUBE}."DIRECT_POSTING"`,
      type: `boolean`
    },
    
    global_dimension_1_filter: {
      sql: `${CUBE}."GLOBAL_DIMENSION_1_FILTER"`,
      type: `string`
    },
    
    comment: {
      sql: `${CUBE}."COMMENT"`,
      type: `boolean`
    },
    
    automatic_ext_texts: {
      sql: `${CUBE}."AUTOMATIC_EXT_TEXTS"`,
      type: `boolean`
    },
    
    global_dimension_2_code: {
      sql: `${CUBE}."GLOBAL_DIMENSION_2_CODE"`,
      type: `string`
    },
    
    add_currency_credit_amount: {
      sql: `${CUBE}."ADD_CURRENCY_CREDIT_AMOUNT"`,
      type: `string`
    },
    
    sat_account_code: {
      sql: `${CUBE}."SAT_ACCOUNT_CODE"`,
      type: `string`
    },
    
    additional_currency_balance: {
      sql: `${CUBE}."ADDITIONAL_CURRENCY_BALANCE"`,
      type: `string`
    },
    
    picture_odata_media_read_link: {
      sql: `${CUBE}."PICTURE_ODATA_MEDIA_READ_LINK"`,
      type: `string`
    },
    
    search_name: {
      sql: `${CUBE}."SEARCH_NAME"`,
      type: `string`
    },
    
    debit_credit: {
      sql: `${CUBE}."DEBIT_CREDIT"`,
      type: `string`
    },
    
    gen_bus_posting_group: {
      sql: `${CUBE}."GEN_BUS_POSTING_GROUP"`,
      type: `string`
    },
    
    default_deferral_template_code: {
      sql: `${CUBE}."DEFAULT_DEFERRAL_TEMPLATE_CODE"`,
      type: `string`
    },
    
    reconciliation_account: {
      sql: `${CUBE}."RECONCILIATION_ACCOUNT"`,
      type: `boolean`
    },
    
    default_icpartner_glacc_no: {
      sql: `${CUBE}."DEFAULT_ICPARTNER_GLACC_NO"`,
      type: `string`
    },
    
    totaling: {
      sql: `${CUBE}."TOTALING"`,
      type: `string`
    },
    
    name: {
      sql: `${CUBE}."NAME"`,
      type: `string`
    },
    
    no: {
      sql: `${CUBE}."NO"`,
      type: `string`
    },
    
    no_2: {
      sql: `${CUBE}."NO_2"`,
      type: `string`
    },
    
    budget_filter: {
      sql: `${CUBE}."BUDGET_FILTER"`,
      type: `string`
    },
    
    api_account_type: {
      sql: `${CUBE}."API_ACCOUNT_TYPE"`,
      type: `string`
    },
    
    consol_credit_acc: {
      sql: `${CUBE}."CONSOL_CREDIT_ACC"`,
      type: `string`
    },
    
    gen_prod_posting_group: {
      sql: `${CUBE}."GEN_PROD_POSTING_GROUP"`,
      type: `string`
    },
    
    budget_at_date: {
      sql: `${CUBE}."BUDGET_AT_DATE"`,
      type: `string`
    },
    
    gifi_code: {
      sql: `${CUBE}."GIFI_CODE"`,
      type: `string`
    },
    
    picture_odata_media_edit_link: {
      sql: `${CUBE}."PICTURE_ODATA_MEDIA_EDIT_LINK"`,
      type: `string`
    },
    
    gen_posting_type: {
      sql: `${CUBE}."GEN_POSTING_TYPE"`,
      type: `string`
    },
    
    blocked: {
      sql: `${CUBE}."BLOCKED"`,
      type: `boolean`
    },
    
    system_created_at: {
      sql: `${CUBE}."SYSTEM_CREATED_AT"`,
      type: `time`
    },
    
    last_date_modified: {
      sql: `${CUBE}."LAST_DATE_MODIFIED"`,
      type: `time`
    },
    
    last_modified_date_time: {
      sql: `${CUBE}."LAST_MODIFIED_DATE_TIME"`,
      type: `time`
    },
    
    system_modified_at: {
      sql: `${CUBE}."SYSTEM_MODIFIED_AT"`,
      type: `time`
    }
  },
  
  measures: {
    count: {
      type: `count`
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
