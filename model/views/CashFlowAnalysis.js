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
    bank_account.count,
    bank_account.no,
    bank_account.name,
    bank_account.balance,
    bank_account.balance_lcy,
    bank_account.balance_last_statement,
    bank_account.net_change,
    bank_account.net_change_lcy,
    bank_account.currency_code,
    bank_account.min_balance,
    bank_account.blocked,
    bank_account.bank_acc_posting_group,
    bank_account.iban,
    bank_account.swift_code,
    bank_account.company_id,

    // Customer Receivables Analysis
    customer.total_customer_balance,
    customer.average_customer_balance,
    customer.customers_with_balance_count,
    customer.customers_with_credit_balance_count,
    customer.active_customers_count,
    customer.blocked_customers_count,
    customer.max_customer_balance,
    customer.min_customer_balance,
    customer.customers_by_currency,
    customer.customers_by_payment_terms,
    customer.count,
    customer.no,
    customer.name,
    customer.city,
    customer.country_region_code,
    customer.blocked,
    customer.customer_posting_group,
    customer.payment_terms_code,
    customer.payment_method_code,
    customer.currency_code,
    customer.salesperson_code,
    customer.company_id,

    // GL Entry Cash Flow Related Transactions
    g_l_entry.total_amount,
    g_l_entry.total_debit_amount,
    g_l_entry.total_credit_amount, 
    g_l_entry.net_amount,
    g_l_entry.average_transaction_amount,
    g_l_entry.debit_transaction_count,
    g_l_entry.credit_transaction_count,
    g_l_entry.count,
    g_l_entry.entry_no,
    g_l_entry.posting_date,
    g_l_entry.document_date,
    g_l_entry.document_type,
    g_l_entry.document_no,
    g_l_entry.g_laccount_no,
    g_l_entry.g_laccount_name,
    g_l_entry.description,
    g_l_entry.source_type,
    g_l_entry.source_no,
    g_l_entry.source_code,
    g_l_entry.global_dimension_1_code,
    g_l_entry.global_dimension_2_code,
    g_l_entry.business_unit_code,
    g_l_entry.company_id,

    // GL Account Cash-Related Accounts
    g_l_account.total_balance,
    g_l_account.total_debit_amount,
    g_l_account.total_credit_amount,
    g_l_account.average_balance,
    g_l_account.count,
    g_l_account.no,
    g_l_account.name,
    g_l_account.account_type,
    g_l_account.income_balance,
    g_l_account.account_category,
    g_l_account.account_subcategory_descript,
    g_l_account.reconciliation_account,
    g_l_account.blocked,
    g_l_account.direct_posting,
    g_l_account.company_id
  ]
});