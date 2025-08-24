cube(`g_l_budget_entry`, {
  sql_table: `"BUSINESS_CENTRAL"."G_L_BUDGET_ENTRY"`,
  
  data_source: `default`,
  
  joins: {
    company: {
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`,
      relationship: `many_to_one`
    },
    
    g_l_account: {
      sql: `${CUBE}."G_L_ACCOUNT_NO" = ${g_l_account}."NO" AND ${CUBE}."COMPANY_ID" = ${g_l_account}."COMPANY_ID"`,
      relationship: `many_to_one`
    },
    
    dimension_set_entry: {
      sql: `${CUBE}."DIMENSION_SET_ID" = ${dimension_set_entry}."DIMENSION_SET_ID" AND ${CUBE}."COMPANY_ID" = ${dimension_set_entry}."COMPANY_ID"`,
      relationship: `one_to_many`
    }
  },
  
  dimensions: {
    entry_no: {
      sql: `${CUBE}."ENTRY_NO"`,
      type: `number`,
      primary_key: true
    },
    
    budget_name: {
      sql: `${CUBE}."BUDGET_NAME"`,
      type: `string`,
      title: `Budget Name`
    },
    
    g_l_account_no: {
      sql: `${CUBE}."G_L_ACCOUNT_NO"`,
      type: `string`,
      title: `G/L Account No`
    },
    
    date: {
      sql: `${CUBE}."DATE"`,
      type: `time`,
      title: `Budget Date`
    },
    
    global_dimension_1_code: {
      sql: `${CUBE}."GLOBAL_DIMENSION_1_CODE"`,
      type: `string`
    },
    
    global_dimension_2_code: {
      sql: `${CUBE}."GLOBAL_DIMENSION_2_CODE"`,
      type: `string`
    },
    
    budget_dimension_1_code: {
      sql: `${CUBE}."BUDGET_DIMENSION_1_CODE"`,
      type: `string`
    },
    
    budget_dimension_2_code: {
      sql: `${CUBE}."BUDGET_DIMENSION_2_CODE"`,
      type: `string`
    },
    
    budget_dimension_3_code: {
      sql: `${CUBE}."BUDGET_DIMENSION_3_CODE"`,
      type: `string`
    },
    
    budget_dimension_4_code: {
      sql: `${CUBE}."BUDGET_DIMENSION_4_CODE"`,
      type: `string`
    },
    
    business_unit_code: {
      sql: `${CUBE}."BUSINESS_UNIT_CODE"`,
      type: `string`
    },
    
    description: {
      sql: `${CUBE}."DESCRIPTION"`,
      type: `string`
    },
    
    dimension_set_id: {
      sql: `${CUBE}."DIMENSION_SET_ID"`,
      type: `number`
    },
    
    last_modified_date_time: {
      sql: `${CUBE}."LAST_MODIFIED_DATE_TIME"`,
      type: `time`
    },
    
    system_id: {
      sql: `${CUBE}."SYSTEM_ID"`,
      type: `string`
    },
    
    system_created_at: {
      sql: `${CUBE}."SYSTEM_CREATED_AT"`,
      type: `time`
    },
    
    system_created_by: {
      sql: `${CUBE}."SYSTEM_CREATED_BY"`,
      type: `string`
    },
    
    system_modified_at: {
      sql: `${CUBE}."SYSTEM_MODIFIED_AT"`,
      type: `time`
    },
    
    system_modified_by: {
      sql: `${CUBE}."SYSTEM_MODIFIED_BY"`,
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
      type: `count`,
      drillMembers: [entry_no, date, g_l_account_no, budget_name]
    },
    
    total_amount: {
      sql: `CAST(${CUBE}."AMOUNT" AS DECIMAL(19,4))`,
      type: `sum`,
      format: `currency`,
      title: `Total Budget Amount`
    },
    
    average_budget_amount: {
      sql: `CAST(${CUBE}."AMOUNT" AS DECIMAL(19,4))`,
      type: `avg`,
      format: `currency`,
      title: `Average Budget Amount`
    },
    
    max_budget_amount: {
      sql: `CAST(${CUBE}."AMOUNT" AS DECIMAL(19,4))`,
      type: `max`,
      format: `currency`,
      title: `Maximum Budget Amount`
    },
    
    min_budget_amount: {
      sql: `CAST(${CUBE}."AMOUNT" AS DECIMAL(19,4))`,
      type: `min`,
      format: `currency`,
      title: `Minimum Budget Amount`
    },
    
    distinct_accounts_budgeted: {
      sql: `${CUBE}."G_L_ACCOUNT_NO"`,
      type: `countDistinct`,
      title: `Number of Accounts Budgeted`
    },
    
    distinct_budget_names: {
      sql: `${CUBE}."BUDGET_NAME"`,
      type: `countDistinct`,
      title: `Number of Budget Versions`
    }
  },
  
  segments: {
    current_budget: {
      sql: `${CUBE}."BUDGET_NAME" = 'CURRENT'`,
      title: `Current Budget`
    },
    
    forecast_budget: {
      sql: `${CUBE}."BUDGET_NAME" LIKE '%FORECAST%'`,
      title: `Forecast Budget`
    },
    
    approved_budget: {
      sql: `${CUBE}."BUDGET_NAME" LIKE '%APPROVED%'`,
      title: `Approved Budget`
    }
  },
  
  pre_aggregations: {
    // Pre-aggregations can be added here for performance optimization
  }
});