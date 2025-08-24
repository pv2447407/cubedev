cube(`job`, {
  sql_table: `"BUSINESS_CENTRAL"."JOB"`,
  
  data_source: `default`,
  
  joins: {
    company: {
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    price_calculation_method: {
      sql: `${CUBE}."PRICE_CALCULATION_METHOD"`,
      type: `string`
    },
    
    person_responsible: {
      sql: `${CUBE}."PERSON_RESPONSIBLE"`,
      type: `string`
    },
    
    complete: {
      sql: `${CUBE}."COMPLETE"`,
      type: `boolean`
    },
    
    system_id: {
      sql: `${CUBE}."SYSTEM_ID"`,
      type: `string`
    },
    
    project_manager: {
      sql: `${CUBE}."PROJECT_MANAGER"`,
      type: `string`
    },
    
    bill_to_contact: {
      sql: `${CUBE}."BILL_TO_CONTACT"`,
      type: `string`
    },
    
    sell_to_county: {
      sql: `${CUBE}."SELL_TO_COUNTY"`,
      type: `string`
    },
    
    recog_costs_amount: {
      sql: `${CUBE}."RECOG_COSTS_AMOUNT"`,
      type: `string`
    },
    
    sell_to_customer_name_2: {
      sql: `${CUBE}."SELL_TO_CUSTOMER_NAME_2"`,
      type: `string`
    },
    
    sell_to_email: {
      sql: `${CUBE}."SELL_TO_EMAIL"`,
      type: `string`
    },
    
    external_document_no: {
      sql: `${CUBE}."EXTERNAL_DOCUMENT_NO"`,
      type: `string`
    },
    
    total_wipsales_amount: {
      sql: `${CUBE}."TOTAL_WIPSALES_AMOUNT"`,
      type: `string`
    },
    
    customer_disc_group: {
      sql: `${CUBE}."CUSTOMER_DISC_GROUP"`,
      type: `string`
    },
    
    sell_to_city: {
      sql: `${CUBE}."SELL_TO_CITY"`,
      type: `string`
    },
    
    customer_price_group: {
      sql: `${CUBE}."CUSTOMER_PRICE_GROUP"`,
      type: `string`
    },
    
    ship_to_country_region_code: {
      sql: `${CUBE}."SHIP_TO_COUNTRY_REGION_CODE"`,
      type: `string`
    },
    
    bill_to_address: {
      sql: `${CUBE}."BILL_TO_ADDRESS"`,
      type: `string`
    },
    
    ship_to_name: {
      sql: `${CUBE}."SHIP_TO_NAME"`,
      type: `string`
    },
    
    comment: {
      sql: `${CUBE}."COMMENT"`,
      type: `boolean`
    },
    
    wip_method: {
      sql: `${CUBE}."WIP_METHOD"`,
      type: `string`
    },
    
    sell_to_customer_no: {
      sql: `${CUBE}."SELL_TO_CUSTOMER_NO"`,
      type: `string`
    },
    
    resource_filter: {
      sql: `${CUBE}."RESOURCE_FILTER"`,
      type: `string`
    },
    
    sell_to_address: {
      sql: `${CUBE}."SELL_TO_ADDRESS"`,
      type: `string`
    },
    
    no: {
      sql: `${CUBE}."NO"`,
      type: `string`
    },
    
    over_budget: {
      sql: `${CUBE}."OVER_BUDGET"`,
      type: `boolean`
    },
    
    bill_to_address_2: {
      sql: `${CUBE}."BILL_TO_ADDRESS_2"`,
      type: `string`
    },
    
    total_wipsales_glamount: {
      sql: `${CUBE}."TOTAL_WIPSALES_GLAMOUNT"`,
      type: `string`
    },
    
    bill_to_contact_no: {
      sql: `${CUBE}."BILL_TO_CONTACT_NO"`,
      type: `string`
    },
    
    search_description: {
      sql: `${CUBE}."SEARCH_DESCRIPTION"`,
      type: `string`
    },
    
    allow_schedule_contract_lines: {
      sql: `${CUBE}."ALLOW_SCHEDULE_CONTRACT_LINES"`,
      type: `boolean`
    },
    
    sell_to_address_2: {
      sql: `${CUBE}."SELL_TO_ADDRESS_2"`,
      type: `string`
    },
    
    global_dimension_2_code: {
      sql: `${CUBE}."GLOBAL_DIMENSION_2_CODE"`,
      type: `string`
    },
    
    bill_to_post_code: {
      sql: `${CUBE}."BILL_TO_POST_CODE"`,
      type: `string`
    },
    
    wip_warnings: {
      sql: `${CUBE}."WIP_WARNINGS"`,
      type: `boolean`
    },
    
    total_wipcost_amount: {
      sql: `${CUBE}."TOTAL_WIPCOST_AMOUNT"`,
      type: `string`
    },
    
    description: {
      sql: `${CUBE}."DESCRIPTION"`,
      type: `string`
    },
    
    bill_to_name: {
      sql: `${CUBE}."BILL_TO_NAME"`,
      type: `string`
    },
    
    ship_to_county: {
      sql: `${CUBE}."SHIP_TO_COUNTY"`,
      type: `string`
    },
    
    calc_recog_sales_glamount: {
      sql: `${CUBE}."CALC_RECOG_SALES_GLAMOUNT"`,
      type: `string`
    },
    
    description_2: {
      sql: `${CUBE}."DESCRIPTION_2"`,
      type: `string`
    },
    
    bill_to_customer_no: {
      sql: `${CUBE}."BILL_TO_CUSTOMER_NO"`,
      type: `string`
    },
    
    completely_picked: {
      sql: `${CUBE}."COMPLETELY_PICKED"`,
      type: `boolean`
    },
    
    applied_costs_glamount: {
      sql: `${CUBE}."APPLIED_COSTS_GLAMOUNT"`,
      type: `string`
    },
    
    bill_to_city: {
      sql: `${CUBE}."BILL_TO_CITY"`,
      type: `string`
    },
    
    recog_sales_amount: {
      sql: `${CUBE}."RECOG_SALES_AMOUNT"`,
      type: `string`
    },
    
    sell_to_contact: {
      sql: `${CUBE}."SELL_TO_CONTACT"`,
      type: `string`
    },
    
    wip_completion_posted: {
      sql: `${CUBE}."WIP_COMPLETION_POSTED"`,
      type: `boolean`
    },
    
    status: {
      sql: `${CUBE}."STATUS"`,
      type: `string`
    },
    
    bill_to_name_2: {
      sql: `${CUBE}."BILL_TO_NAME_2"`,
      type: `string`
    },
    
    scheduled_res_gr_qty: {
      sql: `${CUBE}."SCHEDULED_RES_GR_QTY"`,
      type: `string`
    },
    
    bill_to_county: {
      sql: `${CUBE}."BILL_TO_COUNTY"`,
      type: `string`
    },
    
    system_created_by: {
      sql: `${CUBE}."SYSTEM_CREATED_BY"`,
      type: `string`
    },
    
    invoice_currency_code: {
      sql: `${CUBE}."INVOICE_CURRENCY_CODE"`,
      type: `string`
    },
    
    scheduled_res_qty: {
      sql: `${CUBE}."SCHEDULED_RES_QTY"`,
      type: `string`
    },
    
    recog_costs_glamount: {
      sql: `${CUBE}."RECOG_COSTS_GLAMOUNT"`,
      type: `string`
    },
    
    sell_to_contact_no: {
      sql: `${CUBE}."SELL_TO_CONTACT_NO"`,
      type: `string`
    },
    
    ship_to_address: {
      sql: `${CUBE}."SHIP_TO_ADDRESS"`,
      type: `string`
    },
    
    system_modified_by: {
      sql: `${CUBE}."SYSTEM_MODIFIED_BY"`,
      type: `string`
    },
    
    ship_to_address_2: {
      sql: `${CUBE}."SHIP_TO_ADDRESS_2"`,
      type: `string`
    },
    
    ship_to_post_code: {
      sql: `${CUBE}."SHIP_TO_POST_CODE"`,
      type: `string`
    },
    
    posting_date_filter: {
      sql: `${CUBE}."POSTING_DATE_FILTER"`,
      type: `string`
    },
    
    total_wipcost_glamount: {
      sql: `${CUBE}."TOTAL_WIPCOST_GLAMOUNT"`,
      type: `string`
    },
    
    ship_to_code: {
      sql: `${CUBE}."SHIP_TO_CODE"`,
      type: `string`
    },
    
    exch_calculation_cost: {
      sql: `${CUBE}."EXCH_CALCULATION_COST"`,
      type: `string`
    },
    
    sell_to_country_region_code: {
      sql: `${CUBE}."SELL_TO_COUNTRY_REGION_CODE"`,
      type: `string`
    },
    
    wip_completion_calculated: {
      sql: `${CUBE}."WIP_COMPLETION_CALCULATED"`,
      type: `boolean`
    },
    
    currency_code: {
      sql: `${CUBE}."CURRENCY_CODE"`,
      type: `string`
    },
    
    recog_sales_glamount: {
      sql: `${CUBE}."RECOG_SALES_GLAMOUNT"`,
      type: `string`
    },
    
    payment_terms_code: {
      sql: `${CUBE}."PAYMENT_TERMS_CODE"`,
      type: `string`
    },
    
    calc_recog_costs_glamount: {
      sql: `${CUBE}."CALC_RECOG_COSTS_GLAMOUNT"`,
      type: `string`
    },
    
    sell_to_post_code: {
      sql: `${CUBE}."SELL_TO_POST_CODE"`,
      type: `string`
    },
    
    applied_sales_glamount: {
      sql: `${CUBE}."APPLIED_SALES_GLAMOUNT"`,
      type: `string`
    },
    
    resource_gr_filter: {
      sql: `${CUBE}."RESOURCE_GR_FILTER"`,
      type: `string`
    },
    
    reserve: {
      sql: `${CUBE}."RESERVE"`,
      type: `string`
    },
    
    calc_recog_costs_amount: {
      sql: `${CUBE}."CALC_RECOG_COSTS_AMOUNT"`,
      type: `string`
    },
    
    wip_entries_exist: {
      sql: `${CUBE}."WIP_ENTRIES_EXIST"`,
      type: `boolean`
    },
    
    sell_to_customer_name: {
      sql: `${CUBE}."SELL_TO_CUSTOMER_NAME"`,
      type: `string`
    },
    
    calc_recog_sales_amount: {
      sql: `${CUBE}."CALC_RECOG_SALES_AMOUNT"`,
      type: `string`
    },
    
    cost_calculation_method: {
      sql: `${CUBE}."COST_CALCULATION_METHOD"`,
      type: `string`
    },
    
    planning_date_filter: {
      sql: `${CUBE}."PLANNING_DATE_FILTER"`,
      type: `string`
    },
    
    your_reference: {
      sql: `${CUBE}."YOUR_REFERENCE"`,
      type: `string`
    },
    
    ship_to_city: {
      sql: `${CUBE}."SHIP_TO_CITY"`,
      type: `string`
    },
    
    ship_to_name_2: {
      sql: `${CUBE}."SHIP_TO_NAME_2"`,
      type: `string`
    },
    
    job_posting_group: {
      sql: `${CUBE}."JOB_POSTING_GROUP"`,
      type: `string`
    },
    
    sell_to_phone_no: {
      sql: `${CUBE}."SELL_TO_PHONE_NO"`,
      type: `string`
    },
    
    apply_usage_link: {
      sql: `${CUBE}."APPLY_USAGE_LINK"`,
      type: `boolean`
    },
    
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    },
    
    wip_posting_method: {
      sql: `${CUBE}."WIP_POSTING_METHOD"`,
      type: `string`
    },
    
    exch_calculation_price: {
      sql: `${CUBE}."EXCH_CALCULATION_PRICE"`,
      type: `string`
    },
    
    ship_to_contact: {
      sql: `${CUBE}."SHIP_TO_CONTACT"`,
      type: `string`
    },
    
    global_dimension_1_code: {
      sql: `${CUBE}."GLOBAL_DIMENSION_1_CODE"`,
      type: `string`
    },
    
    image: {
      sql: `${CUBE}."IMAGE"`,
      type: `string`
    },
    
    payment_method_code: {
      sql: `${CUBE}."PAYMENT_METHOD_CODE"`,
      type: `string`
    },
    
    language_code: {
      sql: `${CUBE}."LANGUAGE_CODE"`,
      type: `string`
    },
    
    bill_to_country_region_code: {
      sql: `${CUBE}."BILL_TO_COUNTRY_REGION_CODE"`,
      type: `string`
    },
    
    no_series: {
      sql: `${CUBE}."NO_SERIES"`,
      type: `string`
    },
    
    blocked: {
      sql: `${CUBE}."BLOCKED"`,
      type: `string`
    },
    
    system_created_at: {
      sql: `${CUBE}."SYSTEM_CREATED_AT"`,
      type: `time`
    },
    
    next_invoice_date: {
      sql: `${CUBE}."NEXT_INVOICE_DATE"`,
      type: `time`
    },
    
    system_modified_at: {
      sql: `${CUBE}."SYSTEM_MODIFIED_AT"`,
      type: `time`
    },
    
    creation_date: {
      sql: `${CUBE}."CREATION_DATE"`,
      type: `time`
    },
    
    wip_glposting_date: {
      sql: `${CUBE}."WIP_GLPOSTING_DATE"`,
      type: `time`
    },
    
    last_date_modified: {
      sql: `${CUBE}."LAST_DATE_MODIFIED"`,
      type: `time`
    },
    
    starting_date: {
      sql: `${CUBE}."STARTING_DATE"`,
      type: `time`
    },
    
    wip_posting_date: {
      sql: `${CUBE}."WIP_POSTING_DATE"`,
      type: `time`
    },
    
    ending_date: {
      sql: `${CUBE}."ENDING_DATE"`,
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
