const snowflake = require('snowflake-sdk');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

class BCSchemaGenerator {
  constructor() {
    this.connection = null;
    this.tables = [];
    this.relationships = new Map();
  }

  async connect() {
    const privateKeyFile = fs.readFileSync(process.env.SNOWFLAKE_PRIVATE_KEY_PATH);
    
    this.connection = snowflake.createConnection({
      account: process.env.SNOWFLAKE_ACCOUNT,
      username: process.env.SNOWFLAKE_USER,
      authenticator: 'SNOWFLAKE_JWT',
      privateKeyPath: process.env.SNOWFLAKE_PRIVATE_KEY_PATH,
      privateKeyPass: process.env.SNOWFLAKE_PRIVATE_KEY_PASSPHRASE,
      database: process.env.SNOWFLAKE_DATABASE,
      schema: process.env.SNOWFLAKE_SCHEMA,
      warehouse: process.env.SNOWFLAKE_WAREHOUSE,
      role: process.env.SNOWFLAKE_ROLE
    }); 

    return new Promise((resolve, reject) => {
      this.connection.connect((err, conn) => {
        if (err) reject(err);
        else resolve(conn);
      });
    });
  }

  async discoverTables() {
    const query = `
      SELECT 
        table_name,
        table_type,
        comment
      FROM information_schema.tables
      WHERE table_schema = '${process.env.SNOWFLAKE_SCHEMA}'
        AND table_type = 'BASE TABLE'
      ORDER BY table_name
    `;

    return this.executeQuery(query);
  }

  async discoverColumns(tableName) {
    const query = `
      SELECT 
        column_name,
        data_type,
        is_nullable,
        column_default,
        character_maximum_length,
        numeric_precision,
        numeric_scale
      FROM information_schema.columns
      WHERE table_schema = '${process.env.SNOWFLAKE_SCHEMA}'
        AND table_name = '${tableName}'
      ORDER BY ordinal_position
    `;

    return this.executeQuery(query);
  }

  detectBCTableType(tableName) {
    const patterns = {
      customer: /customer(?!.*ledger|.*entry)/i,
      vendor: /vendor(?!.*ledger|.*entry)/i,
      item: /item(?!.*ledger|.*entry)/i,
      glAccount: /g[_\/]?l.*account/i,
      glEntry: /g[_\/]?l.*entry/i,
      customerLedger: /customer.*ledger.*entry/i,
      vendorLedger: /vendor.*ledger.*entry/i,
      itemLedger: /item.*ledger.*entry/i,
      salesHeader: /sales.*header(?!.*posted)/i,
      salesLine: /sales.*line(?!.*posted)/i,
      salesInvoiceHeader: /sales.*invoice.*header/i,
      salesInvoiceLine: /sales.*invoice.*line/i,
      dimension: /dimension.*set.*entry/i
    };

    for (const [type, pattern] of Object.entries(patterns)) {
      if (pattern.test(tableName)) {
        return type;
      }
    }
    return 'generic';
  }

  detectPrimaryKey(tableName, columns) {
    // Normalize table name for pattern matching
    const lowerTableName = tableName.toLowerCase();
    
    // Check for common primary key patterns
    const primaryKeyPatterns = [
      { pattern: /currency_exchange_rate$/, key: 'STARTING_DATE' },  // Composite key, use starting date
      { pattern: /dimension_set_entry$/, key: 'DIMENSION_SET_ID' },  // Part of composite key
      { pattern: /entry$/, key: 'ENTRY_NO' },
      { pattern: /line$/, key: 'LINE_NO' },
      { pattern: /_header$/, key: 'NO' },
      { pattern: /customer$/, key: 'NO' },
      { pattern: /vendor$/, key: 'NO' },
      { pattern: /item$/, key: 'NO' },
      { pattern: /currency$/, key: 'CODE' },
      { pattern: /country/, key: 'CODE' },
      { pattern: /location$/, key: 'CODE' },
      { pattern: /dimension/, key: 'CODE' },
      { pattern: /posting.*group$/, key: 'CODE' },
      { pattern: /payment/, key: 'CODE' },
      { pattern: /reason/, key: 'CODE' },
      { pattern: /unit.*measure$/, key: 'CODE' },
      { pattern: /shipment.*method$/, key: 'CODE' },
      { pattern: /employee$/, key: 'NO' },
      { pattern: /contact$/, key: 'NO' },
      { pattern: /company/, key: 'PRIMARY_KEY' },
      { pattern: /job$/, key: 'NO' },
      { pattern: /opportunity$/, key: 'NO' },
      { pattern: /account/, key: 'NO' },
      { pattern: /batch$/, key: 'NAME' }
    ];

    // Check patterns
    for (const { pattern, key } of primaryKeyPatterns) {
      if (pattern.test(lowerTableName)) {
        // Verify the column exists
        if (columns.some(col => col.COLUMN_NAME === key)) {
          return key;
        }
      }
    }

    // Fallback: look for common primary key column names
    const commonKeys = ['ID', 'NO', 'CODE', 'ENTRY_NO', 'LINE_NO', 'PRIMARY_KEY'];
    for (const key of commonKeys) {
      if (columns.some(col => col.COLUMN_NAME === key)) {
        return key;
      }
    }

    // If no primary key found, return null
    return null;
  }

