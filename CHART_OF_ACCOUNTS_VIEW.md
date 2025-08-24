# Chart of Accounts View Implementation

## Overview
Comprehensive Chart of Accounts view implementation with balance calculations, posting integrity analysis, and hierarchical account structures for Business Central data.

## Components Created

### 1. Chart of Accounts View (`chart_of_accounts_view`)
**File:** `/model/views/ChartOfAccountsView.js`

**Key Features:**
- **Balance Calculations**
  - Proper sign handling based on account category (debit/credit normal balances)
  - Current balance with normalized signs
  - Separate debit and credit totals
  - Net change calculations (current period, YTD)
  - Prior year comparisons

- **Measures Implemented**
  - `balance`: Current balance with proper sign based on account category
  - `debit_balance`: Total debits
  - `credit_balance`: Total credits
  - `net_change`: Net change in current period
  - `net_change_ytd`: Year-to-date net change
  - `balance_at_date_last_year`: Balance same date last year
  - `transaction_count`: Number of transactions
  - `average_transaction_amount`: Average transaction size
  - `posting_integrity_score`: 0-100 score for posting readiness
  - `budget_amount`: Budget allocated to account
  - `budget_variance`: Actual vs budget variance

- **Segments for Analysis**
  - **Account Categories**: Balance sheet vs income statement accounts
  - **Account Types**: Posting, heading, total accounts
  - **Posting Groups**: General and VAT posting groups
  - **Account Status**: Active, blocked, indirect posting
  - **Balance Status**: Debit balance, credit balance, zero balance
  - **Activity**: Active in last 30 days, inactive for 90+ days
  - **Fiscal Periods**: Current and prior fiscal year

- **Pre-aggregations**
  - Account balance by fiscal period (hourly refresh)
  - Daily account balances (30-minute refresh)
  - Category summary (hourly refresh)
  - Posting group balances (2-hour refresh)

### 2. Posting Integrity Analysis (`posting_integrity_analysis`)
**File:** `/model/cubes/posting_integrity_analysis.js`

**Purpose:** Validates account balances, posting rules, and identifies potential issues

**Key Measures:**
- **Balance Validation**
  - `balance_check`: Trial balance verification (should be zero)
  - `accounts_with_abnormal_balance`: Accounts with opposite normal balance
  - `normalized_balance`: Balance adjusted for account type

- **Posting Integrity**
  - `blocked_accounts_with_activity`: Blocked accounts with recent transactions
  - `indirect_posting_violations`: Accounts violating indirect posting rules
  - `posting_integrity_status`: Overall status indicator

- **Activity Analysis**
  - `inactive_accounts`: Accounts with no activity for 90+ days
  - `high_activity_accounts`: Accounts with 1000+ transactions
  - `reversal_rate`: Percentage of reversed entries
  - `activity_classification`: Categorizes account activity level

**Dimensions:**
- Account details (number, name, category, type)
- Normal balance type (debit/credit)
- Posting settings (direct posting, blocked status)
- Activity metrics (transaction count, posting days)
- First/last posting dates
- User and document type diversity

### 3. Chart of Accounts Hierarchy View (`chart_of_accounts_hierarchy_view`)
**File:** `/model/views/ChartOfAccountsHierarchyView.js`

**Purpose:** Hierarchical account structure with parent-child rollups

**Key Features:**
- **Hierarchical Balance Calculations**
  - `hierarchy_balance`: Balance including totaling ranges
  - `parent_level_balance`: Parent account with all children
  - `own_balance`: Account balance excluding children
  - `child_account_count`: Number of subordinate accounts

- **Hierarchy Navigation**
  - Account hierarchy levels (0-n)
  - Parent-child relationships
  - Top parent identification
  - Hierarchy path tracking
  - Indentation for display

- **Totaling Account Support**
  - Handles account ranges (e.g., "1000..1999")
  - Multiple account selection (pipe-separated)
  - Begin-Total and End-Total account types
  - Proper rollup calculations

## Balance Calculation Logic

### Sign Convention
The implementation follows standard accounting sign conventions:

**Balance Sheet Accounts (Assets, Liabilities, Equity):**
```sql
Balance = Debits - Credits
```

**Income Statement Accounts (Income, Expenses, COGS):**
```sql
Balance = Credits - Debits
```

