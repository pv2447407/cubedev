# Cube Schema Documentation

## Table of Contents

1. [Overview](#overview)
2. [Data Type Legend](#data-type-legend)
3. [Cube Schemas](#cube-schemas)
   - [BankAccount](#bankaccount)
   - [Company](#company)
   - [CompanyInformation](#companyinformation)
   - [Contact](#contact)
   - [CountryRegion](#countryregion)
   - [Currency](#currency)
   - [CurrencyExchangeRate](#currencyexchangerate)
   - [Customer](#customer)
   - [DefaultDimension](#defaultdimension)
   - [Dimension](#dimension)
   - [DimensionSetEntry](#dimensionsetentry)
   - [DimensionValue](#dimensionvalue)
   - [Employee](#employee)
   - [GLAccount](#glaccount)
   - [GLEntry](#glentry)
   - [GenJournalBatch](#genjournalbatch)
   - [GenJournalLine](#genjournalline)
   - [GenProductPostingGroup](#genproductpostinggroup)
   - [InventoryPostingGroup](#inventorypostinggroup)
4. [Relationship Diagram](#relationship-diagram)

## Overview

This document provides comprehensive documentation for all Cube.js data models in the Business Central integration. The schemas define the structure, relationships, and measures for various business entities including financial accounts, customers, employees, and transactional data.

**Data Source**: All cubes connect to the `default` data source  
**Database Schema**: `BUSINESS_CENTRAL`

## Data Type Legend

| Type | Description |
|------|-------------|
| `string` | Text/Character data |
| `number` | Numeric values (integers or decimals) |
| `time` | Date/Time values |
| `boolean` | True/False values |

## Cube Schemas

### BankAccount

**Cube Name**: `bank_account`  
**Source Table**: `BUSINESS_CENTRAL.BANK_ACCOUNT`  
**Primary Key**: `no` (string)

#### Dimensions (104 total)

| Dimension | Type | Description |
|-----------|------|-------------|
| `no` | string | Primary key - Bank account number |
| `system_id` | string | System identifier |
| `global_dimension_1_filter` | string | Global dimension 1 filter |
| `last_payment_statement_no` | string | Last payment statement number |
| `telex_answer_back` | string | Telex answer back |
| `county` | string | County |
| `bank_account_no` | string | Bank account number |
| `country_region_code` | string | Country/region code |
| `sepa_direct_debit_exp_format` | string | SEPA direct debit export format |
| `check_report_id` | number | Check report ID |
| `e_mail` | string | Email address |
| `e_pay_export_file_path` | string | E-pay export file path |
| `use_as_default_for_currency` | boolean | Use as default for currency |
| `balance` | string | Account balance |
| `creditor_no` | string | Creditor number |
| `disable_automatic_pmt_matching` | boolean | Disable automatic payment matching |
| `transaction_import_timespan` | number | Transaction import timespan |
| `mobile_phone_no` | string | Mobile phone number |
| `iban` | string | IBAN |
| `name` | string | Bank account name |
| `post_code` | string | Postal code |
| `currency_code` | string | Currency code |
| `swift_code` | string | SWIFT code |
| `company_id` | string | Company identifier |
| `_fivetran_synced` | time | Fivetran sync timestamp |
| `_fivetran_deleted` | boolean | Fivetran deletion flag |

*Note: Additional dimensions omitted for brevity - total of 104 dimensions*

#### Measures

| Measure | Type | Description |
|---------|------|-------------|
| `count` | count | Record count |

#### Joins

| Join | Relationship | SQL Condition |
|------|--------------|---------------|
| `company` | many_to_one | `${CUBE}."COMPANY_ID" = ${company}."ID"` |

---

### Company

**Cube Name**: `company`  
**Source Table**: `BUSINESS_CENTRAL.COMPANY`  
**Primary Key**: `id` (string)

#### Dimensions (12 total)

| Dimension | Type | Description |
|-----------|------|-------------|
| `id` | string | Primary key - Company ID |
| `system_id` | string | System identifier |
| `system_created_at` | time | System creation timestamp |
| `system_modified_by` | string | System modified by user |
| `system_modified_at` | time | System modification timestamp |
| `evaluation_company` | boolean | Evaluation company flag |
| `display_name` | string | Display name |
| `name` | string | Company name |
| `system_created_by` | string | System created by user |
| `business_profile_id` | string | Business profile ID |
| `_fivetran_synced` | time | Fivetran sync timestamp |
| `_fivetran_deleted` | boolean | Fivetran deletion flag |

#### Measures

| Measure | Type | Description |
|---------|------|-------------|
| `count` | count | Record count |

#### Joins

| Join | Relationship | SQL Condition |
|------|--------------|---------------|
| `company` | many_to_one | `${CUBE}."COMPANY_ID" = ${company}."ID"` |

---

### CompanyInformation

**Cube Name**: `company_information`  
**Source Table**: `BUSINESS_CENTRAL.COMPANY_INFORMATION`  
**Primary Key**: `primary_key` (string)

#### Dimensions (112 total)

| Dimension | Type | Description |
|-----------|------|-------------|
| `primary_key` | string | Primary key |
| `system_id` | string | System identifier |
| `giro_no` | string | Giro number |
| `last_modified_date_time` | time | Last modification timestamp |
| `system_indicator_style` | string | System indicator style |
| `county` | string | County |
| `bank_account_no` | string | Bank account number |
| `country_region_code` | string | Country/region code |
| `e_mail` | string | Email address |
| `vat_registration_no` | string | VAT registration number |
| `name` | string | Company name |
| `post_code` | string | Postal code |
| `city` | string | City |
| `phone_no` | string | Phone number |
| `address` | string | Address |
| `fax_no` | string | Fax number |
| `registration_no` | string | Registration number |
| `company_id` | string | Company identifier |

*Note: Additional dimensions omitted for brevity - total of 112 dimensions*

#### Measures

| Measure | Type | Description |
|---------|------|-------------|
| `count` | count | Record count |

#### Joins

| Join | Relationship | SQL Condition |
|------|--------------|---------------|
| `company` | many_to_one | `${CUBE}."COMPANY_ID" = ${company}."ID"` |

---

### Contact

**Cube Name**: `contact`  
**Source Table**: `BUSINESS_CENTRAL.CONTACT`  
**Primary Key**: `no` (string)

#### Dimensions (126 total)

| Dimension | Type | Description |
|-----------|------|-------------|
| `no` | string | Primary key - Contact number |
| `system_id` | string | System identifier |
| `minor` | boolean | Minor flag |
| `company_name` | string | Company name |
| `job_title` | string | Job title |
| `county` | string | County |
| `country_region_code` | string | Country/region code |
| `type` | string | Contact type |
| `e_mail` | string | Email address |
| `privacy_blocked` | boolean | Privacy blocked flag |
| `mobile_phone_no` | string | Mobile phone number |
| `first_name` | string | First name |
| `last_name` | string | Last name |
| `name` | string | Full name |
| `post_code` | string | Postal code |
| `city` | string | City |
| `phone_no` | string | Phone number |
| `address` | string | Address |
| `salesperson_code` | string | Salesperson code |
| `company_id` | string | Company identifier |

*Note: Additional dimensions omitted for brevity - total of 126 dimensions*

#### Measures

| Measure | Type | Description |
|---------|------|-------------|
| `count` | count | Record count |

#### Joins

| Join | Relationship | SQL Condition |
|------|--------------|---------------|
| `company` | many_to_one | `${CUBE}."COMPANY_ID" = ${company}."ID"` |

---

### CountryRegion

**Cube Name**: `country_region`  
**Source Table**: `BUSINESS_CENTRAL.COUNTRY_REGION`  
**Primary Key**: `code` (string)

#### Dimensions (23 total)

| Dimension | Type | Description |
|-----------|------|-------------|
| `code` | string | Primary key - Country/region code |
| `system_id` | string | System identifier |
| `eu_country_region_code` | string | EU country/region code |
| `contact_address_format` | string | Contact address format |
| `last_modified_date_time` | time | Last modification timestamp |
| `intrastat_code` | string | Intrastat code |
| `address_format` | string | Address format |
| `iso_numeric_code` | string | ISO numeric code |
| `iso_code` | string | ISO code |
| `name` | string | Country/region name |
| `sat_country_code` | string | SAT country code |
| `vat_scheme` | string | VAT scheme |
| `county_name` | string | County name |
| `company_id` | string | Company identifier |

#### Measures

| Measure | Type | Description |
|---------|------|-------------|
| `count` | count | Record count |

#### Joins

| Join | Relationship | SQL Condition |
|------|--------------|---------------|
| `company` | many_to_one | `${CUBE}."COMPANY_ID" = ${company}."ID"` |

---

### Currency

**Cube Name**: `currency`  
**Source Table**: `BUSINESS_CENTRAL.CURRENCY`  
**Primary Key**: `code` (string)

#### Dimensions (73 total)

| Dimension | Type | Description |
|-----------|------|-------------|
| `code` | string | Primary key - Currency code |
| `system_id` | string | System identifier |
| `symbol` | string | Currency symbol |
| `last_date_adjusted` | time | Last adjustment date |
| `max_vatdifference_allowed` | number | Maximum VAT difference allowed |
| `amount_rounding_precision` | string | Amount rounding precision |
| `iso_numeric_code` | string | ISO numeric code |
| `iso_code` | string | ISO code |
| `description` | string | Currency description |
| `amount_decimal_places` | string | Amount decimal places |
| `company_id` | string | Company identifier |

*Note: Additional dimensions omitted for brevity - total of 73 dimensions*

#### Measures

| Measure | Type | Description |
|---------|------|-------------|
| `count` | count | Record count |

#### Joins

| Join | Relationship | SQL Condition |
|------|--------------|---------------|
| `company` | many_to_one | `${CUBE}."COMPANY_ID" = ${company}."ID"` |

---

### CurrencyExchangeRate

**Cube Name**: `currency_exchange_rate`  
**Source Table**: `BUSINESS_CENTRAL.CURRENCY_EXCHANGE_RATE`  
**Primary Key**: `starting_date` (time)

#### Dimensions (16 total)

| Dimension | Type | Description |
|-----------|------|-------------|
| `starting_date` | time | Primary key - Starting date |
| `system_id` | string | System identifier |
| `relational_currency_code` | string | Relational currency code |
| `exchange_rate_amount` | string | Exchange rate amount |
| `relational_adjmt_exch_rate_amt` | number | Relational adjustment exchange rate amount |
| `fix_exchange_rate_amount` | string | Fixed exchange rate amount |
| `relational_exch_rate_amount` | string | Relational exchange rate amount |
| `adjustment_exch_rate_amount` | string | Adjustment exchange rate amount |
| `currency_code` | string | Currency code |
| `company_id` | string | Company identifier |

#### Measures

| Measure | Type | Description |
|---------|------|-------------|
| `count` | count | Record count |

#### Joins

| Join | Relationship | SQL Condition |
|------|--------------|---------------|
| `company` | many_to_one | `${CUBE}."COMPANY_ID" = ${company}."ID"` |

---

### Customer

**Cube Name**: `customer`  
**Source Table**: `BUSINESS_CENTRAL.CUSTOMER`  
**Primary Key**: `no` (string)

#### Dimensions (265 total)

| Dimension | Type | Description |
|-----------|------|-------------|
| `no` | string | Primary key - Customer number |
| `system_id` | string | System identifier |
| `payment_method_code` | string | Payment method code |
| `tax_liable` | boolean | Tax liable flag |
| `county` | string | County |
| `customer_posting_group` | string | Customer posting group |
| `country_region_code` | string | Country/region code |
| `e_mail` | string | Email address |
| `balance` | string | Customer balance |
| `prices_including_vat` | boolean | Prices including VAT |
| `privacy_blocked` | boolean | Privacy blocked flag |
| `shipping_agent_code` | string | Shipping agent code |
| `customer_price_group` | string | Customer price group |
| `mobile_phone_no` | string | Mobile phone number |
| `language_code` | string | Language code |
| `name` | string | Customer name |
| `post_code` | string | Postal code |
| `city` | string | City |
| `phone_no` | string | Phone number |
| `blocked` | string | Blocked status |
| `currency_code` | string | Currency code |
| `gen_bus_posting_group` | string | General business posting group |
| `vat_registration_no` | string | VAT registration number |
| `address` | string | Address |
| `salesperson_code` | string | Salesperson code |
| `payment_terms_code` | string | Payment terms code |
| `company_id` | string | Company identifier |

*Note: Additional dimensions omitted for brevity - total of 265 dimensions*

#### Measures

| Measure | Type | Description |
|---------|------|-------------|
| `count` | count | Record count |

#### Joins

| Join | Relationship | SQL Condition |
|------|--------------|---------------|
| `company` | many_to_one | `${CUBE}."COMPANY_ID" = ${company}."ID"` |

---

### DefaultDimension

**Cube Name**: `default_dimension`  
**Source Table**: `BUSINESS_CENTRAL.DEFAULT_DIMENSION`  
**Primary Key**: `no` (string)

#### Dimensions (23 total)

| Dimension | Type | Description |
|-----------|------|-------------|
| `no` | string | Primary key - Number |
| `system_id` | string | System identifier |
| `dimension_value_code` | string | Dimension value code |
| `multi_selection_action` | string | Multi-selection action |
| `dimension_code` | string | Dimension code |
| `parent_type` | string | Parent type |
| `parent_id` | string | Parent ID |
| `dimension_id` | string | Dimension ID |
| `dimension_value_id` | string | Dimension value ID |
| `table_caption` | string | Table caption |
| `table_id` | number | Table ID |
| `allowed_values_filter` | string | Allowed values filter |
| `value_posting` | string | Value posting |
| `company_id` | string | Company identifier |

#### Measures

| Measure | Type | Description |
|---------|------|-------------|
| `count` | count | Record count |

#### Joins

| Join | Relationship | SQL Condition |
|------|--------------|---------------|
| `company` | many_to_one | `${CUBE}."COMPANY_ID" = ${company}."ID"` |

---

### Dimension

**Cube Name**: `dimension`  
**Source Table**: `BUSINESS_CENTRAL.DIMENSION`  
**Primary Key**: `code` (string)

#### Dimensions (16 total)

| Dimension | Type | Description |
|-----------|------|-------------|
| `code` | string | Primary key - Dimension code |
| `system_id` | string | System identifier |
| `last_modified_date_time` | time | Last modification timestamp |
| `description` | string | Dimension description |
| `consolidation_code` | string | Consolidation code |
| `filter_caption` | string | Filter caption |
| `blocked` | boolean | Blocked flag |
| `name` | string | Dimension name |
| `code_caption` | string | Code caption |
| `map_to_icdimension_code` | string | Map to IC dimension code |
| `company_id` | string | Company identifier |

#### Measures

| Measure | Type | Description |
|---------|------|-------------|
| `count` | count | Record count |

#### Joins

| Join | Relationship | SQL Condition |
|------|--------------|---------------|
| `company` | many_to_one | `${CUBE}."COMPANY_ID" = ${company}."ID"` |

---

### DimensionSetEntry

**Cube Name**: `dimension_set_entry`  
**Source Table**: `BUSINESS_CENTRAL.DIMENSION_SET_ENTRY`  
**Primary Key**: `dimension_set_id` (number)

#### Dimensions (15 total)

| Dimension | Type | Description |
|-----------|------|-------------|
| `dimension_set_id` | number | Primary key - Dimension set ID |
| `system_id` | string | System identifier |
| `dimension_value_code` | string | Dimension value code |
| `global_dimension_no` | number | Global dimension number |
| `dimension_value_id` | number | Dimension value ID |
| `dimension_code` | string | Dimension code |
| `dimension_value_name` | string | Dimension value name |
| `dimension_name` | string | Dimension name |
| `company_id` | string | Company identifier |

#### Measures

| Measure | Type | Description |
|---------|------|-------------|
| `count` | count | Record count |

#### Joins

| Join | Relationship | SQL Condition |
|------|--------------|---------------|
| `company` | many_to_one | `${CUBE}."COMPANY_ID" = ${company}."ID"` |

---

### DimensionValue

**Cube Name**: `dimension_value`  
**Source Table**: `BUSINESS_CENTRAL.DIMENSION_VALUE`  
**Primary Key**: `code` (string)

#### Dimensions (25 total)

| Dimension | Type | Description |
|-----------|------|-------------|
| `code` | string | Primary key - Dimension value code |
| `system_id` | string | System identifier |
| `map_to_icdimension_value_code` | string | Map to IC dimension value code |
| `last_modified_date_time` | time | Last modification timestamp |
| `dimension_value_type` | string | Dimension value type |
| `global_dimension_no` | number | Global dimension number |
| `dimension_code` | string | Dimension code |
| `totaling` | string | Totaling |
| `consolidation_code` | string | Consolidation code |
| `indentation` | number | Indentation level |
| `blocked` | boolean | Blocked flag |
| `dimension_id` | string | Dimension ID |
| `dimension_value_id` | number | Dimension value ID |
| `name` | string | Dimension value name |
| `company_id` | string | Company identifier |

#### Measures

| Measure | Type | Description |
|---------|------|-------------|
| `count` | count | Record count |

#### Joins

| Join | Relationship | SQL Condition |
|------|--------------|---------------|
| `company` | many_to_one | `${CUBE}."COMPANY_ID" = ${company}."ID"` |

---

### Employee

**Cube Name**: `employee`  
**Source Table**: `BUSINESS_CENTRAL.EMPLOYEE`  
**Primary Key**: `no` (string)

#### Dimensions (102 total)

| Dimension | Type | Description |
|-----------|------|-------------|
| `no` | string | Primary key - Employee number |
| `system_id` | string | System identifier |
| `cost_center_code` | string | Cost center code |
| `job_title` | string | Job title |
| `county` | string | County |
| `bank_account_no` | string | Bank account number |
| `country_region_code` | string | Country/region code |
| `manager_no` | string | Manager number |
| `e_mail` | string | Email address |
| `termination_date` | time | Termination date |
| `privacy_blocked` | boolean | Privacy blocked flag |
| `mobile_phone_no` | string | Mobile phone number |
| `employment_date` | time | Employment date |
| `first_name` | string | First name |
| `last_name` | string | Last name |
| `post_code` | string | Postal code |
| `status` | string | Employment status |
| `gender` | string | Gender |
| `city` | string | City |
| `phone_no` | string | Phone number |
| `address` | string | Address |
| `birth_date` | time | Birth date |
| `social_security_no` | string | Social security number |
| `company_id` | string | Company identifier |

*Note: Additional dimensions omitted for brevity - total of 102 dimensions*

#### Measures

| Measure | Type | Description |
|---------|------|-------------|
| `count` | count | Record count |

#### Joins

| Join | Relationship | SQL Condition |
|------|--------------|---------------|
| `company` | many_to_one | `${CUBE}."COMPANY_ID" = ${company}."ID"` |

---

### GLAccount

**Cube Name**: `g_l_account`  
**Source Table**: `BUSINESS_CENTRAL.G_L_ACCOUNT`  
**Primary Key**: `no` (string)

#### Dimensions (104 total)

| Dimension | Type | Description |
|-----------|------|-------------|
| `no` | string | Primary key - G/L account number |
| `system_id` | string | System identifier |
| `tax_liable` | boolean | Tax liable flag |
| `gen_bus_posting_group` | string | General business posting group |
| `reconciliation_account` | boolean | Reconciliation account flag |
| `balance` | string | Account balance |
| `income_balance` | string | Income/Balance indicator |
| `account_type` | string | Account type |
| `debit_amount` | string | Debit amount |
| `new_page` | boolean | New page flag |
| `name` | string | Account name |
| `credit_amount` | string | Credit amount |
| `vat_bus_posting_group` | string | VAT business posting group |
| `account_category` | string | Account category |
| `account_subcategory_descript` | string | Account subcategory description |
| `blocked` | boolean | Blocked flag |
| `gen_prod_posting_group` | string | General product posting group |
| `direct_posting` | boolean | Direct posting flag |
| `vat_prod_posting_group` | string | VAT product posting group |
| `gen_posting_type` | string | General posting type |
| `tax_area_code` | string | Tax area code |
| `comment` | boolean | Comment flag |
| `company_id` | string | Company identifier |

*Note: Additional dimensions omitted for brevity - total of 104 dimensions*

#### Measures

| Measure | Type | Description |
|---------|------|-------------|
| `count` | count | Record count |

#### Joins

| Join | Relationship | SQL Condition |
|------|--------------|---------------|
| `company` | many_to_one | `${CUBE}."COMPANY_ID" = ${company}."ID"` |

---

### GLEntry

**Cube Name**: `g_l_entry`  
**Source Table**: `BUSINESS_CENTRAL.G_L_ENTRY`  
**Primary Key**: `entry_no` (number)

#### Dimensions (109 total)

| Dimension | Type | Description |
|-----------|------|-------------|
| `entry_no` | number | Primary key - Entry number |
| `system_id` | string | System identifier |
| `dimension_set_id` | number | Dimension set ID |
| `tax_liable` | boolean | Tax liable flag |
| `gen_bus_posting_group` | string | General business posting group |
| `transaction_no` | number | Transaction number |
| `posting_date` | time | Posting date |
| `user_id` | string | User ID |
| `source_code` | string | Source code |
| `external_document_no` | string | External document number |
| `journal_batch_name` | string | Journal batch name |
| `g_laccount_name` | string | G/L account name |
| `source_no` | string | Source number |
| `debit_amount` | string | Debit amount |
| `global_dimension_1_code` | string | Global dimension 1 code |
| `global_dimension_2_code` | string | Global dimension 2 code |
| `vat_amount` | string | VAT amount |
| `ic_partner_code` | string | IC partner code |
| `account_id` | string | Account ID |
| `source_type` | string | Source type |
| `credit_amount` | string | Credit amount |
| `document_date` | time | Document date |
| `vat_bus_posting_group` | string | VAT business posting group |
| `document_type` | string | Document type |
| `description` | string | Entry description |
| `document_no` | string | Document number |
| `g_laccount_no` | string | G/L account number |
| `gen_prod_posting_group` | string | General product posting group |
| `job_no` | string | Job number |
| `business_unit_code` | string | Business unit code |
| `vat_prod_posting_group` | string | VAT product posting group |
| `amount` | string | Amount |
| `gen_posting_type` | string | General posting type |
| `tax_area_code` | string | Tax area code |
| `bal_account_no` | string | Balance account number |
| `comment` | string | Comment |
| `reversed` | boolean | Reversed flag |
| `company_id` | string | Company identifier |

*Note: Additional dimensions omitted for brevity - total of 109 dimensions*

#### Measures

| Measure | Type | Description |
|---------|------|-------------|
| `count` | count | Record count |

#### Joins

| Join | Relationship | SQL Condition |
|------|--------------|---------------|
| `company` | many_to_one | `${CUBE}."COMPANY_ID" = ${company}."ID"` |

---

### GenJournalBatch

**Cube Name**: `gen_journal_batch`  
**Source Table**: `BUSINESS_CENTRAL.GEN_JOURNAL_BATCH`  
**Primary Key**: `name` (string)

#### Dimensions (30 total)

| Dimension | Type | Description |
|-----------|------|-------------|
| `name` | string | Primary key - Batch name |
| `system_id` | string | System identifier |
| `bank_statement_import_format` | string | Bank statement import format |
| `template_type` | string | Template type |
| `copy_to_posted_jnl_lines` | boolean | Copy to posted journal lines |
| `no_series` | string | Number series |
| `journal_template_name` | string | Journal template name |
| `posting_no_series` | string | Posting number series |
| `allow_payment_export` | boolean | Allow payment export |
| `recurring` | boolean | Recurring flag |
| `suggest_balancing_amount` | boolean | Suggest balancing amount |
| `description` | string | Batch description |
| `allow_vatdifference` | boolean | Allow VAT difference |
| `bal_account_id` | string | Balance account ID |
| `copy_vatsetup_to_jnl_lines` | boolean | Copy VAT setup to journal lines |
| `pending_approval` | boolean | Pending approval flag |
| `bal_account_no` | string | Balance account number |
| `bal_account_type` | string | Balance account type |
| `reason_code` | string | Reason code |
| `company_id` | string | Company identifier |

#### Measures

| Measure | Type | Description |
|---------|------|-------------|
| `count` | count | Record count |

#### Joins

| Join | Relationship | SQL Condition |
|------|--------------|---------------|
| `company` | many_to_one | `${CUBE}."COMPANY_ID" = ${company}."ID"` |

---

### GenJournalLine

**Cube Name**: `gen_journal_line`  
**Source Table**: `BUSINESS_CENTRAL.GEN_JOURNAL_LINE`  
**Primary Key**: `line_no` (number)

#### Dimensions (320 total)

| Dimension | Type | Description |
|-----------|------|-------------|
| `line_no` | number | Primary key - Line number |
| `system_id` | string | System identifier |
| `dimension_set_id` | number | Dimension set ID |
| `country_region_code` | string | Country/region code |
| `posting_date` | time | Posting date |
| `due_date` | time | Due date |
| `external_document_no` | string | External document number |
| `account_type` | string | Account type |
| `credit_amount` | string | Credit amount |
| `debit_amount` | string | Debit amount |
| `account_id` | string | Account ID |
| `document_date` | time | Document date |
| `document_no` | string | Document number |
| `document_type` | string | Document type |
| `description` | string | Line description |
| `amount` | string | Amount |
| `amount_lcy` | string | Amount (LCY) |
| `currency_code` | string | Currency code |
| `payment_method_code` | string | Payment method code |
| `payment_terms_code` | string | Payment terms code |
| `journal_template_name` | string | Journal template name |
| `journal_batch_name` | string | Journal batch name |
| `source_code` | string | Source code |
| `reason_code` | string | Reason code |
| `vat_amount` | string | VAT amount |
| `vat_bus_posting_group` | string | VAT business posting group |
| `vat_prod_posting_group` | string | VAT product posting group |
| `gen_bus_posting_group` | string | General business posting group |
| `gen_prod_posting_group` | string | General product posting group |
| `bal_account_type` | string | Balance account type |
| `bal_account_no` | string | Balance account number |
| `company_id` | string | Company identifier |

*Note: Additional dimensions omitted for brevity - total of 320 dimensions*

#### Measures

| Measure | Type | Description |
|---------|------|-------------|
| `count` | count | Record count |

#### Joins

| Join | Relationship | SQL Condition |
|------|--------------|---------------|
| `company` | many_to_one | `${CUBE}."COMPANY_ID" = ${company}."ID"` |

---

### GenProductPostingGroup

**Cube Name**: `gen_product_posting_group`  
**Source Table**: `BUSINESS_CENTRAL.GEN_PRODUCT_POSTING_GROUP`  
**Primary Key**: `code` (string)

#### Dimensions (11 total)

| Dimension | Type | Description |
|-----------|------|-------------|
| `code` | string | Primary key - Product posting group code |
| `system_id` | string | System identifier |
| `def_vatprod_posting_group` | string | Default VAT product posting group |
| `description` | string | Description |
| `auto_insert_default` | boolean | Auto insert default flag |
| `company_id` | string | Company identifier |
| `system_created_at` | time | System creation timestamp |
| `system_created_by` | string | System created by user |
| `system_modified_at` | time | System modification timestamp |
| `system_modified_by` | string | System modified by user |
| `_fivetran_synced` | time | Fivetran sync timestamp |
| `_fivetran_deleted` | boolean | Fivetran deletion flag |

#### Measures

| Measure | Type | Description |
|---------|------|-------------|
| `count` | count | Record count |

#### Joins

| Join | Relationship | SQL Condition |
|------|--------------|---------------|
| `company` | many_to_one | `${CUBE}."COMPANY_ID" = ${company}."ID"` |

---

### InventoryPostingGroup

**Cube Name**: `inventory_posting_group`  
**Source Table**: `BUSINESS_CENTRAL.INVENTORY_POSTING_GROUP`  
**Primary Key**: `code` (string)

#### Dimensions (10 total)

| Dimension | Type | Description |
|-----------|------|-------------|
| `code` | string | Primary key - Inventory posting group code |
| `system_id` | string | System identifier |
| `description` | string | Description |
| `company_id` | string | Company identifier |
| `system_created_at` | time | System creation timestamp |
| `system_created_by` | string | System created by user |
| `system_modified_at` | time | System modification timestamp |
| `system_modified_by` | string | System modified by user |
| `_fivetran_synced` | time | Fivetran sync timestamp |
| `_fivetran_deleted` | boolean | Fivetran deletion flag |

#### Measures

| Measure | Type | Description |
|---------|------|-------------|
| `count` | count | Record count |

#### Joins

| Join | Relationship | SQL Condition |
|------|--------------|---------------|
| `company` | many_to_one | `${CUBE}."COMPANY_ID" = ${company}."ID"` |

---

## Relationship Diagram

The following diagram illustrates the key relationships between the cube schemas:

```
                            ┌─────────────┐
                            │   Company   │
                            └──────┬──────┘
                                   │
                    ┌──────────────┼──────────────┐
                    │              │              │
            many-to-one    many-to-one    many-to-one
                    │              │              │
         ┌──────────▼───┐ ┌───────▼──────┐ ┌────▼─────┐
         │ BankAccount  │ │   Customer   │ │ Employee │
         └──────────────┘ └──────────────┘ └──────────┘
                                   │
                            many-to-one
                                   │
                         ┌─────────▼──────────┐
                         │ CompanyInformation │
                         └────────────────────┘
                         
         ┌───────────────┐     ┌────────────────┐
         │   GLAccount   │     │    GLEntry     │
         └───────┬───────┘     └────────┬───────┘
                 │                       │
          many-to-one             many-to-one
                 │                       │
                 └──────────┬────────────┘
                            │
                     ┌──────▼──────┐
                     │   Company   │
                     └─────────────┘
                     
         ┌─────────────────┐     ┌──────────────────┐
         │   Dimension     │     │ DimensionValue   │
         └────────┬────────┘     └────────┬─────────┘
                  │                        │
           many-to-one              many-to-one
                  │                        │
                  └───────────┬────────────┘
                              │
                       ┌──────▼──────┐
                       │   Company   │
                       └─────────────┘
                       
         ┌──────────────────┐     ┌───────────────────┐
         │ GenJournalBatch  │     │  GenJournalLine   │
         └────────┬─────────┘     └─────────┬─────────┘
                  │                          │
           many-to-one                many-to-one
                  │                          │
                  └────────────┬─────────────┘
                               │
                        ┌──────▼──────┐
                        │   Company   │
                        └─────────────┘
```

### Key Relationships Summary:

1. **Company** is the central entity that most other cubes relate to via a many-to-one relationship
2. **Customer** and **BankAccount** both have relationships with Company
3. **GLAccount** and **GLEntry** represent the general ledger structure and transactions
4. **Dimension**, **DimensionValue**, and **DimensionSetEntry** provide analytical dimensions
5. **GenJournalBatch** and **GenJournalLine** handle journal entries
6. **Employee** represents workforce data
7. **Currency** and **CurrencyExchangeRate** manage multi-currency support
8. **CountryRegion** provides geographical data
9. **Contact** manages business contacts

All cubes include:
- System tracking fields (`system_id`, `system_created_at`, `system_modified_at`, etc.)
- Fivetran synchronization fields (`_fivetran_synced`, `_fivetran_deleted`)
- A relationship to the Company entity via `company_id`

This schema structure supports comprehensive ERP functionality including:
- Financial management (GL, banking, currencies)
- Customer relationship management
- Human resources (employees)
- Multi-dimensional analysis
- Journal and posting management