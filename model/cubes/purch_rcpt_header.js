cube(`purch_rcpt_header`, {
  sql_table: `"BUSINESS_CENTRAL"."PURCH_RCPT_HEADER"`,
  
  data_source: `default`,
  
  joins: {
    company: {
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    buy_from_address: {
      sql: `${CUBE}."BUY_FROM_ADDRESS"`,
      type: `string`
    },
    
    area: {
      sql: `${CUBE}."AREA"`,
      type: `string`
    },
    
    user_id: {
      sql: `${CUBE}."USER_ID"`,
      type: `string`
    },
    
    pay_to_post_code: {
      sql: `${CUBE}."PAY_TO_POST_CODE"`,
      type: `string`
    },
    
    payment_method_code: {
      sql: `${CUBE}."PAYMENT_METHOD_CODE"`,
      type: `string`
    },
    
    buy_from_address_2: {
      sql: `${CUBE}."BUY_FROM_ADDRESS_2"`,
      type: `string`
    },
    
    ship_to_country_region_code: {
      sql: `${CUBE}."SHIP_TO_COUNTRY_REGION_CODE"`,
      type: `string`
    },
    
    transaction_type: {
      sql: `${CUBE}."TRANSACTION_TYPE"`,
      type: `string`
    },
    
    ship_to_post_code: {
      sql: `${CUBE}."SHIP_TO_POST_CODE"`,
      type: `string`
    },
    
    vendor_shipment_no: {
      sql: `${CUBE}."VENDOR_SHIPMENT_NO"`,
      type: `string`
    },
    
    pay_to_county: {
      sql: `${CUBE}."PAY_TO_COUNTY"`,
      type: `string`
    },
    
    pay_to_name: {
      sql: `${CUBE}."PAY_TO_NAME"`,
      type: `string`
    },
    
    buy_from_contact: {
      sql: `${CUBE}."BUY_FROM_CONTACT"`,
      type: `string`
    },
    
    on_hold: {
      sql: `${CUBE}."ON_HOLD"`,
      type: `string`
    },
    
    buy_from_city: {
      sql: `${CUBE}."BUY_FROM_CITY"`,
      type: `string`
    },
    
    buy_from_vendor_no: {
      sql: `${CUBE}."BUY_FROM_VENDOR_NO"`,
      type: `string`
    },
    
    campaign_no: {
      sql: `${CUBE}."CAMPAIGN_NO"`,
      type: `string`
    },
    
    vat_base_discount: {
      sql: `${CUBE}."VAT_BASE_DISCOUNT"`,
      type: `string`
    },
    
    format_region: {
      sql: `${CUBE}."FORMAT_REGION"`,
      type: `string`
    },
    
    applies_to_doc_no: {
      sql: `${CUBE}."APPLIES_TO_DOC_NO"`,
      type: `string`
    },
    
    ship_to_name: {
      sql: `${CUBE}."SHIP_TO_NAME"`,
      type: `string`
    },
    
    ship_to_upszone: {
      sql: `${CUBE}."SHIP_TO_UPSZONE"`,
      type: `string`
    },
    
    ship_to_contact: {
      sql: `${CUBE}."SHIP_TO_CONTACT"`,
      type: `string`
    },
    
    system_created_by: {
      sql: `${CUBE}."SYSTEM_CREATED_BY"`,
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
    
    applies_to_doc_type: {
      sql: `${CUBE}."APPLIES_TO_DOC_TYPE"`,
      type: `string`
    },
    
    lead_time_calculation: {
      sql: `${CUBE}."LEAD_TIME_CALCULATION"`,
      type: `string`
    },
    
    responsibility_center: {
      sql: `${CUBE}."RESPONSIBILITY_CENTER"`,
      type: `string`
    },
    
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    },
    
    sell_to_customer_no: {
      sql: `${CUBE}."SELL_TO_CUSTOMER_NO"`,
      type: `string`
    },
    
    order_no: {
      sql: `${CUBE}."ORDER_NO"`,
      type: `string`
    },
    
    shortcut_dimension_2_code: {
      sql: `${CUBE}."SHORTCUT_DIMENSION_2_CODE"`,
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
    
    ship_to_address: {
      sql: `${CUBE}."SHIP_TO_ADDRESS"`,
      type: `string`
    },
    
    payment_discount: {
      sql: `${CUBE}."PAYMENT_DISCOUNT"`,
      type: `string`
    },
    
    price_calculation_method: {
      sql: `${CUBE}."PRICE_CALCULATION_METHOD"`,
      type: `string`
    },
    
    bal_account_type: {
      sql: `${CUBE}."BAL_ACCOUNT_TYPE"`,
      type: `string`
    },
    
    pay_to_contact_no: {
      sql: `${CUBE}."PAY_TO_CONTACT_NO"`,
      type: `string`
    },
    
    bal_account_no: {
      sql: `${CUBE}."BAL_ACCOUNT_NO"`,
      type: `string`
    },
    
    your_reference: {
      sql: `${CUBE}."YOUR_REFERENCE"`,
      type: `string`
    },
    
    posting_description: {
      sql: `${CUBE}."POSTING_DESCRIPTION"`,
      type: `string`
    },
    
    ship_to_city: {
      sql: `${CUBE}."SHIP_TO_CITY"`,
      type: `string`
    },
    
    quote_no: {
      sql: `${CUBE}."QUOTE_NO"`,
      type: `string`
    },
    
    pay_to_address_2: {
      sql: `${CUBE}."PAY_TO_ADDRESS_2"`,
      type: `string`
    },
    
    correction: {
      sql: `${CUBE}."CORRECTION"`,
      type: `boolean`
    },
    
    location_code: {
      sql: `${CUBE}."LOCATION_CODE"`,
      type: `string`
    },
    
    order_no_series: {
      sql: `${CUBE}."ORDER_NO_SERIES"`,
      type: `string`
    },
    
    buy_from_country_region_code: {
      sql: `${CUBE}."BUY_FROM_COUNTRY_REGION_CODE"`,
      type: `string`
    },
    
    order_address_code: {
      sql: `${CUBE}."ORDER_ADDRESS_CODE"`,
      type: `string`
    },
    
    ship_to_name_2: {
      sql: `${CUBE}."SHIP_TO_NAME_2"`,
      type: `string`
    },
    
    vendor_order_no: {
      sql: `${CUBE}."VENDOR_ORDER_NO"`,
      type: `string`
    },
    
    buy_from_vendor_name: {
      sql: `${CUBE}."BUY_FROM_VENDOR_NAME"`,
      type: `string`
    },
    
    system_modified_by: {
      sql: `${CUBE}."SYSTEM_MODIFIED_BY"`,
      type: `string`
    },
    
    inbound_whse_handling_time: {
      sql: `${CUBE}."INBOUND_WHSE_HANDLING_TIME"`,
      type: `string`
    },
    
    pay_to_vendor_no: {
      sql: `${CUBE}."PAY_TO_VENDOR_NO"`,
      type: `string`
    },
    
    shipment_method_code: {
      sql: `${CUBE}."SHIPMENT_METHOD_CODE"`,
      type: `string`
    },
    
    vat_country_region_code: {
      sql: `${CUBE}."VAT_COUNTRY_REGION_CODE"`,
      type: `string`
    },
    
    ship_to_county: {
      sql: `${CUBE}."SHIP_TO_COUNTY"`,
      type: `string`
    },
    
    tax_liable: {
      sql: `${CUBE}."TAX_LIABLE"`,
      type: `boolean`
    },
    
    purchaser_code: {
      sql: `${CUBE}."PURCHASER_CODE"`,
      type: `string`
    },
    
    buy_from_contact_no: {
      sql: `${CUBE}."BUY_FROM_CONTACT_NO"`,
      type: `string`
    },
    
    currency_code: {
      sql: `${CUBE}."CURRENCY_CODE"`,
      type: `string`
    },
    
    ship_to_code: {
      sql: `${CUBE}."SHIP_TO_CODE"`,
      type: `string`
    },
    
    pay_to_contact: {
      sql: `${CUBE}."PAY_TO_CONTACT"`,
      type: `string`
    },
    
    vat_registration_no: {
      sql: `${CUBE}."VAT_REGISTRATION_NO"`,
      type: `string`
    },
    
    pay_to_country_region_code: {
      sql: `${CUBE}."PAY_TO_COUNTRY_REGION_CODE"`,
      type: `string`
    },
    
    system_id: {
      sql: `${CUBE}."SYSTEM_ID"`,
      type: `string`
    },
    
    shortcut_dimension_1_code: {
      sql: `${CUBE}."SHORTCUT_DIMENSION_1_CODE"`,
      type: `string`
    },
    
    no: {
      sql: `${CUBE}."NO"`,
      type: `string`
    },
    
    reason_code: {
      sql: `${CUBE}."REASON_CODE"`,
      type: `string`
    },
    
    pay_to_city: {
      sql: `${CUBE}."PAY_TO_CITY"`,
      type: `string`
    },
    
    ship_to_address_2: {
      sql: `${CUBE}."SHIP_TO_ADDRESS_2"`,
      type: `string`
    },
    
    language_code: {
      sql: `${CUBE}."LANGUAGE_CODE"`,
      type: `string`
    },
    
    comment: {
      sql: `${CUBE}."COMMENT"`,
      type: `boolean`
    },
    
    vat_bus_posting_group: {
      sql: `${CUBE}."VAT_BUS_POSTING_GROUP"`,
      type: `string`
    },
    
    buy_from_county: {
      sql: `${CUBE}."BUY_FROM_COUNTY"`,
      type: `string`
    },
    
    buy_from_vendor_name_2: {
      sql: `${CUBE}."BUY_FROM_VENDOR_NAME_2"`,
      type: `string`
    },
    
    transport_method: {
      sql: `${CUBE}."TRANSPORT_METHOD"`,
      type: `string`
    },
    
    buy_from_post_code: {
      sql: `${CUBE}."BUY_FROM_POST_CODE"`,
      type: `string`
    },
    
    vendor_posting_group: {
      sql: `${CUBE}."VENDOR_POSTING_GROUP"`,
      type: `string`
    },
    
    pay_to_address: {
      sql: `${CUBE}."PAY_TO_ADDRESS"`,
      type: `string`
    },
    
    entry_point: {
      sql: `${CUBE}."ENTRY_POINT"`,
      type: `string`
    },
    
    transaction_specification: {
      sql: `${CUBE}."TRANSACTION_SPECIFICATION"`,
      type: `string`
    },
    
    gen_bus_posting_group: {
      sql: `${CUBE}."GEN_BUS_POSTING_GROUP"`,
      type: `string`
    },
    
    currency_factor: {
      sql: `${CUBE}."CURRENCY_FACTOR"`,
      type: `string`
    },
    
    payment_terms_code: {
      sql: `${CUBE}."PAYMENT_TERMS_CODE"`,
      type: `string`
    },
    
    pay_to_name_2: {
      sql: `${CUBE}."PAY_TO_NAME_2"`,
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
    
    promised_receipt_date: {
      sql: `${CUBE}."PROMISED_RECEIPT_DATE"`,
      type: `time`
    },
    
    expected_receipt_date: {
      sql: `${CUBE}."EXPECTED_RECEIPT_DATE"`,
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
    
    document_date: {
      sql: `${CUBE}."DOCUMENT_DATE"`,
      type: `time`
    },
    
    requested_receipt_date: {
      sql: `${CUBE}."REQUESTED_RECEIPT_DATE"`,
      type: `time`
    },
    
    order_date: {
      sql: `${CUBE}."ORDER_DATE"`,
      type: `time`
    },
    
    due_date: {
      sql: `${CUBE}."DUE_DATE"`,
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
