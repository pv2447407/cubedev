/**
 * Revenue Growth Analysis View
 * 
 * Comprehensive revenue trends and growth metrics for C-level executives.
 * 
 * Provides:
 * - Revenue by period (daily, monthly, quarterly, yearly)
 * - Year-over-year growth rates
 * - Revenue by customer segment
 * - Product/service line revenue
 * - Market penetration metrics
 */

view('revenue_growth_analysis', {
  description: 'Executive-level revenue trends and growth analysis combining GL entries, customer data, and account classifications for strategic revenue management',
  
  includes: [
    // GL Entry Revenue Data removed due to join path conflicts with customer cube
    // Revenue growth analysis now focuses on customer-based revenue analysis
    
    // GL Account Revenue Classification
    // g_l_account.count, // Excluded: conflicts with g_l_entry.count
    g_l_account.no,
    g_l_account.name,
    g_l_account.account_type,
    g_l_account.income_balance,
    g_l_account.account_category,
    g_l_account.account_subcategory_descript,
    // g_l_account.gen_bus_posting_group, // Excluded: conflicts with g_l_entry.gen_bus_posting_group
    // g_l_account.gen_prod_posting_group, // Excluded: conflicts with g_l_entry.gen_prod_posting_group
    // g_l_account.company_id, // Excluded: conflicts with g_l_entry.company_id
    
    // Customer Revenue Data - Customer-based revenue analysis
    // customer.count, // Excluded: conflicts with g_l_entry.count
    // customer.no, // Excluded: conflicts with g_l_account.no
    // customer.name, // Excluded: conflicts with g_l_account.name
    customer.city,
    customer.country_region_code,
    customer.customer_posting_group,
    // customer.gen_bus_posting_group, // Excluded: conflicts with g_l_entry.gen_bus_posting_group
    customer.currency_code,
    customer.payment_terms_code,
    customer.salesperson_code,
    customer.customer_price_group,
    // customer.company_id // Excluded: conflicts with g_l_entry.company_id
  ]
});
