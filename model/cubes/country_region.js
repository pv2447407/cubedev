cube(`country_region`, {
  sql_table: `"BUSINESS_CENTRAL"."COUNTRY_REGION"`,
  
  data_source: `default`,
  
  joins: {
    company: {
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    system_id: {
      sql: `${CUBE}."SYSTEM_ID"`,
      type: `string`
    },
    
    system_created_by: {
      sql: `${CUBE}."SYSTEM_CREATED_BY"`,
      type: `string`
    },
    
    eu_country_region_code: {
      sql: `${CUBE}."EU_COUNTRY_REGION_CODE"`,
      type: `string`
    },
    
    sat_country_code: {
      sql: `${CUBE}."SAT_COUNTRY_CODE"`,
      type: `string`
    },
    
    county_name: {
      sql: `${CUBE}."COUNTY_NAME"`,
      type: `string`
    },
    
    contact_address_format: {
      sql: `${CUBE}."CONTACT_ADDRESS_FORMAT"`,
      type: `string`
    },
    
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    },
    
    address_format: {
      sql: `${CUBE}."ADDRESS_FORMAT"`,
      type: `string`
    },
    
    code: {
      sql: `${CUBE}."CODE"`,
      type: `string`
    },
    
    name: {
      sql: `${CUBE}."NAME"`,
      type: `string`
    },
    
    vat_scheme: {
      sql: `${CUBE}."VAT_SCHEME"`,
      type: `string`
    },
    
    iso_numeric_code: {
      sql: `${CUBE}."ISO_NUMERIC_CODE"`,
      type: `string`
    },
    
    iso_code: {
      sql: `${CUBE}."ISO_CODE"`,
      type: `string`
    },
    
    system_modified_by: {
      sql: `${CUBE}."SYSTEM_MODIFIED_BY"`,
      type: `string`
    },
    
    intrastat_code: {
      sql: `${CUBE}."INTRASTAT_CODE"`,
      type: `string`
    },
    
    system_created_at: {
      sql: `${CUBE}."SYSTEM_CREATED_AT"`,
      type: `time`
    },
    
    system_modified_at: {
      sql: `${CUBE}."SYSTEM_MODIFIED_AT"`,
      type: `time`
    },
    
    last_modified_date_time: {
      sql: `${CUBE}."LAST_MODIFIED_DATE_TIME"`,
      type: `time`
    }
  },
  
  measures: {
    count: {
      type: `count`
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
