cube(`sales_cr_memo_header`, {
  sql_table: `"BUSINESS_CENTRAL"."SALES_CR_MEMO_HEADER"`,
  
  data_source: `default`,
  
  joins: {
    company: {
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    opportunity_no: {
      sql: `${CUBE}."OPPORTUNITY_NO"`,
      type: `string`
    },
    
    invoice_disc_code: {
      sql: `${CUBE}."INVOICE_DISC_CODE"`,
      type: `string`
    },
    
    source_code: {
      sql: `${CUBE}."SOURCE_CODE"`,
      type: `string`
    },
    
    vat_registration_no: {
      sql: `${CUBE}."VAT_REGISTRATION_NO"`,
      type: `string`
    },
    
    bill_to_contact: {
      sql: `${CUBE}."BILL_TO_CONTACT"`,
      type: `string`
    },
    
    bill_to_customer_no: {
      sql: `${CUBE}."BILL_TO_CUSTOMER_NO"`,
      type: `string`
    },
    
    ship_to_city: {
      sql: `${CUBE}."SHIP_TO_CITY"`,
      type: `string`
    },
    
    vat_base_discount: {
      sql: `${CUBE}."VAT_BASE_DISCOUNT"`,
      type: `string`
    },
    
    user_id: {
      sql: `${CUBE}."USER_ID"`,
      type: `string`
    },
    
    date_time_canceled: {
      sql: `${CUBE}."DATE_TIME_CANCELED"`,
      type: `string`
    },
    
    customer_posting_group: {
      sql: `${CUBE}."CUSTOMER_POSTING_GROUP"`,
      type: `string`
    },
    
    document_exchange_identifier: {
      sql: `${CUBE}."DOCUMENT_EXCHANGE_IDENTIFIER"`,
      type: `string`
    },
    
    sell_to_customer_name: {
      sql: `${CUBE}."SELL_TO_CUSTOMER_NAME"`,
      type: `string`
    },
    
    comment: {
      sql: `${CUBE}."COMMENT"`,
      type: `boolean`
    },
    
    sell_to_phone_no: {
      sql: `${CUBE}."SELL_TO_PHONE_NO"`,
      type: `string`
    },
    
    document_exchange_status: {
      sql: `${CUBE}."DOCUMENT_EXCHANGE_STATUS"`,
      type: `string`
    },
    
    get_return_receipt_used: {
      sql: `${CUBE}."GET_RETURN_RECEIPT_USED"`,
      type: `boolean`
    },
    
    reason_code: {
      sql: `${CUBE}."REASON_CODE"`,
      type: `string`
    },
    
    ship_to_upszone: {
      sql: `${CUBE}."SHIP_TO_UPSZONE"`,
      type: `string`
    },
    
    transaction_specification: {
      sql: `${CUBE}."TRANSACTION_SPECIFICATION"`,
      type: `string`
    },
    
    tax_liable: {
      sql: `${CUBE}."TAX_LIABLE"`,
      type: `boolean`
    },
    
    substitution_document_no: {
      sql: `${CUBE}."SUBSTITUTION_DOCUMENT_NO"`,
      type: `string`
    },
    
    digital_stamp_sat: {
      sql: `${CUBE}."DIGITAL_STAMP_SAT"`,
      type: `string`
    },
    
    cfdi_export_code: {
      sql: `${CUBE}."CFDI_EXPORT_CODE"`,
      type: `string`
    },
    
    payment_terms_code: {
      sql: `${CUBE}."PAYMENT_TERMS_CODE"`,
      type: `string`
    },
    
    price_calculation_method: {
      sql: `${CUBE}."PRICE_CALCULATION_METHOD"`,
      type: `string`
    },
    
    no: {
      sql: `${CUBE}."NO"`,
      type: `string`
    },
    
    amount: {
      sql: `${CUBE}."AMOUNT"`,
      type: `string`
    },
    
    error_code: {
      sql: `${CUBE}."ERROR_CODE"`,
      type: `string`
    },
    
    eu_3_party_trade: {
      sql: `${CUBE}."EU_3_PARTY_TRADE"`,
      type: `boolean`
    },
    
    original_string: {
      sql: `${CUBE}."ORIGINAL_STRING"`,
      type: `string`
    },
    
    sat_international_trade_term: {
      sql: `${CUBE}."SAT_INTERNATIONAL_TRADE_TERM"`,
      type: `string`
    },
    
    ship_to_address_2: {
      sql: `${CUBE}."SHIP_TO_ADDRESS_2"`,
      type: `string`
    },
    
    exit_point: {
      sql: `${CUBE}."EXIT_POINT"`,
      type: `string`
    },
    
    applies_to_doc_no: {
      sql: `${CUBE}."APPLIES_TO_DOC_NO"`,
      type: `string`
    },
    
    prepayment_credit_memo: {
      sql: `${CUBE}."PREPAYMENT_CREDIT_MEMO"`,
      type: `boolean`
    },
    
    electronic_document_status: {
      sql: `${CUBE}."ELECTRONIC_DOCUMENT_STATUS"`,
      type: `string`
    },
    
    payment_discount: {
      sql: `${CUBE}."PAYMENT_DISCOUNT"`,
      type: `string`
    },
    
    ste_transaction_id: {
      sql: `${CUBE}."STE_TRANSACTION_ID"`,
      type: `string`
    },
    
    sell_to_customer_name_2: {
      sql: `${CUBE}."SELL_TO_CUSTOMER_NAME_2"`,
      type: `string`
    },
    
    error_description: {
      sql: `${CUBE}."ERROR_DESCRIPTION"`,
      type: `string`
    },
    
    bill_to_post_code: {
      sql: `${CUBE}."BILL_TO_POST_CODE"`,
      type: `string`
    },
    
    date_time_first_req_sent: {
      sql: `${CUBE}."DATE_TIME_FIRST_REQ_SENT"`,
      type: `string`
    },
    
    sell_to_address: {
      sql: `${CUBE}."SELL_TO_ADDRESS"`,
      type: `string`
    },
    
    marked_as_canceled: {
      sql: `${CUBE}."MARKED_AS_CANCELED"`,
      type: `boolean`
    },
    
    company_bank_account_code: {
      sql: `${CUBE}."COMPANY_BANK_ACCOUNT_CODE"`,
      type: `string`
    },
    
    cfdi_purpose: {
      sql: `${CUBE}."CFDI_PURPOSE"`,
      type: `string`
    },
    
    system_id: {
      sql: `${CUBE}."SYSTEM_ID"`,
      type: `string`
    },
    
    date_time_stamped: {
      sql: `${CUBE}."DATE_TIME_STAMPED"`,
      type: `string`
    },
    
    salesperson_code: {
      sql: `${CUBE}."SALESPERSON_CODE"`,
      type: `string`
    },
    
    ship_to_contact: {
      sql: `${CUBE}."SHIP_TO_CONTACT"`,
      type: `string`
    },
    
    bal_account_type: {
      sql: `${CUBE}."BAL_ACCOUNT_TYPE"`,
      type: `string`
    },
    
    external_document_no: {
      sql: `${CUBE}."EXTERNAL_DOCUMENT_NO"`,
      type: `string`
    },
    
    bill_to_name: {
      sql: `${CUBE}."BILL_TO_NAME"`,
      type: `string`
    },
    
    prepmt_cr_memo_no_series: {
      sql: `${CUBE}."PREPMT_CR_MEMO_NO_SERIES"`,
      type: `string`
    },
    
    ship_to_address: {
      sql: `${CUBE}."SHIP_TO_ADDRESS"`,
      type: `string`
    },
    
    cfdi_relation: {
      sql: `${CUBE}."CFDI_RELATION"`,
      type: `string`
    },
    
    prices_including_vat: {
      sql: `${CUBE}."PRICES_INCLUDING_VAT"`,
      type: `boolean`
    },
    
    remaining_amount: {
      sql: `${CUBE}."REMAINING_AMOUNT"`,
      type: `string`
    },
    
    corrective: {
      sql: `${CUBE}."CORRECTIVE"`,
      type: `boolean`
    },
    
    cfdi_cancellation_reason_code: {
      sql: `${CUBE}."CFDI_CANCELLATION_REASON_CODE"`,
      type: `string`
    },
    
    sell_to_post_code: {
      sql: `${CUBE}."SELL_TO_POST_CODE"`,
      type: `string`
    },
    
    date_time_sent: {
      sql: `${CUBE}."DATE_TIME_SENT"`,
      type: `string`
    },
    
    certificate_serial_no: {
      sql: `${CUBE}."CERTIFICATE_SERIAL_NO"`,
      type: `string`
    },
    
    bill_to_address_2: {
      sql: `${CUBE}."BILL_TO_ADDRESS_2"`,
      type: `string`
    },
    
    electronic_document_sent: {
      sql: `${CUBE}."ELECTRONIC_DOCUMENT_SENT"`,
      type: `boolean`
    },
    
    draft_cr_memo_system_id: {
      sql: `${CUBE}."DRAFT_CR_MEMO_SYSTEM_ID"`,
      type: `string`
    },
    
    shipping_agent_code: {
      sql: `${CUBE}."SHIPPING_AGENT_CODE"`,
      type: `string`
    },
    
    vat_bus_posting_group: {
      sql: `${CUBE}."VAT_BUS_POSTING_GROUP"`,
      type: `string`
    },
    
    on_hold: {
      sql: `${CUBE}."ON_HOLD"`,
      type: `string`
    },
    
    original_document_xml: {
      sql: `${CUBE}."ORIGINAL_DOCUMENT_XML"`,
      type: `string`
    },
    
    pre_assigned_no: {
      sql: `${CUBE}."PRE_ASSIGNED_NO"`,
      type: `string`
    },
    
    bill_to_contact_no: {
      sql: `${CUBE}."BILL_TO_CONTACT_NO"`,
      type: `string`
    },
    
    responsibility_center: {
      sql: `${CUBE}."RESPONSIBILITY_CENTER"`,
      type: `string`
    },
    
    transaction_type: {
      sql: `${CUBE}."TRANSACTION_TYPE"`,
      type: `string`
    },
    
    area: {
      sql: `${CUBE}."AREA"`,
      type: `string`
    },
    
    prepayment_order_no: {
      sql: `${CUBE}."PREPAYMENT_ORDER_NO"`,
      type: `string`
    },
    
    posting_description: {
      sql: `${CUBE}."POSTING_DESCRIPTION"`,
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
    
    allow_line_disc: {
      sql: `${CUBE}."ALLOW_LINE_DISC"`,
      type: `boolean`
    },
    
    fiscal_invoice_number_pac: {
      sql: `${CUBE}."FISCAL_INVOICE_NUMBER_PAC"`,
      type: `string`
    },
    
    correction: {
      sql: `${CUBE}."CORRECTION"`,
      type: `boolean`
    },
    
    ship_to_country_region_code: {
      sql: `${CUBE}."SHIP_TO_COUNTRY_REGION_CODE"`,
      type: `string`
    },
    
    qr_code: {
      sql: `${CUBE}."QR_CODE"`,
      type: `string`
    },
    
    work_description: {
      sql: `${CUBE}."WORK_DESCRIPTION"`,
      type: `string`
    },
    
    applies_to_doc_type: {
      sql: `${CUBE}."APPLIES_TO_DOC_TYPE"`,
      type: `string`
    },
    
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    },
    
    currency_factor: {
      sql: `${CUBE}."CURRENCY_FACTOR"`,
      type: `string`
    },
    
    sell_to_address_2: {
      sql: `${CUBE}."SELL_TO_ADDRESS_2"`,
      type: `string`
    },
    
    sell_to_contact: {
      sql: `${CUBE}."SELL_TO_CONTACT"`,
      type: `string`
    },
    
    ship_to_name: {
      sql: `${CUBE}."SHIP_TO_NAME"`,
      type: `string`
    },
    
    shipment_method_code: {
      sql: `${CUBE}."SHIPMENT_METHOD_CODE"`,
      type: `string`
    },
    
    bill_to_address: {
      sql: `${CUBE}."BILL_TO_ADDRESS"`,
      type: `string`
    },
    
    system_created_by: {
      sql: `${CUBE}."SYSTEM_CREATED_BY"`,
      type: `string`
    },
    
    ship_to_county: {
      sql: `${CUBE}."SHIP_TO_COUNTY"`,
      type: `string`
    },
    
    bill_to_city: {
      sql: `${CUBE}."BILL_TO_CITY"`,
      type: `string`
    },
    
    location_code: {
      sql: `${CUBE}."LOCATION_CODE"`,
      type: `string`
    },
    
    customer_price_group: {
      sql: `${CUBE}."CUSTOMER_PRICE_GROUP"`,
      type: `string`
    },
    
    pac_web_service_name: {
      sql: `${CUBE}."PAC_WEB_SERVICE_NAME"`,
      type: `string`
    },
    
    bill_to_name_2: {
      sql: `${CUBE}."BILL_TO_NAME_2"`,
      type: `string`
    },
    
    transport_method: {
      sql: `${CUBE}."TRANSPORT_METHOD"`,
      type: `string`
    },
    
    campaign_no: {
      sql: `${CUBE}."CAMPAIGN_NO"`,
      type: `string`
    },
    
    signed_document_xml: {
      sql: `${CUBE}."SIGNED_DOCUMENT_XML"`,
      type: `string`
    },
    
    sell_to_county: {
      sql: `${CUBE}."SELL_TO_COUNTY"`,
      type: `string`
    },
    
    digital_stamp_pac: {
      sql: `${CUBE}."DIGITAL_STAMP_PAC"`,
      type: `string`
    },
    
    customer_disc_group: {
      sql: `${CUBE}."CUSTOMER_DISC_GROUP"`,
      type: `string`
    },
    
    amount_including_vat: {
      sql: `${CUBE}."AMOUNT_INCLUDING_VAT"`,
      type: `string`
    },
    
    currency_code: {
      sql: `${CUBE}."CURRENCY_CODE"`,
      type: `string`
    },
    
    shipping_agent_service_code: {
      sql: `${CUBE}."SHIPPING_AGENT_SERVICE_CODE"`,
      type: `string`
    },
    
    foreign_trade: {
      sql: `${CUBE}."FOREIGN_TRADE"`,
      type: `boolean`
    },
    
    shortcut_dimension_2_code: {
      sql: `${CUBE}."SHORTCUT_DIMENSION_2_CODE"`,
      type: `string`
    },
    
    return_order_no: {
      sql: `${CUBE}."RETURN_ORDER_NO"`,
      type: `string`
    },
    
    doc_exch_original_identifier: {
      sql: `${CUBE}."DOC_EXCH_ORIGINAL_IDENTIFIER"`,
      type: `string`
    },
    
    sell_to_contact_no: {
      sql: `${CUBE}."SELL_TO_CONTACT_NO"`,
      type: `string`
    },
    
    bal_account_no: {
      sql: `${CUBE}."BAL_ACCOUNT_NO"`,
      type: `string`
    },
    
    paid: {
      sql: `${CUBE}."PAID"`,
      type: `boolean`
    },
    
    shortcut_dimension_1_code: {
      sql: `${CUBE}."SHORTCUT_DIMENSION_1_CODE"`,
      type: `string`
    },
    
    format_region: {
      sql: `${CUBE}."FORMAT_REGION"`,
      type: `string`
    },
    
    rcvd_from_count_region_code: {
      sql: `${CUBE}."RCVD_FROM_COUNT_REGION_CODE"`,
      type: `string`
    },
    
    return_order_no_series: {
      sql: `${CUBE}."RETURN_ORDER_NO_SERIES"`,
      type: `string`
    },
    
    no_series: {
      sql: `${CUBE}."NO_SERIES"`,
      type: `string`
    },
    
    language_code: {
      sql: `${CUBE}."LANGUAGE_CODE"`,
      type: `string`
    },
    
    vat_country_region_code: {
      sql: `${CUBE}."VAT_COUNTRY_REGION_CODE"`,
      type: `string`
    },
    
    pre_assigned_no_series: {
      sql: `${CUBE}."PRE_ASSIGNED_NO_SERIES"`,
      type: `string`
    },
    
    ship_to_name_2: {
      sql: `${CUBE}."SHIP_TO_NAME_2"`,
      type: `string`
    },
    
    gen_bus_posting_group: {
      sql: `${CUBE}."GEN_BUS_POSTING_GROUP"`,
      type: `string`
    },
    
    bill_to_county: {
      sql: `${CUBE}."BILL_TO_COUNTY"`,
      type: `string`
    },
    
    exchange_rate_usd: {
      sql: `${CUBE}."EXCHANGE_RATE_USD"`,
      type: `string`
    },
    
    sell_to_customer_no: {
      sql: `${CUBE}."SELL_TO_CUSTOMER_NO"`,
      type: `string`
    },
    
    system_modified_by: {
      sql: `${CUBE}."SYSTEM_MODIFIED_BY"`,
      type: `string`
    },
    
    cancelled: {
      sql: `${CUBE}."CANCELLED"`,
      type: `boolean`
    },
    
    your_reference: {
      sql: `${CUBE}."YOUR_REFERENCE"`,
      type: `string`
    },
    
    payment_method_code: {
      sql: `${CUBE}."PAYMENT_METHOD_CODE"`,
      type: `string`
    },
    
    cfdi_cancellation_id: {
      sql: `${CUBE}."CFDI_CANCELLATION_ID"`,
      type: `string`
    },
    
    tax_exemption_no: {
      sql: `${CUBE}."TAX_EXEMPTION_NO"`,
      type: `string`
    },
    
    ship_to_post_code: {
      sql: `${CUBE}."SHIP_TO_POST_CODE"`,
      type: `string`
    },
    
    sell_to_country_region_code: {
      sql: `${CUBE}."SELL_TO_COUNTRY_REGION_CODE"`,
      type: `string`
    },
    
    bill_to_country_region_code: {
      sql: `${CUBE}."BILL_TO_COUNTRY_REGION_CODE"`,
      type: `string`
    },
    
    tax_area_code: {
      sql: `${CUBE}."TAX_AREA_CODE"`,
      type: `string`
    },
    
    sell_to_city: {
      sql: `${CUBE}."SELL_TO_CITY"`,
      type: `string`
    },
    
    invoice_discount_amount: {
      sql: `${CUBE}."INVOICE_DISCOUNT_AMOUNT"`,
      type: `string`
    },
    
    system_created_at: {
      sql: `${CUBE}."SYSTEM_CREATED_AT"`,
      type: `time`
    },
    
    posting_date: {
      sql: `${CUBE}."POSTING_DATE"`,
      type: `time`
    },
    
    date_time_stamp_received: {
      sql: `${CUBE}."DATE_TIME_STAMP_RECEIVED"`,
      type: `time`
    },
    
    document_date: {
      sql: `${CUBE}."DOCUMENT_DATE"`,
      type: `time`
    },
    
    system_modified_at: {
      sql: `${CUBE}."SYSTEM_MODIFIED_AT"`,
      type: `time`
    },
    
    due_date: {
      sql: `${CUBE}."DUE_DATE"`,
      type: `time`
    },
    
    pmt_discount_date: {
      sql: `${CUBE}."PMT_DISCOUNT_DATE"`,
      type: `time`
    },
    
    vat_reporting_date: {
      sql: `${CUBE}."VAT_REPORTING_DATE"`,
      type: `time`
    },
    
    shipment_date: {
      sql: `${CUBE}."SHIPMENT_DATE"`,
      type: `time`
    },
    
    date_time_cancel_sent: {
      sql: `${CUBE}."DATE_TIME_CANCEL_SENT"`,
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
