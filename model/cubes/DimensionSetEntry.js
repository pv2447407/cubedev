cube(`dimension_set_entry`, {
  sql_table: `"BUSINESS_CENTRAL"."DIMENSION_SET_ENTRY"`,
  
  data_source: `default`,
  
  joins: {
    company: {
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    system_id: {
      sql: `${CUBE}."SYSTEM_ID"`,
      type: `string`
    },
    dimension_value_code: {
      sql: `${CUBE}."DIMENSION_VALUE_CODE"`,
      type: `string`
    },
    system_created_at: {
      sql: `${CUBE}."SYSTEM_CREATED_AT"`,
      type: `time`
    },
    system_modified_by: {
      sql: `${CUBE}."SYSTEM_MODIFIED_BY"`,
      type: `string`
    },
    system_modified_at: {
      sql: `${CUBE}."SYSTEM_MODIFIED_AT"`,
      type: `time`
    },
    global_dimension_no: {
      sql: `${CUBE}."GLOBAL_DIMENSION_NO"`,
      type: `number`
    },
    dimension_set_id: {
      sql: `${CUBE}."DIMENSION_SET_ID"`,
      type: `number`,
      primary_key: true
    },
    dimension_value_id: {
      sql: `${CUBE}."DIMENSION_VALUE_ID"`,
      type: `number`
    },
    dimension_code: {
      sql: `${CUBE}."DIMENSION_CODE"`,
      type: `string`
    },
    dimension_value_name: {
      sql: `${CUBE}."DIMENSION_VALUE_NAME"`,
      type: `string`
    },
    system_created_by: {
      sql: `${CUBE}."SYSTEM_CREATED_BY"`,
      type: `string`
    },
    dimension_name: {
      sql: `${CUBE}."DIMENSION_NAME"`,
      type: `string`
    },
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    },
    _fivetran_synced: {
      sql: `${CUBE}."_FIVETRAN_SYNCED"`,
      type: `time`
    },
    _fivetran_deleted: {
      sql: `${CUBE}."_FIVETRAN_DELETED"`,
      type: `boolean`
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
