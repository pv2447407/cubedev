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
    g_l_entry.count,
    g_l_entry.total_amount,
    g_l_entry.total_debit_amount,
    g_l_entry.total_credit_amount,
    g_l_entry.average_transaction_amount,
    g_l_entry.debit_transaction_count,
    g_l_entry.credit_transaction_count,
    g_l_entry.reversed_entries_count,
    g_l_entry.posting_date,
    g_l_entry.document_date,
    g_l_entry.document_type,
    g_l_entry.source_type,
    g_l_entry.source_code,
    g_l_entry.journal_batch_name,
    g_l_entry.user_id,
    g_l_entry.system_created_entry,
    g_l_entry.system_created_by,
    g_l_entry.system_modified_by,
    g_l_entry.global_dimension_1_code,
    g_l_entry.global_dimension_2_code,
    g_l_entry.business_unit_code,
    g_l_entry.dimension_set_id,
    g_l_entry.company_id,

    // Journal Line Processing - Journal entry volume and pattern analysis
    gen_journal_line.count,
    gen_journal_line.line_no,
    gen_journal_line.journal_template_name,
    gen_journal_line.journal_batch_name,
    gen_journal_line.posting_date,
    gen_journal_line.document_date,
    gen_journal_line.document_type,
    gen_journal_line.document_no,
    gen_journal_line.account_type,
    gen_journal_line.account_no,
    gen_journal_line.description,
    gen_journal_line.amount,
    gen_journal_line.debit_amount,
    gen_journal_line.credit_amount,
    gen_journal_line.user_id,
    gen_journal_line.source_code,
    gen_journal_line.shortcut_dimension_1_code,
    gen_journal_line.shortcut_dimension_2_code,
    gen_journal_line.dimension_set_id,
    gen_journal_line.system_created_at,
    gen_journal_line.system_created_by,
    gen_journal_line.system_modified_at,
    gen_journal_line.system_modified_by,
    gen_journal_line.company_id,

    // Employee Productivity - Staff performance and activity metrics
    employee.count,
    employee.no,
    employee.first_name,
    employee.last_name,
    employee.job_title,
    employee.employment_date,
    employee.termination_date,
    employee.status,
    employee.manager_no,
    employee.cost_center_code,
    employee.cost_object_code,
    employee.global_dimension_1_code,
    employee.global_dimension_2_code,
    employee.statistics_group_code,
    employee.employee_posting_group,
    employee.resource_no,
    employee.company_id,

    // Dimension Set Analysis - Multi-dimensional business performance
    dimension_set_entry.count,
    dimension_set_entry.dimension_set_id,
    dimension_set_entry.dimension_code,
    dimension_set_entry.dimension_name,
    dimension_set_entry.dimension_value_code,
    dimension_set_entry.dimension_value_name,
    dimension_set_entry.global_dimension_no,
    dimension_set_entry.system_created_at,
    dimension_set_entry.system_created_by,
    dimension_set_entry.system_modified_at,
    dimension_set_entry.system_modified_by,
    dimension_set_entry.company_id,

    // Dimension Values - Performance by business dimensions
    dimension_value.count,
    dimension_value.code,
    dimension_value.name,
    dimension_value.dimension_code,
    dimension_value.dimension_value_type,
    dimension_value.blocked,
    dimension_value.global_dimension_no,
    dimension_value.consolidation_code,
    dimension_value.company_id,

    // Base Dimensions - Dimension structure and organization
    dimension.count,
    dimension.code,
    dimension.name,
    dimension.description,
    dimension.consolidation_code,
    dimension.blocked,
    dimension.code_caption,
    dimension.filter_caption,
    dimension.company_id
  ]
});
