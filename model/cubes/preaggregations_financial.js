// High-Frequency Financial Pre-aggregations
// NOTE: These pre-aggregations should be added to the main g_l_entry cube in gl_entry_measures.js
// This file serves as a reference for the pre-aggregation configurations

cube(`g_l_entry_preaggregations`, {
  sql: `SELECT * FROM BUSINESS_CENTRAL.G_L_ENTRY`,
  
  measures: {
    count: {
      type: `count`
    },
    
    total_amount: {
      sql: `CAST(${CUBE}."AMOUNT" AS DECIMAL(19,4))`,
      type: `sum`,
      format: `currency`
    },
    
    total_debit_amount: {
      sql: `CAST(${CUBE}."DEBIT_AMOUNT" AS DECIMAL(19,4))`,
      type: `sum`,
      format: `currency`
    },
    
    total_credit_amount: {
      sql: `CAST(${CUBE}."CREDIT_AMOUNT" AS DECIMAL(19,4))`,
      type: `sum`,
      format: `currency`
    },
    
    total_vat_amount: {
      sql: `CAST(${CUBE}."VAT_AMOUNT" AS DECIMAL(19,4))`,
      type: `sum`,
      format: `currency`
    },
    
    net_amount: {
      sql: `CAST(${CUBE}."DEBIT_AMOUNT" AS DECIMAL(19,4)) - CAST(${CUBE}."CREDIT_AMOUNT" AS DECIMAL(19,4))`,
      type: `sum`,
      format: `currency`
    },
    
    average_transaction_amount: {
      sql: `CAST(${CUBE}."AMOUNT" AS DECIMAL(19,4))`,
      type: `avg`,
      format: `currency`
    },
    
    debit_transaction_count: {
      sql: `CASE WHEN CAST(${CUBE}."DEBIT_AMOUNT" AS DECIMAL(19,4)) > 0 THEN 1 ELSE NULL END`,
      type: `count`
    },
    
    credit_transaction_count: {
      sql: `CASE WHEN CAST(${CUBE}."CREDIT_AMOUNT" AS DECIMAL(19,4)) > 0 THEN 1 ELSE NULL END`,
      type: `count`
    },
    
    reversed_entries_count: {
      sql: `CASE WHEN ${CUBE}."REVERSED" = true THEN 1 ELSE NULL END`,
      type: `count`
    }
  },
  
  dimensions: {
    entry_no: {
      sql: `${CUBE}."ENTRY_NO"`,
      type: `number`,
      primaryKey: true
    },
    
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    },
    
    posting_date: {
      sql: `${CUBE}."POSTING_DATE"`,
      type: `time`
    },
    
    document_type: {
      sql: `${CUBE}."DOCUMENT_TYPE"`,
      type: `string`
    },
    
    document_no: {
      sql: `${CUBE}."DOCUMENT_NO"`,
      type: `string`
    },
    
    g_laccount_no: {
      sql: `${CUBE}."G_LACCOUNT_NO"`,
      type: `string`
    },
    
    g_laccount_name: {
      sql: `${CUBE}."G_LACCOUNT_NAME"`,
      type: `string`
    },
    
    source_type: {
      sql: `${CUBE}."SOURCE_TYPE"`,
      type: `string`
    },
    
    source_no: {
      sql: `${CUBE}."SOURCE_NO"`,
      type: `string`
    },
    
    user_id: {
      sql: `${CUBE}."USER_ID"`,
      type: `string`
    },
    
    global_dimension_1_code: {
      sql: `${CUBE}."GLOBAL_DIMENSION_1_CODE"`,
      type: `string`
    },
    
    global_dimension_2_code: {
      sql: `${CUBE}."GLOBAL_DIMENSION_2_CODE"`,
      type: `string`
    },
    
    business_unit_code: {
      sql: `${CUBE}."BUSINESS_UNIT_CODE"`,
      type: `string`
    },
    
    gen_bus_posting_group: {
      sql: `${CUBE}."GEN_BUS_POSTING_GROUP"`,
      type: `string`
    },
    
    gen_prod_posting_group: {
      sql: `${CUBE}."GEN_PROD_POSTING_GROUP"`,
      type: `string`
    },
    
    journal_batch_name: {
      sql: `${CUBE}."JOURNAL_BATCH_NAME"`,
      type: `string`
    },
    
    vat_bus_posting_group: {
      sql: `${CUBE}."VAT_BUS_POSTING_GROUP"`,
      type: `string`
    },
    
    vat_prod_posting_group: {
      sql: `${CUBE}."VAT_PROD_POSTING_GROUP"`,
      type: `string`
    },
    
    tax_liable: {
      sql: `${CUBE}."TAX_LIABLE"`,
      type: `boolean`
    },
    
    tax_area_code: {
      sql: `${CUBE}."TAX_AREA_CODE"`,
      type: `string`
    }
  },
  
  preAggregations: {
    // Daily Financial Summary
    daily_financial_summary: {
      sqlAlias: `gl_daily_fin_summary`,
      type: `rollup`,
      measures: [
        total_amount,
        total_debit_amount,
        total_credit_amount,
        total_vat_amount,
        net_amount,
        count
      ],
      dimensions: [
        company_id,
        g_laccount_no,
        document_type,
        source_type
      ],
      timeDimension: posting_date,
      granularity: `day`,
      partitionGranularity: `month`,
      refreshKey: {
        every: `1 hour`,
        incremental: true,
        updateWindow: `7 day`
      },
      indexes: {
        main: {
          columns: [`company_id`, `posting_date`, `g_laccount_no`]
        }
      }
    },
    
    // Monthly Account Balances
    monthly_account_balances: {
      sqlAlias: `gl_monthly_balances`,
      type: `rollup`,
      measures: [
        total_amount,
        total_debit_amount,
        total_credit_amount,
        net_amount,
        count,
        debit_transaction_count,
        credit_transaction_count
      ],
      dimensions: [
        company_id,
        g_laccount_no,
        g_laccount_name,
        gen_bus_posting_group,
        gen_prod_posting_group
      ],
      timeDimension: posting_date,
      granularity: `month`,
      partitionGranularity: `year`,
      refreshKey: {
        every: `4 hours`,
        incremental: true,
        updateWindow: `30 day`
      },
      indexes: {
        main: {
          columns: [`company_id`, `posting_date`, `g_laccount_no`]
        },
        posting_groups: {
          columns: [`gen_bus_posting_group`, `gen_prod_posting_group`]
        }
      }
    },
    
    // Quarterly Financial Reports with Dimensions
    quarterly_financial_dimensions: {
      sqlAlias: `gl_quarterly_dims`,
      type: `rollup`,
      measures: [
        total_amount,
        total_debit_amount,
        total_credit_amount,
        total_vat_amount,
        net_amount,
        count
      ],
      dimensions: [
        company_id,
        g_laccount_no,
        global_dimension_1_code,
        global_dimension_2_code,
        business_unit_code,
        document_type
      ],
      timeDimension: posting_date,
      granularity: `quarter`,
      partitionGranularity: `year`,
      refreshKey: {
        every: `6 hours`,
        incremental: true,
        updateWindow: `90 day`
      },
      indexes: {
        main: {
          columns: [`company_id`, `posting_date`]
        },
        dimensions: {
          columns: [`global_dimension_1_code`, `global_dimension_2_code`]
        },
        account: {
          columns: [`g_laccount_no`]
        }
      }
    },
    
    // Year-to-Date Accumulations
    ytd_accumulations: {
      sqlAlias: `gl_ytd_accum`,
      type: `rollup`,
      measures: [
        total_amount,
        total_debit_amount,
        total_credit_amount,
        total_vat_amount,
        net_amount,
        count,
        reversed_entries_count
      ],
      dimensions: [
        company_id,
        g_laccount_no,
        g_laccount_name
      ],
      timeDimension: posting_date,
      granularity: `year`,
      refreshKey: {
        every: `12 hours`,
        incremental: true
      },
      indexes: {
        main: {
          columns: [`company_id`, `posting_date`, `g_laccount_no`]
        }
      }
    },
    
    // Real-time Transaction Monitor (Last 7 Days)
    realtime_transactions: {
      sqlAlias: `gl_realtime_trans`,
      type: `rollup`,
      measures: [
        total_amount,
        count
      ],
      dimensions: [
        company_id,
        document_no,
        document_type,
        g_laccount_no,
        source_type,
        source_no,
        user_id
      ],
      timeDimension: posting_date,
      granularity: `hour`,
      refreshKey: {
        every: `5 minute`,
        incremental: true,
        updateWindow: `7 day`
      },
      buildRangeStart: {
        sql: `SELECT DATE_SUB(NOW(), INTERVAL 7 DAY)`
      },
      buildRangeEnd: {
        sql: `SELECT NOW()`
      },
      indexes: {
        main: {
          columns: [`company_id`, `posting_date`]
        },
        document: {
          columns: [`document_no`, `document_type`]
        }
      }
    },
    
    // High-Value Transaction Summary
    high_value_transactions: {
      sqlAlias: `gl_high_value`,
      type: `rollup`,
      external: false,
      measures: [
        total_amount,
        total_debit_amount,
        total_credit_amount,
        count
      ],
      dimensions: [
        company_id,
        g_laccount_no,
        document_type,
        source_type,
        source_no
      ],
      timeDimension: posting_date,
      granularity: `day`,
      refreshKey: {
        every: `30 minute`,
        incremental: true,
        updateWindow: `30 day`
      },
      indexes: {
        main: {
          columns: [`company_id`, `posting_date`, `g_laccount_no`]
        }
      }
    },
    
    // Document Type Analysis
    document_type_analysis: {
      sqlAlias: `gl_doc_type_analysis`,
      type: `rollup`,
      measures: [
        total_amount,
        total_debit_amount,
        total_credit_amount,
        count,
        average_transaction_amount
      ],
      dimensions: [
        company_id,
        document_type,
        source_type,
        journal_batch_name
      ],
      timeDimension: posting_date,
      granularity: `week`,
      partitionGranularity: `month`,
      refreshKey: {
        every: `2 hours`,
        incremental: true,
        updateWindow: `2 week`
      },
      indexes: {
        main: {
          columns: [`company_id`, `document_type`, `posting_date`]
        }
      }
    },
    
    // Tax and VAT Summary
    tax_vat_summary: {
      sqlAlias: `gl_tax_vat`,
      type: `rollup`,
      measures: [
        total_amount,
        total_vat_amount,
        count
      ],
      dimensions: [
        company_id,
        vat_bus_posting_group,
        vat_prod_posting_group,
        tax_liable,
        tax_area_code
      ],
      timeDimension: posting_date,
      granularity: `month`,
      refreshKey: {
        every: `4 hours`,
        incremental: true,
        updateWindow: `30 day`
      },
      indexes: {
        main: {
          columns: [`company_id`, `posting_date`]
        },
        vat_groups: {
          columns: [`vat_bus_posting_group`, `vat_prod_posting_group`]
        }
      }
    }
  }
});

