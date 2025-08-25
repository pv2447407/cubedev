cube(`payment_method`, {
  sql_table: `"BUSINESS_CENTRAL"."PAYMENT_METHOD"`,
  
  data_source: `default`,
  
  joins: {
    company: {
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    system_modified_by: {
      sql: `${CUBE}."SYSTEM_MODIFIED_BY"`,
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
    
    direct_debit_pmt_terms_code: {
      sql: `${CUBE}."DIRECT_DEBIT_PMT_TERMS_CODE"`,
      type: `string`
    },
    
    pmt_export_line_definition: {
      sql: `${CUBE}."PMT_EXPORT_LINE_DEFINITION"`,
      type: `string`
    },
    
    sat_payment_method_code: {
      sql: `${CUBE}."SAT_PAYMENT_METHOD_CODE"`,
      type: `string`
    },
    
    direct_debit: {
      sql: `${CUBE}."DIRECT_DEBIT"`,
      type: `boolean`
    },
    
    bal_account_no: {
      sql: `${CUBE}."BAL_ACCOUNT_NO"`,
      type: `string`
    },
    
    bal_account_type: {
      sql: `${CUBE}."BAL_ACCOUNT_TYPE"`,
      type: `string`
    },
    
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    },
    
    code: {
      sql: `${CUBE}."CODE"`,
      type: `string`,
      primary_key: true
    },
    
    system_created_by: {
      sql: `${CUBE}."SYSTEM_CREATED_BY"`,
      type: `string`
    },
    
    sat_method_of_payment: {
      sql: `${CUBE}."SAT_METHOD_OF_PAYMENT"`,
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
