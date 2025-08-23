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
    // GL Entry Dimensional Analysis - Core financial performance by dimensions (primary cube)
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
    g_l_entry.global_dimension_1_code,
    g_l_entry.global_dimension_2_code,
    g_l_entry.business_unit_code,
    g_l_entry.dimension_set_id,
    g_l_entry.source_type,
    g_l_entry.source_code,
    g_l_entry.journal_batch_name,
    g_l_entry.user_id,
    g_l_entry.company_id,

    // Dimension Set Entry Analysis - Detailed dimensional breakdowns (excluding conflicting members)
    // Excluded: dimension_set_entry.count (conflicts with g_l_entry.count)
    // Excluded: dimension_set_entry.dimension_set_id (conflicts with g_l_entry.dimension_set_id)
    dimension_set_entry.dimension_code,
    dimension_set_entry.dimension_value_code,
    dimension_set_entry.global_dimension_no,
    // Excluded: dimension_set_entry.company_id (conflicts with g_l_entry.company_id)

    // Dimension Values Performance - Individual dimension value analysis (excluding conflicting members)
    // Excluded: dimension_value.count (conflicts with g_l_entry.count)
    dimension_value.code,
    // Excluded: dimension_value.dimension_code (conflicts with dimension_set_entry.dimension_code)
    // Excluded: dimension_value.global_dimension_no (conflicts with dimension_set_entry.global_dimension_no)
    dimension_value.blocked,
    // Excluded: dimension_value.company_id (conflicts with g_l_entry.company_id)

    // Base Dimensions - Dimension structure and hierarchy (excluding conflicting members)
    // Excluded: dimension.count (conflicts with g_l_entry.count)
    // Excluded: dimension.code (conflicts with dimension_value.code)
    dimension.name,
    // Excluded: dimension.blocked (conflicts with dimension_value.blocked)
    // Excluded: dimension.company_id (conflicts with g_l_entry.company_id)

    // Employee Dimensional Performance - Staff performance by dimensions (excluding conflicting members)
    // Excluded: employee.count (conflicts with g_l_entry.count)
    employee.no,
    // Excluded: employee.company_id (conflicts with g_l_entry.company_id)

    // Journal Line Dimensional Analysis - Journal processing by dimensions (excluding conflicting members)
    // Excluded: gen_journal_line.count (conflicts with g_l_entry.count)
    gen_journal_line.line_no
    // Excluded: gen_journal_line.company_id (conflicts with g_l_entry.company_id)
  ]
});
