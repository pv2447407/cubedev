/**
 * Sales Performance Dashboard View
 * 
 * Comprehensive sales and pipeline analytics for C-level executives.
 * 
 * Provides:
 * - Sales by region and territory
 * - Salesperson performance
 * - Customer acquisition metrics
 * - Average deal size and velocity
 * - Conversion rates
 */

view('sales_performance_dashboard', {
  description: 'Executive-level sales performance analytics combining customer data, revenue transactions, and sales team metrics for strategic sales management',
  
  includes: [
    // Customer Sales Data - Core customer and sales information
    {
      cube: 'customer',
      measures: [
        'count'
      ],
      dimensions: [
        'no',
        'name',
        'city',
        'country_region_code',
        'territory_code',
        'salesperson_code',
        'customer_posting_group',
        'customer_disc_group',
        'customer_price_group',
        'gen_bus_posting_group',
        'currency_code',
        'payment_terms_code',
        'payment_method_code',
        'credit_limit_lcy',
        'blocked',
        'last_date_modified',
        'system_created_at',
        'global_dimension_1_code',
        'global_dimension_2_code',
        'company_id'
      ]
    },
    
    // GL Entry Sales Transactions - Revenue and sales transaction data
    {
      cube: 'g_l_entry',
      measures: [
        'total_amount',
        'total_debit_amount', 
        'total_credit_amount',
        'net_amount',
        'average_transaction_amount',
        'count'
      ],
      dimensions: [
        'posting_date',
        'document_date',
        'document_type',
        'document_no',
        'g_laccount_no',
        'g_laccount_name',
        'description',
        'source_type',
        'source_no',
        'global_dimension_1_code',
        'global_dimension_2_code',
        'business_unit_code',
        'gen_bus_posting_group',
        'gen_prod_posting_group',
        'company_id'
      ]
    },
    
    // GL Account Sales Classification
    {
      cube: 'g_l_account',
      measures: [
        'count'
      ],
      dimensions: [
        'no',
        'name',
        'account_type',
        'income_balance',
        'account_category',
        'account_subcategory_descript',
        'company_id'
      ]
    }
  ],

  // Sales Performance Segments
  segments: {
    // Current Period Sales (Last 30 days)
    current_period_sales: {
      sql: `${g_l_entry.posting_date} >= DATEADD(day, -30, CURRENT_DATE())
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    // Prior Period Sales (30 days before last 30 days)
    prior_period_sales: {
      sql: `${g_l_entry.posting_date} >= DATEADD(day, -60, CURRENT_DATE())
            AND ${g_l_entry.posting_date} < DATEADD(day, -30, CURRENT_DATE())
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    // Current Quarter Sales
    current_quarter_sales: {
      sql: `${g_l_entry.posting_date} >= DATE_TRUNC('quarter', CURRENT_DATE())
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    // Prior Quarter Sales
    prior_quarter_sales: {
      sql: `${g_l_entry.posting_date} >= DATEADD(quarter, -1, DATE_TRUNC('quarter', CURRENT_DATE()))
            AND ${g_l_entry.posting_date} < DATE_TRUNC('quarter', CURRENT_DATE())
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    // New Customer Sales (customers created in last 90 days)
    new_customer_sales: {
      sql: `${customer.system_created_at} >= DATEADD(day, -90, CURRENT_DATE())
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    // Existing Customer Sales
    existing_customer_sales: {
      sql: `${customer.system_created_at} < DATEADD(day, -90, CURRENT_DATE())
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    // High Value Deals (>$50K)
    high_value_deals: {
      sql: `ABS(CAST(${g_l_entry.amount} AS DECIMAL(19,4))) >= 50000
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    // Medium Value Deals ($10K-$50K)
    medium_value_deals: {
      sql: `ABS(CAST(${g_l_entry.amount} AS DECIMAL(19,4))) >= 10000
            AND ABS(CAST(${g_l_entry.amount} AS DECIMAL(19,4))) < 50000
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    // Small Value Deals (<$10K)
    small_value_deals: {
      sql: `ABS(CAST(${g_l_entry.amount} AS DECIMAL(19,4))) < 10000
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    // Premium Customer Sales
    premium_customer_sales: {
      sql: `${customer.customer_price_group} LIKE '%PREMIUM%' 
            OR ${customer.customer_price_group} LIKE '%VIP%'
            OR ${customer.customer_price_group} LIKE '%ENTERPRISE%'
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    // Discounted Sales
    discounted_sales: {
      sql: `${customer.customer_disc_group} IS NOT NULL
            AND ${customer.customer_disc_group} != ''
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    // Full Price Sales
    full_price_sales: {
      sql: `(${customer.customer_disc_group} IS NULL OR ${customer.customer_disc_group} = '')
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    // North America Territory Sales
    north_america_sales: {
      sql: `${customer.country_region_code} IN ('US', 'USA', 'CA', 'MX')
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    // Europe Territory Sales
    europe_sales: {
      sql: `${customer.country_region_code} IN ('GB', 'DE', 'FR', 'IT', 'ES', 'NL', 'BE', 'SE', 'NO', 'DK', 'FI')
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    // Asia Pacific Territory Sales
    asia_pacific_sales: {
      sql: `${customer.country_region_code} IN ('JP', 'CN', 'AU', 'SG', 'HK', 'KR', 'IN', 'TH', 'MY', 'PH')
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    // Cash Payment Sales (immediate payment)
    cash_payment_sales: {
      sql: `${customer.payment_terms_code} LIKE '%CASH%' 
            OR ${customer.payment_terms_code} LIKE '%COD%'
            OR ${customer.payment_method_code} LIKE '%CASH%'
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    // Credit Sales (payment terms > 0 days)
    credit_sales: {
      sql: `${customer.payment_terms_code} NOT LIKE '%CASH%' 
            AND ${customer.payment_terms_code} NOT LIKE '%COD%'
            AND ${customer.payment_method_code} NOT LIKE '%CASH%'
            AND ${customer.payment_terms_code} IS NOT NULL
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    // Active Salesperson Sales (has assigned salesperson)
    managed_sales: {
      sql: `${customer.salesperson_code} IS NOT NULL 
            AND ${customer.salesperson_code} != ''
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    // Unmanaged Sales (no assigned salesperson)
    unmanaged_sales: {
      sql: `(${customer.salesperson_code} IS NULL OR ${customer.salesperson_code} = '')
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    // Multi-currency Sales (foreign currency transactions)
    foreign_currency_sales: {
      sql: `${customer.currency_code} IS NOT NULL 
            AND ${customer.currency_code} != ''
            AND ${customer.currency_code} NOT IN ('USD', 'CAD', 'US')
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    // Domestic Currency Sales
    domestic_currency_sales: {
      sql: `(${customer.currency_code} IS NULL 
             OR ${customer.currency_code} = ''
             OR ${customer.currency_code} IN ('USD', 'CAD', 'US'))
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    // Fast Payment Customers (quick payment terms)
    fast_payment_sales: {
      sql: `${customer.payment_terms_code} LIKE '%NET 15%' 
            OR ${customer.payment_terms_code} LIKE '%15 DAYS%'
            OR ${customer.payment_terms_code} LIKE '%NET 10%'
            OR ${customer.payment_terms_code} LIKE '%10 DAYS%'
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    // Standard Payment Customers (30-day terms)
    standard_payment_sales: {
      sql: `${customer.payment_terms_code} LIKE '%NET 30%' 
            OR ${customer.payment_terms_code} LIKE '%30 DAYS%'
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    // Extended Payment Customers (45+ days)
    extended_payment_sales: {
      sql: `${customer.payment_terms_code} LIKE '%NET 45%' 
            OR ${customer.payment_terms_code} LIKE '%45 DAYS%'
            OR ${customer.payment_terms_code} LIKE '%NET 60%'
            OR ${customer.payment_terms_code} LIKE '%60 DAYS%'
            OR ${customer.payment_terms_code} LIKE '%NET 90%'
            OR ${customer.payment_terms_code} LIKE '%90 DAYS%'
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    // High Credit Limit Customers (>$100K credit limit)
    high_credit_customers: {
      sql: `CAST(${customer.credit_limit_lcy} AS DECIMAL(19,4)) > 100000
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    // Recently Modified Customers (updated in last 30 days)
    recently_updated_customers: {
      sql: `${customer.last_date_modified} >= DATEADD(day, -30, CURRENT_DATE())
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    }
  }
});