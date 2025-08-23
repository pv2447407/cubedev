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
    // GL Entry Revenue Data - Core revenue transactions
    g_l_entry.total_amount,
    g_l_entry.total_debit_amount, 
    g_l_entry.total_credit_amount,
    g_l_entry.net_amount,
    g_l_entry.average_transaction_amount,
    g_l_entry.count,
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
    g_l_entry.gen_bus_posting_group,
    g_l_entry.gen_prod_posting_group,
    g_l_entry.company_id,
    
    // GL Account Revenue Classification
    g_l_account.count,
    g_l_account.no,
    g_l_account.name,
    g_l_account.account_type,
    g_l_account.income_balance,
    g_l_account.account_category,
    g_l_account.account_subcategory_descript,
    g_l_account.gen_bus_posting_group,
    g_l_account.gen_prod_posting_group,
    g_l_account.company_id,
    
    // Customer Revenue Data - Customer-based revenue analysis
    customer.count,
    customer.no,
    customer.name,
    customer.city,
    customer.country_region_code,
    customer.customer_posting_group,
    customer.gen_bus_posting_group,
    customer.currency_code,
    customer.payment_terms_code,
    customer.salesperson_code,
    customer.territory_code,
    customer.customer_disc_group,
    customer.customer_price_group,
    customer.global_dimension_1_code,
    customer.global_dimension_2_code,
    customer.company_id
  ]
});
