// Customer and Sales Performance Pre-aggregations

cube(`customer_preaggregations`, {
  extends: customer,
  
  preAggregations: {
    // Customer Balance by Region
    customer_balance_by_region: {
      sqlAlias: `cust_balance_region`,
      type: `rollup`,
      measures: [
        customer.count,
        customer.total_customer_balance,
        customer.average_customer_balance,
        customer.max_customer_balance,
        customer.min_customer_balance,
        customer.active_customers_count,
        customer.blocked_customers_count,
        customer.customers_with_balance_count,
        customer.customers_with_credit_balance_count
      ],
      dimensions: [
        customer.company_id,
        customer.country_region_code,
        customer.city,
        customer.post_code,
        customer.county
      ],
      refreshKey: {
        every: `2 hours`
      },
      indexes: {
        main: {
          columns: [`company_id`, `country_region_code`]
        },
        geographic: {
          columns: [`city`, `post_code`]
        }
      }
    },
    
    // Customer by Posting Group and Status
    customer_posting_group_analysis: {
      sqlAlias: `cust_posting_groups`,
      type: `rollup`,
      measures: [
        customer.count,
        customer.total_customer_balance,
        customer.average_customer_balance,
        customer.active_customers_count,
        customer.blocked_customers_count,
        customer.tax_liable_customers_count,
        customer.prices_including_vat_count
      ],
      dimensions: [
        customer.company_id,
        customer.customer_posting_group,
        customer.gen_bus_posting_group,
        customer.blocked,
        customer.privacy_blocked
      ],
      refreshKey: {
        every: `4 hours`
      },
      indexes: {
        main: {
          columns: [`company_id`, `customer_posting_group`]
        },
        status: {
          columns: [`blocked`, `privacy_blocked`]
        }
      }
    },
    
    // Payment Terms and Method Analysis
    payment_terms_analysis: {
      sqlAlias: `cust_payment_terms`,
      type: `rollup`,
      measures: [
        customer.count,
        customer.total_customer_balance,
        customer.average_customer_balance,
        customer.customers_with_balance_count,
        customer.customers_by_payment_terms,
        customer.customers_by_currency
      ],
      dimensions: [
        customer.company_id,
        customer.payment_terms_code,
        customer.payment_method_code,
        customer.currency_code
      ],
      refreshKey: {
        every: `6 hours`
      },
      indexes: {
        main: {
          columns: [`company_id`, `payment_terms_code`]
        },
        currency: {
          columns: [`currency_code`]
        }
      }
    },
    
    // Customer Segmentation Analysis
    customer_segmentation: {
      sqlAlias: `cust_segments`,
      type: `rollup`,
      measures: [
        customer.count,
        customer.total_customer_balance,
        customer.average_customer_balance,
        customer.tax_liable_customers_count,
        customer.prices_including_vat_count
      ],
      dimensions: [
        customer.company_id,
        customer.customer_price_group,
        customer.tax_liable,
        customer.prices_including_vat
      ],
      segments: [
        customer_segments.high_value_customers,
        customer_segments.vip_customers,
        customer_segments.domestic_customers,
        customer_segments.international_customers
      ],
      refreshKey: {
        every: `12 hours`
      },
      indexes: {
        main: {
          columns: [`company_id`, `customer_price_group`]
        }
      }
    },
    
    // Geographic Distribution
    geographic_distribution: {
      sqlAlias: `cust_geo_dist`,
      type: `rollup`,
      measures: [
        customer.count,
        customer.total_customer_balance,
        customer.active_customers_count,
        customer.customers_with_email_count,
        customer.customers_with_mobile_count
      ],
      dimensions: [
        customer.company_id,
        customer.country_region_code,
        customer.city
      ],
      refreshKey: {
        every: `24 hours`
      },
      indexes: {
        main: {
          columns: [`company_id`, `country_region_code`, `city`]
        }
      }
    },
    
    // Sales Person Performance
    salesperson_performance: {
      sqlAlias: `cust_salesperson`,
      type: `rollup`,
      measures: [
        customer.count,
        customer.total_customer_balance,
        customer.average_customer_balance,
        customer.active_customers_count,
        customer.customers_with_balance_count
      ],
      dimensions: [
        customer.company_id,
        customer.salesperson_code
      ],
      refreshKey: {
        every: `4 hours`
      },
      indexes: {
        main: {
          columns: [`company_id`, `salesperson_code`]
        }
      }
    },
    
    // Customer Communication Channels
    communication_channels: {
      sqlAlias: `cust_comm_channels`,
      type: `rollup`,
      measures: [
        customer.count,
        customer.customers_with_email_count,
        customer.customers_with_mobile_count,
        customer.total_customer_balance
      ],
      dimensions: [
        customer.company_id,
        customer.language_code,
        customer.country_region_code
      ],
      refreshKey: {
        every: `24 hours`
      },
      indexes: {
        main: {
          columns: [`company_id`, `language_code`]
        }
      }
    },
    
    // High-Value Customer Monitor
    high_value_customer_monitor: {
      sqlAlias: `cust_high_value`,
      type: `rollup`,
      measures: [
        customer.count,
        customer.total_customer_balance,
        customer.average_customer_balance
      ],
      dimensions: [
        customer.company_id,
        customer.no,
        customer.name,
        customer.customer_posting_group,
        customer.currency_code,
        customer.payment_terms_code
      ],
      filters: [
        {
          sql: `CAST(${customer}."BALANCE" AS DECIMAL(19,4)) > 25000`
        }
      ],
      refreshKey: {
        every: `30 minute`
      },
      indexes: {
        main: {
          columns: [`company_id`, `no`]
        }
      }
    },
    
    // Shipping and Logistics
    shipping_logistics: {
      sqlAlias: `cust_shipping`,
      type: `rollup`,
      measures: [
        customer.count,
        customer.total_customer_balance
      ],
      dimensions: [
        customer.company_id,
        customer.shipping_agent_code,
        customer.country_region_code,
        customer.city
      ],
      refreshKey: {
        every: `12 hours`
      },
      indexes: {
        main: {
          columns: [`company_id`, `shipping_agent_code`]
        }
      }
    },
    
    // VAT and Tax Analysis
    vat_tax_analysis: {
      sqlAlias: `cust_vat_tax`,
      type: `rollup`,
      measures: [
        customer.count,
        customer.total_customer_balance,
        customer.tax_liable_customers_count,
        customer.prices_including_vat_count
      ],
      dimensions: [
        customer.company_id,
        customer.vat_registration_no,
        customer.tax_liable,
        customer.prices_including_vat,
        customer.gen_bus_posting_group
      ],
      refreshKey: {
        every: `6 hours`
      },
      indexes: {
        main: {
          columns: [`company_id`, `tax_liable`, `prices_including_vat`]
        }
      }
    }
  }
});

