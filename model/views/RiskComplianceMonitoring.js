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
    {
      cube: 'g_l_entry',
      measures: [
        'total_amount',
        'total_debit_amount', 
        'total_credit_amount',
        'total_vat_amount',
        'net_amount',
        'average_transaction_amount',
        'debit_transaction_count',
        'credit_transaction_count',
        'reversed_entries_count',
        'running_balance',
        'count'
      ],
      dimensions: [
        'entry_no',
        'posting_date',
        'document_date',
        'document_type',
        'document_no',
        'external_document_no',
        'g_laccount_no',
        'g_laccount_name',
        'description',
        'source_type',
        'source_no',
        'source_code',
        'user_id',
        'global_dimension_1_code',
        'global_dimension_2_code',
        'business_unit_code',
        'gen_bus_posting_group',
        'gen_prod_posting_group',
        'vat_bus_posting_group',
        'vat_prod_posting_group',
        'tax_liable',
        'reversed',
        'reversed_entry_no',
        'reversed_by_entry_no',
        'journal_batch_name',
        'journal_templ_name',
        'company_id'
      ]
    },
    
    // ===== ACCOUNT STRUCTURE AND CONTROL FRAMEWORK =====
    {
      cube: 'g_l_account',
      measures: [
        'total_balance',
        'total_debit_amount',
        'total_credit_amount',
        'average_balance',
        'posting_accounts_count',
        'blocked_accounts_count',
        'direct_posting_accounts_count',
        'reconciliation_accounts_count',
        'income_statement_accounts_count',
        'balance_sheet_accounts_count',
        'tax_liable_accounts_count',
        'count'
      ],
      dimensions: [
        'no',
        'name',
        'account_type',
        'income_balance',
        'account_category',
        'account_subcategory_descript',
        'blocked',
        'direct_posting',
        'reconciliation_account',
        'tax_liable',
        'gen_bus_posting_group',
        'gen_prod_posting_group',
        'vat_bus_posting_group',
        'vat_prod_posting_group',
        'gen_posting_type',
        'exchange_rate_adjustment',
        'automatic_ext_texts',
        'omit_default_descr_in_jnl',
        'company_id'
      ]
    },
    
    // ===== CREDIT RISK AND CUSTOMER EXPOSURE =====
    {
      cube: 'customer',
      measures: [
        'total_customer_balance',
        'average_customer_balance',
        'active_customers_count',
        'blocked_customers_count',
        'customers_with_balance_count',
        'customers_with_credit_balance_count',
        'privacy_blocked_customers_count',
        'tax_liable_customers_count',
        'max_customer_balance',
        'min_customer_balance',
        'customers_by_currency',
        'customers_by_payment_terms',
        'customers_by_posting_group',
        'count'
      ],
      dimensions: [
        'no',
        'name',
        'country_region_code',
        'blocked',
        'privacy_blocked',
        'tax_liable',
        'customer_posting_group',
        'gen_bus_posting_group',
        'vat_bus_posting_group',
        'vat_registration_no',
        'payment_terms_code',
        'payment_method_code',
        'currency_code',
        'credit_limit_lcy',
        'balance_due',
        'balance_due_lcy',
        'outstanding_invoices',
        'outstanding_invoices_lcy',
        'outstanding_orders',
        'outstanding_orders_lcy',
        'reminder_terms_code',
        'fin_charge_terms_code',
        'application_method',
        'exclude_from_pmt_practices',
        'company_id'
      ]
    },
    
    // ===== CASH AND LIQUIDITY RISK MONITORING =====
    {
      cube: 'bank_account',
      measures: [
        'count'
      ],
      dimensions: [
        'no',
        'name',
        'balance',
        'balance_lcy',
        'balance_last_statement',
        'net_change',
        'net_change_lcy',
        'min_balance',
        'currency_code',
        'bank_code',
        'bank_branch_no',
        'bank_account_no',
        'iban',
        'swift_code',
        'blocked',
        'bank_acc_posting_group',
        'country_region_code',
        'automatic_stmt_import_enabled',
        'disable_automatic_pmt_matching',
        'match_tolerance_type',
        'match_tolerance_value',
        'creditor_no',
        'use_as_default_for_currency',
        'company_id'
      ]
    },
    
    // ===== EMPLOYEE ACCESS AND AUTHORIZATION CONTROL =====
    {
      cube: 'employee',
      measures: [
        'count'
      ],
      dimensions: [
        'no',
        'first_name',
        'last_name',
        'job_title',
        'employment_date',
        'termination_date',
        'inactive_date',
        'status',
        'manager_no',
        'resource_no',
        'employee_posting_group',
        'statistics_group_code',
        'global_dimension_1_code',
        'global_dimension_2_code',
        'cost_center_code',
        'cost_object_code',
        'privacy_blocked',
        'grounds_for_term_code',
        'cause_of_inactivity_code',
        'company_id'
      ]
    },
    
    // ===== COMPANY GOVERNANCE STRUCTURE =====
    {
      cube: 'company',
      measures: [
        'count'
      ],
      dimensions: [
        'id',
        'display_name',
        'business_profile_id',
        'system_version',
        'evaluation_company'
      ]
    }
  ],

  // ===== RISK AND COMPLIANCE SEGMENTS =====
  segments: {
    
    // ===== CREDIT RISK INDICATORS =====
    
    // High-Risk Customer Balances (>$100K exposure)
    high_credit_exposure: {
      sql: `CAST(${customer.balance} AS DECIMAL(19,4)) >= 100000
            AND (${customer.blocked} = '' OR ${customer.blocked} IS NULL)`
    },
    
    // Customers Exceeding Credit Limits
    credit_limit_breaches: {
      sql: `CAST(${customer.balance} AS DECIMAL(19,4)) > CAST(${customer.credit_limit_lcy} AS DECIMAL(19,4))
            AND ${customer.credit_limit_lcy} IS NOT NULL
            AND CAST(${customer.credit_limit_lcy} AS DECIMAL(19,4)) > 0`
    },
    
    // Overdue Receivables (customers with outstanding invoices)
    overdue_receivables_risk: {
      sql: `CAST(${customer.outstanding_invoices_lcy} AS DECIMAL(19,4)) > 0
            AND (${customer.blocked} = '' OR ${customer.blocked} IS NULL)`
    },
    
    // Blocked or Restricted Customers
    restricted_customers: {
      sql: `(${customer.blocked} != '' AND ${customer.blocked} IS NOT NULL) 
            OR ${customer.privacy_blocked} = true`
    },
    
    // Foreign Customers (Country Risk)
    foreign_customer_exposure: {
      sql: `${customer.country_region_code} IS NOT NULL 
            AND ${customer.country_region_code} != ''
            AND CAST(${customer.balance} AS DECIMAL(19,4)) > 0`
    },
    
    // ===== CURRENCY AND FOREIGN EXCHANGE RISK =====
    
    // Multi-Currency Transaction Exposure
    fx_transaction_risk: {
      sql: `${g_l_entry.additional_currency_amount} IS NOT NULL 
            AND ${g_l_entry.additional_currency_amount} != '0'
            AND ${g_l_entry.additional_currency_amount} != ''`
    },
    
    // Foreign Currency Customer Balances
    fx_customer_exposure: {
      sql: `${customer.currency_code} IS NOT NULL 
            AND ${customer.currency_code} != ''
            AND CAST(${customer.balance} AS DECIMAL(19,4)) != 0`
    },
    
    // Foreign Currency Bank Accounts
    fx_cash_exposure: {
      sql: `${bank_account.currency_code} IS NOT NULL 
            AND ${bank_account.currency_code} != ''
            AND ${bank_account.blocked} = false`
    },
    
    // Exchange Rate Sensitive Accounts
    fx_sensitive_accounts: {
      sql: `${g_l_account.exchange_rate_adjustment} IS NOT NULL 
            AND ${g_l_account.exchange_rate_adjustment} != '0'
            AND ${g_l_account.exchange_rate_adjustment} != ''`
    },
    
    // ===== LIQUIDITY AND CASH RISK =====
    
    // Low Liquidity Warning (accounts below minimum)
    liquidity_risk_accounts: {
      sql: `${bank_account.blocked} = false
            AND CAST(${bank_account.balance} AS DECIMAL(19,4)) < CAST(${bank_account.min_balance} AS DECIMAL(19,4))
            AND ${bank_account.min_balance} IS NOT NULL
            AND ${bank_account.min_balance} != ''
            AND CAST(${bank_account.min_balance} AS DECIMAL(19,4)) > 0`
    },
    
    // Cash Concentration Risk (single bank dependency)
    bank_concentration_risk: {
      sql: `${bank_account.bank_code} IS NOT NULL 
            AND ${bank_account.blocked} = false
            AND CAST(${bank_account.balance} AS DECIMAL(19,4)) > 1000000`
    },
    
    // Unreconciled Bank Accounts
    reconciliation_risk: {
      sql: `${bank_account.blocked} = false
            AND ${bank_account.balance} != ${bank_account.balance_last_statement}
            AND ${bank_account.balance_last_statement} IS NOT NULL`
    },
    
    // ===== TRANSACTION CONTROL AND AUDIT TRAIL =====
    
    // High-Value Transactions Requiring Review
    high_value_review_required: {
      sql: `ABS(CAST(${g_l_entry.amount} AS DECIMAL(19,4))) >= 500000`
    },
    
    // Transactions by High-Risk Users
    sensitive_user_transactions: {
      sql: `${g_l_entry.user_id} IN ('ADMIN', 'SYSTEM', 'SUPER') 
            OR ${g_l_entry.user_id} LIKE '%ADMIN%'`
    },
    
    // Reversed or Corrected Transactions
    transaction_corrections: {
      sql: `${g_l_entry.reversed} = true 
            OR ${g_l_entry.reversed_entry_no} IS NOT NULL
            OR ${g_l_entry.reversed_by_entry_no} IS NOT NULL`
    },
    
    // Manual Journal Entries (Higher Risk)
    manual_journal_risk: {
      sql: `${g_l_entry.journal_templ_name} LIKE '%GENERAL%'
            OR ${g_l_entry.journal_templ_name} LIKE '%MANUAL%'
            OR ${g_l_entry.source_code} = 'GENJNL'`
    },
    
    // Off-Hours Transaction Risk
    after_hours_transactions: {
      sql: `EXTRACT(hour FROM ${g_l_entry.posting_date}) < 6 
            OR EXTRACT(hour FROM ${g_l_entry.posting_date}) > 20
            OR EXTRACT(dow FROM ${g_l_entry.posting_date}) IN (0, 6)`
    },
    
    // ===== TAX AND REGULATORY COMPLIANCE =====
    
    // VAT Compliance Monitoring
    vat_compliance_risk: {
      sql: `${g_l_entry.tax_liable} = true 
            AND (${g_l_entry.vat_amount} IS NULL 
                 OR CAST(${g_l_entry.vat_amount} AS DECIMAL(19,4)) = 0)
            AND CAST(${g_l_entry.amount} AS DECIMAL(19,4)) != 0`
    },
    
    // Tax-Exempt Customer Monitoring
    tax_exempt_monitoring: {
      sql: `${customer.tax_liable} = false 
            AND CAST(${customer.balance} AS DECIMAL(19,4)) > 0`
    },
    
    // Missing VAT Registration
    vat_registration_compliance: {
      sql: `${customer.tax_liable} = true 
            AND (${customer.vat_registration_no} IS NULL 
                 OR ${customer.vat_registration_no} = '')`
    },
    
    // Cross-Border Transaction Compliance
    cross_border_compliance: {
      sql: `${customer.country_region_code} IS NOT NULL 
            AND ${customer.country_region_code} != ''
            AND ${customer.tax_liable} = true
            AND CAST(${customer.balance} AS DECIMAL(19,4)) > 0`
    },
    
    // ===== INTERNAL CONTROL EFFECTIVENESS =====
    
    // Segregation of Duties Violations
    sod_risk_indicators: {
      sql: `${g_l_entry.user_id} = ${g_l_entry.source_no}
            OR ${g_l_entry.journal_batch_name} LIKE '%${g_l_entry.user_id}%'`
    },
    
    // Blocked Account Activity (Control Bypass)
    control_bypass_risk: {
      sql: `${g_l_account.blocked} = true 
            AND ${g_l_entry.g_laccount_no} = ${g_l_account.no}`
    },
    
    // Direct Posting to Restricted Accounts
    restricted_posting_risk: {
      sql: `${g_l_account.direct_posting} = false 
            AND ${g_l_entry.g_laccount_no} = ${g_l_account.no}`
    },
    
    // Reconciliation Account Monitoring
    reconciliation_control_risk: {
      sql: `${g_l_account.reconciliation_account} = true 
            AND ${g_l_entry.g_laccount_no} = ${g_l_account.no}
            AND CAST(${g_l_entry.amount} AS DECIMAL(19,4)) != 0`
    },
    
    // ===== OPERATIONAL RISK INDICATORS =====
    
    // Inactive Employee Access (Terminated Users)
    terminated_employee_risk: {
      sql: `${employee.status} = 'Inactive' 
            OR ${employee.termination_date} IS NOT NULL
            OR ${employee.inactive_date} IS NOT NULL`
    },
    
    // Privacy-Blocked Employee Activity
    privacy_breach_risk: {
      sql: `${employee.privacy_blocked} = true`
    },
    
    // Managerial Control Gaps
    management_control_gaps: {
      sql: `${employee.manager_no} IS NULL 
            AND ${employee.status} = 'Active'
            AND ${employee.job_title} NOT LIKE '%President%'
            AND ${employee.job_title} NOT LIKE '%CEO%'
            AND ${employee.job_title} NOT LIKE '%Owner%'`
    },
    
    // ===== BUSINESS CONTINUITY AND SYSTEM RISK =====
    
    // Single Points of Failure
    critical_user_dependency: {
      sql: `${g_l_entry.user_id} IN (
              SELECT user_id 
              FROM (
                SELECT user_id, COUNT(*) as transaction_count 
                FROM business_central.g_l_entry 
                WHERE posting_date >= DATEADD(day, -30, CURRENT_DATE())
                GROUP BY user_id 
                ORDER BY COUNT(*) DESC 
                LIMIT 3
              )
            )`
    },
    
    // Data Quality Issues
    data_quality_risk: {
      sql: `${g_l_entry.external_document_no} IS NULL 
            AND ${g_l_entry.source_type} IN ('Customer', 'Vendor')
            AND CAST(${g_l_entry.amount} AS DECIMAL(19,4)) != 0`
    },
    
    // Missing Documentation
    documentation_risk: {
      sql: `(${g_l_entry.description} IS NULL OR ${g_l_entry.description} = '')
            AND ABS(CAST(${g_l_entry.amount} AS DECIMAL(19,4))) >= 10000`
    },
    
    // ===== REGULATORY REPORTING READINESS =====
    
    // Period-End Close Monitoring
    period_end_transactions: {
      sql: `DATE_PART('day', ${g_l_entry.posting_date}) >= 25
            AND ${g_l_entry.posting_date} = LAST_DAY(${g_l_entry.posting_date})`
    },
    
    // Year-End Compliance Preparation
    year_end_compliance: {
      sql: `DATE_PART('month', ${g_l_entry.posting_date}) = 12
            AND DATE_PART('day', ${g_l_entry.posting_date}) >= 20`
    }
  }
});