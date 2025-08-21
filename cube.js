const crypto = require('crypto');
const fs = require('fs');

module.exports = {
  contextToAppId: ({ securityContext }) => {
    return `CUBEJS_APP_${securityContext.company || 'DEFAULT'}`;
  },
  
  // Snowflake connection with key pair authentication
  driverFactory: ({ dataSource }) => {
    const SnowflakeDriver = require('@cubejs-backend/snowflake-driver');
    
    // Read and decrypt private key
    const privateKeyPath = process.env.CUBEJS_DB_SNOWFLAKE_PRIVATE_KEY_PATH;
    const privateKeyPass = process.env.CUBEJS_DB_SNOWFLAKE_PRIVATE_KEY_PASS;
    
    let privateKey;
    if (privateKeyPath && fs.existsSync(privateKeyPath)) {
      const privateKeyFile = fs.readFileSync(privateKeyPath);
      const privateKeyObject = crypto.createPrivateKey({
        key: privateKeyFile,
        format: 'pem',
        passphrase: privateKeyPass
      });
      
      privateKey = privateKeyObject.export({
        format: 'pem',
        type: 'pkcs8'
      });
    } 
    
    return new SnowflakeDriver({
      account: process.env.CUBEJS_DB_SNOWFLAKE_ACCOUNT,
      username: process.env.CUBEJS_DB_USER,
      authenticator: 'SNOWFLAKE_JWT',
      privateKey: privateKey,
      database: process.env.CUBEJS_DB_NAME,
      warehouse: process.env.CUBEJS_DB_SNOWFLAKE_WAREHOUSE,
      role: process.env.CUBEJS_DB_SNOWFLAKE_ROLE,
      clientSessionKeepAlive: true
    });
  },
  
  // Schema generation configuration
  schemaPath: 'model',
  
  // Pre-aggregation configuration
  preAggregationsSchema: ({ securityContext }) => {
    return `pre_aggregations_${securityContext.company || 'default'}`.toLowerCase();
  },
  
  // Logging
  logger: (msg, params) => {
    console.log(`${new Date().toISOString()} - ${msg}`, params);
  },
  
  // Orchestrator options for refresh workers
  orchestratorOptions: {
    continueWaitTimeout: 60,
    redisPrefix: 'CUBE_BC'
  }
};