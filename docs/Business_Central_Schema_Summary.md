# Business Central Cube Schema Summary

## Overview
This Cube.js data model contains **49 cube definitions** covering the complete Microsoft Business Central ERP system.

## Quick Reference

### Core Entities (Hub Tables)
| Cube | Primary Key | Description | Key Relationships |
|------|-------------|-------------|-------------------|
| **company** | id | Company master | Central hub - all cubes join here |
| **customer** | no | Customer master | Links to sales, contacts, payments |
| **vendor** | no | Vendor master | Links to purchases, payments |
| **item** | no | Item/Product master | Links to sales, purchases, inventory |
| **g_l_account** | no | General Ledger accounts | Links to all financial transactions |
| **employee** | no | Employee master | Links to dimensions, time sheets |

### Sales Process Flow
```
customer → sales_header → sales_line → sales_invoice_header → sales_invoice_line
                ↓                              ↓
         sales_shipment_header → sales_shipment_line
                                      ↓
                              sales_cr_memo_header → sales_cr_memo_line
```

### Purchase Process Flow  
```
vendor → purchase_header → purchase_line → purch_inv_header → purch_inv_line
                ↓                                ↓
         purch_rcpt_header → purch_rcpt_line
```

### Financial Flow
```
g_l_account → g_l_entry ← gen_journal_line
                ↑
        posted_gen_journal_line
```

### Inventory Flow
```
item → item_ledger_entry → location
  ↓
item_variant → item_category
```

## Key Metrics Available

### Standard Measures (All Cubes)
- `count` - Record count

### Special Measures
- **g_l_entry**: `dimension_changes_count` - Track dimension modifications
- **item**: `discrete_order_quantity` - Sum of discrete order quantities
- **purchase_line**: `attached_lines_count`, `attached_doc_count` - Document attachments

## Primary Key Patterns

| Pattern | Used For | Example Fields |
|---------|----------|----------------|
| `no` | Master entities | customer.no, vendor.no, item.no |
| `code` | Lookup tables | currency.code, country_region.code |
| `system_id` | Transactions | g_l_entry.system_id, item_ledger_entry.system_id |
| Composite | Document lines | sales_line (document_no + no) |

## Dimensional Analysis
- **8 Shortcut Dimensions** available in transaction cubes
- **Global Dimensions**: dimension_1_code, dimension_2_code (most common)
- **Dimension Set Entry**: Links transactions to unlimited dimensions

## Common Join Patterns

### Multi-Company Support
All cubes join to `company` using:
```yaml
joins:
  - name: company
    sql: "{CUBE}.\"COMPANY_ID\" = {company}.\"ID\""
    relationship: many_to_one
```

### Document Headers to Lines
```yaml
joins:
  - name: sales_line
    sql: "{CUBE}.\"NO\" = {sales_line}.\"DOCUMENT_NO\""
    relationship: one_to_many
```

### Master Data Lookups
```yaml
joins:
  - name: customer
    sql: "{CUBE}.\"SELL_TO_CUSTOMER_NO\" = {customer}.\"NO\""
    relationship: many_to_one
```

## Best Practices

1. **Always filter by company** when querying multi-company databases
2. **Use system_id** for joining transactional data
3. **Leverage dimensions** for flexible analysis across any business attribute
4. **Join through header tables** when accessing line details
5. **Use date dimensions** (posting_date, document_date) for time-based analysis

## Common Queries

### Sales Analysis
- Join: `sales_invoice_header` → `sales_invoice_line` → `customer` → `item`
- Measures: count, line amounts, quantities
- Dimensions: posting_date, customer_no, item_no

### Financial Reporting
- Join: `g_l_entry` → `g_l_account` → `dimension_set_entry`
- Measures: count, amounts
- Dimensions: posting_date, g_l_account_no, dimensions

### Inventory Status
- Join: `item_ledger_entry` → `item` → `location`
- Measures: count, quantities
- Dimensions: posting_date, item_no, location_code

## Quick Stats
- **49** Total Cubes
- **11** Sales-related cubes
- **9** Purchase-related cubes  
- **8** Financial cubes
- **5** Inventory cubes
- **4** Dimension cubes
- **12** Supporting master data cubes

## Related Documentation
- [Full Schema Documentation](./Business_Central_Schema_Documentation.md) - Detailed cube-by-cube reference
- [Data Model Reference Guide](./Data_Model_Reference_Guide.md) - Cube.js syntax and patterns