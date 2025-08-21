const BCSchemaGenerator = require('../src/schema-generator');

async function main() {
  const generator = new BCSchemaGenerator();
  
  try {
    await generator.generateSchemas('./model/cubes');
    console.log('✅ Schema generation completed successfully');
  } catch (error) {
    console.error('❌ Schema generation failed:', error);
    process.exit(1);
  }
}

main();