# Business Central Cube Schema Documentation

## Executive Summary

This document provides a comprehensive overview of the Business Central data model implemented in Cube.js. The schema consists of 49 cube definitions covering all major functional areas of Business Central ERP including Financial Management, Sales & Receivables, Purchasing & Payables, Inventory Management, and Dimensional Analysis.

## Table of Contents

1. [Schema Overview](#schema-overview)
2. [Core Company Structure](#core-company-structure)
3. [Financial Management](#financial-management)
4. [Sales & Customer Management](#sales--customer-management)
5. [Purchasing & Vendor Management](#purchasing--vendor-management)
6. [Inventory Management](#inventory-management)
7. [Dimensional Analysis](#dimensional-analysis)
8. [Supporting Master Data](#supporting-master-data)
9. [Cube Relationships](#cube-relationships)
10. [Key Measures and Metrics](#key-measures-and-metrics)

---

## Schema Overview

The Business Central cube schema is organized into the following functional areas:

- **Core Setup**: Company, Company Information
- **Financial**: G/L Accounts, G/L Entries, Bank Accounts, Currencies
- **Sales**: Customers, Sales Orders, Sales Invoices, Sales Shipments
- **Purchasing**: Vendors, Purchase Orders, Purchase Invoices, Purchase Receipts
- **Inventory**: Items, Item Ledger Entries, Inventory Posting Groups
- **Dimensions**: Dimensions, Dimension Values, Dimension Set Entries
- **Supporting Data**: Payment Terms, Payment Methods, Countries, etc.

All cubes follow a consistent pattern:
- Primary key fields are properly defined
- All cubes join to the company cube for multi-company support
- Standard measures include count with additional domain-specific measures
- Dimension fields capture both transactional and master data attributes

---

## Core Company Structure

### Company Cube
**Table**: `BUSINESS_CENTRAL.COMPANY`
**Primary Key**: `id`

This is the central cube that all other cubes join to, enabling multi-company reporting and analysis.

**Key Dimensions**:
- `id` (primary key)
- `name` - Company name
- `display_name` - Display name for reporting
- `business_profile_id` - Business profile reference
- `evaluation_company` - Boolean flag for demo companies

### Company Information Cube
**Table**: `BUSINESS_CENTRAL.COMPANY_INFORMATION`
**Primary Key**: `system_id`
**Joins**: company (many_to_one)

Contains detailed company configuration and settings.

**Key Dimensions**:
- `name`, `name_2` - Company names
- `address`, `city`, `post_code`, `country_region_code` - Address details
- `vat_registration_no` - VAT registration
- `bank_account_no`, `bank_name` - Banking information
- `phone_no`, `e_mail` - Contact information

---

## Financial Management

### G/L Account Cube
**Table**: `BUSINESS_CENTRAL.G_L_ACCOUNT`
**Primary Key**: `no`
**Joins**: company (many_to_one)

Chart of accounts master data defining the general ledger structure.

**Key Dimensions**:
- `no` (primary key) - Account number
- `name` - Account name
- `account_type` - Type (Posting, Total, Begin-Total, End-Total)
- `income_balance` - Income/Balance Sheet indicator
- `account_category` - Account categorization
- `direct_posting` - Allow direct posting flag
- `blocked` - Account blocked status

**Financial Dimensions**:
- `balance` - Current balance
- `net_change` - Period net change
- `debit_amount`, `credit_amount` - Debit/credit amounts
- `budgeted_amount` - Budget amounts

### G/L Entry Cube
**Table**: `BUSINESS_CENTRAL.G_L_ENTRY`
**Primary Key**: `system_id`
**Joins**: company (many_to_one)

Transactional general ledger entries representing all financial postings.

**Key Dimensions**:
- `system_id` (primary key)
- `g_laccount_no` - G/L account number
- `posting_date` - Posting date
- `document_type` - Document type (Invoice, Payment, etc.)
- `document_no` - Document number
- `description` - Entry description
- `source_type`, `source_no` - Source reference

**Financial Measures**:
- `amount` - Posted amount
- `debit_amount`, `credit_amount` - Debit/credit amounts
- `vat_amount` - VAT amount
- `dimension_changes_count` (measure) - Count of dimension changes

**Dimension Support**:
- `global_dimension_1_code`, `global_dimension_2_code` - Global dimensions
- `shortcut_dimension_3_code` through `shortcut_dimension_8_code` - Additional dimensions

### Bank Account Cube
**Table**: `BUSINESS_CENTRAL.BANK_ACCOUNT`
**Primary Key**: `no`
**Joins**: company (many_to_one)

Bank account master data for cash management.

**Key Dimensions**:
- `no` (primary key) - Bank account number
- `name` - Account name
- `bank_account_no` - Bank's account number
- `currency_code` - Account currency
- `iban` - IBAN number
- `swift_code` - SWIFT code

---

## Sales & Customer Management

### Customer Cube
**Table**: `BUSINESS_CENTRAL.CUSTOMER`
**Primary Key**: `no`
**Joins**: company (many_to_one)

Customer master data with credit management and sales configuration.

**Key Dimensions**:
- `no` (primary key) - Customer number
- `name` - Customer name
- `blocked` - Blocking status
- `credit_limit_lcy` - Credit limit
- `payment_terms_code` - Default payment terms
- `customer_posting_group` - Posting group
- `gen_bus_posting_group` - General business posting group
- `vat_bus_posting_group` - VAT business posting group

**Financial Metrics**:
- `balance` - Current balance
- `balance_lcy` - Balance in local currency
- `sales_lcy` - Total sales
- `profit_lcy` - Total profit
- `outstanding_orders` - Outstanding order amount
- `shipped_not_invoiced` - Shipped but not invoiced amount

### Sales Invoice Header Cube
**Table**: `BUSINESS_CENTRAL.SALES_INVOICE_HEADER`
**Primary Key**: `no`
**Joins**: company (many_to_one)

Posted sales invoice headers containing invoice-level information.

**Key Dimensions**:
- `no` (primary key) - Invoice number
- `sell_to_customer_no` - Sell-to customer
- `bill_to_customer_no` - Bill-to customer
- `posting_date` - Posting date
- `document_date` - Document date
- `due_date` - Payment due date
- `currency_code` - Invoice currency
- `payment_terms_code` - Payment terms

**Financial Metrics**:
- `amount` - Invoice amount excluding VAT
- `amount_including_vat` - Total invoice amount
- `remaining_amount` - Outstanding amount
- `invoice_discount_amount` - Invoice discount

### Sales Invoice Line Cube
**Table**: `BUSINESS_CENTRAL.SALES_INVOICE_LINE`
**Primary Key**: `document_no`, `no`
**Joins**: company (many_to_one)

Posted sales invoice lines with item/service details.

**Key Dimensions**:
- `document_no` (primary key) - Invoice number
- `no` (primary key) - Item/G/L account number
- `type` - Line type (Item, G/L Account, etc.)
- `description` - Line description
- `quantity` - Quantity sold
- `unit_of_measure_code` - Unit of measure

**Financial Metrics**:
- `unit_price` - Unit price
- `line_amount` - Line amount before discount
- `line_discount` - Line discount percentage
- `amount` - Net line amount
- `amount_including_vat` - Gross line amount

### Sales Header Cube
**Table**: `BUSINESS_CENTRAL.SALES_HEADER`
**Primary Key**: `no`
**Joins**: company (many_to_one)

Open sales documents (quotes, orders, returns).

**Key Dimensions**:
- `no` (primary key) - Document number
- `document_type` - Document type
- `status` - Document status
- Similar structure to Sales Invoice Header

### Sales Line Cube
**Table**: `BUSINESS_CENTRAL.SALES_LINE`
**Primary Key**: `document_no`, `no`
**Joins**: company (many_to_one)

Open sales document lines.

**Key Dimensions**:
- Similar structure to Sales Invoice Line
- Additional quantity fields for partial shipment/invoicing

---

## Purchasing & Vendor Management

### Vendor Cube
**Table**: `BUSINESS_CENTRAL.VENDOR`
**Primary Key**: `no`
**Joins**: company (many_to_one)

Vendor master data with payment configuration.

**Key Dimensions**:
- `no` (primary key) - Vendor number
- `name` - Vendor name
- `blocked` - Blocking status
- `payment_terms_code` - Default payment terms
- `vendor_posting_group` - Posting group
- `gen_bus_posting_group` - General business posting group
- `vat_bus_posting_group` - VAT business posting group

**Financial Metrics**:
- `balance` - Current balance
- `balance_lcy` - Balance in local currency
- `purchases_lcy` - Total purchases
- `outstanding_orders` - Outstanding order amount
- `amt_rcd_not_invoiced` - Received not invoiced amount

### Purchase Header Cube
**Table**: `BUSINESS_CENTRAL.PURCHASE_HEADER`
**Primary Key**: `no`
**Joins**: company (many_to_one)

Open purchase documents (quotes, orders, returns).

**Key Dimensions**:
- `no` (primary key) - Document number
- `document_type` - Document type
- `buy_from_vendor_no` - Buy-from vendor
- `pay_to_vendor_no` - Pay-to vendor
- `status` - Document status
- `posting_date` - Posting date
- `expected_receipt_date` - Expected receipt

**Financial Metrics**:
- `amount` - Order amount excluding VAT
- `amount_including_vat` - Total order amount
- `amt_rcd_not_invoiced_lcy` - Received not invoiced

### Purchase Line Cube
**Table**: `BUSINESS_CENTRAL.PURCHASE_LINE`
**Primary Key**: `document_no`, `no`
**Joins**: company (many_to_one)

Open purchase document lines with extensive tracking fields.

**Key Dimensions**:
- `document_no` (primary key) - Document number
- `no` (primary key) - Item/G/L account number
- `type` - Line type
- `description` - Line description
- `quantity` - Quantity ordered
- `quantity_received` - Quantity received
- `quantity_invoiced` - Quantity invoiced

**Financial Metrics**:
- `direct_unit_cost` - Direct unit cost
- `unit_cost` - Full unit cost
- `line_amount` - Line amount
- `outstanding_amount` - Outstanding amount

**Special Measures**:
- `attached_lines_count` (sum) - Count of attached lines
- `attached_doc_count` (sum) - Count of attached documents

### Purchase Invoice Header Cube
**Table**: `BUSINESS_CENTRAL.PURCH_INV_HEADER`
**Primary Key**: `no`
**Joins**: company (many_to_one)

Posted purchase invoices.

### Purchase Invoice Line Cube
**Table**: `BUSINESS_CENTRAL.PURCH_INV_LINE`
**Primary Key**: `document_no`, `no`
**Joins**: company (many_to_one)

Posted purchase invoice lines.

---

## Inventory Management

### Item Cube
**Table**: `BUSINESS_CENTRAL.ITEM`
**Primary Key**: `no`
**Joins**: company (many_to_one)

Item master data with extensive inventory and costing configuration.

**Key Dimensions**:
- `no` (primary key) - Item number
- `description` - Item description
- `type` - Item type (Inventory, Service, Non-Inventory)
- `base_unit_of_measure` - Base UOM
- `item_category_code` - Item category
- `inventory_posting_group` - Inventory posting group
- `costing_method` - Costing method (FIFO, LIFO, Average, etc.)
- `blocked` - Item blocked flag

**Inventory Metrics**:
- `inventory` - Current inventory
- `qty_on_purch_order` - Quantity on purchase orders
- `qty_on_sales_order` - Quantity on sales orders
- `net_change` - Period net change

**Cost Metrics**:
- `unit_cost` - Unit cost
- `unit_price` - Unit price
- `standard_cost` - Standard cost
- `last_direct_cost` - Last direct cost

**Special Measure**:
- `discrete_order_quantity` (sum) - Discrete order quantity

### Item Ledger Entry Cube
**Table**: `BUSINESS_CENTRAL.ITEM_LEDGER_ENTRY`
**Primary Key**: `system_id`
**Joins**: company (many_to_one)

Item transactions tracking all inventory movements.

**Key Dimensions**:
- `system_id` (primary key)
- `item_no` - Item number
- `posting_date` - Posting date
- `entry_type` - Entry type (Purchase, Sale, Transfer, etc.)
- `document_type` - Document type
- `document_no` - Document number
- `location_code` - Warehouse location
- `source_type`, `source_no` - Source reference

**Quantity Metrics**:
- `quantity` - Entry quantity
- `remaining_quantity` - Remaining quantity
- `invoiced_quantity` - Invoiced quantity

**Cost Metrics**:
- `cost_amount_actual` - Actual cost amount
- `cost_amount_expected` - Expected cost amount
- `sales_amount_actual` - Sales amount
- `sales_amount_expected` - Expected sales amount

### Item Category Cube
**Table**: `BUSINESS_CENTRAL.ITEM_CATEGORY`
**Primary Key**: `code`
**Joins**: company (many_to_one)

Item categorization hierarchy.

### Item Variant Cube
**Table**: `BUSINESS_CENTRAL.ITEM_VARIANT`
**Primary Key**: `code`
**Joins**: company (many_to_one)

Item variants for size/color/style variations.

---

## Dimensional Analysis

### Dimension Cube
**Table**: `BUSINESS_CENTRAL.DIMENSION`
**Primary Key**: `code`
**Joins**: company (many_to_one)

Dimension definitions for multi-dimensional analysis.

**Key Dimensions**:
- `code` (primary key) - Dimension code
- `name` - Dimension name
- `description` - Dimension description
- `blocked` - Blocked flag

### Dimension Value Cube
**Table**: `BUSINESS_CENTRAL.DIMENSION_VALUE`
**Primary Key**: `code`
**Joins**: company (many_to_one)

Dimension values within each dimension.

**Key Dimensions**:
- `code` (primary key) - Dimension value code
- `dimension_code` - Parent dimension code
- `name` - Value name
- `dimension_value_type` - Type (Standard, Total, Begin-Total, End-Total)
- `totaling` - Totaling formula
- `blocked` - Blocked flag

### Dimension Set Entry Cube
**Table**: `BUSINESS_CENTRAL.DIMENSION_SET_ENTRY`
**Primary Key**: `system_id`
**Joins**: 
- company (many_to_one)
- dimension_value (many_to_one)

Links between transactions and dimension values.

**Key Dimensions**:
- `system_id` (primary key)
- `dimension_code` - Dimension code
- `dimension_value_code` - Dimension value code
- `dimension_name` - Dimension name
- `dimension_value_name` - Value name

### Default Dimension Cube
**Table**: `BUSINESS_CENTRAL.DEFAULT_DIMENSION`
**Primary Key**: Composite
**Joins**: company (many_to_one)

Default dimension assignments for master data records.

---

## Supporting Master Data

### Currency Cube
**Table**: `BUSINESS_CENTRAL.CURRENCY`
**Primary Key**: `code`

Currency definitions with exchange rate configuration.

**Key Dimensions**:
- `code` (primary key) - Currency code
- `description` - Currency description
- `symbol` - Currency symbol

### Currency Exchange Rate Cube
**Table**: `BUSINESS_CENTRAL.CURRENCY_EXCHANGE_RATE`
**Primary Key**: Composite

Exchange rates for currency conversion.

### Payment Terms Cube
**Table**: `BUSINESS_CENTRAL.PAYMENT_TERMS`
**Primary Key**: `code`

Payment terms configuration.

**Key Dimensions**:
- `code` (primary key)
- `description`
- `due_date_calculation` - Due date formula
- `discount_date_calculation` - Discount date formula
- `discount` - Payment discount percentage

### Payment Method Cube
**Table**: `BUSINESS_CENTRAL.PAYMENT_METHOD`
**Primary Key**: `code`

Payment method definitions.

### Country/Region Cube
**Table**: `BUSINESS_CENTRAL.COUNTRY_REGION`
**Primary Key**: `code`

Country and region definitions.

**Key Dimensions**:
- `code` (primary key) - Country code
- `name` - Country name
- `iso_code` - ISO country code
- `vat_scheme` - VAT scheme

### Location Cube
**Table**: `BUSINESS_CENTRAL.LOCATION`
**Primary Key**: `code`

Warehouse location definitions.

### Unit of Measure Cube
**Table**: `BUSINESS_CENTRAL.UNIT_OF_MEASURE`
**Primary Key**: `code`

Units of measure definitions.

### Contact Cube
**Table**: `BUSINESS_CENTRAL.CONTACT`
**Primary Key**: `no`

Contact management for customers and vendors.

### Employee Cube
**Table**: `BUSINESS_CENTRAL.EMPLOYEE`
**Primary Key**: `no`

Employee master data.

### Job Cube
**Table**: `BUSINESS_CENTRAL.JOB`
**Primary Key**: `no`

Project/job management.

### Shipment Method Cube
**Table**: `BUSINESS_CENTRAL.SHIPMENT_METHOD`
**Primary Key**: `code`

Shipping method definitions.

---

## Cube Relationships

### Primary Relationships

All cubes have a many-to-one relationship with the Company cube, enabling multi-company filtering and analysis.

### Key Cross-Functional Joins

1. **Financial to Master Data**:
   - G/L Entry → G/L Account
   - G/L Entry → Customer/Vendor (via source_no)

2. **Sales Document Relationships**:
   - Sales Header/Line → Customer
   - Sales Invoice Header/Line → Customer
   - Sales documents → Item
   - Sales documents → Location

3. **Purchase Document Relationships**:
   - Purchase Header/Line → Vendor
   - Purchase Invoice Header/Line → Vendor
   - Purchase documents → Item
   - Purchase documents → Location

4. **Inventory Relationships**:
   - Item Ledger Entry → Item
   - Item Ledger Entry → Location
   - Item Ledger Entry → Customer/Vendor

5. **Dimensional Relationships**:
   - All transaction cubes → Dimension Set Entry
   - Dimension Set Entry → Dimension Value
   - Dimension Value → Dimension

### Join Patterns

The schema uses consistent join patterns:
- `company_id` for company joins
- Standard foreign key references for master data
- System-generated IDs for transaction joins

---

## Key Measures and Metrics

### Standard Measures

Every cube includes:
- `count` - Row count measure

### Financial Measures

**G/L Entry**:
- `dimension_changes_count` (sum) - Tracks dimension modifications

**Item**:
- `discrete_order_quantity` (sum) - Discrete ordering quantity

**Purchase Line**:
- `attached_lines_count` (sum) - Related line count
- `attached_doc_count` (sum) - Attached document count

### Calculated Metrics Opportunities

The schema provides extensive dimensional data that can be used for calculated measures:

1. **Financial KPIs**:
   - Gross Margin = (Sales - COGS) / Sales
   - DSO (Days Sales Outstanding) = (AR Balance / Sales) × Days
   - DPO (Days Payable Outstanding) = (AP Balance / Purchases) × Days

2. **Inventory KPIs**:
   - Inventory Turnover = COGS / Average Inventory
   - Days Inventory Outstanding = (Inventory / COGS) × Days
   - Fill Rate = Shipped Quantity / Ordered Quantity

3. **Sales KPIs**:
   - Average Order Value = Total Sales / Order Count
   - Customer Lifetime Value = Total Customer Sales
   - Sales Growth = (Current Period - Previous Period) / Previous Period

4. **Purchasing KPIs**:
   - Purchase Price Variance = (Standard Cost - Actual Cost) × Quantity
   - Vendor Performance = On-Time Deliveries / Total Deliveries
   - Purchase Order Cycle Time = Receipt Date - Order Date

---

## Data Type Patterns

The schema uses consistent data type patterns:

- **Identifiers**: `string` type for all IDs and codes
- **Amounts**: `string` type for decimal values (requires casting for calculations)
- **Dates**: `time` type for all date/datetime fields
- **Flags**: `boolean` type for yes/no fields
- **Quantities**: `string` type (requires casting for calculations)

---

## Best Practices for Usage

1. **Multi-Company Queries**: Always include company join/filter when needed
2. **Dimensional Analysis**: Leverage dimension set entries for detailed analysis
3. **Currency Handling**: Consider local vs. foreign currency fields
4. **Date Filtering**: Use posting_date for financial reporting
5. **Status Filtering**: Check document status and blocked flags
6. **Performance**: Use pre-aggregations for commonly used metrics

---

## Schema Maintenance Notes

1. **Primary Keys**: All cubes have defined primary keys
2. **Join Integrity**: All foreign key relationships are properly defined
3. **Naming Convention**: Consistent snake_case naming throughout
4. **Data Source**: All cubes use the "default" data source
5. **Schema Location**: All tables in "BUSINESS_CENTRAL" schema

---

## Appendix: Cube File Locations

All cube definitions are located in: `/model/cubes/`

Each cube is defined in a separate YAML file following the pattern: `{cube_name}.yml`

Views configuration can be found in: `/model/views/`

---

*Generated: 2025-08-28*
*Schema Version: Business Central Cloud*
*Total Cubes: 49*
*Total Relationships: 50+*