const crypto = require('crypto');
const fs = require('fs');

module.exports = {
  contextToAppId: ({ securityContext }) => {
    return `CUBEJS_APP_${securityContext?.company || 'DEFAULT'}`;
  },
  
  // Snowflake connection with key pair authentication
  driverFactory: ({ dataSource }) => {
    const SnowflakeDriver = require('@cubejs-backend/snowflake-driver');
    
    let privateKey;
    
    // First check if private key is directly provided as environment variable (Cube Cloud)
    if (process.env.CUBEJS_DB_SNOWFLAKE_PRIVATE_KEY) {
      // Private key is directly in environment variable
      const privateKeyPass = process.env.CUBEJS_DB_SNOWFLAKE_PRIVATE_KEY_PASS;
      
      try {
        const privateKeyObject = crypto.createPrivateKey({
          key: process.env.CUBEJS_DB_SNOWFLAKE_PRIVATE_KEY,
          format: 'pem',
          passphrase: privateKeyPass
        });
        
        privateKey = privateKeyObject.export({
          format: 'pem',
          type: 'pkcs8'
        });
      } catch (error) {
        console.error('Error processing private key from environment variable:', error.message);
        // If decryption fails, try using the key as-is (might already be decrypted)
        privateKey = process.env.CUBEJS_DB_SNOWFLAKE_PRIVATE_KEY;
      }
    } 
    // Fallback to file path (local development)
    else if (process.env.CUBEJS_DB_SNOWFLAKE_PRIVATE_KEY_PATH) {
      const privateKeyPath = process.env.CUBEJS_DB_SNOWFLAKE_PRIVATE_KEY_PATH;
      const privateKeyPass = process.env.CUBEJS_DB_SNOWFLAKE_PRIVATE_KEY_PASS;
      
      if (fs.existsSync(privateKeyPath)) {
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
      } else {
        console.error(`Private key file not found at path: ${privateKeyPath}`);
      }
    }
    
    if (!privateKey) {
      console.error('Warning: No private key configured for Snowflake authentication');
    }
    
    return new SnowflakeDriver({
      account: process.env.CUBEJS_DB_SNOWFLAKE_ACCOUNT,
      username: process.env.CUBEJS_DB_USER,
      authenticator: 'SNOWFLAKE_JWT',
      privateKey: privateKey,
      database: process.env.CUBEJS_DB_NAME || process.env.CUBEJS_DB_SNOWFLAKE_DATABASE,
      warehouse: process.env.CUBEJS_DB_SNOWFLAKE_WAREHOUSE,
      role: process.env.CUBEJS_DB_SNOWFLAKE_ROLE,
      clientSessionKeepAlive: true
    });
  },
  
  // Schema generation configuration
  schemaPath: 'model',
  
  // Pre-aggregation configuration
  preAggregationsSchema: ({ securityContext }) => {
    return `pre_aggregations_${securityContext?.company || 'default'}`.toLowerCase();
  },
  
  // Logging
  logger: (msg, params) => {
    console.log(`${new Date().toISOString()} - ${msg}`, params);
  },
  
  // Orchestrator options for refresh workers
  orchestratorOptions: {
    continueWaitTimeout: 60,
    redisPrefix: 'CUBE_BC'
  },
  
  // Scheduled refresh contexts for multitenancy
  // This ensures background refresh jobs have proper security context
  scheduledRefreshContexts: async () => {
    // Return an array of security contexts for all companies
    // In production, you might fetch this from a database
    return [
      { securityContext: { company: 'DEFAULT' } },
      // Add more companies as needed:
      // { securityContext: { company: 'COMPANY_A' } },
      // { securityContext: { company: 'COMPANY_B' } },
    ];
  }
};