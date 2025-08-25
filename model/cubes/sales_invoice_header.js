cube(`sales_invoice_header`, {
  sql_table: `"BUSINESS_CENTRAL"."SALES_INVOICE_HEADER"`,
  
  data_source: `default`,
  
  joins: {
    company: {
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    },
    
    sell_to_post_code: {
      sql: `${CUBE}."SELL_TO_POST_CODE"`,
      type: `string`
    },
    
    document_exchange_status: {
      sql: `${CUBE}."DOCUMENT_EXCHANGE_STATUS"`,
      type: `string`
    },
    
    applies_to_doc_type: {
      sql: `${CUBE}."APPLIES_TO_DOC_TYPE"`,
      type: `string`
    },
    
    date_time_first_req_sent: {
      sql: `${CUBE}."DATE_TIME_FIRST_REQ_SENT"`,
      type: `string`
    },
    
    cfdi_cancellation_id: {
      sql: `${CUBE}."CFDI_CANCELLATION_ID"`,
      type: `string`
    },
    
    original_string: {
      sql: `${CUBE}."ORIGINAL_STRING"`,
      type: `string`
    },
    
    error_code: {
      sql: `${CUBE}."ERROR_CODE"`,
      type: `string`
    },
    
    shipment_method_code: {
      sql: `${CUBE}."SHIPMENT_METHOD_CODE"`,
      type: `string`
    },
    
    vat_base_discount: {
      sql: `${CUBE}."VAT_BASE_DISCOUNT"`,
      type: `string`
    },
    
    system_modified_by: {
      sql: `${CUBE}."SYSTEM_MODIFIED_BY"`,
      type: `string`
    },
    
    cfdi_export_code: {
      sql: `${CUBE}."CFDI_EXPORT_CODE"`,
      type: `string`
    },
    
    prepayment_invoice: {
      sql: `${CUBE}."PREPAYMENT_INVOICE"`,
      type: `boolean`
    },
    
    sell_to_contact: {
      sql: `${CUBE}."SELL_TO_CONTACT"`,
      type: `string`
    },
    
    pre_assigned_no_series: {
      sql: `${CUBE}."PRE_ASSIGNED_NO_SERIES"`,
      type: `string`
    },
    
    foreign_trade: {
      sql: `${CUBE}."FOREIGN_TRADE"`,
      type: `boolean`
    },
    
    corrective: {
      sql: `${CUBE}."CORRECTIVE"`,
      type: `boolean`
    },
    
    ship_to_county: {
      sql: `${CUBE}."SHIP_TO_COUNTY"`,
      type: `string`
    },
    
    ship_to_country_region_code: {
      sql: `${CUBE}."SHIP_TO_COUNTRY_REGION_CODE"`,
      type: `string`
    },
    
    customer_price_group: {
      sql: `${CUBE}."CUSTOMER_PRICE_GROUP"`,
      type: `string`
    },
    
    sell_to_customer_name_2: {
      sql: `${CUBE}."SELL_TO_CUSTOMER_NAME_2"`,
      type: `string`
    },
    
    bill_to_post_code: {
      sql: `${CUBE}."BILL_TO_POST_CODE"`,
      type: `string`
    },
    
    bill_to_city: {
      sql: `${CUBE}."BILL_TO_CITY"`,
      type: `string`
    },
    
    substitution_document_no: {
      sql: `${CUBE}."SUBSTITUTION_DOCUMENT_NO"`,
      type: `string`
    },
    
    electronic_document_sent: {
      sql: `${CUBE}."ELECTRONIC_DOCUMENT_SENT"`,
      type: `boolean`
    },
    
    digital_stamp_sat_odata_media_edit_link: {
      sql: `${CUBE}."DIGITAL_STAMP_SAT_ODATA_MEDIA_EDIT_LINK"`,
      type: `string`
    },
    
    comment: {
      sql: `${CUBE}."COMMENT"`,
      type: `boolean`
    },
    
    electronic_document_status: {
      sql: `${CUBE}."ELECTRONIC_DOCUMENT_STATUS"`,
      type: `string`
    },
    
    posting_description: {
      sql: `${CUBE}."POSTING_DESCRIPTION"`,
      type: `string`
    },
    
    exchange_rate_usd: {
      sql: `${CUBE}."EXCHANGE_RATE_USD"`,
      type: `string`
    },
    
    payment_terms_code: {
      sql: `${CUBE}."PAYMENT_TERMS_CODE"`,
      type: `string`
    },
    
    reason_code: {
      sql: `${CUBE}."REASON_CODE"`,
      type: `string`
    },
    
    amount_including_vat: {
      sql: `${CUBE}."AMOUNT_INCLUDING_VAT"`,
      type: `string`
    },
    
    prepayment_no_series: {
      sql: `${CUBE}."PREPAYMENT_NO_SERIES"`,
      type: `string`
    },
    
    bill_to_name_2: {
      sql: `${CUBE}."BILL_TO_NAME_2"`,
      type: `string`
    },
    
    eu_3_party_trade: {
      sql: `${CUBE}."EU_3_PARTY_TRADE"`,
      type: `boolean`
    },
    
    ship_to_post_code: {
      sql: `${CUBE}."SHIP_TO_POST_CODE"`,
      type: `string`
    },
    
    date_time_stamped: {
      sql: `${CUBE}."DATE_TIME_STAMPED"`,
      type: `string`
    },
    
    doc_exch_original_identifier: {
      sql: `${CUBE}."DOC_EXCH_ORIGINAL_IDENTIFIER"`,
      type: `string`
    },
    
    cfdi_cancellation_reason_code: {
      sql: `${CUBE}."CFDI_CANCELLATION_REASON_CODE"`,
      type: `string`
    },
    
    closed: {
      sql: `${CUBE}."CLOSED"`,
      type: `boolean`
    },
    
    bill_to_country_region_code: {
      sql: `${CUBE}."BILL_TO_COUNTRY_REGION_CODE"`,
      type: `string`
    },
    
    allow_line_disc: {
      sql: `${CUBE}."ALLOW_LINE_DISC"`,
      type: `boolean`
    },
    
    sell_to_customer_no: {
      sql: `${CUBE}."SELL_TO_CUSTOMER_NO"`,
      type: `string`
    },
    
    signed_document_xml_odata_media_edit_link: {
      sql: `${CUBE}."SIGNED_DOCUMENT_XML_ODATA_MEDIA_EDIT_LINK"`,
      type: `string`
    },
    
    signed_document_xml: {
      sql: `${CUBE}."SIGNED_DOCUMENT_XML"`,
      type: `string`
    },
    
    ship_to_upszone: {
      sql: `${CUBE}."SHIP_TO_UPSZONE"`,
      type: `string`
    },
    
    reversed: {
      sql: `${CUBE}."REVERSED"`,
      type: `boolean`
    },
    
    ship_to_contact: {
      sql: `${CUBE}."SHIP_TO_CONTACT"`,
      type: `string`
    },
    
    draft_invoice_system_id: {
      sql: `${CUBE}."DRAFT_INVOICE_SYSTEM_ID"`,
      type: `string`
    },
    
    marked_as_canceled: {
      sql: `${CUBE}."MARKED_AS_CANCELED"`,
      type: `boolean`
    },
    
    bill_to_address: {
      sql: `${CUBE}."BILL_TO_ADDRESS"`,
      type: `string`
    },
    
    customer_disc_group: {
      sql: `${CUBE}."CUSTOMER_DISC_GROUP"`,
      type: `string`
    },
    
    signed_document_xml_odata_media_read_link: {
      sql: `${CUBE}."SIGNED_DOCUMENT_XML_ODATA_MEDIA_READ_LINK"`,
      type: `string`
    },
    
    bill_to_contact_no: {
      sql: `${CUBE}."BILL_TO_CONTACT_NO"`,
      type: `string`
    },
    
    location_code: {
      sql: `${CUBE}."LOCATION_CODE"`,
      type: `string`
    },
    
    no: {
      sql: `${CUBE}."NO"`,
      type: `string`,
      primary_key: true
    },
    
    sat_international_trade_term: {
      sql: `${CUBE}."SAT_INTERNATIONAL_TRADE_TERM"`,
      type: `string`
    },
    
    format_region: {
      sql: `${CUBE}."FORMAT_REGION"`,
      type: `string`
    },
    
    ship_to_address_2: {
      sql: `${CUBE}."SHIP_TO_ADDRESS_2"`,
      type: `string`
    },
    
    invoice_discount_amount: {
      sql: `${CUBE}."INVOICE_DISCOUNT_AMOUNT"`,
      type: `string`
    },
    
    fiscal_invoice_number_pac: {
      sql: `${CUBE}."FISCAL_INVOICE_NUMBER_PAC"`,
      type: `string`
    },
    
    source_code: {
      sql: `${CUBE}."SOURCE_CODE"`,
      type: `string`
    },
    
    transaction_specification: {
      sql: `${CUBE}."TRANSACTION_SPECIFICATION"`,
      type: `string`
    },
    
    customer_posting_group: {
      sql: `${CUBE}."CUSTOMER_POSTING_GROUP"`,
      type: `string`
    },
    
    salesperson_code: {
      sql: `${CUBE}."SALESPERSON_CODE"`,
      type: `string`
    },
    
    sell_to_contact_no: {
      sql: `${CUBE}."SELL_TO_CONTACT_NO"`,
      type: `string`
    },
    
    tax_exemption_no: {
      sql: `${CUBE}."TAX_EXEMPTION_NO"`,
      type: `string`
    },
    
    payment_method_code: {
      sql: `${CUBE}."PAYMENT_METHOD_CODE"`,
      type: `string`
    },
    
    ste_transaction_id: {
      sql: `${CUBE}."STE_TRANSACTION_ID"`,
      type: `string`
    },
    
    invoice_disc_code: {
      sql: `${CUBE}."INVOICE_DISC_CODE"`,
      type: `string`
    },
    
    responsibility_center: {
      sql: `${CUBE}."RESPONSIBILITY_CENTER"`,
      type: `string`
    },
    
    cfdi_period: {
      sql: `${CUBE}."CFDI_PERIOD"`,
      type: `string`
    },
    
    sell_to_phone_no: {
      sql: `${CUBE}."SELL_TO_PHONE_NO"`,
      type: `string`
    },
    
    work_description: {
      sql: `${CUBE}."WORK_DESCRIPTION"`,
      type: `string`
    },
    
    transport_method: {
      sql: `${CUBE}."TRANSPORT_METHOD"`,
      type: `string`
    },
    
    original_document_xml_odata_media_edit_link: {
      sql: `${CUBE}."ORIGINAL_DOCUMENT_XML_ODATA_MEDIA_EDIT_LINK"`,
      type: `string`
    },
    
    bal_account_no: {
      sql: `${CUBE}."BAL_ACCOUNT_NO"`,
      type: `string`
    },
    
    date_time_sent: {
      sql: `${CUBE}."DATE_TIME_SENT"`,
      type: `string`
    },
    
    shortcut_dimension_2_code: {
      sql: `${CUBE}."SHORTCUT_DIMENSION_2_CODE"`,
      type: `string`
    },
    
    payment_reference: {
      sql: `${CUBE}."PAYMENT_REFERENCE"`,
      type: `string`
    },
    
    vat_bus_posting_group: {
      sql: `${CUBE}."VAT_BUS_POSTING_GROUP"`,
      type: `string`
    },
    
    opportunity_no: {
      sql: `${CUBE}."OPPORTUNITY_NO"`,
      type: `string`
    },
    
    language_code: {
      sql: `${CUBE}."LANGUAGE_CODE"`,
      type: `string`
    },
    
    on_hold: {
      sql: `${CUBE}."ON_HOLD"`,
      type: `string`
    },
    
    original_string_odata_media_edit_link: {
      sql: `${CUBE}."ORIGINAL_STRING_ODATA_MEDIA_EDIT_LINK"`,
      type: `string`
    },
    
    cancelled: {
      sql: `${CUBE}."CANCELLED"`,
      type: `boolean`
    },
    
    ship_to_name: {
      sql: `${CUBE}."SHIP_TO_NAME"`,
      type: `string`
    },
    
    ship_to_address: {
      sql: `${CUBE}."SHIP_TO_ADDRESS"`,
      type: `string`
    },
    
    system_id: {
      sql: `${CUBE}."SYSTEM_ID"`,
      type: `string`
    },
    
    ship_to_code: {
      sql: `${CUBE}."SHIP_TO_CODE"`,
      type: `string`
    },
    
    price_calculation_method: {
      sql: `${CUBE}."PRICE_CALCULATION_METHOD"`,
      type: `string`
    },
    
    payment_discount: {
      sql: `${CUBE}."PAYMENT_DISCOUNT"`,
      type: `string`
    },
    
    sell_to_email: {
      sql: `${CUBE}."SELL_TO_EMAIL"`,
      type: `string`
    },
    
    digital_stamp_sat_odata_media_read_link: {
      sql: `${CUBE}."DIGITAL_STAMP_SAT_ODATA_MEDIA_READ_LINK"`,
      type: `string`
    },
    
    prepayment_order_no: {
      sql: `${CUBE}."PREPAYMENT_ORDER_NO"`,
      type: `string`
    },
    
    invoice_discount_calculation: {
      sql: `${CUBE}."INVOICE_DISCOUNT_CALCULATION"`,
      type: `string`
    },
    
    sell_to_customer_name: {
      sql: `${CUBE}."SELL_TO_CUSTOMER_NAME"`,
      type: `string`
    },
    
    direct_debit_mandate_id: {
      sql: `${CUBE}."DIRECT_DEBIT_MANDATE_ID"`,
      type: `string`
    },
    
    sell_to_county: {
      sql: `${CUBE}."SELL_TO_COUNTY"`,
      type: `string`
    },
    
    pre_assigned_no: {
      sql: `${CUBE}."PRE_ASSIGNED_NO"`,
      type: `string`
    },
    
    original_string_odata_media_read_link: {
      sql: `${CUBE}."ORIGINAL_STRING_ODATA_MEDIA_READ_LINK"`,
      type: `string`
    },
    
    gen_bus_posting_group: {
      sql: `${CUBE}."GEN_BUS_POSTING_GROUP"`,
      type: `string`
    },
    
    qr_code_odata_media_edit_link: {
      sql: `${CUBE}."QR_CODE_ODATA_MEDIA_EDIT_LINK"`,
      type: `string`
    },
    
    currency_code: {
      sql: `${CUBE}."CURRENCY_CODE"`,
      type: `string`
    },
    
    cfdi_purpose: {
      sql: `${CUBE}."CFDI_PURPOSE"`,
      type: `string`
    },
    
    get_shipment_used: {
      sql: `${CUBE}."GET_SHIPMENT_USED"`,
      type: `boolean`
    },
    
    currency_factor: {
      sql: `${CUBE}."CURRENCY_FACTOR"`,
      type: `string`
    },
    
    user_id: {
      sql: `${CUBE}."USER_ID"`,
      type: `string`
    },
    
    digital_stamp_pac_odata_media_edit_link: {
      sql: `${CUBE}."DIGITAL_STAMP_PAC_ODATA_MEDIA_EDIT_LINK"`,
      type: `string`
    },
    
    correction: {
      sql: `${CUBE}."CORRECTION"`,
      type: `boolean`
    },
    
    sell_to_city: {
      sql: `${CUBE}."SELL_TO_CITY"`,
      type: `string`
    },
    
    area: {
      sql: `${CUBE}."AREA"`,
      type: `string`
    },
    
    work_description_odata_media_edit_link: {
      sql: `${CUBE}."WORK_DESCRIPTION_ODATA_MEDIA_EDIT_LINK"`,
      type: `string`
    },
    
    digital_stamp_pac: {
      sql: `${CUBE}."DIGITAL_STAMP_PAC"`,
      type: `string`
    },
    
    prices_including_vat: {
      sql: `${CUBE}."PRICES_INCLUDING_VAT"`,
      type: `boolean`
    },
    
    tax_area_code: {
      sql: `${CUBE}."TAX_AREA_CODE"`,
      type: `string`
    },
    
    bill_to_contact: {
      sql: `${CUBE}."BILL_TO_CONTACT"`,
      type: `string`
    },
    
    ship_to_city: {
      sql: `${CUBE}."SHIP_TO_CITY"`,
      type: `string`
    },
    
    vat_registration_no: {
      sql: `${CUBE}."VAT_REGISTRATION_NO"`,
      type: `string`
    },
    
    original_document_xml: {
      sql: `${CUBE}."ORIGINAL_DOCUMENT_XML"`,
      type: `string`
    },
    
    pac_web_service_name: {
      sql: `${CUBE}."PAC_WEB_SERVICE_NAME"`,
      type: `string`
    },
    
    company_bank_account_code: {
      sql: `${CUBE}."COMPANY_BANK_ACCOUNT_CODE"`,
      type: `string`
    },
    
    external_document_no: {
      sql: `${CUBE}."EXTERNAL_DOCUMENT_NO"`,
      type: `string`
    },
    
    bal_account_type: {
      sql: `${CUBE}."BAL_ACCOUNT_TYPE"`,
      type: `string`
    },
    
    no_series: {
      sql: `${CUBE}."NO_SERIES"`,
      type: `string`
    },
    
    certificate_serial_no: {
      sql: `${CUBE}."CERTIFICATE_SERIAL_NO"`,
      type: `string`
    },
    
    sell_to_country_region_code: {
      sql: `${CUBE}."SELL_TO_COUNTRY_REGION_CODE"`,
      type: `string`
    },
    
    sell_to_address: {
      sql: `${CUBE}."SELL_TO_ADDRESS"`,
      type: `string`
    },
    
    shortcut_dimension_1_code: {
      sql: `${CUBE}."SHORTCUT_DIMENSION_1_CODE"`,
      type: `string`
    },
    
    error_description: {
      sql: `${CUBE}."ERROR_DESCRIPTION"`,
      type: `string`
    },
    
    order_no_series: {
      sql: `${CUBE}."ORDER_NO_SERIES"`,
      type: `string`
    },
    
    bill_to_address_2: {
      sql: `${CUBE}."BILL_TO_ADDRESS_2"`,
      type: `string`
    },
    
    digital_stamp_pac_odata_media_read_link: {
      sql: `${CUBE}."DIGITAL_STAMP_PAC_ODATA_MEDIA_READ_LINK"`,
      type: `string`
    },
    
    order_no: {
      sql: `${CUBE}."ORDER_NO"`,
      type: `string`
    },
    
    system_created_by: {
      sql: `${CUBE}."SYSTEM_CREATED_BY"`,
      type: `string`
    },
    
    digital_stamp_sat: {
      sql: `${CUBE}."DIGITAL_STAMP_SAT"`,
      type: `string`
    },
    
    document_exchange_identifier: {
      sql: `${CUBE}."DOCUMENT_EXCHANGE_IDENTIFIER"`,
      type: `string`
    },
    
    shipping_agent_code: {
      sql: `${CUBE}."SHIPPING_AGENT_CODE"`,
      type: `string`
    },
    
    transaction_type: {
      sql: `${CUBE}."TRANSACTION_TYPE"`,
      type: `string`
    },
    
    work_description_odata_media_read_link: {
      sql: `${CUBE}."WORK_DESCRIPTION_ODATA_MEDIA_READ_LINK"`,
      type: `string`
    },
    
    your_reference: {
      sql: `${CUBE}."YOUR_REFERENCE"`,
      type: `string`
    },
    
    vat_country_region_code: {
      sql: `${CUBE}."VAT_COUNTRY_REGION_CODE"`,
      type: `string`
    },
    
    bill_to_customer_no: {
      sql: `${CUBE}."BILL_TO_CUSTOMER_NO"`,
      type: `string`
    },
    
    sell_to_address_2: {
      sql: `${CUBE}."SELL_TO_ADDRESS_2"`,
      type: `string`
    },
    
    campaign_no: {
      sql: `${CUBE}."CAMPAIGN_NO"`,
      type: `string`
    },
    
    cfdi_relation: {
      sql: `${CUBE}."CFDI_RELATION"`,
      type: `string`
    },
    
    tax_liable: {
      sql: `${CUBE}."TAX_LIABLE"`,
      type: `boolean`
    },
    
    applies_to_doc_no: {
      sql: `${CUBE}."APPLIES_TO_DOC_NO"`,
      type: `string`
    },
    
    bill_to_county: {
      sql: `${CUBE}."BILL_TO_COUNTY"`,
      type: `string`
    },
    
    original_document_xml_odata_media_read_link: {
      sql: `${CUBE}."ORIGINAL_DOCUMENT_XML_ODATA_MEDIA_READ_LINK"`,
      type: `string`
    },
    
    qr_code_odata_media_read_link: {
      sql: `${CUBE}."QR_CODE_ODATA_MEDIA_READ_LINK"`,
      type: `string`
    },
    
    exit_point: {
      sql: `${CUBE}."EXIT_POINT"`,
      type: `string`
    },
    
    date_time_canceled: {
      sql: `${CUBE}."DATE_TIME_CANCELED"`,
      type: `string`
    },
    
    amount: {
      sql: `${CUBE}."AMOUNT"`,
      type: `string`
    },
    
    remaining_amount: {
      sql: `${CUBE}."REMAINING_AMOUNT"`,
      type: `string`
    },
    
    invoice_discount_value: {
      sql: `${CUBE}."INVOICE_DISCOUNT_VALUE"`,
      type: `string`
    },
    
    coupled_to_dataverse: {
      sql: `${CUBE}."COUPLED_TO_DATAVERSE"`,
      type: `boolean`
    },
    
    bill_to_name: {
      sql: `${CUBE}."BILL_TO_NAME"`,
      type: `string`
    },
    
    qr_code: {
      sql: `${CUBE}."QR_CODE"`,
      type: `string`
    },
    
    quote_no: {
      sql: `${CUBE}."QUOTE_NO"`,
      type: `string`
    },
    
    ship_to_name_2: {
      sql: `${CUBE}."SHIP_TO_NAME_2"`,
      type: `string`
    },
    
    system_created_at: {
      sql: `${CUBE}."SYSTEM_CREATED_AT"`,
      type: `time`
    },
    
    date_time_stamp_received: {
      sql: `${CUBE}."DATE_TIME_STAMP_RECEIVED"`,
      type: `time`
    },
    
    posting_date: {
      sql: `${CUBE}."POSTING_DATE"`,
      type: `time`
    },
    
    pmt_discount_date: {
      sql: `${CUBE}."PMT_DISCOUNT_DATE"`,
      type: `time`
    },
    
    due_date: {
      sql: `${CUBE}."DUE_DATE"`,
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
    
    document_date: {
      sql: `${CUBE}."DOCUMENT_DATE"`,
      type: `time`
    },
    
    date_time_cancel_sent: {
      sql: `${CUBE}."DATE_TIME_CANCEL_SENT"`,
      type: `time`
    },
    
    system_modified_at: {
      sql: `${CUBE}."SYSTEM_MODIFIED_AT"`,
      type: `time`
    },
    
    order_date: {
      sql: `${CUBE}."ORDER_DATE"`,
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
