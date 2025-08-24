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
  
  cubes: [
    {
      join_path: customer,
      includes: [
        // Core Customer Data - Demographics and account information (primary cube)
        'count',
        'total_customer_balance',
        'average_customer_balance',
        'active_customers_count',
        'blocked_customers_count',
        'customers_with_balance_count',
        'customers_with_credit_balance_count',
        'tax_liable_customers_count',
        'max_customer_balance',
        'min_customer_balance',
        'customers_by_currency',
        'customers_by_payment_terms',
        'customers_by_price_group',
        'customers_with_email_count',
        'customers_with_mobile_count',
        'privacy_blocked_customers_count',
        'prices_including_vat_count',
        'no',
        'name',
        'address',
        'city',
        'post_code',
        'county',
        'country_region_code',
        'phone_no',
        'mobile_phone_no',
        'e_mail',
        'blocked',
        'privacy_blocked',
        'tax_liable',
        'prices_including_vat',
        'customer_posting_group',
        'gen_bus_posting_group',
        'payment_terms_code',
        'payment_method_code',
        'currency_code',
        'customer_price_group',
        'salesperson_code',
        'shipping_agent_code',
        'language_code',
        'vat_registration_no',
        'company_id'
      ]
    },
    {
      join_path: country_region,
      includes: [
        // Geographic Context - Country and regional information (excluding conflicting members)
        // Excluded: country_region.count (conflicts with customer.count)
        'code'
        // Excluded: country_region.name (conflicts with customer.name)
        // Excluded: country_region.company_id (conflicts with customer.company_id)
      ]
    }
    
    // Contact Information - Enhanced customer relationship data (excluding conflicting members)
    // Excluded: contact.count (conflicts with customer.count)
    // Excluded: contact.no (conflicts with customer.no)
    // Excluded: contact.name (conflicts with customer.name)
    // Excluded: contact.company_id (conflicts with customer.company_id)
    
    // Financial Transaction History removed due to join path conflicts with customer cube
    // Customer performance analytics now focuses exclusively on customer data and relationships
  ]
});