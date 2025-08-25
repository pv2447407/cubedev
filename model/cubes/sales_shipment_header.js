cube(`sales_shipment_header`, {
  sql_table: `"BUSINESS_CENTRAL"."SALES_SHIPMENT_HEADER"`,
  
  
  data_source: `default`,
  
  joins: {
    company: {
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    transit_distance: {
      sql: `${CUBE}."TRANSIT_DISTANCE"`,
      type: `string`
    },
    
    system_modified_by: {
      sql: `${CUBE}."SYSTEM_MODIFIED_BY"`,
      type: `string`
    },
    
    reason_code: {
      sql: `${CUBE}."REASON_CODE"`,
      type: `string`
    },
    
    error_code: {
      sql: `${CUBE}."ERROR_CODE"`,
      type: `string`
    },
    
    medical_ins_policy_number: {
      sql: `${CUBE}."MEDICAL_INS_POLICY_NUMBER"`,
      type: `string`
    },
    
    currency_factor: {
      sql: `${CUBE}."CURRENCY_FACTOR"`,
      type: `string`
    },
    
    signed_document_xml_odata_media_edit_link: {
      sql: `${CUBE}."SIGNED_DOCUMENT_XML_ODATA_MEDIA_EDIT_LINK"`,
      type: `string`
    },
    
    vehicle_code: {
      sql: `${CUBE}."VEHICLE_CODE"`,
      type: `string`
    },
    
    no_series: {
      sql: `${CUBE}."NO_SERIES"`,
      type: `string`
    },
    
    on_hold: {
      sql: `${CUBE}."ON_HOLD"`,
      type: `string`
    },
    
    shipment_method_code: {
      sql: `${CUBE}."SHIPMENT_METHOD_CODE"`,
      type: `string`
    },
    
    shipping_time: {
      sql: `${CUBE}."SHIPPING_TIME"`,
      type: `string`
    },
    
    customer_posting_group: {
      sql: `${CUBE}."CUSTOMER_POSTING_GROUP"`,
      type: `string`
    },
    
    bill_to_contact_no: {
      sql: `${CUBE}."BILL_TO_CONTACT_NO"`,
      type: `string`
    },
    
    currency_code: {
      sql: `${CUBE}."CURRENCY_CODE"`,
      type: `string`
    },
    
    ship_to_name: {
      sql: `${CUBE}."SHIP_TO_NAME"`,
      type: `string`
    },
    
    system_created_by: {
      sql: `${CUBE}."SYSTEM_CREATED_BY"`,
      type: `string`
    },
    
    bill_to_name: {
      sql: `${CUBE}."BILL_TO_NAME"`,
      type: `string`
    },
    
    sell_to_city: {
      sql: `${CUBE}."SELL_TO_CITY"`,
      type: `string`
    },
    
    ship_to_country_region_code: {
      sql: `${CUBE}."SHIP_TO_COUNTRY_REGION_CODE"`,
      type: `string`
    },
    
    salesperson_code: {
      sql: `${CUBE}."SALESPERSON_CODE"`,
      type: `string`
    },
    
    original_string: {
      sql: `${CUBE}."ORIGINAL_STRING"`,
      type: `string`
    },
    
    payment_method_code: {
      sql: `${CUBE}."PAYMENT_METHOD_CODE"`,
      type: `string`
    },
    
    bill_to_address_2: {
      sql: `${CUBE}."BILL_TO_ADDRESS_2"`,
      type: `string`
    },
    
    pac_web_service_name: {
      sql: `${CUBE}."PAC_WEB_SERVICE_NAME"`,
      type: `string`
    },
    
    sell_to_contact: {
      sql: `${CUBE}."SELL_TO_CONTACT"`,
      type: `string`
    },
    
    sell_to_country_region_code: {
      sql: `${CUBE}."SELL_TO_COUNTRY_REGION_CODE"`,
      type: `string`
    },
    
    sat_weight_unit_of_measure: {
      sql: `${CUBE}."SAT_WEIGHT_UNIT_OF_MEASURE"`,
      type: `string`
    },
    
    comment: {
      sql: `${CUBE}."COMMENT"`,
      type: `boolean`
    },
    
    date_time_first_req_sent: {
      sql: `${CUBE}."DATE_TIME_FIRST_REQ_SENT"`,
      type: `string`
    },
    
    exit_point: {
      sql: `${CUBE}."EXIT_POINT"`,
      type: `string`
    },
    
    ship_to_address_2: {
      sql: `${CUBE}."SHIP_TO_ADDRESS_2"`,
      type: `string`
    },
    
    substitution_document_no: {
      sql: `${CUBE}."SUBSTITUTION_DOCUMENT_NO"`,
      type: `string`
    },
    
    quote_no: {
      sql: `${CUBE}."QUOTE_NO"`,
      type: `string`
    },
    
    error_description: {
      sql: `${CUBE}."ERROR_DESCRIPTION"`,
      type: `string`
    },
    
    work_description_odata_media_read_link: {
      sql: `${CUBE}."WORK_DESCRIPTION_ODATA_MEDIA_READ_LINK"`,
      type: `string`
    },
    
    ship_to_name_2: {
      sql: `${CUBE}."SHIP_TO_NAME_2"`,
      type: `string`
    },
    
    ship_to_code: {
      sql: `${CUBE}."SHIP_TO_CODE"`,
      type: `string`
    },
    
    vat_bus_posting_group: {
      sql: `${CUBE}."VAT_BUS_POSTING_GROUP"`,
      type: `string`
    },
    
    original_document_xml_odata_media_read_link: {
      sql: `${CUBE}."ORIGINAL_DOCUMENT_XML_ODATA_MEDIA_READ_LINK"`,
      type: `string`
    },
    
    system_id: {
      sql: `${CUBE}."SYSTEM_ID"`,
      type: `string`
    },
    
    marked_as_canceled: {
      sql: `${CUBE}."MARKED_AS_CANCELED"`,
      type: `boolean`
    },
    
    language_code: {
      sql: `${CUBE}."LANGUAGE_CODE"`,
      type: `string`
    },
    
    campaign_no: {
      sql: `${CUBE}."CAMPAIGN_NO"`,
      type: `string`
    },
    
    correction: {
      sql: `${CUBE}."CORRECTION"`,
      type: `boolean`
    },
    
    applies_to_doc_no: {
      sql: `${CUBE}."APPLIES_TO_DOC_NO"`,
      type: `string`
    },
    
    qr_code_odata_media_read_link: {
      sql: `${CUBE}."QR_CODE_ODATA_MEDIA_READ_LINK"`,
      type: `string`
    },
    
    bill_to_post_code: {
      sql: `${CUBE}."BILL_TO_POST_CODE"`,
      type: `string`
    },
    
    cfdi_cancellation_id: {
      sql: `${CUBE}."CFDI_CANCELLATION_ID"`,
      type: `string`
    },
    
    responsibility_center: {
      sql: `${CUBE}."RESPONSIBILITY_CENTER"`,
      type: `string`
    },
    
    work_description_odata_media_edit_link: {
      sql: `${CUBE}."WORK_DESCRIPTION_ODATA_MEDIA_EDIT_LINK"`,
      type: `string`
    },
    
    electronic_document_status: {
      sql: `${CUBE}."ELECTRONIC_DOCUMENT_STATUS"`,
      type: `string`
    },
    
    format_region: {
      sql: `${CUBE}."FORMAT_REGION"`,
      type: `string`
    },
    
    signed_document_xml: {
      sql: `${CUBE}."SIGNED_DOCUMENT_XML"`,
      type: `string`
    },
    
    medical_insurer_name: {
      sql: `${CUBE}."MEDICAL_INSURER_NAME"`,
      type: `string`
    },
    
    your_reference: {
      sql: `${CUBE}."YOUR_REFERENCE"`,
      type: `string`
    },
    
    original_string_odata_media_edit_link: {
      sql: `${CUBE}."ORIGINAL_STRING_ODATA_MEDIA_EDIT_LINK"`,
      type: `string`
    },
    
    trailer_2: {
      sql: `${CUBE}."TRAILER_2"`,
      type: `string`
    },
    
    customer_disc_group: {
      sql: `${CUBE}."CUSTOMER_DISC_GROUP"`,
      type: `string`
    },
    
    tax_area_code: {
      sql: `${CUBE}."TAX_AREA_CODE"`,
      type: `string`
    },
    
    bill_to_city: {
      sql: `${CUBE}."BILL_TO_CITY"`,
      type: `string`
    },
    
    qr_code_odata_media_edit_link: {
      sql: `${CUBE}."QR_CODE_ODATA_MEDIA_EDIT_LINK"`,
      type: `string`
    },
    
    work_description: {
      sql: `${CUBE}."WORK_DESCRIPTION"`,
      type: `string`
    },
    
    date_time_stamped: {
      sql: `${CUBE}."DATE_TIME_STAMPED"`,
      type: `string`
    },
    
    digital_stamp_sat: {
      sql: `${CUBE}."DIGITAL_STAMP_SAT"`,
      type: `string`
    },
    
    digital_stamp_pac: {
      sql: `${CUBE}."DIGITAL_STAMP_PAC"`,
      type: `string`
    },
    
    customer_price_group: {
      sql: `${CUBE}."CUSTOMER_PRICE_GROUP"`,
      type: `string`
    },
    
    vat_registration_no: {
      sql: `${CUBE}."VAT_REGISTRATION_NO"`,
      type: `string`
    },
    
    no: {
      sql: `${CUBE}."NO"`,
      type: `string`,
      primary_key: true
    },
    
    posting_description: {
      sql: `${CUBE}."POSTING_DESCRIPTION"`,
      type: `string`
    },
    
    shipping_agent_code: {
      sql: `${CUBE}."SHIPPING_AGENT_CODE"`,
      type: `string`
    },
    
    vat_base_discount: {
      sql: `${CUBE}."VAT_BASE_DISCOUNT"`,
      type: `string`
    },
    
    vat_country_region_code: {
      sql: `${CUBE}."VAT_COUNTRY_REGION_CODE"`,
      type: `string`
    },
    
    shipping_agent_service_code: {
      sql: `${CUBE}."SHIPPING_AGENT_SERVICE_CODE"`,
      type: `string`
    },
    
    original_string_odata_media_read_link: {
      sql: `${CUBE}."ORIGINAL_STRING_ODATA_MEDIA_READ_LINK"`,
      type: `string`
    },
    
    bill_to_address: {
      sql: `${CUBE}."BILL_TO_ADDRESS"`,
      type: `string`
    },
    
    opportunity_no: {
      sql: `${CUBE}."OPPORTUNITY_NO"`,
      type: `string`
    },
    
    sell_to_customer_name: {
      sql: `${CUBE}."SELL_TO_CUSTOMER_NAME"`,
      type: `string`
    },
    
    ship_to_post_code: {
      sql: `${CUBE}."SHIP_TO_POST_CODE"`,
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
    
    ship_to_county: {
      sql: `${CUBE}."SHIP_TO_COUNTY"`,
      type: `string`
    },
    
    sell_to_post_code: {
      sql: `${CUBE}."SELL_TO_POST_CODE"`,
      type: `string`
    },
    
    bill_to_contact: {
      sql: `${CUBE}."BILL_TO_CONTACT"`,
      type: `string`
    },
    
    gen_bus_posting_group: {
      sql: `${CUBE}."GEN_BUS_POSTING_GROUP"`,
      type: `string`
    },
    
    transaction_type: {
      sql: `${CUBE}."TRANSACTION_TYPE"`,
      type: `string`
    },
    
    trailer_1: {
      sql: `${CUBE}."TRAILER_1"`,
      type: `string`
    },
    
    price_calculation_method: {
      sql: `${CUBE}."PRICE_CALCULATION_METHOD"`,
      type: `string`
    },
    
    order_no: {
      sql: `${CUBE}."ORDER_NO"`,
      type: `string`
    },
    
    foreign_trade: {
      sql: `${CUBE}."FOREIGN_TRADE"`,
      type: `boolean`
    },
    
    cfdi_export_code: {
      sql: `${CUBE}."CFDI_EXPORT_CODE"`,
      type: `string`
    },
    
    bal_account_no: {
      sql: `${CUBE}."BAL_ACCOUNT_NO"`,
      type: `string`
    },
    
    ship_to_upszone: {
      sql: `${CUBE}."SHIP_TO_UPSZONE"`,
      type: `string`
    },
    
    shortcut_dimension_2_code: {
      sql: `${CUBE}."SHORTCUT_DIMENSION_2_CODE"`,
      type: `string`
    },
    
    digital_stamp_sat_odata_media_read_link: {
      sql: `${CUBE}."DIGITAL_STAMP_SAT_ODATA_MEDIA_READ_LINK"`,
      type: `string`
    },
    
    sell_to_address_2: {
      sql: `${CUBE}."SELL_TO_ADDRESS_2"`,
      type: `string`
    },
    
    transaction_specification: {
      sql: `${CUBE}."TRANSACTION_SPECIFICATION"`,
      type: `string`
    },
    
    ship_to_contact: {
      sql: `${CUBE}."SHIP_TO_CONTACT"`,
      type: `string`
    },
    
    original_document_xml_odata_media_edit_link: {
      sql: `${CUBE}."ORIGINAL_DOCUMENT_XML_ODATA_MEDIA_EDIT_LINK"`,
      type: `string`
    },
    
    signed_document_xml_odata_media_read_link: {
      sql: `${CUBE}."SIGNED_DOCUMENT_XML_ODATA_MEDIA_READ_LINK"`,
      type: `string`
    },
    
    location_code: {
      sql: `${CUBE}."LOCATION_CODE"`,
      type: `string`
    },
    
    payment_discount: {
      sql: `${CUBE}."PAYMENT_DISCOUNT"`,
      type: `string`
    },
    
    source_code: {
      sql: `${CUBE}."SOURCE_CODE"`,
      type: `string`
    },
    
    order_no_series: {
      sql: `${CUBE}."ORDER_NO_SERIES"`,
      type: `string`
    },
    
    sell_to_customer_no: {
      sql: `${CUBE}."SELL_TO_CUSTOMER_NO"`,
      type: `string`
    },
    
    bill_to_name_2: {
      sql: `${CUBE}."BILL_TO_NAME_2"`,
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
    
    transport_method: {
      sql: `${CUBE}."TRANSPORT_METHOD"`,
      type: `string`
    },
    
    shortcut_dimension_1_code: {
      sql: `${CUBE}."SHORTCUT_DIMENSION_1_CODE"`,
      type: `string`
    },
    
    digital_stamp_sat_odata_media_edit_link: {
      sql: `${CUBE}."DIGITAL_STAMP_SAT_ODATA_MEDIA_EDIT_LINK"`,
      type: `string`
    },
    
    outbound_whse_handling_time: {
      sql: `${CUBE}."OUTBOUND_WHSE_HANDLING_TIME"`,
      type: `string`
    },
    
    digital_stamp_pac_odata_media_read_link: {
      sql: `${CUBE}."DIGITAL_STAMP_PAC_ODATA_MEDIA_READ_LINK"`,
      type: `string`
    },
    
    sell_to_address: {
      sql: `${CUBE}."SELL_TO_ADDRESS"`,
      type: `string`
    },
    
    sell_to_county: {
      sql: `${CUBE}."SELL_TO_COUNTY"`,
      type: `string`
    },
    
    bill_to_customer_no: {
      sql: `${CUBE}."BILL_TO_CUSTOMER_NO"`,
      type: `string`
    },
    
    bal_account_type: {
      sql: `${CUBE}."BAL_ACCOUNT_TYPE"`,
      type: `string`
    },
    
    area: {
      sql: `${CUBE}."AREA"`,
      type: `string`
    },
    
    payment_terms_code: {
      sql: `${CUBE}."PAYMENT_TERMS_CODE"`,
      type: `string`
    },
    
    qr_code: {
      sql: `${CUBE}."QR_CODE"`,
      type: `string`
    },
    
    bill_to_county: {
      sql: `${CUBE}."BILL_TO_COUNTY"`,
      type: `string`
    },
    
    fiscal_invoice_number_pac: {
      sql: `${CUBE}."FISCAL_INVOICE_NUMBER_PAC"`,
      type: `string`
    },
    
    external_document_no: {
      sql: `${CUBE}."EXTERNAL_DOCUMENT_NO"`,
      type: `string`
    },
    
    company_bank_account_code: {
      sql: `${CUBE}."COMPANY_BANK_ACCOUNT_CODE"`,
      type: `string`
    },
    
    sell_to_customer_name_2: {
      sql: `${CUBE}."SELL_TO_CUSTOMER_NAME_2"`,
      type: `string`
    },
    
    insurer_policy_number: {
      sql: `${CUBE}."INSURER_POLICY_NUMBER"`,
      type: `string`
    },
    
    insurer_name: {
      sql: `${CUBE}."INSURER_NAME"`,
      type: `string`
    },
    
    bill_to_country_region_code: {
      sql: `${CUBE}."BILL_TO_COUNTRY_REGION_CODE"`,
      type: `string`
    },
    
    sell_to_contact_no: {
      sql: `${CUBE}."SELL_TO_CONTACT_NO"`,
      type: `string`
    },
    
    original_document_xml: {
      sql: `${CUBE}."ORIGINAL_DOCUMENT_XML"`,
      type: `string`
    },
    
    sell_to_phone_no: {
      sql: `${CUBE}."SELL_TO_PHONE_NO"`,
      type: `string`
    },
    
    certificate_serial_no: {
      sql: `${CUBE}."CERTIFICATE_SERIAL_NO"`,
      type: `string`
    },
    
    prices_including_vat: {
      sql: `${CUBE}."PRICES_INCLUDING_VAT"`,
      type: `boolean`
    },
    
    ship_to_city: {
      sql: `${CUBE}."SHIP_TO_CITY"`,
      type: `string`
    },
    
    eu_3_party_trade: {
      sql: `${CUBE}."EU_3_PARTY_TRADE"`,
      type: `boolean`
    },
    
    cfdi_cancellation_reason_code: {
      sql: `${CUBE}."CFDI_CANCELLATION_REASON_CODE"`,
      type: `string`
    },
    
    tax_liable: {
      sql: `${CUBE}."TAX_LIABLE"`,
      type: `boolean`
    },
    
    digital_stamp_pac_odata_media_edit_link: {
      sql: `${CUBE}."DIGITAL_STAMP_PAC_ODATA_MEDIA_EDIT_LINK"`,
      type: `string`
    },
    
    date_time_canceled: {
      sql: `${CUBE}."DATE_TIME_CANCELED"`,
      type: `string`
    },
    
    invoice_disc_code: {
      sql: `${CUBE}."INVOICE_DISC_CODE"`,
      type: `string`
    },
    
    ship_to_address: {
      sql: `${CUBE}."SHIP_TO_ADDRESS"`,
      type: `string`
    },
    
    applies_to_doc_type: {
      sql: `${CUBE}."APPLIES_TO_DOC_TYPE"`,
      type: `string`
    },
    
    system_created_at: {
      sql: `${CUBE}."SYSTEM_CREATED_AT"`,
      type: `time`
    },
    
    promised_delivery_date: {
      sql: `${CUBE}."PROMISED_DELIVERY_DATE"`,
      type: `time`
    },
    
    system_modified_at: {
      sql: `${CUBE}."SYSTEM_MODIFIED_AT"`,
      type: `time`
    },
    
    requested_delivery_date: {
      sql: `${CUBE}."REQUESTED_DELIVERY_DATE"`,
      type: `time`
    },
    
    order_date: {
      sql: `${CUBE}."ORDER_DATE"`,
      type: `time`
    },
    
    due_date: {
      sql: `${CUBE}."DUE_DATE"`,
      type: `time`
    },
    
    date_time_stamp_received: {
      sql: `${CUBE}."DATE_TIME_STAMP_RECEIVED"`,
      type: `time`
    },
    
    shipment_date: {
      sql: `${CUBE}."SHIPMENT_DATE"`,
      type: `time`
    },
    
    date_time_cancel_sent: {
      sql: `${CUBE}."DATE_TIME_CANCEL_SENT"`,
      type: `time`
    },
    
    posting_date: {
      sql: `${CUBE}."POSTING_DATE"`,
      type: `time`
    },
    
    document_date: {
      sql: `${CUBE}."DOCUMENT_DATE"`,
      type: `time`
    },
    
    pmt_discount_date: {
      sql: `${CUBE}."PMT_DISCOUNT_DATE"`,
      type: `time`
    },
    
    transit_from_date_time: {
      sql: `${CUBE}."TRANSIT_FROM_DATE_TIME"`,
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
