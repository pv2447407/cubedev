cube(`contact`, {
  sql_table: `"BUSINESS_CENTRAL"."CONTACT"`,
  
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
    minor: {
      sql: `${CUBE}."MINOR"`,
      type: `boolean`
    },
    telex_answer_back: {
      sql: `${CUBE}."TELEX_ANSWER_BACK"`,
      type: `string`
    },
    job_responsibility_filter: {
      sql: `${CUBE}."JOB_RESPONSIBILITY_FILTER"`,
      type: `string`
    },
    company_name: {
      sql: `${CUBE}."COMPANY_NAME"`,
      type: `string`
    },
    coupled_to_dataverse: {
      sql: `${CUBE}."COUPLED_TO_DATAVERSE"`,
      type: `boolean`
    },
    job_title: {
      sql: `${CUBE}."JOB_TITLE"`,
      type: `string`
    },
    opportunity_entry_exists: {
      sql: `${CUBE}."OPPORTUNITY_ENTRY_EXISTS"`,
      type: `boolean`
    },
    county: {
      sql: `${CUBE}."COUNTY"`,
      type: `string`
    },
    external_id: {
      sql: `${CUBE}."EXTERNAL_ID"`,
      type: `string`
    },
    no_of_interactions: {
      sql: `${CUBE}."NO_OF_INTERACTIONS"`,
      type: `number`
    },
    country_region_code: {
      sql: `${CUBE}."COUNTRY_REGION_CODE"`,
      type: `string`
    },
    type: {
      sql: `${CUBE}."TYPE"`,
      type: `string`
    },
    date_of_last_interaction: {
      sql: `${CUBE}."DATE_OF_LAST_INTERACTION"`,
      type: `time`
    },
    no_of_mailing_groups: {
      sql: `${CUBE}."NO_OF_MAILING_GROUPS"`,
      type: `number`
    },
    e_mail: {
      sql: `${CUBE}."E_MAIL"`,
      type: `string`
    },
    system_created_at: {
      sql: `${CUBE}."SYSTEM_CREATED_AT"`,
      type: `time`
    },
    completed_filter: {
      sql: `${CUBE}."COMPLETED_FILTER"`,
      type: `string`
    },
    vat_registration_no: {
      sql: `${CUBE}."VAT_REGISTRATION_NO"`,
      type: `string`
    },
    pager: {
      sql: `${CUBE}."PAGER"`,
      type: `string`
    },
    probability_filter: {
      sql: `${CUBE}."PROBABILITY_FILTER"`,
      type: `string`
    },
    privacy_blocked: {
      sql: `${CUBE}."PRIVACY_BLOCKED"`,
      type: `boolean`
    },
    contact_business_relation: {
      sql: `${CUBE}."CONTACT_BUSINESS_RELATION"`,
      type: `string`
    },
    no_of_industry_groups: {
      sql: `${CUBE}."NO_OF_INDUSTRY_GROUPS"`,
      type: `number`
    },
    organizational_level_code: {
      sql: `${CUBE}."ORGANIZATIONAL_LEVEL_CODE"`,
      type: `string`
    },
    duration_min: {
      sql: `${CUBE}."DURATION_MIN"`,
      type: `number`
    },
    exclude_from_segment: {
      sql: `${CUBE}."EXCLUDE_FROM_SEGMENT"`,
      type: `boolean`
    },
    calcd_current_value_filter: {
      sql: `${CUBE}."CALCD_CURRENT_VALUE_FILTER"`,
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
    telex_no: {
      sql: `${CUBE}."TELEX_NO"`,
      type: `string`
    },
    estimated_value_lcy: {
      sql: `${CUBE}."ESTIMATED_VALUE_LCY"`,
      type: `number`
    },
    initials: {
      sql: `${CUBE}."INITIALS"`,
      type: `string`
    },
    salutation_code: {
      sql: `${CUBE}."SALUTATION_CODE"`,
      type: `string`
    },
    cost_lcy: {
      sql: `${CUBE}."COST_LCY"`,
      type: `number`
    },
    last_date_attempted: {
      sql: `${CUBE}."LAST_DATE_ATTEMPTED"`,
      type: `time`
    },
    calcd_current_value_lcy: {
      sql: `${CUBE}."CALCD_CURRENT_VALUE_LCY"`,
      type: `number`
    },
    parental_consent_received: {
      sql: `${CUBE}."PARENTAL_CONSENT_RECEIVED"`,
      type: `boolean`
    },
    language_code: {
      sql: `${CUBE}."LANGUAGE_CODE"`,
      type: `string`
    },
    system_created_by: {
      sql: `${CUBE}."SYSTEM_CREATED_BY"`,
      type: `string`
    },
    search_email: {
      sql: `${CUBE}."SEARCH_EMAIL"`,
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
    e_mail_2: {
      sql: `${CUBE}."E_MAIL_2"`,
      type: `string`
    },
    system_modified_at: {
      sql: `${CUBE}."SYSTEM_MODIFIED_AT"`,
      type: `time`
    },
    name: {
      sql: `${CUBE}."NAME"`,
      type: `string`
    },
    next_task_date: {
      sql: `${CUBE}."NEXT_TASK_DATE"`,
      type: `time`
    },
    post_code: {
      sql: `${CUBE}."POST_CODE"`,
      type: `string`
    },
    last_date_modified: {
      sql: `${CUBE}."LAST_DATE_MODIFIED"`,
      type: `time`
    },
    team_filter: {
      sql: `${CUBE}."TEAM_FILTER"`,
      type: `string`
    },
    name_2: {
      sql: `${CUBE}."NAME_2"`,
      type: `string`
    },
    close_opportunity_filter: {
      sql: `${CUBE}."CLOSE_OPPORTUNITY_FILTER"`,
      type: `string`
    },
    task_entry_exists: {
      sql: `${CUBE}."TASK_ENTRY_EXISTS"`,
      type: `boolean`
    },
    lookup_contact_no: {
      sql: `${CUBE}."LOOKUP_CONTACT_NO"`,
      type: `string`
    },
    city: {
      sql: `${CUBE}."CITY"`,
      type: `string`
    },
    extension_no: {
      sql: `${CUBE}."EXTENSION_NO"`,
      type: `string`
    },
    priority_filter: {
      sql: `${CUBE}."PRIORITY_FILTER"`,
      type: `string`
    },
    no_of_business_relations: {
      sql: `${CUBE}."NO_OF_BUSINESS_RELATIONS"`,
      type: `number`
    },
    task_closed_filter: {
      sql: `${CUBE}."TASK_CLOSED_FILTER"`,
      type: `string`
    },
    phone_no: {
      sql: `${CUBE}."PHONE_NO"`,
      type: `string`
    },
    system_modified_by: {
      sql: `${CUBE}."SYSTEM_MODIFIED_BY"`,
      type: `string`
    },
    format_region: {
      sql: `${CUBE}."FORMAT_REGION"`,
      type: `string`
    },
    company_no: {
      sql: `${CUBE}."COMPANY_NO"`,
      type: `string`
    },
    no_of_opportunities: {
      sql: `${CUBE}."NO_OF_OPPORTUNITIES"`,
      type: `number`
    },
    surname: {
      sql: `${CUBE}."SURNAME"`,
      type: `string`
    },
    sales_cycle_filter: {
      sql: `${CUBE}."SALES_CYCLE_FILTER"`,
      type: `string`
    },
    last_time_modified: {
      sql: `${CUBE}."LAST_TIME_MODIFIED"`,
      type: `string`
    },
    salesperson_filter: {
      sql: `${CUBE}."SALESPERSON_FILTER"`,
      type: `string`
    },
    correspondence_type: {
      sql: `${CUBE}."CORRESPONDENCE_TYPE"`,
      type: `string`
    },
    task_status_filter: {
      sql: `${CUBE}."TASK_STATUS_FILTER"`,
      type: `string`
    },
    estimated_value_filter: {
      sql: `${CUBE}."ESTIMATED_VALUE_FILTER"`,
      type: `string`
    },
    campaign_filter: {
      sql: `${CUBE}."CAMPAIGN_FILTER"`,
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
    territory_code: {
      sql: `${CUBE}."TERRITORY_CODE"`,
      type: `string`
    },
    action_taken_filter: {
      sql: `${CUBE}."ACTION_TAKEN_FILTER"`,
      type: `string`
    },
    salesperson_code: {
      sql: `${CUBE}."SALESPERSON_CODE"`,
      type: `string`
    },
    chances_of_success_filter: {
      sql: `${CUBE}."CHANCES_OF_SUCCESS_FILTER"`,
      type: `string`
    },
    fax_no: {
      sql: `${CUBE}."FAX_NO"`,
      type: `string`
    },
    no_of_job_responsibilities: {
      sql: `${CUBE}."NO_OF_JOB_RESPONSIBILITIES"`,
      type: `number`
    },
    registration_number: {
      sql: `${CUBE}."REGISTRATION_NUMBER"`,
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
    currency_code: {
      sql: `${CUBE}."CURRENCY_CODE"`,
      type: `string`
    },
    xrm_id: {
      sql: `${CUBE}."XRM_ID"`,
      type: `string`
    },
    sales_cycle_stage_filter: {
      sql: `${CUBE}."SALES_CYCLE_STAGE_FILTER"`,
      type: `string`
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
