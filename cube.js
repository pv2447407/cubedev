module.exports = {
  // Schema file path
  schemaPath: 'model',
  
  // Development mode settings
  devServer: process.env.CUBEJS_DEV_MODE === 'true',
  
  // Pre-aggregations configuration
  preAggregationsSchema: process.env.CUBEJS_PRE_AGGREGATIONS_SCHEMA || 'CUBE_PRE_AGG',
  
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
  }
};