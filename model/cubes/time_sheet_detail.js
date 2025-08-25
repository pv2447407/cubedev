cube(`time_sheet_detail`, {
  sql_table: `"BUSINESS_CENTRAL"."TIME_SHEET_DETAIL"`,
  
  
  data_source: `default`,
  
  joins: {
    company: {
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    type: {
      sql: `${CUBE}."TYPE"`,
      type: `string`
    },
    
    quantity: {
      sql: `${CUBE}."QUANTITY"`,
      type: `string`
    },
    
    service_order_no: {
      sql: `${CUBE}."SERVICE_ORDER_NO"`,
      type: `string`
    },
    
    system_created_by: {
      sql: `${CUBE}."SYSTEM_CREATED_BY"`,
      type: `string`
    },
    
    resource_no: {
      sql: `${CUBE}."RESOURCE_NO"`,
      type: `string`
    },
    
    time_sheet_no: {
      sql: `${CUBE}."TIME_SHEET_NO"`,
      type: `string`
    },
    
    system_modified_by: {
      sql: `${CUBE}."SYSTEM_MODIFIED_BY"`,
      type: `string`
    },
    
    assembly_order_no: {
      sql: `${CUBE}."ASSEMBLY_ORDER_NO"`,
      type: `string`
    },
    
    posted: {
      sql: `${CUBE}."POSTED"`,
      type: `boolean`
    },
    
    job_no: {
      sql: `${CUBE}."JOB_NO"`,
      type: `string`
    },
    
    status: {
      sql: `${CUBE}."STATUS"`,
      type: `string`
    },
    
    cause_of_absence_code: {
      sql: `${CUBE}."CAUSE_OF_ABSENCE_CODE"`,
      type: `string`
    },
    
    posted_quantity: {
      sql: `${CUBE}."POSTED_QUANTITY"`,
      type: `string`
    },
    
    job_id: {
      sql: `${CUBE}."JOB_ID"`,
      type: `string`
    },
    
    system_id: {
      sql: `${CUBE}."SYSTEM_ID"`,
      type: `string`,
      primary_key: true
    },
    
    job_task_no: {
      sql: `${CUBE}."JOB_TASK_NO"`,
      type: `string`
    },
    
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    },
    
    system_created_at: {
      sql: `${CUBE}."SYSTEM_CREATED_AT"`,
      type: `time`
    },
    
    system_modified_at: {
      sql: `${CUBE}."SYSTEM_MODIFIED_AT"`,
      type: `time`
    },
    
    date: {
      sql: `${CUBE}."DATE"`,
      type: `time`
    },
    
    last_modified_date_time: {
      sql: `${CUBE}."LAST_MODIFIED_DATE_TIME"`,
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
