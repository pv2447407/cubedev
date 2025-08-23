// Dimensional Analysis Pre-aggregations

cube(`dimension_preaggregations`, {
  sql: `SELECT * FROM BUSINESS_CENTRAL.DIMENSION`,
  
  measures: {
    count: {
      type: `count`
    }
  },
  
  dimensions: {
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    },
    
    code: {
      sql: `${CUBE}."CODE"`,
      type: `string`,
      primaryKey: true
    },
    
    name: {
      sql: `${CUBE}."NAME"`,
      type: `string`
    },
    
    blocked: {
      sql: `${CUBE}."BLOCKED"`,
      type: `boolean`
    },
    
    code_caption: {
      sql: `${CUBE}."CODE_CAPTION"`,
      type: `string`
    },
    
    filter_caption: {
      sql: `${CUBE}."FILTER_CAPTION"`,
      type: `string`
    }
  },
  
  preAggregations: {
    // Dimension Master Data
    dimension_master: {
      sqlAlias: `dim_master`,
      type: `rollup`,
      measures: [
        count
      ],
      dimensions: [
        company_id,
        code,
        name,
        blocked,
        code_caption,
        filter_caption
      ],
      refreshKey: {
        every: `24 hours`
      },
      indexes: {
        main: {
          columns: [`company_id`, `code`]
        }
      }
    }
  }
});

cube(`dimension_value_preaggregations`, {
  sql: `SELECT * FROM BUSINESS_CENTRAL.DIMENSION_VALUE`,
  
  measures: {
    count: {
      type: `count`
    }
  },
  
  dimensions: {
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    },
    
    dimension_code: {
      sql: `${CUBE}."DIMENSION_CODE"`,
      type: `string`
    },
    
    code: {
      sql: `${CUBE}."CODE"`,
      type: `string`,
      primaryKey: true
    },
    
    name: {
      sql: `${CUBE}."NAME"`,
      type: `string`
    },
    
    dimension_value_type: {
      sql: `${CUBE}."DIMENSION_VALUE_TYPE"`,
      type: `string`
    },
    
    totaling: {
      sql: `${CUBE}."TOTALING"`,
      type: `string`
    },
    
    indentation: {
      sql: `${CUBE}."INDENTATION"`,
      type: `number`
    },
    
    global_dimension_no: {
      sql: `${CUBE}."GLOBAL_DIMENSION_NO"`,
      type: `number`
    },
    
    blocked: {
      sql: `${CUBE}."BLOCKED"`,
      type: `boolean`
    }
  },
  
  preAggregations: {
    // Dimension Value Hierarchy
    dimension_value_hierarchy: {
      sqlAlias: `dim_val_hierarchy`,
      type: `rollup`,
      measures: [
        count
      ],
      dimensions: [
        company_id,
        dimension_code,
        code,
        name,
        dimension_value_type,
        totaling,
        indentation,
        global_dimension_no,
        blocked
      ],
      refreshKey: {
        every: `12 hours`
      },
      indexes: {
        main: {
          columns: [`company_id`, `dimension_code`, `code`]
        },
        hierarchy: {
          columns: [`dimension_value_type`, `indentation`]
        },
        global: {
          columns: [`global_dimension_no`]
        }
      }
    },
    
    // Global Dimensions Summary
    global_dimensions: {
      sqlAlias: `dim_val_global`,
      type: `rollup`,
      measures: [
        count
      ],
      dimensions: [
        company_id,
        dimension_code,
        code,
        name,
        global_dimension_no
      ],
      refreshKey: {
        every: `6 hours`
      },
      indexes: {
        main: {
          columns: [`company_id`, `global_dimension_no`, `code`]
        }
      }
    }
  }
});

cube(`dimension_set_entry_preaggregations`, {
  sql: `SELECT * FROM BUSINESS_CENTRAL.DIMENSION_SET_ENTRY`,
  
  measures: {
    count: {
      type: `count`
    }
  },
  
  dimensions: {
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    },
    
    dimension_set_id: {
      sql: `${CUBE}."DIMENSION_SET_ID"`,
      type: `number`,
      primaryKey: true
    },
    
    dimension_code: {
      sql: `${CUBE}."DIMENSION_CODE"`,
      type: `string`
    },
    
    dimension_value_code: {
      sql: `${CUBE}."DIMENSION_VALUE_CODE"`,
      type: `string`
    },
    
    dimension_value_name: {
      sql: `${CUBE}."DIMENSION_VALUE_NAME"`,
      type: `string`
    },
    
    dimension_name: {
      sql: `${CUBE}."DIMENSION_NAME"`,
      type: `string`
    },
    
    global_dimension_no: {
      sql: `${CUBE}."GLOBAL_DIMENSION_NO"`,
      type: `number`
    }
  },
  
  preAggregations: {
    // Dimension Set Combinations
    dimension_set_combinations: {
      sqlAlias: `dim_set_combo`,
      type: `rollup`,
      measures: [
        count
      ],
      dimensions: [
        company_id,
        dimension_set_id,
        dimension_code,
        dimension_value_code,
        dimension_value_name,
        dimension_name,
        global_dimension_no
      ],
      refreshKey: {
        every: `4 hours`
      },
      indexes: {
        main: {
          columns: [`company_id`, `dimension_set_id`]
        },
        dimension: {
          columns: [`dimension_code`, `dimension_value_code`]
        },
        global: {
          columns: [`global_dimension_no`]
        }
      }
    },
    
    // Dimension Usage Analysis
    dimension_usage_analysis: {
      sqlAlias: `dim_usage`,
      type: `rollup`,
      measures: [
        count
      ],
      dimensions: [
        company_id,
        dimension_code,
        dimension_name
      ],
      refreshKey: {
        every: `12 hours`
      },
      indexes: {
        main: {
          columns: [`company_id`, `dimension_code`]
        }
      }
    },
    
    // Multi-Dimensional Cube
    multi_dimensional_cube: {
      sqlAlias: `dim_multi_cube`,
      type: `rollup`,
      measures: [
        count
      ],
      dimensions: [
        company_id,
        dimension_set_id
      ],
      refreshKey: {
        every: `6 hours`
      },
      indexes: {
        main: {
          columns: [`company_id`, `dimension_set_id`]
        }
      }
    }
  }
});

