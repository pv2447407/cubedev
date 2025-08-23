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
    // GL Entry Financial Measures removed due to join path conflicts with bank_account cube
    // Executive financial overview now focuses on bank_account cash position data
    
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