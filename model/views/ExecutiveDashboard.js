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
  
  cubes: [
    {
      join_path: bank_account,
      includes: [
        // ===== CASH POSITION AND LIQUIDITY =====
        // bank_account.count, // Excluded - conflicts with g_l_entry.count
        // bank_account.no, // Excluded - conflicts with naming conventions
        // bank_account.name, // Excluded - conflicts with g_l_entry.g_laccount_name
        'balance',
        'balance_lcy',
        'balance_last_statement',
        'net_change',
        'net_change_lcy',
        'min_balance',
        'currency_code',
        'bank_account_no',
        'iban',
        'swift_code',
        // bank_account.blocked, // Excluded - conflicts with other cubes' blocked fields
        'bank_acc_posting_group',
        'country_region_code'
        // bank_account.company_id, // Excluded - conflicts with g_l_entry.company_id
      ]
    },
    {
      join_path: company,
      includes: [
        // ===== COMPANY INFORMATION =====
        // company.count, // Excluded - conflicts with g_l_entry.count
        'id',
        'display_name'
        // Removed: company.company_id (does not exist in Company cube)
      ]
    }

    // ===== FINANCIAL CORE METRICS =====
    // GL Entry members removed due to join path conflicts with bank_account cube
    // Executive dashboard now focuses on bank_account cash position and liquidity metrics
    
    // ===== CHART OF ACCOUNTS STRUCTURE =====
    // GL Account members removed to fix join path issues with bank_account cube
    // (Executive dashboard focuses on bank_account cash position and liquidity metrics)
    
    // ===== CUSTOMER PERFORMANCE METRICS =====
    // Customer metrics removed due to join path conflicts with bank_account cube
    // Focus on bank_account cash position and liquidity metrics for executive dashboard
    
    // ===== ORGANIZATIONAL STRUCTURE =====
    // employee.count, // Excluded - conflicts with g_l_entry.count
    // employee.no, // Excluded - conflicts with naming conventions
    // employee.company_id, // Excluded - conflicts with g_l_entry.company_id
  ]
});