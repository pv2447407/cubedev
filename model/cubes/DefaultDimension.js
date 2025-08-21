cube(`default_dimension`, {
  sql_table: `"BUSINESS_CENTRAL"."DEFAULT_DIMENSION"`,
  
  data_source: `default`,
  
  joins: {
    company: {
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    no: {
      sql: `${CUBE}."NO"`,
      type: `string`,
      primary_key: true
    },
    system_id: {
      sql: `${CUBE}."SYSTEM_ID"`,
      type: `string`
    },
    dimension_value_code: {
      sql: `${CUBE}."DIMENSION_VALUE_CODE"`,
      type: `string`
    },
    multi_selection_action: {
      sql: `${CUBE}."MULTI_SELECTION_ACTION"`,
      type: `string`
    },
    dimension_code: {
      sql: `${CUBE}."DIMENSION_CODE"`,
      type: `string`
    },
    system_created_by: {
      sql: `${CUBE}."SYSTEM_CREATED_BY"`,
      type: `string`
    },
    parent_type: {
      sql: `${CUBE}."PARENT_TYPE"`,
      type: `string`
    },
    parent_id: {
      sql: `${CUBE}."PARENT_ID"`,
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
    dimension_id: {
      sql: `${CUBE}."DIMENSION_ID"`,
      type: `string`
    },
    system_modified_at: {
      sql: `${CUBE}."SYSTEM_MODIFIED_AT"`,
      type: `time`
    },
    dimension_value_id: {
      sql: `${CUBE}."DIMENSION_VALUE_ID"`,
      type: `string`
    },
    table_caption: {
      sql: `${CUBE}."TABLE_CAPTION"`,
      type: `string`
    },
    table_id: {
      sql: `${CUBE}."TABLE_ID"`,
      type: `number`
    },
    allowed_values_filter: {
      sql: `${CUBE}."ALLOWED_VALUES_FILTER"`,
      type: `string`
    },
    value_posting: {
      sql: `${CUBE}."VALUE_POSTING"`,
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