// GL Entry with Dimensional Analysis
cube(`gl_entry_dimensional_preaggregations`, {
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
    
    net_amount: {
      sql: `CAST(${CUBE}."DEBIT_AMOUNT" AS DECIMAL(19,4)) - CAST(${CUBE}."CREDIT_AMOUNT" AS DECIMAL(19,4))`,
      type: `sum`,
      format: `currency`
    }
  },
  
  dimensions: {
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    },
    
    posting_date: {
      sql: `${CUBE}."POSTING_DATE"`,
      type: `time`
    },
    
    dimension_set_id: {
      sql: `${CUBE}."DIMENSION_SET_ID"`,
      type: `number`
    },
    
    global_dimension_1_code: {
      sql: `${CUBE}."GLOBAL_DIMENSION_1_CODE"`,
      type: `string`
    },
    
    global_dimension_2_code: {
      sql: `${CUBE}."GLOBAL_DIMENSION_2_CODE"`,
      type: `string`
    }
  },
  
  preAggregations: {
    // Financial Data by Dimensions
    financial_by_dimensions: {
      sqlAlias: `gl_fin_dims`,
      type: `rollup`,
      measures: [
        total_amount,
        total_debit_amount,
        total_credit_amount,
        count
      ],
      dimensions: [
        company_id,
        dimension_set_id,
        global_dimension_1_code,
        global_dimension_2_code
      ],
      timeDimension: posting_date,
      granularity: `month`,
      partitionGranularity: `quarter`,
      refreshKey: {
        every: `2 hours`,
        incremental: true,
        updateWindow: `30 day`
      },
      indexes: {
        main: {
          columns: [`company_id`, `dimension_set_id`, `posting_date`]
        },
        global_dims: {
          columns: [`global_dimension_1_code`, `global_dimension_2_code`]
        }
      }
    },
    
    // Cost Center Analysis
    cost_center_analysis: {
      sqlAlias: `gl_cost_centers`,
      type: `rollup`,
      measures: [
        total_amount,
        total_debit_amount,
        total_credit_amount,
        count
      ],
      dimensions: [
        company_id,
        global_dimension_1_code
      ],
      timeDimension: posting_date,
      granularity: `week`,
      refreshKey: {
        every: `1 hour`,
        incremental: true,
        updateWindow: `2 week`
      },
      indexes: {
        main: {
          columns: [`company_id`, `global_dimension_1_code`, `posting_date`]
        }
      }
    },
    
    // Department Performance
    department_performance: {
      sqlAlias: `gl_dept_perf`,
      type: `rollup`,
      measures: [
        total_amount,
        total_debit_amount,
        total_credit_amount,
        net_amount,
        count
      ],
      dimensions: [
        company_id,
        global_dimension_2_code
      ],
      timeDimension: posting_date,
      granularity: `month`,
      refreshKey: {
        every: `2 hours`,
        incremental: true,
        updateWindow: `30 day`
      },
      indexes: {
        main: {
          columns: [`company_id`, `global_dimension_2_code`, `posting_date`]
        }
      }
    },
    
    // Business Unit Analysis
    business_unit_analysis: {
      sqlAlias: `gl_bus_unit`,
      type: `rollup`,
      measures: [
        total_amount,
        total_debit_amount,
        total_credit_amount,
        count
      ],
      dimensions: [
        company_id,
        business_unit_code
      ],
      timeDimension: posting_date,
      granularity: `day`,
      partitionGranularity: `month`,
      refreshKey: {
        every: `30 minute`,
        incremental: true,
        updateWindow: `7 day`
      },
      indexes: {
        main: {
          columns: [`company_id`, `business_unit_code`, `posting_date`]
        }
      }
    }
  }
});

