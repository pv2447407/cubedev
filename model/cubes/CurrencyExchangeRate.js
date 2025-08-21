cube(`currency_exchange_rate`, {
  sql_table: `"BUSINESS_CENTRAL"."CURRENCY_EXCHANGE_RATE"`,
  
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
    relational_currency_code: {
      sql: `${CUBE}."RELATIONAL_CURRENCY_CODE"`,
      type: `string`
    },
    system_created_by: {
      sql: `${CUBE}."SYSTEM_CREATED_BY"`,
      type: `string`
    },
    exchange_rate_amount: {
      sql: `${CUBE}."EXCHANGE_RATE_AMOUNT"`,
      type: `string`
    },
    relational_adjmt_exch_rate_amt: {
      sql: `${CUBE}."RELATIONAL_ADJMT_EXCH_RATE_AMT"`,
      type: `number`
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
    fix_exchange_rate_amount: {
      sql: `${CUBE}."FIX_EXCHANGE_RATE_AMOUNT"`,
      type: `string`
    },
    relational_exch_rate_amount: {
      sql: `${CUBE}."RELATIONAL_EXCH_RATE_AMOUNT"`,
      type: `string`
    },
    adjustment_exch_rate_amount: {
      sql: `${CUBE}."ADJUSTMENT_EXCH_RATE_AMOUNT"`,
      type: `string`
    },
    currency_code: {
      sql: `${CUBE}."CURRENCY_CODE"`,
      type: `string`
    },
    starting_date: {
      sql: `${CUBE}."STARTING_DATE"`,
      type: `time`,
      primary_key: true
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
