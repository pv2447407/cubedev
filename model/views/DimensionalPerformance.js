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
    g_l_entry.count,
    g_l_entry.total_amount,
    g_l_entry.total_debit_amount,
    g_l_entry.total_credit_amount,
    g_l_entry.total_vat_amount,
    g_l_entry.net_amount,
    g_l_entry.average_transaction_amount,
    g_l_entry.debit_transaction_count,
    g_l_entry.credit_transaction_count,
    g_l_entry.running_balance,
    g_l_entry.posting_date,
    g_l_entry.document_date,
    g_l_entry.document_type,
    g_l_entry.document_no,
    g_l_entry.g_laccount_no,
    g_l_entry.g_laccount_name,
    g_l_entry.description,
    g_l_entry.global_dimension_1_code,
    g_l_entry.global_dimension_2_code,
    g_l_entry.business_unit_code,
    g_l_entry.dimension_set_id,
    g_l_entry.source_type,
    g_l_entry.source_code,
    g_l_entry.journal_batch_name,
    g_l_entry.gen_bus_posting_group,
    g_l_entry.gen_prod_posting_group,
    g_l_entry.job_no,
    g_l_entry.company_id,

    // Dimension Set Entry Analysis - Detailed dimensional breakdowns
    dimension_set_entry.count,
    dimension_set_entry.dimension_set_id,
    dimension_set_entry.dimension_code,
    dimension_set_entry.dimension_name,
    dimension_set_entry.dimension_value_code,
    dimension_set_entry.dimension_value_name,
    dimension_set_entry.global_dimension_no,
    dimension_set_entry.system_created_at,
    dimension_set_entry.system_created_by,
    dimension_set_entry.company_id,

    // Dimension Values Performance - Individual dimension value analysis
    dimension_value.count,
    dimension_value.code,
    dimension_value.name,
    dimension_value.dimension_code,
    dimension_value.dimension_value_type,
    dimension_value.dimension_value_id,
    dimension_value.blocked,
    dimension_value.global_dimension_no,
    dimension_value.totaling,
    dimension_value.consolidation_code,
    dimension_value.indentation,
    dimension_value.company_id,

    // Base Dimensions - Dimension structure and hierarchy
    dimension.count,
    dimension.code,
    dimension.name,
    dimension.description,
    dimension.consolidation_code,
    dimension.blocked,
    dimension.code_caption,
    dimension.filter_caption,
    dimension.map_to_icdimension_code,
    dimension.company_id,

    // Employee Dimensional Performance - Staff performance by dimensions
    employee.count,
    employee.no,
    employee.first_name,
    employee.last_name,
    employee.job_title,
    employee.status,
    employee.employment_date,
    employee.manager_no,
    employee.cost_center_code,
    employee.cost_object_code,
    employee.global_dimension_1_code,
    employee.global_dimension_2_code,
    employee.statistics_group_code,
    employee.employee_posting_group,
    employee.resource_no,
    employee.salespers_purch_code,
    employee.company_id,

    // Journal Line Dimensional Analysis - Journal processing by dimensions
    gen_journal_line.count,
    gen_journal_line.line_no,
    gen_journal_line.journal_template_name,
    gen_journal_line.journal_batch_name,
    gen_journal_line.posting_date,
    gen_journal_line.document_type,
    gen_journal_line.account_type,
    gen_journal_line.account_no,
    gen_journal_line.description,
    gen_journal_line.amount,
    gen_journal_line.shortcut_dimension_1_code,
    gen_journal_line.shortcut_dimension_2_code,
    gen_journal_line.dimension_set_id,
    gen_journal_line.global_dimension_1_code,
    gen_journal_line.global_dimension_2_code,
    gen_journal_line.business_unit_code,
    gen_journal_line.job_no,
    gen_journal_line.job_task_no,
    gen_journal_line.company_id
  ]
});
