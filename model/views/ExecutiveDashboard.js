/**
 * Executive Dashboard View - Main C-Suite Dashboard
 * 
 * Comprehensive executive dashboard combining key financial KPIs, customer metrics,
 * operational metrics, revenue and growth indicators, risk indicators, and strategic
 * initiatives tracking for C-level executives.
 * 
 * Provides:
 * - Key financial KPIs (revenue, expenses, profitability)
 * - Customer metrics (acquisition, retention, lifetime value)
 * - Operational metrics (efficiency, productivity, utilization)
 * - Revenue and growth indicators (trends, forecasts)
 * - Risk indicators (exposure, concentration, compliance)
 * - Strategic initiatives tracking (goals, milestones, performance)
 * 
 * Target Audience: CEO, CFO, COO, CRO, and Board Members
 */

view('executive_dashboard', {
  description: 'Comprehensive C-suite executive dashboard with key financial KPIs, customer metrics, operational performance, and strategic indicators',
  
  includes: [
    // ===== FINANCIAL CORE METRICS =====
    {
      cube: 'g_l_entry',
      measures: [
        'total_amount',
        'total_debit_amount', 
        'total_credit_amount',
        'total_vat_amount',
        'net_amount',
        'average_transaction_amount',
        'debit_transaction_count',
        'credit_transaction_count',
        'reversed_entries_count',
        'running_balance',
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
        'source_code',
        'global_dimension_1_code',
        'global_dimension_2_code',
        'business_unit_code',
        'gen_bus_posting_group',
        'gen_prod_posting_group',
        'vat_bus_posting_group',
        'vat_prod_posting_group',
        'company_id'
      ]
    },
    
    // ===== CHART OF ACCOUNTS STRUCTURE =====
    {
      cube: 'g_l_account',
      measures: [
        'total_balance',
        'total_debit_amount',
        'total_credit_amount',
        'average_balance',
        'posting_accounts_count',
        'heading_accounts_count',
        'total_accounts_count',
        'begin_total_accounts_count',
        'end_total_accounts_count',
        'blocked_accounts_count',
        'direct_posting_accounts_count',
        'reconciliation_accounts_count',
        'income_statement_accounts_count',
        'balance_sheet_accounts_count',
        'tax_liable_accounts_count',
        'count'
      ],
      dimensions: [
        'no',
        'name',
        'account_type',
        'income_balance',
        'account_category',
        'account_subcategory_descript',
        'blocked',
        'direct_posting',
        'reconciliation_account',
        'tax_liable',
        'gen_bus_posting_group',
        'gen_prod_posting_group',
        'vat_bus_posting_group',
        'vat_prod_posting_group',
        'gen_posting_type',
        'company_id'
      ]
    },
    
    // ===== CUSTOMER PERFORMANCE METRICS =====
    {
      cube: 'customer',
      measures: [
        'total_customer_balance',
        'average_customer_balance',
        'active_customers_count',
        'blocked_customers_count',
        'customers_with_balance_count',
        'customers_with_credit_balance_count',
        'tax_liable_customers_count',
        'privacy_blocked_customers_count',
        'max_customer_balance',
        'min_customer_balance',
        'customers_by_currency',
        'customers_by_payment_terms',
        'customers_by_price_group',
        'customers_with_email_count',
        'customers_with_mobile_count',
        'count'
      ],
      dimensions: [
        'no',
        'name',
        'city',
        'country_region_code',
        'blocked',
        'privacy_blocked',
        'tax_liable',
        'prices_including_vat',
        'customer_posting_group',
        'gen_bus_posting_group',
        'vat_registration_no',
        'payment_terms_code',
        'payment_method_code',
        'currency_code',
        'customer_price_group',
        'salesperson_code',
        'shipping_agent_code',
        'language_code',
        'company_id'
      ]
    },
    
    // ===== CASH POSITION AND LIQUIDITY =====
    {
      cube: 'bank_account',
      measures: [
        'count'
      ],
      dimensions: [
        'no',
        'name',
        'balance',
        'balance_lcy',
        'balance_last_statement',
        'net_change',
        'net_change_lcy',
        'min_balance',
        'currency_code',
        'bank_code',
        'bank_branch_no',
        'bank_account_no',
        'iban',
        'swift_code',
        'blocked',
        'bank_acc_posting_group',
        'country_region_code',
        'automatic_stmt_import_enabled',
        'company_id'
      ]
    },
    
    // ===== ORGANIZATIONAL STRUCTURE =====
    {
      cube: 'employee',
      measures: [
        'count'
      ],
      dimensions: [
        'no',
        'first_name',
        'last_name',
        'job_title',
        'employment_date',
        'termination_date',
        'status',
        'inactive_date',
        'manager_no',
        'resource_no',
        'salespers_purch_code',
        'employee_posting_group',
        'emplymt_contract_code',
        'statistics_group_code',
        'global_dimension_1_code',
        'global_dimension_2_code',
        'cost_center_code',
        'cost_object_code',
        'country_region_code',
        'company_email',
        'privacy_blocked',
        'company_id'
      ]
    },
    
    // ===== COMPANY INFORMATION =====
    {
      cube: 'company',
      measures: [
        'count'
      ],
      dimensions: [
        'id',
        'display_name',
        'business_profile_id',
        'system_version',
        'evaluation_company'
      ]
    }
  ],

  // ===== KEY PERFORMANCE INDICATORS AND SEGMENTS =====
  segments: {
    // ===== FINANCIAL HEALTH INDICATORS =====
    
    // Current Month Transactions
    current_month_activity: {
      sql: `${g_l_entry.posting_date} >= DATE_TRUNC('month', CURRENT_DATE())`
    },
    
    // Previous Month for Comparison
    previous_month_activity: {
      sql: `${g_l_entry.posting_date} >= DATE_TRUNC('month', DATEADD(month, -1, CURRENT_DATE()))
            AND ${g_l_entry.posting_date} < DATE_TRUNC('month', CURRENT_DATE())`
    },
    
    // Current Quarter Activity
    current_quarter_activity: {
      sql: `${g_l_entry.posting_date} >= DATE_TRUNC('quarter', CURRENT_DATE())`
    },
    
    // Prior Year Same Period
    prior_year_same_period: {
      sql: `${g_l_entry.posting_date} >= DATEADD(year, -1, DATE_TRUNC('month', CURRENT_DATE()))
            AND ${g_l_entry.posting_date} < DATEADD(year, -1, DATEADD(month, 1, DATE_TRUNC('month', CURRENT_DATE())))`
    },
    
    // ===== REVENUE RECOGNITION =====
    
    // Revenue Transactions (Income Statement positive amounts)
    revenue_recognition: {
      sql: `${g_l_account.income_balance} = 'Income Statement' 
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')
            AND CAST(${g_l_entry.amount} AS DECIMAL(19,4)) > 0`
    },
    
    // Operating Expenses
    operating_expenses: {
      sql: `${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Expense', 'Operating Expense')
            AND CAST(${g_l_entry.amount} AS DECIMAL(19,4)) < 0`
    },
    
    // Cost of Goods Sold
    cost_of_goods_sold: {
      sql: `${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} = 'Cost of Goods Sold'
            AND CAST(${g_l_entry.amount} AS DECIMAL(19,4)) < 0`
    },
    
    // ===== BALANCE SHEET HEALTH =====
    
    // Current Assets
    current_assets: {
      sql: `${g_l_account.income_balance} = 'Balance Sheet'
            AND ${g_l_account.account_category} IN ('Assets', 'Current Assets')`
    },
    
    // Fixed Assets
    fixed_assets: {
      sql: `${g_l_account.income_balance} = 'Balance Sheet'
            AND ${g_l_account.account_category} IN ('Fixed Assets', 'Property, Plant & Equipment')`
    },
    
    // Current Liabilities
    current_liabilities: {
      sql: `${g_l_account.income_balance} = 'Balance Sheet'
            AND ${g_l_account.account_category} IN ('Liabilities', 'Current Liabilities')`
    },
    
    // Long-term Liabilities
    long_term_liabilities: {
      sql: `${g_l_account.income_balance} = 'Balance Sheet'
            AND ${g_l_account.account_category} IN ('Long-term Liabilities', 'Non-current Liabilities')`
    },
    
    // Equity Accounts
    equity_accounts: {
      sql: `${g_l_account.income_balance} = 'Balance Sheet'
            AND ${g_l_account.account_category} IN ('Equity', 'Owner Equity', 'Retained Earnings')`
    },
    
    // ===== CUSTOMER PERFORMANCE SEGMENTS =====
    
    // High-Value Customers (top tier balances)
    high_value_customers: {
      sql: `CAST(${customer.balance} AS DECIMAL(19,4)) >= 50000`
    },
    
    // Active Customers with Outstanding Balances
    customers_outstanding_receivables: {
      sql: `CAST(${customer.balance} AS DECIMAL(19,4)) > 0 
            AND (${customer.blocked} = '' OR ${customer.blocked} IS NULL)
            AND ${customer.privacy_blocked} = false`
    },
    
    // At-Risk Customers (blocked or privacy blocked)
    at_risk_customers: {
      sql: `(${customer.blocked} != '' AND ${customer.blocked} IS NOT NULL) 
            OR ${customer.privacy_blocked} = true`
    },
    
    // International Customers
    international_customers: {
      sql: `${customer.country_region_code} IS NOT NULL 
            AND ${customer.country_region_code} != ''`
    },
    
    // Multi-Currency Customers
    multicurrency_customers: {
      sql: `${customer.currency_code} IS NOT NULL 
            AND ${customer.currency_code} != ''`
    },
    
    // ===== OPERATIONAL EFFICIENCY SEGMENTS =====
    
    // High-Volume Transactions (executive attention items)
    high_value_transactions: {
      sql: `ABS(CAST(${g_l_entry.amount} AS DECIMAL(19,4))) >= 100000`
    },
    
    // Frequent Transaction Sources
    high_frequency_sources: {
      sql: `${g_l_entry.source_type} IN ('Customer', 'Vendor', 'Bank Account')`
    },
    
    // Multi-Dimensional Transactions
    complex_transactions: {
      sql: `${g_l_entry.global_dimension_1_code} IS NOT NULL 
            AND ${g_l_entry.global_dimension_2_code} IS NOT NULL
            AND ${g_l_entry.business_unit_code} IS NOT NULL`
    },
    
    // Foreign Exchange Transactions
    fx_transactions: {
      sql: `${g_l_entry.additional_currency_amount} IS NOT NULL 
            AND ${g_l_entry.additional_currency_amount} != '0'
            AND ${g_l_entry.additional_currency_amount} != ''`
    },
    
    // VAT Transactions
    vat_applicable_transactions: {
      sql: `${g_l_entry.vat_amount} IS NOT NULL 
            AND CAST(${g_l_entry.vat_amount} AS DECIMAL(19,4)) != 0`
    },
    
    // ===== LIQUIDITY AND CASH MANAGEMENT =====
    
    // Primary Bank Accounts
    active_bank_accounts: {
      sql: `${bank_account.blocked} = false 
            AND ${bank_account.balance} IS NOT NULL`
    },
    
    // Low Balance Accounts (liquidity risk)
    low_balance_accounts: {
      sql: `${bank_account.blocked} = false
            AND CAST(${bank_account.balance} AS DECIMAL(19,4)) < CAST(${bank_account.min_balance} AS DECIMAL(19,4))
            AND ${bank_account.min_balance} IS NOT NULL
            AND ${bank_account.min_balance} != ''`
    },
    
    // Multi-Currency Bank Accounts
    foreign_currency_accounts: {
      sql: `${bank_account.currency_code} IS NOT NULL 
            AND ${bank_account.currency_code} != ''
            AND ${bank_account.blocked} = false`
    },
    
    // ===== HUMAN RESOURCES METRICS =====
    
    // Active Workforce
    active_employees: {
      sql: `${employee.status} = 'Active' 
            OR (${employee.status} IS NULL AND ${employee.termination_date} IS NULL)`
    },
    
    // Recent Hires (last 90 days)
    recent_hires: {
      sql: `${employee.employment_date} >= DATEADD(day, -90, CURRENT_DATE())`
    },
    
    // Management Level Employees
    management_employees: {
      sql: `${employee.job_title} LIKE '%Manager%' 
            OR ${employee.job_title} LIKE '%Director%' 
            OR ${employee.job_title} LIKE '%VP%'
            OR ${employee.job_title} LIKE '%President%'
            OR ${employee.job_title} LIKE '%Chief%'`
    },
    
    // Employees with Direct Reports
    managers_with_reports: {
      sql: `${employee.manager_no} IS NOT NULL`
    },
    
    // Sales Representatives
    sales_employees: {
      sql: `${employee.salespers_purch_code} IS NOT NULL 
            AND ${employee.salespers_purch_code} != ''`
    },
    
    // ===== STRATEGIC BUSINESS SEGMENTS =====
    
    // Business Unit Performance
    multi_business_unit_operations: {
      sql: `${g_l_entry.business_unit_code} IS NOT NULL 
            AND ${g_l_entry.business_unit_code} != ''`
    },
    
    // Cross-Dimensional Analysis
    dimensional_transactions: {
      sql: `${g_l_entry.global_dimension_1_code} IS NOT NULL 
            AND ${g_l_entry.global_dimension_2_code} IS NOT NULL`
    },
    
    // Tax Compliance Scope
    tax_reporting_scope: {
      sql: `${g_l_entry.tax_liable} = true 
            AND ${g_l_entry.vat_amount} IS NOT NULL
            AND CAST(${g_l_entry.vat_amount} AS DECIMAL(19,4)) != 0`
    }
  }
});