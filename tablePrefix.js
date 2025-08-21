/**
 * Helper module to access environment variables for Cube.js models
 * This file must be outside the model/ directory to have access to process.env
 */

module.exports = {
  // Get the full table prefix (database.schema)
  tablePrefix: function() {
    const database = process.env.CUBEJS_DB_NAME || 'FIVETRAN_DATABASE';
    const schema = process.env.CUBEJS_DB_SNOWFLAKE_SCHEMA || 'BUSINESS_CENTRAL';
    return `${database}.${schema}`;
  },
  
  // Get just the database name
  databaseName: function() {
    return process.env.CUBEJS_DB_NAME || 'FIVETRAN_DATABASE';
  },
  
  // Get just the schema name
  schemaName: function() {
    return process.env.CUBEJS_DB_SNOWFLAKE_SCHEMA || 'BUSINESS_CENTRAL';
  }
};