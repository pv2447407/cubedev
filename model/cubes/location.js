cube(`location`, {
  sql_table: `"BUSINESS_CENTRAL"."LOCATION"`,
  
  data_source: `default`,
  
  joins: {
    company: {
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    },
    
    telex_no: {
      sql: `${CUBE}."TELEX_NO"`,
      type: `string`
    },
    
    put_away_bin_policy: {
      sql: `${CUBE}."PUT_AWAY_BIN_POLICY"`,
      type: `string`
    },
    
    default_bin_code: {
      sql: `${CUBE}."DEFAULT_BIN_CODE"`,
      type: `string`
    },
    
    asm_to_order_shpt_bin_code: {
      sql: `${CUBE}."ASM_TO_ORDER_SHPT_BIN_CODE"`,
      type: `string`
    },
    
    prod_output_whse_handling: {
      sql: `${CUBE}."PROD_OUTPUT_WHSE_HANDLING"`,
      type: `string`
    },
    
    from_production_bin_code: {
      sql: `${CUBE}."FROM_PRODUCTION_BIN_CODE"`,
      type: `string`
    },
    
    default_bin_selection: {
      sql: `${CUBE}."DEFAULT_BIN_SELECTION"`,
      type: `string`
    },
    
    post_code: {
      sql: `${CUBE}."POST_CODE"`,
      type: `string`
    },
    
    country_region_code: {
      sql: `${CUBE}."COUNTRY_REGION_CODE"`,
      type: `string`
    },
    
    bin_mandatory: {
      sql: `${CUBE}."BIN_MANDATORY"`,
      type: `boolean`
    },
    
    system_id: {
      sql: `${CUBE}."SYSTEM_ID"`,
      type: `string`
    },
    
    cross_dock_bin_code: {
      sql: `${CUBE}."CROSS_DOCK_BIN_CODE"`,
      type: `string`
    },
    
    city: {
      sql: `${CUBE}."CITY"`,
      type: `string`
    },
    
    use_cross_docking: {
      sql: `${CUBE}."USE_CROSS_DOCKING"`,
      type: `boolean`
    },
    
    code: {
      sql: `${CUBE}."CODE"`,
      type: `string`,
      primary_key: true
    },
    
    require_receive: {
      sql: `${CUBE}."REQUIRE_RECEIVE"`,
      type: `boolean`
    },
    
    put_away_template_code: {
      sql: `${CUBE}."PUT_AWAY_TEMPLATE_CODE"`,
      type: `string`
    },
    
    open_shop_floor_bin_code: {
      sql: `${CUBE}."OPEN_SHOP_FLOOR_BIN_CODE"`,
      type: `string`
    },
    
    contact: {
      sql: `${CUBE}."CONTACT"`,
      type: `string`
    },
    
    to_assembly_bin_code: {
      sql: `${CUBE}."TO_ASSEMBLY_BIN_CODE"`,
      type: `string`
    },
    
    check_whse_class: {
      sql: `${CUBE}."CHECK_WHSE_CLASS"`,
      type: `boolean`
    },
    
    to_production_bin_code: {
      sql: `${CUBE}."TO_PRODUCTION_BIN_CODE"`,
      type: `string`
    },
    
    shipment_bin_code: {
      sql: `${CUBE}."SHIPMENT_BIN_CODE"`,
      type: `string`
    },
    
    cross_dock_due_date_calc: {
      sql: `${CUBE}."CROSS_DOCK_DUE_DATE_CALC"`,
      type: `string`
    },
    
    name_2: {
      sql: `${CUBE}."NAME_2"`,
      type: `string`
    },
    
    e_mail: {
      sql: `${CUBE}."E_MAIL"`,
      type: `string`
    },
    
    phone_no: {
      sql: `${CUBE}."PHONE_NO"`,
      type: `string`
    },
    
    from_assembly_bin_code: {
      sql: `${CUBE}."FROM_ASSEMBLY_BIN_CODE"`,
      type: `string`
    },
    
    to_job_bin_code: {
      sql: `${CUBE}."TO_JOB_BIN_CODE"`,
      type: `string`
    },
    
    system_created_by: {
      sql: `${CUBE}."SYSTEM_CREATED_BY"`,
      type: `string`
    },
    
    require_put_away: {
      sql: `${CUBE}."REQUIRE_PUT_AWAY"`,
      type: `boolean`
    },
    
    bin_capacity_policy: {
      sql: `${CUBE}."BIN_CAPACITY_POLICY"`,
      type: `string`
    },
    
    require_shipment: {
      sql: `${CUBE}."REQUIRE_SHIPMENT"`,
      type: `boolean`
    },
    
    receipt_bin_code: {
      sql: `${CUBE}."RECEIPT_BIN_CODE"`,
      type: `string`
    },
    
    pick_bin_policy: {
      sql: `${CUBE}."PICK_BIN_POLICY"`,
      type: `string`
    },
    
    county: {
      sql: `${CUBE}."COUNTY"`,
      type: `string`
    },
    
    directed_put_away_and_pick: {
      sql: `${CUBE}."DIRECTED_PUT_AWAY_AND_PICK"`,
      type: `boolean`
    },
    
    always_create_pick_line: {
      sql: `${CUBE}."ALWAYS_CREATE_PICK_LINE"`,
      type: `boolean`
    },
    
    fax_no: {
      sql: `${CUBE}."FAX_NO"`,
      type: `string`
    },
    
    tax_exemption_no: {
      sql: `${CUBE}."TAX_EXEMPTION_NO"`,
      type: `string`
    },
    
    job_consump_whse_handling: {
      sql: `${CUBE}."JOB_CONSUMP_WHSE_HANDLING"`,
      type: `string`
    },
    
    tax_area_code: {
      sql: `${CUBE}."TAX_AREA_CODE"`,
      type: `string`
    },
    
    address_2: {
      sql: `${CUBE}."ADDRESS_2"`,
      type: `string`
    },
    
    use_put_away_worksheet: {
      sql: `${CUBE}."USE_PUT_AWAY_WORKSHEET"`,
      type: `boolean`
    },
    
    system_modified_by: {
      sql: `${CUBE}."SYSTEM_MODIFIED_BY"`,
      type: `string`
    },
    
    use_adcs: {
      sql: `${CUBE}."USE_ADCS"`,
      type: `boolean`
    },
    
    address: {
      sql: `${CUBE}."ADDRESS"`,
      type: `string`
    },
    
    phone_no_2: {
      sql: `${CUBE}."PHONE_NO_2"`,
      type: `string`
    },
    
    name: {
      sql: `${CUBE}."NAME"`,
      type: `string`
    },
    
    asm_consump_whse_handling: {
      sql: `${CUBE}."ASM_CONSUMP_WHSE_HANDLING"`,
      type: `string`
    },
    
    use_as_in_transit: {
      sql: `${CUBE}."USE_AS_IN_TRANSIT"`,
      type: `boolean`
    },
    
    base_calendar_code: {
      sql: `${CUBE}."BASE_CALENDAR_CODE"`,
      type: `string`
    },
    
    allow_breakbulk: {
      sql: `${CUBE}."ALLOW_BREAKBULK"`,
      type: `boolean`
    },
    
    provincial_tax_area_code: {
      sql: `${CUBE}."PROVINCIAL_TAX_AREA_CODE"`,
      type: `string`
    },
    
    inbound_whse_handling_time: {
      sql: `${CUBE}."INBOUND_WHSE_HANDLING_TIME"`,
      type: `string`
    },
    
    prod_consump_whse_handling: {
      sql: `${CUBE}."PROD_CONSUMP_WHSE_HANDLING"`,
      type: `string`
    },
    
    always_create_put_away_line: {
      sql: `${CUBE}."ALWAYS_CREATE_PUT_AWAY_LINE"`,
      type: `boolean`
    },
    
    require_pick: {
      sql: `${CUBE}."REQUIRE_PICK"`,
      type: `boolean`
    },
    
    pick_according_to_fefo: {
      sql: `${CUBE}."PICK_ACCORDING_TO_FEFO"`,
      type: `boolean`
    },
    
    special_equipment: {
      sql: `${CUBE}."SPECIAL_EQUIPMENT"`,
      type: `string`
    },
    
    do_not_use_for_tax_calculation: {
      sql: `${CUBE}."DO_NOT_USE_FOR_TAX_CALCULATION"`,
      type: `boolean`
    },
    
    adjustment_bin_code: {
      sql: `${CUBE}."ADJUSTMENT_BIN_CODE"`,
      type: `string`
    },
    
    outbound_whse_handling_time: {
      sql: `${CUBE}."OUTBOUND_WHSE_HANDLING_TIME"`,
      type: `string`
    },
    
    system_created_at: {
      sql: `${CUBE}."SYSTEM_CREATED_AT"`,
      type: `time`
    },
    
    system_modified_at: {
      sql: `${CUBE}."SYSTEM_MODIFIED_AT"`,
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
