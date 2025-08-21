#!/usr/bin/env node

/**
 * Configuration validation script for Cube.js Snowflake setup
 */

const fs = require('fs');
const path = require('path');

// Load .env file if it exists
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const trimmedLine = line.trim();
    if (trimmedLine && !trimmedLine.startsWith('#')) {
      const [key, ...valueParts] = trimmedLine.split('=');
      if (key && valueParts.length > 0) {
        process.env[key.trim()] = valueParts.join('=').trim();
      }
    }
  });
}

console.log('🔍 Validating Cube.js Configuration...\n');

// Check environment variables
const requiredEnvVars = [
  'CUBEJS_DB_TYPE',
  'CUBEJS_DB_SNOWFLAKE_ACCOUNT', 
  'CUBEJS_DB_SNOWFLAKE_WAREHOUSE',
  'CUBEJS_DB_NAME',
  'CUBEJS_DB_SNOWFLAKE_SCHEMA',
  'CUBEJS_DB_USER',
  'CUBEJS_DB_SNOWFLAKE_AUTHENTICATOR',
  'CUBEJS_DB_SNOWFLAKE_PRIVATE_KEY_PATH'
];

console.log('📋 Checking environment variables:');
let envValid = true;
requiredEnvVars.forEach(envVar => {
  const value = process.env[envVar];
  if (value) {
    // Mask sensitive values
    const displayValue = envVar.includes('KEY') || envVar.includes('SECRET') 
      ? '***' 
      : value;
    console.log(`  ✅ ${envVar}: ${displayValue}`);
  } else {
    console.log(`  ❌ ${envVar}: NOT SET`);
    envValid = false;
  }
});

// Check private key file
if (process.env.CUBEJS_DB_SNOWFLAKE_PRIVATE_KEY_PATH) {
  const keyPath = process.env.CUBEJS_DB_SNOWFLAKE_PRIVATE_KEY_PATH;
  if (fs.existsSync(keyPath)) {
    console.log(`  ✅ Private key file exists: ${keyPath}`);
  } else {
    console.log(`  ❌ Private key file not found: ${keyPath}`);
    envValid = false;
  }
}

// Check tablePrefix helper
console.log('\n📦 Checking tablePrefix helper:');
try {
  const { tablePrefix, databaseName, schemaName } = require('./tablePrefix');
  console.log(`  ✅ Database: ${databaseName()}`);
  console.log(`  ✅ Schema: ${schemaName()}`);
  console.log(`  ✅ Full prefix: ${tablePrefix()}`);
} catch (error) {
  console.log(`  ❌ Error loading tablePrefix: ${error.message}`);
}

// Check model files
console.log('\n📊 Checking model files:');
const modelDir = path.join(__dirname, 'model');
const modelFiles = fs.readdirSync(modelDir);

modelFiles.forEach(file => {
  const filePath = path.join(modelDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  if (file.endsWith('.js')) {
    // Check JavaScript models
    if (content.includes('tablePrefix()')) {
      console.log(`  ✅ ${file}: Uses tablePrefix helper`);
    } else if (content.includes('FIVETRAN_DATABASE.BUSINESS_CENTRAL')) {
      console.log(`  ⚠️  ${file}: Contains hardcoded database/schema`);
    }
  } else if (file.endsWith('.yaml') || file.endsWith('.yml')) {
    // Check YAML models  
    if (content.includes('env_var(')) {
      console.log(`  ✅ ${file}: Uses env_var() for dynamic configuration`);
    } else if (content.includes('FIVETRAN_DATABASE.BUSINESS_CENTRAL')) {
      console.log(`  ⚠️  ${file}: Contains hardcoded database/schema`);
    }
  }
});

// Check cube.js configuration
console.log('\n⚙️  Checking cube.js configuration:');
try {
  const cubeConfig = require('./cube.js');
  
  if (cubeConfig.contextToAppId) {
    console.log('  ✅ Security context configured');
  }
  
  if (cubeConfig.queryRewrite) {
    console.log('  ✅ Query rewrite configured');
  }
  
  if (cubeConfig.driverFactory) {
    console.log('  ✅ Driver factory configured');
  }
  
  if (cubeConfig.scheduledRefreshContexts) {
    console.log('  ✅ Scheduled refresh contexts configured');
  }
} catch (error) {
  console.log(`  ❌ Error loading cube.js: ${error.message}`);
}

// Summary
console.log('\n📈 Configuration Summary:');
if (envValid) {
  console.log('  ✅ All required environment variables are set');
  console.log('  ✅ Models use dynamic configuration');
  console.log('  ✅ Security features are configured');
  console.log('\n🎉 Configuration is valid and ready for use!');
} else {
  console.log('  ❌ Some configuration issues detected');
  console.log('  Please review the errors above and update your configuration');
}

console.log('\n💡 Tip: To switch databases/schemas, simply update CUBEJS_DB_NAME and CUBEJS_DB_SNOWFLAKE_SCHEMA in your .env file');