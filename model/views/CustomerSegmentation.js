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
    // Customer Portfolio Data - Core business relationship metrics
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
    customer.no,
    customer.name,
    customer.city,
    customer.county,
    customer.country_region_code,
    customer.blocked,
    customer.privacy_blocked,
    customer.tax_liable,
    customer.customer_posting_group,
    customer.gen_bus_posting_group,
    customer.vat_bus_posting_group,
    customer.payment_terms_code,
    customer.payment_method_code,
    customer.currency_code,
    customer.customer_price_group,
    customer.customer_disc_group,
    customer.salesperson_code,
    customer.territory_code,
    customer.shipping_agent_code,
    customer.language_code,
    customer.priority,
    customer.statistics_group,
    customer.responsibility_center,
    customer.reminder_terms_code,
    customer.fin_charge_terms_code,
    customer.system_created_at,
    customer.last_modified_date_time,
    customer.company_id,
    
    // Geographic Intelligence - Regional market analysis
    country_region.count,
    country_region.code,
    country_region.name,
    country_region.iso_code,
    country_region.iso_numeric_code,
    country_region.vat_scheme,
    country_region.eu_country_region_code,
    country_region.intrastat_code,
    country_region.address_format,
    country_region.contact_address_format,
    country_region.county_name,
    country_region.company_id,
    
    // Contact Network Analysis - Relationship depth and engagement
    contact.count,
    contact.no,
    contact.name,
    contact.type,
    contact.company_name,
    contact.job_title,
    contact.organizational_level_code,
    contact.salesperson_code,
    contact.territory_code,
    contact.city,
    contact.country_region_code,
    contact.language_code,
    contact.contact_business_relation,
    contact.no_of_opportunities,
    contact.no_of_interactions,
    contact.date_of_last_interaction,
    contact.estimated_value_lcy,
    contact.calcd_current_value_lcy,
    contact.privacy_blocked,
    contact.exclude_from_segment,
    contact.company_id,
    
    // Transaction Pattern Analysis - Financial behavior indicators
    g_l_entry.count,
    g_l_entry.posting_date,
    g_l_entry.document_type,
    g_l_entry.source_type,
    g_l_entry.source_no,
    g_l_entry.amount,
    g_l_entry.debit_amount,
    g_l_entry.credit_amount,
    g_l_entry.g_laccount_no,
    g_l_entry.description,
    g_l_entry.global_dimension_1_code,
    g_l_entry.global_dimension_2_code,
    g_l_entry.business_unit_code,
    g_l_entry.company_id
  ]
});