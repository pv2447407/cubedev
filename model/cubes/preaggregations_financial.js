// High-Frequency Financial Pre-aggregations

cube(`g_l_entry_preaggregations`, {
  extends: g_l_entry,
  
  preAggregations: {
    // Daily Financial Summary
    daily_financial_summary: {
      sqlAlias: `gl_daily_fin_summary`,
      type: `rollup`,
      measures: [
        g_l_entry.total_amount,
        g_l_entry.total_debit_amount,
        g_l_entry.total_credit_amount,
        g_l_entry.total_vat_amount,
        g_l_entry.net_amount,
        g_l_entry.count
      ],
      dimensions: [
        g_l_entry.company_id,
        g_l_entry.g_laccount_no,
        g_l_entry.document_type,
        g_l_entry.source_type
      ],
      timeDimension: g_l_entry.posting_date,
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
        g_l_entry.total_amount,
        g_l_entry.total_debit_amount,
        g_l_entry.total_credit_amount,
        g_l_entry.net_amount,
        g_l_entry.count,
        g_l_entry.debit_transaction_count,
        g_l_entry.credit_transaction_count
      ],
      dimensions: [
        g_l_entry.company_id,
        g_l_entry.g_laccount_no,
        g_l_entry.g_laccount_name,
        g_l_entry.gen_bus_posting_group,
        g_l_entry.gen_prod_posting_group
      ],
      timeDimension: g_l_entry.posting_date,
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
        g_l_entry.total_amount,
        g_l_entry.total_debit_amount,
        g_l_entry.total_credit_amount,
        g_l_entry.total_vat_amount,
        g_l_entry.net_amount,
        g_l_entry.count
      ],
      dimensions: [
        g_l_entry.company_id,
        g_l_entry.g_laccount_no,
        g_l_entry.global_dimension_1_code,
        g_l_entry.global_dimension_2_code,
        g_l_entry.business_unit_code,
        g_l_entry.document_type
      ],
      timeDimension: g_l_entry.posting_date,
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
        g_l_entry.total_amount,
        g_l_entry.total_debit_amount,
        g_l_entry.total_credit_amount,
        g_l_entry.total_vat_amount,
        g_l_entry.net_amount,
        g_l_entry.count,
        g_l_entry.reversed_entries_count
      ],
      dimensions: [
        g_l_entry.company_id,
        g_l_entry.g_laccount_no,
        g_l_entry.g_laccount_name
      ],
      timeDimension: g_l_entry.posting_date,
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
        g_l_entry.total_amount,
        g_l_entry.count
      ],
      dimensions: [
        g_l_entry.company_id,
        g_l_entry.document_no,
        g_l_entry.document_type,
        g_l_entry.g_laccount_no,
        g_l_entry.source_type,
        g_l_entry.source_no,
        g_l_entry.user_id
      ],
      timeDimension: g_l_entry.posting_date,
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
        g_l_entry.total_amount,
        g_l_entry.total_debit_amount,
        g_l_entry.total_credit_amount,
        g_l_entry.count
      ],
      dimensions: [
        g_l_entry.company_id,
        g_l_entry.g_laccount_no,
        g_l_entry.document_type,
        g_l_entry.source_type,
        g_l_entry.source_no
      ],
      timeDimension: g_l_entry.posting_date,
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
        g_l_entry.total_amount,
        g_l_entry.total_debit_amount,
        g_l_entry.total_credit_amount,
        g_l_entry.count,
        g_l_entry.average_transaction_amount
      ],
      dimensions: [
        g_l_entry.company_id,
        g_l_entry.document_type,
        g_l_entry.source_type,
        g_l_entry.journal_batch_name
      ],
      timeDimension: g_l_entry.posting_date,
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
        g_l_entry.total_amount,
        g_l_entry.total_vat_amount,
        g_l_entry.count
      ],
      dimensions: [
        g_l_entry.company_id,
        g_l_entry.vat_bus_posting_group,
        g_l_entry.vat_prod_posting_group,
        g_l_entry.tax_liable,
        g_l_entry.tax_area_code
      ],
      timeDimension: g_l_entry.posting_date,
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