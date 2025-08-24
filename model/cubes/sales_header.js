cube(`sales_header`, {
  sql_table: `"BUSINESS_CENTRAL"."SALES_HEADER"`,
  
  data_source: `default`,
  
  joins: {
    company: {
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    tax_exemption_no: {
      sql: `${CUBE}."TAX_EXEMPTION_NO"`,
      type: `string`
    },
    
    outstanding_amount: {
      sql: `${CUBE}."OUTSTANDING_AMOUNT"`,
      type: `string`
    },
    
    order_class: {
      sql: `${CUBE}."ORDER_CLASS"`,
      type: `string`
    },
    
    posting_no_series: {
      sql: `${CUBE}."POSTING_NO_SERIES"`,
      type: `string`
    },
    
    journal_templ_name: {
      sql: `${CUBE}."JOURNAL_TEMPL_NAME"`,
      type: `string`
    },
    
    cfdi_export_code: {
      sql: `${CUBE}."CFDI_EXPORT_CODE"`,
      type: `string`
    },
    
    direct_debit_mandate_id: {
      sql: `${CUBE}."DIRECT_DEBIT_MANDATE_ID"`,
      type: `string`
    },
    
    amt_ship_not_inv_lcybase: {
      sql: `${CUBE}."AMT_SHIP_NOT_INV_LCYBASE"`,
      type: `string`
    },
    
    prices_including_vat: {
      sql: `${CUBE}."PRICES_INCLUDING_VAT"`,
      type: `boolean`
    },
    
    bill_to_customer_no: {
      sql: `${CUBE}."BILL_TO_CUSTOMER_NO"`,
      type: `string`
    },
    
    bill_to_country_region_code: {
      sql: `${CUBE}."BILL_TO_COUNTRY_REGION_CODE"`,
      type: `string`
    },
    
    amount_including_vat: {
      sql: `${CUBE}."AMOUNT_INCLUDING_VAT"`,
      type: `string`
    },
    
    prepmt_payment_discount: {
      sql: `${CUBE}."PREPMT_PAYMENT_DISCOUNT"`,
      type: `string`
    },
    
    ship_to_county: {
      sql: `${CUBE}."SHIP_TO_COUNTY"`,
      type: `string`
    },
    
    medical_insurer_name: {
      sql: `${CUBE}."MEDICAL_INSURER_NAME"`,
      type: `string`
    },
    
    insurer_name: {
      sql: `${CUBE}."INSURER_NAME"`,
      type: `string`
    },
    
    ship_to_name_2: {
      sql: `${CUBE}."SHIP_TO_NAME_2"`,
      type: `string`
    },
    
    bill_to_name_2: {
      sql: `${CUBE}."BILL_TO_NAME_2"`,
      type: `string`
    },
    
    invoice_discount_calculation: {
      sql: `${CUBE}."INVOICE_DISCOUNT_CALCULATION"`,
      type: `string`
    },
    
    trailer_2: {
      sql: `${CUBE}."TRAILER_2"`,
      type: `string`
    },
    
    cfdi_purpose: {
      sql: `${CUBE}."CFDI_PURPOSE"`,
      type: `string`
    },
    
    language_code: {
      sql: `${CUBE}."LANGUAGE_CODE"`,
      type: `string`
    },
    
    insurer_policy_number: {
      sql: `${CUBE}."INSURER_POLICY_NUMBER"`,
      type: `string`
    },
    
    ship_to_upszone: {
      sql: `${CUBE}."SHIP_TO_UPSZONE"`,
      type: `string`
    },
    
    applies_to_doc_type: {
      sql: `${CUBE}."APPLIES_TO_DOC_TYPE"`,
      type: `string`
    },
    
    customer_disc_group: {
      sql: `${CUBE}."CUSTOMER_DISC_GROUP"`,
      type: `string`
    },
    
    sell_to_contact_no: {
      sql: `${CUBE}."SELL_TO_CONTACT_NO"`,
      type: `string`
    },
    
    system_modified_by: {
      sql: `${CUBE}."SYSTEM_MODIFIED_BY"`,
      type: `string`
    },
    
    sell_to_city: {
      sql: `${CUBE}."SELL_TO_CITY"`,
      type: `string`
    },
    
    prepayment_no_series: {
      sql: `${CUBE}."PREPAYMENT_NO_SERIES"`,
      type: `string`
    },
    
    shipping_agent_code: {
      sql: `${CUBE}."SHIPPING_AGENT_CODE"`,
      type: `string`
    },
    
    system_created_by: {
      sql: `${CUBE}."SYSTEM_CREATED_BY"`,
      type: `string`
    },
    
    tax_area_code: {
      sql: `${CUBE}."TAX_AREA_CODE"`,
      type: `string`
    },
    
    combine_shipments: {
      sql: `${CUBE}."COMBINE_SHIPMENTS"`,
      type: `boolean`
    },
    
    ship_to_address_2: {
      sql: `${CUBE}."SHIP_TO_ADDRESS_2"`,
      type: `string`
    },
    
    work_description: {
      sql: `${CUBE}."WORK_DESCRIPTION"`,
      type: `string`
    },
    
    sales_tax_amount_rounding: {
      sql: `${CUBE}."SALES_TAX_AMOUNT_ROUNDING"`,
      type: `string`
    },
    
    opportunity_no: {
      sql: `${CUBE}."OPPORTUNITY_NO"`,
      type: `string`
    },
    
    invoice_discount_amount: {
      sql: `${CUBE}."INVOICE_DISCOUNT_AMOUNT"`,
      type: `string`
    },
    
    outbound_whse_handling_time: {
      sql: `${CUBE}."OUTBOUND_WHSE_HANDLING_TIME"`,
      type: `string`
    },
    
    bill_to_address: {
      sql: `${CUBE}."BILL_TO_ADDRESS"`,
      type: `string`
    },
    
    payment_method_code: {
      sql: `${CUBE}."PAYMENT_METHOD_CODE"`,
      type: `string`
    },
    
    prepayment: {
      sql: `${CUBE}."PREPAYMENT"`,
      type: `string`
    },
    
    medical_ins_policy_number: {
      sql: `${CUBE}."MEDICAL_INS_POLICY_NUMBER"`,
      type: `string`
    },
    
    transit_distance: {
      sql: `${CUBE}."TRANSIT_DISTANCE"`,
      type: `string`
    },
    
    return_receipt_no_series: {
      sql: `${CUBE}."RETURN_RECEIPT_NO_SERIES"`,
      type: `string`
    },
    
    sell_to_county: {
      sql: `${CUBE}."SELL_TO_COUNTY"`,
      type: `string`
    },
    
    invoice_disc_code: {
      sql: `${CUBE}."INVOICE_DISC_CODE"`,
      type: `string`
    },
    
    foreign_trade: {
      sql: `${CUBE}."FOREIGN_TRADE"`,
      type: `boolean`
    },
    
    price_calculation_method: {
      sql: `${CUBE}."PRICE_CALCULATION_METHOD"`,
      type: `string`
    },
    
    allow_line_disc: {
      sql: `${CUBE}."ALLOW_LINE_DISC"`,
      type: `boolean`
    },
    
    shipped_not_invoiced: {
      sql: `${CUBE}."SHIPPED_NOT_INVOICED"`,
      type: `boolean`
    },
    
    payment_discount: {
      sql: `${CUBE}."PAYMENT_DISCOUNT"`,
      type: `string`
    },
    
    sell_to_customer_templ_code: {
      sql: `${CUBE}."SELL_TO_CUSTOMER_TEMPL_CODE"`,
      type: `string`
    },
    
    status: {
      sql: `${CUBE}."STATUS"`,
      type: `string`
    },
    
    prepmt_posting_description: {
      sql: `${CUBE}."PREPMT_POSTING_DESCRIPTION"`,
      type: `string`
    },
    
    ship_to_address: {
      sql: `${CUBE}."SHIP_TO_ADDRESS"`,
      type: `string`
    },
    
    ship_to_country_region_code: {
      sql: `${CUBE}."SHIP_TO_COUNTRY_REGION_CODE"`,
      type: `string`
    },
    
    invoice: {
      sql: `${CUBE}."INVOICE"`,
      type: `boolean`
    },
    
    bill_to_county: {
      sql: `${CUBE}."BILL_TO_COUNTY"`,
      type: `string`
    },
    
    bill_to_contact: {
      sql: `${CUBE}."BILL_TO_CONTACT"`,
      type: `string`
    },
    
    last_posting_no: {
      sql: `${CUBE}."LAST_POSTING_NO"`,
      type: `string`
    },
    
    ship_to_contact: {
      sql: `${CUBE}."SHIP_TO_CONTACT"`,
      type: `string`
    },
    
    bal_account_no: {
      sql: `${CUBE}."BAL_ACCOUNT_NO"`,
      type: `string`
    },
    
    bal_account_type: {
      sql: `${CUBE}."BAL_ACCOUNT_TYPE"`,
      type: `string`
    },
    
    quote_accepted: {
      sql: `${CUBE}."QUOTE_ACCEPTED"`,
      type: `boolean`
    },
    
    no_series: {
      sql: `${CUBE}."NO_SERIES"`,
      type: `string`
    },
    
    ste_transaction_id: {
      sql: `${CUBE}."STE_TRANSACTION_ID"`,
      type: `string`
    },
    
    completely_shipped: {
      sql: `${CUBE}."COMPLETELY_SHIPPED"`,
      type: `boolean`
    },
    
    sell_to_address: {
      sql: `${CUBE}."SELL_TO_ADDRESS"`,
      type: `string`
    },
    
    prepmt_payment_terms_code: {
      sql: `${CUBE}."PREPMT_PAYMENT_TERMS_CODE"`,
      type: `string`
    },
    
    reason_code: {
      sql: `${CUBE}."REASON_CODE"`,
      type: `string`
    },
    
    shipping_advice: {
      sql: `${CUBE}."SHIPPING_ADVICE"`,
      type: `string`
    },
    
    vat_bus_posting_group: {
      sql: `${CUBE}."VAT_BUS_POSTING_GROUP"`,
      type: `string`
    },
    
    sat_weight_unit_of_measure: {
      sql: `${CUBE}."SAT_WEIGHT_UNIT_OF_MEASURE"`,
      type: `string`
    },
    
    work_description_odata_media_edit_link: {
      sql: `${CUBE}."WORK_DESCRIPTION_ODATA_MEDIA_EDIT_LINK"`,
      type: `string`
    },
    
    late_order_shipping: {
      sql: `${CUBE}."LATE_ORDER_SHIPPING"`,
      type: `boolean`
    },
    
    currency_code: {
      sql: `${CUBE}."CURRENCY_CODE"`,
      type: `string`
    },
    
    last_shipping_no: {
      sql: `${CUBE}."LAST_SHIPPING_NO"`,
      type: `string`
    },
    
    document_type: {
      sql: `${CUBE}."DOCUMENT_TYPE"`,
      type: `string`
    },
    
    ship_to_city: {
      sql: `${CUBE}."SHIP_TO_CITY"`,
      type: `string`
    },
    
    last_return_receipt_no: {
      sql: `${CUBE}."LAST_RETURN_RECEIPT_NO"`,
      type: `string`
    },
    
    invoice_discount_value: {
      sql: `${CUBE}."INVOICE_DISCOUNT_VALUE"`,
      type: `string`
    },
    
    reserve: {
      sql: `${CUBE}."RESERVE"`,
      type: `string`
    },
    
    ic_reference_document_no: {
      sql: `${CUBE}."IC_REFERENCE_DOCUMENT_NO"`,
      type: `string`
    },
    
    trailer_1: {
      sql: `${CUBE}."TRAILER_1"`,
      type: `string`
    },
    
    quote_no: {
      sql: `${CUBE}."QUOTE_NO"`,
      type: `string`
    },
    
    applies_to_doc_no: {
      sql: `${CUBE}."APPLIES_TO_DOC_NO"`,
      type: `string`
    },
    
    ic_direction: {
      sql: `${CUBE}."IC_DIRECTION"`,
      type: `string`
    },
    
    shipping_agent_service_code: {
      sql: `${CUBE}."SHIPPING_AGENT_SERVICE_CODE"`,
      type: `string`
    },
    
    coupled_to_dataverse: {
      sql: `${CUBE}."COUPLED_TO_DATAVERSE"`,
      type: `boolean`
    },
    
    area: {
      sql: `${CUBE}."AREA"`,
      type: `string`
    },
    
    cfdi_relation: {
      sql: `${CUBE}."CFDI_RELATION"`,
      type: `string`
    },
    
    amt_ship_not_inv_lcy: {
      sql: `${CUBE}."AMT_SHIP_NOT_INV_LCY"`,
      type: `string`
    },
    
    vat_country_region_code: {
      sql: `${CUBE}."VAT_COUNTRY_REGION_CODE"`,
      type: `string`
    },
    
    vat_registration_no: {
      sql: `${CUBE}."VAT_REGISTRATION_NO"`,
      type: `string`
    },
    
    format_region: {
      sql: `${CUBE}."FORMAT_REGION"`,
      type: `string`
    },
    
    prepmt_include_tax: {
      sql: `${CUBE}."PREPMT_INCLUDE_TAX"`,
      type: `boolean`
    },
    
    ship_to_post_code: {
      sql: `${CUBE}."SHIP_TO_POST_CODE"`,
      type: `string`
    },
    
    posting_description: {
      sql: `${CUBE}."POSTING_DESCRIPTION"`,
      type: `string`
    },
    
    job_queue_status: {
      sql: `${CUBE}."JOB_QUEUE_STATUS"`,
      type: `string`
    },
    
    sell_to_customer_no: {
      sql: `${CUBE}."SELL_TO_CUSTOMER_NO"`,
      type: `string`
    },
    
    transport_method: {
      sql: `${CUBE}."TRANSPORT_METHOD"`,
      type: `string`
    },
    
    shortcut_dimension_1_code: {
      sql: `${CUBE}."SHORTCUT_DIMENSION_1_CODE"`,
      type: `string`
    },
    
    assigned_user_id: {
      sql: `${CUBE}."ASSIGNED_USER_ID"`,
      type: `string`
    },
    
    date_filter: {
      sql: `${CUBE}."DATE_FILTER"`,
      type: `string`
    },
    
    receive: {
      sql: `${CUBE}."RECEIVE"`,
      type: `boolean`
    },
    
    sell_to_customer_name_2: {
      sql: `${CUBE}."SELL_TO_CUSTOMER_NAME_2"`,
      type: `string`
    },
    
    customer_price_group: {
      sql: `${CUBE}."CUSTOMER_PRICE_GROUP"`,
      type: `string`
    },
    
    comment: {
      sql: `${CUBE}."COMMENT"`,
      type: `boolean`
    },
    
    work_description_odata_media_read_link: {
      sql: `${CUBE}."WORK_DESCRIPTION_ODATA_MEDIA_READ_LINK"`,
      type: `string`
    },
    
    salesperson_code: {
      sql: `${CUBE}."SALESPERSON_CODE"`,
      type: `string`
    },
    
    exchange_rate_usd: {
      sql: `${CUBE}."EXCHANGE_RATE_USD"`,
      type: `string`
    },
    
    ship_to_code: {
      sql: `${CUBE}."SHIP_TO_CODE"`,
      type: `string`
    },
    
    sell_to_email: {
      sql: `${CUBE}."SELL_TO_EMAIL"`,
      type: `string`
    },
    
    applies_to_id: {
      sql: `${CUBE}."APPLIES_TO_ID"`,
      type: `string`
    },
    
    sell_to_address_2: {
      sql: `${CUBE}."SELL_TO_ADDRESS_2"`,
      type: `string`
    },
    
    sell_to_icpartner_code: {
      sql: `${CUBE}."SELL_TO_ICPARTNER_CODE"`,
      type: `string`
    },
    
    sell_to_customer_name: {
      sql: `${CUBE}."SELL_TO_CUSTOMER_NAME"`,
      type: `string`
    },
    
    system_id: {
      sql: `${CUBE}."SYSTEM_ID"`,
      type: `string`
    },
    
    get_shipment_used: {
      sql: `${CUBE}."GET_SHIPMENT_USED"`,
      type: `boolean`
    },
    
    bill_to_city: {
      sql: `${CUBE}."BILL_TO_CITY"`,
      type: `string`
    },
    
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    },
    
    campaign_no: {
      sql: `${CUBE}."CAMPAIGN_NO"`,
      type: `string`
    },
    
    job_queue_entry_id: {
      sql: `${CUBE}."JOB_QUEUE_ENTRY_ID"`,
      type: `string`
    },
    
    send_icdocument: {
      sql: `${CUBE}."SEND_ICDOCUMENT"`,
      type: `boolean`
    },
    
    sell_to_contact: {
      sql: `${CUBE}."SELL_TO_CONTACT"`,
      type: `string`
    },
    
    posting_no: {
      sql: `${CUBE}."POSTING_NO"`,
      type: `string`
    },
    
    prepayment_no: {
      sql: `${CUBE}."PREPAYMENT_NO"`,
      type: `string`
    },
    
    exit_point: {
      sql: `${CUBE}."EXIT_POINT"`,
      type: `string`
    },
    
    external_document_no: {
      sql: `${CUBE}."EXTERNAL_DOCUMENT_NO"`,
      type: `string`
    },
    
    sat_international_trade_term: {
      sql: `${CUBE}."SAT_INTERNATIONAL_TRADE_TERM"`,
      type: `string`
    },
    
    transaction_type: {
      sql: `${CUBE}."TRANSACTION_TYPE"`,
      type: `string`
    },
    
    shortcut_dimension_2_code: {
      sql: `${CUBE}."SHORTCUT_DIMENSION_2_CODE"`,
      type: `string`
    },
    
    on_hold: {
      sql: `${CUBE}."ON_HOLD"`,
      type: `string`
    },
    
    transaction_specification: {
      sql: `${CUBE}."TRANSACTION_SPECIFICATION"`,
      type: `string`
    },
    
    shipment_method_code: {
      sql: `${CUBE}."SHIPMENT_METHOD_CODE"`,
      type: `string`
    },
    
    ship: {
      sql: `${CUBE}."SHIP"`,
      type: `boolean`
    },
    
    currency_factor: {
      sql: `${CUBE}."CURRENCY_FACTOR"`,
      type: `string`
    },
    
    return_receipt_no: {
      sql: `${CUBE}."RETURN_RECEIPT_NO"`,
      type: `string`
    },
    
    shipping_no_series: {
      sql: `${CUBE}."SHIPPING_NO_SERIES"`,
      type: `string`
    },
    
    is_test: {
      sql: `${CUBE}."IS_TEST"`,
      type: `boolean`
    },
    
    payment_terms_code: {
      sql: `${CUBE}."PAYMENT_TERMS_CODE"`,
      type: `string`
    },
    
    shipped: {
      sql: `${CUBE}."SHIPPED"`,
      type: `boolean`
    },
    
    ship_to_name: {
      sql: `${CUBE}."SHIP_TO_NAME"`,
      type: `string`
    },
    
    cfdi_period: {
      sql: `${CUBE}."CFDI_PERIOD"`,
      type: `string`
    },
    
    amount: {
      sql: `${CUBE}."AMOUNT"`,
      type: `string`
    },
    
    print_posted_documents: {
      sql: `${CUBE}."PRINT_POSTED_DOCUMENTS"`,
      type: `boolean`
    },
    
    sell_to_post_code: {
      sql: `${CUBE}."SELL_TO_POST_CODE"`,
      type: `string`
    },
    
    bill_to_name: {
      sql: `${CUBE}."BILL_TO_NAME"`,
      type: `string`
    },
    
    no: {
      sql: `${CUBE}."NO"`,
      type: `string`
    },
    
    correction: {
      sql: `${CUBE}."CORRECTION"`,
      type: `boolean`
    },
    
    location_filter: {
      sql: `${CUBE}."LOCATION_FILTER"`,
      type: `string`
    },
    
    recalculate_invoice_disc: {
      sql: `${CUBE}."RECALCULATE_INVOICE_DISC"`,
      type: `boolean`
    },
    
    location_code: {
      sql: `${CUBE}."LOCATION_CODE"`,
      type: `string`
    },
    
    sell_to_country_region_code: {
      sql: `${CUBE}."SELL_TO_COUNTRY_REGION_CODE"`,
      type: `string`
    },
    
    bill_to_address_2: {
      sql: `${CUBE}."BILL_TO_ADDRESS_2"`,
      type: `string`
    },
    
    shipping_time: {
      sql: `${CUBE}."SHIPPING_TIME"`,
      type: `string`
    },
    
    rcvd_from_count_region_code: {
      sql: `${CUBE}."RCVD_FROM_COUNT_REGION_CODE"`,
      type: `string`
    },
    
    bill_to_post_code: {
      sql: `${CUBE}."BILL_TO_POST_CODE"`,
      type: `string`
    },
    
    bill_to_icpartner_code: {
      sql: `${CUBE}."BILL_TO_ICPARTNER_CODE"`,
      type: `string`
    },
    
    last_prepmt_cr_memo_no: {
      sql: `${CUBE}."LAST_PREPMT_CR_MEMO_NO"`,
      type: `string`
    },
    
    prepmt_sales_tax_rounding_amt: {
      sql: `${CUBE}."PREPMT_SALES_TAX_ROUNDING_AMT"`,
      type: `string`
    },
    
    eu_3_party_trade: {
      sql: `${CUBE}."EU_3_PARTY_TRADE"`,
      type: `boolean`
    },
    
    your_reference: {
      sql: `${CUBE}."YOUR_REFERENCE"`,
      type: `string`
    },
    
    company_bank_account_code: {
      sql: `${CUBE}."COMPANY_BANK_ACCOUNT_CODE"`,
      type: `string`
    },
    
    bill_to_contact_no: {
      sql: `${CUBE}."BILL_TO_CONTACT_NO"`,
      type: `string`
    },
    
    compress_prepayment: {
      sql: `${CUBE}."COMPRESS_PREPAYMENT"`,
      type: `boolean`
    },
    
    prepmt_cr_memo_no: {
      sql: `${CUBE}."PREPMT_CR_MEMO_NO"`,
      type: `string`
    },
    
    tax_liable: {
      sql: `${CUBE}."TAX_LIABLE"`,
      type: `boolean`
    },
    
    bill_to_customer_templ_code: {
      sql: `${CUBE}."BILL_TO_CUSTOMER_TEMPL_CODE"`,
      type: `string`
    },
    
    last_prepayment_no: {
      sql: `${CUBE}."LAST_PREPAYMENT_NO"`,
      type: `string`
    },
    
    vehicle_code: {
      sql: `${CUBE}."VEHICLE_CODE"`,
      type: `string`
    },
    
    ic_status: {
      sql: `${CUBE}."IC_STATUS"`,
      type: `string`
    },
    
    sell_to_phone_no: {
      sql: `${CUBE}."SELL_TO_PHONE_NO"`,
      type: `string`
    },
    
    prepmt_cr_memo_no_series: {
      sql: `${CUBE}."PREPMT_CR_MEMO_NO_SERIES"`,
      type: `string`
    },
    
    shipping_no: {
      sql: `${CUBE}."SHIPPING_NO"`,
      type: `string`
    },
    
    customer_posting_group: {
      sql: `${CUBE}."CUSTOMER_POSTING_GROUP"`,
      type: `string`
    },
    
    responsibility_center: {
      sql: `${CUBE}."RESPONSIBILITY_CENTER"`,
      type: `string`
    },
    
    gen_bus_posting_group: {
      sql: `${CUBE}."GEN_BUS_POSTING_GROUP"`,
      type: `string`
    },
    
    vat_base_discount: {
      sql: `${CUBE}."VAT_BASE_DISCOUNT"`,
      type: `string`
    },
    
    system_created_at: {
      sql: `${CUBE}."SYSTEM_CREATED_AT"`,
      type: `time`
    },
    
    document_date: {
      sql: `${CUBE}."DOCUMENT_DATE"`,
      type: `time`
    },
    
    prepmt_pmt_discount_date: {
      sql: `${CUBE}."PREPMT_PMT_DISCOUNT_DATE"`,
      type: `time`
    },
    
    posting_date: {
      sql: `${CUBE}."POSTING_DATE"`,
      type: `time`
    },
    
    quote_accepted_date: {
      sql: `${CUBE}."QUOTE_ACCEPTED_DATE"`,
      type: `time`
    },
    
    system_modified_at: {
      sql: `${CUBE}."SYSTEM_MODIFIED_AT"`,
      type: `time`
    },
    
    pmt_discount_date: {
      sql: `${CUBE}."PMT_DISCOUNT_DATE"`,
      type: `time`
    },
    
    promised_delivery_date: {
      sql: `${CUBE}."PROMISED_DELIVERY_DATE"`,
      type: `time`
    },
    
    last_shipment_date: {
      sql: `${CUBE}."LAST_SHIPMENT_DATE"`,
      type: `time`
    },
    
    order_date: {
      sql: `${CUBE}."ORDER_DATE"`,
      type: `time`
    },
    
    quote_sent_to_customer: {
      sql: `${CUBE}."QUOTE_SENT_TO_CUSTOMER"`,
      type: `time`
    },
    
    prepayment_due_date: {
      sql: `${CUBE}."PREPAYMENT_DUE_DATE"`,
      type: `time`
    },
    
    due_date: {
      sql: `${CUBE}."DUE_DATE"`,
      type: `time`
    },
    
    transit_from_date_time: {
      sql: `${CUBE}."TRANSIT_FROM_DATE_TIME"`,
      type: `time`
    },
    
    quote_valid_until_date: {
      sql: `${CUBE}."QUOTE_VALID_UNTIL_DATE"`,
      type: `time`
    },
    
    shipment_date: {
      sql: `${CUBE}."SHIPMENT_DATE"`,
      type: `time`
    },
    
    vat_reporting_date: {
      sql: `${CUBE}."VAT_REPORTING_DATE"`,
      type: `time`
    },
    
    requested_delivery_date: {
      sql: `${CUBE}."REQUESTED_DELIVERY_DATE"`,
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
