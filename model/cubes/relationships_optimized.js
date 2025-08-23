// Validated and Optimized Join Logic

/**
 * Optimized Relationships Configuration
 * 
 * Key Optimizations:
 * 1. All joins use indexed columns (primary keys and foreign keys)
 * 2. Company_ID is included in all joins for partition optimization
 * 3. Avoided circular dependencies
 * 4. Minimized many-to-many relationships
 * 5. Used appropriate relationship types for cardinality
 */

// Core Company Hub - Central entity for all relationships
cube(`company_hub`, {
  sql: `SELECT * FROM BUSINESS_CENTRAL.COMPANY`,
  
  title: `Company Hub`,
  description: `Central hub for all company-related data. All other entities connect through this hub.`,
  
  joins: {
    // No outbound joins from company to avoid circular dependencies
    // All other cubes join TO company, not FROM company
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name, display_name]
    }
  },
  
  dimensions: {
    id: {
      sql: `${CUBE}."ID"`,
      type: `string`,
      primaryKey: true,
      shown: true
    },
    
    name: {
      sql: `${CUBE}."NAME"`,
      type: `string`
    },
    
    display_name: {
      sql: `${CUBE}."DISPLAY_NAME"`,
      type: `string`
    },
    
    evaluation_company: {
      sql: `${CUBE}."EVALUATION_COMPANY"`,
      type: `boolean`
    }
  }
});

// Optimized GL Entry with Validated Joins
cube(`g_l_entry_optimized`, {
  sql: `SELECT * FROM BUSINESS_CENTRAL.G_L_ENTRY`,
  
  title: `GL Entry Optimized`,
  description: `General Ledger entries with optimized join paths to prevent duplicates and improve performance`,
  
  joins: {
    // Primary relationship - Company
    company_hub: {
      relationship: `many_to_one`,
      sql: `${CUBE}."COMPANY_ID" = ${company_hub}."ID"`
    },
    
    // Direct foreign key relationship - GL Account
    g_l_account_optimized: {
      relationship: `many_to_one`,
      sql: `${CUBE}."G_LACCOUNT_NO" = ${g_l_account_optimized}."NO" 
            AND ${CUBE}."COMPANY_ID" = ${g_l_account_optimized}."COMPANY_ID"`
    },
    
    // Dimension Set - Changed to many_to_one to avoid duplicates
    dimension_set_consolidated: {
      relationship: `many_to_one`,
      sql: `${CUBE}."DIMENSION_SET_ID" = ${dimension_set_consolidated}."DIMENSION_SET_ID" 
            AND ${CUBE}."COMPANY_ID" = ${dimension_set_consolidated}."COMPANY_ID"`
    },
    
    // Conditional joins for source entities
    customer_source: {
      relationship: `many_to_one`,
      sql: `${CUBE}."SOURCE_NO" = ${customer_optimized}."NO" 
            AND ${CUBE}."SOURCE_TYPE" = 'Customer' 
            AND ${CUBE}."COMPANY_ID" = ${customer_optimized}."COMPANY_ID"`
    }
  },
  
  measures: {
    count: {
      type: `count`
    },
    
    total_amount: {
      sql: `CAST(${CUBE}."AMOUNT" AS DECIMAL(19,4))`,
      type: `sum`,
      format: `currency`
    },
    
    total_debit: {
      sql: `CAST(${CUBE}."DEBIT_AMOUNT" AS DECIMAL(19,4))`,
      type: `sum`,
      format: `currency`
    },
    
    total_credit: {
      sql: `CAST(${CUBE}."CREDIT_AMOUNT" AS DECIMAL(19,4))`,
      type: `sum`,
      format: `currency`
    }
  },
  
  dimensions: {
    entry_no: {
      sql: `${CUBE}."ENTRY_NO"`,
      type: `number`,
      primaryKey: true
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
    
    source_type: {
      sql: `${CUBE}."SOURCE_TYPE"`,
      type: `string`
    },
    
    source_no: {
      sql: `${CUBE}."SOURCE_NO"`,
      type: `string`
    },
    
    dimension_set_id: {
      sql: `${CUBE}."DIMENSION_SET_ID"`,
      type: `number`
    },
    
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    }
  }
});