// Cross-Dimensional Analysis
cube(`cross_dimensional_analysis`, {
  sql: `
    SELECT 
      gle."COMPANY_ID",
      gle."POSTING_DATE",
      gle."DIMENSION_SET_ID",
      gle."GLOBAL_DIMENSION_1_CODE",
      gle."GLOBAL_DIMENSION_2_CODE",
      gle."BUSINESS_UNIT_CODE",
      dse1."DIMENSION_VALUE_CODE" as cost_center,
      dse2."DIMENSION_VALUE_CODE" as department,
      dse3."DIMENSION_VALUE_CODE" as project,
      dse4."DIMENSION_VALUE_CODE" as region,
      CAST(gle."AMOUNT" AS DECIMAL(19,4)) as amount,
      CAST(gle."DEBIT_AMOUNT" AS DECIMAL(19,4)) as debit_amount,
      CAST(gle."CREDIT_AMOUNT" AS DECIMAL(19,4)) as credit_amount
    FROM BUSINESS_CENTRAL.G_L_ENTRY gle
    LEFT JOIN BUSINESS_CENTRAL.DIMENSION_SET_ENTRY dse1 
      ON gle."DIMENSION_SET_ID" = dse1."DIMENSION_SET_ID" 
      AND dse1."DIMENSION_CODE" = 'COSTCENTER'
      AND gle."COMPANY_ID" = dse1."COMPANY_ID"
    LEFT JOIN BUSINESS_CENTRAL.DIMENSION_SET_ENTRY dse2 
      ON gle."DIMENSION_SET_ID" = dse2."DIMENSION_SET_ID" 
      AND dse2."DIMENSION_CODE" = 'DEPARTMENT'
      AND gle."COMPANY_ID" = dse2."COMPANY_ID"
    LEFT JOIN BUSINESS_CENTRAL.DIMENSION_SET_ENTRY dse3 
      ON gle."DIMENSION_SET_ID" = dse3."DIMENSION_SET_ID" 
      AND dse3."DIMENSION_CODE" = 'PROJECT'
      AND gle."COMPANY_ID" = dse3."COMPANY_ID"
    LEFT JOIN BUSINESS_CENTRAL.DIMENSION_SET_ENTRY dse4 
      ON gle."DIMENSION_SET_ID" = dse4."DIMENSION_SET_ID" 
      AND dse4."DIMENSION_CODE" = 'REGION'
      AND gle."COMPANY_ID" = dse4."COMPANY_ID"
  `,
  
  measures: {
    total_amount: {
      sql: `amount`,
      type: `sum`,
      format: `currency`
    },
    
    total_debit: {
      sql: `debit_amount`,
      type: `sum`,
      format: `currency`
    },
    
    total_credit: {
      sql: `credit_amount`,
      type: `sum`,
      format: `currency`
    },
    
    transaction_count: {
      type: `count`
    }
  },
  
  dimensions: {
    company_id: {
      sql: `"COMPANY_ID"`,
      type: `string`
    },
    
    posting_date: {
      sql: `"POSTING_DATE"`,
      type: `time`
    },
    
    cost_center: {
      sql: `cost_center`,
      type: `string`
    },
    
    department: {
      sql: `department`,
      type: `string`
    },
    
    project: {
      sql: `project`,
      type: `string`
    },
    
    region: {
      sql: `region`,
      type: `string`
    },
    
    global_dimension_1_code: {
      sql: `"GLOBAL_DIMENSION_1_CODE"`,
      type: `string`
    },
    
    global_dimension_2_code: {
      sql: `"GLOBAL_DIMENSION_2_CODE"`,
      type: `string`
    },
    
    business_unit_code: {
      sql: `"BUSINESS_UNIT_CODE"`,
      type: `string`
    }
  },
  
  preAggregations: {
    // Cross-Dimensional Matrix
    cross_dimensional_matrix: {
      sqlAlias: `cross_dim_matrix`,
      type: `rollup`,
      measures: [
        total_amount,
        total_debit,
        total_credit,
        transaction_count
      ],
      dimensions: [
        company_id,
        cost_center,
        department,
        project,
        region
      ],
      timeDimension: posting_date,
      granularity: `month`,
      partitionGranularity: `quarter`,
      refreshKey: {
        every: `2 hours`,
        incremental: true,
        updateWindow: `30 day`
      },
      indexes: {
        main: {
          columns: [`company_id`, `posting_date`]
        },
        dimensions: {
          columns: [`cost_center`, `department`, `project`, `region`]
        }
      }
    },
    
    // OLAP-Style Cube
    olap_cube: {
      sqlAlias: `olap_dim_cube`,
      type: `rollup`,
      measures: [
        total_amount,
        transaction_count
      ],
      dimensions: [
        company_id,
        global_dimension_1_code,
        global_dimension_2_code,
        business_unit_code
      ],
      timeDimension: posting_date,
      granularity: `day`,
      partitionGranularity: `month`,
      refreshKey: {
        every: `15 minute`,
        incremental: true,
        updateWindow: `3 day`
      },
      indexes: {
        main: {
          columns: [`company_id`, `posting_date`]
        },
        global_dims: {
          columns: [`global_dimension_1`, `global_dimension_2`]
        }
      }
    }
  }
});