cube(`purchase_header`, {
  sql_table: `"BUSINESS_CENTRAL"."PURCHASE_HEADER"`,
  
  data_source: `default`,
  
  joins: {
    company: {
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    ship_to_post_code: {
      sql: `${CUBE}."SHIP_TO_POST_CODE"`,
      type: `string`
    },
    
    payment_reference: {
      sql: `${CUBE}."PAYMENT_REFERENCE"`,
      type: `string`
    },
    
    order_class: {
      sql: `${CUBE}."ORDER_CLASS"`,
      type: `string`
    },
    
    date_filter: {
      sql: `${CUBE}."DATE_FILTER"`,
      type: `string`
    },
    
    ship_to_upszone: {
      sql: `${CUBE}."SHIP_TO_UPSZONE"`,
      type: `string`
    },
    
    currency_factor: {
      sql: `${CUBE}."CURRENCY_FACTOR"`,
      type: `string`
    },
    
    system_id: {
      sql: `${CUBE}."SYSTEM_ID"`,
      type: `string`
    },
    
    applies_to_doc_no: {
      sql: `${CUBE}."APPLIES_TO_DOC_NO"`,
      type: `string`
    },
    
    receiving_no: {
      sql: `${CUBE}."RECEIVING_NO"`,
      type: `string`
    },
    
    pay_to_name: {
      sql: `${CUBE}."PAY_TO_NAME"`,
      type: `string`
    },
    
    ship_to_name: {
      sql: `${CUBE}."SHIP_TO_NAME"`,
      type: `string`
    },
    
    language_code: {
      sql: `${CUBE}."LANGUAGE_CODE"`,
      type: `string`
    },
    
    posting_no: {
      sql: `${CUBE}."POSTING_NO"`,
      type: `string`
    },
    
    return_shipment_no_series: {
      sql: `${CUBE}."RETURN_SHIPMENT_NO_SERIES"`,
      type: `string`
    },
    
    receive: {
      sql: `${CUBE}."RECEIVE"`,
      type: `boolean`
    },
    
    ship: {
      sql: `${CUBE}."SHIP"`,
      type: `boolean`
    },
    
    prices_including_vat: {
      sql: `${CUBE}."PRICES_INCLUDING_VAT"`,
      type: `boolean`
    },
    
    no_series: {
      sql: `${CUBE}."NO_SERIES"`,
      type: `string`
    },
    
    vendor_shipment_no: {
      sql: `${CUBE}."VENDOR_SHIPMENT_NO"`,
      type: `string`
    },
    
    buy_from_vendor_no: {
      sql: `${CUBE}."BUY_FROM_VENDOR_NO"`,
      type: `string`
    },
    
    order_address_code: {
      sql: `${CUBE}."ORDER_ADDRESS_CODE"`,
      type: `string`
    },
    
    responsibility_center: {
      sql: `${CUBE}."RESPONSIBILITY_CENTER"`,
      type: `string`
    },
    
    invoice: {
      sql: `${CUBE}."INVOICE"`,
      type: `boolean`
    },
    
    payment_discount: {
      sql: `${CUBE}."PAYMENT_DISCOUNT"`,
      type: `string`
    },
    
    correction: {
      sql: `${CUBE}."CORRECTION"`,
      type: `boolean`
    },
    
    on_hold: {
      sql: `${CUBE}."ON_HOLD"`,
      type: `string`
    },
    
    vat_registration_no: {
      sql: `${CUBE}."VAT_REGISTRATION_NO"`,
      type: `string`
    },
    
    buy_from_city: {
      sql: `${CUBE}."BUY_FROM_CITY"`,
      type: `string`
    },
    
    buy_from_county: {
      sql: `${CUBE}."BUY_FROM_COUNTY"`,
      type: `string`
    },
    
    buy_from_contact: {
      sql: `${CUBE}."BUY_FROM_CONTACT"`,
      type: `string`
    },
    
    vat_bus_posting_group: {
      sql: `${CUBE}."VAT_BUS_POSTING_GROUP"`,
      type: `string`
    },
    
    ship_to_city: {
      sql: `${CUBE}."SHIP_TO_CITY"`,
      type: `string`
    },
    
    prepmt_posting_description: {
      sql: `${CUBE}."PREPMT_POSTING_DESCRIPTION"`,
      type: `string`
    },
    
    pay_to_post_code: {
      sql: `${CUBE}."PAY_TO_POST_CODE"`,
      type: `string`
    },
    
    reason_code: {
      sql: `${CUBE}."REASON_CODE"`,
      type: `string`
    },
    
    tax_exemption_no: {
      sql: `${CUBE}."TAX_EXEMPTION_NO"`,
      type: `string`
    },
    
    vendor_cr_memo_no: {
      sql: `${CUBE}."VENDOR_CR_MEMO_NO"`,
      type: `string`
    },
    
    currency_code: {
      sql: `${CUBE}."CURRENCY_CODE"`,
      type: `string`
    },
    
    pay_to_country_region_code: {
      sql: `${CUBE}."PAY_TO_COUNTRY_REGION_CODE"`,
      type: `string`
    },
    
    buy_from_vendor_name_2: {
      sql: `${CUBE}."BUY_FROM_VENDOR_NAME_2"`,
      type: `string`
    },
    
    partially_invoiced: {
      sql: `${CUBE}."PARTIALLY_INVOICED"`,
      type: `boolean`
    },
    
    job_queue_entry_id: {
      sql: `${CUBE}."JOB_QUEUE_ENTRY_ID"`,
      type: `string`
    },
    
    pay_to_contact: {
      sql: `${CUBE}."PAY_TO_CONTACT"`,
      type: `string`
    },
    
    invoice_discount_amount: {
      sql: `${CUBE}."INVOICE_DISCOUNT_AMOUNT"`,
      type: `string`
    },
    
    price_calculation_method: {
      sql: `${CUBE}."PRICE_CALCULATION_METHOD"`,
      type: `string`
    },
    
    ic_reference_document_no: {
      sql: `${CUBE}."IC_REFERENCE_DOCUMENT_NO"`,
      type: `string`
    },
    
    transaction_type: {
      sql: `${CUBE}."TRANSACTION_TYPE"`,
      type: `string`
    },
    
    buy_from_address: {
      sql: `${CUBE}."BUY_FROM_ADDRESS"`,
      type: `string`
    },
    
    amount_including_vat: {
      sql: `${CUBE}."AMOUNT_INCLUDING_VAT"`,
      type: `string`
    },
    
    status: {
      sql: `${CUBE}."STATUS"`,
      type: `string`
    },
    
    vendor_order_no: {
      sql: `${CUBE}."VENDOR_ORDER_NO"`,
      type: `string`
    },
    
    invoice_disc_code: {
      sql: `${CUBE}."INVOICE_DISC_CODE"`,
      type: `string`
    },
    
    job_queue_status: {
      sql: `${CUBE}."JOB_QUEUE_STATUS"`,
      type: `string`
    },
    
    document_type: {
      sql: `${CUBE}."DOCUMENT_TYPE"`,
      type: `string`
    },
    
    compress_prepayment: {
      sql: `${CUBE}."COMPRESS_PREPAYMENT"`,
      type: `boolean`
    },
    
    location_code: {
      sql: `${CUBE}."LOCATION_CODE"`,
      type: `string`
    },
    
    pay_to_county: {
      sql: `${CUBE}."PAY_TO_COUNTY"`,
      type: `string`
    },
    
    posting_description: {
      sql: `${CUBE}."POSTING_DESCRIPTION"`,
      type: `string`
    },
    
    prepmt_payment_discount: {
      sql: `${CUBE}."PREPMT_PAYMENT_DISCOUNT"`,
      type: `string`
    },
    
    applies_to_doc_type: {
      sql: `${CUBE}."APPLIES_TO_DOC_TYPE"`,
      type: `string`
    },
    
    gst_hsttax_type: {
      sql: `${CUBE}."GST_HSTTAX_TYPE"`,
      type: `string`
    },
    
    pay_to_city: {
      sql: `${CUBE}."PAY_TO_CITY"`,
      type: `string`
    },
    
    system_created_by: {
      sql: `${CUBE}."SYSTEM_CREATED_BY"`,
      type: `string`
    },
    
    ic_status: {
      sql: `${CUBE}."IC_STATUS"`,
      type: `string`
    },
    
    vendor_authorization_no: {
      sql: `${CUBE}."VENDOR_AUTHORIZATION_NO"`,
      type: `string`
    },
    
    receiving_no_series: {
      sql: `${CUBE}."RECEIVING_NO_SERIES"`,
      type: `string`
    },
    
    your_reference: {
      sql: `${CUBE}."YOUR_REFERENCE"`,
      type: `string`
    },
    
    return_shipment_no: {
      sql: `${CUBE}."RETURN_SHIPMENT_NO"`,
      type: `string`
    },
    
    ship_to_code: {
      sql: `${CUBE}."SHIP_TO_CODE"`,
      type: `string`
    },
    
    shipment_method_code: {
      sql: `${CUBE}."SHIPMENT_METHOD_CODE"`,
      type: `string`
    },
    
    pay_to_address_2: {
      sql: `${CUBE}."PAY_TO_ADDRESS_2"`,
      type: `string`
    },
    
    purchaser_code: {
      sql: `${CUBE}."PURCHASER_CODE"`,
      type: `string`
    },
    
    bal_account_no: {
      sql: `${CUBE}."BAL_ACCOUNT_NO"`,
      type: `string`
    },
    
    prepayment: {
      sql: `${CUBE}."PREPAYMENT"`,
      type: `string`
    },
    
    inbound_whse_handling_time: {
      sql: `${CUBE}."INBOUND_WHSE_HANDLING_TIME"`,
      type: `string`
    },
    
    last_return_shipment_no: {
      sql: `${CUBE}."LAST_RETURN_SHIPMENT_NO"`,
      type: `string`
    },
    
    last_prepayment_no: {
      sql: `${CUBE}."LAST_PREPAYMENT_NO"`,
      type: `string`
    },
    
    buy_from_address_2: {
      sql: `${CUBE}."BUY_FROM_ADDRESS_2"`,
      type: `string`
    },
    
    vendor_posting_group: {
      sql: `${CUBE}."VENDOR_POSTING_GROUP"`,
      type: `string`
    },
    
    last_receiving_no: {
      sql: `${CUBE}."LAST_RECEIVING_NO"`,
      type: `string`
    },
    
    ship_to_country_region_code: {
      sql: `${CUBE}."SHIP_TO_COUNTRY_REGION_CODE"`,
      type: `string`
    },
    
    prepayment_no: {
      sql: `${CUBE}."PREPAYMENT_NO"`,
      type: `string`
    },
    
    ship_to_contact: {
      sql: `${CUBE}."SHIP_TO_CONTACT"`,
      type: `string`
    },
    
    buy_from_contact_no: {
      sql: `${CUBE}."BUY_FROM_CONTACT_NO"`,
      type: `string`
    },
    
    pay_to_contact_no: {
      sql: `${CUBE}."PAY_TO_CONTACT_NO"`,
      type: `string`
    },
    
    ship_to_address_2: {
      sql: `${CUBE}."SHIP_TO_ADDRESS_2"`,
      type: `string`
    },
    
    transport_method: {
      sql: `${CUBE}."TRANSPORT_METHOD"`,
      type: `string`
    },
    
    payment_terms_code: {
      sql: `${CUBE}."PAYMENT_TERMS_CODE"`,
      type: `string`
    },
    
    buy_from_vendor_name: {
      sql: `${CUBE}."BUY_FROM_VENDOR_NAME"`,
      type: `string`
    },
    
    prepmt_cr_memo_no_series: {
      sql: `${CUBE}."PREPMT_CR_MEMO_NO_SERIES"`,
      type: `string`
    },
    
    remit_to_code: {
      sql: `${CUBE}."REMIT_TO_CODE"`,
      type: `string`
    },
    
    invoice_discount_value: {
      sql: `${CUBE}."INVOICE_DISCOUNT_VALUE"`,
      type: `string`
    },
    
    quote_no: {
      sql: `${CUBE}."QUOTE_NO"`,
      type: `string`
    },
    
    last_posting_no: {
      sql: `${CUBE}."LAST_POSTING_NO"`,
      type: `string`
    },
    
    buy_from_post_code: {
      sql: `${CUBE}."BUY_FROM_POST_CODE"`,
      type: `string`
    },
    
    shortcut_dimension_1_code: {
      sql: `${CUBE}."SHORTCUT_DIMENSION_1_CODE"`,
      type: `string`
    },
    
    vendor_invoice_no: {
      sql: `${CUBE}."VENDOR_INVOICE_NO"`,
      type: `string`
    },
    
    payment_method_code: {
      sql: `${CUBE}."PAYMENT_METHOD_CODE"`,
      type: `string`
    },
    
    ship_to_address: {
      sql: `${CUBE}."SHIP_TO_ADDRESS"`,
      type: `string`
    },
    
    campaign_no: {
      sql: `${CUBE}."CAMPAIGN_NO"`,
      type: `string`
    },
    
    gen_bus_posting_group: {
      sql: `${CUBE}."GEN_BUS_POSTING_GROUP"`,
      type: `string`
    },
    
    location_filter: {
      sql: `${CUBE}."LOCATION_FILTER"`,
      type: `string`
    },
    
    format_region: {
      sql: `${CUBE}."FORMAT_REGION"`,
      type: `string`
    },
    
    provincial_tax_area_code: {
      sql: `${CUBE}."PROVINCIAL_TAX_AREA_CODE"`,
      type: `string`
    },
    
    ic_direction: {
      sql: `${CUBE}."IC_DIRECTION"`,
      type: `string`
    },
    
    fiscal_invoice_number_pac: {
      sql: `${CUBE}."FISCAL_INVOICE_NUMBER_PAC"`,
      type: `string`
    },
    
    amt_rcd_not_invoiced_lcy: {
      sql: `${CUBE}."AMT_RCD_NOT_INVOICED_LCY"`,
      type: `string`
    },
    
    assigned_user_id: {
      sql: `${CUBE}."ASSIGNED_USER_ID"`,
      type: `string`
    },
    
    journal_templ_name: {
      sql: `${CUBE}."JOURNAL_TEMPL_NAME"`,
      type: `string`
    },
    
    transaction_specification: {
      sql: `${CUBE}."TRANSACTION_SPECIFICATION"`,
      type: `string`
    },
    
    bal_account_type: {
      sql: `${CUBE}."BAL_ACCOUNT_TYPE"`,
      type: `string`
    },
    
    pay_to_vendor_no: {
      sql: `${CUBE}."PAY_TO_VENDOR_NO"`,
      type: `string`
    },
    
    prepayment_no_series: {
      sql: `${CUBE}."PREPAYMENT_NO_SERIES"`,
      type: `string`
    },
    
    entry_point: {
      sql: `${CUBE}."ENTRY_POINT"`,
      type: `string`
    },
    
    vat_base_discount: {
      sql: `${CUBE}."VAT_BASE_DISCOUNT"`,
      type: `string`
    },
    
    print_posted_documents: {
      sql: `${CUBE}."PRINT_POSTED_DOCUMENTS"`,
      type: `boolean`
    },
    
    buy_from_icpartner_code: {
      sql: `${CUBE}."BUY_FROM_ICPARTNER_CODE"`,
      type: `string`
    },
    
    last_prepmt_cr_memo_no: {
      sql: `${CUBE}."LAST_PREPMT_CR_MEMO_NO"`,
      type: `string`
    },
    
    pay_to_name_2: {
      sql: `${CUBE}."PAY_TO_NAME_2"`,
      type: `string`
    },
    
    ship_to_name_2: {
      sql: `${CUBE}."SHIP_TO_NAME_2"`,
      type: `string`
    },
    
    ship_to_county: {
      sql: `${CUBE}."SHIP_TO_COUNTY"`,
      type: `string`
    },
    
    pay_to_icpartner_code: {
      sql: `${CUBE}."PAY_TO_ICPARTNER_CODE"`,
      type: `string`
    },
    
    completely_received: {
      sql: `${CUBE}."COMPLETELY_RECEIVED"`,
      type: `boolean`
    },
    
    shortcut_dimension_2_code: {
      sql: `${CUBE}."SHORTCUT_DIMENSION_2_CODE"`,
      type: `string`
    },
    
    creditor_no: {
      sql: `${CUBE}."CREDITOR_NO"`,
      type: `string`
    },
    
    prepmt_include_tax: {
      sql: `${CUBE}."PREPMT_INCLUDE_TAX"`,
      type: `boolean`
    },
    
    tax_liable: {
      sql: `${CUBE}."TAX_LIABLE"`,
      type: `boolean`
    },
    
    system_modified_by: {
      sql: `${CUBE}."SYSTEM_MODIFIED_BY"`,
      type: `string`
    },
    
    recalculate_invoice_disc: {
      sql: `${CUBE}."RECALCULATE_INVOICE_DISC"`,
      type: `boolean`
    },
    
    ste_transaction_id: {
      sql: `${CUBE}."STE_TRANSACTION_ID"`,
      type: `string`
    },
    
    comment: {
      sql: `${CUBE}."COMMENT"`,
      type: `boolean`
    },
    
    vat_country_region_code: {
      sql: `${CUBE}."VAT_COUNTRY_REGION_CODE"`,
      type: `string`
    },
    
    posting_no_series: {
      sql: `${CUBE}."POSTING_NO_SERIES"`,
      type: `string`
    },
    
    applies_to_id: {
      sql: `${CUBE}."APPLIES_TO_ID"`,
      type: `string`
    },
    
    tax_area_code: {
      sql: `${CUBE}."TAX_AREA_CODE"`,
      type: `string`
    },
    
    send_icdocument: {
      sql: `${CUBE}."SEND_ICDOCUMENT"`,
      type: `boolean`
    },
    
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    },
    
    lead_time_calculation: {
      sql: `${CUBE}."LEAD_TIME_CALCULATION"`,
      type: `string`
    },
    
    prepmt_payment_terms_code: {
      sql: `${CUBE}."PREPMT_PAYMENT_TERMS_CODE"`,
      type: `string`
    },
    
    area: {
      sql: `${CUBE}."AREA"`,
      type: `string`
    },
    
    a_rcd_not_inv_ex_vatlcy: {
      sql: `${CUBE}."A_RCD_NOT_INV_EX_VATLCY"`,
      type: `string`
    },
    
    sell_to_customer_no: {
      sql: `${CUBE}."SELL_TO_CUSTOMER_NO"`,
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
    
    pay_to_address: {
      sql: `${CUBE}."PAY_TO_ADDRESS"`,
      type: `string`
    },
    
    prepmt_cr_memo_no: {
      sql: `${CUBE}."PREPMT_CR_MEMO_NO"`,
      type: `string`
    },
    
    buy_from_country_region_code: {
      sql: `${CUBE}."BUY_FROM_COUNTRY_REGION_CODE"`,
      type: `string`
    },
    
    invoice_discount_calculation: {
      sql: `${CUBE}."INVOICE_DISCOUNT_CALCULATION"`,
      type: `string`
    },
    
    system_created_at: {
      sql: `${CUBE}."SYSTEM_CREATED_AT"`,
      type: `time`
    },
    
    order_date: {
      sql: `${CUBE}."ORDER_DATE"`,
      type: `time`
    },
    
    expected_receipt_date: {
      sql: `${CUBE}."EXPECTED_RECEIPT_DATE"`,
      type: `time`
    },
    
    vat_reporting_date: {
      sql: `${CUBE}."VAT_REPORTING_DATE"`,
      type: `time`
    },
    
    system_modified_at: {
      sql: `${CUBE}."SYSTEM_MODIFIED_AT"`,
      type: `time`
    },
    
    requested_receipt_date: {
      sql: `${CUBE}."REQUESTED_RECEIPT_DATE"`,
      type: `time`
    },
    
    posting_date: {
      sql: `${CUBE}."POSTING_DATE"`,
      type: `time`
    },
    
    due_date: {
      sql: `${CUBE}."DUE_DATE"`,
      type: `time`
    },
    
    prepayment_due_date: {
      sql: `${CUBE}."PREPAYMENT_DUE_DATE"`,
      type: `time`
    },
    
    pmt_discount_date: {
      sql: `${CUBE}."PMT_DISCOUNT_DATE"`,
      type: `time`
    },
    
    invoice_received_date: {
      sql: `${CUBE}."INVOICE_RECEIVED_DATE"`,
      type: `time`
    },
    
    document_date: {
      sql: `${CUBE}."DOCUMENT_DATE"`,
      type: `time`
    },
    
    promised_receipt_date: {
      sql: `${CUBE}."PROMISED_RECEIPT_DATE"`,
      type: `time`
    },
    
    prepmt_pmt_discount_date: {
      sql: `${CUBE}."PREPMT_PMT_DISCOUNT_DATE"`,
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
