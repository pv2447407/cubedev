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
    g_l_entry.total_vat_amount,
    g_l_entry.net_amount,
    g_l_entry.average_transaction_amount,
    g_l_entry.debit_transaction_count,
    g_l_entry.credit_transaction_count,
    g_l_entry.reversed_entries_count,
    g_l_entry.running_balance,
    g_l_entry.count,
    g_l_entry.posting_date,
    g_l_entry.document_date,
    g_l_entry.document_type,
    g_l_entry.document_no,
    g_l_entry.g_laccount_no,
    g_l_entry.g_laccount_name,
    g_l_entry.description,
    g_l_entry.source_type,
    g_l_entry.source_code,
    g_l_entry.global_dimension_1_code,
    g_l_entry.global_dimension_2_code,
    g_l_entry.business_unit_code,
    g_l_entry.gen_bus_posting_group,
    g_l_entry.gen_prod_posting_group,
    g_l_entry.vat_bus_posting_group,
    g_l_entry.vat_prod_posting_group,
    g_l_entry.company_id,
    
    // GL Account Balances - Chart of accounts with balances
    g_l_account.total_balance,
    g_l_account.total_debit_amount,
    g_l_account.total_credit_amount,
    g_l_account.average_balance,
    g_l_account.posting_accounts_count,
    g_l_account.heading_accounts_count,
    g_l_account.total_accounts_count,
    g_l_account.begin_total_accounts_count,
    g_l_account.end_total_accounts_count,
    g_l_account.blocked_accounts_count,
    g_l_account.direct_posting_accounts_count,
    g_l_account.reconciliation_accounts_count,
    g_l_account.income_statement_accounts_count,
    g_l_account.balance_sheet_accounts_count,
    g_l_account.tax_liable_accounts_count,
    g_l_account.count,
    g_l_account.no,
    g_l_account.name,
    g_l_account.account_type,
    g_l_account.income_balance,
    g_l_account.account_category,
    g_l_account.account_subcategory_descript,
    g_l_account.blocked,
    g_l_account.direct_posting,
    g_l_account.reconciliation_account,
    g_l_account.tax_liable,
    g_l_account.gen_bus_posting_group,
    g_l_account.gen_prod_posting_group,
    g_l_account.vat_bus_posting_group,
    g_l_account.vat_prod_posting_group,
    g_l_account.gen_posting_type,
    g_l_account.company_id,
    
    // Customer Financial Data - Receivables and customer metrics
    customer.total_customer_balance,
    customer.average_customer_balance,
    customer.active_customers_count,
    customer.blocked_customers_count,
    customer.customers_with_balance_count,
    customer.customers_with_credit_balance_count,
    customer.tax_liable_customers_count,
    customer.max_customer_balance,
    customer.min_customer_balance,
    customer.customers_by_currency,
    customer.count,
    customer.no,
    customer.name,
    customer.city,
    customer.country_region_code,
    customer.blocked,
    customer.tax_liable,
    customer.customer_posting_group,
    customer.gen_bus_posting_group,
    customer.currency_code,
    customer.payment_terms_code,
    customer.salesperson_code,
    customer.company_id,
    
    // Bank Account Information - Cash position
    bank_account.count,
    bank_account.no,
    bank_account.name,
    bank_account.balance,
    bank_account.balance_lcy,
    bank_account.currency_code,
    bank_account.bank_code,
    bank_account.iban,
    bank_account.blocked,
    bank_account.bank_acc_posting_group,
    bank_account.company_id
  ]
});