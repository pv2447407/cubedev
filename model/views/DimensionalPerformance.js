/**
 * Dimensional Performance View
 * 
 * Multi-dimensional business analysis for C-level executives focusing on
 * performance across business dimensions, cost center analysis, department
 * performance, project profitability, and global dimension analysis.
 * 
 * Provides:
 * - Performance metrics by business dimensions
 * - Cost center financial analysis and efficiency
 * - Department/division performance comparisons
 * - Project profitability and resource allocation
 * - Global dimension analysis for strategic insights
 * - Cross-dimensional correlation analysis
 */

view('dimensional_performance', {
  description: 'Multi-dimensional business performance analysis for C-level strategic decision making across cost centers, departments, projects, and global dimensions',
  
  includes: [
    // GL Entry Dimensional Analysis - Core financial performance by dimensions
    {
      cube: 'g_l_entry',
      measures: [
        'count',
        'total_amount',
        'total_debit_amount',
        'total_credit_amount',
        'total_vat_amount',
        'net_amount',
        'average_transaction_amount',
        'debit_transaction_count',
        'credit_transaction_count',
        'running_balance'
      ],
      dimensions: [
        'posting_date',
        'document_date',
        'document_type',
        'document_no',
        'g_laccount_no',
        'g_laccount_name',
        'description',
        'global_dimension_1_code',
        'global_dimension_2_code',
        'business_unit_code',
        'dimension_set_id',
        'source_type',
        'source_code',
        'journal_batch_name',
        'gen_bus_posting_group',
        'gen_prod_posting_group',
        'job_no',
        'company_id'
      ]
    },

    // Dimension Set Entry Analysis - Detailed dimensional breakdowns
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
        'company_id'
      ]
    },

    // Dimension Values Performance - Individual dimension value analysis
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
        'dimension_value_id',
        'blocked',
        'global_dimension_no',
        'totaling',
        'consolidation_code',
        'indentation',
        'company_id'
      ]
    },

    // Base Dimensions - Dimension structure and hierarchy
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
        'map_to_icdimension_code',
        'company_id'
      ]
    },

    // Employee Dimensional Performance - Staff performance by dimensions
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
        'status',
        'employment_date',
        'manager_no',
        'cost_center_code',
        'cost_object_code',
        'global_dimension_1_code',
        'global_dimension_2_code',
        'statistics_group_code',
        'employee_posting_group',
        'resource_no',
        'salespers_purch_code',
        'company_id'
      ]
    },

    // Journal Line Dimensional Analysis - Journal processing by dimensions
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
        'document_type',
        'account_type',
        'account_no',
        'description',
        'amount',
        'shortcut_dimension_1_code',
        'shortcut_dimension_2_code',
        'dimension_set_id',
        'global_dimension_1_code',
        'global_dimension_2_code',
        'business_unit_code',
        'job_no',
        'job_task_no',
        'company_id'
      ]
    }
  ],

  // Dimensional Performance Segments for Strategic Analysis
  segments: {
    // Current Quarter Performance
    current_quarter_performance: {
      sql: `${g_l_entry.posting_date} >= DATE_TRUNC('quarter', CURRENT_DATE())`
    },
    
    // Prior Quarter Comparison
    prior_quarter_performance: {
      sql: `${g_l_entry.posting_date} >= DATE_TRUNC('quarter', DATEADD(quarter, -1, CURRENT_DATE()))
            AND ${g_l_entry.posting_date} < DATE_TRUNC('quarter', CURRENT_DATE())`
    },

    // Year-to-Date Performance
    ytd_performance: {
      sql: `${g_l_entry.posting_date} >= DATE_TRUNC('year', CURRENT_DATE())`
    },

    // Cost Center Performance Analysis
    cost_center_analysis: {
      sql: `${employee.cost_center_code} IS NOT NULL 
            OR ${g_l_entry.global_dimension_1_code} LIKE 'CC%'
            OR ${dimension_value.dimension_code} = 'COST_CENTER'`
    },

    // Department Performance Analysis
    department_analysis: {
      sql: `${g_l_entry.business_unit_code} IS NOT NULL
            OR ${employee.global_dimension_1_code} IS NOT NULL
            OR ${dimension_value.dimension_code} = 'DEPARTMENT'`
    },

    // Project Performance Analysis
    project_analysis: {
      sql: `${g_l_entry.job_no} IS NOT NULL
            OR ${gen_journal_line.job_no} IS NOT NULL
            OR ${dimension_value.dimension_code} = 'PROJECT'`
    },

    // Global Dimension 1 Performance - Primary business dimension
    global_dim_1_performance: {
      sql: `${g_l_entry.global_dimension_1_code} IS NOT NULL 
            AND ${g_l_entry.global_dimension_1_code} != ''`
    },

    // Global Dimension 2 Performance - Secondary business dimension
    global_dim_2_performance: {
      sql: `${g_l_entry.global_dimension_2_code} IS NOT NULL 
            AND ${g_l_entry.global_dimension_2_code} != ''`
    },

    // High-Value Dimensional Transactions
    high_value_dimensional: {
      sql: `ABS(CAST(${g_l_entry.amount} AS DECIMAL(19,4))) >= 50000
            AND ${g_l_entry.dimension_set_id} IS NOT NULL`
    },

    // Multi-Dimensional Complexity Analysis
    complex_multi_dimensional: {
      sql: `${g_l_entry.dimension_set_id} IS NOT NULL
            AND (${g_l_entry.global_dimension_1_code} IS NOT NULL AND ${g_l_entry.global_dimension_1_code} != '')
            AND (${g_l_entry.global_dimension_2_code} IS NOT NULL AND ${g_l_entry.global_dimension_2_code} != '')
            AND ${g_l_entry.business_unit_code} IS NOT NULL`
    },

    // Revenue-Generating Dimensions
    revenue_dimensions: {
      sql: `CAST(${g_l_entry.amount} AS DECIMAL(19,4)) > 0
            AND ${g_l_entry.source_type} IN ('Customer', 'Sale')
            AND ${g_l_entry.dimension_set_id} IS NOT NULL`
    },

    // Cost-Incurring Dimensions
    cost_dimensions: {
      sql: `CAST(${g_l_entry.amount} AS DECIMAL(19,4)) < 0
            AND ${g_l_entry.source_type} IN ('Vendor', 'Purchase', 'Expense')
            AND ${g_l_entry.dimension_set_id} IS NOT NULL`
    },

    // Inter-Company Dimensional Transactions
    intercompany_dimensional: {
      sql: `${g_l_entry.ic_partner_code} IS NOT NULL
            AND ${g_l_entry.dimension_set_id} IS NOT NULL`
    },

    // Active Dimension Values
    active_dimension_values: {
      sql: `${dimension_value.blocked} = false OR ${dimension_value.blocked} IS NULL`
    },

    // Hierarchical Dimensions - dimension values with totaling/rollup capabilities
    hierarchical_dimensions: {
      sql: `${dimension_value.dimension_value_type} IN ('Total', 'Begin-Total', 'End-Total')
            OR ${dimension_value.totaling} IS NOT NULL`
    },

    // Standard Dimensions - posting-level dimension values
    standard_dimensions: {
      sql: `${dimension_value.dimension_value_type} = 'Standard'
            OR ${dimension_value.dimension_value_type} IS NULL`
    },

    // Global Dimension Usage - dimensions configured as global (shortcut) dimensions
    global_dimension_usage: {
      sql: `${dimension_value.global_dimension_no} IN (1, 2)
            AND ${dimension_set_entry.global_dimension_no} IN (1, 2)`
    },

    // Consolidation Dimensions - dimensions used in financial consolidation
    consolidation_dimensions: {
      sql: `${dimension_value.consolidation_code} IS NOT NULL
            OR ${dimension.consolidation_code} IS NOT NULL`
    },

    // Management Reporting Dimensions - dimensions relevant for executive reporting
    management_reporting_dimensions: {
      sql: `${dimension.code} IN ('DEPARTMENT', 'COSTCENTER', 'PROJECT', 'REGION', 'PRODUCT', 'CUSTOMER_GROUP')
            OR ${dimension.description} LIKE '%Management%'
            OR ${dimension.description} LIKE '%Strategic%'`
    },

    // Operational Dimensions - dimensions used in day-to-day operations
    operational_dimensions: {
      sql: `${dimension.code} IN ('LOCATION', 'EMPLOYEE', 'EQUIPMENT', 'ACTIVITY')
            OR ${dimension_set_entry.dimension_code} IN ('LOCATION', 'EMPLOYEE', 'EQUIPMENT')`
    },

    // Cross-Dimensional Analysis - transactions spanning multiple dimension types
    cross_dimensional_analysis: {
      sql: `${g_l_entry.dimension_set_id} IN (
              SELECT dimension_set_id 
              FROM BUSINESS_CENTRAL.DIMENSION_SET_ENTRY 
              WHERE dimension_set_id IS NOT NULL
              GROUP BY dimension_set_id 
              HAVING COUNT(DISTINCT dimension_code) >= 3
            )`
    },

    // Performance Above Benchmark - dimensions performing above average
    above_benchmark_performance: {
      sql: `${g_l_entry.dimension_set_id} IN (
              SELECT dse.dimension_set_id
              FROM BUSINESS_CENTRAL.DIMENSION_SET_ENTRY dse
              JOIN BUSINESS_CENTRAL.G_L_ENTRY gle ON dse.dimension_set_id = gle.dimension_set_id
              WHERE gle.posting_date >= DATEADD(quarter, -1, CURRENT_DATE())
              GROUP BY dse.dimension_set_id, dse.dimension_code
              HAVING AVG(CAST(gle.amount AS DECIMAL(19,4))) > (
                SELECT AVG(CAST(amount AS DECIMAL(19,4)))
                FROM BUSINESS_CENTRAL.G_L_ENTRY 
                WHERE posting_date >= DATEADD(quarter, -1, CURRENT_DATE())
              )
            )`
    },

    // Resource Allocation Efficiency - employee-to-dimension performance mapping
    resource_allocation_efficiency: {
      sql: `${employee.resource_no} IS NOT NULL
            AND ${employee.global_dimension_1_code} IS NOT NULL
            AND ${employee.cost_center_code} IS NOT NULL`
    }
  }
});