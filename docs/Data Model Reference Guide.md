# Cube.dev Data Model Reference Guide

This guide provides comprehensive reference for creating Cube data model components. Use this when working with Cube.dev data models in Claude Code.

## Table of Contents
- [File Structure](#file-structure)
- [Cubes](#cubes)
- [Measures](#measures)
- [Dimensions](#dimensions)
- [Joins](#joins)
- [Views](#views)
- [Segments](#segments)
- [Pre-Aggregations](#pre-aggregations)
- [References and Syntax](#references-and-syntax)

## File Structure

```
model/
├── cubes/
│   ├── orders.yml
│   ├── products.yml
│   └── users.yml
└── views/
    └── revenue_view.yml
```

- Place each cube in a separate file under `model/cubes/`
- Place views under `model/views/`
- Use `.yml` extension for YAML files or `.js` for JavaScript files
- Views typically have `_view` suffix

## Cubes

Cubes represent business entities and are conceptually similar to database views. They contain measures, dimensions, segments, joins, and pre-aggregations.

### Basic Cube Structure

```yaml
cubes:
  - name: orders  # Must be unique across all cubes and views
    sql_table: SCHEMA.TABLE_NAME  # Simple table reference
    # OR use sql for complex queries:
    sql: >
      SELECT * FROM orders
      WHERE status != 'cancelled'
    
    sql_alias: ord  # Optional: Use when auto-generated alias is too long
    
    title: Customer Orders  # Optional: Display name
    description: All customer orders including status and amounts
    public: true  # Controls API visibility (default: true)
    
    joins:
      # ... join definitions
    
    measures:
      # ... measure definitions
    
    dimensions:
      # ... dimension definitions
    
    segments:
      # ... segment definitions
    
    pre_aggregations:
      # ... pre-aggregation definitions
```

### Extending Cubes

```yaml
cubes:
  - name: base_events
    sql_table: events
    
    measures:
      - name: count
        type: count
    
    dimensions:
      - name: id
        sql: "{CUBE}.id"
        type: number
        primary_key: true
  
  - name: product_purchases
    extends: base_events  # Inherits all members from base_events
    sql_table: product_purchases
    
    dimensions:
      - name: product_name
        sql: product_name
        type: string
```

## Measures

Measures are quantitative data points (metrics) that are aggregated.

### Measure Types

```yaml
measures:
  # Count measure
  - name: count
    type: count
    sql: id  # Optional: specify column to count
    
  # Count distinct
  - name: unique_users
    type: count_distinct
    sql: user_id
    
  # Count distinct approximate (for large datasets)
  - name: approx_unique_users
    type: count_distinct_approx
    sql: user_id
  
  # Sum
  - name: total_revenue
    type: sum
    sql: amount
    format: currency
  
  # Average
  - name: avg_order_value
    type: avg
    sql: order_amount
    format: currency
  
  # Min/Max
  - name: min_price
    type: min
    sql: price
  
  - name: max_price
    type: max
    sql: price
  
  # Number (for calculated measures)
  - name: conversion_rate
    type: number
    sql: "100.0 * {completed_count} / NULLIF({count}, 0)"
    format: percent
```

### Filtered Measures

```yaml
measures:
  - name: completed_count
    type: count
    filters:
      - sql: "{CUBE}.status = 'completed'"
      - sql: "{CUBE}.amount > 100"  # Multiple filters are AND'ed
```

### Calculated Measures

```yaml
measures:
  # Reference other measures
  - name: completion_rate
    type: number
    sql: "{completed_count} / NULLIF({total_count}, 0) * 100"
    format: percent
  
  # Reference measures from joined cubes
  - name: revenue_per_user
    type: number
    sql: "{total_revenue} / NULLIF({users.count}, 0)"
    format: currency
```

### Measure Parameters

```yaml
measures:
  - name: revenue
    type: sum
    sql: amount
    title: Total Revenue  # Display name
    description: Sum of all order amounts
    format: currency  # or: percent, number
    drill_members:  # Fields to show when drilling down
      - id
      - created_at
      - user_id
      - amount
      - users.email
    rolling_window:  # Rolling calculations
      trailing: 7 days  # or: 1 month, 3 months, etc.
      leading: 0 days
      offset: start
    public: true  # API visibility
```

## Dimensions

Dimensions are categorical attributes used for grouping and filtering.

### Dimension Types

```yaml
dimensions:
  # String dimension
  - name: status
    sql: status  # or: "{CUBE}.status" for explicit reference
    type: string
  
  # Number dimension
  - name: age
    sql: age
    type: number
  
  # Boolean dimension
  - name: is_active
    sql: is_active
    type: boolean
  
  # Time dimension
  - name: created_at
    sql: created_at
    type: time
  
  # Primary key (required for joins and de-duplication)
  - name: id
    sql: id
    type: number
    primary_key: true
  
  # Composite primary key
  - name: composite_key_a
    sql: column_a
    type: number
    primary_key: true
  
  - name: composite_key_b
    sql: column_b
    type: number
    primary_key: true
```

### Case Dimensions

```yaml
dimensions:
  - name: size_category
    type: string
    case:
      when:
        - sql: "{CUBE}.size < 10"
          label: Small
        - sql: "{CUBE}.size BETWEEN 10 AND 50"
          label: Medium
      else:
        label: Large
```

### Proxy Dimensions

```yaml
dimensions:
  # Reference dimension from joined cube
  - name: user_name
    sql: "{users.name}"
    type: string
  
  # Reference with specific granularity
  - name: order_month
    sql: "{created_at.month}"
    type: time
```

### Subquery Dimensions

```yaml
dimensions:
  # Bring measure from another cube as dimension
  - name: user_order_count
    sql: "{orders.count}"
    type: number
    sub_query: true
```

### Time Dimension Granularities

Default granularities available for any time dimension:
- `year`, `quarter`, `month`, `week` (Monday start)
- `day`, `hour`, `minute`, `second`

```yaml
dimensions:
  - name: created_at
    sql: created_at
    type: time
    
    # Custom granularities (optional)
    granularities:
      - name: week_starting_sunday
        interval: 1 week
        offset: -1 day
      
      - name: fiscal_year
        interval: 1 year
        origin: '2024-04-01'  # Fiscal year starts April 1
```

## Joins

Joins define relationships between cubes.

### Join Types

```yaml
joins:
  # Many-to-one (most common)
  - name: users  # Must match target cube name
    sql: "{CUBE}.user_id = {users.id}"
    relationship: many_to_one
  
  # One-to-many
  - name: orders
    sql: "{CUBE}.id = {orders.user_id}"
    relationship: one_to_many
  
  # One-to-one
  - name: profile
    sql: "{CUBE}.id = {profile.user_id}"
    relationship: one_to_one
```

### Important Join Rules

1. **Join direction matters**: Define joins from the "many" side to the "one" side
2. **Transitive joins**: Cube automatically resolves join paths (if A→B and B→C, then A→C works)
3. **Avoid bidirectional joins**: Don't define joins in both directions unless necessary
4. **Use CUBE reference**: Always use `{CUBE}` to reference current cube

## Views

Views create a facade over cubes, combining measures and dimensions from multiple cubes into a single dataset.

### Basic View Structure

```yaml
views:
  - name: orders_view
    title: Orders Dashboard
    description: Comprehensive order analytics view
    public: true
    
    cubes:
      # Include from root cube
      - join_path: orders
        includes:
          - status
          - created_at
          - count
          - total_amount
        excludes:  # Optional: exclude specific members
          - internal_id
      
      # Include from joined cube with prefix
      - join_path: orders.users
        prefix: true  # Prefixes with "users_"
        includes:
          - name
          - email
          - city
      
      # Include all members
      - join_path: orders.products
        includes: "*"  # Include all members
        excludes:
          - internal_code
      
      # Custom aliases
      - join_path: orders
        includes:
          - name: status
            alias: order_status
            title: Order Status
            description: Current order status
```

### Advanced View Features

```yaml
views:
  - name: analytics_view
    extends: base_view  # Inherit from another view
    
    cubes:
      - join_path: orders
        includes:
          - count
          - total_amount
      
      # Specify join path for ambiguous joins
      - join_path: orders.users.companies
        includes:
          - company_name
    
    # Organize members into folders (for BI tools)
    folders:
      - name: Order Metrics
        includes:
          - orders_count
          - orders_total_amount
      
      - name: Customer Details
        includes:
          - name: Personal Info
            includes:
              - users_name
              - users_email
          - name: Location
            includes:
              - users_city
              - users_country
```

## Segments

Segments are predefined filters that can be reused across queries.

```yaml
segments:
  - name: completed_orders
    sql: "{CUBE}.status = 'completed'"
    title: Completed Orders
    description: Only orders with completed status
    public: true
  
  - name: high_value_orders
    sql: "{CUBE}.amount > 1000"
  
  - name: recent_orders
    sql: "{CUBE}.created_at >= DATE_SUB(CURRENT_DATE(), INTERVAL 30 DAY)"
  
  # Complex segment with multiple conditions
  - name: premium_customers_ca
    sql: >
      {CUBE}.customer_tier = 'premium' AND
      ({CUBE}.state = 'CA' OR {CUBE}.country = 'USA')
```

## Pre-Aggregations

Pre-aggregations accelerate queries by storing pre-computed results.

### Basic Rollup

```yaml
pre_aggregations:
  - name: orders_daily
    measures:
      - count
      - total_amount
    dimensions:
      - status
      - customer_id
    time_dimension: created_at
    granularity: day  # day, week, month, year, hour
```

### Advanced Pre-Aggregations

```yaml
pre_aggregations:
  # Partitioned pre-aggregation
  - name: orders_by_month
    measures:
      - CUBE.count
      - CUBE.total_amount
    dimensions:
      - CUBE.status
    time_dimension: CUBE.created_at
    granularity: day
    partition_granularity: month  # Partition by month
    
    # Build only recent data
    build_range_start:
      sql: DATE_SUB(CURRENT_DATE(), INTERVAL 1 YEAR)
    build_range_end:
      sql: CURRENT_DATE()
    
    # Refresh settings
    refresh_key:
      every: 1 hour  # or: 30 minutes, 1 day, etc.
    
    # Indexes for performance
    indexes:
      - name: status_date_idx
        columns:
          - status
          - CUBE__created_at_day  # Time dimension column format
  
  # Original SQL pre-aggregation
  - name: monthly_summary
    type: original_sql
    # Stores the cube's SQL directly
  
  # Rollup with joins
  - name: orders_with_users
    measures:
      - orders.count
      - orders.total_amount
      - users.count
    dimensions:
      - orders.status
      - users.city
    time_dimension: orders.created_at
    granularity: day
    
    # Explicit join path
    join_paths:
      - orders
      - orders.users
```

### Lambda Pre-Aggregations

```yaml
pre_aggregations:
  - name: real_time_orders
    type: rollup_lambda
    union_with_source_data: true  # Combine with real-time data
    rollups:
      - orders.daily_rollup
```

## References and Syntax

### Reference Types

```yaml
# Column reference (bare column name)
sql: column_name

# Explicit cube column reference
sql: "{CUBE}.column_name"

# Current cube member reference
sql: "{measure_name}"
sql: "{dimension_name}"

# Other cube column reference
sql: "{other_cube}.column_name"

# Other cube member reference
sql: "{other_cube.measure_name}"

# Join path reference (in views/pre-aggregations)
sql: "{cube_a.cube_b.measure_name}"

# SQL function reference
sql: "{other_cube.sql()}"  # Reuse SQL from another cube

# Context variable (current cube)
sql: "{CUBE}.status"  # Same as cube_name.status but maintainable

# Time dimension with granularity
sql: "{created_at.month}"
```

### FILTER_PARAMS Usage

```yaml
cubes:
  - name: events
    sql: >
      SELECT * FROM events
      WHERE {FILTER_PARAMS.events.created_at.filter('time')}
      AND {FILTER_PARAMS.events.status.filter('status')}
```

### SQL Expressions

```yaml
# String concatenation
sql: "CONCAT({CUBE}.first_name, ' ', {CUBE}.last_name)"

# Conditional logic
sql: "CASE WHEN {CUBE}.amount > 1000 THEN 'high' ELSE 'low' END"

# Mathematical operations
sql: "({revenue} - {costs}) / NULLIF({revenue}, 0) * 100"

# Date operations
sql: "DATE_DIFF('day', {CUBE}.created_at, CURRENT_DATE())"

# Aggregations in dimensions (requires sub_query: true)
sql: "AVG({other_cube.amount})"
```

## Best Practices

1. **Always use `{CUBE}` reference** instead of hard-coding cube names
2. **Define primary keys** for proper joins and de-duplication
3. **Use meaningful names** following naming conventions (snake_case)
4. **Add descriptions** to help users understand metrics
5. **Organize views** to represent business entities
6. **Use segments** for commonly used filters
7. **Start with simple pre-aggregations** and optimize based on usage
8. **Prefix joined members** in views to avoid naming conflicts
9. **Use calculated measures** for complex business logic
10. **Leverage extends** to create reusable base cubes

## Common Patterns

### Percentage Calculation
```yaml
measures:
  - name: conversion_rate
    type: number
    sql: "100.0 * {converted_count} / NULLIF({total_count}, 0)"
    format: percent
```

### Year-over-Year Comparison
```yaml
measures:
  - name: revenue_yoy_change
    type: number
    sql: >
      ({current_year_revenue} - {last_year_revenue}) 
      / NULLIF({last_year_revenue}, 0) * 100
    format: percent
```

### Running Total
```yaml
measures:
  - name: running_total
    type: sum
    sql: amount
    rolling_window:
      trailing: unbounded
      leading: 0 days
      offset: start
```

### Cohort Analysis
```yaml
dimensions:
  - name: cohort_month
    sql: DATE_TRUNC('month', {CUBE}.created_at)
    type: time
```

This reference guide covers the essential components and patterns for building Cube data models. Refer to specific sections as needed when creating or modifying Cube components.