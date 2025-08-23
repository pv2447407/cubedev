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
    
    // GL Account relationship (via balance account)
    bal_g_l_account: {
      relationship: `many_to_one`,
      sql: `${CUBE}."BAL_ACCOUNT_NO" = ${g_l_account}."NO" AND ${CUBE}."BAL_ACCOUNT_TYPE" = 'G/L Account' AND ${CUBE}."COMPANY_ID" = ${g_l_account}."COMPANY_ID"`
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
    
    // Manager relationship (self-join)
    manager: {
      relationship: `many_to_one`,
      sql: `${CUBE}."MANAGER_NO" = ${employee}."NO" AND ${CUBE}."COMPANY_ID" = ${employee}."COMPANY_ID"`
    },
    
    // Direct Reports relationship (reverse self-join)
    direct_reports: {
      relationship: `one_to_many`,
      sql: `${CUBE}."NO" = ${employee}."MANAGER_NO" AND ${CUBE}."COMPANY_ID" = ${employee}."COMPANY_ID"`
    },
    
    // Cost Center Dimension relationship
    cost_center_dimension: {
      relationship: `many_to_one`,
      sql: `${CUBE}."COST_CENTER_CODE" = ${dimension_value}."CODE" AND ${dimension_value}."DIMENSION_CODE" = 'COSTCENTER' AND ${CUBE}."COMPANY_ID" = ${dimension_value}."COMPANY_ID"`
    }
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
    
    // Current Exchange Rate relationship
    current_exchange_rate: {
      relationship: `many_to_one`,
      sql: `
        ${CUBE}."CURRENCY_CODE" = ${currency_exchange_rate}."CURRENCY_CODE" 
        AND ${CUBE}."COMPANY_ID" = ${currency_exchange_rate}."COMPANY_ID"
        AND ${currency_exchange_rate}."STARTING_DATE" = (
          SELECT MAX(cer."STARTING_DATE")
          FROM BUSINESS_CENTRAL.CURRENCY_EXCHANGE_RATE cer
          WHERE cer."CURRENCY_CODE" = ${CUBE}."CURRENCY_CODE"
            AND cer."COMPANY_ID" = ${CUBE}."COMPANY_ID"
            AND cer."STARTING_DATE" <= CURRENT_DATE
        )
      `
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
    
    // Relational Currency relationship
    relational_currency: {
      relationship: `many_to_one`,
      sql: `${CUBE}."RELATIONAL_CURRENCY_CODE" = ${currency}."CODE" AND ${CUBE}."COMPANY_ID" = ${currency}."COMPANY_ID"`
    },
    
    // GL Entries affected by this rate
    affected_gl_entries: {
      relationship: `one_to_many`,
      sql: `
        ${currency_exchange_rate}."CURRENCY_CODE" IN (
          SELECT DISTINCT c."CURRENCY_CODE" 
          FROM BUSINESS_CENTRAL.CUSTOMER c 
          WHERE c."NO" = ${g_l_entry}."SOURCE_NO" 
            AND ${g_l_entry}."SOURCE_TYPE" = 'Customer'
            AND c."COMPANY_ID" = ${CUBE}."COMPANY_ID"
        )
        AND DATE(${g_l_entry}."POSTING_DATE") >= DATE(${CUBE}."STARTING_DATE")
        AND DATE(${g_l_entry}."POSTING_DATE") < COALESCE(
          (SELECT MIN(cer2."STARTING_DATE")
           FROM BUSINESS_CENTRAL.CURRENCY_EXCHANGE_RATE cer2
           WHERE cer2."CURRENCY_CODE" = ${CUBE}."CURRENCY_CODE"
             AND cer2."COMPANY_ID" = ${CUBE}."COMPANY_ID"
             AND cer2."STARTING_DATE" > ${CUBE}."STARTING_DATE"),
          '9999-12-31'::DATE
        )
        AND ${g_l_entry}."COMPANY_ID" = ${CUBE}."COMPANY_ID"
      `
    }
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
    
    // Primary Contact relationship
    primary_contact: {
      relationship: `many_to_one`,
      sql: `${CUBE}."PRIMARY_CONTACT_NO" = ${contact}."NO" AND ${CUBE}."COMPANY_ID" = ${contact}."COMPANY_ID"`
    },
    
    // All Related Contacts
    related_contacts: {
      relationship: `one_to_many`,
      sql: `${CUBE}."NO" = ${contact}."COMPANY_NO" AND ${contact}."TYPE" = 'Person' AND ${CUBE}."COMPANY_ID" = ${contact}."COMPANY_ID"`
    },
    
    // Sales Person/Employee relationship
    salesperson: {
      relationship: `many_to_one`,
      sql: `${CUBE}."SALESPERSON_CODE" = ${employee}."NO" AND ${CUBE}."COMPANY_ID" = ${employee}."COMPANY_ID"`
    }
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
    
    // Business Unit Information
    business_unit_dimension: {
      relationship: `many_to_one`,
      sql: `${CUBE}."BUSINESS_UNIT_CODE" = ${dimension_value}."CODE" AND ${dimension_value}."DIMENSION_CODE" = 'BUSINESSUNIT' AND ${CUBE}."COMPANY_ID" = ${dimension_value}."COMPANY_ID"`
    },
    
    // Global Dimension 1
    global_dimension_1: {
      relationship: `many_to_one`,
      sql: `${CUBE}."GLOBAL_DIMENSION_1_CODE" = ${dimension_value}."CODE" AND ${dimension_value}."GLOBAL_DIMENSION_NO" = 1 AND ${CUBE}."COMPANY_ID" = ${dimension_value}."COMPANY_ID"`
    },
    
    // Global Dimension 2
    global_dimension_2: {
      relationship: `many_to_one`,
      sql: `${CUBE}."GLOBAL_DIMENSION_2_CODE" = ${dimension_value}."CODE" AND ${dimension_value}."GLOBAL_DIMENSION_NO" = 2 AND ${CUBE}."COMPANY_ID" = ${dimension_value}."COMPANY_ID"`
    },
    
    // IC Partner Company
    ic_partner_company: {
      relationship: `many_to_one`,
      sql: `${CUBE}."IC_PARTNER_CODE" = ${company}."NAME" AND ${CUBE}."COMPANY_ID" != ${company}."ID"`
    },
    
    // User/Employee who posted
    posting_user: {
      relationship: `many_to_one`,
      sql: `${CUBE}."USER_ID" = ${employee}."NO" AND ${CUBE}."COMPANY_ID" = ${employee}."COMPANY_ID"`
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