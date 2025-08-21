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
    code: {
      sql: `${CUBE}."CODE"`,
      type: `string`,
      primary_key: true
    },
    system_id: {
      sql: `${CUBE}."SYSTEM_ID"`,
      type: `string`
    },
    map_to_icdimension_value_code: {
      sql: `${CUBE}."MAP_TO_ICDIMENSION_VALUE_CODE"`,
      type: `string`
    },
    last_modified_date_time: {
      sql: `${CUBE}."LAST_MODIFIED_DATE_TIME"`,
      type: `time`
    },
    dimension_value_type: {
      sql: `${CUBE}."DIMENSION_VALUE_TYPE"`,
      type: `string`
    },
    global_dimension_no: {
      sql: `${CUBE}."GLOBAL_DIMENSION_NO"`,
      type: `number`
    },
    dimension_code: {
      sql: `${CUBE}."DIMENSION_CODE"`,
      type: `string`
    },
    totaling: {
      sql: `${CUBE}."TOTALING"`,
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
    system_created_at: {
      sql: `${CUBE}."SYSTEM_CREATED_AT"`,
      type: `time`
    },
    system_modified_by: {
      sql: `${CUBE}."SYSTEM_MODIFIED_BY"`,
      type: `string`
    },
    indentation: {
      sql: `${CUBE}."INDENTATION"`,
      type: `number`
    },
    blocked: {
      sql: `${CUBE}."BLOCKED"`,
      type: `boolean`
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
      type: `number`
    },
    name: {
      sql: `${CUBE}."NAME"`,
      type: `string`
    },
    map_to_icdimension_code: {
      sql: `${CUBE}."MAP_TO_ICDIMENSION_CODE"`,
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