// Employee Performance Pre-aggregations
cube(`employee_preaggregations`, {
  extends: employee,
  
  preAggregations: {
    // Employee Demographics
    employee_demographics: {
      sqlAlias: `emp_demographics`,
      type: `rollup`,
      measures: [
        employee.count
      ],
      dimensions: [
        employee.company_id,
        employee.status,
        employee.gender,
        employee.job_title,
        employee.cost_center_code,
        employee.country_region_code,
        employee.city
      ],
      refreshKey: {
        every: `24 hours`
      },
      indexes: {
        main: {
          columns: [`company_id`, `status`]
        },
        demographics: {
          columns: [`gender`, `job_title`]
        }
      }
    },
    
    // Manager Hierarchy Analysis
    manager_hierarchy: {
      sqlAlias: `emp_hierarchy`,
      type: `rollup`,
      measures: [
        employee.count
      ],
      dimensions: [
        employee.company_id,
        employee.manager_no,
        employee.job_title,
        employee.cost_center_code
      ],
      segments: [
        employee_segments.managers,
        employee_segments.individual_contributors
      ],
      refreshKey: {
        every: `24 hours`
      },
      indexes: {
        main: {
          columns: [`company_id`, `manager_no`]
        }
      }
    },
    
    // Employee Tenure Analysis
    tenure_analysis: {
      sqlAlias: `emp_tenure`,
      type: `rollup`,
      measures: [
        employee.count
      ],
      dimensions: [
        employee.company_id,
        employee.status
      ],
      segments: [
        employee_segments.active_employees,
        employee_segments.terminated_employees,
        employee_segments.new_employees,
        employee_segments.long_tenure_employees
      ],
      timeDimension: employee.employment_date,
      granularity: `month`,
      refreshKey: {
        every: `24 hours`
      },
      indexes: {
        main: {
          columns: [`company_id`, `employment_date`]
        }
      }
    }
  }
});

// Contact Management Pre-aggregations
cube(`contact_preaggregations`, {
  extends: contact,
  
  preAggregations: {
    // Contact Distribution
    contact_distribution: {
      sqlAlias: `contact_dist`,
      type: `rollup`,
      measures: [
        contact.count
      ],
      dimensions: [
        contact.company_id,
        contact.type,
        contact.country_region_code,
        contact.city,
        contact.salesperson_code
      ],
      refreshKey: {
        every: `24 hours`
      },
      indexes: {
        main: {
          columns: [`company_id`, `type`]
        },
        geographic: {
          columns: [`country_region_code`, `city`]
        }
      }
    },
    
    // Privacy and Communication
    privacy_communication: {
      sqlAlias: `contact_privacy`,
      type: `rollup`,
      measures: [
        contact.count
      ],
      dimensions: [
        contact.company_id,
        contact.privacy_blocked,
        contact.minor
      ],
      refreshKey: {
        every: `24 hours`
      },
      indexes: {
        main: {
          columns: [`company_id`, `privacy_blocked`]
        }
      }
    }
  }
});

// Bank Account Pre-aggregations
cube(`bank_account_preaggregations`, {
  extends: bank_account,
  
  preAggregations: {
    // Bank Account Balances
    bank_balances: {
      sqlAlias: `bank_balances`,
      type: `rollup`,
      measures: [
        bank_account.count
      ],
      dimensions: [
        bank_account.company_id,
        bank_account.currency_code,
        bank_account.country_region_code,
        bank_account.swift_code
      ],
      refreshKey: {
        every: `1 hour`
      },
      indexes: {
        main: {
          columns: [`company_id`, `currency_code`]
        }
      }
    },
    
    // Payment Processing Capabilities
    payment_capabilities: {
      sqlAlias: `bank_payment_cap`,
      type: `rollup`,
      measures: [
        bank_account.count
      ],
      dimensions: [
        bank_account.company_id,
        bank_account.use_as_default_for_currency,
        bank_account.disable_automatic_pmt_matching
      ],
      refreshKey: {
        every: `12 hours`
      },
      indexes: {
        main: {
          columns: [`company_id`]
        }
      }
    }
  }
});