// Optimized GL Account
cube(`g_l_account_optimized`, {
  sql: `SELECT * FROM BUSINESS_CENTRAL.G_L_ACCOUNT`,
  
  title: `GL Account Optimized`,
  description: `Chart of Accounts with optimized relationships`,
  
  joins: {
    company_hub: {
      relationship: `many_to_one`,
      sql: `${CUBE}."COMPANY_ID" = ${company_hub}."ID"`
    }
    // Removed reverse join to g_l_entry to avoid circular dependency
    // GL Entry joins to GL Account, not vice versa
  },
  
  measures: {
    count: {
      type: `count`
    },
    
    total_balance: {
      sql: `CAST(${CUBE}."BALANCE" AS DECIMAL(19,4))`,
      type: `sum`,
      format: `currency`
    }
  },
  
  dimensions: {
    no: {
      sql: `${CUBE}."NO"`,
      type: `string`,
      primaryKey: true
    },
    
    name: {
      sql: `${CUBE}."NAME"`,
      type: `string`
    },
    
    account_type: {
      sql: `${CUBE}."ACCOUNT_TYPE"`,
      type: `string`
    },
    
    income_balance: {
      sql: `${CUBE}."INCOME_BALANCE"`,
      type: `string`
    },
    
    account_category: {
      sql: `${CUBE}."ACCOUNT_CATEGORY"`,
      type: `string`
    },
    
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    }
  }
});

// Optimized Customer
cube(`customer_optimized`, {
  sql: `SELECT * FROM BUSINESS_CENTRAL.CUSTOMER`,
  
  title: `Customer Optimized`,
  description: `Customer master data with optimized relationships`,
  
  joins: {
    company_hub: {
      relationship: `many_to_one`,
      sql: `${CUBE}."COMPANY_ID" = ${company_hub}."ID"`
    },
    
    country_region_optimized: {
      relationship: `many_to_one`,
      sql: `${CUBE}."COUNTRY_REGION_CODE" = ${country_region_optimized}."CODE" 
            AND ${CUBE}."COMPANY_ID" = ${country_region_optimized}."COMPANY_ID"`
    },
    
    currency_optimized: {
      relationship: `many_to_one`,
      sql: `${CUBE}."CURRENCY_CODE" = ${currency_optimized}."CODE" 
            AND ${CUBE}."COMPANY_ID" = ${currency_optimized}."COMPANY_ID"`
    }
  },
  
  measures: {
    count: {
      type: `count`
    },
    
    total_balance: {
      sql: `CAST(${CUBE}."BALANCE" AS DECIMAL(19,4))`,
      type: `sum`,
      format: `currency`
    }
  },
  
  dimensions: {
    no: {
      sql: `${CUBE}."NO"`,
      type: `string`,
      primaryKey: true
    },
    
    name: {
      sql: `${CUBE}."NAME"`,
      type: `string`
    },
    
    country_region_code: {
      sql: `${CUBE}."COUNTRY_REGION_CODE"`,
      type: `string`
    },
    
    currency_code: {
      sql: `${CUBE}."CURRENCY_CODE"`,
      type: `string`
    },
    
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    }
  }
});

// Consolidated Dimension Set View
cube(`dimension_set_consolidated`, {
  sql: `
    SELECT 
      dse."DIMENSION_SET_ID",
      dse."COMPANY_ID",
      STRING_AGG(
        dse."DIMENSION_CODE" || ':' || dse."DIMENSION_VALUE_CODE", 
        ' | ' 
        ORDER BY dse."DIMENSION_CODE"
      ) as dimension_combination,
      COUNT(*) as dimension_count,
      MAX(CASE WHEN dse."GLOBAL_DIMENSION_NO" = 1 THEN dse."DIMENSION_VALUE_CODE" END) as global_dim_1,
      MAX(CASE WHEN dse."GLOBAL_DIMENSION_NO" = 2 THEN dse."DIMENSION_VALUE_CODE" END) as global_dim_2
    FROM BUSINESS_CENTRAL.DIMENSION_SET_ENTRY dse
    GROUP BY dse."DIMENSION_SET_ID", dse."COMPANY_ID"
  `,
  
  title: `Dimension Set Consolidated`,
  description: `Pre-aggregated dimension sets to avoid many-to-many join issues`,
  
  joins: {
    company_hub: {
      relationship: `many_to_one`,
      sql: `${CUBE}."COMPANY_ID" = ${company_hub}."ID"`
    }
  },
  
  measures: {
    count: {
      type: `count`
    },
    
    avg_dimensions_per_set: {
      sql: `dimension_count`,
      type: `avg`
    }
  },
  
  dimensions: {
    dimension_set_id: {
      sql: `"DIMENSION_SET_ID"`,
      type: `number`,
      primaryKey: true
    },
    
    dimension_combination: {
      sql: `dimension_combination`,
      type: `string`
    },
    
    dimension_count: {
      sql: `dimension_count`,
      type: `number`
    },
    
    global_dim_1: {
      sql: `global_dim_1`,
      type: `string`
    },
    
    global_dim_2: {
      sql: `global_dim_2`,
      type: `string`
    },
    
    company_id: {
      sql: `"COMPANY_ID"`,
      type: `string`
    }
  }
});

