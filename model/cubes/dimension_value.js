cube(`dimension_value`, {
  sql_table: `"BUSINESS_CENTRAL"."DIMENSION_VALUE"`,
  
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
    
    consolidation_code: {
      sql: `${CUBE}."CONSOLIDATION_CODE"`,
      type: `string`
    },
    
    system_created_by: {
      sql: `${CUBE}."SYSTEM_CREATED_BY"`,
      type: `string`
    },
    
    name: {
      sql: `${CUBE}."NAME"`,
      type: `string`
    },
    
    totaling: {
      sql: `${CUBE}."TOTALING"`,
      type: `string`
    },
    
    map_to_icdimension_code: {
      sql: `${CUBE}."MAP_TO_ICDIMENSION_CODE"`,
      type: `string`
    },
    
    dimension_id: {
      sql: `${CUBE}."DIMENSION_ID"`,
      type: `string`
    },
    
    system_modified_by: {
      sql: `${CUBE}."SYSTEM_MODIFIED_BY"`,
      type: `string`
    },
    
    dimension_code: {
      sql: `${CUBE}."DIMENSION_CODE"`,
      type: `string`
    },
    
    system_id: {
      sql: `${CUBE}."SYSTEM_ID"`,
      type: `string`
    },
    
    map_to_icdimension_value_code: {
      sql: `${CUBE}."MAP_TO_ICDIMENSION_VALUE_CODE"`,
      type: `string`
    },
    
    code: {
      sql: `${CUBE}."CODE"`,
      type: `string`
    },
    
    blocked: {
      sql: `${CUBE}."BLOCKED"`,
      type: `boolean`
    },
    
    dimension_value_type: {
      sql: `${CUBE}."DIMENSION_VALUE_TYPE"`,
      type: `string`
    },
    
    system_created_at: {
      sql: `${CUBE}."SYSTEM_CREATED_AT"`,
      type: `time`
    },
    
    last_modified_date_time: {
      sql: `${CUBE}."LAST_MODIFIED_DATE_TIME"`,
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
