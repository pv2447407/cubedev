cube(`vendor`, {
  sql_table: `"BUSINESS_CENTRAL"."VENDOR"`,
  
  data_source: `default`,
  
  joins: {
    company: {
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    net_change_lcy: {
      sql: `${CUBE}."NET_CHANGE_LCY"`,
      type: `string`
    },
    
    county: {
      sql: `${CUBE}."COUNTY"`,
      type: `string`
    },
    
    purchases_lcy: {
      sql: `${CUBE}."PURCHASES_LCY"`,
      type: `string`
    },
    
    vat_bus_posting_group: {
      sql: `${CUBE}."VAT_BUS_POSTING_GROUP"`,
      type: `string`
    },
    
    document_sending_profile: {
      sql: `${CUBE}."DOCUMENT_SENDING_PROFILE"`,
      type: `string`
    },
    
    responsibility_center: {
      sql: `${CUBE}."RESPONSIBILITY_CENTER"`,
      type: `string`
    },
    
    finance_charge_memo_amounts: {
      sql: `${CUBE}."FINANCE_CHARGE_MEMO_AMOUNTS"`,
      type: `string`
    },
    
    other_amounts_lcy: {
      sql: `${CUBE}."OTHER_AMOUNTS_LCY"`,
      type: `string`
    },
    
    price_calculation_method: {
      sql: `${CUBE}."PRICE_CALCULATION_METHOD"`,
      type: `string`
    },
    
    gen_bus_posting_group: {
      sql: `${CUBE}."GEN_BUS_POSTING_GROUP"`,
      type: `string`
    },
    
    system_modified_by: {
      sql: `${CUBE}."SYSTEM_MODIFIED_BY"`,
      type: `string`
    },
    
    prices_including_vat: {
      sql: `${CUBE}."PRICES_INCLUDING_VAT"`,
      type: `boolean`
    },
    
    name: {
      sql: `${CUBE}."NAME"`,
      type: `string`
    },
    
    territory_code: {
      sql: `${CUBE}."TERRITORY_CODE"`,
      type: `string`
    },
    
    location_code: {
      sql: `${CUBE}."LOCATION_CODE"`,
      type: `string`
    },
    
    cash_flow_payment_terms_code: {
      sql: `${CUBE}."CASH_FLOW_PAYMENT_TERMS_CODE"`,
      type: `string`
    },
    
    post_code: {
      sql: `${CUBE}."POST_CODE"`,
      type: `string`
    },
    
    refunds_lcy: {
      sql: `${CUBE}."REFUNDS_LCY"`,
      type: `string`
    },
    
    purchaser_code: {
      sql: `${CUBE}."PURCHASER_CODE"`,
      type: `string`
    },
    
    prepayment: {
      sql: `${CUBE}."PREPAYMENT"`,
      type: `string`
    },
    
    address: {
      sql: `${CUBE}."ADDRESS"`,
      type: `string`
    },
    
    eori_number: {
      sql: `${CUBE}."EORI_NUMBER"`,
      type: `string`
    },
    
    balance_lcy: {
      sql: `${CUBE}."BALANCE_LCY"`,
      type: `string`
    },
    
    exclude_from_pmt_practices: {
      sql: `${CUBE}."EXCLUDE_FROM_PMT_PRACTICES"`,
      type: `boolean`
    },
    
    outstanding_invoices_lcy: {
      sql: `${CUBE}."OUTSTANDING_INVOICES_LCY"`,
      type: `string`
    },
    
    name_2: {
      sql: `${CUBE}."NAME_2"`,
      type: `string`
    },
    
    disable_search_by_name: {
      sql: `${CUBE}."DISABLE_SEARCH_BY_NAME"`,
      type: `boolean`
    },
    
    budgeted_amount: {
      sql: `${CUBE}."BUDGETED_AMOUNT"`,
      type: `string`
    },
    
    pay_to_vendor_no: {
      sql: `${CUBE}."PAY_TO_VENDOR_NO"`,
      type: `string`
    },
    
    tax_liable: {
      sql: `${CUBE}."TAX_LIABLE"`,
      type: `boolean`
    },
    
    gln: {
      sql: `${CUBE}."GLN"`,
      type: `string`
    },
    
    payment_terms_id: {
      sql: `${CUBE}."PAYMENT_TERMS_ID"`,
      type: `string`
    },
    
    no: {
      sql: `${CUBE}."NO"`,
      type: `string`
    },
    
    pmt_disc_tolerance_lcy: {
      sql: `${CUBE}."PMT_DISC_TOLERANCE_LCY"`,
      type: `string`
    },
    
    application_method: {
      sql: `${CUBE}."APPLICATION_METHOD"`,
      type: `string`
    },
    
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    },
    
    date_filter: {
      sql: `${CUBE}."DATE_FILTER"`,
      type: `string`
    },
    
    primary_contact_no: {
      sql: `${CUBE}."PRIMARY_CONTACT_NO"`,
      type: `string`
    },
    
    validate_euvat_reg_no: {
      sql: `${CUBE}."VALIDATE_EUVAT_REG_NO"`,
      type: `boolean`
    },
    
    payment_terms_code: {
      sql: `${CUBE}."PAYMENT_TERMS_CODE"`,
      type: `string`
    },
    
    balance_on_date_lcy: {
      sql: `${CUBE}."BALANCE_ON_DATE_LCY"`,
      type: `string`
    },
    
    balance_on_date: {
      sql: `${CUBE}."BALANCE_ON_DATE"`,
      type: `string`
    },
    
    system_created_by: {
      sql: `${CUBE}."SYSTEM_CREATED_BY"`,
      type: `string`
    },
    
    ups_zone: {
      sql: `${CUBE}."UPS_ZONE"`,
      type: `string`
    },
    
    rfc_no: {
      sql: `${CUBE}."RFC_NO"`,
      type: `string`
    },
    
    payment_method_code: {
      sql: `${CUBE}."PAYMENT_METHOD_CODE"`,
      type: `string`
    },
    
    lead_time_calculation: {
      sql: `${CUBE}."LEAD_TIME_CALCULATION"`,
      type: `string`
    },
    
    block_payment_tolerance: {
      sql: `${CUBE}."BLOCK_PAYMENT_TOLERANCE"`,
      type: `boolean`
    },
    
    check_date_separator: {
      sql: `${CUBE}."CHECK_DATE_SEPARATOR"`,
      type: `string`
    },
    
    invoice_amounts: {
      sql: `${CUBE}."INVOICE_AMOUNTS"`,
      type: `string`
    },
    
    inv_amounts_lcy: {
      sql: `${CUBE}."INV_AMOUNTS_LCY"`,
      type: `string`
    },
    
    our_account_no: {
      sql: `${CUBE}."OUR_ACCOUNT_NO"`,
      type: `string`
    },
    
    credit_amount_lcy: {
      sql: `${CUBE}."CREDIT_AMOUNT_LCY"`,
      type: `string`
    },
    
    payment_method_id: {
      sql: `${CUBE}."PAYMENT_METHOD_ID"`,
      type: `string`
    },
    
    contact: {
      sql: `${CUBE}."CONTACT"`,
      type: `string`
    },
    
    ic_partner_code: {
      sql: `${CUBE}."IC_PARTNER_CODE"`,
      type: `string`
    },
    
    cr_memo_amounts: {
      sql: `${CUBE}."CR_MEMO_AMOUNTS"`,
      type: `string`
    },
    
    debit_amount: {
      sql: `${CUBE}."DEBIT_AMOUNT"`,
      type: `string`
    },
    
    invoice_disc_code: {
      sql: `${CUBE}."INVOICE_DISC_CODE"`,
      type: `string`
    },
    
    over_receipt_code: {
      sql: `${CUBE}."OVER_RECEIPT_CODE"`,
      type: `string`
    },
    
    balance_due: {
      sql: `${CUBE}."BALANCE_DUE"`,
      type: `string`
    },
    
    vat_registration_no: {
      sql: `${CUBE}."VAT_REGISTRATION_NO"`,
      type: `string`
    },
    
    partner_type: {
      sql: `${CUBE}."PARTNER_TYPE"`,
      type: `string`
    },
    
    mobile_phone_no: {
      sql: `${CUBE}."MOBILE_PHONE_NO"`,
      type: `string`
    },
    
    other_amounts: {
      sql: `${CUBE}."OTHER_AMOUNTS"`,
      type: `string`
    },
    
    privacy_blocked: {
      sql: `${CUBE}."PRIVACY_BLOCKED"`,
      type: `boolean`
    },
    
    payments_lcy: {
      sql: `${CUBE}."PAYMENTS_LCY"`,
      type: `string`
    },
    
    reminder_amounts: {
      sql: `${CUBE}."REMINDER_AMOUNTS"`,
      type: `string`
    },
    
    language_code: {
      sql: `${CUBE}."LANGUAGE_CODE"`,
      type: `string`
    },
    
    shipping_agent_code: {
      sql: `${CUBE}."SHIPPING_AGENT_CODE"`,
      type: `string`
    },
    
    global_dimension_1_code: {
      sql: `${CUBE}."GLOBAL_DIMENSION_1_CODE"`,
      type: `string`
    },
    
    outstanding_invoices: {
      sql: `${CUBE}."OUTSTANDING_INVOICES"`,
      type: `string`
    },
    
    fin_charge_memo_amounts_lcy: {
      sql: `${CUBE}."FIN_CHARGE_MEMO_AMOUNTS_LCY"`,
      type: `string`
    },
    
    net_change: {
      sql: `${CUBE}."NET_CHANGE"`,
      type: `string`
    },
    
    country_region_code: {
      sql: `${CUBE}."COUNTRY_REGION_CODE"`,
      type: `string`
    },
    
    inv_discounts_lcy: {
      sql: `${CUBE}."INV_DISCOUNTS_LCY"`,
      type: `string`
    },
    
    telex_answer_back: {
      sql: `${CUBE}."TELEX_ANSWER_BACK"`,
      type: `string`
    },
    
    amt_rcd_not_invoiced_lcy: {
      sql: `${CUBE}."AMT_RCD_NOT_INVOICED_LCY"`,
      type: `string`
    },
    
    global_dimension_2_filter: {
      sql: `${CUBE}."GLOBAL_DIMENSION_2_FILTER"`,
      type: `string`
    },
    
    fin_charge_terms_code: {
      sql: `${CUBE}."FIN_CHARGE_TERMS_CODE"`,
      type: `string`
    },
    
    coupled_to_dataverse: {
      sql: `${CUBE}."COUPLED_TO_DATAVERSE"`,
      type: `boolean`
    },
    
    reminder_amounts_lcy: {
      sql: `${CUBE}."REMINDER_AMOUNTS_LCY"`,
      type: `string`
    },
    
    tax_identification_type: {
      sql: `${CUBE}."TAX_IDENTIFICATION_TYPE"`,
      type: `string`
    },
    
    balance_due_lcy: {
      sql: `${CUBE}."BALANCE_DUE_LCY"`,
      type: `string`
    },
    
    base_calendar_code: {
      sql: `${CUBE}."BASE_CALENDAR_CODE"`,
      type: `string`
    },
    
    preferred_bank_account_code: {
      sql: `${CUBE}."PREFERRED_BANK_ACCOUNT_CODE"`,
      type: `string`
    },
    
    currency_code: {
      sql: `${CUBE}."CURRENCY_CODE"`,
      type: `string`
    },
    
    blocked: {
      sql: `${CUBE}."BLOCKED"`,
      type: `string`
    },
    
    pmt_discounts_lcy: {
      sql: `${CUBE}."PMT_DISCOUNTS_LCY"`,
      type: `string`
    },
    
    amt_rcd_not_invoiced: {
      sql: `${CUBE}."AMT_RCD_NOT_INVOICED"`,
      type: `string`
    },
    
    federal_idno: {
      sql: `${CUBE}."FEDERAL_IDNO"`,
      type: `string`
    },
    
    e_mail: {
      sql: `${CUBE}."E_MAIL"`,
      type: `string`
    },
    
    curp_no: {
      sql: `${CUBE}."CURP_NO"`,
      type: `string`
    },
    
    balance: {
      sql: `${CUBE}."BALANCE"`,
      type: `string`
    },
    
    pmt_tolerance_lcy: {
      sql: `${CUBE}."PMT_TOLERANCE_LCY"`,
      type: `string`
    },
    
    no_series: {
      sql: `${CUBE}."NO_SERIES"`,
      type: `string`
    },
    
    bank_communication: {
      sql: `${CUBE}."BANK_COMMUNICATION"`,
      type: `string`
    },
    
    search_name: {
      sql: `${CUBE}."SEARCH_NAME"`,
      type: `string`
    },
    
    currency_filter: {
      sql: `${CUBE}."CURRENCY_FILTER"`,
      type: `string`
    },
    
    outstanding_orders_lcy: {
      sql: `${CUBE}."OUTSTANDING_ORDERS_LCY"`,
      type: `string`
    },
    
    tax_area_code: {
      sql: `${CUBE}."TAX_AREA_CODE"`,
      type: `string`
    },
    
    address_2: {
      sql: `${CUBE}."ADDRESS_2"`,
      type: `string`
    },
    
    shipment_method_code: {
      sql: `${CUBE}."SHIPMENT_METHOD_CODE"`,
      type: `string`
    },
    
    intrastat_partner_type: {
      sql: `${CUBE}."INTRASTAT_PARTNER_TYPE"`,
      type: `string`
    },
    
    city: {
      sql: `${CUBE}."CITY"`,
      type: `string`
    },
    
    cr_memo_amounts_lcy: {
      sql: `${CUBE}."CR_MEMO_AMOUNTS_LCY"`,
      type: `string`
    },
    
    vendor_posting_group: {
      sql: `${CUBE}."VENDOR_POSTING_GROUP"`,
      type: `string`
    },
    
    credit_amount: {
      sql: `${CUBE}."CREDIT_AMOUNT"`,
      type: `string`
    },
    
    registration_number: {
      sql: `${CUBE}."REGISTRATION_NUMBER"`,
      type: `string`
    },
    
    system_id: {
      sql: `${CUBE}."SYSTEM_ID"`,
      type: `string`
    },
    
    allow_multiple_posting_groups: {
      sql: `${CUBE}."ALLOW_MULTIPLE_POSTING_GROUPS"`,
      type: `boolean`
    },
    
    image: {
      sql: `${CUBE}."IMAGE"`,
      type: `string`
    },
    
    state_inscription: {
      sql: `${CUBE}."STATE_INSCRIPTION"`,
      type: `string`
    },
    
    telex_no: {
      sql: `${CUBE}."TELEX_NO"`,
      type: `string`
    },
    
    global_dimension_1_filter: {
      sql: `${CUBE}."GLOBAL_DIMENSION_1_FILTER"`,
      type: `string`
    },
    
    comment: {
      sql: `${CUBE}."COMMENT"`,
      type: `boolean`
    },
    
    fax_no: {
      sql: `${CUBE}."FAX_NO"`,
      type: `string`
    },
    
    debit_amount_lcy: {
      sql: `${CUBE}."DEBIT_AMOUNT_LCY"`,
      type: `string`
    },
    
    format_region: {
      sql: `${CUBE}."FORMAT_REGION"`,
      type: `string`
    },
    
    outstanding_orders: {
      sql: `${CUBE}."OUTSTANDING_ORDERS"`,
      type: `string`
    },
    
    currency_id: {
      sql: `${CUBE}."CURRENCY_ID"`,
      type: `string`
    },
    
    payments: {
      sql: `${CUBE}."PAYMENTS"`,
      type: `string`
    },
    
    phone_no: {
      sql: `${CUBE}."PHONE_NO"`,
      type: `string`
    },
    
    refunds: {
      sql: `${CUBE}."REFUNDS"`,
      type: `string`
    },
    
    company_size_code: {
      sql: `${CUBE}."COMPANY_SIZE_CODE"`,
      type: `string`
    },
    
    check_date_format: {
      sql: `${CUBE}."CHECK_DATE_FORMAT"`,
      type: `string`
    },
    
    creditor_no: {
      sql: `${CUBE}."CREDITOR_NO"`,
      type: `string`
    },
    
    global_dimension_2_code: {
      sql: `${CUBE}."GLOBAL_DIMENSION_2_CODE"`,
      type: `string`
    },
    
    system_created_at: {
      sql: `${CUBE}."SYSTEM_CREATED_AT"`,
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
    
    last_date_modified: {
      sql: `${CUBE}."LAST_DATE_MODIFIED"`,
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
