cube(`purch_rcpt_line`, {
  sql_table: `"BUSINESS_CENTRAL"."PURCH_RCPT_LINE"`,
  
  data_source: `default`,
  
  joins: {
    company: {
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    type: {
      sql: `${CUBE}."TYPE"`,
      type: `string`
    },
    
    budgeted_fano: {
      sql: `${CUBE}."BUDGETED_FANO"`,
      type: `string`
    },
    
    sales_order_no: {
      sql: `${CUBE}."SALES_ORDER_NO"`,
      type: `string`
    },
    
    description: {
      sql: `${CUBE}."DESCRIPTION"`,
      type: `string`
    },
    
    area: {
      sql: `${CUBE}."AREA"`,
      type: `string`
    },
    
    qty_rcd_not_invoiced: {
      sql: `${CUBE}."QTY_RCD_NOT_INVOICED"`,
      type: `string`
    },
    
    location_code: {
      sql: `${CUBE}."LOCATION_CODE"`,
      type: `string`
    },
    
    variant_code: {
      sql: `${CUBE}."VARIANT_CODE"`,
      type: `string`
    },
    
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    },
    
    use_tax: {
      sql: `${CUBE}."USE_TAX"`,
      type: `boolean`
    },
    
    lead_time_calculation: {
      sql: `${CUBE}."LEAD_TIME_CALCULATION"`,
      type: `string`
    },
    
    use_duplication_list: {
      sql: `${CUBE}."USE_DUPLICATION_LIST"`,
      type: `boolean`
    },
    
    over_receipt_code_2: {
      sql: `${CUBE}."OVER_RECEIPT_CODE_2"`,
      type: `string`
    },
    
    routing_no: {
      sql: `${CUBE}."ROUTING_NO"`,
      type: `string`
    },
    
    item_reference_no: {
      sql: `${CUBE}."ITEM_REFERENCE_NO"`,
      type: `string`
    },
    
    unit_cost: {
      sql: `${CUBE}."UNIT_COST"`,
      type: `string`
    },
    
    transport_method: {
      sql: `${CUBE}."TRANSPORT_METHOD"`,
      type: `string`
    },
    
    job_unit_price: {
      sql: `${CUBE}."JOB_UNIT_PRICE"`,
      type: `string`
    },
    
    units_per_parcel: {
      sql: `${CUBE}."UNITS_PER_PARCEL"`,
      type: `string`
    },
    
    job_task_no: {
      sql: `${CUBE}."JOB_TASK_NO"`,
      type: `string`
    },
    
    job_line_discount: {
      sql: `${CUBE}."JOB_LINE_DISCOUNT"`,
      type: `string`
    },
    
    responsibility_center: {
      sql: `${CUBE}."RESPONSIBILITY_CENTER"`,
      type: `string`
    },
    
    prod_order_no: {
      sql: `${CUBE}."PROD_ORDER_NO"`,
      type: `string`
    },
    
    system_created_by: {
      sql: `${CUBE}."SYSTEM_CREATED_BY"`,
      type: `string`
    },
    
    transaction_specification: {
      sql: `${CUBE}."TRANSACTION_SPECIFICATION"`,
      type: `string`
    },
    
    price_calculation_method: {
      sql: `${CUBE}."PRICE_CALCULATION_METHOD"`,
      type: `string`
    },
    
    operation_no: {
      sql: `${CUBE}."OPERATION_NO"`,
      type: `string`
    },
    
    job_line_type: {
      sql: `${CUBE}."JOB_LINE_TYPE"`,
      type: `string`
    },
    
    unit_volume: {
      sql: `${CUBE}."UNIT_VOLUME"`,
      type: `string`
    },
    
    qty_per_unit_of_measure: {
      sql: `${CUBE}."QTY_PER_UNIT_OF_MEASURE"`,
      type: `string`
    },
    
    work_center_no: {
      sql: `${CUBE}."WORK_CENTER_NO"`,
      type: `string`
    },
    
    ic_item_reference_no: {
      sql: `${CUBE}."IC_ITEM_REFERENCE_NO"`,
      type: `string`
    },
    
    vat_base_amount: {
      sql: `${CUBE}."VAT_BASE_AMOUNT"`,
      type: `string`
    },
    
    unit_of_measure: {
      sql: `${CUBE}."UNIT_OF_MEASURE"`,
      type: `string`
    },
    
    ic_partner_ref_type: {
      sql: `${CUBE}."IC_PARTNER_REF_TYPE"`,
      type: `string`
    },
    
    job_currency_factor: {
      sql: `${CUBE}."JOB_CURRENCY_FACTOR"`,
      type: `string`
    },
    
    purchasing_code: {
      sql: `${CUBE}."PURCHASING_CODE"`,
      type: `string`
    },
    
    duplicate_in_depreciation_book: {
      sql: `${CUBE}."DUPLICATE_IN_DEPRECIATION_BOOK"`,
      type: `string`
    },
    
    over_receipt_quantity: {
      sql: `${CUBE}."OVER_RECEIPT_QUANTITY"`,
      type: `string`
    },
    
    document_no: {
      sql: `${CUBE}."DOCUMENT_NO"`,
      type: `string`
    },
    
    item_category_code: {
      sql: `${CUBE}."ITEM_CATEGORY_CODE"`,
      type: `string`
    },
    
    bin_code: {
      sql: `${CUBE}."BIN_CODE"`,
      type: `string`
    },
    
    system_id: {
      sql: `${CUBE}."SYSTEM_ID"`,
      type: `string`,
      primary_key: true
    },
    
    line_discount: {
      sql: `${CUBE}."LINE_DISCOUNT"`,
      type: `string`
    },
    
    job_total_price_lcy: {
      sql: `${CUBE}."JOB_TOTAL_PRICE_LCY"`,
      type: `string`
    },
    
    overhead_rate: {
      sql: `${CUBE}."OVERHEAD_RATE"`,
      type: `string`
    },
    
    unit_price_lcy: {
      sql: `${CUBE}."UNIT_PRICE_LCY"`,
      type: `string`
    },
    
    entry_point: {
      sql: `${CUBE}."ENTRY_POINT"`,
      type: `string`
    },
    
    indirect_cost: {
      sql: `${CUBE}."INDIRECT_COST"`,
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
    
    salvage_value: {
      sql: `${CUBE}."SALVAGE_VALUE"`,
      type: `string`
    },
    
    vat_bus_posting_group: {
      sql: `${CUBE}."VAT_BUS_POSTING_GROUP"`,
      type: `string`
    },
    
    pay_to_vendor_no: {
      sql: `${CUBE}."PAY_TO_VENDOR_NO"`,
      type: `string`
    },
    
    quantity_invoiced: {
      sql: `${CUBE}."QUANTITY_INVOICED"`,
      type: `string`
    },
    
    item_reference_type: {
      sql: `${CUBE}."ITEM_REFERENCE_TYPE"`,
      type: `string`
    },
    
    special_order_sales_no: {
      sql: `${CUBE}."SPECIAL_ORDER_SALES_NO"`,
      type: `string`
    },
    
    buy_from_vendor_no: {
      sql: `${CUBE}."BUY_FROM_VENDOR_NO"`,
      type: `string`
    },
    
    item_charge_base_amount: {
      sql: `${CUBE}."ITEM_CHARGE_BASE_AMOUNT"`,
      type: `string`
    },
    
    item_reference_type_no: {
      sql: `${CUBE}."ITEM_REFERENCE_TYPE_NO"`,
      type: `string`
    },
    
    vat_prod_posting_group: {
      sql: `${CUBE}."VAT_PROD_POSTING_GROUP"`,
      type: `string`
    },
    
    nonstock: {
      sql: `${CUBE}."NONSTOCK"`,
      type: `boolean`
    },
    
    quantity_base: {
      sql: `${CUBE}."QUANTITY_BASE"`,
      type: `string`
    },
    
    correction: {
      sql: `${CUBE}."CORRECTION"`,
      type: `boolean`
    },
    
    job_no: {
      sql: `${CUBE}."JOB_NO"`,
      type: `string`
    },
    
    depr_until_faposting_date: {
      sql: `${CUBE}."DEPR_UNTIL_FAPOSTING_DATE"`,
      type: `boolean`
    },
    
    currency_code: {
      sql: `${CUBE}."CURRENCY_CODE"`,
      type: `string`
    },
    
    vat: {
      sql: `${CUBE}."VAT"`,
      type: `string`
    },
    
    fa_posting_type: {
      sql: `${CUBE}."FA_POSTING_TYPE"`,
      type: `string`
    },
    
    gross_weight: {
      sql: `${CUBE}."GROSS_WEIGHT"`,
      type: `string`
    },
    
    direct_unit_cost: {
      sql: `${CUBE}."DIRECT_UNIT_COST"`,
      type: `string`
    },
    
    job_currency_code: {
      sql: `${CUBE}."JOB_CURRENCY_CODE"`,
      type: `string`
    },
    
    insurance_no: {
      sql: `${CUBE}."INSURANCE_NO"`,
      type: `string`
    },
    
    system_modified_by: {
      sql: `${CUBE}."SYSTEM_MODIFIED_BY"`,
      type: `string`
    },
    
    description_2: {
      sql: `${CUBE}."DESCRIPTION_2"`,
      type: `string`
    },
    
    gen_bus_posting_group: {
      sql: `${CUBE}."GEN_BUS_POSTING_GROUP"`,
      type: `string`
    },
    
    tax_area_code: {
      sql: `${CUBE}."TAX_AREA_CODE"`,
      type: `string`
    },
    
    inbound_whse_handling_time: {
      sql: `${CUBE}."INBOUND_WHSE_HANDLING_TIME"`,
      type: `string`
    },
    
    job_line_amount_lcy: {
      sql: `${CUBE}."JOB_LINE_AMOUNT_LCY"`,
      type: `string`
    },
    
    quantity: {
      sql: `${CUBE}."QUANTITY"`,
      type: `string`
    },
    
    job_line_discount_amount: {
      sql: `${CUBE}."JOB_LINE_DISCOUNT_AMOUNT"`,
      type: `string`
    },
    
    job_line_amount: {
      sql: `${CUBE}."JOB_LINE_AMOUNT"`,
      type: `string`
    },
    
    depreciation_book_code: {
      sql: `${CUBE}."DEPRECIATION_BOOK_CODE"`,
      type: `string`
    },
    
    item_reference_unit_of_measure: {
      sql: `${CUBE}."ITEM_REFERENCE_UNIT_OF_MEASURE"`,
      type: `string`
    },
    
    return_reason_code: {
      sql: `${CUBE}."RETURN_REASON_CODE"`,
      type: `string`
    },
    
    document_id: {
      sql: `${CUBE}."DOCUMENT_ID"`,
      type: `string`
    },
    
    vendor_item_no: {
      sql: `${CUBE}."VENDOR_ITEM_NO"`,
      type: `string`
    },
    
    job_total_price: {
      sql: `${CUBE}."JOB_TOTAL_PRICE"`,
      type: `string`
    },
    
    blanket_order_no: {
      sql: `${CUBE}."BLANKET_ORDER_NO"`,
      type: `string`
    },
    
    unit_of_measure_code: {
      sql: `${CUBE}."UNIT_OF_MEASURE_CODE"`,
      type: `string`
    },
    
    vat_calculation_type: {
      sql: `${CUBE}."VAT_CALCULATION_TYPE"`,
      type: `string`
    },
    
    maintenance_code: {
      sql: `${CUBE}."MAINTENANCE_CODE"`,
      type: `string`
    },
    
    job_line_disc_amount_lcy: {
      sql: `${CUBE}."JOB_LINE_DISC_AMOUNT_LCY"`,
      type: `string`
    },
    
    gen_prod_posting_group: {
      sql: `${CUBE}."GEN_PROD_POSTING_GROUP"`,
      type: `string`
    },
    
    job_unit_price_lcy: {
      sql: `${CUBE}."JOB_UNIT_PRICE_LCY"`,
      type: `string`
    },
    
    shortcut_dimension_2_code: {
      sql: `${CUBE}."SHORTCUT_DIMENSION_2_CODE"`,
      type: `string`
    },
    
    allow_invoice_disc: {
      sql: `${CUBE}."ALLOW_INVOICE_DISC"`,
      type: `boolean`
    },
    
    posting_group: {
      sql: `${CUBE}."POSTING_GROUP"`,
      type: `string`
    },
    
    unit_cost_lcy: {
      sql: `${CUBE}."UNIT_COST_LCY"`,
      type: `string`
    },
    
    order_no: {
      sql: `${CUBE}."ORDER_NO"`,
      type: `string`
    },
    
    ic_partner_reference: {
      sql: `${CUBE}."IC_PARTNER_REFERENCE"`,
      type: `string`
    },
    
    tax_liable: {
      sql: `${CUBE}."TAX_LIABLE"`,
      type: `boolean`
    },
    
    transaction_type: {
      sql: `${CUBE}."TRANSACTION_TYPE"`,
      type: `string`
    },
    
    qty_invoiced_base: {
      sql: `${CUBE}."QTY_INVOICED_BASE"`,
      type: `string`
    },
    
    net_weight: {
      sql: `${CUBE}."NET_WEIGHT"`,
      type: `string`
    },
    
    tax_group_code: {
      sql: `${CUBE}."TAX_GROUP_CODE"`,
      type: `string`
    },
    
    depr_acquisition_cost: {
      sql: `${CUBE}."DEPR_ACQUISITION_COST"`,
      type: `boolean`
    },
    
    system_created_at: {
      sql: `${CUBE}."SYSTEM_CREATED_AT"`,
      type: `time`
    },
    
    promised_receipt_date: {
      sql: `${CUBE}."PROMISED_RECEIPT_DATE"`,
      type: `time`
    },
    
    fa_posting_date: {
      sql: `${CUBE}."FA_POSTING_DATE"`,
      type: `time`
    },
    
    expected_receipt_date: {
      sql: `${CUBE}."EXPECTED_RECEIPT_DATE"`,
      type: `time`
    },
    
    planned_receipt_date: {
      sql: `${CUBE}."PLANNED_RECEIPT_DATE"`,
      type: `time`
    },
    
    order_date: {
      sql: `${CUBE}."ORDER_DATE"`,
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
    
    requested_receipt_date: {
      sql: `${CUBE}."REQUESTED_RECEIPT_DATE"`,
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
