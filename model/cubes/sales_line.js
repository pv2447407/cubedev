cube(`sales_line`, {
  sql_table: `"BUSINESS_CENTRAL"."SALES_LINE"`,
  
  data_source: `default`,
  
  joins: {
    company: {
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    vat: {
      sql: `${CUBE}."VAT"`,
      type: `string`
    },
    
    gen_bus_posting_group: {
      sql: `${CUBE}."GEN_BUS_POSTING_GROUP"`,
      type: `string`
    },
    
    originally_ordered_no: {
      sql: `${CUBE}."ORIGINALLY_ORDERED_NO"`,
      type: `string`
    },
    
    shipping_agent_service_code: {
      sql: `${CUBE}."SHIPPING_AGENT_SERVICE_CODE"`,
      type: `string`
    },
    
    bin_code: {
      sql: `${CUBE}."BIN_CODE"`,
      type: `string`
    },
    
    bill_to_customer_no: {
      sql: `${CUBE}."BILL_TO_CUSTOMER_NO"`,
      type: `string`
    },
    
    allow_line_disc: {
      sql: `${CUBE}."ALLOW_LINE_DISC"`,
      type: `boolean`
    },
    
    qty_to_assign: {
      sql: `${CUBE}."QTY_TO_ASSIGN"`,
      type: `string`
    },
    
    tax_area_code: {
      sql: `${CUBE}."TAX_AREA_CODE"`,
      type: `string`
    },
    
    special_order_purchase_no: {
      sql: `${CUBE}."SPECIAL_ORDER_PURCHASE_NO"`,
      type: `string`
    },
    
    prepmt_amt_inv: {
      sql: `${CUBE}."PREPMT_AMT_INV"`,
      type: `string`
    },
    
    transport_method: {
      sql: `${CUBE}."TRANSPORT_METHOD"`,
      type: `string`
    },
    
    system_modified_by: {
      sql: `${CUBE}."SYSTEM_MODIFIED_BY"`,
      type: `string`
    },
    
    area: {
      sql: `${CUBE}."AREA"`,
      type: `string`
    },
    
    qty_to_ship_base: {
      sql: `${CUBE}."QTY_TO_SHIP_BASE"`,
      type: `string`
    },
    
    reserve: {
      sql: `${CUBE}."RESERVE"`,
      type: `string`
    },
    
    return_rcd_not_invd: {
      sql: `${CUBE}."RETURN_RCD_NOT_INVD"`,
      type: `string`
    },
    
    sell_to_customer_no: {
      sql: `${CUBE}."SELL_TO_CUSTOMER_NO"`,
      type: `string`
    },
    
    work_type_code: {
      sql: `${CUBE}."WORK_TYPE_CODE"`,
      type: `string`
    },
    
    job_no: {
      sql: `${CUBE}."JOB_NO"`,
      type: `string`
    },
    
    qty_to_invoice: {
      sql: `${CUBE}."QTY_TO_INVOICE"`,
      type: `string`
    },
    
    item_charge_qty_to_handle: {
      sql: `${CUBE}."ITEM_CHARGE_QTY_TO_HANDLE"`,
      type: `string`
    },
    
    quantity_shipped: {
      sql: `${CUBE}."QUANTITY_SHIPPED"`,
      type: `string`
    },
    
    item_category_code: {
      sql: `${CUBE}."ITEM_CATEGORY_CODE"`,
      type: `string`
    },
    
    vat_clause_code: {
      sql: `${CUBE}."VAT_CLAUSE_CODE"`,
      type: `string`
    },
    
    item_reference_no: {
      sql: `${CUBE}."ITEM_REFERENCE_NO"`,
      type: `string`
    },
    
    vat_calculation_type: {
      sql: `${CUBE}."VAT_CALCULATION_TYPE"`,
      type: `string`
    },
    
    unit_of_measure_code: {
      sql: `${CUBE}."UNIT_OF_MEASURE_CODE"`,
      type: `string`
    },
    
    nonstock: {
      sql: `${CUBE}."NONSTOCK"`,
      type: `boolean`
    },
    
    outstanding_amount_lcy: {
      sql: `${CUBE}."OUTSTANDING_AMOUNT_LCY"`,
      type: `string`
    },
    
    exit_point: {
      sql: `${CUBE}."EXIT_POINT"`,
      type: `string`
    },
    
    inv_discount_amount: {
      sql: `${CUBE}."INV_DISCOUNT_AMOUNT"`,
      type: `string`
    },
    
    retention_vat: {
      sql: `${CUBE}."RETENTION_VAT"`,
      type: `string`
    },
    
    prepmt_vatdiff_to_deduct: {
      sql: `${CUBE}."PREPMT_VATDIFF_TO_DEDUCT"`,
      type: `string`
    },
    
    return_qty_to_receive: {
      sql: `${CUBE}."RETURN_QTY_TO_RECEIVE"`,
      type: `string`
    },
    
    allow_invoice_disc: {
      sql: `${CUBE}."ALLOW_INVOICE_DISC"`,
      type: `boolean`
    },
    
    type: {
      sql: `${CUBE}."TYPE"`,
      type: `string`
    },
    
    qty_to_invoice_base: {
      sql: `${CUBE}."QTY_TO_INVOICE_BASE"`,
      type: `string`
    },
    
    amount_including_vat: {
      sql: `${CUBE}."AMOUNT_INCLUDING_VAT"`,
      type: `string`
    },
    
    reserved_quantity: {
      sql: `${CUBE}."RESERVED_QUANTITY"`,
      type: `string`
    },
    
    completely_shipped: {
      sql: `${CUBE}."COMPLETELY_SHIPPED"`,
      type: `boolean`
    },
    
    return_receipt_no: {
      sql: `${CUBE}."RETURN_RECEIPT_NO"`,
      type: `string`
    },
    
    prepayment_tax_group_code: {
      sql: `${CUBE}."PREPAYMENT_TAX_GROUP_CODE"`,
      type: `string`
    },
    
    item_reference_unit_of_measure: {
      sql: `${CUBE}."ITEM_REFERENCE_UNIT_OF_MEASURE"`,
      type: `string`
    },
    
    item_reference_type_no: {
      sql: `${CUBE}."ITEM_REFERENCE_TYPE_NO"`,
      type: `string`
    },
    
    ato_whse_outstd_qty_base: {
      sql: `${CUBE}."ATO_WHSE_OUTSTD_QTY_BASE"`,
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
    
    qty_shipped_base: {
      sql: `${CUBE}."QTY_SHIPPED_BASE"`,
      type: `string`
    },
    
    unit_volume: {
      sql: `${CUBE}."UNIT_VOLUME"`,
      type: `string`
    },
    
    line_discount_calculation: {
      sql: `${CUBE}."LINE_DISCOUNT_CALCULATION"`,
      type: `string`
    },
    
    customer_price_group: {
      sql: `${CUBE}."CUSTOMER_PRICE_GROUP"`,
      type: `string`
    },
    
    line_amount: {
      sql: `${CUBE}."LINE_AMOUNT"`,
      type: `string`
    },
    
    prepmt_vatdiff_deducted: {
      sql: `${CUBE}."PREPMT_VATDIFF_DEDUCTED"`,
      type: `string`
    },
    
    purchase_order_no: {
      sql: `${CUBE}."PURCHASE_ORDER_NO"`,
      type: `string`
    },
    
    ret_qty_rcd_not_invd_base: {
      sql: `${CUBE}."RET_QTY_RCD_NOT_INVD_BASE"`,
      type: `string`
    },
    
    prepayment_amount: {
      sql: `${CUBE}."PREPAYMENT_AMOUNT"`,
      type: `string`
    },
    
    system_created_entry: {
      sql: `${CUBE}."SYSTEM_CREATED_ENTRY"`,
      type: `boolean`
    },
    
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    },
    
    prepayment_tax_area_code: {
      sql: `${CUBE}."PREPAYMENT_TAX_AREA_CODE"`,
      type: `string`
    },
    
    qty_per_unit_of_measure: {
      sql: `${CUBE}."QTY_PER_UNIT_OF_MEASURE"`,
      type: `string`
    },
    
    return_qty_received_base: {
      sql: `${CUBE}."RETURN_QTY_RECEIVED_BASE"`,
      type: `string`
    },
    
    prepmt_amount_inv_lcy: {
      sql: `${CUBE}."PREPMT_AMOUNT_INV_LCY"`,
      type: `string`
    },
    
    job_task_no: {
      sql: `${CUBE}."JOB_TASK_NO"`,
      type: `string`
    },
    
    variant_code: {
      sql: `${CUBE}."VARIANT_CODE"`,
      type: `string`
    },
    
    item_reference_type: {
      sql: `${CUBE}."ITEM_REFERENCE_TYPE"`,
      type: `string`
    },
    
    package_tracking_no: {
      sql: `${CUBE}."PACKAGE_TRACKING_NO"`,
      type: `string`
    },
    
    unit_price: {
      sql: `${CUBE}."UNIT_PRICE"`,
      type: `string`
    },
    
    prepayment_line: {
      sql: `${CUBE}."PREPAYMENT_LINE"`,
      type: `boolean`
    },
    
    customer_disc_group: {
      sql: `${CUBE}."CUSTOMER_DISC_GROUP"`,
      type: `string`
    },
    
    outbound_whse_handling_time: {
      sql: `${CUBE}."OUTBOUND_WHSE_HANDLING_TIME"`,
      type: `string`
    },
    
    prepmt_vatcalc_type: {
      sql: `${CUBE}."PREPMT_VATCALC_TYPE"`,
      type: `string`
    },
    
    originally_ordered_var_code: {
      sql: `${CUBE}."ORIGINALLY_ORDERED_VAR_CODE"`,
      type: `string`
    },
    
    shipping_agent_code: {
      sql: `${CUBE}."SHIPPING_AGENT_CODE"`,
      type: `string`
    },
    
    blanket_order_no: {
      sql: `${CUBE}."BLANKET_ORDER_NO"`,
      type: `string`
    },
    
    qty_shipped_not_invd_base: {
      sql: `${CUBE}."QTY_SHIPPED_NOT_INVD_BASE"`,
      type: `string`
    },
    
    vat_bus_posting_group: {
      sql: `${CUBE}."VAT_BUS_POSTING_GROUP"`,
      type: `string`
    },
    
    unit_cost_lcy: {
      sql: `${CUBE}."UNIT_COST_LCY"`,
      type: `string`
    },
    
    deferral_code: {
      sql: `${CUBE}."DEFERRAL_CODE"`,
      type: `string`
    },
    
    posting_group: {
      sql: `${CUBE}."POSTING_GROUP"`,
      type: `string`
    },
    
    prepayment: {
      sql: `${CUBE}."PREPAYMENT"`,
      type: `string`
    },
    
    description: {
      sql: `${CUBE}."DESCRIPTION"`,
      type: `string`
    },
    
    vat_difference: {
      sql: `${CUBE}."VAT_DIFFERENCE"`,
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
    
    quantity_invoiced: {
      sql: `${CUBE}."QUANTITY_INVOICED"`,
      type: `string`
    },
    
    transaction_type: {
      sql: `${CUBE}."TRANSACTION_TYPE"`,
      type: `string`
    },
    
    outstanding_quantity: {
      sql: `${CUBE}."OUTSTANDING_QUANTITY"`,
      type: `string`
    },
    
    gross_weight: {
      sql: `${CUBE}."GROSS_WEIGHT"`,
      type: `string`
    },
    
    prepmt_amt_incl_vat: {
      sql: `${CUBE}."PREPMT_AMT_INCL_VAT"`,
      type: `string`
    },
    
    location_code: {
      sql: `${CUBE}."LOCATION_CODE"`,
      type: `string`
    },
    
    prepmt_amount_inv_incl_vat: {
      sql: `${CUBE}."PREPMT_AMOUNT_INV_INCL_VAT"`,
      type: `string`
    },
    
    profit: {
      sql: `${CUBE}."PROFIT"`,
      type: `string`
    },
    
    no: {
      sql: `${CUBE}."NO"`,
      type: `string`
    },
    
    special_order: {
      sql: `${CUBE}."SPECIAL_ORDER"`,
      type: `boolean`
    },
    
    line_discount_amount: {
      sql: `${CUBE}."LINE_DISCOUNT_AMOUNT"`,
      type: `string`
    },
    
    reserved_qty_base: {
      sql: `${CUBE}."RESERVED_QTY_BASE"`,
      type: `string`
    },
    
    depreciation_book_code: {
      sql: `${CUBE}."DEPRECIATION_BOOK_CODE"`,
      type: `string`
    },
    
    return_qty_to_receive_base: {
      sql: `${CUBE}."RETURN_QTY_TO_RECEIVE_BASE"`,
      type: `string`
    },
    
    ato_whse_outstanding_qty: {
      sql: `${CUBE}."ATO_WHSE_OUTSTANDING_QTY"`,
      type: `string`
    },
    
    qty_invoiced_base: {
      sql: `${CUBE}."QTY_INVOICED_BASE"`,
      type: `string`
    },
    
    vat_base_amount: {
      sql: `${CUBE}."VAT_BASE_AMOUNT"`,
      type: `string`
    },
    
    prepmt_amt_deducted: {
      sql: `${CUBE}."PREPMT_AMT_DEDUCTED"`,
      type: `string`
    },
    
    tax_category: {
      sql: `${CUBE}."TAX_CATEGORY"`,
      type: `string`
    },
    
    qty_to_ship: {
      sql: `${CUBE}."QTY_TO_SHIP"`,
      type: `string`
    },
    
    document_type: {
      sql: `${CUBE}."DOCUMENT_TYPE"`,
      type: `string`
    },
    
    qty_shipped_not_invoiced: {
      sql: `${CUBE}."QTY_SHIPPED_NOT_INVOICED"`,
      type: `string`
    },
    
    allow_item_charge_assignment: {
      sql: `${CUBE}."ALLOW_ITEM_CHARGE_ASSIGNMENT"`,
      type: `boolean`
    },
    
    qty_assigned: {
      sql: `${CUBE}."QTY_ASSIGNED"`,
      type: `string`
    },
    
    selected_alloc_account_no: {
      sql: `${CUBE}."SELECTED_ALLOC_ACCOUNT_NO"`,
      type: `string`
    },
    
    return_qty_rcd_not_invd: {
      sql: `${CUBE}."RETURN_QTY_RCD_NOT_INVD"`,
      type: `string`
    },
    
    prepayment_vatdifference: {
      sql: `${CUBE}."PREPAYMENT_VATDIFFERENCE"`,
      type: `string`
    },
    
    custom_transit_number: {
      sql: `${CUBE}."CUSTOM_TRANSIT_NUMBER"`,
      type: `string`
    },
    
    ic_partner_reference: {
      sql: `${CUBE}."IC_PARTNER_REFERENCE"`,
      type: `string`
    },
    
    return_rcd_not_invd_lcy: {
      sql: `${CUBE}."RETURN_RCD_NOT_INVD_LCY"`,
      type: `string`
    },
    
    unit_cost: {
      sql: `${CUBE}."UNIT_COST"`,
      type: `string`
    },
    
    vat_identifier: {
      sql: `${CUBE}."VAT_IDENTIFIER"`,
      type: `string`
    },
    
    shipping_time: {
      sql: `${CUBE}."SHIPPING_TIME"`,
      type: `string`
    },
    
    quantity_base: {
      sql: `${CUBE}."QUANTITY_BASE"`,
      type: `string`
    },
    
    responsibility_center: {
      sql: `${CUBE}."RESPONSIBILITY_CENTER"`,
      type: `string`
    },
    
    whse_outstanding_qty: {
      sql: `${CUBE}."WHSE_OUTSTANDING_QTY"`,
      type: `string`
    },
    
    ic_item_reference_no: {
      sql: `${CUBE}."IC_ITEM_REFERENCE_NO"`,
      type: `string`
    },
    
    ic_partner_ref_type: {
      sql: `${CUBE}."IC_PARTNER_REF_TYPE"`,
      type: `string`
    },
    
    prepmt_amt_to_deduct: {
      sql: `${CUBE}."PREPMT_AMT_TO_DEDUCT"`,
      type: `string`
    },
    
    qty_rounding_precision_base: {
      sql: `${CUBE}."QTY_ROUNDING_PRECISION_BASE"`,
      type: `string`
    },
    
    price_calculation_method: {
      sql: `${CUBE}."PRICE_CALCULATION_METHOD"`,
      type: `string`
    },
    
    return_qty_received: {
      sql: `${CUBE}."RETURN_QTY_RECEIVED"`,
      type: `string`
    },
    
    subtype: {
      sql: `${CUBE}."SUBTYPE"`,
      type: `string`
    },
    
    qty_rounding_precision: {
      sql: `${CUBE}."QTY_ROUNDING_PRECISION"`,
      type: `string`
    },
    
    prepayment_vat: {
      sql: `${CUBE}."PREPAYMENT_VAT"`,
      type: `string`
    },
    
    unit_of_measure: {
      sql: `${CUBE}."UNIT_OF_MEASURE"`,
      type: `string`
    },
    
    qty_to_asm_to_order_base: {
      sql: `${CUBE}."QTY_TO_ASM_TO_ORDER_BASE"`,
      type: `string`
    },
    
    bom_item_no: {
      sql: `${CUBE}."BOM_ITEM_NO"`,
      type: `string`
    },
    
    pmt_discount_amount: {
      sql: `${CUBE}."PMT_DISCOUNT_AMOUNT"`,
      type: `string`
    },
    
    return_reason_code: {
      sql: `${CUBE}."RETURN_REASON_CODE"`,
      type: `string`
    },
    
    purchasing_code: {
      sql: `${CUBE}."PURCHASING_CODE"`,
      type: `string`
    },
    
    shortcut_dimension_1_code: {
      sql: `${CUBE}."SHORTCUT_DIMENSION_1_CODE"`,
      type: `string`
    },
    
    system_id: {
      sql: `${CUBE}."SYSTEM_ID"`,
      type: `string`,
      primary_key: true
    },
    
    shipped_not_invoiced_lcy: {
      sql: `${CUBE}."SHIPPED_NOT_INVOICED_LCY"`,
      type: `string`
    },
    
    recalculate_invoice_disc: {
      sql: `${CUBE}."RECALCULATE_INVOICE_DISC"`,
      type: `boolean`
    },
    
    allocation_account_no: {
      sql: `${CUBE}."ALLOCATION_ACCOUNT_NO"`,
      type: `string`
    },
    
    document_no: {
      sql: `${CUBE}."DOCUMENT_NO"`,
      type: `string`
    },
    
    currency_code: {
      sql: `${CUBE}."CURRENCY_CODE"`,
      type: `string`
    },
    
    substitution_available: {
      sql: `${CUBE}."SUBSTITUTION_AVAILABLE"`,
      type: `boolean`
    },
    
    shipment_no: {
      sql: `${CUBE}."SHIPMENT_NO"`,
      type: `string`
    },
    
    qty_to_assemble_to_order: {
      sql: `${CUBE}."QTY_TO_ASSEMBLE_TO_ORDER"`,
      type: `string`
    },
    
    copied_from_posted_doc: {
      sql: `${CUBE}."COPIED_FROM_POSTED_DOC"`,
      type: `boolean`
    },
    
    net_weight: {
      sql: `${CUBE}."NET_WEIGHT"`,
      type: `string`
    },
    
    alloc_acc_modified_by_user: {
      sql: `${CUBE}."ALLOC_ACC_MODIFIED_BY_USER"`,
      type: `boolean`
    },
    
    quantity: {
      sql: `${CUBE}."QUANTITY"`,
      type: `string`
    },
    
    shipped_not_invoiced: {
      sql: `${CUBE}."SHIPPED_NOT_INVOICED"`,
      type: `string`
    },
    
    system_created_by: {
      sql: `${CUBE}."SYSTEM_CREATED_BY"`,
      type: `string`
    },
    
    prepayment_vatidentifier: {
      sql: `${CUBE}."PREPAYMENT_VATIDENTIFIER"`,
      type: `string`
    },
    
    prepmt_line_amount: {
      sql: `${CUBE}."PREPMT_LINE_AMOUNT"`,
      type: `string`
    },
    
    prepayment_tax_liable: {
      sql: `${CUBE}."PREPAYMENT_TAX_LIABLE"`,
      type: `boolean`
    },
    
    ic_partner_code: {
      sql: `${CUBE}."IC_PARTNER_CODE"`,
      type: `string`
    },
    
    out_of_stock_substitution: {
      sql: `${CUBE}."OUT_OF_STOCK_SUBSTITUTION"`,
      type: `boolean`
    },
    
    gen_prod_posting_group: {
      sql: `${CUBE}."GEN_PROD_POSTING_GROUP"`,
      type: `string`
    },
    
    vat_prod_posting_group: {
      sql: `${CUBE}."VAT_PROD_POSTING_GROUP"`,
      type: `string`
    },
    
    outstanding_qty_base: {
      sql: `${CUBE}."OUTSTANDING_QTY_BASE"`,
      type: `string`
    },
    
    prepmt_pmt_discount_amount: {
      sql: `${CUBE}."PREPMT_PMT_DISCOUNT_AMOUNT"`,
      type: `string`
    },
    
    tax_liable: {
      sql: `${CUBE}."TAX_LIABLE"`,
      type: `boolean`
    },
    
    units_per_parcel: {
      sql: `${CUBE}."UNITS_PER_PARCEL"`,
      type: `string`
    },
    
    price_description: {
      sql: `${CUBE}."PRICE_DESCRIPTION"`,
      type: `string`
    },
    
    prepmt_vatamount_inv_lcy: {
      sql: `${CUBE}."PREPMT_VATAMOUNT_INV_LCY"`,
      type: `string`
    },
    
    whse_outstanding_qty_base: {
      sql: `${CUBE}."WHSE_OUTSTANDING_QTY_BASE"`,
      type: `string`
    },
    
    amount: {
      sql: `${CUBE}."AMOUNT"`,
      type: `string`
    },
    
    shipped_not_inv_lcyno_vat: {
      sql: `${CUBE}."SHIPPED_NOT_INV_LCYNO_VAT"`,
      type: `string`
    },
    
    drop_shipment: {
      sql: `${CUBE}."DROP_SHIPMENT"`,
      type: `boolean`
    },
    
    duplicate_in_depreciation_book: {
      sql: `${CUBE}."DUPLICATE_IN_DEPRECIATION_BOOK"`,
      type: `string`
    },
    
    line_discount: {
      sql: `${CUBE}."LINE_DISCOUNT"`,
      type: `string`
    },
    
    inv_disc_amount_to_invoice: {
      sql: `${CUBE}."INV_DISC_AMOUNT_TO_INVOICE"`,
      type: `string`
    },
    
    outstanding_amount: {
      sql: `${CUBE}."OUTSTANDING_AMOUNT"`,
      type: `string`
    },
    
    tax_group_code: {
      sql: `${CUBE}."TAX_GROUP_CODE"`,
      type: `string`
    },
    
    depr_until_faposting_date: {
      sql: `${CUBE}."DEPR_UNTIL_FAPOSTING_DATE"`,
      type: `boolean`
    },
    
    planned: {
      sql: `${CUBE}."PLANNED"`,
      type: `boolean`
    },
    
    prepmt_vatbase_amt: {
      sql: `${CUBE}."PREPMT_VATBASE_AMT"`,
      type: `string`
    },
    
    system_created_at: {
      sql: `${CUBE}."SYSTEM_CREATED_AT"`,
      type: `time`
    },
    
    returns_deferral_start_date: {
      sql: `${CUBE}."RETURNS_DEFERRAL_START_DATE"`,
      type: `time`
    },
    
    fa_posting_date: {
      sql: `${CUBE}."FA_POSTING_DATE"`,
      type: `time`
    },
    
    planned_delivery_date: {
      sql: `${CUBE}."PLANNED_DELIVERY_DATE"`,
      type: `time`
    },
    
    posting_date: {
      sql: `${CUBE}."POSTING_DATE"`,
      type: `time`
    },
    
    system_modified_at: {
      sql: `${CUBE}."SYSTEM_MODIFIED_AT"`,
      type: `time`
    },
    
    shipment_date: {
      sql: `${CUBE}."SHIPMENT_DATE"`,
      type: `time`
    },
    
    planned_shipment_date: {
      sql: `${CUBE}."PLANNED_SHIPMENT_DATE"`,
      type: `time`
    },
    
    promised_delivery_date: {
      sql: `${CUBE}."PROMISED_DELIVERY_DATE"`,
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
    },
    
    attached_doc_count: {
      sql: `${CUBE}."ATTACHED_DOC_COUNT"`,
      type: `sum`
    },
    
    attached_lines_count: {
      sql: `${CUBE}."ATTACHED_LINES_COUNT"`,
      type: `sum`
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