// GL Account Pre-aggregations
cube(`g_l_account_preaggregations`, {
  extends: g_l_account,
  
  preAggregations: {
    // Account Category Summary
    account_category_summary: {
      sqlAlias: `gl_acct_category`,
      type: `rollup`,
      measures: [
        g_l_account.count,
        g_l_account.total_balance,
        g_l_account.total_debit_amount,
        g_l_account.total_credit_amount,
        g_l_account.posting_accounts_count,
        g_l_account.heading_accounts_count,
        g_l_account.blocked_accounts_count,
        g_l_account.direct_posting_accounts_count
      ],
      dimensions: [
        g_l_account.company_id,
        g_l_account.account_category,
        g_l_account.account_subcategory_descript,
        g_l_account.income_balance,
        g_l_account.account_type
      ],
      refreshKey: {
        every: `12 hours`
      },
      indexes: {
        main: {
          columns: [`company_id`, `account_category`]
        }
      }
    },
    
    // Posting Group Analysis
    posting_group_analysis: {
      sqlAlias: `gl_acct_posting_groups`,
      type: `rollup`,
      measures: [
        g_l_account.count,
        g_l_account.total_balance,
        g_l_account.total_debit_amount,
        g_l_account.total_credit_amount
      ],
      dimensions: [
        g_l_account.company_id,
        g_l_account.gen_bus_posting_group,
        g_l_account.gen_prod_posting_group,
        g_l_account.vat_bus_posting_group,
        g_l_account.vat_prod_posting_group,
        g_l_account.gen_posting_type
      ],
      refreshKey: {
        every: `24 hours`
      },
      indexes: {
        main: {
          columns: [`company_id`]
        },
        posting_groups: {
          columns: [`gen_bus_posting_group`, `gen_prod_posting_group`]
        }
      }
    },
    
    // Income Statement vs Balance Sheet
    financial_statement_summary: {
      sqlAlias: `gl_acct_fin_stmt`,
      type: `rollup`,
      measures: [
        g_l_account.count,
        g_l_account.total_balance,
        g_l_account.income_statement_accounts_count,
        g_l_account.balance_sheet_accounts_count,
        g_l_account.reconciliation_accounts_count,
        g_l_account.tax_liable_accounts_count
      ],
      dimensions: [
        g_l_account.company_id,
        g_l_account.income_balance,
        g_l_account.account_category,
        g_l_account.blocked,
        g_l_account.direct_posting
      ],
      refreshKey: {
        every: `24 hours`
      },
      indexes: {
        main: {
          columns: [`company_id`, `income_balance`]
        }
      }
    }
  }
});

