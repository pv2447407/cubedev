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
  
  includes: [
    // Customer Portfolio Data - Core business relationship metrics (primary cube)
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
    
    // Geographic Intelligence - Regional market analysis (excluding conflicting members)
    // Excluded: country_region.count (conflicts with customer.count)
    country_region.code,
    // Excluded: country_region.name (conflicts with customer.name)
    // Excluded: country_region.company_id (conflicts with customer.company_id)
    
    // Contact Network Analysis - Relationship depth and engagement (excluding conflicting members)
    // Excluded: contact.count (conflicts with customer.count)
    // Excluded: contact.no (conflicts with customer.no)
    // Excluded: contact.name (conflicts with customer.name)
    // Excluded: contact.company_id (conflicts with customer.company_id)
    
    // Transaction Pattern Analysis removed due to join path conflicts with customer cube
    // Customer segmentation now focuses exclusively on customer profile and relationship data
  ]
});