  generateCubeSchema(tableName, columns, tableType) {
    const cubeName = tableName.toLowerCase().replace(/_/g, '_');
    const primaryKey = this.detectPrimaryKey(tableName, columns);
    const measures = this.generateMeasures(columns, tableType);
    const dimensions = this.generateDimensions(columns, tableType, primaryKey);
    const joins = this.generateJoins(tableName, tableType);

    return `cube(\`${cubeName}\`, {
  sql_table: \`"${process.env.SNOWFLAKE_SCHEMA}"."${tableName}"\`,
  
  data_source: \`default\`,
  
  joins: {${joins ? joins : `
    company: {
      sql: \`\${CUBE}."COMPANY_ID" = \${company}."ID"\`,
      relationship: \`many_to_one\`
    }`}
  },
  
  dimensions: {${dimensions}
  },
  
  measures: {${measures}
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
`;
  }

  generateMeasures(columns, tableType) {
    // Simple count measure - always included
    return `
    count: {
      type: \`count\`
    }`;
  }

  generateDimensions(columns, tableType, primaryKey) {
    const dimensions = [];
    
    // If we have a primary key, add it first
    if (primaryKey) {
      const pkColumn = columns.find(col => col.COLUMN_NAME === primaryKey);
      if (pkColumn) {
        const pkIndex = columns.indexOf(pkColumn);
        if (pkIndex > -1) {
          // Move primary key column to the beginning
          columns = [pkColumn, ...columns.slice(0, pkIndex), ...columns.slice(pkIndex + 1)];
        }
      }
    }
    
    columns.forEach(col => {
      const fieldName = col.COLUMN_NAME.toLowerCase().replace(/_/g, '_');
      let dimensionType = 'string';
      
      // Determine dimension type
      if (['DATE', 'TIMESTAMP_NTZ', 'TIMESTAMP_TZ', 'TIMESTAMP_LTZ', 'TIMESTAMP'].includes(col.DATA_TYPE)) {
        dimensionType = 'time';
      } else if (['NUMBER', 'INTEGER', 'DECIMAL', 'NUMERIC', 'FLOAT', 'DOUBLE', 'REAL'].includes(col.DATA_TYPE)) {
        // Check if it's actually an amount/quantity for measure
        if (!col.COLUMN_NAME.toLowerCase().includes('amount') && 
            !col.COLUMN_NAME.toLowerCase().includes('quantity') &&
            !col.COLUMN_NAME.toLowerCase().includes('balance')) {
          dimensionType = 'number';
        } else {
          dimensionType = 'string'; // Will be handled as measure
        }
      } else if (['BOOLEAN'].includes(col.DATA_TYPE)) {
        dimensionType = 'boolean';
      }
      
      // Check if this is the primary key
      const isPrimaryKey = primaryKey && col.COLUMN_NAME === primaryKey;
      
      dimensions.push(`
    ${fieldName}: {
      sql: \`\${CUBE}."${col.COLUMN_NAME}"\`,
      type: \`${dimensionType}\`${isPrimaryKey ? ',\n      primary_key: true' : ''}
    }`);
    });

    return dimensions.join(',');
  }

  generateJoins(tableName, tableType) {
    // For now, return empty - joins can be added manually as needed
    return '';
  }


  toCamelCase(str) {
    return str.toLowerCase()
      .replace(/[_\s](.)/g, (match, group1) => group1.toUpperCase())
      .replace(/^(.)/, (match, group1) => group1.toUpperCase());
  }

  formatTitle(str) {
    return str.replace(/[_$]/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
  }

  executeQuery(query) {
    return new Promise((resolve, reject) => {
      this.connection.execute({
        sqlText: query,
        complete: (err, stmt, rows) => {
          if (err) reject(err);
          else resolve(rows);
        }
      });
    });
  }

  async generateSchemas(outputDir = './model/cubes') {
    console.log('Connecting to Snowflake...');
    await this.connect();
    
    console.log('Discovering tables...');
    const tables = await this.discoverTables();
    
    // Create output directory
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Process each table
    for (const table of tables) {
      const tableName = table.TABLE_NAME;
      console.log(`Processing table: ${tableName}`);
      
      const columns = await this.discoverColumns(tableName);
      const tableType = this.detectBCTableType(tableName);
      const schema = this.generateCubeSchema(tableName, columns, tableType);
      
      // Write schema file
      const fileName = `${this.toCamelCase(tableName)}.js`;
      const filePath = path.join(outputDir, fileName);
      fs.writeFileSync(filePath, schema);
      
      console.log(`  Generated: ${fileName}`);
    }
    
    console.log('Schema generation complete!');
    this.connection.destroy();
  }
}

module.exports = BCSchemaGenerator;