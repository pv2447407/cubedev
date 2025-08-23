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
    // Bank Account Cash Positions (using primary cube)
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

    // Customer Receivables Analysis removed due to join path conflicts with bank_account cube
    // Focus on bank_account data for cash flow analysis

    // GL Entry members removed due to join path conflicts with bank_account cube
    // Cash flow analysis now focuses exclusively on bank_account data for liquidity management
  ]
});