# Core Financial Data Structure Setup

## Overview
The foundational financial data structure has been established for G/L Accounts, G/L Entries, and G/L Budget Entries with comprehensive joins and segments to support all financial views.

## Cubes Created

### 1. G/L Budget Entry (`g_l_budget_entry`)
**File:** `/model/cubes/GLBudgetEntry.js`

**Key Features:**
- Complete budget entry structure with all dimensions
- Measures for budget analysis (total amount, averages, min/max)
- Segments for different budget types (current, forecast, approved)
- Joins to Company, G/L Account, and Dimension Set Entry

### 2. Financial Core Structure (`financial_core_structure.js`)
**File:** `/model/cubes/financial_core_structure.js`

**Enhanced Cubes:**

#### G/L Account Enhanced
- Complete account structure with category-based segments
- Segments for:
  - Account types (posting, heading, total)
  - Account categories (assets, liabilities, equity, income, expenses)
  - Balance sheet vs income statement accounts
  - Active/blocked accounts
  - Tax liable accounts
- Joins to entries, budget entries, and dimensions

#### G/L Entry Enhanced
- Transaction-level detail with comprehensive segments
- Segments for:
  - Document types (invoices, payments, credit memos)
  - Source types (customer, vendor, employee, bank)
  - Transaction types (debit/credit)
  - Status (reversed, active, system-created)
  - Tax and VAT entries
- Full dimensional support

#### G/L Budget Entry Enhanced
- Budget tracking with version management
- Segments for:
  - Budget names (current year, prior year, working, approved, forecast)
  - Dimensional analysis
- Time-based budget comparisons

#### Financial Time Analysis
- Budget vs actual comparison cube
- Measures for:
  - Total actual amounts
  - Total budget amounts
  - Budget variance (amount and percentage)
  - Budget utilization percentage
- Fiscal year/period dimensions
- Segments for over/under/on budget analysis

### 3. Chart of Accounts Hierarchy (`chart_of_accounts_hierarchy.js`)
**File:** `/model/cubes/chart_of_accounts_hierarchy.js`

**Features:**
- Recursive CTE for account hierarchy
- Parent-child relationships
- Account totaling ranges
- Hierarchy levels and paths
- Financial statement mapping
- Segments by hierarchy level and category

### 4. Fiscal Period Management (`fiscal_periods`)
**File:** `/model/cubes/fiscal_period_management.js`

**Features:**
- Complete fiscal calendar with configurable year start (April)
- Calendar and fiscal dimensions
- Period comparisons (YTD, QTD, MTD)
- Working days calculations
- Current period flags
- Prior year comparisons

## Key Relationships Established

### Primary Joins
1. **G/L Account → G/L Entry**: One-to-many on Account Number
2. **G/L Account → G/L Budget Entry**: One-to-many on Account Number
3. **G/L Entry → Dimension Set Entry**: One-to-many on Dimension Set ID
4. **All Cubes → Company**: Many-to-one on Company ID

### Time-Based Joins
- G/L Entries joined to Budget Entries by Account and Month
- Fiscal periods joined to entries on posting dates
- Budget dates aligned with fiscal calendar

## Segments Implementation

### Account Categories
- Assets, Liabilities, Equity (Balance Sheet)
- Income, COGS, Expenses (Income Statement)
- Proper handling of account hierarchies

### Posting Groups
- General Business Posting Groups
- General Product Posting Groups
- VAT Posting Groups
- Dimensional posting analysis

### Fiscal Years
- Fiscal year starting April 1st
- Proper fiscal quarter and period calculations
- Year-over-year comparisons
- Period-to-date calculations

## Configuration

### Environment Variables Used
- `BC_FISCAL_YEAR_START_MONTH`: Set to 4 (April)
- All fiscal calculations use April 1st as fiscal year start

### Pre-aggregations
- Commented out for initial setup
- Can be enabled for performance optimization

## Testing Recommendations

1. **Verify Account Hierarchy**
   - Test parent-child relationships
   - Validate totaling ranges
   - Check indentation levels

2. **Budget vs Actual Analysis**
   - Compare current period actuals to budget
   - Test variance calculations
   - Validate fiscal period alignments

3. **Dimensional Analysis**
   - Test joins to dimension tables
   - Validate global dimension filtering
   - Check business unit segmentation

4. **Time-Based Analysis**
   - Verify fiscal year boundaries
   - Test YTD, QTD, MTD calculations
   - Validate prior year comparisons

## Next Steps

1. **Create Views**: Build specific financial views using these base cubes
2. **Add Pre-aggregations**: Enable for frequently used queries
3. **Test with Real Data**: Validate calculations with actual G/L data
4. **Performance Tuning**: Add indexes and optimize queries as needed
5. **Security**: Implement row-level security for multi-company support

## Notes

- All amount fields are cast to DECIMAL(19,4) for precision
- Fiscal year is hardcoded to start in April (month 4)
- Supports multi-company through company_id joins
- Dimensional analysis ready through dimension set entries
- Prepared for chart of accounts hierarchy reporting