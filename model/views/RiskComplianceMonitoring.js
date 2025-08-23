/**
 * Risk and Compliance Monitoring View
 * 
 * Comprehensive risk management and compliance monitoring dashboard for C-level executives,
 * board members, and risk management teams focusing on credit risk exposure, compliance
 * metrics, currency exposure, audit trail metrics, and control effectiveness.
 * 
 * Provides:
 * - Credit risk exposure (customer concentrations, aging, limits)
 * - Compliance metrics (tax compliance, regulatory reporting, audit trails)
 * - Currency exposure (FX risk, multi-currency positions)
 * - Audit trail metrics (transaction integrity, segregation of duties)
 * - Control effectiveness (approval workflows, authorization limits)
 * - Regulatory reporting readiness (GAAP, IFRS, local requirements)
 * 
 * Target Audience: CRO, CFO, CAO, Board Members, Internal Audit, Risk Committee
 */

view('risk_compliance_monitoring', {
  description: 'Comprehensive risk and compliance monitoring dashboard with credit risk, regulatory compliance, currency exposure, and audit trail analytics',
  
  includes: [
    // ===== FINANCIAL TRANSACTION RISK ANALYSIS =====
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
    g_l_entry.user_id,
    g_l_entry.global_dimension_1_code,
    g_l_entry.global_dimension_2_code,
    g_l_entry.business_unit_code,
    g_l_entry.gen_bus_posting_group,
    g_l_entry.gen_prod_posting_group,
    g_l_entry.vat_bus_posting_group,
    g_l_entry.vat_prod_posting_group,
    g_l_entry.tax_liable,
    g_l_entry.reversed,
    g_l_entry.journal_batch_name,
    g_l_entry.company_id,
    
    // ===== ACCOUNT STRUCTURE AND CONTROL FRAMEWORK =====
    g_l_account.total_balance,
    g_l_account.total_debit_amount,
    g_l_account.total_credit_amount,
    g_l_account.average_balance,
    g_l_account.posting_accounts_count,
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
    
    // ===== CREDIT RISK AND CUSTOMER EXPOSURE =====
    customer.total_customer_balance,
    customer.average_customer_balance,
    customer.active_customers_count,
    customer.blocked_customers_count,
    customer.customers_with_balance_count,
    customer.customers_with_credit_balance_count,
    customer.privacy_blocked_customers_count,
    customer.tax_liable_customers_count,
    customer.max_customer_balance,
    customer.min_customer_balance,
    customer.customers_by_currency,
    customer.customers_by_payment_terms,
    customer.count,
    customer.no,
    customer.name,
    customer.country_region_code,
    customer.blocked,
    customer.privacy_blocked,
    customer.tax_liable,
    customer.customer_posting_group,
    customer.gen_bus_posting_group,
    customer.vat_registration_no,
    customer.payment_terms_code,
    customer.payment_method_code,
    customer.currency_code,
    customer.company_id,
    
    // ===== CASH AND LIQUIDITY RISK MONITORING =====
    bank_account.count,
    bank_account.no,
    bank_account.name,
    bank_account.balance,
    bank_account.balance_lcy,
    bank_account.balance_last_statement,
    bank_account.net_change,
    bank_account.net_change_lcy,
    bank_account.min_balance,
    bank_account.currency_code,
    bank_account.bank_account_no,
    bank_account.iban,
    bank_account.swift_code,
    bank_account.blocked,
    bank_account.bank_acc_posting_group,
    bank_account.country_region_code,
    bank_account.company_id,
    
    // ===== EMPLOYEE ACCESS AND AUTHORIZATION CONTROL =====
    employee.count,
    employee.no,
    employee.company_id,
    
    // ===== COMPANY GOVERNANCE STRUCTURE =====
    company.count,
    company.id,
    company.display_name,
    company.company_id
  ]
});