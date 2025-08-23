/**
 * Operational Efficiency Metrics View
 * 
 * C-level operational KPIs focused on transaction processing efficiency,
 * journal entry volumes, dimensional performance, employee productivity,
 * and process cycle times.
 * 
 * Provides:
 * - Transaction processing efficiency metrics
 * - Journal entry volume analysis and patterns
 * - Dimensional performance across cost centers and departments
 * - Employee productivity indicators
 * - Process cycle time analysis
 * - Operational bottleneck identification
 */

view('operational_efficiency_metrics', {
  description: 'Operational efficiency KPIs for C-level executives focusing on transaction processing, journal volumes, dimensional performance, and employee productivity',
  
  includes: [
    // GL Entry Processing Efficiency - Core transaction processing metrics
    {
      cube: 'g_l_entry',
      measures: [
        'count',
        'total_amount',
        'total_debit_amount',
        'total_credit_amount',
        'average_transaction_amount',
        'debit_transaction_count',
        'credit_transaction_count',
        'reversed_entries_count'
      ],
      dimensions: [
        'posting_date',
        'document_date',
        'document_type',
        'source_type',
        'source_code',
        'journal_batch_name',
        'user_id',
        'system_created_entry',
        'system_created_by',
        'system_modified_by',
        'global_dimension_1_code',
        'global_dimension_2_code',
        'business_unit_code',
        'dimension_set_id',
        'company_id'
      ]
    },

    // Journal Line Processing - Journal entry volume and pattern analysis
    {
      cube: 'gen_journal_line',
      measures: [
        'count'
      ],
      dimensions: [
        'line_no',
        'journal_template_name',
        'journal_batch_name',
        'posting_date',
        'document_date',
        'document_type',
        'document_no',
        'account_type',
        'account_no',
        'description',
        'amount',
        'debit_amount',
        'credit_amount',
        'user_id',
        'source_code',
        'shortcut_dimension_1_code',
        'shortcut_dimension_2_code',
        'dimension_set_id',
        'system_created_at',
        'system_created_by',
        'system_modified_at',
        'system_modified_by',
        'company_id'
      ]
    },

    // Employee Productivity - Staff performance and activity metrics
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
        'status',
        'manager_no',
        'cost_center_code',
        'cost_object_code',
        'global_dimension_1_code',
        'global_dimension_2_code',
        'statistics_group_code',
        'employee_posting_group',
        'resource_no',
        'company_id'
      ]
    },

    // Dimension Set Analysis - Multi-dimensional business performance
    {
      cube: 'dimension_set_entry',
      measures: [
        'count'
      ],
      dimensions: [
        'dimension_set_id',
        'dimension_code',
        'dimension_name',
        'dimension_value_code',
        'dimension_value_name',
        'global_dimension_no',
        'system_created_at',
        'system_created_by',
        'system_modified_at',
        'system_modified_by',
        'company_id'
      ]
    },

    // Dimension Values - Performance by business dimensions
    {
      cube: 'dimension_value',
      measures: [
        'count'
      ],
      dimensions: [
        'code',
        'name',
        'dimension_code',
        'dimension_value_type',
        'blocked',
        'global_dimension_no',
        'consolidation_code',
        'company_id'
      ]
    },

    // Base Dimensions - Dimension structure and organization
    {
      cube: 'dimension',
      measures: [
        'count'
      ],
      dimensions: [
        'code',
        'name',
        'description',
        'consolidation_code',
        'blocked',
        'code_caption',
        'filter_caption',
        'company_id'
      ]
    }
  ],

  // Operational Efficiency Segments for KPI Analysis
  segments: {
    // Current Period Operational Activity
    current_month_activity: {
      sql: `${g_l_entry.posting_date} >= DATE_TRUNC('month', CURRENT_DATE())`
    },
    
    // Prior Month Comparison Base
    prior_month_activity: {
      sql: `${g_l_entry.posting_date} >= DATE_TRUNC('month', DATEADD(month, -1, CURRENT_DATE()))
            AND ${g_l_entry.posting_date} < DATE_TRUNC('month', CURRENT_DATE())`
    },

    // High-Volume Processing Days (above 90th percentile)
    high_volume_processing_days: {
      sql: `${g_l_entry.posting_date} IN (
              SELECT posting_date 
              FROM (
                SELECT posting_date, COUNT(*) as daily_count,
                       PERCENTILE_CONT(0.9) WITHIN GROUP (ORDER BY COUNT(*)) OVER() as p90
                FROM BUSINESS_CENTRAL.G_L_ENTRY 
                WHERE posting_date >= DATEADD(month, -3, CURRENT_DATE())
                GROUP BY posting_date
              ) daily_stats
              WHERE daily_count >= p90
            )`
    },

    // System-Generated vs Manual Entries
    manual_entries: {
      sql: `(${g_l_entry.system_created_entry} = false OR ${g_l_entry.system_created_entry} IS NULL)
            AND ${g_l_entry.user_id} IS NOT NULL`
    },

    // System-generated entries
    system_generated_entries: {
      sql: `${g_l_entry.system_created_entry} = true`
    },

    // Multi-dimensional transactions (complex business scenarios)
    multi_dimensional_transactions: {
      sql: `${g_l_entry.dimension_set_id} IS NOT NULL 
            AND ${g_l_entry.dimension_set_id} > 0`
    },

    // Journal Processing Bottlenecks - entries with long processing times
    delayed_journal_processing: {
      sql: `DATEDIFF(day, ${gen_journal_line.system_created_at}, ${gen_journal_line.system_modified_at}) > 1`
    },

    // Error-Prone Processing - Reversed entries indicating process issues
    error_prone_processing: {
      sql: `${g_l_entry.reversed} = true OR ${g_l_entry.reversed_entry_no} IS NOT NULL`
    },

    // Cost Center Activity - transactions with cost center dimensions
    cost_center_activity: {
      sql: `${employee.cost_center_code} IS NOT NULL 
            OR ${g_l_entry.global_dimension_1_code} LIKE 'CC%'
            OR ${g_l_entry.global_dimension_2_code} LIKE 'CC%'`
    },

    // Department Activity - department-specific transactions
    department_activity: {
      sql: `${g_l_entry.business_unit_code} IS NOT NULL
            OR ${employee.global_dimension_1_code} IS NOT NULL`
    },

    // Active Employees - currently employed staff
    active_employees: {
      sql: `${employee.status} = 'Active' 
            AND (${employee.termination_date} IS NULL OR ${employee.termination_date} > CURRENT_DATE())`
    },

    // Recent Hires - employees hired within last 6 months
    recent_hires: {
      sql: `${employee.employment_date} >= DATEADD(month, -6, CURRENT_DATE())
            AND ${employee.status} = 'Active'`
    },

    // Management Level Employees
    management_level: {
      sql: `${employee.job_title} LIKE '%Manager%' 
            OR ${employee.job_title} LIKE '%Director%'
            OR ${employee.job_title} LIKE '%VP%'
            OR ${employee.job_title} LIKE '%President%'`
    },

    // Resource-Linked Employees (trackable productivity)
    resource_linked_employees: {
      sql: `${employee.resource_no} IS NOT NULL`
    },

    // Global Dimension 1 Usage - primary business dimension activity
    global_dim_1_usage: {
      sql: `${g_l_entry.global_dimension_1_code} IS NOT NULL 
            AND ${g_l_entry.global_dimension_1_code} != ''`
    },

    // Global Dimension 2 Usage - secondary business dimension activity  
    global_dim_2_usage: {
      sql: `${g_l_entry.global_dimension_2_code} IS NOT NULL 
            AND ${g_l_entry.global_dimension_2_code} != ''`
    },

    // Complex Dimensional Analysis - transactions using multiple dimensions
    complex_dimensional_analysis: {
      sql: `(${g_l_entry.global_dimension_1_code} IS NOT NULL AND ${g_l_entry.global_dimension_1_code} != '')
            AND (${g_l_entry.global_dimension_2_code} IS NOT NULL AND ${g_l_entry.global_dimension_2_code} != '')
            AND ${g_l_entry.business_unit_code} IS NOT NULL`
    },

    // Weekend Processing - operational activity outside business hours
    weekend_processing: {
      sql: `DAYOFWEEK(${g_l_entry.posting_date}) IN (1, 7)`  // Sunday = 1, Saturday = 7
    },

    // Month-End Processing - period-end operational activity
    month_end_processing: {
      sql: `DAY(${g_l_entry.posting_date}) >= 28`
    }
  }
});