### Abnormal Balance Detection
Identifies accounts with balances opposite to their normal balance:
- Assets with credit balance (negative)
- Liabilities with debit balance (positive)
- Income with debit balance (positive)
- Expenses with credit balance (negative)

## Posting Group Analysis

The view supports analysis by posting groups:
- **General Business Posting Groups**: Customer/vendor categorization
- **General Product Posting Groups**: Item/service categorization
- **VAT Business Posting Groups**: Tax categorization by entity
- **VAT Product Posting Groups**: Tax categorization by item

## Fiscal Period Support

All views support fiscal year starting April 1st:
- Fiscal year calculations
- Fiscal period (P01-P12) tracking
- Year-over-year comparisons
- Period-to-date calculations

## Performance Optimizations

### Pre-aggregations Strategy
1. **Account Balance by Period**: Monthly granularity, yearly partitions
2. **Daily Balances**: For trend analysis
3. **Category Summaries**: For high-level reporting
4. **Posting Group Analysis**: For operational insights

### Indexing
- Account number + fiscal period
- Account category
- Posting groups
- Activity dates

## Usage Examples

### 1. Get Current Account Balances
```javascript
{
  measures: ['chart_of_accounts_view.balance'],
  dimensions: [
    'chart_of_accounts_view.account_no',
    'chart_of_accounts_view.account_name',
    'chart_of_accounts_view.account_category'
  ],
  filters: [{
    member: 'chart_of_accounts_view.posting_accounts_only',
    operator: 'equals',
    values: ['true']
  }]
}
```

### 2. Posting Integrity Check
```javascript
{
  measures: [
    'posting_integrity_analysis.balance_check',
    'posting_integrity_analysis.accounts_with_abnormal_balance',
    'posting_integrity_analysis.blocked_accounts_with_activity'
  ],
  dimensions: ['posting_integrity_analysis.account_category']
}
```

### 3. Hierarchical Account Rollup
```javascript
{
  measures: [
    'chart_of_accounts_hierarchy_view.hierarchy_balance',
    'chart_of_accounts_hierarchy_view.child_account_count'
  ],
  dimensions: [
    'chart_of_accounts_hierarchy_view.account_display',
    'chart_of_accounts_hierarchy_view.hierarchy_level'
  ],
  order: {
    'chart_of_accounts_hierarchy_view.account_no': 'asc'
  }
}
```

## Data Quality Checks

The implementation includes several data quality validations:

1. **Trial Balance**: Total debits should equal total credits
2. **Abnormal Balances**: Identifies accounts with unexpected signs
3. **Posting Violations**: Blocked accounts with activity
4. **Indirect Posting**: Validates posting rules
5. **Inactive Accounts**: Identifies dormant accounts
6. **Reversal Patterns**: High reversal rates indicate issues

## Integration Points

The Chart of Accounts view integrates with:
- **G/L Entries**: Transaction details
- **G/L Budget Entries**: Budget comparisons
- **Dimension Set Entries**: Dimensional analysis
- **Company**: Multi-company support
- **Fiscal Periods**: Time-based analysis

## Best Practices

1. **Regular Monitoring**
   - Run posting integrity checks daily
   - Review abnormal balances weekly
   - Monitor inactive accounts monthly

2. **Performance**
   - Use pre-aggregations for dashboards
   - Filter by fiscal period for large datasets
   - Leverage segments for common filters

3. **Hierarchy Management**
   - Maintain proper indentation levels
   - Update totaling ranges when adding accounts
   - Verify parent-child relationships

## Troubleshooting

### Common Issues

1. **Unbalanced Trial Balance**
   - Check for incomplete journal entries
   - Verify all entries have matching debits/credits
   - Look for system-generated entries

2. **Abnormal Balances**
   - Review account category assignments
   - Check for posting errors
   - Verify journal entry signs

3. **Performance Issues**
   - Enable pre-aggregations
   - Add appropriate time filters
   - Use category/type segments

## Next Steps

1. **Dashboard Creation**: Build executive dashboards using these views
2. **Alerting**: Set up alerts for posting violations
3. **Automation**: Schedule integrity checks
4. **Reporting**: Create standard financial reports
5. **Audit Trail**: Implement change tracking