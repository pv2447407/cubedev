cube(`opportunity`, {
  sql_table: `"BUSINESS_CENTRAL"."OPPORTUNITY"`,
  
  data_source: `default`,
  
  joins: {
    company: {
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    campaign_no: {
      sql: `${CUBE}."CAMPAIGN_NO"`,
      type: `string`
    },
    
    system_created_by: {
      sql: `${CUBE}."SYSTEM_CREATED_BY"`,
      type: `string`
    },
    
    contact_no: {
      sql: `${CUBE}."CONTACT_NO"`,
      type: `string`
    },
    
    contact_company_name: {
      sql: `${CUBE}."CONTACT_COMPANY_NAME"`,
      type: `string`
    },
    
    wizard_estimated_value_lcy: {
      sql: `${CUBE}."WIZARD_ESTIMATED_VALUE_LCY"`,
      type: `string`
    },
    
    contact_name: {
      sql: `${CUBE}."CONTACT_NAME"`,
      type: `string`
    },
    
    wizard_campaign_description: {
      sql: `${CUBE}."WIZARD_CAMPAIGN_DESCRIPTION"`,
      type: `string`
    },
    
    segment_description: {
      sql: `${CUBE}."SEGMENT_DESCRIPTION"`,
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
    
    sales_document_no: {
      sql: `${CUBE}."SALES_DOCUMENT_NO"`,
      type: `string`
    },
    
    salesperson_name: {
      sql: `${CUBE}."SALESPERSON_NAME"`,
      type: `string`
    },
    
    no: {
      sql: `${CUBE}."NO"`,
      type: `string`,
      primary_key: true
    },
    
    no_series: {
      sql: `${CUBE}."NO_SERIES"`,
      type: `string`
    },
    
    status: {
      sql: `${CUBE}."STATUS"`,
      type: `string`
    },
    
    salesperson_code: {
      sql: `${CUBE}."SALESPERSON_CODE"`,
      type: `string`
    },
    
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    },
    
    campaign_description: {
      sql: `${CUBE}."CAMPAIGN_DESCRIPTION"`,
      type: `string`
    },
    
    comment: {
      sql: `${CUBE}."COMMENT"`,
      type: `boolean`
    },
    
    sales_cycle_code: {
      sql: `${CUBE}."SALES_CYCLE_CODE"`,
      type: `string`
    },
    
    chances_of_success: {
      sql: `${CUBE}."CHANCES_OF_SUCCESS"`,
      type: `string`
    },
    
    completed: {
      sql: `${CUBE}."COMPLETED"`,
      type: `string`
    },
    
    priority: {
      sql: `${CUBE}."PRIORITY"`,
      type: `string`
    },
    
    segment_no: {
      sql: `${CUBE}."SEGMENT_NO"`,
      type: `string`
    },
    
    estimated_value_lcy: {
      sql: `${CUBE}."ESTIMATED_VALUE_LCY"`,
      type: `string`
    },
    
    wizard_contact_name: {
      sql: `${CUBE}."WIZARD_CONTACT_NAME"`,
      type: `string`
    },
    
    coupled_to_dataverse: {
      sql: `${CUBE}."COUPLED_TO_DATAVERSE"`,
      type: `boolean`
    },
    
    wizard_step: {
      sql: `${CUBE}."WIZARD_STEP"`,
      type: `string`
    },
    
    wizard_chances_of_success: {
      sql: `${CUBE}."WIZARD_CHANCES_OF_SUCCESS"`,
      type: `string`
    },
    
    sales_document_type: {
      sql: `${CUBE}."SALES_DOCUMENT_TYPE"`,
      type: `string`
    },
    
    system_modified_by: {
      sql: `${CUBE}."SYSTEM_MODIFIED_BY"`,
      type: `string`
    },
    
    activate_first_stage: {
      sql: `${CUBE}."ACTIVATE_FIRST_STAGE"`,
      type: `boolean`
    },
    
    calcd_current_value_lcy: {
      sql: `${CUBE}."CALCD_CURRENT_VALUE_LCY"`,
      type: `string`
    },
    
    contact_company_no: {
      sql: `${CUBE}."CONTACT_COMPANY_NO"`,
      type: `string`
    },
    
    probability: {
      sql: `${CUBE}."PROBABILITY"`,
      type: `string`
    },
    
    closed: {
      sql: `${CUBE}."CLOSED"`,
      type: `boolean`
    },
    
    system_created_at: {
      sql: `${CUBE}."SYSTEM_CREATED_AT"`,
      type: `time`
    },
    
    wizard_estimated_closing_date: {
      sql: `${CUBE}."WIZARD_ESTIMATED_CLOSING_DATE"`,
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
    
    estimated_closing_date: {
      sql: `${CUBE}."ESTIMATED_CLOSING_DATE"`,
      type: `time`
    },
    
    date_closed: {
      sql: `${CUBE}."DATE_CLOSED"`,
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
