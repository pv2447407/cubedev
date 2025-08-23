/**
 * Customer Segmentation View
 * 
 * Advanced customer segmentation and risk assessment for C-level executives providing:
 * - Strategic customer categories by business value
 * - Comprehensive risk assessment including credit and payment history
 * - Regional performance analysis and market penetration
 * - Industry/sector analysis for targeted business development
 * - Customer portfolio optimization insights
 * 
 * This view enables data-driven customer strategy decisions and risk management
 * by providing sophisticated segmentation based on multiple business dimensions.
 */

view('customer_segmentation', {
  description: 'Advanced customer segmentation combining value categorization, risk assessment, regional performance, and industry analysis for strategic customer portfolio management',
  
  includes: [
    // Customer Portfolio Data - Core business relationship metrics
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
        'customers_with_mobile_count'
      ],
      dimensions: [
        'no',
        'name',
        'city',
        'county',
        'country_region_code',
        'blocked',
        'privacy_blocked',
        'tax_liable',
        'customer_posting_group',
        'gen_bus_posting_group',
        'vat_bus_posting_group',
        'payment_terms_code',
        'payment_method_code',
        'currency_code',
        'customer_price_group',
        'customer_disc_group',
        'salesperson_code',
        'territory_code',
        'shipping_agent_code',
        'language_code',
        'priority',
        'statistics_group',
        'responsibility_center',
        'reminder_terms_code',
        'fin_charge_terms_code',
        'system_created_at',
        'last_modified_date_time',
        'company_id'
      ]
    },
    
    // Geographic Intelligence - Regional market analysis
    {
      cube: 'country_region',
      measures: [
        'count'
      ],
      dimensions: [
        'code',
        'name',
        'iso_code',
        'iso_numeric_code',
        'vat_scheme',
        'eu_country_region_code',
        'intrastat_code',
        'address_format',
        'contact_address_format',
        'county_name',
        'company_id'
      ]
    },
    
    // Contact Network Analysis - Relationship depth and engagement
    {
      cube: 'contact',
      measures: [
        'count'
      ],
      dimensions: [
        'no',
        'name',
        'type',
        'company_name',
        'job_title',
        'organizational_level_code',
        'salesperson_code',
        'territory_code',
        'city',
        'country_region_code',
        'language_code',
        'contact_business_relation',
        'no_of_opportunities',
        'no_of_interactions',
        'date_of_last_interaction',
        'estimated_value_lcy',
        'calcd_current_value_lcy',
        'privacy_blocked',
        'exclude_from_segment',
        'company_id'
      ]
    },
    
    // Transaction Pattern Analysis - Financial behavior indicators
    {
      cube: 'g_l_entry',
      measures: [
        'count'
      ],
      dimensions: [
        'posting_date',
        'document_type',
        'source_type',
        'source_no',
        'amount',
        'debit_amount',
        'credit_amount',
        'g_laccount_no',
        'description',
        'global_dimension_1_code',
        'global_dimension_2_code',
        'business_unit_code',
        'company_id'
      ]
    }
  ],

  // Strategic Customer Segmentation Framework
  segments: {
    
    // === VALUE-BASED SEGMENTATION ===
    
    // Platinum Customers - Highest strategic value
    platinum_customers: {
      sql: `CAST(${customer.sales_lcy} AS DECIMAL(19,4)) >= 500000
            OR CAST(${customer.profit_lcy} AS DECIMAL(19,4)) >= 100000
            OR (CAST(${customer.balance_lcy} AS DECIMAL(19,4)) >= 100000 AND ${customer.no_of_invoices} >= 20)`
    },
    
    // Gold Customers - High value with growth potential  
    gold_customers: {
      sql: `(CAST(${customer.sales_lcy} AS DECIMAL(19,4)) >= 100000 AND CAST(${customer.sales_lcy} AS DECIMAL(19,4)) < 500000)
            OR (CAST(${customer.profit_lcy} AS DECIMAL(19,4)) >= 25000 AND CAST(${customer.profit_lcy} AS DECIMAL(19,4)) < 100000)
            OR (CAST(${customer.balance_lcy} AS DECIMAL(19,4)) >= 25000 AND ${customer.no_of_invoices} >= 10)`
    },
    
    // Silver Customers - Medium value, stable relationships
    silver_customers: {
      sql: `(CAST(${customer.sales_lcy} AS DECIMAL(19,4)) >= 25000 AND CAST(${customer.sales_lcy} AS DECIMAL(19,4)) < 100000)
            OR (CAST(${customer.profit_lcy} AS DECIMAL(19,4)) >= 5000 AND CAST(${customer.profit_lcy} AS DECIMAL(19,4)) < 25000)
            OR (CAST(${customer.balance_lcy} AS DECIMAL(19,4)) >= 5000 AND ${customer.no_of_invoices} >= 5)`
    },
    
    // Bronze Customers - Basic value, cost-sensitive management
    bronze_customers: {
      sql: `CAST(${customer.sales_lcy} AS DECIMAL(19,4)) < 25000
            AND CAST(${customer.profit_lcy} AS DECIMAL(19,4)) < 5000
            AND CAST(${customer.balance_lcy} AS DECIMAL(19,4)) < 5000`
    },
    
    // === RISK ASSESSMENT CATEGORIES ===
    
    // High Risk - Immediate attention required
    high_risk_customers: {
      sql: `${customer.blocked} IN ('All', 'Ship', 'Invoice')
            OR CAST(${customer.balance_lcy} AS DECIMAL(19,4)) > CAST(${customer.credit_limit_lcy} AS DECIMAL(19,4)) * 1.2
            OR CAST(${customer.reminder_amounts_lcy} AS DECIMAL(19,4)) > 5000
            OR CAST(${customer.fin_charge_memo_amounts_lcy} AS DECIMAL(19,4)) > 1000`
    },
    
    // Medium Risk - Monitor closely
    medium_risk_customers: {
      sql: `(CAST(${customer.balance_lcy} AS DECIMAL(19,4)) > CAST(${customer.credit_limit_lcy} AS DECIMAL(19,4)) 
             AND CAST(${customer.balance_lcy} AS DECIMAL(19,4)) <= CAST(${customer.credit_limit_lcy} AS DECIMAL(19,4)) * 1.2)
            OR (CAST(${customer.reminder_amounts_lcy} AS DECIMAL(19,4)) > 0 AND CAST(${customer.reminder_amounts_lcy} AS DECIMAL(19,4)) <= 5000)
            OR ${customer.payment_terms_code} LIKE '%90%'
            OR ${customer.payment_terms_code} LIKE '%120%'`
    },
    
    // Low Risk - Stable and reliable
    low_risk_customers: {
      sql: `(${customer.blocked} = '' OR ${customer.blocked} IS NULL)
            AND CAST(${customer.balance_lcy} AS DECIMAL(19,4)) <= CAST(${customer.credit_limit_lcy} AS DECIMAL(19,4))
            AND (CAST(${customer.reminder_amounts_lcy} AS DECIMAL(19,4)) = 0 OR ${customer.reminder_amounts_lcy} IS NULL)
            AND CAST(${customer.payments_lcy} AS DECIMAL(19,4)) > 0`
    },
    
    // === REGIONAL PERFORMANCE SEGMENTS ===
    
    // Strategic Markets - Key geographic focus areas
    strategic_markets: {
      sql: `${customer.country_region_code} IN ('US', 'GB', 'DE', 'FR', 'CA', 'AU', 'JP')`
    },
    
    // Emerging Markets - Growth opportunities
    emerging_markets: {
      sql: `${customer.country_region_code} IN ('CN', 'IN', 'BR', 'MX', 'RU', 'KR', 'SG', 'TH', 'MY')`
    },
    
    // Mature Markets - Established presence
    mature_markets: {
      sql: `${country_region.eu_country_region_code} IS NOT NULL
            OR ${customer.country_region_code} IN ('US', 'CA', 'AU', 'NZ', 'JP')`
    },
    
    // Domestic Market - Home country operations
    domestic_customers: {
      sql: `${customer.country_region_code} = 'US' OR ${customer.country_region_code} IS NULL`
    },
    
    // === INDUSTRY/SECTOR ANALYSIS ===
    
    // Enterprise Customers - Large business indicators
    enterprise_customers: {
      sql: `${customer.vat_registration_no} IS NOT NULL
            AND CAST(${customer.sales_lcy} AS DECIMAL(19,4)) >= 100000
            AND ${customer.no_of_invoices} >= 12
            AND ${customer.customer_posting_group} LIKE '%ENT%'`
    },
    
    // SMB Customers - Small to medium business
    smb_customers: {
      sql: `CAST(${customer.sales_lcy} AS DECIMAL(19,4)) < 100000
            AND CAST(${customer.sales_lcy} AS DECIMAL(19,4)) >= 10000
            AND ${customer.no_of_invoices} >= 3`
    },
    
    // Government Customers - Public sector
    government_customers: {
      sql: `${customer.customer_posting_group} LIKE '%GOV%'
            OR ${customer.gen_bus_posting_group} LIKE '%GOV%'
            OR ${customer.name} LIKE '%GOVERNMENT%'
            OR ${customer.name} LIKE '%FEDERAL%'
            OR ${customer.name} LIKE '%STATE%'
            OR ${customer.name} LIKE '%CITY%'`
    },
    
    // Manufacturing Sector
    manufacturing_customers: {
      sql: `${customer.customer_posting_group} LIKE '%MFG%'
            OR ${customer.gen_bus_posting_group} LIKE '%MANUF%'
            OR ${customer.name} LIKE '%MANUFACTURING%'
            OR ${customer.name} LIKE '%FACTORY%'`
    },
    
    // Retail/Distribution Sector
    retail_customers: {
      sql: `${customer.customer_posting_group} LIKE '%RETAIL%'
            OR ${customer.gen_bus_posting_group} LIKE '%DIST%'
            OR ${customer.name} LIKE '%RETAIL%'
            OR ${customer.name} LIKE '%DISTRIBUTION%'`
    },
    
    // === ENGAGEMENT AND LIFECYCLE SEGMENTS ===
    
    // Highly Active - Frequent transactions
    highly_active_customers: {
      sql: `${customer.no_of_invoices} >= 20
            OR ${customer.no_of_orders} >= 30
            OR ${customer.no_of_quotes} >= 15
            OR DATEDIFF(day, ${customer.last_modified_date_time}, CURRENT_DATE()) <= 30`
    },
    
    // Moderately Active - Regular engagement
    moderately_active_customers: {
      sql: `(${customer.no_of_invoices} >= 5 AND ${customer.no_of_invoices} < 20)
            OR (${customer.no_of_orders} >= 10 AND ${customer.no_of_orders} < 30)
            OR (${customer.no_of_quotes} >= 5 AND ${customer.no_of_quotes} < 15)
            OR (DATEDIFF(day, ${customer.last_modified_date_time}, CURRENT_DATE()) > 30 AND DATEDIFF(day, ${customer.last_modified_date_time}, CURRENT_DATE()) <= 90)`
    },
    
    // At Risk of Churn - Declining engagement
    at_risk_customers: {
      sql: `DATEDIFF(day, ${customer.last_modified_date_time}, CURRENT_DATE()) > 180
            OR (${customer.no_of_invoices} > 0 AND DATEDIFF(day, ${customer.last_modified_date_time}, CURRENT_DATE()) > 90)
            OR ${customer.no_of_quotes} = 0`
    },
    
    // New Acquisitions - Recent customer additions
    new_acquisitions: {
      sql: `${customer.system_created_at} >= DATEADD(month, -3, CURRENT_DATE())`
    },
    
    // === PAYMENT AND CREDIT BEHAVIOR ===
    
    // Excellent Payment History
    excellent_payers: {
      sql: `CAST(${customer.payments_lcy} AS DECIMAL(19,4)) > 0
            AND (${customer.reminder_amounts_lcy} = '0' OR ${customer.reminder_amounts_lcy} IS NULL)
            AND (${customer.fin_charge_memo_amounts_lcy} = '0' OR ${customer.fin_charge_memo_amounts_lcy} IS NULL)
            AND ${customer.payment_terms_code} NOT LIKE '%90%'`
    },
    
    // Cash Flow Sensitive - Extended payment terms
    cash_flow_sensitive: {
      sql: `${customer.payment_terms_code} LIKE '%60%'
            OR ${customer.payment_terms_code} LIKE '%90%'
            OR ${customer.payment_terms_code} LIKE '%120%'`
    },
    
    // Prepayment Customers - Cash in advance
    prepayment_customers: {
      sql: `CAST(${customer.prepayment} AS DECIMAL(19,4)) > 0
            OR ${customer.payment_terms_code} LIKE '%PREPAY%'
            OR ${customer.payment_terms_code} LIKE '%ADVANCE%'`
    },
    
    // === DIGITAL AND COMMUNICATION READINESS ===
    
    // Digitally Enabled - Full digital engagement capability
    digitally_enabled: {
      sql: `${customer.e_mail} IS NOT NULL 
            AND ${customer.e_mail} != ''
            AND ${customer.mobile_phone_no} IS NOT NULL 
            AND ${customer.mobile_phone_no} != ''
            AND ${customer.document_sending_profile} IS NOT NULL`
    },
    
    // Traditional Communication - Limited digital presence
    traditional_communication: {
      sql: `(${customer.e_mail} IS NULL OR ${customer.e_mail} = '')
            AND ${customer.phone_no} IS NOT NULL`
    }
  }
});