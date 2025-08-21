# Environment Configuration Guide

## Overview
This Cube.js project is configured to use environment variables for flexibility and security. All database connections and schema references are dynamically configured through environment variables.

## Required Environment Variables

### Snowflake Connection
```bash
# Database connection type
CUBEJS_DB_TYPE=snowflake

# Snowflake account identifier
CUBEJS_DB_SNOWFLAKE_ACCOUNT=OJKTBSB-SW84634

# Snowflake warehouse
CUBEJS_DB_SNOWFLAKE_WAREHOUSE=CUBECLOUD_WAREHOUSE

# Database name
CUBEJS_DB_NAME=FIVETRAN_DATABASE

# Schema name
CUBEJS_DB_SNOWFLAKE_SCHEMA=BUSINESS_CENTRAL

# Authentication
CUBEJS_DB_USER=CUBECLOUD_USER
CUBEJS_DB_SNOWFLAKE_AUTHENTICATOR=SNOWFLAKE_JWT
CUBEJS_DB_SNOWFLAKE_PRIVATE_KEY_PATH=./private_key.pem
```

### API Configuration
```bash
# Security
CUBEJS_API_SECRET=your-secret-key-here

# Development settings
CUBEJS_DEV_MODE=true
CUBEJS_WEB_SOCKETS=true
CUBEJS_PLAYGROUND=true
```

### Pre-aggregations
```bash
# Schema for pre-aggregated tables
CUBEJS_PRE_AGGREGATIONS_SCHEMA=CUBE_PRE_AGG

# Refresh settings
CUBEJS_REFRESH_WORKER=true
CUBEJS_SCHEDULED_REFRESH_DEFAULT=true
```

### Cache Configuration
```bash
CUBEJS_CACHE_AND_QUEUE_DRIVER=cubestore
```

## Dynamic Table References

### JavaScript Models
JavaScript model files (like `customers.js`) use the `tablePrefix` helper:
```javascript
const { tablePrefix } = require('../tablePrefix');

cube(`customers`, {
  sql_table: `${tablePrefix()}.CUSTOMER`,
  // ...
});
```

### YAML Models
YAML model files use Jinja templating with `env_var()`:
```yaml
cubes:
  - name: items
    sql_table: "{{ env_var('CUBEJS_DB_NAME', 'FIVETRAN_DATABASE') }}.{{ env_var('CUBEJS_DB_SNOWFLAKE_SCHEMA', 'BUSINESS_CENTRAL') }}.ITEM"
```

## Security Context

The `cube.js` configuration file includes several security features:

1. **Context-based App ID**: Groups queries by tenant/context for caching
2. **Query Rewrite**: Enables dynamic query filtering based on security context
3. **Scheduled Refresh Contexts**: Allows pre-aggregations per tenant
4. **Query Push Down**: Enabled for Snowflake to improve performance

### Example: Multi-tenancy
To filter data by company, pass a security context in your API requests:
```javascript
// In your API request
{
  "query": {...},
  "securityContext": {
    "company_id": "COMPANY_001",
    "tenant": "acme_corp"
  }
}
```

## Changing Database or Schema

To point to a different database or schema:

1. Update the `.env` file:
```bash
CUBEJS_DB_NAME=NEW_DATABASE
CUBEJS_DB_SNOWFLAKE_SCHEMA=NEW_SCHEMA
```

2. Restart the Cube.js server

All table references will automatically use the new database and schema.

## Best Practices

1. **Never hardcode** database or schema names in model files
2. **Use environment variables** for all configuration
3. **Keep sensitive data** (passwords, keys) in environment variables
4. **Use security context** for multi-tenant applications
5. **Enable query push down** for better Snowflake performance

## Troubleshooting

### Table Not Found Errors
- Verify `CUBEJS_DB_NAME` and `CUBEJS_DB_SNOWFLAKE_SCHEMA` are set correctly
- Check that the Snowflake user has proper permissions:
```sql
GRANT USAGE ON DATABASE YOUR_DATABASE TO ROLE YOUR_ROLE;
GRANT USAGE ON ALL SCHEMAS IN DATABASE YOUR_DATABASE TO ROLE YOUR_ROLE;
GRANT SELECT ON ALL TABLES IN DATABASE YOUR_DATABASE TO ROLE YOUR_ROLE;
```

### Authentication Issues
- Ensure the private key file exists at the specified path
- Verify the private key matches the public key configured in Snowflake
- Check that `CUBEJS_DB_USER` has the correct role assigned

### Performance Issues
- Ensure `queryPushDown: true` is set in `driverFactory`
- Consider using pre-aggregations for frequently accessed data
- Monitor the Snowflake warehouse size and concurrency settings