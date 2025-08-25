cube(`company_information`, {
  sql_table: `"BUSINESS_CENTRAL"."COMPANY_INFORMATION"`,
  
  
  data_source: `default`,
  
  joins: {
    company: {
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    ship_to_upszone: {
      sql: `${CUBE}."SHIP_TO_UPSZONE"`,
      type: `string`
    },
    
    ship_to_county: {
      sql: `${CUBE}."SHIP_TO_COUNTY"`,
      type: `string`
    },
    
    brand_color_code: {
      sql: `${CUBE}."BRAND_COLOR_CODE"`,
      type: `string`
    },
    
    telex_no: {
      sql: `${CUBE}."TELEX_NO"`,
      type: `string`
    },
    
    post_code: {
      sql: `${CUBE}."POST_CODE"`,
      type: `string`
    },
    
    ups_shipper_id: {
      sql: `${CUBE}."UPS_SHIPPER_ID"`,
      type: `string`
    },
    
    county: {
      sql: `${CUBE}."COUNTY"`,
      type: `string`
    },
    
    ship_to_country_region_code: {
      sql: `${CUBE}."SHIP_TO_COUNTRY_REGION_CODE"`,
      type: `string`
    },
    
    swift_code: {
      sql: `${CUBE}."SWIFT_CODE"`,
      type: `string`
    },
    
    system_indicator_style: {
      sql: `${CUBE}."SYSTEM_INDICATOR_STYLE"`,
      type: `string`
    },
    
    name_2: {
      sql: `${CUBE}."NAME_2"`,
      type: `string`
    },
    
    primary_key: {
      sql: `${CUBE}."PRIMARY_KEY"`,
      type: `string`,
      primary_key: true
    },
    
    tax_scheme: {
      sql: `${CUBE}."TAX_SCHEME"`,
      type: `string`
    },
    
    giro_no: {
      sql: `${CUBE}."GIRO_NO"`,
      type: `string`
    },
    
    registration_no: {
      sql: `${CUBE}."REGISTRATION_NO"`,
      type: `string`
    },
    
    software_identification_code: {
      sql: `${CUBE}."SOFTWARE_IDENTIFICATION_CODE"`,
      type: `string`
    },
    
    state_inscription: {
      sql: `${CUBE}."STATE_INSCRIPTION"`,
      type: `string`
    },
    
    address: {
      sql: `${CUBE}."ADDRESS"`,
      type: `string`
    },
    
    tax_area_code: {
      sql: `${CUBE}."TAX_AREA_CODE"`,
      type: `string`
    },
    
    system_created_by: {
      sql: `${CUBE}."SYSTEM_CREATED_BY"`,
      type: `string`
    },
    
    picture: {
      sql: `${CUBE}."PICTURE"`,
      type: `string`
    },
    
    contact_person: {
      sql: `${CUBE}."CONTACT_PERSON"`,
      type: `string`
    },
    
    ship_to_name_2: {
      sql: `${CUBE}."SHIP_TO_NAME_2"`,
      type: `string`
    },
    
    alternative_language_code: {
      sql: `${CUBE}."ALTERNATIVE_LANGUAGE_CODE"`,
      type: `string`
    },
    
    name: {
      sql: `${CUBE}."NAME"`,
      type: `string`
    },
    
    rfc_number: {
      sql: `${CUBE}."RFC_NUMBER"`,
      type: `string`
    },
    
    bank_name: {
      sql: `${CUBE}."BANK_NAME"`,
      type: `string`
    },
    
    payment_routing_no: {
      sql: `${CUBE}."PAYMENT_ROUTING_NO"`,
      type: `string`
    },
    
    telex_answer_back: {
      sql: `${CUBE}."TELEX_ANSWER_BACK"`,
      type: `string`
    },
    
    system_indicator: {
      sql: `${CUBE}."SYSTEM_INDICATOR"`,
      type: `string`
    },
    
    tax_exemption_no: {
      sql: `${CUBE}."TAX_EXEMPTION_NO"`,
      type: `string`
    },
    
    use_glnin_electronic_document: {
      sql: `${CUBE}."USE_GLNIN_ELECTRONIC_DOCUMENT"`,
      type: `boolean`
    },
    
    fax_no: {
      sql: `${CUBE}."FAX_NO"`,
      type: `string`
    },
    
    responsibility_center: {
      sql: `${CUBE}."RESPONSIBILITY_CENTER"`,
      type: `string`
    },
    
    custom_system_indicator_text: {
      sql: `${CUBE}."CUSTOM_SYSTEM_INDICATOR_TEXT"`,
      type: `string`
    },
    
    ship_to_contact: {
      sql: `${CUBE}."SHIP_TO_CONTACT"`,
      type: `string`
    },
    
    e_mail: {
      sql: `${CUBE}."E_MAIL"`,
      type: `string`
    },
    
    bank_branch_no: {
      sql: `${CUBE}."BANK_BRANCH_NO"`,
      type: `string`
    },
    
    demo_company: {
      sql: `${CUBE}."DEMO_COMPANY"`,
      type: `boolean`
    },
    
    federal_idno: {
      sql: `${CUBE}."FEDERAL_IDNO"`,
      type: `string`
    },
    
    eori_number: {
      sql: `${CUBE}."EORI_NUMBER"`,
      type: `string`
    },
    
    ship_to_address: {
      sql: `${CUBE}."SHIP_TO_ADDRESS"`,
      type: `string`
    },
    
    picture_odata_media_read_link: {
      sql: `${CUBE}."PICTURE_ODATA_MEDIA_READ_LINK"`,
      type: `string`
    },
    
    ship_to_post_code: {
      sql: `${CUBE}."SHIP_TO_POST_CODE"`,
      type: `string`
    },
    
    ship_to_city: {
      sql: `${CUBE}."SHIP_TO_CITY"`,
      type: `string`
    },
    
    ship_to_address_2: {
      sql: `${CUBE}."SHIP_TO_ADDRESS_2"`,
      type: `string`
    },
    
    city: {
      sql: `${CUBE}."CITY"`,
      type: `string`
    },
    
    vat_registration_no: {
      sql: `${CUBE}."VAT_REGISTRATION_NO"`,
      type: `string`
    },
    
    phone_no_2: {
      sql: `${CUBE}."PHONE_NO_2"`,
      type: `string`
    },
    
    country_region_code: {
      sql: `${CUBE}."COUNTRY_REGION_CODE"`,
      type: `string`
    },
    
    sat_tax_regime_classification: {
      sql: `${CUBE}."SAT_TAX_REGIME_CLASSIFICATION"`,
      type: `string`
    },
    
    system_id: {
      sql: `${CUBE}."SYSTEM_ID"`,
      type: `string`
    },
    
    sat_postal_code: {
      sql: `${CUBE}."SAT_POSTAL_CODE"`,
      type: `string`
    },
    
    location_code: {
      sql: `${CUBE}."LOCATION_CODE"`,
      type: `string`
    },
    
    picture_odata_media_edit_link: {
      sql: `${CUBE}."PICTURE_ODATA_MEDIA_EDIT_LINK"`,
      type: `string`
    },
    
    cal_convergence_time_frame: {
      sql: `${CUBE}."CAL_CONVERGENCE_TIME_FRAME"`,
      type: `string`
    },
    
    brand_color_value: {
      sql: `${CUBE}."BRAND_COLOR_VALUE"`,
      type: `string`
    },
    
    bank_account_no: {
      sql: `${CUBE}."BANK_ACCOUNT_NO"`,
      type: `string`
    },
    
    iban: {
      sql: `${CUBE}."IBAN"`,
      type: `string`
    },
    
    allow_blank_payment_info: {
      sql: `${CUBE}."ALLOW_BLANK_PAYMENT_INFO"`,
      type: `boolean`
    },
    
    qst_registration_no: {
      sql: `${CUBE}."QST_REGISTRATION_NO"`,
      type: `string`
    },
    
    check_avail_period_calc: {
      sql: `${CUBE}."CHECK_AVAIL_PERIOD_CALC"`,
      type: `string`
    },
    
    check_avail_time_bucket: {
      sql: `${CUBE}."CHECK_AVAIL_TIME_BUCKET"`,
      type: `string`
    },
    
    provincial_tax_area_code: {
      sql: `${CUBE}."PROVINCIAL_TAX_AREA_CODE"`,
      type: `string`
    },
    
    system_modified_by: {
      sql: `${CUBE}."SYSTEM_MODIFIED_BY"`,
      type: `string`
    },
    
    curp_no: {
      sql: `${CUBE}."CURP_NO"`,
      type: `string`
    },
    
    industrial_classification: {
      sql: `${CUBE}."INDUSTRIAL_CLASSIFICATION"`,
      type: `string`
    },
    
    gln: {
      sql: `${CUBE}."GLN"`,
      type: `string`
    },
    
    phone_no: {
      sql: `${CUBE}."PHONE_NO"`,
      type: `string`
    },
    
    ship_to_name: {
      sql: `${CUBE}."SHIP_TO_NAME"`,
      type: `string`
    },
    
    base_calendar_code: {
      sql: `${CUBE}."BASE_CALENDAR_CODE"`,
      type: `string`
    },
    
    customs_permit_no: {
      sql: `${CUBE}."CUSTOMS_PERMIT_NO"`,
      type: `string`
    },
    
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    },
    
    address_2: {
      sql: `${CUBE}."ADDRESS_2"`,
      type: `string`
    },
    
    created_date_time: {
      sql: `${CUBE}."CREATED_DATE_TIME"`,
      type: `time`
    },
    
    system_created_at: {
      sql: `${CUBE}."SYSTEM_CREATED_AT"`,
      type: `time`
    },
    
    customs_permit_date: {
      sql: `${CUBE}."CUSTOMS_PERMIT_DATE"`,
      type: `time`
    },
    
    system_modified_at: {
      sql: `${CUBE}."SYSTEM_MODIFIED_AT"`,
      type: `time`
    },
    
    picture_last_mod_date_time: {
      sql: `${CUBE}."PICTURE_LAST_MOD_DATE_TIME"`,
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
