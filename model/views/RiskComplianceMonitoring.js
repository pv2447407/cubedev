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
    // GL Account members removed to fix join path issues with bank_account cube
    // (Risk monitoring focuses on bank_account liquidity risk and customer credit exposure)
    
    // ===== CREDIT RISK AND CUSTOMER EXPOSURE =====
    // Customer exposure metrics removed due to join path conflicts with bank_account cube
    // Focus on bank_account liquidity risk monitoring
    
    // ===== CASH AND LIQUIDITY RISK MONITORING =====
    // bank_account.count, // Excluded: conflicts with g_l_entry.count (primary)
    // bank_account.no, // Excluded: conflicts with customer.no
    // bank_account.name, // Excluded: conflicts with customer.name
    bank_account.balance,
    bank_account.balance_lcy,
    bank_account.balance_last_statement,
    bank_account.net_change,
    bank_account.net_change_lcy,
    bank_account.min_balance,
    // bank_account.currency_code, // Excluded: conflicts with customer.currency_code
    bank_account.bank_account_no,
    bank_account.iban,
    bank_account.swift_code,
    // bank_account.blocked, // Excluded: conflicts with customer.blocked
    bank_account.bank_acc_posting_group,
    // bank_account.country_region_code, // Excluded: conflicts with customer.country_region_code
    // bank_account.company_id, // Excluded: conflicts with g_l_entry.company_id (primary)
    
    // ===== EMPLOYEE ACCESS AND AUTHORIZATION CONTROL =====
    // employee.count, // Excluded: conflicts with g_l_entry.count (primary)
    // employee.no, // Excluded: conflicts with customer.no
    // employee.company_id, // Excluded: conflicts with g_l_entry.company_id (primary)
    
    // ===== COMPANY GOVERNANCE STRUCTURE =====
    // company.count, // Excluded: conflicts with g_l_entry.count (primary)
    company.id,
    company.display_name
    // Removed: company.company_id (does not exist in Company cube)
    // Removed: company.name (conflicts with customer.name)
  ]
});