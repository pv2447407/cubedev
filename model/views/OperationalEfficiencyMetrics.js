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
    g_l_entry.global_dimension_1_code,
    g_l_entry.global_dimension_2_code,
    g_l_entry.business_unit_code,
    g_l_entry.dimension_set_id,
    g_l_entry.company_id,

    // Journal Line Processing - Journal entry volume and pattern analysis
    // gen_journal_line.count, // Excluded: conflicts with g_l_entry.count
    gen_journal_line.line_no,
    // gen_journal_line.company_id, // Excluded: conflicts with g_l_entry.company_id

    // Employee Productivity - Staff performance and activity metrics
    // employee.count, // Excluded: conflicts with g_l_entry.count
    employee.no,
    // employee.company_id, // Excluded: conflicts with g_l_entry.company_id

    // Dimension Set Analysis - Multi-dimensional business performance
    // dimension_set_entry.count, // Excluded: conflicts with g_l_entry.count
    // dimension_set_entry.dimension_set_id, // Excluded: conflicts with g_l_entry.dimension_set_id
    // dimension_set_entry.dimension_code, // Excluded: conflicts with dimension_value.dimension_code
    dimension_set_entry.dimension_value_code,
    // dimension_set_entry.global_dimension_no, // Excluded: conflicts with dimension_value.global_dimension_no
    // dimension_set_entry.company_id, // Excluded: conflicts with g_l_entry.company_id

    // Dimension Values - Performance by business dimensions
    // dimension_value.count, // Excluded: conflicts with g_l_entry.count
    // dimension_value.code, // Excluded: conflicts with dimension.code
    dimension_value.dimension_code,
    dimension_value.global_dimension_no,
    // dimension_value.blocked, // Excluded: conflicts with dimension.blocked
    // dimension_value.company_id, // Excluded: conflicts with g_l_entry.company_id

    // Base Dimensions - Dimension structure and organization
    // dimension.count, // Excluded: conflicts with g_l_entry.count
    dimension.code,
    dimension.name,
    dimension.blocked,
    // dimension.company_id // Excluded: conflicts with g_l_entry.company_id
  ]
});
