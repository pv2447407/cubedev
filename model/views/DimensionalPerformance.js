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
  
  cubes: [
    {
      join_path: g_l_entry,
      includes: [
        // GL Entry Dimensional Analysis - Core financial performance by dimensions (primary cube)
        'count',
        'total_amount',
        'total_debit_amount',
        'total_credit_amount',
        'average_transaction_amount',
        'debit_transaction_count',
        'credit_transaction_count',
        'reversed_entries_count',
        'posting_date',
        'document_date',
        'document_type',
        'global_dimension_1_code',
        'global_dimension_2_code',
        'business_unit_code',
        'dimension_set_id',
        'source_type',
        'source_code',
        'journal_batch_name',
        'user_id',
        'company_id'
      ]
    },
    {
      join_path: dimension_set_entry,
      includes: [
        // Dimension Set Entry Analysis - Detailed dimensional breakdowns (excluding conflicting members)
        // Excluded: dimension_set_entry.count (conflicts with g_l_entry.count)
        // Excluded: dimension_set_entry.dimension_set_id (conflicts with g_l_entry.dimension_set_id)
        'dimension_code',
        'dimension_value_code',
        'global_dimension_no'
        // Excluded: dimension_set_entry.company_id (conflicts with g_l_entry.company_id)
      ]
    },
    {
      join_path: dimension_value,
      includes: [
        // Dimension Values Performance - Individual dimension value analysis (excluding conflicting members)
        // Excluded: dimension_value.count (conflicts with g_l_entry.count)
        'code',
        // Excluded: dimension_value.dimension_code (conflicts with dimension_set_entry.dimension_code)
        // Excluded: dimension_value.global_dimension_no (conflicts with dimension_set_entry.global_dimension_no)
        'blocked'
        // Excluded: dimension_value.company_id (conflicts with g_l_entry.company_id)
      ]
    }

    // Removed dimension.* members - no direct join path from g_l_entry to dimension
    // g_l_entry already contains dimensional fields: global_dimension_1_code, global_dimension_2_code, business_unit_code

    // Removed employee.* members - no direct join path from g_l_entry to employee
    // Removed gen_journal_line.* members - no direct join path from g_l_entry to gen_journal_line
    // These cubes only join through company but don't have business relationships with g_l_entry
  ]
});
