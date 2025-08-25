cube(`item`, {
  sql_table: `"BUSINESS_CENTRAL"."ITEM"`,
  
  data_source: `default`,
  
  joins: {
    company: {
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    gen_prod_posting_group: {
      sql: `${CUBE}."GEN_PROD_POSTING_GROUP"`,
      type: `string`
    },
    
    planning_receipt_qty: {
      sql: `${CUBE}."PLANNING_RECEIPT_QTY"`,
      type: `string`
    },
    
    prod_forecast_quantity_base: {
      sql: `${CUBE}."PROD_FORECAST_QUANTITY_BASE"`,
      type: `string`
    },
    
    safety_lead_time: {
      sql: `${CUBE}."SAFETY_LEAD_TIME"`,
      type: `string`
    },
    
    tax_group_code: {
      sql: `${CUBE}."TAX_GROUP_CODE"`,
      type: `string`
    },
    
    application_wksh_user_id: {
      sql: `${CUBE}."APPLICATION_WKSH_USER_ID"`,
      type: `string`
    },
    
    reordering_policy: {
      sql: `${CUBE}."REORDERING_POLICY"`,
      type: `string`
    },
    
    fp_order_receipt_qty: {
      sql: `${CUBE}."FP_ORDER_RECEIPT_QTY"`,
      type: `string`
    },
    
    special_equipment_code: {
      sql: `${CUBE}."SPECIAL_EQUIPMENT_CODE"`,
      type: `string`
    },
    
    gross_weight: {
      sql: `${CUBE}."GROSS_WEIGHT"`,
      type: `string`
    },
    
    unit_cost: {
      sql: `${CUBE}."UNIT_COST"`,
      type: `string`
    },
    
    planning_transfer_ship_qty: {
      sql: `${CUBE}."PLANNING_TRANSFER_SHIP_QTY"`,
      type: `string`
    },
    
    serial_nos: {
      sql: `${CUBE}."SERIAL_NOS"`,
      type: `string`
    },
    
    qty_in_transit: {
      sql: `${CUBE}."QTY_IN_TRANSIT"`,
      type: `string`
    },
    
    planning_worksheet_qty: {
      sql: `${CUBE}."PLANNING_WORKSHEET_QTY"`,
      type: `string`
    },
    
    qty_on_prod_order: {
      sql: `${CUBE}."QTY_ON_PROD_ORDER"`,
      type: `string`
    },
    
    qty_on_assembly_order: {
      sql: `${CUBE}."QTY_ON_ASSEMBLY_ORDER"`,
      type: `string`
    },
    
    stockkeeping_unit_exists: {
      sql: `${CUBE}."STOCKKEEPING_UNIT_EXISTS"`,
      type: `boolean`
    },
    
    assembly_bom: {
      sql: `${CUBE}."ASSEMBLY_BOM"`,
      type: `boolean`
    },
    
    item_tracking_code: {
      sql: `${CUBE}."ITEM_TRACKING_CODE"`,
      type: `string`
    },
    
    item_disc_group: {
      sql: `${CUBE}."ITEM_DISC_GROUP"`,
      type: `string`
    },
    
    sales_qty: {
      sql: `${CUBE}."SALES_QTY"`,
      type: `string`
    },
    
    country_region_of_origin_code: {
      sql: `${CUBE}."COUNTRY_REGION_OF_ORIGIN_CODE"`,
      type: `string`
    },
    
    net_change: {
      sql: `${CUBE}."NET_CHANGE"`,
      type: `string`
    },
    
    country_region_purchased_code: {
      sql: `${CUBE}."COUNTRY_REGION_PURCHASED_CODE"`,
      type: `string`
    },
    
    qty_on_asm_component: {
      sql: `${CUBE}."QTY_ON_ASM_COMPONENT"`,
      type: `string`
    },
    
    comment: {
      sql: `${CUBE}."COMMENT"`,
      type: `boolean`
    },
    
    lot_accumulation_period: {
      sql: `${CUBE}."LOT_ACCUMULATION_PERIOD"`,
      type: `string`
    },
    
    cogs_lcy: {
      sql: `${CUBE}."COGS_LCY"`,
      type: `string`
    },
    
    rolled_up_capacity_cost: {
      sql: `${CUBE}."ROLLED_UP_CAPACITY_COST"`,
      type: `string`
    },
    
    profit: {
      sql: `${CUBE}."PROFIT"`,
      type: `string`
    },
    
    service_item_group: {
      sql: `${CUBE}."SERVICE_ITEM_GROUP"`,
      type: `string`
    },
    
    trans_ord_shipment_qty: {
      sql: `${CUBE}."TRANS_ORD_SHIPMENT_QTY"`,
      type: `string`
    },
    
    purch_unit_of_measure: {
      sql: `${CUBE}."PURCH_UNIT_OF_MEASURE"`,
      type: `string`
    },
    
    unit_group_exists: {
      sql: `${CUBE}."UNIT_GROUP_EXISTS"`,
      type: `boolean`
    },
    
    budgeted_amount: {
      sql: `${CUBE}."BUDGETED_AMOUNT"`,
      type: `string`
    },
    
    net_weight: {
      sql: `${CUBE}."NET_WEIGHT"`,
      type: `string`
    },
    
    routing_no: {
      sql: `${CUBE}."ROUTING_NO"`,
      type: `string`
    },
    
    purch_req_receipt_qty: {
      sql: `${CUBE}."PURCH_REQ_RECEIPT_QTY"`,
      type: `string`
    },
    
    location_filter: {
      sql: `${CUBE}."LOCATION_FILTER"`,
      type: `string`
    },
    
    substitutes_exist: {
      sql: `${CUBE}."SUBSTITUTES_EXIST"`,
      type: `boolean`
    },
    
    rounding_precision: {
      sql: `${CUBE}."ROUNDING_PRECISION"`,
      type: `string`
    },
    
    planning_issues_qty: {
      sql: `${CUBE}."PLANNING_ISSUES_QTY"`,
      type: `string`
    },
    
    single_level_subcontrd_cost: {
      sql: `${CUBE}."SINGLE_LEVEL_SUBCONTRD_COST"`,
      type: `string`
    },
    
    order_tracking_policy: {
      sql: `${CUBE}."ORDER_TRACKING_POLICY"`,
      type: `string`
    },
    
    res_qty_on_service_orders: {
      sql: `${CUBE}."RES_QTY_ON_SERVICE_ORDERS"`,
      type: `string`
    },
    
    qty_on_service_order: {
      sql: `${CUBE}."QTY_ON_SERVICE_ORDER"`,
      type: `string`
    },
    
    net_invoiced_qty: {
      sql: `${CUBE}."NET_INVOICED_QTY"`,
      type: `string`
    },
    
    automatic_ext_texts: {
      sql: `${CUBE}."AUTOMATIC_EXT_TEXTS"`,
      type: `boolean`
    },
    
    use_cross_docking: {
      sql: `${CUBE}."USE_CROSS_DOCKING"`,
      type: `boolean`
    },
    
    planned_order_release_qty: {
      sql: `${CUBE}."PLANNED_ORDER_RELEASE_QTY"`,
      type: `string`
    },
    
    alternative_item_no: {
      sql: `${CUBE}."ALTERNATIVE_ITEM_NO"`,
      type: `string`
    },
    
    identifier_code: {
      sql: `${CUBE}."IDENTIFIER_CODE"`,
      type: `string`
    },
    
    manufacturing_policy: {
      sql: `${CUBE}."MANUFACTURING_POLICY"`,
      type: `string`
    },
    
    rescheduling_period: {
      sql: `${CUBE}."RESCHEDULING_PERIOD"`,
      type: `string`
    },
    
    warehouse_class_code: {
      sql: `${CUBE}."WAREHOUSE_CLASS_CODE"`,
      type: `string`
    },
    
    inventory_posting_group: {
      sql: `${CUBE}."INVENTORY_POSTING_GROUP"`,
      type: `string`
    },
    
    purchases_lcy: {
      sql: `${CUBE}."PURCHASES_LCY"`,
      type: `string`
    },
    
    qty_picked: {
      sql: `${CUBE}."QTY_PICKED"`,
      type: `string`
    },
    
    price_profit_calculation: {
      sql: `${CUBE}."PRICE_PROFIT_CALCULATION"`,
      type: `string`
    },
    
    system_modified_by: {
      sql: `${CUBE}."SYSTEM_MODIFIED_BY"`,
      type: `string`
    },
    
    single_level_capacity_cost: {
      sql: `${CUBE}."SINGLE_LEVEL_CAPACITY_COST"`,
      type: `string`
    },
    
    consumptions_qty: {
      sql: `${CUBE}."CONSUMPTIONS_QTY"`,
      type: `string`
    },
    
    drop_shipment_filter: {
      sql: `${CUBE}."DROP_SHIPMENT_FILTER"`,
      type: `string`
    },
    
    global_dimension_1_filter: {
      sql: `${CUBE}."GLOBAL_DIMENSION_1_FILTER"`,
      type: `string`
    },
    
    single_level_mfg_ovhd_cost: {
      sql: `${CUBE}."SINGLE_LEVEL_MFG_OVHD_COST"`,
      type: `string`
    },
    
    lot_size: {
      sql: `${CUBE}."LOT_SIZE"`,
      type: `string`
    },
    
    duty_due: {
      sql: `${CUBE}."DUTY_DUE"`,
      type: `string`
    },
    
    created_from_nonstock_item: {
      sql: `${CUBE}."CREATED_FROM_NONSTOCK_ITEM"`,
      type: `boolean`
    },
    
    reorder_point: {
      sql: `${CUBE}."REORDER_POINT"`,
      type: `string`
    },
    
    include_inventory: {
      sql: `${CUBE}."INCLUDE_INVENTORY"`,
      type: `boolean`
    },
    
    qty_on_sales_order: {
      sql: `${CUBE}."QTY_ON_SALES_ORDER"`,
      type: `string`
    },
    
    sat_hazardous_material: {
      sql: `${CUBE}."SAT_HAZARDOUS_MATERIAL"`,
      type: `string`
    },
    
    rel_order_receipt_qty: {
      sql: `${CUBE}."REL_ORDER_RECEIPT_QTY"`,
      type: `string`
    },
    
    sales_unit_of_measure: {
      sql: `${CUBE}."SALES_UNIT_OF_MEASURE"`,
      type: `string`
    },
    
    description: {
      sql: `${CUBE}."DESCRIPTION"`,
      type: `string`
    },
    
    dampener_period: {
      sql: `${CUBE}."DAMPENER_PERIOD"`,
      type: `string`
    },
    
    minimum_order_quantity: {
      sql: `${CUBE}."MINIMUM_ORDER_QUANTITY"`,
      type: `string`
    },
    
    global_dimension_2_filter: {
      sql: `${CUBE}."GLOBAL_DIMENSION_2_FILTER"`,
      type: `string`
    },
    
    inventory: {
      sql: `${CUBE}."INVENTORY"`,
      type: `string`
    },
    
    res_qty_on_assembly_order: {
      sql: `${CUBE}."RES_QTY_ON_ASSEMBLY_ORDER"`,
      type: `string`
    },
    
    budget_quantity: {
      sql: `${CUBE}."BUDGET_QUANTITY"`,
      type: `string`
    },
    
    global_dimension_2_code: {
      sql: `${CUBE}."GLOBAL_DIMENSION_2_CODE"`,
      type: `string`
    },
    
    costing_method: {
      sql: `${CUBE}."COSTING_METHOD"`,
      type: `string`
    },
    
    component_forecast: {
      sql: `${CUBE}."COMPONENT_FORECAST"`,
      type: `string`
    },
    
    global_dimension_1_code: {
      sql: `${CUBE}."GLOBAL_DIMENSION_1_CODE"`,
      type: `string`
    },
    
    qty_on_purch_return: {
      sql: `${CUBE}."QTY_ON_PURCH_RETURN"`,
      type: `string`
    },
    
    duty_code: {
      sql: `${CUBE}."DUTY_CODE"`,
      type: `string`
    },
    
    purchasing_code: {
      sql: `${CUBE}."PURCHASING_CODE"`,
      type: `string`
    },
    
    base_unit_of_measure: {
      sql: `${CUBE}."BASE_UNIT_OF_MEASURE"`,
      type: `string`
    },
    
    picture: {
      sql: `${CUBE}."PICTURE"`,
      type: `string`
    },
    
    maximum_inventory: {
      sql: `${CUBE}."MAXIMUM_INVENTORY"`,
      type: `string`
    },
    
    blocked: {
      sql: `${CUBE}."BLOCKED"`,
      type: `boolean`
    },
    
    rel_scheduled_need_qty: {
      sql: `${CUBE}."REL_SCHEDULED_NEED_QTY"`,
      type: `string`
    },
    
    freight_type: {
      sql: `${CUBE}."FREIGHT_TYPE"`,
      type: `string`
    },
    
    negative_adjmt_lcy: {
      sql: `${CUBE}."NEGATIVE_ADJMT_LCY"`,
      type: `string`
    },
    
    inventory_value_zero: {
      sql: `${CUBE}."INVENTORY_VALUE_ZERO"`,
      type: `boolean`
    },
    
    price_includes_vat: {
      sql: `${CUBE}."PRICE_INCLUDES_VAT"`,
      type: `boolean`
    },
    
    dampener_quantity: {
      sql: `${CUBE}."DAMPENER_QUANTITY"`,
      type: `string`
    },
    
    transferred_qty: {
      sql: `${CUBE}."TRANSFERRED_QTY"`,
      type: `string`
    },
    
    scrap: {
      sql: `${CUBE}."SCRAP"`,
      type: `string`
    },
    
    rolled_up_mfg_ovhd_cost: {
      sql: `${CUBE}."ROLLED_UP_MFG_OVHD_COST"`,
      type: `string`
    },
    
    single_level_cap_ovhd_cost: {
      sql: `${CUBE}."SINGLE_LEVEL_CAP_OVHD_COST"`,
      type: `string`
    },
    
    reserved_qty_on_prod_order: {
      sql: `${CUBE}."RESERVED_QTY_ON_PROD_ORDER"`,
      type: `string`
    },
    
    positive_adjmt_qty: {
      sql: `${CUBE}."POSITIVE_ADJMT_QTY"`,
      type: `string`
    },
    
    common_item_no: {
      sql: `${CUBE}."COMMON_ITEM_NO"`,
      type: `string`
    },
    
    gen_prod_posting_group_id: {
      sql: `${CUBE}."GEN_PROD_POSTING_GROUP_ID"`,
      type: `string`
    },
    
    res_qty_on_inbound_transfer: {
      sql: `${CUBE}."RES_QTY_ON_INBOUND_TRANSFER"`,
      type: `string`
    },
    
    duty_unit_conversion: {
      sql: `${CUBE}."DUTY_UNIT_CONVERSION"`,
      type: `string`
    },
    
    unit_list_price: {
      sql: `${CUBE}."UNIT_LIST_PRICE"`,
      type: `string`
    },
    
    rolled_up_material_cost: {
      sql: `${CUBE}."ROLLED_UP_MATERIAL_COST"`,
      type: `string`
    },
    
    reserved_qty_on_inventory: {
      sql: `${CUBE}."RESERVED_QTY_ON_INVENTORY"`,
      type: `string`
    },
    
    system_created_by: {
      sql: `${CUBE}."SYSTEM_CREATED_BY"`,
      type: `string`
    },
    
    last_direct_cost: {
      sql: `${CUBE}."LAST_DIRECT_COST"`,
      type: `string`
    },
    
    reorder_quantity: {
      sql: `${CUBE}."REORDER_QUANTITY"`,
      type: `string`
    },
    
    units_per_parcel: {
      sql: `${CUBE}."UNITS_PER_PARCEL"`,
      type: `string`
    },
    
    transferred_lcy: {
      sql: `${CUBE}."TRANSFERRED_LCY"`,
      type: `string`
    },
    
    purchasing_blocked: {
      sql: `${CUBE}."PURCHASING_BLOCKED"`,
      type: `boolean`
    },
    
    maximum_order_quantity: {
      sql: `${CUBE}."MAXIMUM_ORDER_QUANTITY"`,
      type: `string`
    },
    
    cost_is_posted_to_gl: {
      sql: `${CUBE}."COST_IS_POSTED_TO_GL"`,
      type: `boolean`
    },
    
    allow_invoice_disc: {
      sql: `${CUBE}."ALLOW_INVOICE_DISC"`,
      type: `boolean`
    },
    
    cost_is_adjusted: {
      sql: `${CUBE}."COST_IS_ADJUSTED"`,
      type: `boolean`
    },
    
    bin_filter: {
      sql: `${CUBE}."BIN_FILTER"`,
      type: `string`
    },
    
    stockout_warning: {
      sql: `${CUBE}."STOCKOUT_WARNING"`,
      type: `string`
    },
    
    default_deferral_template_code: {
      sql: `${CUBE}."DEFAULT_DEFERRAL_TEMPLATE_CODE"`,
      type: `string`
    },
    
    unit_volume: {
      sql: `${CUBE}."UNIT_VOLUME"`,
      type: `string`
    },
    
    tax_group_id: {
      sql: `${CUBE}."TAX_GROUP_ID"`,
      type: `string`
    },
    
    type: {
      sql: `${CUBE}."TYPE"`,
      type: `string`
    },
    
    res_qty_on_sales_returns: {
      sql: `${CUBE}."RES_QTY_ON_SALES_RETURNS"`,
      type: `string`
    },
    
    package_no_filter: {
      sql: `${CUBE}."PACKAGE_NO_FILTER"`,
      type: `string`
    },
    
    negative_adjmt_qty: {
      sql: `${CUBE}."NEGATIVE_ADJMT_QTY"`,
      type: `string`
    },
    
    rolled_up_subcontracted_cost: {
      sql: `${CUBE}."ROLLED_UP_SUBCONTRACTED_COST"`,
      type: `string`
    },
    
    overflow_level: {
      sql: `${CUBE}."OVERFLOW_LEVEL"`,
      type: `string`
    },
    
    order_multiple: {
      sql: `${CUBE}."ORDER_MULTIPLE"`,
      type: `string`
    },
    
    vendor_no: {
      sql: `${CUBE}."VENDOR_NO"`,
      type: `string`
    },
    
    positive_adjmt_lcy: {
      sql: `${CUBE}."POSITIVE_ADJMT_LCY"`,
      type: `string`
    },
    
    gtin: {
      sql: `${CUBE}."GTIN"`,
      type: `string`
    },
    
    assembly_policy: {
      sql: `${CUBE}."ASSEMBLY_POLICY"`,
      type: `string`
    },
    
    lot_no_filter: {
      sql: `${CUBE}."LOT_NO_FILTER"`,
      type: `string`
    },
    
    rel_scheduled_receipt_qty: {
      sql: `${CUBE}."REL_SCHEDULED_RECEIPT_QTY"`,
      type: `string`
    },
    
    vendor_item_no: {
      sql: `${CUBE}."VENDOR_ITEM_NO"`,
      type: `string`
    },
    
    system_id: {
      sql: `${CUBE}."SYSTEM_ID"`,
      type: `string`
    },
    
    reserved_qty_on_sales_orders: {
      sql: `${CUBE}."RESERVED_QTY_ON_SALES_ORDERS"`,
      type: `string`
    },
    
    shelf_no: {
      sql: `${CUBE}."SHELF_NO"`,
      type: `string`
    },
    
    res_qty_on_purch_returns: {
      sql: `${CUBE}."RES_QTY_ON_PURCH_RETURNS"`,
      type: `string`
    },
    
    outputs_qty: {
      sql: `${CUBE}."OUTPUTS_QTY"`,
      type: `string`
    },
    
    sat_item_classification: {
      sql: `${CUBE}."SAT_ITEM_CLASSIFICATION"`,
      type: `string`
    },
    
    description_2: {
      sql: `${CUBE}."DESCRIPTION_2"`,
      type: `string`
    },
    
    variant_filter: {
      sql: `${CUBE}."VARIANT_FILTER"`,
      type: `string`
    },
    
    res_qty_on_job_order: {
      sql: `${CUBE}."RES_QTY_ON_JOB_ORDER"`,
      type: `string`
    },
    
    variant_mandatory_if_exists: {
      sql: `${CUBE}."VARIANT_MANDATORY_IF_EXISTS"`,
      type: `string`
    },
    
    no_2: {
      sql: `${CUBE}."NO_2"`,
      type: `string`
    },
    
    put_away_template_code: {
      sql: `${CUBE}."PUT_AWAY_TEMPLATE_CODE"`,
      type: `string`
    },
    
    time_bucket: {
      sql: `${CUBE}."TIME_BUCKET"`,
      type: `string`
    },
    
    no: {
      sql: `${CUBE}."NO"`,
      type: `string`,
      primary_key: true
    },
    
    replenishment_system: {
      sql: `${CUBE}."REPLENISHMENT_SYSTEM"`,
      type: `string`
    },
    
    manufacturer_code: {
      sql: `${CUBE}."MANUFACTURER_CODE"`,
      type: `string`
    },
    
    flushing_method: {
      sql: `${CUBE}."FLUSHING_METHOD"`,
      type: `string`
    },
    
    single_level_material_cost: {
      sql: `${CUBE}."SINGLE_LEVEL_MATERIAL_COST"`,
      type: `string`
    },
    
    sales_blocked: {
      sql: `${CUBE}."SALES_BLOCKED"`,
      type: `boolean`
    },
    
    purch_req_release_qty: {
      sql: `${CUBE}."PURCH_REQ_RELEASE_QTY"`,
      type: `string`
    },
    
    safety_stock_quantity: {
      sql: `${CUBE}."SAFETY_STOCK_QUANTITY"`,
      type: `string`
    },
    
    cost_of_open_production_orders: {
      sql: `${CUBE}."COST_OF_OPEN_PRODUCTION_ORDERS"`,
      type: `string`
    },
    
    vat_bus_posting_gr_price: {
      sql: `${CUBE}."VAT_BUS_POSTING_GR_PRICE"`,
      type: `string`
    },
    
    indirect_cost: {
      sql: `${CUBE}."INDIRECT_COST"`,
      type: `string`
    },
    
    qty_assigned_to_ship: {
      sql: `${CUBE}."QTY_ASSIGNED_TO_SHIP"`,
      type: `string`
    },
    
    standard_cost: {
      sql: `${CUBE}."STANDARD_COST"`,
      type: `string`
    },
    
    critical: {
      sql: `${CUBE}."CRITICAL"`,
      type: `boolean`
    },
    
    unit_of_measure_filter: {
      sql: `${CUBE}."UNIT_OF_MEASURE_FILTER"`,
      type: `string`
    },
    
    over_receipt_code: {
      sql: `${CUBE}."OVER_RECEIPT_CODE"`,
      type: `string`
    },
    
    unit_of_measure_id: {
      sql: `${CUBE}."UNIT_OF_MEASURE_ID"`,
      type: `string`
    },
    
    qty_on_sales_return: {
      sql: `${CUBE}."QTY_ON_SALES_RETURN"`,
      type: `string`
    },
    
    item_category_code: {
      sql: `${CUBE}."ITEM_CATEGORY_CODE"`,
      type: `string`
    },
    
    qty_on_job_order: {
      sql: `${CUBE}."QTY_ON_JOB_ORDER"`,
      type: `string`
    },
    
    qty_on_purch_order: {
      sql: `${CUBE}."QTY_ON_PURCH_ORDER"`,
      type: `string`
    },
    
    durability: {
      sql: `${CUBE}."DURABILITY"`,
      type: `string`
    },
    
    unit_price: {
      sql: `${CUBE}."UNIT_PRICE"`,
      type: `string`
    },
    
    lot_nos: {
      sql: `${CUBE}."LOT_NOS"`,
      type: `string`
    },
    
    phys_invt_counting_period_code: {
      sql: `${CUBE}."PHYS_INVT_COUNTING_PERIOD_CODE"`,
      type: `string`
    },
    
    coupled_to_dataverse: {
      sql: `${CUBE}."COUPLED_TO_DATAVERSE"`,
      type: `boolean`
    },
    
    reserve: {
      sql: `${CUBE}."RESERVE"`,
      type: `string`
    },
    
    prevent_negative_inventory: {
      sql: `${CUBE}."PREVENT_NEGATIVE_INVENTORY"`,
      type: `string`
    },
    
    lead_time_calculation: {
      sql: `${CUBE}."LEAD_TIME_CALCULATION"`,
      type: `string`
    },
    
    res_qty_on_prod_order_comp: {
      sql: `${CUBE}."RES_QTY_ON_PROD_ORDER_COMP"`,
      type: `string`
    },
    
    vat_prod_posting_group: {
      sql: `${CUBE}."VAT_PROD_POSTING_GROUP"`,
      type: `string`
    },
    
    production_bomno: {
      sql: `${CUBE}."PRODUCTION_BOMNO"`,
      type: `string`
    },
    
    planning_release_qty: {
      sql: `${CUBE}."PLANNING_RELEASE_QTY"`,
      type: `string`
    },
    
    item_category_id: {
      sql: `${CUBE}."ITEM_CATEGORY_ID"`,
      type: `string`
    },
    
    reserved_qty_on_purch_orders: {
      sql: `${CUBE}."RESERVED_QTY_ON_PURCH_ORDERS"`,
      type: `string`
    },
    
    scheduled_receipt_qty: {
      sql: `${CUBE}."SCHEDULED_RECEIPT_QTY"`,
      type: `string`
    },
    
    res_qty_on_asm_comp: {
      sql: `${CUBE}."RES_QTY_ON_ASM_COMP"`,
      type: `string`
    },
    
    block_reason: {
      sql: `${CUBE}."BLOCK_REASON"`,
      type: `string`
    },
    
    production_forecast_name: {
      sql: `${CUBE}."PRODUCTION_FORECAST_NAME"`,
      type: `string`
    },
    
    expiration_calculation: {
      sql: `${CUBE}."EXPIRATION_CALCULATION"`,
      type: `string`
    },
    
    rolled_up_cap_overhead_cost: {
      sql: `${CUBE}."ROLLED_UP_CAP_OVERHEAD_COST"`,
      type: `string`
    },
    
    res_qty_on_req_line: {
      sql: `${CUBE}."RES_QTY_ON_REQ_LINE"`,
      type: `string`
    },
    
    last_time_modified: {
      sql: `${CUBE}."LAST_TIME_MODIFIED"`,
      type: `string`
    },
    
    allow_online_adjustment: {
      sql: `${CUBE}."ALLOW_ONLINE_ADJUSTMENT"`,
      type: `boolean`
    },
    
    overhead_rate: {
      sql: `${CUBE}."OVERHEAD_RATE"`,
      type: `string`
    },
    
    search_description: {
      sql: `${CUBE}."SEARCH_DESCRIPTION"`,
      type: `string`
    },
    
    sat_packaging_type: {
      sql: `${CUBE}."SAT_PACKAGING_TYPE"`,
      type: `string`
    },
    
    budget_profit: {
      sql: `${CUBE}."BUDGET_PROFIT"`,
      type: `string`
    },
    
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    },
    
    serial_no_filter: {
      sql: `${CUBE}."SERIAL_NO_FILTER"`,
      type: `string`
    },
    
    qty_on_component_lines: {
      sql: `${CUBE}."QTY_ON_COMPONENT_LINES"`,
      type: `string`
    },
    
    inventory_posting_group_id: {
      sql: `${CUBE}."INVENTORY_POSTING_GROUP_ID"`,
      type: `string`
    },
    
    date_filter: {
      sql: `${CUBE}."DATE_FILTER"`,
      type: `string`
    },
    
    trans_ord_receipt_qty: {
      sql: `${CUBE}."TRANS_ORD_RECEIPT_QTY"`,
      type: `string`
    },
    
    sales_lcy: {
      sql: `${CUBE}."SALES_LCY"`,
      type: `string`
    },
    
    planned_order_receipt_qty: {
      sql: `${CUBE}."PLANNED_ORDER_RECEIPT_QTY"`,
      type: `string`
    },
    
    purchases_qty: {
      sql: `${CUBE}."PURCHASES_QTY"`,
      type: `string`
    },
    
    res_qty_on_outbound_transfer: {
      sql: `${CUBE}."RES_QTY_ON_OUTBOUND_TRANSFER"`,
      type: `string`
    },
    
    put_away_unit_of_measure_code: {
      sql: `${CUBE}."PUT_AWAY_UNIT_OF_MEASURE_CODE"`,
      type: `string`
    },
    
    no_series: {
      sql: `${CUBE}."NO_SERIES"`,
      type: `string`
    },
    
    tariff_no: {
      sql: `${CUBE}."TARIFF_NO"`,
      type: `string`
    },
    
    duty_class: {
      sql: `${CUBE}."DUTY_CLASS"`,
      type: `string`
    },
    
    system_created_at: {
      sql: `${CUBE}."SYSTEM_CREATED_AT"`,
      type: `time`
    },
    
    last_counting_period_update: {
      sql: `${CUBE}."LAST_COUNTING_PERIOD_UPDATE"`,
      type: `time`
    },
    
    last_unit_cost_calc_date: {
      sql: `${CUBE}."LAST_UNIT_COST_CALC_DATE"`,
      type: `time`
    },
    
    last_date_modified: {
      sql: `${CUBE}."LAST_DATE_MODIFIED"`,
      type: `time`
    },
    
    last_date_time_modified: {
      sql: `${CUBE}."LAST_DATE_TIME_MODIFIED"`,
      type: `time`
    },
    
    system_modified_at: {
      sql: `${CUBE}."SYSTEM_MODIFIED_AT"`,
      type: `time`
    },
    
    next_counting_end_date: {
      sql: `${CUBE}."NEXT_COUNTING_END_DATE"`,
      type: `time`
    },
    
    last_phys_invt_date: {
      sql: `${CUBE}."LAST_PHYS_INVT_DATE"`,
      type: `time`
    },
    
    next_counting_start_date: {
      sql: `${CUBE}."NEXT_COUNTING_START_DATE"`,
      type: `time`
    }
  },
  
  measures: {
    count: {
      type: `count`
    },
    
    discrete_order_quantity: {
      sql: `${CUBE}."DISCRETE_ORDER_QUANTITY"`,
      type: `sum`
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
