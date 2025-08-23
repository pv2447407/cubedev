/**
 * Revenue Growth Analysis View
 * 
 * Comprehensive revenue trends and growth metrics for C-level executives.
 * 
 * Provides:
 * - Revenue by period (daily, monthly, quarterly, yearly)
 * - Year-over-year growth rates
 * - Revenue by customer segment
 * - Product/service line revenue
 * - Market penetration metrics
 */

view('revenue_growth_analysis', {
  description: 'Executive-level revenue trends and growth analysis combining GL entries, customer data, and account classifications for strategic revenue management',
  
  includes: [
    // GL Entry Revenue Data - Core revenue transactions
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
    
    // GL Account Revenue Classification
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
        'gen_bus_posting_group',
        'gen_prod_posting_group',
        'company_id'
      ]
    },
    
    // Customer Revenue Data - Customer-based revenue analysis
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
        'customer_posting_group',
        'gen_bus_posting_group',
        'currency_code',
        'payment_terms_code',
        'salesperson_code',
        'territory_code',
        'customer_disc_group',
        'customer_price_group',
        'global_dimension_1_code',
        'global_dimension_2_code',
        'company_id'
      ]
    }
  ],

  // Revenue Analysis Segments
  segments: {
    // Revenue Recognition - Income Statement Revenue Accounts
    revenue_accounts: {
      sql: `${g_l_account.income_balance} = 'Income Statement' 
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')
            AND ${g_l_account.account_type} = 'Posting'`
    },
    
    // Sales Revenue - Direct sales transactions
    sales_revenue: {
      sql: `${g_l_account.income_balance} = 'Income Statement' 
            AND ${g_l_account.account_category} = 'Income'
            AND ${g_l_entry.source_type} IN ('Customer', 'Sale')`
    },
    
    // Service Revenue - Service-based income
    service_revenue: {
      sql: `${g_l_account.income_balance} = 'Income Statement' 
            AND ${g_l_account.account_category} = 'Income'
            AND ${g_l_entry.gen_prod_posting_group} LIKE '%SERVICE%'`
    },
    
    // Current Year Revenue
    current_year_revenue: {
      sql: `${g_l_entry.posting_date} >= DATE_TRUNC('year', CURRENT_DATE())
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    // Prior Year Revenue (for YoY comparison)
    prior_year_revenue: {
      sql: `${g_l_entry.posting_date} >= DATEADD(year, -1, DATE_TRUNC('year', CURRENT_DATE()))
            AND ${g_l_entry.posting_date} < DATE_TRUNC('year', CURRENT_DATE())
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    // Current Quarter Revenue
    current_quarter_revenue: {
      sql: `${g_l_entry.posting_date} >= DATE_TRUNC('quarter', CURRENT_DATE())
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    // Prior Quarter Revenue
    prior_quarter_revenue: {
      sql: `${g_l_entry.posting_date} >= DATEADD(quarter, -1, DATE_TRUNC('quarter', CURRENT_DATE()))
            AND ${g_l_entry.posting_date} < DATE_TRUNC('quarter', CURRENT_DATE())
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    // Current Month Revenue
    current_month_revenue: {
      sql: `${g_l_entry.posting_date} >= DATE_TRUNC('month', CURRENT_DATE())
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    // Prior Month Revenue
    prior_month_revenue: {
      sql: `${g_l_entry.posting_date} >= DATEADD(month, -1, DATE_TRUNC('month', CURRENT_DATE()))
            AND ${g_l_entry.posting_date} < DATE_TRUNC('month', CURRENT_DATE())
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    // High Value Revenue Transactions (>$10K)
    high_value_revenue: {
      sql: `ABS(CAST(${g_l_entry.amount} AS DECIMAL(19,4))) >= 10000
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    // Domestic Revenue (local customers)
    domestic_revenue: {
      sql: `${customer.country_region_code} IN ('US', 'USA', 'CA')
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    // International Revenue (foreign customers)
    international_revenue: {
      sql: `${customer.country_region_code} NOT IN ('US', 'USA', 'CA')
            AND ${customer.country_region_code} IS NOT NULL
            AND ${customer.country_region_code} != ''
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    // Recurring Revenue (subscription/contract revenue)
    recurring_revenue: {
      sql: `${g_l_entry.description} LIKE '%SUBSCRIPTION%' 
            OR ${g_l_entry.description} LIKE '%RECURRING%'
            OR ${g_l_entry.description} LIKE '%CONTRACT%'
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    // One-time Revenue
    onetime_revenue: {
      sql: `${g_l_entry.description} NOT LIKE '%SUBSCRIPTION%' 
            AND ${g_l_entry.description} NOT LIKE '%RECURRING%'
            AND ${g_l_entry.description} NOT LIKE '%CONTRACT%'
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    // Premium Customer Revenue (high-value customers)
    premium_customer_revenue: {
      sql: `${customer.customer_price_group} LIKE '%PREMIUM%' 
            OR ${customer.customer_price_group} LIKE '%VIP%'
            OR ${customer.customer_price_group} LIKE '%ENTERPRISE%'
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    // Standard Customer Revenue
    standard_customer_revenue: {
      sql: `(${customer.customer_price_group} NOT LIKE '%PREMIUM%' 
             AND ${customer.customer_price_group} NOT LIKE '%VIP%'
             AND ${customer.customer_price_group} NOT LIKE '%ENTERPRISE%')
            OR ${customer.customer_price_group} IS NULL
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    // Product Revenue (vs Service Revenue)
    product_revenue: {
      sql: `${g_l_entry.gen_prod_posting_group} NOT LIKE '%SERVICE%'
            AND ${g_l_entry.gen_prod_posting_group} IS NOT NULL
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    // Territory-based Revenue Segments
    north_america_revenue: {
      sql: `${customer.country_region_code} IN ('US', 'USA', 'CA', 'MX')
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    europe_revenue: {
      sql: `${customer.country_region_code} IN ('GB', 'DE', 'FR', 'IT', 'ES', 'NL', 'BE', 'SE', 'NO', 'DK', 'FI')
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    },
    
    asia_pacific_revenue: {
      sql: `${customer.country_region_code} IN ('JP', 'CN', 'AU', 'SG', 'HK', 'KR', 'IN', 'TH', 'MY', 'PH')
            AND ${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')`
    }
  }
});