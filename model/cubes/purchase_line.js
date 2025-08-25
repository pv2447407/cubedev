cube(`purchase_line`, {
  sql_table: `"BUSINESS_CENTRAL"."PURCHASE_LINE"`,
  
  data_source: `default`,
  
  joins: {
    company: {
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    qty_to_receive_base: {
      sql: `${CUBE}."QTY_TO_RECEIVE_BASE"`,
      type: `string`
    },
    
    document_no: {
      sql: `${CUBE}."DOCUMENT_NO"`,
      type: `string`
    },
    
    qty_to_receive: {
      sql: `${CUBE}."QTY_TO_RECEIVE"`,
      type: `string`
    },
    
    amt_rcd_not_invoiced: {
      sql: `${CUBE}."AMT_RCD_NOT_INVOICED"`,
      type: `string`
    },
    
    completely_received: {
      sql: `${CUBE}."COMPLETELY_RECEIVED"`,
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
    
    vat_difference: {
      sql: `${CUBE}."VAT_DIFFERENCE"`,
      type: `string`
    },
    
    prepmt_amount_inv_lcy: {
      sql: `${CUBE}."PREPMT_AMOUNT_INV_LCY"`,
      type: `string`
    },
    
    prepmt_line_amount: {
      sql: `${CUBE}."PREPMT_LINE_AMOUNT"`,
      type: `string`
    },
    
    tax_liable: {
      sql: `${CUBE}."TAX_LIABLE"`,
      type: `boolean`
    },
    
    price_calculation_method: {
      sql: `${CUBE}."PRICE_CALCULATION_METHOD"`,
      type: `string`
    },
    
    return_shpd_not_invd_lcy: {
      sql: `${CUBE}."RETURN_SHPD_NOT_INVD_LCY"`,
      type: `string`
    },
    
    gross_weight: {
      sql: `${CUBE}."GROSS_WEIGHT"`,
      type: `string`
    },
    
    routing_no: {
      sql: `${CUBE}."ROUTING_NO"`,
      type: `string`
    },
    
    ic_partner_code: {
      sql: `${CUBE}."IC_PARTNER_CODE"`,
      type: `string`
    },
    
    job_line_discount: {
      sql: `${CUBE}."JOB_LINE_DISCOUNT"`,
      type: `string`
    },
    
    special_order: {
      sql: `${CUBE}."SPECIAL_ORDER"`,
      type: `boolean`
    },
    
    return_qty_to_ship: {
      sql: `${CUBE}."RETURN_QTY_TO_SHIP"`,
      type: `string`
    },
    
    order_no: {
      sql: `${CUBE}."ORDER_NO"`,
      type: `string`
    },
    
    prepayment_amount: {
      sql: `${CUBE}."PREPAYMENT_AMOUNT"`,
      type: `string`
    },
    
    entry_point: {
      sql: `${CUBE}."ENTRY_POINT"`,
      type: `string`
    },
    
    budgeted_fano: {
      sql: `${CUBE}."BUDGETED_FANO"`,
      type: `string`
    },
    
    item_reference_type: {
      sql: `${CUBE}."ITEM_REFERENCE_TYPE"`,
      type: `string`
    },
    
    whse_outstanding_qty_base: {
      sql: `${CUBE}."WHSE_OUTSTANDING_QTY_BASE"`,
      type: `string`
    },
    
    buy_from_vendor_no: {
      sql: `${CUBE}."BUY_FROM_VENDOR_NO"`,
      type: `string`
    },
    
    description: {
      sql: `${CUBE}."DESCRIPTION"`,
      type: `string`
    },
    
    qty_to_invoice: {
      sql: `${CUBE}."QTY_TO_INVOICE"`,
      type: `string`
    },
    
    prepayment_tax_area_code: {
      sql: `${CUBE}."PREPAYMENT_TAX_AREA_CODE"`,
      type: `string`
    },
    
    amount: {
      sql: `${CUBE}."AMOUNT"`,
      type: `string`
    },
    
    amount_including_vat: {
      sql: `${CUBE}."AMOUNT_INCLUDING_VAT"`,
      type: `string`
    },
    
    ic_item_reference_no: {
      sql: `${CUBE}."IC_ITEM_REFERENCE_NO"`,
      type: `string`
    },
    
    prepmt_vatdiff_to_deduct: {
      sql: `${CUBE}."PREPMT_VATDIFF_TO_DEDUCT"`,
      type: `string`
    },
    
    outstanding_amt_ex_vatlcy: {
      sql: `${CUBE}."OUTSTANDING_AMT_EX_VATLCY"`,
      type: `string`
    },
    
    reserved_qty_base: {
      sql: `${CUBE}."RESERVED_QTY_BASE"`,
      type: `string`
    },
    
    qty_to_assign: {
      sql: `${CUBE}."QTY_TO_ASSIGN"`,
      type: `string`
    },
    
    lead_time_calculation: {
      sql: `${CUBE}."LEAD_TIME_CALCULATION"`,
      type: `string`
    },
    
    location_code: {
      sql: `${CUBE}."LOCATION_CODE"`,
      type: `string`
    },
    
    ret_qty_shpd_not_invd_base: {
      sql: `${CUBE}."RET_QTY_SHPD_NOT_INVD_BASE"`,
      type: `string`
    },
    
    job_line_type: {
      sql: `${CUBE}."JOB_LINE_TYPE"`,
      type: `string`
    },
    
    prepayment_vatdifference: {
      sql: `${CUBE}."PREPAYMENT_VATDIFFERENCE"`,
      type: `string`
    },
    
    document_type: {
      sql: `${CUBE}."DOCUMENT_TYPE"`,
      type: `string`
    },
    
    job_no: {
      sql: `${CUBE}."JOB_NO"`,
      type: `string`
    },
    
    job_line_amount: {
      sql: `${CUBE}."JOB_LINE_AMOUNT"`,
      type: `string`
    },
    
    transaction_specification: {
      sql: `${CUBE}."TRANSACTION_SPECIFICATION"`,
      type: `string`
    },
    
    prepmt_non_deduct_vatbase: {
      sql: `${CUBE}."PREPMT_NON_DEDUCT_VATBASE"`,
      type: `string`
    },
    
    prepayment_vat: {
      sql: `${CUBE}."PREPAYMENT_VAT"`,
      type: `string`
    },
    
    prod_order_no: {
      sql: `${CUBE}."PROD_ORDER_NO"`,
      type: `string`
    },
    
    alloc_acc_modified_by_user: {
      sql: `${CUBE}."ALLOC_ACC_MODIFIED_BY_USER"`,
      type: `boolean`
    },
    
    unit_price_lcy: {
      sql: `${CUBE}."UNIT_PRICE_LCY"`,
      type: `string`
    },
    
    job_currency_factor: {
      sql: `${CUBE}."JOB_CURRENCY_FACTOR"`,
      type: `string`
    },
    
    allow_item_charge_assignment: {
      sql: `${CUBE}."ALLOW_ITEM_CHARGE_ASSIGNMENT"`,
      type: `boolean`
    },
    
    outstanding_amount_lcy: {
      sql: `${CUBE}."OUTSTANDING_AMOUNT_LCY"`,
      type: `string`
    },
    
    area: {
      sql: `${CUBE}."AREA"`,
      type: `string`
    },
    
    system_created_entry: {
      sql: `${CUBE}."SYSTEM_CREATED_ENTRY"`,
      type: `boolean`
    },
    
    posting_group: {
      sql: `${CUBE}."POSTING_GROUP"`,
      type: `string`
    },
    
    no: {
      sql: `${CUBE}."NO"`,
      type: `string`
    },
    
    non_deductible_vatbase: {
      sql: `${CUBE}."NON_DEDUCTIBLE_VATBASE"`,
      type: `string`
    },
    
    recalculate_invoice_disc: {
      sql: `${CUBE}."RECALCULATE_INVOICE_DISC"`,
      type: `boolean`
    },
    
    qty_rcd_not_invoiced_base: {
      sql: `${CUBE}."QTY_RCD_NOT_INVOICED_BASE"`,
      type: `string`
    },
    
    copied_from_posted_doc: {
      sql: `${CUBE}."COPIED_FROM_POSTED_DOC"`,
      type: `boolean`
    },
    
    job_unit_price: {
      sql: `${CUBE}."JOB_UNIT_PRICE"`,
      type: `string`
    },
    
    allow_invoice_disc: {
      sql: `${CUBE}."ALLOW_INVOICE_DISC"`,
      type: `boolean`
    },
    
    prepayment_vatidentifier: {
      sql: `${CUBE}."PREPAYMENT_VATIDENTIFIER"`,
      type: `string`
    },
    
    job_total_price_lcy: {
      sql: `${CUBE}."JOB_TOTAL_PRICE_LCY"`,
      type: `string`
    },
    
    use_tax: {
      sql: `${CUBE}."USE_TAX"`,
      type: `boolean`
    },
    
    duplicate_in_depreciation_book: {
      sql: `${CUBE}."DUPLICATE_IN_DEPRECIATION_BOOK"`,
      type: `string`
    },
    
    prepmt_vatbase_amt: {
      sql: `${CUBE}."PREPMT_VATBASE_AMT"`,
      type: `string`
    },
    
    return_reason_code: {
      sql: `${CUBE}."RETURN_REASON_CODE"`,
      type: `string`
    },
    
    operation_no: {
      sql: `${CUBE}."OPERATION_NO"`,
      type: `string`
    },
    
    return_qty_shipped_base: {
      sql: `${CUBE}."RETURN_QTY_SHIPPED_BASE"`,
      type: `string`
    },
    
    sales_order_no: {
      sql: `${CUBE}."SALES_ORDER_NO"`,
      type: `string`
    },
    
    over_receipt_code: {
      sql: `${CUBE}."OVER_RECEIPT_CODE"`,
      type: `string`
    },
    
    non_deductible_vat: {
      sql: `${CUBE}."NON_DEDUCTIBLE_VAT"`,
      type: `string`
    },
    
    job_line_discount_amount: {
      sql: `${CUBE}."JOB_LINE_DISCOUNT_AMOUNT"`,
      type: `string`
    },
    
    quantity_received: {
      sql: `${CUBE}."QUANTITY_RECEIVED"`,
      type: `string`
    },
    
    qty_rcd_not_invoiced: {
      sql: `${CUBE}."QTY_RCD_NOT_INVOICED"`,
      type: `string`
    },
    
    system_modified_by: {
      sql: `${CUBE}."SYSTEM_MODIFIED_BY"`,
      type: `string`
    },
    
    depreciation_book_code: {
      sql: `${CUBE}."DEPRECIATION_BOOK_CODE"`,
      type: `string`
    },
    
    over_receipt_quantity: {
      sql: `${CUBE}."OVER_RECEIPT_QUANTITY"`,
      type: `string`
    },
    
    responsibility_center: {
      sql: `${CUBE}."RESPONSIBILITY_CENTER"`,
      type: `string`
    },
    
    vat_bus_posting_group: {
      sql: `${CUBE}."VAT_BUS_POSTING_GROUP"`,
      type: `string`
    },
    
    tax_area_code: {
      sql: `${CUBE}."TAX_AREA_CODE"`,
      type: `string`
    },
    
    safety_lead_time: {
      sql: `${CUBE}."SAFETY_LEAD_TIME"`,
      type: `string`
    },
    
    item_reference_no: {
      sql: `${CUBE}."ITEM_REFERENCE_NO"`,
      type: `string`
    },
    
    prepmt_vatdiff_deducted: {
      sql: `${CUBE}."PREPMT_VATDIFF_DEDUCTED"`,
      type: `string`
    },
    
    line_discount: {
      sql: `${CUBE}."LINE_DISCOUNT"`,
      type: `string`
    },
    
    special_order_sales_no: {
      sql: `${CUBE}."SPECIAL_ORDER_SALES_NO"`,
      type: `string`
    },
    
    unit_cost: {
      sql: `${CUBE}."UNIT_COST"`,
      type: `string`
    },
    
    outstanding_qty_base: {
      sql: `${CUBE}."OUTSTANDING_QTY_BASE"`,
      type: `string`
    },
    
    prepmt_vatcalc_type: {
      sql: `${CUBE}."PREPMT_VATCALC_TYPE"`,
      type: `string`
    },
    
    work_center_no: {
      sql: `${CUBE}."WORK_CENTER_NO"`,
      type: `string`
    },
    
    vat_base_amount: {
      sql: `${CUBE}."VAT_BASE_AMOUNT"`,
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
    
    item_category_code: {
      sql: `${CUBE}."ITEM_CATEGORY_CODE"`,
      type: `string`
    },
    
    prepmt_amt_inv: {
      sql: `${CUBE}."PREPMT_AMT_INV"`,
      type: `string`
    },
    
    net_weight: {
      sql: `${CUBE}."NET_WEIGHT"`,
      type: `string`
    },
    
    shortcut_dimension_2_code: {
      sql: `${CUBE}."SHORTCUT_DIMENSION_2_CODE"`,
      type: `string`
    },
    
    gen_prod_posting_group: {
      sql: `${CUBE}."GEN_PROD_POSTING_GROUP"`,
      type: `string`
    },
    
    outstanding_quantity: {
      sql: `${CUBE}."OUTSTANDING_QUANTITY"`,
      type: `string`
    },
    
    nonstock: {
      sql: `${CUBE}."NONSTOCK"`,
      type: `boolean`
    },
    
    inv_discount_amount: {
      sql: `${CUBE}."INV_DISCOUNT_AMOUNT"`,
      type: `string`
    },
    
    receipt_no: {
      sql: `${CUBE}."RECEIPT_NO"`,
      type: `string`
    },
    
    return_shpd_not_invd: {
      sql: `${CUBE}."RETURN_SHPD_NOT_INVD"`,
      type: `string`
    },
    
    job_currency_code: {
      sql: `${CUBE}."JOB_CURRENCY_CODE"`,
      type: `string`
    },
    
    system_id: {
      sql: `${CUBE}."SYSTEM_ID"`,
      type: `string`,
      primary_key: true
    },
    
    prepayment_tax_liable: {
      sql: `${CUBE}."PREPAYMENT_TAX_LIABLE"`,
      type: `boolean`
    },
    
    ic_partner_reference: {
      sql: `${CUBE}."IC_PARTNER_REFERENCE"`,
      type: `string`
    },
    
    insurance_no: {
      sql: `${CUBE}."INSURANCE_NO"`,
      type: `string`
    },
    
    vat_prod_posting_group: {
      sql: `${CUBE}."VAT_PROD_POSTING_GROUP"`,
      type: `string`
    },
    
    job_total_price: {
      sql: `${CUBE}."JOB_TOTAL_PRICE"`,
      type: `string`
    },
    
    prepmt_vatamount_inv_lcy: {
      sql: `${CUBE}."PREPMT_VATAMOUNT_INV_LCY"`,
      type: `string`
    },
    
    mps_order: {
      sql: `${CUBE}."MPS_ORDER"`,
      type: `boolean`
    },
    
    transport_method: {
      sql: `${CUBE}."TRANSPORT_METHOD"`,
      type: `string`
    },
    
    return_qty_to_ship_base: {
      sql: `${CUBE}."RETURN_QTY_TO_SHIP_BASE"`,
      type: `string`
    },
    
    unit_of_measure_code: {
      sql: `${CUBE}."UNIT_OF_MEASURE_CODE"`,
      type: `string`
    },
    
    item_reference_type_no: {
      sql: `${CUBE}."ITEM_REFERENCE_TYPE_NO"`,
      type: `string`
    },
    
    outstanding_amount: {
      sql: `${CUBE}."OUTSTANDING_AMOUNT"`,
      type: `string`
    },
    
    profit: {
      sql: `${CUBE}."PROFIT"`,
      type: `string`
    },
    
    unit_volume: {
      sql: `${CUBE}."UNIT_VOLUME"`,
      type: `string`
    },
    
    ic_partner_ref_type: {
      sql: `${CUBE}."IC_PARTNER_REF_TYPE"`,
      type: `string`
    },
    
    qty_rounding_precision: {
      sql: `${CUBE}."QTY_ROUNDING_PRECISION"`,
      type: `string`
    },
    
    depr_until_faposting_date: {
      sql: `${CUBE}."DEPR_UNTIL_FAPOSTING_DATE"`,
      type: `boolean`
    },
    
    tax_group_code: {
      sql: `${CUBE}."TAX_GROUP_CODE"`,
      type: `string`
    },
    
    system_created_by: {
      sql: `${CUBE}."SYSTEM_CREATED_BY"`,
      type: `string`
    },
    
    quantity_base: {
      sql: `${CUBE}."QUANTITY_BASE"`,
      type: `string`
    },
    
    unit_of_measure: {
      sql: `${CUBE}."UNIT_OF_MEASURE"`,
      type: `string`
    },
    
    line_discount_amount: {
      sql: `${CUBE}."LINE_DISCOUNT_AMOUNT"`,
      type: `string`
    },
    
    job_task_no: {
      sql: `${CUBE}."JOB_TASK_NO"`,
      type: `string`
    },
    
    qty_invoiced_base: {
      sql: `${CUBE}."QTY_INVOICED_BASE"`,
      type: `string`
    },
    
    prepmt_non_deduct_vatamount: {
      sql: `${CUBE}."PREPMT_NON_DEDUCT_VATAMOUNT"`,
      type: `string`
    },
    
    vendor_item_no: {
      sql: `${CUBE}."VENDOR_ITEM_NO"`,
      type: `string`
    },
    
    depr_acquisition_cost: {
      sql: `${CUBE}."DEPR_ACQUISITION_COST"`,
      type: `boolean`
    },
    
    salvage_value: {
      sql: `${CUBE}."SALVAGE_VALUE"`,
      type: `string`
    },
    
    item_reference_unit_of_measure: {
      sql: `${CUBE}."ITEM_REFERENCE_UNIT_OF_MEASURE"`,
      type: `string`
    },
    
    tax_to_be_expensed: {
      sql: `${CUBE}."TAX_TO_BE_EXPENSED"`,
      type: `string`
    },
    
    qty_per_unit_of_measure: {
      sql: `${CUBE}."QTY_PER_UNIT_OF_MEASURE"`,
      type: `string`
    },
    
    drop_shipment: {
      sql: `${CUBE}."DROP_SHIPMENT"`,
      type: `boolean`
    },
    
    amt_rcd_not_invoiced_lcy: {
      sql: `${CUBE}."AMT_RCD_NOT_INVOICED_LCY"`,
      type: `string`
    },
    
    selected_alloc_account_no: {
      sql: `${CUBE}."SELECTED_ALLOC_ACCOUNT_NO"`,
      type: `string`
    },
    
    job_remaining_qty: {
      sql: `${CUBE}."JOB_REMAINING_QTY"`,
      type: `string`
    },
    
    vat_identifier: {
      sql: `${CUBE}."VAT_IDENTIFIER"`,
      type: `string`
    },
    
    job_line_disc_amount_lcy: {
      sql: `${CUBE}."JOB_LINE_DISC_AMOUNT_LCY"`,
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
    
    subtype: {
      sql: `${CUBE}."SUBTYPE"`,
      type: `string`
    },
    
    prepmt_amount_inv_incl_vat: {
      sql: `${CUBE}."PREPMT_AMOUNT_INV_INCL_VAT"`,
      type: `string`
    },
    
    currency_code: {
      sql: `${CUBE}."CURRENCY_CODE"`,
      type: `string`
    },
    
    a_rcd_not_inv_ex_vatlcy: {
      sql: `${CUBE}."A_RCD_NOT_INV_EX_VATLCY"`,
      type: `string`
    },
    
    qty_assigned: {
      sql: `${CUBE}."QTY_ASSIGNED"`,
      type: `string`
    },
    
    pmt_discount_amount: {
      sql: `${CUBE}."PMT_DISCOUNT_AMOUNT"`,
      type: `string`
    },
    
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    },
    
    prepayment_line: {
      sql: `${CUBE}."PREPAYMENT_LINE"`,
      type: `boolean`
    },
    
    prepmt_amt_deducted: {
      sql: `${CUBE}."PREPMT_AMT_DEDUCTED"`,
      type: `string`
    },
    
    overhead_rate: {
      sql: `${CUBE}."OVERHEAD_RATE"`,
      type: `string`
    },
    
    inbound_whse_handling_time: {
      sql: `${CUBE}."INBOUND_WHSE_HANDLING_TIME"`,
      type: `string`
    },
    
    over_receipt_approval_status: {
      sql: `${CUBE}."OVER_RECEIPT_APPROVAL_STATUS"`,
      type: `string`
    },
    
    qty_rounding_precision_base: {
      sql: `${CUBE}."QTY_ROUNDING_PRECISION_BASE"`,
      type: `string`
    },
    
    job_remaining_qty_base: {
      sql: `${CUBE}."JOB_REMAINING_QTY_BASE"`,
      type: `string`
    },
    
    indirect_cost: {
      sql: `${CUBE}."INDIRECT_COST"`,
      type: `string`
    },
    
    return_qty_shipped_not_invd: {
      sql: `${CUBE}."RETURN_QTY_SHIPPED_NOT_INVD"`,
      type: `string`
    },
    
    shortcut_dimension_1_code: {
      sql: `${CUBE}."SHORTCUT_DIMENSION_1_CODE"`,
      type: `string`
    },
    
    allocation_account_no: {
      sql: `${CUBE}."ALLOCATION_ACCOUNT_NO"`,
      type: `string`
    },
    
    prepmt_pmt_discount_amount: {
      sql: `${CUBE}."PREPMT_PMT_DISCOUNT_AMOUNT"`,
      type: `string`
    },
    
    description_2: {
      sql: `${CUBE}."DESCRIPTION_2"`,
      type: `string`
    },
    
    reserved_quantity: {
      sql: `${CUBE}."RESERVED_QUANTITY"`,
      type: `string`
    },
    
    use_duplication_list: {
      sql: `${CUBE}."USE_DUPLICATION_LIST"`,
      type: `boolean`
    },
    
    planning_flexibility: {
      sql: `${CUBE}."PLANNING_FLEXIBILITY"`,
      type: `string`
    },
    
    fa_posting_type: {
      sql: `${CUBE}."FA_POSTING_TYPE"`,
      type: `string`
    },
    
    prepayment: {
      sql: `${CUBE}."PREPAYMENT"`,
      type: `string`
    },
    
    line_amount: {
      sql: `${CUBE}."LINE_AMOUNT"`,
      type: `string`
    },
    
    unit_cost_lcy: {
      sql: `${CUBE}."UNIT_COST_LCY"`,
      type: `string`
    },
    
    item_charge_qty_to_handle: {
      sql: `${CUBE}."ITEM_CHARGE_QTY_TO_HANDLE"`,
      type: `string`
    },
    
    gen_bus_posting_group: {
      sql: `${CUBE}."GEN_BUS_POSTING_GROUP"`,
      type: `string`
    },
    
    job_line_amount_lcy: {
      sql: `${CUBE}."JOB_LINE_AMOUNT_LCY"`,
      type: `string`
    },
    
    transaction_type: {
      sql: `${CUBE}."TRANSACTION_TYPE"`,
      type: `string`
    },
    
    qty_to_invoice_base: {
      sql: `${CUBE}."QTY_TO_INVOICE_BASE"`,
      type: `string`
    },
    
    type: {
      sql: `${CUBE}."TYPE"`,
      type: `string`
    },
    
    return_shipment_no: {
      sql: `${CUBE}."RETURN_SHIPMENT_NO"`,
      type: `string`
    },
    
    prepmt_amt_to_deduct: {
      sql: `${CUBE}."PREPMT_AMT_TO_DEDUCT"`,
      type: `string`
    },
    
    direct_unit_cost: {
      sql: `${CUBE}."DIRECT_UNIT_COST"`,
      type: `string`
    },
    
    provincial_tax_area_code: {
      sql: `${CUBE}."PROVINCIAL_TAX_AREA_CODE"`,
      type: `string`
    },
    
    prepmt_amt_incl_vat: {
      sql: `${CUBE}."PREPMT_AMT_INCL_VAT"`,
      type: `string`
    },
    
    non_deductible_vatamount: {
      sql: `${CUBE}."NON_DEDUCTIBLE_VATAMOUNT"`,
      type: `string`
    },
    
    job_unit_price_lcy: {
      sql: `${CUBE}."JOB_UNIT_PRICE_LCY"`,
      type: `string`
    },
    
    prepayment_tax_group_code: {
      sql: `${CUBE}."PREPAYMENT_TAX_GROUP_CODE"`,
      type: `string`
    },
    
    quantity_invoiced: {
      sql: `${CUBE}."QUANTITY_INVOICED"`,
      type: `string`
    },
    
    finished: {
      sql: `${CUBE}."FINISHED"`,
      type: `boolean`
    },
    
    vat: {
      sql: `${CUBE}."VAT"`,
      type: `string`
    },
    
    units_per_parcel: {
      sql: `${CUBE}."UNITS_PER_PARCEL"`,
      type: `string`
    },
    
    gst_hst: {
      sql: `${CUBE}."GST_HST"`,
      type: `string`
    },
    
    qty_received_base: {
      sql: `${CUBE}."QTY_RECEIVED_BASE"`,
      type: `string`
    },
    
    blanket_order_no: {
      sql: `${CUBE}."BLANKET_ORDER_NO"`,
      type: `string`
    },
    
    inv_disc_amount_to_invoice: {
      sql: `${CUBE}."INV_DISC_AMOUNT_TO_INVOICE"`,
      type: `string`
    },
    
    maintenance_code: {
      sql: `${CUBE}."MAINTENANCE_CODE"`,
      type: `string`
    },
    
    variant_code: {
      sql: `${CUBE}."VARIANT_CODE"`,
      type: `string`
    },
    
    return_qty_shipped: {
      sql: `${CUBE}."RETURN_QTY_SHIPPED"`,
      type: `string`
    },
    
    deferral_code: {
      sql: `${CUBE}."DEFERRAL_CODE"`,
      type: `string`
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
    
    requested_receipt_date: {
      sql: `${CUBE}."REQUESTED_RECEIPT_DATE"`,
      type: `time`
    },
    
    planned_receipt_date: {
      sql: `${CUBE}."PLANNED_RECEIPT_DATE"`,
      type: `time`
    },
    
    returns_deferral_start_date: {
      sql: `${CUBE}."RETURNS_DEFERRAL_START_DATE"`,
      type: `time`
    },
    
    system_modified_at: {
      sql: `${CUBE}."SYSTEM_MODIFIED_AT"`,
      type: `time`
    },
    
    order_date: {
      sql: `${CUBE}."ORDER_DATE"`,
      type: `time`
    },
    
    expected_receipt_date: {
      sql: `${CUBE}."EXPECTED_RECEIPT_DATE"`,
      type: `time`
    }
  },
  
  measures: {
    count: {
      type: `count`
    },
    
    attached_lines_count: {
      sql: `${CUBE}."ATTACHED_LINES_COUNT"`,
      type: `sum`
    },
    
    attached_doc_count: {
      sql: `${CUBE}."ATTACHED_DOC_COUNT"`,
      type: `sum`
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
