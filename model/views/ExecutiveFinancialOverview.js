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
    
    // GL Account members removed to fix join path issues with bank_account cube
    // (Executive overview focuses on bank_account cash position data)
    
    // Customer Financial Data removed due to join path conflicts with bank_account cube
    // Focus on bank_account cash position data for executive financial overview
    
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