/**
 * Customer Performance Analytics View
 * 
 * Comprehensive customer analytics dashboard for C-level executives providing:
 * - Customer segmentation and value analysis
 * - Top customers by revenue and profitability
 * - Geographic distribution and market penetration
 * - Payment behavior patterns and credit risk analysis
 * - Customer lifecycle metrics and retention insights
 * 
 * This view combines customer data with transactional history to provide
 * strategic insights for customer relationship management and business growth.
 */

view('customer_performance_analytics', {
  description: 'Executive customer analytics combining customer profiles, transaction patterns, geographic distribution, and payment behavior for strategic customer relationship management',
  
  includes: [
    // Core Customer Data - Demographics and account information
    {
      cube: 'customer',
      measures: [
        'count',
        'total_customer_balance',
        'average_customer_balance',
        'active_customers_count',
        'blocked_customers_count',
        'customers_with_balance_count',
        'customers_with_credit_balance_count',
        'tax_liable_customers_count',
        'max_customer_balance',
        'min_customer_balance',
        'customers_by_currency',
        'customers_by_payment_terms',
        'customers_by_price_group',
        'customers_with_email_count',
        'customers_with_mobile_count',
        'privacy_blocked_customers_count',
        'prices_including_vat_count'
      ],
      dimensions: [
        'no',
        'name',
        'address',
        'city',
        'post_code',
        'county',
        'country_region_code',
        'phone_no',
        'mobile_phone_no',
        'e_mail',
        'blocked',
        'privacy_blocked',
        'tax_liable',
        'customer_posting_group',
        'gen_bus_posting_group',
        'payment_terms_code',
        'payment_method_code',
        'currency_code',
        'customer_price_group',
        'salesperson_code',
        'shipping_agent_code',
        'language_code',
        'vat_registration_no',
        'company_id'
      ]
    },
    
    // Geographic Context - Country and regional information
    {
      cube: 'country_region',
      measures: [
        'count'
      ],
      dimensions: [
        'code',
        'name',
        'iso_code',
        'vat_scheme',
        'eu_country_region_code',
        'intrastat_code',
        'address_format',
        'company_id'
      ]
    },
    
    // Contact Information - Enhanced customer relationship data
    {
      cube: 'contact',
      measures: [
        'count'
      ],
      dimensions: [
        'no',
        'name',
        'first_name',
        'surname',
        'job_title',
        'company_name',
        'type',
        'city',
        'country_region_code',
        'e_mail',
        'phone_no',
        'mobile_phone_no',
        'language_code',
        'salesperson_code',
        'territory_code',
        'privacy_blocked',
        'company_id'
      ]
    },
    
    // Financial Transaction History - Customer payment and transaction patterns
    {
      cube: 'g_l_entry',
      measures: [
        'count'
      ],
      dimensions: [
        'posting_date',
        'document_date',
        'document_type',
        'document_no',
        'amount',
        'debit_amount',
        'credit_amount',
        'source_type',
        'source_no',
        'g_laccount_no',
        'g_laccount_name',
        'description',
        'global_dimension_1_code',
        'global_dimension_2_code',
        'company_id'
      ]
    }
  ],

  // Strategic Customer Segments for Executive Decision Making
  segments: {
    // High-Value Customers - Top revenue generators
    high_value_customers: {
      sql: `CAST(${customer.balance_lcy} AS DECIMAL(19,4)) >= 50000 
            OR CAST(${customer.sales_lcy} AS DECIMAL(19,4)) >= 100000
            OR CAST(${customer.profit_lcy} AS DECIMAL(19,4)) >= 25000`
    },
    
    // Medium-Value Customers - Growth potential
    medium_value_customers: {
      sql: `(CAST(${customer.balance_lcy} AS DECIMAL(19,4)) >= 10000 AND CAST(${customer.balance_lcy} AS DECIMAL(19,4)) < 50000)
            OR (CAST(${customer.sales_lcy} AS DECIMAL(19,4)) >= 20000 AND CAST(${customer.sales_lcy} AS DECIMAL(19,4)) < 100000)
            OR (CAST(${customer.profit_lcy} AS DECIMAL(19,4)) >= 5000 AND CAST(${customer.profit_lcy} AS DECIMAL(19,4)) < 25000)`
    },
    
    // Low-Value Customers - Cost optimization targets
    low_value_customers: {
      sql: `CAST(${customer.balance_lcy} AS DECIMAL(19,4)) < 10000
            AND CAST(${customer.sales_lcy} AS DECIMAL(19,4)) < 20000
            AND CAST(${customer.profit_lcy} AS DECIMAL(19,4)) < 5000`
    },
    
    // Credit Risk Customers - Outstanding balance and payment issues
    credit_risk_customers: {
      sql: `CAST(${customer.balance_lcy} AS DECIMAL(19,4)) > CAST(${customer.credit_limit_lcy} AS DECIMAL(19,4))
            OR ${customer.blocked} IN ('Ship', 'Invoice', 'All')
            OR CAST(${customer.reminder_amounts_lcy} AS DECIMAL(19,4)) > 0
            OR CAST(${customer.fin_charge_memo_amounts_lcy} AS DECIMAL(19,4)) > 0`
    },
    
    // Active Paying Customers - Good payment behavior
    active_paying_customers: {
      sql: `(${customer.blocked} = '' OR ${customer.blocked} IS NULL)
            AND CAST(${customer.payments_lcy} AS DECIMAL(19,4)) > 0
            AND CAST(${customer.balance_lcy} AS DECIMAL(19,4)) >= 0`
    },
    
    // International Customers - Multi-currency operations
    international_customers: {
      sql: `${customer.currency_code} IS NOT NULL 
            AND ${customer.currency_code} != ''
            AND ${customer.currency_code} != 'USD'`
    },
    
    // Key Geographic Markets - Major regional concentrations
    north_america_customers: {
      sql: `${customer.country_region_code} IN ('US', 'CA', 'MX')`
    },
    
    europe_customers: {
      sql: `${country_region.eu_country_region_code} IS NOT NULL 
            OR ${customer.country_region_code} IN ('GB', 'CH', 'NO')`
    },
    
    asia_pacific_customers: {
      sql: `${customer.country_region_code} IN ('JP', 'CN', 'AU', 'SG', 'KR', 'IN', 'TH', 'MY')`
    },
    
    // Customer Engagement Levels
    highly_engaged_customers: {
      sql: `${customer.no_of_invoices} >= 12
            OR ${customer.no_of_orders} >= 24
            OR ${customer.no_of_quotes} >= 10`
    },
    
    moderately_engaged_customers: {
      sql: `(${customer.no_of_invoices} >= 4 AND ${customer.no_of_invoices} < 12)
            OR (${customer.no_of_orders} >= 8 AND ${customer.no_of_orders} < 24)
            OR (${customer.no_of_quotes} >= 3 AND ${customer.no_of_quotes} < 10)`
    },
    
    low_engagement_customers: {
      sql: `${customer.no_of_invoices} < 4
            AND ${customer.no_of_orders} < 8
            AND ${customer.no_of_quotes} < 3`
    },
    
    // Payment Terms Analysis - Cash flow impact
    net_30_customers: {
      sql: `${customer.payment_terms_code} LIKE '%30%'`
    },
    
    net_60_customers: {
      sql: `${customer.payment_terms_code} LIKE '%60%'`
    },
    
    cash_customers: {
      sql: `${customer.payment_terms_code} LIKE '%COD%' 
            OR ${customer.payment_terms_code} LIKE '%CASH%'
            OR ${customer.payment_terms_code} LIKE '%0%'`
    },
    
    // Digital Engagement Indicators
    digitally_connected_customers: {
      sql: `${customer.e_mail} IS NOT NULL 
            AND ${customer.e_mail} != ''
            AND ${customer.mobile_phone_no} IS NOT NULL 
            AND ${customer.mobile_phone_no} != ''`
    },
    
    // VAT and Tax Compliance Segments
    vat_registered_customers: {
      sql: `${customer.vat_registration_no} IS NOT NULL 
            AND ${customer.vat_registration_no} != ''
            AND ${customer.tax_liable} = true`
    },
    
    // Customer Lifecycle Stages
    new_customers: {
      sql: `${customer.system_created_at} >= DATEADD(month, -6, CURRENT_DATE())`
    },
    
    established_customers: {
      sql: `${customer.system_created_at} < DATEADD(month, -6, CURRENT_DATE())
            AND ${customer.system_created_at} >= DATEADD(year, -2, CURRENT_DATE())`
    },
    
    longtime_customers: {
      sql: `${customer.system_created_at} < DATEADD(year, -2, CURRENT_DATE())`
    },
    
    // Privacy and Compliance Segments
    privacy_protected_customers: {
      sql: `${customer.privacy_blocked} = true`
    },
    
    gdpr_relevant_customers: {
      sql: `${country_region.eu_country_region_code} IS NOT NULL
            AND ${customer.privacy_blocked} = false`
    }
  }
});