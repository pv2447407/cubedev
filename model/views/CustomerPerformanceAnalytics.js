/**
 * Customer Performance Analytics View
 * 
 * Comprehensive customer analytics dashboard for C-level executives providing:
 * - Customer segmentation and value analysis
 * - Top customers by revenue and profitability
 * - Geographic distribution and market penetration
 * - Payment behavior patterns and credit risk analysis
 * - Customer lifecycle metrics and retention insights
 * 
 * This view combines customer data with transactional history to provide
 * strategic insights for customer relationship management and business growth.
 */

view('customer_performance_analytics', {
  description: 'Executive customer analytics combining customer profiles, transaction patterns, geographic distribution, and payment behavior for strategic customer relationship management',
  
  includes: [
    // Core Customer Data - Demographics and account information
    customer.count,
    customer.total_customer_balance,
    customer.average_customer_balance,
    customer.active_customers_count,
    customer.blocked_customers_count,
    customer.customers_with_balance_count,
    customer.customers_with_credit_balance_count,
    customer.tax_liable_customers_count,
    customer.max_customer_balance,
    customer.min_customer_balance,
    customer.customers_by_currency,
    customer.customers_by_payment_terms,
    customer.customers_by_price_group,
    customer.customers_with_email_count,
    customer.customers_with_mobile_count,
    customer.privacy_blocked_customers_count,
    customer.prices_including_vat_count,
    customer.no,
    customer.name,
    customer.address,
    customer.city,
    customer.post_code,
    customer.county,
    customer.country_region_code,
    customer.phone_no,
    customer.mobile_phone_no,
    customer.e_mail,
    customer.blocked,
    customer.privacy_blocked,
    customer.tax_liable,
    customer.prices_including_vat,
    customer.customer_posting_group,
    customer.gen_bus_posting_group,
    customer.payment_terms_code,
    customer.payment_method_code,
    customer.currency_code,
    customer.customer_price_group,
    customer.salesperson_code,
    customer.shipping_agent_code,
    customer.language_code,
    customer.vat_registration_no,
    customer.company_id,
    
    // Geographic Context - Country and regional information
    country_region.count,
    country_region.code,
    country_region.name,
    country_region.company_id,
    
    // Contact Information - Enhanced customer relationship data
    contact.count,
    contact.no,
    contact.name,
    contact.company_id,
    
    // Financial Transaction History - Customer payment and transaction patterns
    g_l_entry.count,
    g_l_entry.posting_date,
    g_l_entry.document_date,
    g_l_entry.document_type,
    g_l_entry.document_no,
    g_l_entry.source_type,
    g_l_entry.source_no,
    g_l_entry.g_laccount_no,
    g_l_entry.g_laccount_name,
    g_l_entry.description,
    g_l_entry.global_dimension_1_code,
    g_l_entry.global_dimension_2_code,
    g_l_entry.company_id
  ]
});