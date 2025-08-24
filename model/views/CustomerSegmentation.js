/**
 * Customer Segmentation View
 * 
 * Advanced customer segmentation and risk assessment for C-level executives providing:
 * - Strategic customer categories by business value
 * - Comprehensive risk assessment including credit and payment history
 * - Regional performance analysis and market penetration
 * - Industry/sector analysis for targeted business development
 * - Customer portfolio optimization insights
 * 
 * This view enables data-driven customer strategy decisions and risk management
 * by providing sophisticated segmentation based on multiple business dimensions.
 */

view('customer_segmentation', {
  description: 'Advanced customer segmentation combining value categorization, risk assessment, regional performance, and industry analysis for strategic customer portfolio management',
  
  cubes: [
    {
      join_path: customer,
      includes: [
        // Customer Portfolio Data - Core business relationship metrics (primary cube)
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
        // Geographic Intelligence - Regional market analysis (excluding conflicting members)
        // Excluded: country_region.count (conflicts with customer.count)
        'code'
        // Excluded: country_region.name (conflicts with customer.name)
        // Excluded: country_region.company_id (conflicts with customer.company_id)
      ]
    }
    
    // Contact Network Analysis - Relationship depth and engagement (excluding conflicting members)
    // Excluded: contact.count (conflicts with customer.count)
    // Excluded: contact.no (conflicts with customer.no)
    // Excluded: contact.name (conflicts with customer.name)
    // Excluded: contact.company_id (conflicts with customer.company_id)
    
    // Transaction Pattern Analysis removed due to join path conflicts with customer cube
    // Customer segmentation now focuses exclusively on customer profile and relationship data
  ]
});