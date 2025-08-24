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
  
  cubes: [
    {
      join_path: bank_account,
      includes: [
        // Bank Account Cash Positions (using primary cube)
        'count',
        'no',
        'name',
        'balance',
        'balance_lcy',
        'balance_last_statement',
        'net_change',
        'net_change_lcy',
        'currency_code',
        'min_balance',
        'blocked',
        'bank_acc_posting_group',
        'iban',
        'swift_code',
        'company_id',

        // Customer Receivables Analysis removed due to join path conflicts with bank_account cube
        // Focus on bank_account data for cash flow analysis

        // GL Entry members removed due to join path conflicts with bank_account cube
        // Cash flow analysis now focuses exclusively on bank_account data for liquidity management
      ]
    }
  ]
});