// General Journal Line Pre-aggregations
cube(`gen_journal_line_preaggregations`, {
  extends: gen_journal_line,
  
  preAggregations: {
    // Pending Journal Entries
    pending_journal_entries: {
      sqlAlias: `gj_pending`,
      type: `rollup`,
      measures: [
        gen_journal_line.count
      ],
      dimensions: [
        gen_journal_line.company_id,
        gen_journal_line.journal_template_name,
        gen_journal_line.journal_batch_name,
        gen_journal_line.document_type,
        gen_journal_line.document_no,
        gen_journal_line.line_no
      ],
      timeDimension: gen_journal_line.posting_date,
      granularity: `day`,
      refreshKey: {
        every: `10 minute`
      },
      indexes: {
        main: {
          columns: [`company_id`, `journal_batch_name`, `posting_date`]
        }
      }
    },
    
    // Payment Terms Analysis
    payment_terms_analysis: {
      sqlAlias: `gj_payment_terms`,
      type: `rollup`,
      measures: [
        gen_journal_line.count
      ],
      dimensions: [
        gen_journal_line.company_id,
        gen_journal_line.payment_terms_code,
        gen_journal_line.payment_method_code,
        gen_journal_line.currency_code
      ],
      timeDimension: gen_journal_line.due_date,
      granularity: `week`,
      refreshKey: {
        every: `2 hours`,
        incremental: true,
        updateWindow: `30 day`
      },
      indexes: {
        main: {
          columns: [`company_id`, `due_date`]
        },
        payment: {
          columns: [`payment_terms_code`, `payment_method_code`]
        }
      }
    }
  }
});