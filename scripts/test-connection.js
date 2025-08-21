const snowflake = require('snowflake-sdk');
const crypto = require('crypto');
const fs = require('fs');
require('dotenv').config();

async function testConnection() {
  console.log('🔧 Testing Snowflake connection with key pair authentication...\n');
  
  try {
    // Read and decrypt private key
    const privateKeyFile = fs.readFileSync(process.env.SNOWFLAKE_PRIVATE_KEY_PATH);
    const privateKeyObject = crypto.createPrivateKey({
      key: privateKeyFile,
      format: 'pem',
      passphrase: process.env.SNOWFLAKE_PRIVATE_KEY_PASSPHRASE
    });
    
    const privateKey = privateKeyObject.export({
      format: 'pem',
      type: 'pkcs8'
    });
    
    // Create connection
    const connection = snowflake.createConnection({
      account: process.env.SNOWFLAKE_ACCOUNT,
      username: process.env.SNOWFLAKE_USER,
      authenticator: 'SNOWFLAKE_JWT',
      privateKey: privateKey,
      database: process.env.SNOWFLAKE_DATABASE,
      schema: process.env.SNOWFLAKE_SCHEMA,
      warehouse: process.env.SNOWFLAKE_WAREHOUSE,
      role: process.env.SNOWFLAKE_ROLE
    }); 
    
    // Connect
    await new Promise((resolve, reject) => {
      connection.connect((err, conn) => {
        if (err) reject(err);
        else resolve(conn);
      });
    });
    
    console.log('✅ Connection successful!\n');
    
    // Test query - list Business Central tables
    const testQuery = `
      SELECT table_name, row_count, bytes
      FROM information_schema.tables
      WHERE table_schema = '${process.env.SNOWFLAKE_SCHEMA}'
      ORDER BY row_count DESC
      LIMIT 10
    `;
    
    const results = await new Promise((resolve, reject) => {
      connection.execute({
        sqlText: testQuery,
        complete: (err, stmt, rows) => {
          if (err) reject(err);
          else resolve(rows);
        }
      });
    });
    
    console.log('📊 Top Business Central tables by row count:');
    console.table(results.map(r => ({
      Table: r.TABLE_NAME,
      Rows: r.ROW_COUNT?.toLocaleString() || '0',
      Size: `${(r.BYTES / 1024 / 1024).toFixed(2)} MB`
    })));
    
    // Test dimension architecture
    const dimensionQuery = `
      SELECT COUNT(DISTINCT dimension_set_id) as unique_dimension_sets
      FROM ${process.env.SNOWFLAKE_DATABASE}.${process.env.SNOWFLAKE_SCHEMA}.G_L_ENTRY
    `;
    
    const dimensionResults = await new Promise((resolve, reject) => {
      connection.execute({
        sqlText: dimensionQuery,
        complete: (err, stmt, rows) => {
          if (err) {
            console.log('⚠️  Could not query dimension data (table might not exist)');
            resolve([]);
          } else {
            resolve(rows);
          }
        }
      });
    });
    
    if (dimensionResults.length > 0) {
      console.log(`\n📐 Unique dimension sets found: ${dimensionResults[0].UNIQUE_DIMENSION_SETS}`);
    }
    
    connection.destroy();
    console.log('\n✅ All tests passed successfully!');
    
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
    console.error('\nTroubleshooting tips:');
    console.error('1. Verify your .env file has correct values');
    console.error('2. Check that the public key is configured in Snowflake');
    console.error('3. Ensure the private key passphrase is correct');
    console.error('4. Verify network connectivity to Snowflake');
    process.exit(1);
  }
}

testConnection();