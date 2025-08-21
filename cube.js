module.exports = {
  // Schema file path
  schemaPath: 'model',
  
  // Development mode settings
  devServer: process.env.CUBEJS_DEV_MODE === 'true',
  
  // Pre-aggregations configuration
  preAggregationsSchema: process.env.CUBEJS_PRE_AGGREGATIONS_SCHEMA || 'CUBE_PRE_AGG',
  
  // Security context function - can be used to pass user-specific context
  contextToAppId: ({ securityContext } = {}) => {
    // You can use this to implement multi-tenancy or user-specific data filtering
    // Handle cases where securityContext might be undefined
    const tenant = securityContext?.tenant || 'default';
    return `CUBEJS_APP_${tenant}`;
  },
  
  // Query rewrite for security and multi-tenancy
  queryRewrite: (query, { securityContext } = {}) => {
    // Add any query-level security filters here
    // For example, filter by company_id if in multi-tenant setup
    if (securityContext?.company_id) {
      // Add company_id filter to all queries
      if (!query.filters) {
        query.filters = [];
      }
      query.filters.push({
        member: 'customers.company_id',
        operator: 'equals',
        values: [securityContext.company_id]
      });
    }
    return query;
  },
  
  // Scheduled refresh contexts - useful for pre-aggregations per tenant
  scheduledRefreshContexts: async () => {
    // Return an array of contexts for scheduled refreshes
    // This is useful for multi-tenant setups
    return [
      { securityContext: { tenant: 'default' } }
    ];
  },
  
  // Caching configuration
  orchestratorOptions: {
    queryCacheOptions: {
      refreshKeyRenewalThreshold: 120, // 2 minutes
      backgroundRenew: true,
      queueOptions: {
        concurrency: 4
      }
    },
    preAggregationsOptions: {
      queueOptions: {
        concurrency: 2
      },
      // Enable external pre-aggregations for better performance
      externalRefresh: process.env.CUBEJS_SCHEDULED_REFRESH_DEFAULT === 'true'
    }
  },
  
  // Database-specific options for Snowflake
  driverFactory: () => {
    // Enable query push down for better performance
    return {
      type: 'snowflake',
      // Push down limit to database for better performance
      queryPushDown: true
    };
  },
  
  // Logger configuration
  logger: (msg, params) => {
    console.log(`${new Date().toISOString()} : ${msg}`, params);
  }
};