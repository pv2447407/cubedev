# Business Central Cube.js Configuration

## Overview
Complete Cube.js configuration for Business Central ERP data analysis with comprehensive measures, dimensions, segments, relationships, and pre-aggregations.

## Configuration Files

### 1. Financial Measures
**File:** `gl_entry_measures.js`
- GL Entry cube with 11 financial measures
- Includes total amounts, debits, credits, VAT, net amounts
- Transaction counts and running balances

**File:** `gl_account_measures.js`
- GL Account cube with 15 measures
- Account balances and categorization counts
- Income statement vs balance sheet analysis

### 2. Customer Analysis
**File:** `customer_measures.js`
- Customer cube with 17 measures
- Balance analysis, customer counts by various criteria
- Communication and payment analysis

### 3. Time Dimensions
**File:** `time_dimensions.js`
- Enhanced time dimensions for GL Entry, Employee, Currency Exchange Rate, and General Journal Line
- Fiscal period calculations
- Age and tenure calculations for employees
- Time-based analysis dimensions

### 4. Business Segments
**File:** `business_segments.js`
- Customer segments (16 segments)
- GL Account segments (10 segments)
- Employee segments (7 segments)
- GL Entry segments (13 segments)
- Dynamic dimension-based segments

### 5. Relationships

**Primary Relationships**
**File:** `relationships_primary.js`
- Core relationships between financial cubes
- Company hub architecture
- GL Entry to GL Account, Customer, Employee relationships
- Dimension relationships

**Advanced Relationships**
**File:** `relationships_advanced.js`
- General Journal Line relationships
- Employee hierarchy (self-join)
- Bank account financial relationships
- Cross-module integration cube

**Optimized Relationships**
**File:** `relationships_optimized.js`
- Performance-optimized join logic
- Eliminated circular dependencies
- Proper cardinality definitions
- Index optimization recommendations

### 6. Pre-aggregations

**Financial Pre-aggregations**
**File:** `preaggregations_financial.js`
- 8 GL Entry pre-aggregations (daily, monthly, quarterly, YTD, real-time)
- 3 GL Account pre-aggregations
- 2 General Journal Line pre-aggregations

**Customer Pre-aggregations**
**File:** `preaggregations_customer.js`
- 10 Customer pre-aggregations
- 3 Employee pre-aggregations
- 2 Contact pre-aggregations
- 2 Bank Account pre-aggregations

**Dimensional Pre-aggregations**
**File:** `preaggregations_dimensional.js`
- Dimension master and value hierarchies
- Dimension set combinations
- GL Entry dimensional analysis (5 pre-aggregations)
- Cross-dimensional matrix and OLAP cube

**Refresh Configuration**
**File:** `preaggregation_refresh_config.js`
- 8 refresh contexts (real-time to daily batch)
- Performance optimization recommendations
- Monitoring and alerting configuration
- Resource allocation guidelines

## Key Features

### Measures
- **50+ measures** across all cubes
- Financial totals, averages, counts
- Conditional measures and calculations
- Currency formatting and proper data types

### Dimensions
- **200+ dimensions** properly typed
- Time-based hierarchies
- Calculated dimensions
- Business-specific categorizations

### Segments
- **60+ business segments**
- Customer segmentation
- Financial categorization
- Employee demographics
- Geographic and dimensional segments

### Relationships
- **40+ join definitions**
- Optimized for performance
- Proper cardinality management
- No circular dependencies

### Pre-aggregations
- **35+ pre-aggregations**
- Real-time to batch refresh patterns
- Incremental updates
- Partitioning strategies
- Index optimization

## Performance Optimizations

1. **Index Strategy**
   - Primary indexes on company_id + key dimensions
   - Secondary indexes on frequently filtered columns
   - Composite indexes for complex queries

2. **Refresh Patterns**
   - Real-time: 5-minute refresh for operational data
   - Near real-time: 30-minute for high-value transactions
   - Standard: 2-4 hour refresh for reporting
   - Batch: Daily for historical analysis

3. **Storage Optimization**
   - Partitioning by time periods
   - External storage for large historical data
   - Compression for archived data

4. **Query Performance**
   - Pre-aggregated common query patterns
   - Optimized join paths
   - Eliminated N+1 query problems

## Usage Guidelines

### For Developers
1. Import required cube files in your schema
2. Configure data source connection
3. Adjust refresh schedules based on your needs
4. Monitor pre-aggregation performance

### For Analysts
1. Use segments for quick filtering
2. Leverage pre-aggregations for fast queries
3. Combine measures for complex KPIs
4. Utilize time dimensions for trend analysis

### For Administrators
1. Monitor refresh job success rates
2. Track storage usage
3. Optimize based on query patterns
4. Maintain index health

## Maintenance

### Regular Tasks
- Monitor pre-aggregation refresh times
- Check storage growth
- Review query performance
- Update segments based on business changes

### Optimization Opportunities
- Analyze slow queries for new pre-aggregations
- Review unused pre-aggregations for removal
- Adjust refresh frequencies based on usage
- Update indexes based on query patterns

## Support

For issues or questions:
1. Check pre-aggregation logs
2. Review query performance metrics
3. Validate data source connectivity
4. Ensure proper permissions

## Version
- Created: 2024
- Platform: Cube.js
- Data Source: Business Central (Snowflake)
- Schema Version: 1.0