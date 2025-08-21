cube(`bank_account`, {
  sql_table: `"BUSINESS_CENTRAL"."BANK_ACCOUNT"`,
  
  data_source: `default`,
  
  joins: {
    company: {
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    no: {
      sql: `${CUBE}."NO"`,
      type: `string`,
      primary_key: true
    },
    system_id: {
      sql: `${CUBE}."SYSTEM_ID"`,
      type: `string`
    },
    global_dimension_1_filter: {
      sql: `${CUBE}."GLOBAL_DIMENSION_1_FILTER"`,
      type: `string`
    },
    last_payment_statement_no: {
      sql: `${CUBE}."LAST_PAYMENT_STATEMENT_NO"`,
      type: `string`
    },
    telex_answer_back: {
      sql: `${CUBE}."TELEX_ANSWER_BACK"`,
      type: `string`
    },
    county: {
      sql: `${CUBE}."COUNTY"`,
      type: `string`
    },
    bank_account_no: {
      sql: `${CUBE}."BANK_ACCOUNT_NO"`,
      type: `string`
    },
    country_region_code: {
      sql: `${CUBE}."COUNTRY_REGION_CODE"`,
      type: `string`
    },
    sepa_direct_debit_exp_format: {
      sql: `${CUBE}."SEPA_DIRECT_DEBIT_EXP_FORMAT"`,
      type: `string`
    },
    check_report_id: {
      sql: `${CUBE}."CHECK_REPORT_ID"`,
      type: `number`
    },
    e_mail: {
      sql: `${CUBE}."E_MAIL"`,
      type: `string`
    },
    e_pay_export_file_path: {
      sql: `${CUBE}."E_PAY_EXPORT_FILE_PATH"`,
      type: `string`
    },
    use_as_default_for_currency: {
      sql: `${CUBE}."USE_AS_DEFAULT_FOR_CURRENCY"`,
      type: `boolean`
    },
    balance: {
      sql: `${CUBE}."BALANCE"`,
      type: `string`
    },
    creditor_no: {
      sql: `${CUBE}."CREDITOR_NO"`,
      type: `string`
    },
    disable_automatic_pmt_matching: {
      sql: `${CUBE}."DISABLE_AUTOMATIC_PMT_MATCHING"`,
      type: `boolean`
    },
    transaction_import_timespan: {
      sql: `${CUBE}."TRANSACTION_IMPORT_TIMESPAN"`,
      type: `number`
    },
    mobile_phone_no: {
      sql: `${CUBE}."MOBILE_PHONE_NO"`,
      type: `string`
    },
    e_pay_trans_program_path: {
      sql: `${CUBE}."E_PAY_TRANS_PROGRAM_PATH"`,
      type: `string`
    },
    bank_stmt_service_record_id: {
      sql: `${CUBE}."BANK_STMT_SERVICE_RECORD_ID"`,
      type: `string`
    },
    balance_last_statement: {
      sql: `${CUBE}."BALANCE_LAST_STATEMENT"`,
      type: `string`
    },
    debit_amount: {
      sql: `${CUBE}."DEBIT_AMOUNT"`,
      type: `string`
    },
    language_code: {
      sql: `${CUBE}."LANGUAGE_CODE"`,
      type: `string`
    },
    date_filter: {
      sql: `${CUBE}."DATE_FILTER"`,
      type: `string`
    },
    min_balance: {
      sql: `${CUBE}."MIN_BALANCE"`,
      type: `string`
    },
    iban: {
      sql: `${CUBE}."IBAN"`,
      type: `string`
    },
    name_2: {
      sql: `${CUBE}."NAME_2"`,
      type: `string`
    },
    global_dimension_1_code: {
      sql: `${CUBE}."GLOBAL_DIMENSION_1_CODE"`,
      type: `string`
    },
    bank_statement_import_format: {
      sql: `${CUBE}."BANK_STATEMENT_IMPORT_FORMAT"`,
      type: `string`
    },
    match_tolerance_value: {
      sql: `${CUBE}."MATCH_TOLERANCE_VALUE"`,
      type: `number`
    },
    match_tolerance_type: {
      sql: `${CUBE}."MATCH_TOLERANCE_TYPE"`,
      type: `string`
    },
    city: {
      sql: `${CUBE}."CITY"`,
      type: `string`
    },
    client_name: {
      sql: `${CUBE}."CLIENT_NAME"`,
      type: `string`
    },
    payment_export_format: {
      sql: `${CUBE}."PAYMENT_EXPORT_FORMAT"`,
      type: `string`
    },
    eft_export_code: {
      sql: `${CUBE}."EFT_EXPORT_CODE"`,
      type: `string`
    },
    transit_no: {
      sql: `${CUBE}."TRANSIT_NO"`,
      type: `string`
    },
    phone_no: {
      sql: `${CUBE}."PHONE_NO"`,
      type: `string`
    },
    system_modified_by: {
      sql: `${CUBE}."SYSTEM_MODIFIED_BY"`,
      type: `string`
    },
    blocked: {
      sql: `${CUBE}."BLOCKED"`,
      type: `boolean`
    },
    check_date_separator: {
      sql: `${CUBE}."CHECK_DATE_SEPARATOR"`,
      type: `string`
    },
    last_epay_file_creation_no: {
      sql: `${CUBE}."LAST_EPAY_FILE_CREATION_NO"`,
      type: `number`
    },
    last_epay_export_file_name: {
      sql: `${CUBE}."LAST_EPAY_EXPORT_FILE_NAME"`,
      type: `string`
    },
    net_change: {
      sql: `${CUBE}."NET_CHANGE"`,
      type: `number`
    },
    bank_code: {
      sql: `${CUBE}."BANK_CODE"`,
      type: `string`
    },
    chain_name: {
      sql: `${CUBE}."CHAIN_NAME"`,
      type: `string`
    },
    address: {
      sql: `${CUBE}."ADDRESS"`,
      type: `string`
    },
    no_series: {
      sql: `${CUBE}."NO_SERIES"`,
      type: `string`
    },
    territory_code: {
      sql: `${CUBE}."TERRITORY_CODE"`,
      type: `string`
    },
    pmt_rec_no_series: {
      sql: `${CUBE}."PMT_REC_NO_SERIES"`,
      type: `string`
    },
    global_dimension_2_filter: {
      sql: `${CUBE}."GLOBAL_DIMENSION_2_FILTER"`,
      type: `string`
    },
    check_date_format: {
      sql: `${CUBE}."CHECK_DATE_FORMAT"`,
      type: `string`
    },
    credit_transfer_msg_nos: {
      sql: `${CUBE}."CREDIT_TRANSFER_MSG_NOS"`,
      type: `string`
    },
    fax_no: {
      sql: `${CUBE}."FAX_NO"`,
      type: `string`
    },
    bank_branch_no: {
      sql: `${CUBE}."BANK_BRANCH_NO"`,
      type: `string`
    },
    currency_code: {
      sql: `${CUBE}."CURRENCY_CODE"`,
      type: `string`
    },
    bank_clearing_code: {
      sql: `${CUBE}."BANK_CLEARING_CODE"`,
      type: `string`
    },
    bank_clearing_standard: {
      sql: `${CUBE}."BANK_CLEARING_STANDARD"`,
      type: `string`
    },
    system_created_at: {
      sql: `${CUBE}."SYSTEM_CREATED_AT"`,
      type: `time`
    },
    positive_pay_export_code: {
      sql: `${CUBE}."POSITIVE_PAY_EXPORT_CODE"`,
      type: `string`
    },
    contact: {
      sql: `${CUBE}."CONTACT"`,
      type: `string`
    },
    image: {
      sql: `${CUBE}."IMAGE"`,
      type: `string`
    },
    telex_no: {
      sql: `${CUBE}."TELEX_NO"`,
      type: `string`
    },
    last_remittance_advice_no: {
      sql: `${CUBE}."LAST_REMITTANCE_ADVICE_NO"`,
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
    e_pay_trans_program_command: {
      sql: `${CUBE}."E_PAY_TRANS_PROGRAM_COMMAND"`,
      type: `string`
    },
    system_modified_at: {
      sql: `${CUBE}."SYSTEM_MODIFIED_AT"`,
      type: `time`
    },
    credit_amount_lcy: {
      sql: `${CUBE}."CREDIT_AMOUNT_LCY"`,
      type: `string`
    },
    debit_amount_lcy: {
      sql: `${CUBE}."DEBIT_AMOUNT_LCY"`,
      type: `string`
    },
    name: {
      sql: `${CUBE}."NAME"`,
      type: `string`
    },
    our_contact_code: {
      sql: `${CUBE}."OUR_CONTACT_CODE"`,
      type: `string`
    },
    post_code: {
      sql: `${CUBE}."POST_CODE"`,
      type: `string`
    },
    last_date_modified: {
      sql: `${CUBE}."LAST_DATE_MODIFIED"`,
      type: `time`
    },
    credit_amount: {
      sql: `${CUBE}."CREDIT_AMOUNT"`,
      type: `string`
    },
    balance_at_date_lcy: {
      sql: `${CUBE}."BALANCE_AT_DATE_LCY"`,
      type: `string`
    },
    export_format: {
      sql: `${CUBE}."EXPORT_FORMAT"`,
      type: `string`
    },
    client_no: {
      sql: `${CUBE}."CLIENT_NO"`,
      type: `string`
    },
    swift_code: {
      sql: `${CUBE}."SWIFT_CODE"`,
      type: `string`
    },
    bank_communication: {
      sql: `${CUBE}."BANK_COMMUNICATION"`,
      type: `string`
    },
    bank_acc_posting_group: {
      sql: `${CUBE}."BANK_ACC_POSTING_GROUP"`,
      type: `string`
    },
    format_region: {
      sql: `${CUBE}."FORMAT_REGION"`,
      type: `string`
    },
    input_qualifier: {
      sql: `${CUBE}."INPUT_QUALIFIER"`,
      type: `string`
    },
    check_report_name: {
      sql: `${CUBE}."CHECK_REPORT_NAME"`,
      type: `string`
    },
    statistics_group: {
      sql: `${CUBE}."STATISTICS_GROUP"`,
      type: `number`
    },
    amount: {
      sql: `${CUBE}."AMOUNT"`,
      type: `string`
    },
    last_achfile_idmodifier: {
      sql: `${CUBE}."LAST_ACHFILE_IDMODIFIER"`,
      type: `string`
    },
    address_2: {
      sql: `${CUBE}."ADDRESS_2"`,
      type: `string`
    },
    direct_debit_msg_nos: {
      sql: `${CUBE}."DIRECT_DEBIT_MSG_NOS"`,
      type: `string`
    },
    intercompany_enable: {
      sql: `${CUBE}."INTERCOMPANY_ENABLE"`,
      type: `boolean`
    },
    last_statement_no: {
      sql: `${CUBE}."LAST_STATEMENT_NO"`,
      type: `string`
    },
    total_on_checks: {
      sql: `${CUBE}."TOTAL_ON_CHECKS"`,
      type: `number`
    },
    net_change_lcy: {
      sql: `${CUBE}."NET_CHANGE_LCY"`,
      type: `number`
    },
    search_name: {
      sql: `${CUBE}."SEARCH_NAME"`,
      type: `string`
    },
    automatic_stmt_import_enabled: {
      sql: `${CUBE}."AUTOMATIC_STMT_IMPORT_ENABLED"`,
      type: `boolean`
    },
    comment: {
      sql: `${CUBE}."COMMENT"`,
      type: `boolean`
    },
    balance_lcy: {
      sql: `${CUBE}."BALANCE_LCY"`,
      type: `string`
    },
    balance_at_date: {
      sql: `${CUBE}."BALANCE_AT_DATE"`,
      type: `string`
    },
    last_check_no: {
      sql: `${CUBE}."LAST_CHECK_NO"`,
      type: `string`
    },
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    },
    _fivetran_synced: {
      sql: `${CUBE}."_FIVETRAN_SYNCED"`,
      type: `time`
    },
    _fivetran_deleted: {
      sql: `${CUBE}."_FIVETRAN_DELETED"`,
      type: `boolean`
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
