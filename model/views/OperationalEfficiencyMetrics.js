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
  
  cubes: [
    {
      join_path: g_l_entry,
      includes: [
        // GL Entry Processing Efficiency - Core transaction processing metrics
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
        'source_type',
        'source_code',
        'journal_batch_name',
        'user_id',
        'global_dimension_1_code',
        'global_dimension_2_code',
        'business_unit_code',
        'dimension_set_id',
        'company_id'
      ]
    },
    {
      join_path: dimension_set_entry,
      includes: [
        // Dimension Set Analysis - Multi-dimensional business performance
        // dimension_set_entry.count, // Excluded: conflicts with g_l_entry.count
        // dimension_set_entry.dimension_set_id, // Excluded: conflicts with g_l_entry.dimension_set_id
        // dimension_set_entry.dimension_code, // Excluded: conflicts with dimension_value.dimension_code
        'dimension_value_code'
        // dimension_set_entry.global_dimension_no, // Excluded: conflicts with dimension_value.global_dimension_no
        // dimension_set_entry.company_id, // Excluded: conflicts with g_l_entry.company_id
      ]
    },
    {
      join_path: dimension_value,
      includes: [
        // Dimension Values - Performance by business dimensions
        // dimension_value.count, // Excluded: conflicts with g_l_entry.count
        // dimension_value.code, // Excluded: conflicts with dimension.code
        'dimension_code',
        'global_dimension_no'
        // dimension_value.blocked, // Excluded: conflicts with dimension.blocked
        // dimension_value.company_id, // Excluded: conflicts with g_l_entry.company_id
      ]
    }
  ]

  // Removed gen_journal_line.* members - no direct join path from g_l_entry to gen_journal_line
  // Removed employee.* members - no direct join path from g_l_entry to employee
  // These cubes only join through company but don't have business relationships with g_l_entry

  // Removed dimension.* members - no direct join path from g_l_entry to dimension
  // g_l_entry already contains dimensional fields: global_dimension_1_code, global_dimension_2_code, business_unit_code
});
