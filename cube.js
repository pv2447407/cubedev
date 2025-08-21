module.exports = {
  // Snowflake connection configuration
  contextToAppId: ({ securityContext }) => 
    `CUBE_APP_${securityContext.company || 'DEFAULT'}`,
  
  // Pre-aggregations configuration
  preAggregationsSchema: ({ securityContext }) => 
    `CUBE_PRE_AGG_${securityContext.company || 'DEFAULT'}`,
  
  // Query rewrite for multi-tenancy
  queryRewrite: (query, { securityContext }) => {
    if (securityContext.company) {
      // Add company filter to all queries
      const companyFilter = {
        member: 'company_id',
        operator: 'equals',
        values: [securityContext.company]
      };
      
      // Add filter to each cube in the query
      query.filters = query.filters || [];
      query.filters.push(companyFilter);
    }
    return query;
  },
  
  // Scheduled refresh for pre-aggregations
  scheduledRefreshContexts: () => [
    {
      securityContext: {
        company: 'CRONUS USA, Inc.',
        scheduledRefresh: true
      }
    }
  ],
  
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
      }
    }
  },
  
  // Logger configuration
  logger: (msg, params) => {
    console.log(`${new Date().toISOString()} : ${msg}`, params);
  },
  
  // Schema file path
  schemaPath: 'model',
  
  // Development mode settings
  devServer: process.env.CUBEJS_DEV_MODE === 'true'
};