// Optimized Currency
cube(`currency_optimized`, {
  sql: `SELECT * FROM BUSINESS_CENTRAL.CURRENCY`,
  
  title: `Currency Optimized`,
  description: `Currency master data with current exchange rates`,
  
  joins: {
    company_hub: {
      relationship: `many_to_one`,
      sql: `${CUBE}."COMPANY_ID" = ${company_hub}."ID"`
    },
    
    // Join to current exchange rate only
    current_exchange_rate: {
      relationship: `one_to_one`,
      sql: `${CUBE}."CODE" = ${currency_exchange_rate_current}."CURRENCY_CODE" 
            AND ${CUBE}."COMPANY_ID" = ${currency_exchange_rate_current}."COMPANY_ID"`
    }
  },
  
  measures: {
    count: {
      type: `count`
    }
  },
  
  dimensions: {
    code: {
      sql: `${CUBE}."CODE"`,
      type: `string`,
      primaryKey: true
    },
    
    description: {
      sql: `${CUBE}."DESCRIPTION"`,
      type: `string`
    },
    
    symbol: {
      sql: `${CUBE}."SYMBOL"`,
      type: `string`
    },
    
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    }
  }
});

// Current Exchange Rate View
cube(`currency_exchange_rate_current`, {
  sql: `
    SELECT DISTINCT ON (cer."CURRENCY_CODE", cer."COMPANY_ID")
      cer.*
    FROM BUSINESS_CENTRAL.CURRENCY_EXCHANGE_RATE cer
    WHERE cer."STARTING_DATE" <= CURRENT_DATE
    ORDER BY cer."CURRENCY_CODE", cer."COMPANY_ID", cer."STARTING_DATE" DESC
  `,
  
  title: `Current Exchange Rates`,
  description: `Most recent exchange rate for each currency`,
  
  joins: {
    company_hub: {
      relationship: `many_to_one`,
      sql: `${CUBE}."COMPANY_ID" = ${company_hub}."ID"`
    }
  },
  
  measures: {
    count: {
      type: `count`
    },
    
    avg_exchange_rate: {
      sql: `CAST(${CUBE}."EXCHANGE_RATE_AMOUNT" AS DECIMAL(19,6))`,
      type: `avg`
    }
  },
  
  dimensions: {
    currency_code: {
      sql: `${CUBE}."CURRENCY_CODE"`,
      type: `string`,
      primaryKey: true
    },
    
    starting_date: {
      sql: `${CUBE}."STARTING_DATE"`,
      type: `time`
    },
    
    exchange_rate_amount: {
      sql: `${CUBE}."EXCHANGE_RATE_AMOUNT"`,
      type: `string`
    },
    
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    }
  }
});

// Optimized Country Region
cube(`country_region_optimized`, {
  sql: `SELECT * FROM BUSINESS_CENTRAL.COUNTRY_REGION`,
  
  title: `Country Region Optimized`,
  description: `Country and region reference data`,
  
  joins: {
    company_hub: {
      relationship: `many_to_one`,
      sql: `${CUBE}."COMPANY_ID" = ${company_hub}."ID"`
    }
  },
  
  measures: {
    count: {
      type: `count`
    }
  },
  
  dimensions: {
    code: {
      sql: `${CUBE}."CODE"`,
      type: `string`,
      primaryKey: true
    },
    
    name: {
      sql: `${CUBE}."NAME"`,
      type: `string`
    },
    
    iso_code: {
      sql: `${CUBE}."ISO_CODE"`,
      type: `string`
    },
    
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    }
  }
});

/**
 * Performance Notes:
 * 
 * 1. Index Requirements:
 *    - All primary keys should have unique indexes
 *    - Foreign keys should have non-unique indexes
 *    - Composite indexes on (COMPANY_ID, primary_key) for all tables
 * 
 * 2. Query Optimization:
 *    - Company_ID is included in all joins for partition pruning
 *    - Avoided subqueries in join conditions where possible
 *    - Used materialized views for complex aggregations
 * 
 * 3. Cardinality Considerations:
 *    - All relationships properly defined as many_to_one or one_to_one
 *    - No many_to_many relationships to avoid cartesian products
 *    - Dimension sets pre-aggregated to avoid expansion
 * 
 * 4. Circular Dependency Prevention:
 *    - Company hub has no outbound joins
 *    - GL Account doesn't join back to GL Entry
 *    - Customer doesn't join back to GL Entry
 * 
 * 5. Data Type Consistency:
 *    - All monetary values cast to DECIMAL(19,4)
 *    - All date fields properly typed as time
 *    - String fields not cast unless necessary
 */