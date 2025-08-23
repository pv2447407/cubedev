// Dimensional Analysis Pre-aggregations

cube(`dimension_preaggregations`, {
  extends: dimension,
  
  preAggregations: {
    // Dimension Master Data
    dimension_master: {
      sqlAlias: `dim_master`,
      type: `rollup`,
      measures: [
        dimension.count
      ],
      dimensions: [
        dimension.company_id,
        dimension.code,
        dimension.name,
        dimension.blocked,
        dimension.code_caption,
        dimension.filter_caption
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
  extends: dimension_value,
  
  preAggregations: {
    // Dimension Value Hierarchy
    dimension_value_hierarchy: {
      sqlAlias: `dim_val_hierarchy`,
      type: `rollup`,
      measures: [
        dimension_value.count
      ],
      dimensions: [
        dimension_value.company_id,
        dimension_value.dimension_code,
        dimension_value.code,
        dimension_value.name,
        dimension_value.dimension_value_type,
        dimension_value.totaling,
        dimension_value.indentation,
        dimension_value.global_dimension_no,
        dimension_value.blocked
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
        dimension_value.count
      ],
      dimensions: [
        dimension_value.company_id,
        dimension_value.dimension_code,
        dimension_value.code,
        dimension_value.name,
        dimension_value.global_dimension_no
      ],
      filters: [
        {
          sql: `${dimension_value}."GLOBAL_DIMENSION_NO" IN (1, 2)`
        }
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
  extends: dimension_set_entry,
  
  preAggregations: {
    // Dimension Set Combinations
    dimension_set_combinations: {
      sqlAlias: `dim_set_combo`,
      type: `rollup`,
      measures: [
        dimension_set_entry.count
      ],
      dimensions: [
        dimension_set_entry.company_id,
        dimension_set_entry.dimension_set_id,
        dimension_set_entry.dimension_code,
        dimension_set_entry.dimension_value_code,
        dimension_set_entry.dimension_value_name,
        dimension_set_entry.dimension_name,
        dimension_set_entry.global_dimension_no
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
        dimension_set_entry.count
      ],
      dimensions: [
        dimension_set_entry.company_id,
        dimension_set_entry.dimension_code,
        dimension_set_entry.dimension_name
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
        dimension_set_entry.count
      ],
      dimensions: [
        dimension_set_entry.company_id,
        dimension_set_entry.dimension_set_id
      ],
      segments: [
        dimension_segments.cost_center_a,
        dimension_segments.cost_center_b,
        dimension_segments.sales_department,
        dimension_segments.finance_department,
        dimension_segments.operations_department,
        dimension_segments.project_based,
        dimension_segments.north_region,
        dimension_segments.south_region
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
  extends: g_l_entry,
  
  preAggregations: {
    // Financial Data by Dimensions
    financial_by_dimensions: {
      sqlAlias: `gl_fin_dims`,
      type: `rollup`,
      measures: [
        g_l_entry.total_amount,
        g_l_entry.total_debit_amount,
        g_l_entry.total_credit_amount,
        g_l_entry.count
      ],
      dimensions: [
        g_l_entry.company_id,
        g_l_entry.dimension_set_id,
        g_l_entry.global_dimension_1_code,
        g_l_entry.global_dimension_2_code
      ],
      timeDimension: g_l_entry.posting_date,
      granularity: `month`,
      partitionGranularity: `quarter`,
      refreshKey: {
        every: `2 hours`,
        incremental: true,
        updateWindow: `1 month`
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
        g_l_entry.total_amount,
        g_l_entry.total_debit_amount,
        g_l_entry.total_credit_amount,
        g_l_entry.count
      ],
      dimensions: [
        g_l_entry.company_id,
        g_l_entry.global_dimension_1_code
      ],
      timeDimension: g_l_entry.posting_date,
      granularity: `week`,
      filters: [
        {
          sql: `${g_l_entry}."GLOBAL_DIMENSION_1_CODE" LIKE 'COST%'`
        }
      ],
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
        g_l_entry.total_amount,
        g_l_entry.total_debit_amount,
        g_l_entry.total_credit_amount,
        g_l_entry.net_amount,
        g_l_entry.count
      ],
      dimensions: [
        g_l_entry.company_id,
        g_l_entry.global_dimension_2_code
      ],
      timeDimension: g_l_entry.posting_date,
      granularity: `month`,
      filters: [
        {
          sql: `${g_l_entry}."GLOBAL_DIMENSION_2_CODE" IN ('SALES', 'FINANCE', 'OPS', 'HR', 'IT', 'MARKETING')`
        }
      ],
      refreshKey: {
        every: `2 hours`,
        incremental: true,
        updateWindow: `1 month`
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
        g_l_entry.total_amount,
        g_l_entry.total_debit_amount,
        g_l_entry.total_credit_amount,
        g_l_entry.count
      ],
      dimensions: [
        g_l_entry.company_id,
        g_l_entry.business_unit_code
      ],
      timeDimension: g_l_entry.posting_date,
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
    },
    
    // Hierarchical Dimension Rollup
    hierarchical_dimension_rollup: {
      sqlAlias: `gl_hier_rollup`,
      type: `rollupJoin`,
      measures: [
        g_l_entry.total_amount,
        g_l_entry.count
      ],
      dimensions: [
        dimension_value.dimension_code,
        dimension_value.code,
        dimension_value.name,
        dimension_value.dimension_value_type,
        dimension_value.totaling,
        dimension_value.indentation
      ],
      timeDimension: g_l_entry.posting_date,
      granularity: `month`,
      rollupJoin: {
        g_l_entry: {
          includes: [
            g_l_entry.total_amount,
            g_l_entry.count,
            g_l_entry.company_id,
            g_l_entry.dimension_set_id
          ]
        },
        dimension_set_entry: {
          includes: [
            dimension_set_entry.dimension_code,
            dimension_set_entry.dimension_value_code
          ]
        },
        dimension_value: {
          includes: [
            dimension_value.code,
            dimension_value.name,
            dimension_value.dimension_value_type,
            dimension_value.totaling,
            dimension_value.indentation
          ]
        }
      },
      refreshKey: {
        every: `4 hours`,
        incremental: true,
        updateWindow: `1 month`
      },
      indexes: {
        main: {
          columns: [`dimension_code`, `code`, `posting_date`]
        },
        hierarchy: {
          columns: [`dimension_value_type`, `indentation`]
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
  
  preAggregations: {
    // Cross-Dimensional Matrix
    cross_dimensional_matrix: {
      sqlAlias: `cross_dim_matrix`,
      type: `rollup`,
      measures: [
        {
          name: `total_amount`,
          sql: `amount`,
          type: `sum`
        },
        {
          name: `total_debit`,
          sql: `debit_amount`,
          type: `sum`
        },
        {
          name: `total_credit`,
          sql: `credit_amount`,
          type: `sum`
        },
        {
          name: `transaction_count`,
          type: `count`
        }
      ],
      dimensions: [
        {
          name: `company_id`,
          sql: `"COMPANY_ID"`
        },
        {
          name: `cost_center`,
          sql: `cost_center`
        },
        {
          name: `department`,
          sql: `department`
        },
        {
          name: `project`,
          sql: `project`
        },
        {
          name: `region`,
          sql: `region`
        }
      ],
      timeDimension: {
        name: `posting_date`,
        sql: `"POSTING_DATE"`
      },
      granularity: `month`,
      partitionGranularity: `quarter`,
      refreshKey: {
        every: `2 hours`,
        incremental: true,
        updateWindow: `1 month`
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
        {
          name: `total_amount`,
          sql: `amount`,
          type: `sum`
        },
        {
          name: `transaction_count`,
          type: `count`
        }
      ],
      dimensions: [
        {
          name: `company_id`,
          sql: `"COMPANY_ID"`
        },
        {
          name: `global_dimension_1`,
          sql: `"GLOBAL_DIMENSION_1_CODE"`
        },
        {
          name: `global_dimension_2`,
          sql: `"GLOBAL_DIMENSION_2_CODE"`
        },
        {
          name: `business_unit`,
          sql: `"BUSINESS_UNIT_CODE"`
        }
      ],
      timeDimension: {
        name: `posting_date`,
        sql: `"POSTING_DATE"`
      },
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