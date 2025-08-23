// Primary Relationships Between Core Financial Cubes

// Enhanced GL Entry with Primary Relationships
cube(`g_l_entry_relationships`, {
  extends: g_l_entry,
  
  joins: {
    // Company relationship (already defined)
    company: {
      relationship: `many_to_one`,
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`
    },
    
    // GL Account relationship
    g_l_account: {
      relationship: `many_to_one`,
      sql: `${CUBE}."G_LACCOUNT_NO" = ${g_l_account}."NO" AND ${CUBE}."COMPANY_ID" = ${g_l_account}."COMPANY_ID"`
    },
    
    // Dimension Set Entry relationship
    dimension_set_entry: {
      relationship: `one_to_many`,
      sql: `${CUBE}."DIMENSION_SET_ID" = ${dimension_set_entry}."DIMENSION_SET_ID" AND ${CUBE}."COMPANY_ID" = ${dimension_set_entry}."COMPANY_ID"`
    },
    
    // Customer relationship (via source)
    customer: {
      relationship: `many_to_one`,
      sql: `${CUBE}."SOURCE_NO" = ${customer}."NO" AND ${CUBE}."SOURCE_TYPE" = 'Customer' AND ${CUBE}."COMPANY_ID" = ${customer}."COMPANY_ID"`
    },
    
    // Employee relationship (via source)
    employee: {
      relationship: `many_to_one`,
      sql: `${CUBE}."SOURCE_NO" = ${employee}."NO" AND ${CUBE}."SOURCE_TYPE" = 'Employee' AND ${CUBE}."COMPANY_ID" = ${employee}."COMPANY_ID"`
    },
    
    // Bank Account relationship (via source or balance account)
    bank_account: {
      relationship: `many_to_one`,
      sql: `(${CUBE}."BAL_ACCOUNT_NO" = ${bank_account}."NO" AND ${CUBE}."BAL_ACCOUNT_TYPE" = 'Bank Account' AND ${CUBE}."COMPANY_ID" = ${bank_account}."COMPANY_ID")`
    }
  }
});

// Customer with Enhanced Relationships
cube(`customer_relationships`, {
  extends: customer,
  
  joins: {
    // Company relationship
    company: {
      relationship: `many_to_one`,
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`
    },
    
    // Country/Region relationship
    country_region: {
      relationship: `many_to_one`,
      sql: `${CUBE}."COUNTRY_REGION_CODE" = ${country_region}."CODE" AND ${CUBE}."COMPANY_ID" = ${country_region}."COMPANY_ID"`
    },
    
    // Currency relationship
    currency: {
      relationship: `many_to_one`,
      sql: `${CUBE}."CURRENCY_CODE" = ${currency}."CODE" AND ${CUBE}."COMPANY_ID" = ${currency}."COMPANY_ID"`
    },
    
    // Default Dimension relationship
    default_dimension: {
      relationship: `one_to_many`,
      sql: `${CUBE}."NO" = ${default_dimension}."NO" AND ${default_dimension}."TABLE_ID" = 18 AND ${CUBE}."COMPANY_ID" = ${default_dimension}."COMPANY_ID"`
    },
    
    // GL Entry relationship (customer transactions)
    g_l_entry: {
      relationship: `one_to_many`,
      sql: `${CUBE}."NO" = ${g_l_entry}."SOURCE_NO" AND ${g_l_entry}."SOURCE_TYPE" = 'Customer' AND ${CUBE}."COMPANY_ID" = ${g_l_entry}."COMPANY_ID"`
    }
  }
});

// Dimension Value with Primary Relationships
cube(`dimension_value_relationships`, {
  extends: dimension_value,
  
  joins: {
    // Company relationship
    company: {
      relationship: `many_to_one`,
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`
    },
    
    // Dimension relationship
    dimension: {
      relationship: `many_to_one`,
      sql: `${CUBE}."DIMENSION_CODE" = ${dimension}."CODE" AND ${CUBE}."COMPANY_ID" = ${dimension}."COMPANY_ID"`
    },
    
    // Dimension Set Entry relationship
    dimension_set_entry: {
      relationship: `one_to_many`,
      sql: `${CUBE}."CODE" = ${dimension_set_entry}."DIMENSION_VALUE_CODE" AND ${CUBE}."DIMENSION_CODE" = ${dimension_set_entry}."DIMENSION_CODE" AND ${CUBE}."COMPANY_ID" = ${dimension_set_entry}."COMPANY_ID"`
    }
  }
});

// Dimension Set Entry with Enhanced Relationships
cube(`dimension_set_entry_relationships`, {
  extends: dimension_set_entry,
  
  joins: {
    // Company relationship
    company: {
      relationship: `many_to_one`,
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`
    },
    
    // Dimension Value relationship
    dimension_value: {
      relationship: `many_to_one`,
      sql: `${CUBE}."DIMENSION_VALUE_CODE" = ${dimension_value}."CODE" AND ${CUBE}."DIMENSION_CODE" = ${dimension_value}."DIMENSION_CODE" AND ${CUBE}."COMPANY_ID" = ${dimension_value}."COMPANY_ID"`
    },
    
    // GL Entry relationship (entries using this dimension set)
    g_l_entry: {
      relationship: `one_to_many`,
      sql: `${CUBE}."DIMENSION_SET_ID" = ${g_l_entry}."DIMENSION_SET_ID" AND ${CUBE}."COMPANY_ID" = ${g_l_entry}."COMPANY_ID"`
    }
  }
});

