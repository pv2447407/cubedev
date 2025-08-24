// Simple Chart of Accounts View for Cube Cloud compatibility
// Uses the detail_trial_balance cube for balance calculations

view(`chart_of_accounts_simple_view`, {
  description: `Simplified Chart of Accounts view using detail_trial_balance cube`,
  
  includes: [
    // Account dimensions from detail_trial_balance cube
    detail_trial_balance.no,
    detail_trial_balance.name,
    detail_trial_balance.account_type,
    detail_trial_balance.account_category,
    detail_trial_balance.account_subcategory_descript,
    detail_trial_balance.income_balance,
    detail_trial_balance.direct_posting,
    detail_trial_balance.blocked,
    detail_trial_balance.reconciliation_account,
    detail_trial_balance.company_id,
    detail_trial_balance.normal_balance_side,
    detail_trial_balance.financial_statement,
    detail_trial_balance.account_status,
    
    // Balance measures from detail_trial_balance cube
    detail_trial_balance.opening_balance,
    detail_trial_balance.period_debits,
    detail_trial_balance.period_credits,
    detail_trial_balance.net_change,
    detail_trial_balance.closing_balance,
    detail_trial_balance.ytd_debits,
    detail_trial_balance.ytd_credits,
    detail_trial_balance.ytd_net_change,
    detail_trial_balance.transaction_count,
    detail_trial_balance.period_transaction_count
  ]
});