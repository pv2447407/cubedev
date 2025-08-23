/**
 * Cash Flow Analysis View
 * 
 * Comprehensive cash flow and liquidity analysis for C-level executives
 * focusing on cash position trends, receivables, payables, and working capital metrics.
 * 
 * Provides:
 * - Cash position trends and forecasting
 * - Accounts receivable aging and collection efficiency
 * - Working capital analysis
 * - Payment processing metrics
 */

view('cash_flow_analysis', {
  description: 'Executive cash flow and liquidity analysis focusing on cash position, receivables, payables, and working capital management',
  
  includes: [
    // Bank Account Cash Positions
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
        'balance_at_date',
        'balance_at_date_lcy',
        'net_change',
        'net_change_lcy',
        'currency_code',
        'min_balance',
        'blocked',
        'bank_acc_posting_group',
        'iban',
        'swift_code',
        'company_id'
      ]
    },

    // Customer Receivables Analysis
    {
      cube: 'customer', 
      measures: [
        'total_customer_balance',
        'average_customer_balance',
        'customers_with_balance_count',
        'customers_with_credit_balance_count',
        'active_customers_count',
        'blocked_customers_count',
        'max_customer_balance',
        'min_customer_balance',
        'customers_by_currency',
        'customers_by_payment_terms',
        'count'
      ],
      dimensions: [
        'no',
        'name',
        'balance',
        'balance_lcy',
        'balance_due',
        'balance_due_lcy',
        'balance_on_date',
        'balance_on_date_lcy',
        'net_change',
        'net_change_lcy',
        'debit_amount',
        'debit_amount_lcy',
        'credit_amount',
        'credit_amount_lcy',
        'outstanding_invoices',
        'outstanding_invoices_lcy',
        'outstanding_orders',
        'outstanding_orders_lcy',
        'payments',
        'payments_lcy',
        'city',
        'country_region_code',
        'blocked',
        'customer_posting_group',
        'payment_terms_code',
        'payment_method_code',
        'currency_code',
        'salesperson_code',
        'credit_limit_lcy',
        'company_id'
      ]
    },

    // GL Entry Cash Flow Related Transactions
    {
      cube: 'g_l_entry',
      measures: [
        'total_amount',
        'total_debit_amount',
        'total_credit_amount', 
        'net_amount',
        'average_transaction_amount',
        'debit_transaction_count',
        'credit_transaction_count',
        'count'
      ],
      dimensions: [
        'entry_no',
        'posting_date',
        'document_date',
        'document_type',
        'document_no',
        'g_laccount_no',
        'g_laccount_name',
        'description',
        'source_type',
        'source_no',
        'source_code',
        'global_dimension_1_code',
        'global_dimension_2_code',
        'business_unit_code',
        'company_id'
      ]
    },

    // GL Account Cash-Related Accounts
    {
      cube: 'g_l_account',
      measures: [
        'total_balance',
        'total_debit_amount',
        'total_credit_amount',
        'average_balance',
        'count'
      ],
      dimensions: [
        'no',
        'name',
        'account_type',
        'income_balance',
        'account_category',
        'account_subcategory_descript',
        'balance',
        'debit_amount',
        'credit_amount',
        'net_change',
        'reconciliation_account',
        'blocked',
        'direct_posting',
        'company_id'
      ]
    }
  ],

  // Cash Flow Specific Segments
  segments: {
    // Current Month Cash Activity
    current_month_activity: {
      sql: `${g_l_entry.posting_date} >= DATE_TRUNC('month', CURRENT_DATE())`
    },
    
    // Previous Month for Comparison
    previous_month_activity: {
      sql: `${g_l_entry.posting_date} >= DATEADD(month, -1, DATE_TRUNC('month', CURRENT_DATE()))
            AND ${g_l_entry.posting_date} < DATE_TRUNC('month', CURRENT_DATE())`
    },
    
    // Cash and Cash Equivalents (Bank accounts, petty cash, etc.)
    cash_accounts: {
      sql: `${g_l_account.account_category} = 'Assets' 
            AND (${g_l_account.account_subcategory_descript} LIKE '%Cash%'
                 OR ${g_l_account.account_subcategory_descript} LIKE '%Bank%'
                 OR ${g_l_account.name} LIKE '%Cash%'
                 OR ${g_l_account.name} LIKE '%Bank%')`
    },
    
    // Accounts Receivable
    accounts_receivable: {
      sql: `${g_l_account.account_category} = 'Assets'
            AND (${g_l_account.account_subcategory_descript} LIKE '%Receivable%'
                 OR ${g_l_account.name} LIKE '%Receivable%'
                 OR ${g_l_account.name} LIKE '%A/R%')`
    },
    
    // Accounts Payable  
    accounts_payable: {
      sql: `${g_l_account.account_category} = 'Liabilities'
            AND (${g_l_account.account_subcategory_descript} LIKE '%Payable%'
                 OR ${g_l_account.name} LIKE '%Payable%'
                 OR ${g_l_account.name} LIKE '%A/P%')`
    },
    
    // Current Assets for Working Capital
    current_assets: {
      sql: `${g_l_account.account_category} = 'Assets'
            AND ${g_l_account.account_subcategory_descript} LIKE '%Current%'`
    },
    
    // Current Liabilities for Working Capital
    current_liabilities: {
      sql: `${g_l_account.account_category} = 'Liabilities' 
            AND ${g_l_account.account_subcategory_descript} LIKE '%Current%'`
    },
    
    // High Balance Customers (potential collection focus)
    high_balance_customers: {
      sql: `CAST(${customer.balance_lcy} AS DECIMAL(19,4)) >= 50000`
    },
    
    // Overdue Customers (those with balances but past payment terms)
    customers_with_outstanding: {
      sql: `CAST(${customer.balance_lcy} AS DECIMAL(19,4)) > 0
            AND (${customer.blocked} = '' OR ${customer.blocked} IS NULL)`
    },
    
    // Foreign Currency Exposure
    foreign_currency_balances: {
      sql: `${customer.currency_code} IS NOT NULL 
            AND ${customer.currency_code} != ''
            AND ${customer.currency_code} != 'USD'`
    },
    
    // Active Bank Accounts
    active_bank_accounts: {
      sql: `${bank_account.blocked} = false
            AND CAST(${bank_account.balance_lcy} AS DECIMAL(19,4)) != 0`
    },
    
    // Low Balance Bank Accounts (liquidity risk)
    low_balance_accounts: {
      sql: `CAST(${bank_account.balance_lcy} AS DECIMAL(19,4)) < CAST(${bank_account.min_balance} AS DECIMAL(19,4))
            AND ${bank_account.blocked} = false`
    },
    
    // Large Cash Movements (for executive attention)
    large_cash_movements: {
      sql: `(${g_l_account.account_category} = 'Assets' 
             AND (${g_l_account.account_subcategory_descript} LIKE '%Cash%'
                  OR ${g_l_account.account_subcategory_descript} LIKE '%Bank%'))
            AND ABS(CAST(${g_l_entry.amount} AS DECIMAL(19,4))) >= 25000`
    },
    
    // Recent Transactions (last 30 days for trend analysis)
    recent_transactions: {
      sql: `${g_l_entry.posting_date} >= DATEADD(day, -30, CURRENT_DATE())`
    }
  }
});