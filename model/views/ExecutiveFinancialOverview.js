/**
 * Executive Financial Overview View
 * 
 * Comprehensive financial dashboard combining GL entries, account balances,
 * and key financial metrics for C-level executives.
 * 
 * Provides:
 * - GL entry totals and trends
 * - Account balances by category
 * - Monthly/quarterly financial summaries
 * - Year-over-year comparisons
 */

view('executive_financial_overview', {
  description: 'Executive-level financial overview combining GL entries, account balances, and key financial metrics for strategic decision making',
  
  includes: [
    // GL Entry Financial Measures - Core transactional data
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
    
    // GL Account Balances - Chart of accounts with balances
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
    
    // Customer Financial Data - Receivables and customer metrics
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
        'max_customer_balance',
        'min_customer_balance',
        'customers_by_currency',
        'count'
      ],
      dimensions: [
        'no',
        'name',
        'city',
        'country_region_code',
        'blocked',
        'tax_liable',
        'customer_posting_group',
        'gen_bus_posting_group',
        'currency_code',
        'payment_terms_code',
        'salesperson_code',
        'company_id'
      ]
    },
    
    // Bank Account Information - Cash position
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
        'currency_code',
        'bank_code',
        'iban',
        'blocked',
        'bank_acc_posting_group',
        'company_id'
      ]
    }
  ],

  // Key Performance Indicators for Executive Dashboard
  segments: {
    // Current Period Financial Health
    current_period_transactions: {
      sql: `${g_l_entry.posting_date} >= DATEADD(month, -1, CURRENT_DATE())`
    },
    
    // Prior Year Comparison Base
    prior_year_transactions: {
      sql: `${g_l_entry.posting_date} >= DATEADD(year, -1, DATEADD(month, -1, CURRENT_DATE())) 
            AND ${g_l_entry.posting_date} < DATEADD(year, -1, CURRENT_DATE())`
    },
    
    // Revenue Recognition (Income Statement accounts with positive amounts)
    revenue_transactions: {
      sql: `${g_l_account.income_balance} = 'Income Statement' 
            AND ${g_l_account.account_category} IN ('Income', 'Revenue')
            AND CAST(${g_l_entry.amount} AS DECIMAL(19,4)) > 0`
    },
    
    // Expense Recognition (Income Statement accounts with negative amounts)  
    expense_transactions: {
      sql: `${g_l_account.income_balance} = 'Income Statement'
            AND ${g_l_account.account_category} IN ('Expense', 'Cost of Goods Sold')
            AND CAST(${g_l_entry.amount} AS DECIMAL(19,4)) < 0`
    },
    
    // Balance Sheet Items
    balance_sheet_accounts: {
      sql: `${g_l_account.income_balance} = 'Balance Sheet'`
    },
    
    // High Value Transactions (for executive attention)
    high_value_transactions: {
      sql: `ABS(CAST(${g_l_entry.amount} AS DECIMAL(19,4))) >= 100000`
    },
    
    // Active Customers with Outstanding Balances
    customers_with_outstanding_balance: {
      sql: `CAST(${customer.balance} AS DECIMAL(19,4)) > 0 
            AND (${customer.blocked} = '' OR ${customer.blocked} IS NULL)`
    },
    
    // Multi-currency Operations
    foreign_currency_transactions: {
      sql: `${g_l_entry.additional_currency_amount} IS NOT NULL 
            AND ${g_l_entry.additional_currency_amount} != '0'`
    }
  }
});