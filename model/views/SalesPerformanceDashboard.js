/**
 * Sales Performance Dashboard View
 * 
 * Comprehensive sales and pipeline analytics for C-level executives.
 * 
 * Provides:
 * - Sales by region and territory
 * - Salesperson performance
 * - Customer acquisition metrics
 * - Average deal size and velocity
 * - Conversion rates
 */

view('sales_performance_dashboard', {
  description: 'Executive-level sales performance analytics combining customer data, revenue transactions, and sales team metrics for strategic sales management',
  
  includes: [
    // Customer Sales Data - Core customer and sales information
    customer.count,
    customer.no,
    customer.name,
    customer.city,
    customer.country_region_code,
    customer.salesperson_code,
    customer.customer_posting_group,
    customer.customer_price_group,
    customer.gen_bus_posting_group,
    customer.currency_code,
    customer.payment_terms_code,
    customer.company_id,
    
    // GL Entry Sales Transactions - Revenue and sales transaction data
    g_l_entry.total_amount,
    g_l_entry.total_debit_amount, 
    g_l_entry.total_credit_amount,
    g_l_entry.net_amount,
    g_l_entry.average_transaction_amount,
    // g_l_entry.count, // Excluded: conflicts with customer.count (primary)
    g_l_entry.posting_date,
    g_l_entry.document_date,
    g_l_entry.document_type,
    g_l_entry.document_no,
    g_l_entry.g_laccount_no,
    g_l_entry.g_laccount_name,
    g_l_entry.description,
    g_l_entry.source_type,
    g_l_entry.source_no,
    g_l_entry.global_dimension_1_code,
    g_l_entry.global_dimension_2_code,
    g_l_entry.business_unit_code,
    // g_l_entry.gen_bus_posting_group, // Excluded: conflicts with customer.gen_bus_posting_group (primary)
    g_l_entry.gen_prod_posting_group,
    // g_l_entry.company_id, // Excluded: conflicts with customer.company_id (primary)
    
    // GL Account Sales Classification
    // g_l_account.count, // Excluded: conflicts with customer.count (primary)
    // g_l_account.no, // Excluded: conflicts with customer.no (primary)
    // g_l_account.name, // Excluded: conflicts with customer.name (primary)
    g_l_account.account_type,
    g_l_account.income_balance,
    g_l_account.account_category,
    g_l_account.account_subcategory_descript,
    // g_l_account.gen_bus_posting_group, // Excluded: conflicts with customer.gen_bus_posting_group (primary)
    // g_l_account.gen_prod_posting_group, // Excluded: conflicts with g_l_entry.gen_prod_posting_group
    // g_l_account.company_id // Excluded: conflicts with customer.company_id (primary)
  ]
});
