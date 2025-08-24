cube(`company`, {
  sql_table: `"BUSINESS_CENTRAL"."COMPANY"`,
  
  data_source: `default`,
  
  joins: {
    
  },
  
  dimensions: {
    id: {
      sql: `${CUBE}."ID"`,
      type: `string`,
      primary_key: true
    },
    
    name: {
      sql: `${CUBE}."NAME"`,
      type: `string`
    },
    
    system_created_by: {
      sql: `${CUBE}."SYSTEM_CREATED_BY"`,
      type: `string`
    },
    
    display_name: {
      sql: `${CUBE}."DISPLAY_NAME"`,
      type: `string`
    },
    
    business_profile_id: {
      sql: `${CUBE}."BUSINESS_PROFILE_ID"`,
      type: `string`
    },
    
    evaluation_company: {
      sql: `${CUBE}."EVALUATION_COMPANY"`,
      type: `boolean`
    },
    
    system_modified_by: {
      sql: `${CUBE}."SYSTEM_MODIFIED_BY"`,
      type: `string`
    },
    
    system_id: {
      sql: `${CUBE}."SYSTEM_ID"`,
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
