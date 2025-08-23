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
    
    // GL Account Balances - Chart of accounts with balances
    g_l_account.total_balance,
    // g_l_account.total_debit_amount, // Excluded - conflicts with g_l_entry.total_debit_amount
    // g_l_account.total_credit_amount, // Excluded - conflicts with g_l_entry.total_credit_amount
    g_l_account.average_balance,
    // g_l_account.count, // Excluded - conflicts with g_l_entry.count
    // g_l_account.no, // Excluded - conflicts with naming conventions
    // g_l_account.name, // Excluded - conflicts with g_l_entry.g_laccount_name
    g_l_account.account_type,
    g_l_account.income_balance,
    g_l_account.account_category,
    g_l_account.account_subcategory_descript,
    // g_l_account.blocked, // Excluded - conflicts with other cubes' blocked fields
    g_l_account.direct_posting,
    g_l_account.reconciliation_account,
    // g_l_account.company_id, // Excluded - conflicts with g_l_entry.company_id
    
    // Customer Financial Data - Receivables and customer metrics
    customer.total_customer_balance,
    customer.average_customer_balance,
    customer.active_customers_count,
    customer.blocked_customers_count,
    customer.customers_with_balance_count,
    customer.customers_with_credit_balance_count,
    customer.max_customer_balance,
    customer.min_customer_balance,
    customer.customers_by_currency,
    customer.customers_by_payment_terms,
    // customer.count, // Excluded - conflicts with g_l_entry.count
    // customer.no, // Excluded - conflicts with naming conventions
    // customer.name, // Excluded - conflicts with g_l_entry.g_laccount_name
    customer.city,
    customer.country_region_code,
    // customer.blocked, // Excluded - conflicts with other cubes' blocked fields
    customer.customer_posting_group,
    // customer.currency_code, // Excluded - conflicts with bank_account.currency_code
    customer.payment_terms_code,
    customer.payment_method_code,
    customer.salesperson_code,
    // customer.company_id, // Excluded - conflicts with g_l_entry.company_id
    
    // Bank Account Information - Cash position
    // bank_account.count, // Excluded - conflicts with g_l_entry.count
    // bank_account.no, // Excluded - conflicts with naming conventions
    // bank_account.name, // Excluded - conflicts with g_l_entry.g_laccount_name
    bank_account.balance,
    bank_account.balance_lcy,
    bank_account.balance_last_statement,
    bank_account.net_change,
    bank_account.net_change_lcy,
    bank_account.min_balance,
    bank_account.currency_code,
    bank_account.iban,
    bank_account.swift_code,
    // bank_account.blocked, // Excluded - conflicts with other cubes' blocked fields
    bank_account.bank_acc_posting_group
    // bank_account.company_id // Excluded - conflicts with g_l_entry.company_id
  ]
});