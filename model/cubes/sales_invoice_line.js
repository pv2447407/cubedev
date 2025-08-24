cube(`sales_invoice_line`, {
  sql_table: `"BUSINESS_CENTRAL"."SALES_INVOICE_LINE"`,
  
  data_source: `default`,
  
  joins: {
    company: {
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    exit_point: {
      sql: `${CUBE}."EXIT_POINT"`,
      type: `string`
    },
    
    allocation_account_no: {
      sql: `${CUBE}."ALLOCATION_ACCOUNT_NO"`,
      type: `string`
    },
    
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    },
    
    system_created_by: {
      sql: `${CUBE}."SYSTEM_CREATED_BY"`,
      type: `string`
    },
    
    customer_disc_group: {
      sql: `${CUBE}."CUSTOMER_DISC_GROUP"`,
      type: `string`
    },
    
    work_type_code: {
      sql: `${CUBE}."WORK_TYPE_CODE"`,
      type: `string`
    },
    
    description_2: {
      sql: `${CUBE}."DESCRIPTION_2"`,
      type: `string`
    },
    
    order_no: {
      sql: `${CUBE}."ORDER_NO"`,
      type: `string`
    },
    
    no: {
      sql: `${CUBE}."NO"`,
      type: `string`
    },
    
    ic_partner_ref_type: {
      sql: `${CUBE}."IC_PARTNER_REF_TYPE"`,
      type: `string`
    },
    
    document_no: {
      sql: `${CUBE}."DOCUMENT_NO"`,
      type: `string`
    },
    
    duplicate_in_depreciation_book: {
      sql: `${CUBE}."DUPLICATE_IN_DEPRECIATION_BOOK"`,
      type: `string`
    },
    
    customer_price_group: {
      sql: `${CUBE}."CUSTOMER_PRICE_GROUP"`,
      type: `string`
    },
    
    system_created_entry: {
      sql: `${CUBE}."SYSTEM_CREATED_ENTRY"`,
      type: `boolean`
    },
    
    system_modified_by: {
      sql: `${CUBE}."SYSTEM_MODIFIED_BY"`,
      type: `string`
    },
    
    line_discount_amount: {
      sql: `${CUBE}."LINE_DISCOUNT_AMOUNT"`,
      type: `string`
    },
    
    item_reference_no: {
      sql: `${CUBE}."ITEM_REFERENCE_NO"`,
      type: `string`
    },
    
    vat_bus_posting_group: {
      sql: `${CUBE}."VAT_BUS_POSTING_GROUP"`,
      type: `string`
    },
    
    quantity: {
      sql: `${CUBE}."QUANTITY"`,
      type: `string`
    },
    
    unit_cost_lcy: {
      sql: `${CUBE}."UNIT_COST_LCY"`,
      type: `string`
    },
    
    shortcut_dimension_1_code: {
      sql: `${CUBE}."SHORTCUT_DIMENSION_1_CODE"`,
      type: `string`
    },
    
    ic_partner_code: {
      sql: `${CUBE}."IC_PARTNER_CODE"`,
      type: `string`
    },
    
    vat_difference: {
      sql: `${CUBE}."VAT_DIFFERENCE"`,
      type: `string`
    },
    
    transaction_type: {
      sql: `${CUBE}."TRANSACTION_TYPE"`,
      type: `string`
    },
    
    unit_price: {
      sql: `${CUBE}."UNIT_PRICE"`,
      type: `string`
    },
    
    variant_code: {
      sql: `${CUBE}."VARIANT_CODE"`,
      type: `string`
    },
    
    vat_clause_code: {
      sql: `${CUBE}."VAT_CLAUSE_CODE"`,
      type: `string`
    },
    
    price_description: {
      sql: `${CUBE}."PRICE_DESCRIPTION"`,
      type: `string`
    },
    
    retention_vat: {
      sql: `${CUBE}."RETENTION_VAT"`,
      type: `string`
    },
    
    transaction_specification: {
      sql: `${CUBE}."TRANSACTION_SPECIFICATION"`,
      type: `string`
    },
    
    vat_calculation_type: {
      sql: `${CUBE}."VAT_CALCULATION_TYPE"`,
      type: `string`
    },
    
    purchasing_code: {
      sql: `${CUBE}."PURCHASING_CODE"`,
      type: `string`
    },
    
    item_category_code: {
      sql: `${CUBE}."ITEM_CATEGORY_CODE"`,
      type: `string`
    },
    
    blanket_order_no: {
      sql: `${CUBE}."BLANKET_ORDER_NO"`,
      type: `string`
    },
    
    responsibility_center: {
      sql: `${CUBE}."RESPONSIBILITY_CENTER"`,
      type: `string`
    },
    
    area: {
      sql: `${CUBE}."AREA"`,
      type: `string`
    },
    
    drop_shipment: {
      sql: `${CUBE}."DROP_SHIPMENT"`,
      type: `boolean`
    },
    
    tax_area_code: {
      sql: `${CUBE}."TAX_AREA_CODE"`,
      type: `string`
    },
    
    net_weight: {
      sql: `${CUBE}."NET_WEIGHT"`,
      type: `string`
    },
    
    bin_code: {
      sql: `${CUBE}."BIN_CODE"`,
      type: `string`
    },
    
    custom_transit_number: {
      sql: `${CUBE}."CUSTOM_TRANSIT_NUMBER"`,
      type: `string`
    },
    
    line_discount: {
      sql: `${CUBE}."LINE_DISCOUNT"`,
      type: `string`
    },
    
    inv_discount_amount: {
      sql: `${CUBE}."INV_DISCOUNT_AMOUNT"`,
      type: `string`
    },
    
    item_reference_type_no: {
      sql: `${CUBE}."ITEM_REFERENCE_TYPE_NO"`,
      type: `string`
    },
    
    posting_group: {
      sql: `${CUBE}."POSTING_GROUP"`,
      type: `string`
    },
    
    line_amount: {
      sql: `${CUBE}."LINE_AMOUNT"`,
      type: `string`
    },
    
    gross_weight: {
      sql: `${CUBE}."GROSS_WEIGHT"`,
      type: `string`
    },
    
    depr_until_faposting_date: {
      sql: `${CUBE}."DEPR_UNTIL_FAPOSTING_DATE"`,
      type: `boolean`
    },
    
    unit_of_measure_code: {
      sql: `${CUBE}."UNIT_OF_MEASURE_CODE"`,
      type: `string`
    },
    
    vat_prod_posting_group: {
      sql: `${CUBE}."VAT_PROD_POSTING_GROUP"`,
      type: `string`
    },
    
    bill_to_customer_no: {
      sql: `${CUBE}."BILL_TO_CUSTOMER_NO"`,
      type: `string`
    },
    
    vat_base_amount: {
      sql: `${CUBE}."VAT_BASE_AMOUNT"`,
      type: `string`
    },
    
    prepayment_line: {
      sql: `${CUBE}."PREPAYMENT_LINE"`,
      type: `boolean`
    },
    
    allow_invoice_disc: {
      sql: `${CUBE}."ALLOW_INVOICE_DISC"`,
      type: `boolean`
    },
    
    depreciation_book_code: {
      sql: `${CUBE}."DEPRECIATION_BOOK_CODE"`,
      type: `string`
    },
    
    amount: {
      sql: `${CUBE}."AMOUNT"`,
      type: `string`
    },
    
    tax_category: {
      sql: `${CUBE}."TAX_CATEGORY"`,
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
    
    shipment_no: {
      sql: `${CUBE}."SHIPMENT_NO"`,
      type: `string`
    },
    
    qty_per_unit_of_measure: {
      sql: `${CUBE}."QTY_PER_UNIT_OF_MEASURE"`,
      type: `string`
    },
    
    unit_cost: {
      sql: `${CUBE}."UNIT_COST"`,
      type: `string`
    },
    
    vat: {
      sql: `${CUBE}."VAT"`,
      type: `string`
    },
    
    quantity_base: {
      sql: `${CUBE}."QUANTITY_BASE"`,
      type: `string`
    },
    
    line_discount_calculation: {
      sql: `${CUBE}."LINE_DISCOUNT_CALCULATION"`,
      type: `string`
    },
    
    shortcut_dimension_2_code: {
      sql: `${CUBE}."SHORTCUT_DIMENSION_2_CODE"`,
      type: `string`
    },
    
    tax_liable: {
      sql: `${CUBE}."TAX_LIABLE"`,
      type: `boolean`
    },
    
    nonstock: {
      sql: `${CUBE}."NONSTOCK"`,
      type: `boolean`
    },
    
    item_reference_type: {
      sql: `${CUBE}."ITEM_REFERENCE_TYPE"`,
      type: `string`
    },
    
    price_calculation_method: {
      sql: `${CUBE}."PRICE_CALCULATION_METHOD"`,
      type: `string`
    },
    
    deferral_code: {
      sql: `${CUBE}."DEFERRAL_CODE"`,
      type: `string`
    },
    
    item_reference_unit_of_measure: {
      sql: `${CUBE}."ITEM_REFERENCE_UNIT_OF_MEASURE"`,
      type: `string`
    },
    
    vat_identifier: {
      sql: `${CUBE}."VAT_IDENTIFIER"`,
      type: `string`
    },
    
    gen_prod_posting_group: {
      sql: `${CUBE}."GEN_PROD_POSTING_GROUP"`,
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
    
    job_no: {
      sql: `${CUBE}."JOB_NO"`,
      type: `string`
    },
    
    allow_line_disc: {
      sql: `${CUBE}."ALLOW_LINE_DISC"`,
      type: `boolean`
    },
    
    unit_of_measure: {
      sql: `${CUBE}."UNIT_OF_MEASURE"`,
      type: `string`
    },
    
    unit_volume: {
      sql: `${CUBE}."UNIT_VOLUME"`,
      type: `string`
    },
    
    ic_partner_reference: {
      sql: `${CUBE}."IC_PARTNER_REFERENCE"`,
      type: `string`
    },
    
    tax_group_code: {
      sql: `${CUBE}."TAX_GROUP_CODE"`,
      type: `string`
    },
    
    job_task_no: {
      sql: `${CUBE}."JOB_TASK_NO"`,
      type: `string`
    },
    
    ic_item_reference_no: {
      sql: `${CUBE}."IC_ITEM_REFERENCE_NO"`,
      type: `string`
    },
    
    gen_bus_posting_group: {
      sql: `${CUBE}."GEN_BUS_POSTING_GROUP"`,
      type: `string`
    },
    
    amount_including_vat: {
      sql: `${CUBE}."AMOUNT_INCLUDING_VAT"`,
      type: `string`
    },
    
    use_duplication_list: {
      sql: `${CUBE}."USE_DUPLICATION_LIST"`,
      type: `boolean`
    },
    
    pmt_discount_amount: {
      sql: `${CUBE}."PMT_DISCOUNT_AMOUNT"`,
      type: `string`
    },
    
    type: {
      sql: `${CUBE}."TYPE"`,
      type: `string`
    },
    
    location_code: {
      sql: `${CUBE}."LOCATION_CODE"`,
      type: `string`
    },
    
    package_tracking_no: {
      sql: `${CUBE}."PACKAGE_TRACKING_NO"`,
      type: `string`
    },
    
    system_id: {
      sql: `${CUBE}."SYSTEM_ID"`,
      type: `string`
    },
    
    description: {
      sql: `${CUBE}."DESCRIPTION"`,
      type: `string`
    },
    
    system_created_at: {
      sql: `${CUBE}."SYSTEM_CREATED_AT"`,
      type: `time`
    },
    
    shipment_date: {
      sql: `${CUBE}."SHIPMENT_DATE"`,
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
    
    fa_posting_date: {
      sql: `${CUBE}."FA_POSTING_DATE"`,
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
