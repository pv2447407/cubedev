cube(`item_ledger_entry`, {
  sql_table: `"BUSINESS_CENTRAL"."ITEM_LEDGER_ENTRY"`,
  
  data_source: `default`,
  
  joins: {
    company: {
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    description: {
      sql: `${CUBE}."DESCRIPTION"`,
      type: `string`
    },
    
    open: {
      sql: `${CUBE}."OPEN"`,
      type: `boolean`
    },
    
    remaining_quantity: {
      sql: `${CUBE}."REMAINING_QUANTITY"`,
      type: `string`
    },
    
    transaction_specification: {
      sql: `${CUBE}."TRANSACTION_SPECIFICATION"`,
      type: `string`
    },
    
    system_modified_by: {
      sql: `${CUBE}."SYSTEM_MODIFIED_BY"`,
      type: `string`
    },
    
    sales_amount_actual: {
      sql: `${CUBE}."SALES_AMOUNT_ACTUAL"`,
      type: `string`
    },
    
    order_no: {
      sql: `${CUBE}."ORDER_NO"`,
      type: `string`
    },
    
    purchasing_code: {
      sql: `${CUBE}."PURCHASING_CODE"`,
      type: `string`
    },
    
    item_reference_no: {
      sql: `${CUBE}."ITEM_REFERENCE_NO"`,
      type: `string`
    },
    
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    },
    
    cost_amount_actual_acy: {
      sql: `${CUBE}."COST_AMOUNT_ACTUAL_ACY"`,
      type: `string`
    },
    
    country_region_code: {
      sql: `${CUBE}."COUNTRY_REGION_CODE"`,
      type: `string`
    },
    
    transaction_type: {
      sql: `${CUBE}."TRANSACTION_TYPE"`,
      type: `string`
    },
    
    positive: {
      sql: `${CUBE}."POSITIVE"`,
      type: `boolean`
    },
    
    nonstock: {
      sql: `${CUBE}."NONSTOCK"`,
      type: `boolean`
    },
    
    lot_no: {
      sql: `${CUBE}."LOT_NO"`,
      type: `string`
    },
    
    item_tracking: {
      sql: `${CUBE}."ITEM_TRACKING"`,
      type: `string`
    },
    
    return_reason_code: {
      sql: `${CUBE}."RETURN_REASON_CODE"`,
      type: `string`
    },
    
    transport_method: {
      sql: `${CUBE}."TRANSPORT_METHOD"`,
      type: `string`
    },
    
    system_id: {
      sql: `${CUBE}."SYSTEM_ID"`,
      type: `string`,
      primary_key: true
    },
    
    originally_ordered_var_code: {
      sql: `${CUBE}."ORIGINALLY_ORDERED_VAR_CODE"`,
      type: `string`
    },
    
    document_type: {
      sql: `${CUBE}."DOCUMENT_TYPE"`,
      type: `string`
    },
    
    system_created_by: {
      sql: `${CUBE}."SYSTEM_CREATED_BY"`,
      type: `string`
    },
    
    purchase_amount_actual: {
      sql: `${CUBE}."PURCHASE_AMOUNT_ACTUAL"`,
      type: `string`
    },
    
    shortcut_dimension_6_code: {
      sql: `${CUBE}."SHORTCUT_DIMENSION_6_CODE"`,
      type: `string`
    },
    
    source_type: {
      sql: `${CUBE}."SOURCE_TYPE"`,
      type: `string`
    },
    
    shipped_qty_not_returned: {
      sql: `${CUBE}."SHIPPED_QTY_NOT_RETURNED"`,
      type: `string`
    },
    
    location_code: {
      sql: `${CUBE}."LOCATION_CODE"`,
      type: `string`
    },
    
    completely_invoiced: {
      sql: `${CUBE}."COMPLETELY_INVOICED"`,
      type: `boolean`
    },
    
    cost_amount_non_invtbl_acy: {
      sql: `${CUBE}."COST_AMOUNT_NON_INVTBL_ACY"`,
      type: `string`
    },
    
    derived_from_blanket_order: {
      sql: `${CUBE}."DERIVED_FROM_BLANKET_ORDER"`,
      type: `boolean`
    },
    
    document_no: {
      sql: `${CUBE}."DOCUMENT_NO"`,
      type: `string`
    },
    
    unit_of_measure_code: {
      sql: `${CUBE}."UNIT_OF_MEASURE_CODE"`,
      type: `string`
    },
    
    entry_exit_point: {
      sql: `${CUBE}."ENTRY_EXIT_POINT"`,
      type: `string`
    },
    
    global_dimension_2_code: {
      sql: `${CUBE}."GLOBAL_DIMENSION_2_CODE"`,
      type: `string`
    },
    
    job_task_no: {
      sql: `${CUBE}."JOB_TASK_NO"`,
      type: `string`
    },
    
    cost_amount_expected_acy: {
      sql: `${CUBE}."COST_AMOUNT_EXPECTED_ACY"`,
      type: `string`
    },
    
    external_document_no: {
      sql: `${CUBE}."EXTERNAL_DOCUMENT_NO"`,
      type: `string`
    },
    
    quantity: {
      sql: `${CUBE}."QUANTITY"`,
      type: `string`
    },
    
    purchase_amount_expected: {
      sql: `${CUBE}."PURCHASE_AMOUNT_EXPECTED"`,
      type: `string`
    },
    
    serial_no: {
      sql: `${CUBE}."SERIAL_NO"`,
      type: `string`
    },
    
    variant_code: {
      sql: `${CUBE}."VARIANT_CODE"`,
      type: `string`
    },
    
    source_no: {
      sql: `${CUBE}."SOURCE_NO"`,
      type: `string`
    },
    
    out_of_stock_substitution: {
      sql: `${CUBE}."OUT_OF_STOCK_SUBSTITUTION"`,
      type: `boolean`
    },
    
    cost_amount_non_invtbl: {
      sql: `${CUBE}."COST_AMOUNT_NON_INVTBL"`,
      type: `string`
    },
    
    order_type: {
      sql: `${CUBE}."ORDER_TYPE"`,
      type: `string`
    },
    
    sales_amount_expected: {
      sql: `${CUBE}."SALES_AMOUNT_EXPECTED"`,
      type: `string`
    },
    
    entry_type: {
      sql: `${CUBE}."ENTRY_TYPE"`,
      type: `string`
    },
    
    global_dimension_1_code: {
      sql: `${CUBE}."GLOBAL_DIMENSION_1_CODE"`,
      type: `string`
    },
    
    originally_ordered_no: {
      sql: `${CUBE}."ORIGINALLY_ORDERED_NO"`,
      type: `string`
    },
    
    correction: {
      sql: `${CUBE}."CORRECTION"`,
      type: `boolean`
    },
    
    item_no: {
      sql: `${CUBE}."ITEM_NO"`,
      type: `string`
    },
    
    area: {
      sql: `${CUBE}."AREA"`,
      type: `string`
    },
    
    applied_entry_to_adjust: {
      sql: `${CUBE}."APPLIED_ENTRY_TO_ADJUST"`,
      type: `boolean`
    },
    
    shortcut_dimension_8_code: {
      sql: `${CUBE}."SHORTCUT_DIMENSION_8_CODE"`,
      type: `string`
    },
    
    shortcut_dimension_7_code: {
      sql: `${CUBE}."SHORTCUT_DIMENSION_7_CODE"`,
      type: `string`
    },
    
    item_category_code: {
      sql: `${CUBE}."ITEM_CATEGORY_CODE"`,
      type: `string`
    },
    
    job_purchase: {
      sql: `${CUBE}."JOB_PURCHASE"`,
      type: `boolean`
    },
    
    shortcut_dimension_3_code: {
      sql: `${CUBE}."SHORTCUT_DIMENSION_3_CODE"`,
      type: `string`
    },
    
    cost_amount_expected: {
      sql: `${CUBE}."COST_AMOUNT_EXPECTED"`,
      type: `string`
    },
    
    assemble_to_order: {
      sql: `${CUBE}."ASSEMBLE_TO_ORDER"`,
      type: `boolean`
    },
    
    package_no: {
      sql: `${CUBE}."PACKAGE_NO"`,
      type: `string`
    },
    
    invoiced_quantity: {
      sql: `${CUBE}."INVOICED_QUANTITY"`,
      type: `string`
    },
    
    drop_shipment: {
      sql: `${CUBE}."DROP_SHIPMENT"`,
      type: `boolean`
    },
    
    cost_amount_actual: {
      sql: `${CUBE}."COST_AMOUNT_ACTUAL"`,
      type: `string`
    },
    
    reserved_quantity: {
      sql: `${CUBE}."RESERVED_QUANTITY"`,
      type: `string`
    },
    
    shortcut_dimension_4_code: {
      sql: `${CUBE}."SHORTCUT_DIMENSION_4_CODE"`,
      type: `string`
    },
    
    shpt_method_code: {
      sql: `${CUBE}."SHPT_METHOD_CODE"`,
      type: `string`
    },
    
    no_series: {
      sql: `${CUBE}."NO_SERIES"`,
      type: `string`
    },
    
    shortcut_dimension_5_code: {
      sql: `${CUBE}."SHORTCUT_DIMENSION_5_CODE"`,
      type: `string`
    },
    
    qty_per_unit_of_measure: {
      sql: `${CUBE}."QTY_PER_UNIT_OF_MEASURE"`,
      type: `string`
    },
    
    job_no: {
      sql: `${CUBE}."JOB_NO"`,
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
    
    system_modified_at: {
      sql: `${CUBE}."SYSTEM_MODIFIED_AT"`,
      type: `time`
    },
    
    posting_date: {
      sql: `${CUBE}."POSTING_DATE"`,
      type: `time`
    },
    
    warranty_date: {
      sql: `${CUBE}."WARRANTY_DATE"`,
      type: `time`
    },
    
    expiration_date: {
      sql: `${CUBE}."EXPIRATION_DATE"`,
      type: `time`
    },
    
    last_invoice_date: {
      sql: `${CUBE}."LAST_INVOICE_DATE"`,
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