// Bank Account with Primary Relationships
cube(`bank_account_relationships`, {
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
    
    // Country/Region relationship
    country_region: {
      relationship: `many_to_one`,
      sql: `${CUBE}."COUNTRY_REGION_CODE" = ${country_region}."CODE" AND ${CUBE}."COMPANY_ID" = ${country_region}."COMPANY_ID"`
    },
    
    // GL Entry relationship (bank transactions)
    g_l_entry: {
      relationship: `one_to_many`,
      sql: `${CUBE}."NO" = ${g_l_entry}."BAL_ACCOUNT_NO" AND ${g_l_entry}."BAL_ACCOUNT_TYPE" = 'Bank Account' AND ${CUBE}."COMPANY_ID" = ${g_l_entry}."COMPANY_ID"`
    }
  }
});

// Employee with Primary Relationships
cube(`employee_relationships`, {
  extends: employee,
  
  joins: {
    // Company relationship
    company: {
      relationship: `many_to_one`,
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`
    },
    
    // Country/Region relationship
    country_region: {
      relationship: `many_to_one`,
      sql: `${CUBE}."COUNTRY_REGION_CODE" = ${country_region}."CODE" AND ${CUBE}."COMPANY_ID" = ${country_region}."COMPANY_ID"`
    },
    
    // Bank Account relationship (employee bank account)
    bank_account: {
      relationship: `many_to_one`,
      sql: `${CUBE}."BANK_ACCOUNT_NO" = ${bank_account}."NO" AND ${CUBE}."COMPANY_ID" = ${bank_account}."COMPANY_ID"`
    },
    
    // GL Entry relationship (employee transactions)
    g_l_entry: {
      relationship: `one_to_many`,
      sql: `${CUBE}."NO" = ${g_l_entry}."SOURCE_NO" AND ${g_l_entry}."SOURCE_TYPE" = 'Employee' AND ${CUBE}."COMPANY_ID" = ${g_l_entry}."COMPANY_ID"`
    },
    
    // Default Dimension relationship
    default_dimension: {
      relationship: `one_to_many`,
      sql: `${CUBE}."NO" = ${default_dimension}."NO" AND ${default_dimension}."TABLE_ID" = 5200 AND ${CUBE}."COMPANY_ID" = ${default_dimension}."COMPANY_ID"`
    }
  }
});

// Currency with Exchange Rate Relationships
cube(`currency_relationships`, {
  extends: currency,
  
  joins: {
    // Company relationship
    company: {
      relationship: `many_to_one`,
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`
    },
    
    // Currency Exchange Rate relationship
    currency_exchange_rate: {
      relationship: `one_to_many`,
      sql: `${CUBE}."CODE" = ${currency_exchange_rate}."CURRENCY_CODE" AND ${CUBE}."COMPANY_ID" = ${currency_exchange_rate}."COMPANY_ID"`
    },
    
    // Customer relationship (customers using this currency)
    customer: {
      relationship: `one_to_many`,
      sql: `${CUBE}."CODE" = ${customer}."CURRENCY_CODE" AND ${CUBE}."COMPANY_ID" = ${customer}."COMPANY_ID"`
    },
    
    // Bank Account relationship (accounts in this currency)
    bank_account: {
      relationship: `one_to_many`,
      sql: `${CUBE}."CODE" = ${bank_account}."CURRENCY_CODE" AND ${CUBE}."COMPANY_ID" = ${bank_account}."COMPANY_ID"`
    }
  }
});

// GL Account with Enhanced Relationships
cube(`g_l_account_relationships`, {
  extends: g_l_account,
  
  joins: {
    // Company relationship
    company: {
      relationship: `many_to_one`,
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`
    },
    
    // GL Entry relationship
    g_l_entry: {
      relationship: `one_to_many`,
      sql: `${CUBE}."NO" = ${g_l_entry}."G_LACCOUNT_NO" AND ${CUBE}."COMPANY_ID" = ${g_l_entry}."COMPANY_ID"`
    },
    
    // Default Dimension relationship
    default_dimension: {
      relationship: `one_to_many`,
      sql: `${CUBE}."NO" = ${default_dimension}."NO" AND ${default_dimension}."TABLE_ID" = 15 AND ${CUBE}."COMPANY_ID" = ${default_dimension}."COMPANY_ID"`
    }
  }
});

// Contact with Primary Relationships
cube(`contact_relationships`, {
  extends: contact,
  
  joins: {
    // Company relationship
    company: {
      relationship: `many_to_one`,
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`
    },
    
    // Country/Region relationship
    country_region: {
      relationship: `many_to_one`,
      sql: `${CUBE}."COUNTRY_REGION_CODE" = ${country_region}."CODE" AND ${CUBE}."COMPANY_ID" = ${country_region}."COMPANY_ID"`
    }
  }
});

// Default Dimension with Entity Relationships
cube(`default_dimension_relationships`, {
  extends: default_dimension,
  
  joins: {
    // Company relationship
    company: {
      relationship: `many_to_one`,
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`
    },
    
    // Dimension relationship
    dimension: {
      relationship: `many_to_one`,
      sql: `${CUBE}."DIMENSION_CODE" = ${dimension}."CODE" AND ${CUBE}."COMPANY_ID" = ${dimension}."COMPANY_ID"`
    },
    
    // Dimension Value relationship
    dimension_value: {
      relationship: `many_to_one`,
      sql: `${CUBE}."DIMENSION_VALUE_CODE" = ${dimension_value}."CODE" AND ${CUBE}."DIMENSION_CODE" = ${dimension_value}."DIMENSION_CODE" AND ${CUBE}."COMPANY_ID" = ${dimension_value}."COMPANY_ID"`
    }
  }
});