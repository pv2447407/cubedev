// Advanced Relationships and Cross-Cube Joins

// General Journal Line with Advanced Relationships
cube(`gen_journal_line_advanced`, {
  extends: gen_journal_line,
  
  joins: {
    // Company relationship
    company: {
      relationship: `many_to_one`,
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`
    },
    
    // General Journal Batch relationship
    gen_journal_batch: {
      relationship: `many_to_one`,
      sql: `${CUBE}."JOURNAL_BATCH_NAME" = ${gen_journal_batch}."NAME" AND ${CUBE}."JOURNAL_TEMPLATE_NAME" = ${gen_journal_batch}."JOURNAL_TEMPLATE_NAME" AND ${CUBE}."COMPANY_ID" = ${gen_journal_batch}."COMPANY_ID"`
    },
    
    // GL Account relationship (via account)
    g_l_account: {
      relationship: `many_to_one`,
      sql: `${CUBE}."ACCOUNT_NO" = ${g_l_account}."NO" AND ${CUBE}."ACCOUNT_TYPE" = 'G/L Account' AND ${CUBE}."COMPANY_ID" = ${g_l_account}."COMPANY_ID"`
    },
    
    
    // Customer relationship
    customer: {
      relationship: `many_to_one`,
      sql: `${CUBE}."ACCOUNT_NO" = ${customer}."NO" AND ${CUBE}."ACCOUNT_TYPE" = 'Customer' AND ${CUBE}."COMPANY_ID" = ${customer}."COMPANY_ID"`
    },
    
    // Bank Account relationship
    bank_account: {
      relationship: `many_to_one`,
      sql: `${CUBE}."ACCOUNT_NO" = ${bank_account}."NO" AND ${CUBE}."ACCOUNT_TYPE" = 'Bank Account' AND ${CUBE}."COMPANY_ID" = ${bank_account}."COMPANY_ID"`
    },
    
    // Currency relationship
    currency: {
      relationship: `many_to_one`,
      sql: `${CUBE}."CURRENCY_CODE" = ${currency}."CODE" AND ${CUBE}."COMPANY_ID" = ${currency}."COMPANY_ID"`
    },
    
    // Dimension Set Entry relationship
    dimension_set_entry: {
      relationship: `one_to_many`,
      sql: `${CUBE}."DIMENSION_SET_ID" = ${dimension_set_entry}."DIMENSION_SET_ID" AND ${CUBE}."COMPANY_ID" = ${dimension_set_entry}."COMPANY_ID"`
    },
    
    // Country/Region relationship
    country_region: {
      relationship: `many_to_one`,
      sql: `${CUBE}."COUNTRY_REGION_CODE" = ${country_region}."CODE" AND ${CUBE}."COMPANY_ID" = ${country_region}."COMPANY_ID"`
    }
  }
});

// Employee with Manager Hierarchy (Self-Join)
cube(`employee_hierarchy`, {
  extends: employee,
  
  joins: {
    // Company relationship
    company: {
      relationship: `many_to_one`,
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`
    },
    
  }
});

// Bank Account with Financial Instrument Relationships
cube(`bank_account_advanced`, {
  extends: bank_account,
  
  joins: {
    // Company relationship
    company: {
      relationship: `many_to_one`,
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`
    },
    
    // Currency relationship
    currency: {
      relationship: `many_to_one`,
      sql: `${CUBE}."CURRENCY_CODE" = ${currency}."CODE" AND ${CUBE}."COMPANY_ID" = ${currency}."COMPANY_ID"`
    },
    
    
    // General Journal Lines (bank account transactions)
    gen_journal_line: {
      relationship: `one_to_many`,
      sql: `(${CUBE}."NO" = ${gen_journal_line}."ACCOUNT_NO" AND ${gen_journal_line}."ACCOUNT_TYPE" = 'Bank Account' AND ${CUBE}."COMPANY_ID" = ${gen_journal_line}."COMPANY_ID") OR (${CUBE}."NO" = ${gen_journal_line}."BAL_ACCOUNT_NO" AND ${gen_journal_line}."BAL_ACCOUNT_TYPE" = 'Bank Account' AND ${CUBE}."COMPANY_ID" = ${gen_journal_line}."COMPANY_ID")`
    }
  }
});

// Currency Exchange Rate with Effective Rate Relationships
cube(`currency_exchange_rate_advanced`, {
  extends: currency_exchange_rate,
  
  joins: {
    // Company relationship
    company: {
      relationship: `many_to_one`,
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`
    },
    
    // Currency relationship
    currency: {
      relationship: `many_to_one`,
      sql: `${CUBE}."CURRENCY_CODE" = ${currency}."CODE" AND ${CUBE}."COMPANY_ID" = ${currency}."COMPANY_ID"`
    },
    
  }
});

