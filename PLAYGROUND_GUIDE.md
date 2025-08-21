# Cube.js Playground Query Guide

## Quick Start

The Cube.js Playground requires queries to be in a specific JSON format. This guide will help you write correct queries.

## Basic Query Structure

Every query must have this structure:
```json
{
  "measures": ["cube_name.measure_name"],
  "dimensions": ["cube_name.dimension_name"],
  "filters": [
    {
      "member": "cube_name.field_name",
      "operator": "operator_type",
      "values": ["value1", "value2"]
    }
  ]
}
```

## Important Rules

1. **Always use arrays for values** - Even single values must be in an array: `"values": ["single_value"]`
2. **Use full names** - Always include cube name: `sales_invoices.total_revenue` not just `total_revenue`
3. **Filter structure** - Every filter needs `member`, `operator`, and `values`

## Available Operators

- `equals` - Exact match
- `notEquals` - Not equal
- `contains` - Contains substring
- `notContains` - Doesn't contain
- `gt` - Greater than
- `gte` - Greater than or equal
- `lt` - Less than
- `lte` - Less than or equal
- `inDateRange` - Between two dates
- `notInDateRange` - Not between two dates
- `beforeDate` - Before a date
- `afterDate` - After a date
- `set` - Has any value
- `notSet` - Is null/empty

## Available Cubes and Key Measures

### Sales Invoices (`sales_invoices`)
**Measures:**
- `total_revenue` - Total sales revenue
- `count` - Number of invoices
- `total_outstanding` - Unpaid amount
- `overdue_amount` - Amount past due
- `days_sales_outstanding` - DSO metric

**Dimensions:**
- `posting_date` - Invoice date
- `sell_to_customer_name` - Customer name
- `due_date` - Payment due date
- `salesperson_code` - Sales rep

### Customers (`customers`)
**Measures:**
- `count` - Total customers
- `active_count` - Active customers
- `total_credit_limit` - Sum of credit limits

**Dimensions:**
- `name` - Customer name
- `country_region_code` - Country
- `customer_posting_group` - Customer group

### Items/Products (`items`)
**Measures:**
- `count` - Total items
- `total_inventory_value` - Inventory value
- `items_out_of_stock` - Out of stock count

**Dimensions:**
- `description` - Item description
- `item_category_code` - Category

### Purchase Invoices (`purchase_invoices`)
**Measures:**
- `total_purchases` - Total purchases
- `total_outstanding` - Unpaid to vendors
- `days_payable_outstanding` - DPO metric

### Views (Pre-configured dashboards)
- `executive_dashboard` - C-level KPIs
- `revenue_analytics` - Revenue details
- `cash_flow_view` - Cash flow metrics
- `profitability_analysis` - Margin analysis

## Example Queries

### 1. Simple Revenue Query
```json
{
  "measures": ["sales_invoices.total_revenue"]
}
```

### 2. Revenue by Customer
```json
{
  "measures": ["sales_invoices.total_revenue"],
  "dimensions": ["customers.name"],
  "order": {
    "sales_invoices.total_revenue": "desc"
  }
}
```

### 3. Filtered Query - Year 2024
```json
{
  "measures": ["sales_invoices.total_revenue"],
  "filters": [
    {
      "member": "sales_invoices.posting_date",
      "operator": "inDateRange",
      "values": ["2024-01-01", "2024-12-31"]
    }
  ]
}
```

### 4. Time Series - Monthly Revenue
```json
{
  "measures": ["sales_invoices.total_revenue"],
  "timeDimensions": [
    {
      "dimension": "sales_invoices.posting_date",
      "granularity": "month"
    }
  ]
}
```

### 5. Multiple Filters
```json
{
  "measures": ["sales_invoices.total_revenue"],
  "dimensions": ["customers.name"],
  "filters": [
    {
      "member": "sales_invoices.amount",
      "operator": "gte",
      "values": ["1000"]
    },
    {
      "member": "sales_invoices.posting_date",
      "operator": "afterDate",
      "values": ["2024-01-01"]
    }
  ]
}
```

### 6. Using Views
```json
{
  "measures": [
    "executive_dashboard.sales_invoices_total_revenue",
    "executive_dashboard.customer_count"
  ]
}
```

## Common Mistakes to Avoid

❌ **Wrong:** Missing array for single value
```json
"values": "2024-01-01"
```
✅ **Correct:**
```json
"values": ["2024-01-01"]
```

❌ **Wrong:** Missing cube name
```json
"measures": ["total_revenue"]
```
✅ **Correct:**
```json
"measures": ["sales_invoices.total_revenue"]
```

❌ **Wrong:** Invalid filter structure
```json
"filters": ["sales_invoices.amount > 1000"]
```
✅ **Correct:**
```json
"filters": [
  {
    "member": "sales_invoices.amount",
    "operator": "gt",
    "values": ["1000"]
  }
]
```

## Using the Sample Queries

Check the `sample-queries.json` file for ready-to-use queries. Copy any query from there and paste it into the Playground's JSON Query tab.

## Troubleshooting

1. **"Invalid query format" error** - Check that all values are in arrays
2. **"Cube not found" error** - Verify cube names are correct
3. **"Member not found" error** - Check dimension/measure names
4. **No data returned** - Verify your filters aren't too restrictive

## Need Help?

- Check `sample-queries.json` for working examples
- Verify cube and member names in the model files
- Use the Schema tab in Playground to explore available cubes and measures