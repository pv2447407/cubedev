// Customer and Sales Analysis Measures
cube(`customer`, {
  sql: `SELECT * FROM BUSINESS_CENTRAL.CUSTOMER`,
  
  joins: {
    company: {
      relationship: `many_to_one`,
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`
    },
    country_region: {
      relationship: `many_to_one`,
      sql: `${CUBE}."COUNTRY_REGION_CODE" = ${country_region}."CODE" AND ${CUBE}."COMPANY_ID" = ${country_region}."COMPANY_ID"`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [no, name, city, country_region_code]
    },
    
    // Total customer balance
    total_customer_balance: {
      sql: `CAST(${CUBE}."BALANCE" AS DECIMAL(19,4))`,
      type: `sum`,
      format: `currency`,
      title: `Total Customer Balance`
    },
    
    // Average customer balance
    average_customer_balance: {
      sql: `CAST(${CUBE}."BALANCE" AS DECIMAL(19,4))`,
      type: `avg`,
      format: `currency`,
      title: `Average Customer Balance`
    },
    
    // Count of active customers (not blocked)
    active_customers_count: {
      sql: `CASE WHEN ${CUBE}."BLOCKED" = '' OR ${CUBE}."BLOCKED" IS NULL THEN 1 ELSE NULL END`,
      type: `count`,
      title: `Active Customers`
    },
    
    // Count of blocked customers
    blocked_customers_count: {
      sql: `CASE WHEN ${CUBE}."BLOCKED" != '' AND ${CUBE}."BLOCKED" IS NOT NULL THEN 1 ELSE NULL END`,
      type: `count`,
      title: `Blocked Customers`
    },
    
    // Count of customers by posting group
    customers_by_posting_group: {
      sql: `${CUBE}."CUSTOMER_POSTING_GROUP"`,
      type: `countDistinct`,
      title: `Unique Posting Groups`
    },
    
    // Count of customers with privacy restrictions
    privacy_blocked_customers_count: {
      sql: `CASE WHEN ${CUBE}."PRIVACY_BLOCKED" = true THEN 1 ELSE NULL END`,
      type: `count`,
      title: `Privacy Blocked Customers`
    },
    
    // Count of customers with outstanding balances
    customers_with_balance_count: {
      sql: `CASE WHEN CAST(${CUBE}."BALANCE" AS DECIMAL(19,4)) > 0 THEN 1 ELSE NULL END`,
      type: `count`,
      title: `Customers with Outstanding Balance`
    },
    
    // Count of customers with negative balance (credit balance)
    customers_with_credit_balance_count: {
      sql: `CASE WHEN CAST(${CUBE}."BALANCE" AS DECIMAL(19,4)) < 0 THEN 1 ELSE NULL END`,
      type: `count`,
      title: `Customers with Credit Balance`
    },
    
    // Count of tax-liable customers
    tax_liable_customers_count: {
      sql: `CASE WHEN ${CUBE}."TAX_LIABLE" = true THEN 1 ELSE NULL END`,
      type: `count`,
      title: `Tax Liable Customers`
    },
    
    // Customers with prices including VAT
    prices_including_vat_count: {
      sql: `CASE WHEN ${CUBE}."PRICES_INCLUDING_VAT" = true THEN 1 ELSE NULL END`,
      type: `count`,
      title: `Customers with Prices Including VAT`
    },
    
    // Maximum customer balance
    max_customer_balance: {
      sql: `CAST(${CUBE}."BALANCE" AS DECIMAL(19,4))`,
      type: `max`,
      format: `currency`,
      title: `Maximum Customer Balance`
    },
    
    // Minimum customer balance
    min_customer_balance: {
      sql: `CAST(${CUBE}."BALANCE" AS DECIMAL(19,4))`,
      type: `min`,
      format: `currency`,
      title: `Minimum Customer Balance`
    },
    
    // Customers by payment terms
    customers_by_payment_terms: {
      sql: `${CUBE}."PAYMENT_TERMS_CODE"`,
      type: `countDistinct`,
      title: `Unique Payment Terms`
    },
    
    // Customers by price group
    customers_by_price_group: {
      sql: `${CUBE}."CUSTOMER_PRICE_GROUP"`,
      type: `countDistinct`,
      title: `Unique Price Groups`
    },
    
    // Customers by currency
    customers_by_currency: {
      sql: `${CUBE}."CURRENCY_CODE"`,
      type: `countDistinct`,
      title: `Unique Currencies`
    },
    
    // Customers with email
    customers_with_email_count: {
      sql: `CASE WHEN ${CUBE}."E_MAIL" IS NOT NULL AND ${CUBE}."E_MAIL" != '' THEN 1 ELSE NULL END`,
      type: `count`,
      title: `Customers with Email`
    },
    
    // Customers with mobile phone
    customers_with_mobile_count: {
      sql: `CASE WHEN ${CUBE}."MOBILE_PHONE_NO" IS NOT NULL AND ${CUBE}."MOBILE_PHONE_NO" != '' THEN 1 ELSE NULL END`,
      type: `count`,
      title: `Customers with Mobile Phone`
    }
  },
  
  dimensions: {
    no: {
      sql: `${CUBE}."NO"`,
      type: `string`,
      primaryKey: true
    },
    
    system_id: {
      sql: `${CUBE}."SYSTEM_ID"`,
      type: `string`
    },
    
    name: {
      sql: `${CUBE}."NAME"`,
      type: `string`
    },
    
    address: {
      sql: `${CUBE}."ADDRESS"`,
      type: `string`
    },
    
    city: {
      sql: `${CUBE}."CITY"`,
      type: `string`
    },
    
    post_code: {
      sql: `${CUBE}."POST_CODE"`,
      type: `string`
    },
    
    county: {
      sql: `${CUBE}."COUNTY"`,
      type: `string`
    },
    
    country_region_code: {
      sql: `${CUBE}."COUNTRY_REGION_CODE"`,
      type: `string`
    },
    
    phone_no: {
      sql: `${CUBE}."PHONE_NO"`,
      type: `string`
    },
    
    mobile_phone_no: {
      sql: `${CUBE}."MOBILE_PHONE_NO"`,
      type: `string`
    },
    
    e_mail: {
      sql: `${CUBE}."E_MAIL"`,
      type: `string`
    },
    
    blocked: {
      sql: `${CUBE}."BLOCKED"`,
      type: `string`
    },
    
    privacy_blocked: {
      sql: `${CUBE}."PRIVACY_BLOCKED"`,
      type: `boolean`
    },
    
    tax_liable: {
      sql: `${CUBE}."TAX_LIABLE"`,
      type: `boolean`
    },
    
    prices_including_vat: {
      sql: `${CUBE}."PRICES_INCLUDING_VAT"`,
      type: `boolean`
    },
    
    customer_posting_group: {
      sql: `${CUBE}."CUSTOMER_POSTING_GROUP"`,
      type: `string`
    },
    
    gen_bus_posting_group: {
      sql: `${CUBE}."GEN_BUS_POSTING_GROUP"`,
      type: `string`
    },
    
    vat_registration_no: {
      sql: `${CUBE}."VAT_REGISTRATION_NO"`,
      type: `string`
    },
    
    payment_terms_code: {
      sql: `${CUBE}."PAYMENT_TERMS_CODE"`,
      type: `string`
    },
    
    payment_method_code: {
      sql: `${CUBE}."PAYMENT_METHOD_CODE"`,
      type: `string`
    },
    
    currency_code: {
      sql: `${CUBE}."CURRENCY_CODE"`,
      type: `string`
    },
    
    customer_price_group: {
      sql: `${CUBE}."CUSTOMER_PRICE_GROUP"`,
      type: `string`
    },
    
    salesperson_code: {
      sql: `${CUBE}."SALESPERSON_CODE"`,
      type: `string`
    },
    
    shipping_agent_code: {
      sql: `${CUBE}."SHIPPING_AGENT_CODE"`,
      type: `string`
    },
    
    language_code: {
      sql: `${CUBE}."LANGUAGE_CODE"`,
      type: `string`
    },
    
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    }
  }
});