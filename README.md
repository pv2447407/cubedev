# Cube Cloud Data Model for Business Central

This repository contains the Cube Cloud data model configuration for Microsoft Dynamics 365 Business Central data synced via Fivetran to Snowflake.

## Architecture

```
Business Central API → Fivetran → Snowflake → Cube Cloud → BI Tools/Applications
```

## Setup Instructions

### 1. Prerequisites

- Snowflake account with Fivetran database configured
- Cube Cloud account
- Private key for Snowflake authentication

### 2. Environment Configuration

Update the `.env` file with your specific credentials:

```env
CUBEJS_DB_SNOWFLAKE_ACCOUNT=your-account
CUBEJS_DB_USER=your-user
CUBEJS_API_SECRET=your-secret-key
```

### 3. Deploy to Cube Cloud

1. Connect this repository to your Cube Cloud deployment
2. Ensure the private key file is properly configured
3. Deploy the data model

## Data Model Structure

### Core Entities

#### Sales & Revenue
- **customers** - Customer master data
- **sales_headers** - Sales orders and quotes
- **sales_lines** - Sales order line items
- **sales_invoices** - Posted sales invoices
- **sales_invoice_lines** - Invoice line details

#### Purchasing & Vendors
- **vendors** - Vendor master data
- **purchase_headers** - Purchase orders
- **purchase_lines** - Purchase order lines
- **purchase_invoices** - Posted purchase invoices

#### Inventory
- **items** - Item/product master data
- **item_ledger_entries** - Inventory transactions
- **item_categories** - Product categorization

#### Financial
- **g_l_entries** - General ledger transactions
- **g_l_accounts** - Chart of accounts

### Executive Views

The model includes pre-built views for C-level executives:

1. **executive_dashboard** - Comprehensive KPI overview
2. **revenue_analytics** - Revenue deep dive
3. **cash_flow_view** - Working capital management
4. **profitability_analysis** - Margin analysis
5. **inventory_management** - Stock optimization
6. **customer_analytics** - Customer insights
7. **vendor_performance** - Supplier metrics
8. **financial_statements** - P&L and balance sheet

## Key Metrics & KPIs

### Revenue Metrics
- Total Revenue (with/without VAT)
- Gross Profit & Margin %
- Average Order Value
- Revenue by Customer/Product/Region

### Cash Flow Metrics
- Days Sales Outstanding (DSO)
- Days Payable Outstanding (DPO)
- Outstanding Receivables/Payables
- Overdue Amounts

### Operational Metrics
- Inventory Turnover
- Stock-out Situations
- Order Fulfillment Rate
- Customer/Vendor Count

### Financial Metrics
- P&L Components
- Balance Sheet Items
- Working Capital
- Cash Conversion Cycle

## Query Examples

### 1. Executive Dashboard Query

```javascript
{
  "measures": [
    "sales_invoices.total_revenue",
    "sales_invoices.total_outstanding",
    "sales_invoice_lines.gross_margin_percent",
    "items.total_inventory_value",
    "customers.count"
  ],
  "timeDimensions": [{
    "dimension": "sales_invoices.posting_date",
    "granularity": "month",
    "dateRange": "This year"
  }]
}
```

### 2. Revenue Trend Analysis

```javascript
{
  "measures": ["sales_invoices.total_revenue"],
  "dimensions": ["customers.country_region_code"],
  "timeDimensions": [{
    "dimension": "sales_invoices.posting_date",
    "granularity": "month",
    "dateRange": "Last 12 months"
  }]
}
```

### 3. Cash Flow Status

```javascript
{
  "measures": [
    "sales_invoices.total_outstanding",
    "sales_invoices.overdue_amount",
    "purchase_invoices.total_outstanding"
  ],
  "dimensions": ["sales_invoices.paid_status"],
  "filters": [{
    "member": "sales_invoices.company_id",
    "operator": "equals",
    "values": ["CRONUS USA, Inc."]
  }]
}
```

### 4. Inventory Analysis

```javascript
{
  "measures": [
    "items.total_inventory_value",
    "items.items_below_reorder",
    "items.inventory_turns"
  ],
  "dimensions": ["items.item_category_code"],
  "order": {
    "items.total_inventory_value": "desc"
  }
}
```

### 5. Customer Profitability

```javascript
{
  "measures": [
    "sales_invoice_lines.gross_profit",
    "sales_invoice_lines.gross_margin_percent",
    "sales_invoices.count"
  ],
  "dimensions": ["customers.name"],
  "limit": 10,
  "order": {
    "sales_invoice_lines.gross_profit": "desc"
  }
}
```

## Performance Optimization

### Pre-Aggregations

The model includes pre-aggregations for commonly used queries:

- **Daily Sales Summary** - Refreshes every 30 minutes
- **Monthly GL Summary** - Refreshes every hour  
- **Inventory Summary** - Refreshes every hour
- **Customer Summary** - Refreshes every hour

### Best Practices

1. Use time dimensions with appropriate granularity
2. Leverage pre-aggregations for dashboard queries
3. Apply company filters for multi-tenant deployments
4. Use the executive views for complex cross-entity queries

## Multi-Tenancy Support

The model supports multiple companies through:

1. Company-specific filtering via `company_id`
2. Security context in `cube.js` configuration
3. Separate pre-aggregation schemas per company

## Troubleshooting

### Common Issues

1. **Connection Errors**
   - Verify Snowflake account URL format
   - Check private key permissions
   - Ensure warehouse is running

2. **Data Not Refreshing**
   - Check Fivetran sync status
   - Verify pre-aggregation refresh schedules
   - Review Cube Cloud logs

3. **Query Performance**
   - Enable relevant pre-aggregations
   - Check Snowflake warehouse size
   - Review query complexity

## Support

For issues or questions:
1. Check Cube Cloud documentation
2. Review Snowflake query history
3. Verify Fivetran connector status

## License

Internal use only - Proprietary and confidential