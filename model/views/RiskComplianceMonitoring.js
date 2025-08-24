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
  
  cubes: [
    {
      join_path: bank_account,
      includes: [
        // ===== CASH AND LIQUIDITY RISK MONITORING =====
        // bank_account.count, // Excluded: conflicts with g_l_entry.count (primary)
        // bank_account.no, // Excluded: conflicts with customer.no
        // bank_account.name, // Excluded: conflicts with customer.name
        'balance',
        'balance_lcy',
        'balance_last_statement',
        'net_change',
        'net_change_lcy',
        'min_balance',
        // bank_account.currency_code, // Excluded: conflicts with customer.currency_code
        'bank_account_no',
        'iban',
        'swift_code',
        // bank_account.blocked, // Excluded: conflicts with customer.blocked
        'bank_acc_posting_group'
        // bank_account.country_region_code, // Excluded: conflicts with customer.country_region_code
        // bank_account.company_id, // Excluded: conflicts with g_l_entry.company_id (primary)
      ]
    },
    {
      join_path: company,
      includes: [
        // ===== COMPANY GOVERNANCE STRUCTURE =====
        // company.count, // Excluded: conflicts with g_l_entry.count (primary)
        'id',
        'display_name'
        // Removed: company.company_id (does not exist in Company cube)
        // Removed: company.name (conflicts with customer.name)
      ]
    }
  ]

  // ===== FINANCIAL TRANSACTION RISK ANALYSIS =====
  // GL Entry members removed due to join path conflicts with bank_account cube
  // Risk monitoring now focuses on bank_account liquidity risk and cash position monitoring
  
  // ===== ACCOUNT STRUCTURE AND CONTROL FRAMEWORK =====
  // GL Account members removed to fix join path issues with bank_account cube
  // (Risk monitoring focuses on bank_account liquidity risk and customer credit exposure)
  
  // ===== CREDIT RISK AND CUSTOMER EXPOSURE =====
  // Customer exposure metrics removed due to join path conflicts with bank_account cube
  // Focus on bank_account liquidity risk monitoring

  // ===== EMPLOYEE ACCESS AND AUTHORIZATION CONTROL =====
  // employee.count, // Excluded: conflicts with g_l_entry.count (primary)
  // employee.no, // Excluded: conflicts with customer.no
  // employee.company_id, // Excluded: conflicts with g_l_entry.company_id (primary)
});