// Customer with Contact Integration
cube(`customer_contact_integration`, {
  extends: customer,
  
  joins: {
    // Company relationship
    company: {
      relationship: `many_to_one`,
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`
    },
    
  }
});

// Compound GL Entry Analysis Cube
cube(`gl_entry_full_analysis`, {
  extends: g_l_entry,
  
  joins: {
    // Company
    company: {
      relationship: `many_to_one`,
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`
    },
    
    // GL Account with Category Information
    g_l_account: {
      relationship: `many_to_one`,
      sql: `${CUBE}."G_LACCOUNT_NO" = ${g_l_account}."NO" AND ${CUBE}."COMPANY_ID" = ${g_l_account}."COMPANY_ID"`
    },
    
    
    // General Product Posting Group
    gen_product_posting_group: {
      relationship: `many_to_one`,
      sql: `${CUBE}."GEN_PROD_POSTING_GROUP" = ${gen_product_posting_group}."CODE" AND ${CUBE}."COMPANY_ID" = ${gen_product_posting_group}."COMPANY_ID"`
    }
  }
});

// Cross-Module Integration Cube
cube(`financial_integration`, {
  sql: `
    SELECT 
      c."COMPANY_ID",
      c."NO" as entity_no,
      'Customer' as entity_type,
      c."NAME" as entity_name,
      CAST(c."BALANCE" AS DECIMAL(19,4)) as balance,
      c."CURRENCY_CODE",
      c."COUNTRY_REGION_CODE"
    FROM BUSINESS_CENTRAL.CUSTOMER c
    
    UNION ALL
    
    SELECT 
      e."COMPANY_ID",
      e."NO" as entity_no,
      'Employee' as entity_type,
      CONCAT(e."FIRST_NAME", ' ', e."LAST_NAME") as entity_name,
      0 as balance,
      NULL as currency_code,
      e."COUNTRY_REGION_CODE"
    FROM BUSINESS_CENTRAL.EMPLOYEE e
    
    UNION ALL
    
    SELECT 
      ba."COMPANY_ID",
      ba."NO" as entity_no,
      'Bank Account' as entity_type,
      ba."NAME" as entity_name,
      CAST(ba."BALANCE" AS DECIMAL(19,4)) as balance,
      ba."CURRENCY_CODE",
      ba."COUNTRY_REGION_CODE"
    FROM BUSINESS_CENTRAL.BANK_ACCOUNT ba
  `,
  
  joins: {
    // Company
    company: {
      relationship: `many_to_one`,
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`
    },
    
    // Country Region
    country_region: {
      relationship: `many_to_one`,
      sql: `${CUBE}."COUNTRY_REGION_CODE" = ${country_region}."CODE" AND ${CUBE}."COMPANY_ID" = ${country_region}."COMPANY_ID"`
    },
    
    // Currency
    currency: {
      relationship: `many_to_one`,
      sql: `${CUBE}."CURRENCY_CODE" = ${currency}."CODE" AND ${CUBE}."COMPANY_ID" = ${currency}."COMPANY_ID"`
    },
    
    // GL Entries for all entity types
    g_l_entry: {
      relationship: `one_to_many`,
      sql: `${CUBE}."ENTITY_NO" = ${g_l_entry}."SOURCE_NO" AND ${CUBE}."ENTITY_TYPE" = ${g_l_entry}."SOURCE_TYPE" AND ${CUBE}."COMPANY_ID" = ${g_l_entry}."COMPANY_ID"`
    }
  },
  
  measures: {
    entity_count: {
      type: `count`,
      drillMembers: [entity_no, entity_name, entity_type]
    },
    
    total_balance: {
      sql: `balance`,
      type: `sum`,
      format: `currency`
    },
    
    average_balance: {
      sql: `balance`,
      type: `avg`,
      format: `currency`
    }
  },
  
  dimensions: {
    company_id: {
      sql: `"COMPANY_ID"`,
      type: `string`
    },
    
    entity_no: {
      sql: `entity_no`,
      type: `string`,
      primaryKey: true
    },
    
    entity_type: {
      sql: `entity_type`,
      type: `string`
    },
    
    entity_name: {
      sql: `entity_name`,
      type: `string`
    },
    
    balance: {
      sql: `balance`,
      type: `number`
    },
    
    currency_code: {
      sql: `"CURRENCY_CODE"`,
      type: `string`
    },
    
    country_region_code: {
      sql: `"COUNTRY_REGION_CODE"`,
      type: `string`
    }
  }
});