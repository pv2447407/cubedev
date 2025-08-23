/**
 * Executive Dashboard View - Main C-Suite Dashboard
 * 
 * Comprehensive executive dashboard combining key financial KPIs, customer metrics,
 * operational metrics, revenue and growth indicators, risk indicators, and strategic
 * initiatives tracking for C-level executives.
 * 
 * Provides:
 * - Key financial KPIs (revenue, expenses, profitability)
 * - Customer metrics (acquisition, retention, lifetime value)
 * - Operational metrics (efficiency, productivity, utilization)
 * - Revenue and growth indicators (trends, forecasts)
 * - Risk indicators (exposure, concentration, compliance)
 * - Strategic initiatives tracking (goals, milestones, performance)
 * 
 * Target Audience: CEO, CFO, COO, CRO, and Board Members
 */

view('executive_dashboard', {
  description: 'Comprehensive C-suite executive dashboard with key financial KPIs, customer metrics, operational performance, and strategic indicators',
  
  includes: [
    // ===== FINANCIAL CORE METRICS =====
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
    
    // ===== CHART OF ACCOUNTS STRUCTURE =====
    // GL Account members removed to fix join path issues with bank_account cube
    // (Executive dashboard focuses on bank_account cash position and liquidity metrics)
    
    // ===== CUSTOMER PERFORMANCE METRICS =====
    // Customer metrics removed due to join path conflicts with bank_account cube
    // Focus on bank_account cash position and liquidity metrics for executive dashboard
    
    // ===== CASH POSITION AND LIQUIDITY =====
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
    bank_account.bank_account_no,
    bank_account.iban,
    bank_account.swift_code,
    // bank_account.blocked, // Excluded - conflicts with other cubes' blocked fields
    bank_account.bank_acc_posting_group,
    bank_account.country_region_code,
    // bank_account.company_id, // Excluded - conflicts with g_l_entry.company_id
    
    // ===== ORGANIZATIONAL STRUCTURE =====
    // employee.count, // Excluded - conflicts with g_l_entry.count
    // employee.no, // Excluded - conflicts with naming conventions
    // employee.company_id, // Excluded - conflicts with g_l_entry.company_id
    
    // ===== COMPANY INFORMATION =====
    // company.count, // Excluded - conflicts with g_l_entry.count
    company.id,
    company.display_name
    // Removed: company.company_id (does not exist in Company cube)
  ]
});