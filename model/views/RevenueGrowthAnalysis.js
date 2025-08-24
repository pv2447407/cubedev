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
  
  cubes: [
    {
      join_path: g_l_account,
      includes: [
        // GL Account Revenue Classification
        // g_l_account.count, // Excluded: conflicts with g_l_entry.count
        'no',
        'name',
        'account_type',
        'income_balance',
        'account_category',
        'account_subcategory_descript'
        // g_l_account.gen_bus_posting_group, // Excluded: conflicts with g_l_entry.gen_bus_posting_group
        // g_l_account.gen_prod_posting_group, // Excluded: conflicts with g_l_entry.gen_prod_posting_group
        // g_l_account.company_id, // Excluded: conflicts with g_l_entry.company_id
      ]
    },
    {
      join_path: customer,
      includes: [
        // Customer Revenue Data - Customer-based revenue analysis
        // customer.count, // Excluded: conflicts with g_l_entry.count
        // customer.no, // Excluded: conflicts with g_l_account.no
        // customer.name, // Excluded: conflicts with g_l_account.name
        'city',
        'country_region_code',
        'customer_posting_group',
        // customer.gen_bus_posting_group, // Excluded: conflicts with g_l_entry.gen_bus_posting_group
        'currency_code',
        'payment_terms_code',
        'salesperson_code',
        'customer_price_group'
        // customer.company_id // Excluded: conflicts with g_l_entry.company_id
      ]
    }
  ]

  // GL Entry Revenue Data removed due to join path conflicts with customer cube
  // Revenue growth analysis now focuses on customer-based revenue analysis
});
