cube(`employee`, {
  sql_table: `"BUSINESS_CENTRAL"."EMPLOYEE"`,
  
  data_source: `default`,
  
  joins: {
    company: {
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    no: {
      sql: `${CUBE}."NO"`,
      type: `string`,
      primary_key: true
    },
    system_id: {
      sql: `${CUBE}."SYSTEM_ID"`,
      type: `string`
    },
    cost_center_code: {
      sql: `${CUBE}."COST_CENTER_CODE"`,
      type: `string`
    },
    global_dimension_1_filter: {
      sql: `${CUBE}."GLOBAL_DIMENSION_1_FILTER"`,
      type: `string`
    },
    alt_address_code: {
      sql: `${CUBE}."ALT_ADDRESS_CODE"`,
      type: `string`
    },
    license_no: {
      sql: `${CUBE}."LICENSE_NO"`,
      type: `string`
    },
    company_email: {
      sql: `${CUBE}."COMPANY_EMAIL"`,
      type: `string`
    },
    last_modified_date_time: {
      sql: `${CUBE}."LAST_MODIFIED_DATE_TIME"`,
      type: `time`
    },
    job_title: {
      sql: `${CUBE}."JOB_TITLE"`,
      type: `string`
    },
    county: {
      sql: `${CUBE}."COUNTY"`,
      type: `string`
    },
    bank_account_no: {
      sql: `${CUBE}."BANK_ACCOUNT_NO"`,
      type: `string`
    },
    country_region_code: {
      sql: `${CUBE}."COUNTRY_REGION_CODE"`,
      type: `string`
    },
    manager_no: {
      sql: `${CUBE}."MANAGER_NO"`,
      type: `string`
    },
    e_mail: {
      sql: `${CUBE}."E_MAIL"`,
      type: `string`
    },
    system_created_at: {
      sql: `${CUBE}."SYSTEM_CREATED_AT"`,
      type: `time`
    },
    termination_date: {
      sql: `${CUBE}."TERMINATION_DATE"`,
      type: `time`
    },
    balance: {
      sql: `${CUBE}."BALANCE"`,
      type: `string`
    },
    pager: {
      sql: `${CUBE}."PAGER"`,
      type: `string`
    },
    privacy_blocked: {
      sql: `${CUBE}."PRIVACY_BLOCKED"`,
      type: `boolean`
    },
    grounds_for_term_code: {
      sql: `${CUBE}."GROUNDS_FOR_TERM_CODE"`,
      type: `string`
    },
    cost_object_code: {
      sql: `${CUBE}."COST_OBJECT_CODE"`,
      type: `string`
    },
    emplymt_contract_code: {
      sql: `${CUBE}."EMPLYMT_CONTRACT_CODE"`,
      type: `string`
    },
    image: {
      sql: `${CUBE}."IMAGE"`,
      type: `string`
    },
    mobile_phone_no: {
      sql: `${CUBE}."MOBILE_PHONE_NO"`,
      type: `string`
    },
    salespers_purch_code: {
      sql: `${CUBE}."SALESPERS_PURCH_CODE"`,
      type: `string`
    },
    resource_no: {
      sql: `${CUBE}."RESOURCE_NO"`,
      type: `string`
    },
    employment_date: {
      sql: `${CUBE}."EMPLOYMENT_DATE"`,
      type: `time`
    },
    initials: {
      sql: `${CUBE}."INITIALS"`,
      type: `string`
    },
    rfc_no: {
      sql: `${CUBE}."RFC_NO"`,
      type: `string`
    },
    system_created_by: {
      sql: `${CUBE}."SYSTEM_CREATED_BY"`,
      type: `string`
    },
    global_dimension_2_code: {
      sql: `${CUBE}."GLOBAL_DIMENSION_2_CODE"`,
      type: `string`
    },
    cause_of_absence_filter: {
      sql: `${CUBE}."CAUSE_OF_ABSENCE_FILTER"`,
      type: `string`
    },
    date_filter: {
      sql: `${CUBE}."DATE_FILTER"`,
      type: `string`
    },
    first_name: {
      sql: `${CUBE}."FIRST_NAME"`,
      type: `string`
    },
    system_modified_at: {
      sql: `${CUBE}."SYSTEM_MODIFIED_AT"`,
      type: `time`
    },
    iban: {
      sql: `${CUBE}."IBAN"`,
      type: `string`
    },
    application_method: {
      sql: `${CUBE}."APPLICATION_METHOD"`,
      type: `string`
    },
    post_code: {
      sql: `${CUBE}."POST_CODE"`,
      type: `string`
    },
    last_date_modified: {
      sql: `${CUBE}."LAST_DATE_MODIFIED"`,
      type: `time`
    },
    global_dimension_1_code: {
      sql: `${CUBE}."GLOBAL_DIMENSION_1_CODE"`,
      type: `string`
    },
    status: {
      sql: `${CUBE}."STATUS"`,
      type: `string`
    },
    last_name: {
      sql: `${CUBE}."LAST_NAME"`,
      type: `string`
    },
    extension: {
      sql: `${CUBE}."EXTENSION"`,
      type: `string`
    },
    statistics_group_code: {
      sql: `${CUBE}."STATISTICS_GROUP_CODE"`,
      type: `string`
    },
    gender: {
      sql: `${CUBE}."GENDER"`,
      type: `string`
    },
    city: {
      sql: `${CUBE}."CITY"`,
      type: `string`
    },
    swift_code: {
      sql: `${CUBE}."SWIFT_CODE"`,
      type: `string`
    },
    title: {
      sql: `${CUBE}."TITLE"`,
      type: `string`
    },
    union_membership_no: {
      sql: `${CUBE}."UNION_MEMBERSHIP_NO"`,
      type: `string`
    },
    phone_no: {
      sql: `${CUBE}."PHONE_NO"`,
      type: `string`
    },
    alt_address_end_date: {
      sql: `${CUBE}."ALT_ADDRESS_END_DATE"`,
      type: `time`
    },
    system_modified_by: {
      sql: `${CUBE}."SYSTEM_MODIFIED_BY"`,
      type: `string`
    },
    union_code: {
      sql: `${CUBE}."UNION_CODE"`,
      type: `string`
    },
    inactive_date: {
      sql: `${CUBE}."INACTIVE_DATE"`,
      type: `time`
    },
    employee_no_filter: {
      sql: `${CUBE}."EMPLOYEE_NO_FILTER"`,
      type: `string`
    },
    address: {
      sql: `${CUBE}."ADDRESS"`,
      type: `string`
    },
    no_series: {
      sql: `${CUBE}."NO_SERIES"`,
      type: `string`
    },
    address_2: {
      sql: `${CUBE}."ADDRESS_2"`,
      type: `string`
    },
    total_absence_base: {
      sql: `${CUBE}."TOTAL_ABSENCE_BASE"`,
      type: `number`
    },
    global_dimension_2_filter: {
      sql: `${CUBE}."GLOBAL_DIMENSION_2_FILTER"`,
      type: `string`
    },
    birth_date: {
      sql: `${CUBE}."BIRTH_DATE"`,
      type: `time`
    },
    cause_of_inactivity_code: {
      sql: `${CUBE}."CAUSE_OF_INACTIVITY_CODE"`,
      type: `string`
    },
    employee_posting_group: {
      sql: `${CUBE}."EMPLOYEE_POSTING_GROUP"`,
      type: `string`
    },
    fax_no: {
      sql: `${CUBE}."FAX_NO"`,
      type: `string`
    },
    social_security_no: {
      sql: `${CUBE}."SOCIAL_SECURITY_NO"`,
      type: `string`
    },
    bank_branch_no: {
      sql: `${CUBE}."BANK_BRANCH_NO"`,
      type: `string`
    },
    search_name: {
      sql: `${CUBE}."SEARCH_NAME"`,
      type: `string`
    },
    comment: {
      sql: `${CUBE}."COMMENT"`,
      type: `boolean`
    },
    middle_name: {
      sql: `${CUBE}."MIDDLE_NAME"`,
      type: `string`
    },
    alt_address_start_date: {
      sql: `${CUBE}."ALT_ADDRESS_START_DATE"`,
      type: `time`
    },
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    },
    _fivetran_synced: {
      sql: `${CUBE}."_FIVETRAN_SYNCED"`,
      type: `time`
    },
    _fivetran_deleted: {
      sql: `${CUBE}."_FIVETRAN_DELETED"`,
      type: `boolean`
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
