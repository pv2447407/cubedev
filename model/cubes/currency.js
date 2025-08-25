cube(`currency`, {
  sql_table: `"BUSINESS_CENTRAL"."CURRENCY"`,
  
  
  data_source: `default`,
  
  joins: {
    company: {
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    payment_tolerance: {
      sql: `${CUBE}."PAYMENT_TOLERANCE"`,
      type: `string`
    },
    
    unrealized_losses_acc: {
      sql: `${CUBE}."UNREALIZED_LOSSES_ACC"`,
      type: `string`
    },
    
    amount_decimal_places: {
      sql: `${CUBE}."AMOUNT_DECIMAL_PLACES"`,
      type: `string`
    },
    
    realized_losses_acc: {
      sql: `${CUBE}."REALIZED_LOSSES_ACC"`,
      type: `string`
    },
    
    conv_lcyrndg_debit_acc: {
      sql: `${CUBE}."CONV_LCYRNDG_DEBIT_ACC"`,
      type: `string`
    },
    
    max_payment_tolerance_amount: {
      sql: `${CUBE}."MAX_PAYMENT_TOLERANCE_AMOUNT"`,
      type: `string`
    },
    
    iso_numeric_code: {
      sql: `${CUBE}."ISO_NUMERIC_CODE"`,
      type: `string`
    },
    
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    },
    
    vendor_balance_due: {
      sql: `${CUBE}."VENDOR_BALANCE_DUE"`,
      type: `string`
    },
    
    code: {
      sql: `${CUBE}."CODE"`,
      type: `string`,
      primary_key: true
    },
    
    vendor_ledg_entries_in_filter: {
      sql: `${CUBE}."VENDOR_LEDG_ENTRIES_IN_FILTER"`,
      type: `boolean`
    },
    
    vat_rounding_type: {
      sql: `${CUBE}."VAT_ROUNDING_TYPE"`,
      type: `string`
    },
    
    system_modified_by: {
      sql: `${CUBE}."SYSTEM_MODIFIED_BY"`,
      type: `string`
    },
    
    invoice_rounding_precision: {
      sql: `${CUBE}."INVOICE_ROUNDING_PRECISION"`,
      type: `string`
    },
    
    unrealized_gains_acc: {
      sql: `${CUBE}."UNREALIZED_GAINS_ACC"`,
      type: `string`
    },
    
    emu_currency: {
      sql: `${CUBE}."EMU_CURRENCY"`,
      type: `boolean`
    },
    
    cust_ledg_entries_in_filter: {
      sql: `${CUBE}."CUST_LEDG_ENTRIES_IN_FILTER"`,
      type: `boolean`
    },
    
    currency_factor: {
      sql: `${CUBE}."CURRENCY_FACTOR"`,
      type: `string`
    },
    
    conv_lcyrndg_credit_acc: {
      sql: `${CUBE}."CONV_LCYRNDG_CREDIT_ACC"`,
      type: `string`
    },
    
    realized_gains_acc: {
      sql: `${CUBE}."REALIZED_GAINS_ACC"`,
      type: `string`
    },
    
    description: {
      sql: `${CUBE}."DESCRIPTION"`,
      type: `string`
    },
    
    customer_outstanding_orders: {
      sql: `${CUBE}."CUSTOMER_OUTSTANDING_ORDERS"`,
      type: `string`
    },
    
    vendor_outstanding_orders: {
      sql: `${CUBE}."VENDOR_OUTSTANDING_ORDERS"`,
      type: `string`
    },
    
    coupled_to_dataverse: {
      sql: `${CUBE}."COUPLED_TO_DATAVERSE"`,
      type: `boolean`
    },
    
    system_id: {
      sql: `${CUBE}."SYSTEM_ID"`,
      type: `string`
    },
    
    invoice_rounding_type: {
      sql: `${CUBE}."INVOICE_ROUNDING_TYPE"`,
      type: `string`
    },
    
    unit_amount_decimal_places: {
      sql: `${CUBE}."UNIT_AMOUNT_DECIMAL_PLACES"`,
      type: `string`
    },
    
    system_created_by: {
      sql: `${CUBE}."SYSTEM_CREATED_BY"`,
      type: `string`
    },
    
    customer_shipped_not_invoiced: {
      sql: `${CUBE}."CUSTOMER_SHIPPED_NOT_INVOICED"`,
      type: `string`
    },
    
    residual_gains_account: {
      sql: `${CUBE}."RESIDUAL_GAINS_ACCOUNT"`,
      type: `string`
    },
    
    symbol: {
      sql: `${CUBE}."SYMBOL"`,
      type: `string`
    },
    
    customer_balance_due: {
      sql: `${CUBE}."CUSTOMER_BALANCE_DUE"`,
      type: `string`
    },
    
    appln_rounding_precision: {
      sql: `${CUBE}."APPLN_ROUNDING_PRECISION"`,
      type: `string`
    },
    
    realized_glgains_account: {
      sql: `${CUBE}."REALIZED_GLGAINS_ACCOUNT"`,
      type: `string`
    },
    
    realized_gllosses_account: {
      sql: `${CUBE}."REALIZED_GLLOSSES_ACCOUNT"`,
      type: `string`
    },
    
    vendor_balance: {
      sql: `${CUBE}."VENDOR_BALANCE"`,
      type: `string`
    },
    
    amount_rounding_precision: {
      sql: `${CUBE}."AMOUNT_ROUNDING_PRECISION"`,
      type: `string`
    },
    
    customer_balance_lcy: {
      sql: `${CUBE}."CUSTOMER_BALANCE_LCY"`,
      type: `string`
    },
    
    customer_balance: {
      sql: `${CUBE}."CUSTOMER_BALANCE"`,
      type: `string`
    },
    
    unit_amount_rounding_precision: {
      sql: `${CUBE}."UNIT_AMOUNT_ROUNDING_PRECISION"`,
      type: `string`
    },
    
    vendor_amt_rcd_not_invoiced: {
      sql: `${CUBE}."VENDOR_AMT_RCD_NOT_INVOICED"`,
      type: `string`
    },
    
    iso_code: {
      sql: `${CUBE}."ISO_CODE"`,
      type: `string`
    },
    
    max_vatdifference_allowed: {
      sql: `${CUBE}."MAX_VATDIFFERENCE_ALLOWED"`,
      type: `string`
    },
    
    residual_losses_account: {
      sql: `${CUBE}."RESIDUAL_LOSSES_ACCOUNT"`,
      type: `string`
    },
    
    vendor_balance_lcy: {
      sql: `${CUBE}."VENDOR_BALANCE_LCY"`,
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
    
    last_date_modified: {
      sql: `${CUBE}."LAST_DATE_MODIFIED"`,
      type: `time`
    },
    
    last_date_adjusted: {
      sql: `${CUBE}."LAST_DATE_ADJUSTED"`,
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
