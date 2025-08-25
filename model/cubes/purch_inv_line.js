cube(`purch_inv_line`, {
  sql_table: `"BUSINESS_CENTRAL"."PURCH_INV_LINE"`,
  
  data_source: `default`,
  
  joins: {
    company: {
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    job_total_price_lcy: {
      sql: `${CUBE}."JOB_TOTAL_PRICE_LCY"`,
      type: `string`
    },
    
    vat_prod_posting_group: {
      sql: `${CUBE}."VAT_PROD_POSTING_GROUP"`,
      type: `string`
    },
    
    irs_1099_liable: {
      sql: `${CUBE}."IRS_1099_LIABLE"`,
      type: `boolean`
    },
    
    location_code: {
      sql: `${CUBE}."LOCATION_CODE"`,
      type: `string`
    },
    
    prepayment_line: {
      sql: `${CUBE}."PREPAYMENT_LINE"`,
      type: `boolean`
    },
    
    quantity_base: {
      sql: `${CUBE}."QUANTITY_BASE"`,
      type: `string`
    },
    
    ic_cross_reference_no: {
      sql: `${CUBE}."IC_CROSS_REFERENCE_NO"`,
      type: `string`
    },
    
    job_line_disc_amount_lcy: {
      sql: `${CUBE}."JOB_LINE_DISC_AMOUNT_LCY"`,
      type: `string`
    },
    
    type: {
      sql: `${CUBE}."TYPE"`,
      type: `string`
    },
    
    budgeted_fano: {
      sql: `${CUBE}."BUDGETED_FANO"`,
      type: `string`
    },
    
    operation_no: {
      sql: `${CUBE}."OPERATION_NO"`,
      type: `string`
    },
    
    non_deductible_vatbase: {
      sql: `${CUBE}."NON_DEDUCTIBLE_VATBASE"`,
      type: `string`
    },
    
    job_total_price: {
      sql: `${CUBE}."JOB_TOTAL_PRICE"`,
      type: `string`
    },
    
    ic_partner_code: {
      sql: `${CUBE}."IC_PARTNER_CODE"`,
      type: `string`
    },
    
    tax_area_code: {
      sql: `${CUBE}."TAX_AREA_CODE"`,
      type: `string`
    },
    
    tax_group_code: {
      sql: `${CUBE}."TAX_GROUP_CODE"`,
      type: `string`
    },
    
    maintenance_code: {
      sql: `${CUBE}."MAINTENANCE_CODE"`,
      type: `string`
    },
    
    system_id: {
      sql: `${CUBE}."SYSTEM_ID"`,
      type: `string`,
      primary_key: true
    },
    
    job_line_type: {
      sql: `${CUBE}."JOB_LINE_TYPE"`,
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
    
    unit_of_measure_code: {
      sql: `${CUBE}."UNIT_OF_MEASURE_CODE"`,
      type: `string`
    },
    
    job_unit_price: {
      sql: `${CUBE}."JOB_UNIT_PRICE"`,
      type: `string`
    },
    
    ic_partner_reference: {
      sql: `${CUBE}."IC_PARTNER_REFERENCE"`,
      type: `string`
    },
    
    allow_invoice_disc: {
      sql: `${CUBE}."ALLOW_INVOICE_DISC"`,
      type: `boolean`
    },
    
    unit_price_lcy: {
      sql: `${CUBE}."UNIT_PRICE_LCY"`,
      type: `string`
    },
    
    item_reference_no: {
      sql: `${CUBE}."ITEM_REFERENCE_NO"`,
      type: `string`
    },
    
    fa_posting_type: {
      sql: `${CUBE}."FA_POSTING_TYPE"`,
      type: `string`
    },
    
    line_amount: {
      sql: `${CUBE}."LINE_AMOUNT"`,
      type: `string`
    },
    
    job_no: {
      sql: `${CUBE}."JOB_NO"`,
      type: `string`
    },
    
    variant_code: {
      sql: `${CUBE}."VARIANT_CODE"`,
      type: `string`
    },
    
    posting_group: {
      sql: `${CUBE}."POSTING_GROUP"`,
      type: `string`
    },
    
    use_tax: {
      sql: `${CUBE}."USE_TAX"`,
      type: `boolean`
    },
    
    gross_weight: {
      sql: `${CUBE}."GROSS_WEIGHT"`,
      type: `string`
    },
    
    non_deductible_vatamount: {
      sql: `${CUBE}."NON_DEDUCTIBLE_VATAMOUNT"`,
      type: `string`
    },
    
    vat: {
      sql: `${CUBE}."VAT"`,
      type: `string`
    },
    
    unit_volume: {
      sql: `${CUBE}."UNIT_VOLUME"`,
      type: `string`
    },
    
    amount_including_vat: {
      sql: `${CUBE}."AMOUNT_INCLUDING_VAT"`,
      type: `string`
    },
    
    vendor_item_no: {
      sql: `${CUBE}."VENDOR_ITEM_NO"`,
      type: `string`
    },
    
    routing_no: {
      sql: `${CUBE}."ROUTING_NO"`,
      type: `string`
    },
    
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    },
    
    inv_discount_amount: {
      sql: `${CUBE}."INV_DISCOUNT_AMOUNT"`,
      type: `string`
    },
    
    vat_identifier: {
      sql: `${CUBE}."VAT_IDENTIFIER"`,
      type: `string`
    },
    
    job_line_discount_amount: {
      sql: `${CUBE}."JOB_LINE_DISCOUNT_AMOUNT"`,
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
    
    shortcut_dimension_2_code: {
      sql: `${CUBE}."SHORTCUT_DIMENSION_2_CODE"`,
      type: `string`
    },
    
    prod_order_no: {
      sql: `${CUBE}."PROD_ORDER_NO"`,
      type: `string`
    },
    
    depr_acquisition_cost: {
      sql: `${CUBE}."DEPR_ACQUISITION_COST"`,
      type: `boolean`
    },
    
    gen_prod_posting_group: {
      sql: `${CUBE}."GEN_PROD_POSTING_GROUP"`,
      type: `string`
    },
    
    job_line_discount: {
      sql: `${CUBE}."JOB_LINE_DISCOUNT"`,
      type: `string`
    },
    
    item_category_code: {
      sql: `${CUBE}."ITEM_CATEGORY_CODE"`,
      type: `string`
    },
    
    vat_difference: {
      sql: `${CUBE}."VAT_DIFFERENCE"`,
      type: `string`
    },
    
    system_modified_by: {
      sql: `${CUBE}."SYSTEM_MODIFIED_BY"`,
      type: `string`
    },
    
    gen_bus_posting_group: {
      sql: `${CUBE}."GEN_BUS_POSTING_GROUP"`,
      type: `string`
    },
    
    job_task_no: {
      sql: `${CUBE}."JOB_TASK_NO"`,
      type: `string`
    },
    
    job_line_amount_lcy: {
      sql: `${CUBE}."JOB_LINE_AMOUNT_LCY"`,
      type: `string`
    },
    
    area: {
      sql: `${CUBE}."AREA"`,
      type: `string`
    },
    
    job_currency_code: {
      sql: `${CUBE}."JOB_CURRENCY_CODE"`,
      type: `string`
    },
    
    allocation_account_no: {
      sql: `${CUBE}."ALLOCATION_ACCOUNT_NO"`,
      type: `string`
    },
    
    use_duplication_list: {
      sql: `${CUBE}."USE_DUPLICATION_LIST"`,
      type: `boolean`
    },
    
    description_2: {
      sql: `${CUBE}."DESCRIPTION_2"`,
      type: `string`
    },
    
    unit_of_measure: {
      sql: `${CUBE}."UNIT_OF_MEASURE"`,
      type: `string`
    },
    
    job_unit_price_lcy: {
      sql: `${CUBE}."JOB_UNIT_PRICE_LCY"`,
      type: `string`
    },
    
    unit_cost_lcy: {
      sql: `${CUBE}."UNIT_COST_LCY"`,
      type: `string`
    },
    
    amount: {
      sql: `${CUBE}."AMOUNT"`,
      type: `string`
    },
    
    responsibility_center: {
      sql: `${CUBE}."RESPONSIBILITY_CENTER"`,
      type: `string`
    },
    
    depr_until_faposting_date: {
      sql: `${CUBE}."DEPR_UNTIL_FAPOSTING_DATE"`,
      type: `boolean`
    },
    
    indirect_cost: {
      sql: `${CUBE}."INDIRECT_COST"`,
      type: `string`
    },
    
    shortcut_dimension_1_code: {
      sql: `${CUBE}."SHORTCUT_DIMENSION_1_CODE"`,
      type: `string`
    },
    
    system_created_entry: {
      sql: `${CUBE}."SYSTEM_CREATED_ENTRY"`,
      type: `boolean`
    },
    
    bin_code: {
      sql: `${CUBE}."BIN_CODE"`,
      type: `string`
    },
    
    pay_to_vendor_no: {
      sql: `${CUBE}."PAY_TO_VENDOR_NO"`,
      type: `string`
    },
    
    transport_method: {
      sql: `${CUBE}."TRANSPORT_METHOD"`,
      type: `string`
    },
    
    document_no: {
      sql: `${CUBE}."DOCUMENT_NO"`,
      type: `string`
    },
    
    vat_calculation_type: {
      sql: `${CUBE}."VAT_CALCULATION_TYPE"`,
      type: `string`
    },
    
    job_line_amount: {
      sql: `${CUBE}."JOB_LINE_AMOUNT"`,
      type: `string`
    },
    
    pmt_discount_amount: {
      sql: `${CUBE}."PMT_DISCOUNT_AMOUNT"`,
      type: `string`
    },
    
    non_deductible_vat: {
      sql: `${CUBE}."NON_DEDUCTIBLE_VAT"`,
      type: `string`
    },
    
    deferral_code: {
      sql: `${CUBE}."DEFERRAL_CODE"`,
      type: `string`
    },
    
    description: {
      sql: `${CUBE}."DESCRIPTION"`,
      type: `string`
    },
    
    quantity: {
      sql: `${CUBE}."QUANTITY"`,
      type: `string`
    },
    
    non_deductible_vatdiff: {
      sql: `${CUBE}."NON_DEDUCTIBLE_VATDIFF"`,
      type: `string`
    },
    
    blanket_order_no: {
      sql: `${CUBE}."BLANKET_ORDER_NO"`,
      type: `string`
    },
    
    line_discount: {
      sql: `${CUBE}."LINE_DISCOUNT"`,
      type: `string`
    },
    
    purchasing_code: {
      sql: `${CUBE}."PURCHASING_CODE"`,
      type: `string`
    },
    
    item_reference_type: {
      sql: `${CUBE}."ITEM_REFERENCE_TYPE"`,
      type: `string`
    },
    
    job_currency_factor: {
      sql: `${CUBE}."JOB_CURRENCY_FACTOR"`,
      type: `string`
    },
    
    qty_per_unit_of_measure: {
      sql: `${CUBE}."QTY_PER_UNIT_OF_MEASURE"`,
      type: `string`
    },
    
    direct_unit_cost: {
      sql: `${CUBE}."DIRECT_UNIT_COST"`,
      type: `string`
    },
    
    insurance_no: {
      sql: `${CUBE}."INSURANCE_NO"`,
      type: `string`
    },
    
    net_weight: {
      sql: `${CUBE}."NET_WEIGHT"`,
      type: `string`
    },
    
    item_reference_unit_of_measure: {
      sql: `${CUBE}."ITEM_REFERENCE_UNIT_OF_MEASURE"`,
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
    
    item_reference_type_no: {
      sql: `${CUBE}."ITEM_REFERENCE_TYPE_NO"`,
      type: `string`
    },
    
    provincial_tax_area_code: {
      sql: `${CUBE}."PROVINCIAL_TAX_AREA_CODE"`,
      type: `string`
    },
    
    depreciation_book_code: {
      sql: `${CUBE}."DEPRECIATION_BOOK_CODE"`,
      type: `string`
    },
    
    return_reason_code: {
      sql: `${CUBE}."RETURN_REASON_CODE"`,
      type: `string`
    },
    
    units_per_parcel: {
      sql: `${CUBE}."UNITS_PER_PARCEL"`,
      type: `string`
    },
    
    transaction_type: {
      sql: `${CUBE}."TRANSACTION_TYPE"`,
      type: `string`
    },
    
    work_center_no: {
      sql: `${CUBE}."WORK_CENTER_NO"`,
      type: `string`
    },
    
    duplicate_in_depreciation_book: {
      sql: `${CUBE}."DUPLICATE_IN_DEPRECIATION_BOOK"`,
      type: `string`
    },
    
    entry_point: {
      sql: `${CUBE}."ENTRY_POINT"`,
      type: `string`
    },
    
    vat_base_amount: {
      sql: `${CUBE}."VAT_BASE_AMOUNT"`,
      type: `string`
    },
    
    receipt_no: {
      sql: `${CUBE}."RECEIPT_NO"`,
      type: `string`
    },
    
    overhead_rate: {
      sql: `${CUBE}."OVERHEAD_RATE"`,
      type: `string`
    },
    
    buy_from_vendor_no: {
      sql: `${CUBE}."BUY_FROM_VENDOR_NO"`,
      type: `string`
    },
    
    tax_liable: {
      sql: `${CUBE}."TAX_LIABLE"`,
      type: `boolean`
    },
    
    ic_partner_ref_type: {
      sql: `${CUBE}."IC_PARTNER_REF_TYPE"`,
      type: `string`
    },
    
    line_discount_amount: {
      sql: `${CUBE}."LINE_DISCOUNT_AMOUNT"`,
      type: `string`
    },
    
    unit_cost: {
      sql: `${CUBE}."UNIT_COST"`,
      type: `string`
    },
    
    nonstock: {
      sql: `${CUBE}."NONSTOCK"`,
      type: `boolean`
    },
    
    order_no: {
      sql: `${CUBE}."ORDER_NO"`,
      type: `string`
    },
    
    system_created_at: {
      sql: `${CUBE}."SYSTEM_CREATED_AT"`,
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
    
    fa_posting_date: {
      sql: `${CUBE}."FA_POSTING_DATE"`,
      type: `time`
    },
    
    posting_date: {
      sql: `${CUBE}."POSTING_DATE"`,
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
