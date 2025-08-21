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
    code: {
      sql: `${CUBE}."CODE"`,
      type: `string`,
      primary_key: true
    },
    system_id: {
      sql: `${CUBE}."SYSTEM_ID"`,
      type: `string`
    },
    symbol: {
      sql: `${CUBE}."SYMBOL"`,
      type: `string`
    },
    last_date_adjusted: {
      sql: `${CUBE}."LAST_DATE_ADJUSTED"`,
      type: `time`
    },
    max_vatdifference_allowed: {
      sql: `${CUBE}."MAX_VATDIFFERENCE_ALLOWED"`,
      type: `number`
    },
    last_modified_date_time: {
      sql: `${CUBE}."LAST_MODIFIED_DATE_TIME"`,
      type: `time`
    },
    coupled_to_dataverse: {
      sql: `${CUBE}."COUPLED_TO_DATAVERSE"`,
      type: `boolean`
    },
    amount_rounding_precision: {
      sql: `${CUBE}."AMOUNT_ROUNDING_PRECISION"`,
      type: `string`
    },
    iso_numeric_code: {
      sql: `${CUBE}."ISO_NUMERIC_CODE"`,
      type: `string`
    },
    realized_gllosses_account: {
      sql: `${CUBE}."REALIZED_GLLOSSES_ACCOUNT"`,
      type: `string`
    },
    unrealized_losses_acc: {
      sql: `${CUBE}."UNREALIZED_LOSSES_ACC"`,
      type: `string`
    },
    system_created_at: {
      sql: `${CUBE}."SYSTEM_CREATED_AT"`,
      type: `time`
    },
    emu_currency: {
      sql: `${CUBE}."EMU_CURRENCY"`,
      type: `boolean`
    },
    max_payment_tolerance_amount: {
      sql: `${CUBE}."MAX_PAYMENT_TOLERANCE_AMOUNT"`,
      type: `string`
    },
    vendor_balance: {
      sql: `${CUBE}."VENDOR_BALANCE"`,
      type: `string`
    },
    currency_factor: {
      sql: `${CUBE}."CURRENCY_FACTOR"`,
      type: `number`
    },
    payment_tolerance: {
      sql: `${CUBE}."PAYMENT_TOLERANCE"`,
      type: `number`
    },
    residual_gains_account: {
      sql: `${CUBE}."RESIDUAL_GAINS_ACCOUNT"`,
      type: `string`
    },
    customer_balance_due: {
      sql: `${CUBE}."CUSTOMER_BALANCE_DUE"`,
      type: `string`
    },
    system_created_by: {
      sql: `${CUBE}."SYSTEM_CREATED_BY"`,
      type: `string`
    },
    system_modified_at: {
      sql: `${CUBE}."SYSTEM_MODIFIED_AT"`,
      type: `time`
    },
    customer_balance_lcy: {
      sql: `${CUBE}."CUSTOMER_BALANCE_LCY"`,
      type: `string`
    },
    unit_amount_rounding_precision: {
      sql: `${CUBE}."UNIT_AMOUNT_ROUNDING_PRECISION"`,
      type: `string`
    },
    vat_rounding_type: {
      sql: `${CUBE}."VAT_ROUNDING_TYPE"`,
      type: `string`
    },
    unit_amount_decimal_places: {
      sql: `${CUBE}."UNIT_AMOUNT_DECIMAL_PLACES"`,
      type: `string`
    },
    realized_losses_acc: {
      sql: `${CUBE}."REALIZED_LOSSES_ACC"`,
      type: `string`
    },
    last_date_modified: {
      sql: `${CUBE}."LAST_DATE_MODIFIED"`,
      type: `time`
    },
    invoice_rounding_type: {
      sql: `${CUBE}."INVOICE_ROUNDING_TYPE"`,
      type: `string`
    },
    customer_shipped_not_invoiced: {
      sql: `${CUBE}."CUSTOMER_SHIPPED_NOT_INVOICED"`,
      type: `number`
    },
    conv_lcyrndg_credit_acc: {
      sql: `${CUBE}."CONV_LCYRNDG_CREDIT_ACC"`,
      type: `string`
    },
    description: {
      sql: `${CUBE}."DESCRIPTION"`,
      type: `string`
    },
    customer_outstanding_orders: {
      sql: `${CUBE}."CUSTOMER_OUTSTANDING_ORDERS"`,
      type: `number`
    },
    system_modified_by: {
      sql: `${CUBE}."SYSTEM_MODIFIED_BY"`,
      type: `string`
    },
    vendor_outstanding_orders: {
      sql: `${CUBE}."VENDOR_OUTSTANDING_ORDERS"`,
      type: `number`
    },
    realized_glgains_account: {
      sql: `${CUBE}."REALIZED_GLGAINS_ACCOUNT"`,
      type: `string`
    },
    vendor_balance_lcy: {
      sql: `${CUBE}."VENDOR_BALANCE_LCY"`,
      type: `string`
    },
    customer_balance: {
      sql: `${CUBE}."CUSTOMER_BALANCE"`,
      type: `string`
    },
    unrealized_gains_acc: {
      sql: `${CUBE}."UNREALIZED_GAINS_ACC"`,
      type: `string`
    },
    invoice_rounding_precision: {
      sql: `${CUBE}."INVOICE_ROUNDING_PRECISION"`,
      type: `number`
    },
    appln_rounding_precision: {
      sql: `${CUBE}."APPLN_ROUNDING_PRECISION"`,
      type: `number`
    },
    conv_lcyrndg_debit_acc: {
      sql: `${CUBE}."CONV_LCYRNDG_DEBIT_ACC"`,
      type: `string`
    },
    realized_gains_acc: {
      sql: `${CUBE}."REALIZED_GAINS_ACC"`,
      type: `string`
    },
    vendor_ledg_entries_in_filter: {
      sql: `${CUBE}."VENDOR_LEDG_ENTRIES_IN_FILTER"`,
      type: `boolean`
    },
    iso_code: {
      sql: `${CUBE}."ISO_CODE"`,
      type: `string`
    },
    vendor_balance_due: {
      sql: `${CUBE}."VENDOR_BALANCE_DUE"`,
      type: `string`
    },
    amount_decimal_places: {
      sql: `${CUBE}."AMOUNT_DECIMAL_PLACES"`,
      type: `string`
    },
    vendor_amt_rcd_not_invoiced: {
      sql: `${CUBE}."VENDOR_AMT_RCD_NOT_INVOICED"`,
      type: `number`
    },
    cust_ledg_entries_in_filter: {
      sql: `${CUBE}."CUST_LEDG_ENTRIES_IN_FILTER"`,
      type: `boolean`
    },
    residual_losses_account: {
      sql: `${CUBE}."RESIDUAL_LOSSES_ACCOUNT"`,
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
