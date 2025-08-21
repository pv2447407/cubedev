const { tablePrefix } = require('../tablePrefix');

cube(`customers`, {
  sql_table: `${tablePrefix()}.CUSTOMER`,
  title: `Customers`,
  description: `Customer master data and analytics`,
  
  joins: {
    sales_headers: {
      sql: `${CUBE}.SYSTEMID = ${sales_headers}.CUSTOMER_ID`,
      relationship: `one_to_many`
    }
  },
  
  dimensions: {
    system_id: {
      sql: `SYSTEMID`,
      type: `string`,
      primary_key: true
    },
    
    customer_no: {
      sql: `NO`,
      type: `string`,
      title: `Customer Number`
    },
    
    name: {
      sql: `NAME`,
      type: `string`
    },
    
    name_2: {
      sql: `NAME_2`,
      type: `string`,
      title: `Name 2`
    },
    
    search_name: {
      sql: `SEARCH_NAME`,
      type: `string`
    },
    
    address: {
      sql: `ADDRESS`,
      type: `string`
    },
    
    city: {
      sql: `CITY`,
      type: `string`
    },
    
    country_region_code: {
      sql: `COUNTRY_REGION_CODE`,
      type: `string`,
      title: `Country/Region`
    },
    
    post_code: {
      sql: `POST_CODE`,
      type: `string`,
      title: `Postal Code`
    },
    
    blocked: {
      sql: `BLOCKED`,
      type: `string`,
      title: `Blocked Status`
    },
    
    credit_limit_lcy: {
      sql: `CREDIT_LIMIT_LCY`,
      type: `number`,
      title: `Credit Limit (LCY)`,
      format: `currency`
    },
    
    currency_code: {
      sql: `CURRENCY_CODE`,
      type: `string`
    },
    
    payment_terms_code: {
      sql: `PAYMENT_TERMS_CODE`,
      type: `string`,
      title: `Payment Terms`
    },
    
    payment_method_code: {
      sql: `PAYMENT_METHOD_CODE`,
      type: `string`,
      title: `Payment Method`
    },
    
    salesperson_code: {
      sql: `SALESPERSON_CODE`,
      type: `string`,
      title: `Salesperson`
    },
    
    customer_posting_group: {
      sql: `CUSTOMER_POSTING_GROUP`,
      type: `string`,
      title: `Posting Group`
    },
    
    gen_bus_posting_group: {
      sql: `GEN_BUS_POSTING_GROUP`,
      type: `string`,
      title: `Gen. Business Posting Group`
    },
    
    vat_registration_no: {
      sql: `VAT_REGISTRATION_NO`,
      type: `string`,
      title: `VAT Registration No.`
    },
    
    company_id: {
      sql: `COMPANY_ID`,
      type: `string`,
      title: `Company`
    },
    
    last_modified_datetime: {
      sql: `LAST_MODIFIED_DATE_TIME`,
      type: `time`
    },
    
    created_datetime: {
      sql: `${CUBE}._FIVETRAN_SYNCED`,
      type: `time`,
      title: `First Synced`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      title: `Total Customers`
    },
    
    active_count: {
      type: `count`,
      title: `Active Customers`,
      filters: [
        { sql: `${CUBE}.BLOCKED = '' OR ${CUBE}.BLOCKED IS NULL` }
      ]
    },
    
    blocked_count: {
      type: `count`,
      title: `Blocked Customers`,
      filters: [
        { sql: `${CUBE}.BLOCKED != '' AND ${CUBE}.BLOCKED IS NOT NULL` }
      ]
    },
    
    total_credit_limit: {
      sql: `CREDIT_LIMIT_LCY`,
      type: `sum`,
      title: `Total Credit Limit`,
      format: `currency`
    },
    
    avg_credit_limit: {
      sql: `CREDIT_LIMIT_LCY`,
      type: `avg`,
      title: `Average Credit Limit`,
      format: `currency`
    },
    
    customers_with_credit_limit: {
      type: `count`,
      title: `Customers with Credit Limit`,
      filters: [
        { sql: `${CUBE}.CREDIT_LIMIT_LCY > 0` }
      ]
    }
  },
  
  pre_aggregations: {
    customer_summary: {
      measures: [
        `count`,
        `active_count`,
        `blocked_count`,
        `total_credit_limit`
      ],
      dimensions: [
        `country_region_code`,
        `customer_posting_group`,
        `company_id`
      ],
      time_dimension: `created_datetime`,
      granularity: `month`,
      refresh_key: {
        every: `1 hour`
      }
    }
  }
});