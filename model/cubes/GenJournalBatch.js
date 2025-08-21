cube(`gen_journal_batch`, {
  sql_table: `"BUSINESS_CENTRAL"."GEN_JOURNAL_BATCH"`,
  
  data_source: `default`,
  
  joins: {
    company: {
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    name: {
      sql: `${CUBE}."NAME"`,
      type: `string`,
      primary_key: true
    },
    system_id: {
      sql: `${CUBE}."SYSTEM_ID"`,
      type: `string`
    },
    bank_statement_import_format: {
      sql: `${CUBE}."BANK_STATEMENT_IMPORT_FORMAT"`,
      type: `string`
    },
    template_type: {
      sql: `${CUBE}."TEMPLATE_TYPE"`,
      type: `string`
    },
    copy_to_posted_jnl_lines: {
      sql: `${CUBE}."COPY_TO_POSTED_JNL_LINES"`,
      type: `boolean`
    },
    last_modified_date_time: {
      sql: `${CUBE}."LAST_MODIFIED_DATE_TIME"`,
      type: `time`
    },
    no_series: {
      sql: `${CUBE}."NO_SERIES"`,
      type: `string`
    },
    journal_template_name: {
      sql: `${CUBE}."JOURNAL_TEMPLATE_NAME"`,
      type: `string`
    },
    posting_no_series: {
      sql: `${CUBE}."POSTING_NO_SERIES"`,
      type: `string`
    },
    allow_payment_export: {
      sql: `${CUBE}."ALLOW_PAYMENT_EXPORT"`,
      type: `boolean`
    },
    recurring: {
      sql: `${CUBE}."RECURRING"`,
      type: `boolean`
    },
    suggest_balancing_amount: {
      sql: `${CUBE}."SUGGEST_BALANCING_AMOUNT"`,
      type: `boolean`
    },
    description: {
      sql: `${CUBE}."DESCRIPTION"`,
      type: `string`
    },
    allow_vatdifference: {
      sql: `${CUBE}."ALLOW_VATDIFFERENCE"`,
      type: `boolean`
    },
    bal_account_id: {
      sql: `${CUBE}."BAL_ACCOUNT_ID"`,
      type: `string`
    },
    system_created_by: {
      sql: `${CUBE}."SYSTEM_CREATED_BY"`,
      type: `string`
    },
    copy_vatsetup_to_jnl_lines: {
      sql: `${CUBE}."COPY_VATSETUP_TO_JNL_LINES"`,
      type: `boolean`
    },
    pending_approval: {
      sql: `${CUBE}."PENDING_APPROVAL"`,
      type: `boolean`
    },
    system_created_at: {
      sql: `${CUBE}."SYSTEM_CREATED_AT"`,
      type: `time`
    },
    system_modified_by: {
      sql: `${CUBE}."SYSTEM_MODIFIED_BY"`,
      type: `string`
    },
    bal_account_no: {
      sql: `${CUBE}."BAL_ACCOUNT_NO"`,
      type: `string`
    },
    bal_account_type: {
      sql: `${CUBE}."BAL_ACCOUNT_TYPE"`,
      type: `string`
    },
    system_modified_at: {
      sql: `${CUBE}."SYSTEM_MODIFIED_AT"`,
      type: `time`
    },
    reason_code: {
      sql: `${CUBE}."REASON_CODE"`,
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
