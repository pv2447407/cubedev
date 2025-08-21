#!/usr/bin/env node

/**
 * Query Validator for Cube.js
 * 
 * This script validates query JSON format before sending to Cube.js
 * Usage: node test-query.js
 */

// Example valid query structure
const validQuery = {
  measures: ["sales_invoices.total_revenue"],
  dimensions: ["customers.name"],
  filters: [
    {
      member: "sales_invoices.posting_date",
      operator: "gte",
      values: ["2024-01-01"]
    }
  ],
  order: {
    "sales_invoices.total_revenue": "desc"
  },
  limit: 10
};

// Valid operators
const validOperators = [
  'equals', 'notEquals', 'contains', 'notContains',
  'gt', 'gte', 'lt', 'lte',
  'inDateRange', 'notInDateRange', 'beforeDate', 'afterDate',
  'set', 'notSet'
];

function validateQuery(query) {
  const errors = [];

  // Check if query is an object
  if (typeof query !== 'object' || query === null) {
    errors.push("Query must be a valid JSON object");
    return errors;
  }

  // Validate measures (optional but if present, must be array)
  if (query.measures && !Array.isArray(query.measures)) {
    errors.push("'measures' must be an array");
  }

  // Validate dimensions (optional but if present, must be array)
  if (query.dimensions && !Array.isArray(query.dimensions)) {
    errors.push("'dimensions' must be an array");
  }

  // Validate filters
  if (query.filters) {
    if (!Array.isArray(query.filters)) {
      errors.push("'filters' must be an array");
    } else {
      query.filters.forEach((filter, index) => {
        // Check filter structure
        if (!filter.member) {
          errors.push(`Filter[${index}]: missing 'member' property`);
        }
        if (!filter.operator) {
          errors.push(`Filter[${index}]: missing 'operator' property`);
        } else if (!validOperators.includes(filter.operator)) {
          errors.push(`Filter[${index}]: invalid operator '${filter.operator}'. Valid operators: ${validOperators.join(', ')}`);
        }
        if (!filter.values) {
          errors.push(`Filter[${index}]: missing 'values' property`);
        } else if (!Array.isArray(filter.values)) {
          errors.push(`Filter[${index}]: 'values' must be an array (even for single values)`);
        }
      });
    }
  }

  // Validate timeDimensions
  if (query.timeDimensions) {
    if (!Array.isArray(query.timeDimensions)) {
      errors.push("'timeDimensions' must be an array");
    } else {
      query.timeDimensions.forEach((td, index) => {
        if (!td.dimension) {
          errors.push(`TimeDimension[${index}]: missing 'dimension' property`);
        }
        if (td.granularity && !['second', 'minute', 'hour', 'day', 'week', 'month', 'quarter', 'year'].includes(td.granularity)) {
          errors.push(`TimeDimension[${index}]: invalid granularity '${td.granularity}'`);
        }
      });
    }
  }

  // Validate order
  if (query.order && typeof query.order !== 'object') {
    errors.push("'order' must be an object with measure/dimension names as keys and 'asc'/'desc' as values");
  }

  // Validate limit
  if (query.limit && (typeof query.limit !== 'number' || query.limit < 0)) {
    errors.push("'limit' must be a positive number");
  }

  return errors;
}

// Test the validator with example queries
console.log("🔍 Cube.js Query Validator\n");
console.log("=" .repeat(50));

// Test valid query
console.log("\n✅ Testing VALID query:");
console.log(JSON.stringify(validQuery, null, 2));
let errors = validateQuery(validQuery);
if (errors.length === 0) {
  console.log("✓ Query is valid!");
} else {
  console.log("✗ Validation errors:", errors);
}

// Test invalid queries
const invalidQueries = [
  {
    name: "Single value not in array",
    query: {
      measures: ["sales_invoices.total_revenue"],
      filters: [{
        member: "sales_invoices.amount",
        operator: "gt",
        values: "1000" // Should be ["1000"]
      }]
    }
  },
  {
    name: "Missing operator in filter",
    query: {
      measures: ["sales_invoices.total_revenue"],
      filters: [{
        member: "sales_invoices.amount",
        values: ["1000"]
      }]
    }
  },
  {
    name: "Invalid operator",
    query: {
      measures: ["sales_invoices.total_revenue"],
      filters: [{
        member: "sales_invoices.amount",
        operator: "greater", // Should be "gt" or "gte"
        values: ["1000"]
      }]
    }
  }
];

console.log("\n" + "=" .repeat(50));
console.log("\n❌ Testing INVALID queries:\n");

invalidQueries.forEach(test => {
  console.log(`Testing: ${test.name}`);
  console.log(JSON.stringify(test.query, null, 2));
  errors = validateQuery(test.query);
  if (errors.length > 0) {
    console.log("✓ Correctly identified errors:");
    errors.forEach(error => console.log(`  - ${error}`));
  } else {
    console.log("✗ Failed to detect errors!");
  }
  console.log();
});

// Interactive mode
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=" .repeat(50));
console.log("\n📝 Enter your query JSON to validate (or 'exit' to quit):");
console.log("Tip: You can paste multi-line JSON. Type 'validate' on a new line when done.\n");

let inputBuffer = '';

rl.on('line', (line) => {
  if (line.toLowerCase() === 'exit') {
    console.log("Goodbye!");
    rl.close();
    process.exit(0);
  }
  
  if (line.toLowerCase() === 'validate') {
    try {
      const query = JSON.parse(inputBuffer);
      const errors = validateQuery(query);
      
      if (errors.length === 0) {
        console.log("\n✅ Query is valid! You can use this in the Cube.js Playground.\n");
      } else {
        console.log("\n❌ Query has errors:");
        errors.forEach(error => console.log(`  - ${error}`));
        console.log();
      }
    } catch (e) {
      console.log("\n❌ Invalid JSON:", e.message);
      console.log("Please check your JSON syntax.\n");
    }
    
    inputBuffer = '';
    console.log("Enter another query (or 'exit' to quit):");
  } else {
    inputBuffer += line + '\n';
  }
});