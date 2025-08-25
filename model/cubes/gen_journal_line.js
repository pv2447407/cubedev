cube(`gen_journal_line`, {
  sql_table: `"BUSINESS_CENTRAL"."GEN_JOURNAL_LINE"`,
  
  data_source: `default`,
  
  joins: {
    company: {
      sql: `${CUBE}."COMPANY_ID" = ${company}."ID"`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    job_queue_status: {
      sql: `${CUBE}."JOB_QUEUE_STATUS"`,
      type: `string`
    },
    
    message_to_recipient: {
      sql: `${CUBE}."MESSAGE_TO_RECIPIENT"`,
      type: `string`
    },
    
    bal_tax_group_code: {
      sql: `${CUBE}."BAL_TAX_GROUP_CODE"`,
      type: `string`
    },
    
    remit_to_code: {
      sql: `${CUBE}."REMIT_TO_CODE"`,
      type: `string`
    },
    
    job_line_discount_amount: {
      sql: `${CUBE}."JOB_LINE_DISCOUNT_AMOUNT"`,
      type: `string`
    },
    
    tax_area_code: {
      sql: `${CUBE}."TAX_AREA_CODE"`,
      type: `string`
    },
    
    job_no: {
      sql: `${CUBE}."JOB_NO"`,
      type: `string`
    },
    
    tax_liable: {
      sql: `${CUBE}."TAX_LIABLE"`,
      type: `boolean`
    },
    
    amount: {
      sql: `${CUBE}."AMOUNT"`,
      type: `string`
    },
    
    check_transmitted: {
      sql: `${CUBE}."CHECK_TRANSMITTED"`,
      type: `boolean`
    },
    
    bal_vatamount_lcy: {
      sql: `${CUBE}."BAL_VATAMOUNT_LCY"`,
      type: `string`
    },
    
    source_type: {
      sql: `${CUBE}."SOURCE_TYPE"`,
      type: `string`
    },
    
    print_posted_documents: {
      sql: `${CUBE}."PRINT_POSTED_DOCUMENTS"`,
      type: `boolean`
    },
    
    sales_purch_lcy: {
      sql: `${CUBE}."SALES_PURCH_LCY"`,
      type: `string`
    },
    
    applies_to_ext_doc_no: {
      sql: `${CUBE}."APPLIES_TO_EXT_DOC_NO"`,
      type: `string`
    },
    
    account_no: {
      sql: `${CUBE}."ACCOUNT_NO"`,
      type: `string`
    },
    
    insurance_no: {
      sql: `${CUBE}."INSURANCE_NO"`,
      type: `string`
    },
    
    job_unit_cost: {
      sql: `${CUBE}."JOB_UNIT_COST"`,
      type: `string`
    },
    
    non_deductible_vatbase_acy: {
      sql: `${CUBE}."NON_DEDUCTIBLE_VATBASE_ACY"`,
      type: `string`
    },
    
    allocated_amt_lcy: {
      sql: `${CUBE}."ALLOCATED_AMT_LCY"`,
      type: `string`
    },
    
    foreign_exchange_indicator: {
      sql: `${CUBE}."FOREIGN_EXCHANGE_INDICATOR"`,
      type: `string`
    },
    
    bal_vatbase_amount_lcy: {
      sql: `${CUBE}."BAL_VATBASE_AMOUNT_LCY"`,
      type: `string`
    },
    
    applies_to_doc_type: {
      sql: `${CUBE}."APPLIES_TO_DOC_TYPE"`,
      type: `string`
    },
    
    bal_gen_posting_type: {
      sql: `${CUBE}."BAL_GEN_POSTING_TYPE"`,
      type: `string`
    },
    
    allocation_account_no: {
      sql: `${CUBE}."ALLOCATION_ACCOUNT_NO"`,
      type: `string`
    },
    
    depr_until_faposting_date: {
      sql: `${CUBE}."DEPR_UNTIL_FAPOSTING_DATE"`,
      type: `boolean`
    },
    
    job_total_cost_lcy: {
      sql: `${CUBE}."JOB_TOTAL_COST_LCY"`,
      type: `string`
    },
    
    balance_lcy: {
      sql: `${CUBE}."BALANCE_LCY"`,
      type: `string`
    },
    
    job_line_disc_amount_lcy: {
      sql: `${CUBE}."JOB_LINE_DISC_AMOUNT_LCY"`,
      type: `string`
    },
    
    direct_debit_mandate_id: {
      sql: `${CUBE}."DIRECT_DEBIT_MANDATE_ID"`,
      type: `string`
    },
    
    journal_template_name: {
      sql: `${CUBE}."JOURNAL_TEMPLATE_NAME"`,
      type: `string`
    },
    
    source_currency_code: {
      sql: `${CUBE}."SOURCE_CURRENCY_CODE"`,
      type: `string`
    },
    
    deferral_code: {
      sql: `${CUBE}."DEFERRAL_CODE"`,
      type: `string`
    },
    
    source_currency_amount: {
      sql: `${CUBE}."SOURCE_CURRENCY_AMOUNT"`,
      type: `string`
    },
    
    exported_to_payment_file: {
      sql: `${CUBE}."EXPORTED_TO_PAYMENT_FILE"`,
      type: `boolean`
    },
    
    contact_graph_id: {
      sql: `${CUBE}."CONTACT_GRAPH_ID"`,
      type: `string`
    },
    
    payment_related_information_1: {
      sql: `${CUBE}."PAYMENT_RELATED_INFORMATION_1"`,
      type: `string`
    },
    
    depr_acquisition_cost: {
      sql: `${CUBE}."DEPR_ACQUISITION_COST"`,
      type: `boolean`
    },
    
    vendor_id: {
      sql: `${CUBE}."VENDOR_ID"`,
      type: `string`
    },
    
    bal_gen_bus_posting_group: {
      sql: `${CUBE}."BAL_GEN_BUS_POSTING_GROUP"`,
      type: `string`
    },
    
    currency_code: {
      sql: `${CUBE}."CURRENCY_CODE"`,
      type: `string`
    },
    
    posting_group: {
      sql: `${CUBE}."POSTING_GROUP"`,
      type: `string`
    },
    
    payment_discount: {
      sql: `${CUBE}."PAYMENT_DISCOUNT"`,
      type: `string`
    },
    
    fa_posting_type: {
      sql: `${CUBE}."FA_POSTING_TYPE"`,
      type: `string`
    },
    
    vat_bus_posting_group: {
      sql: `${CUBE}."VAT_BUS_POSTING_GROUP"`,
      type: `string`
    },
    
    fa_add_currency_factor: {
      sql: `${CUBE}."FA_ADD_CURRENCY_FACTOR"`,
      type: `string`
    },
    
    bal_tax_area_code: {
      sql: `${CUBE}."BAL_TAX_AREA_CODE"`,
      type: `string`
    },
    
    copy_vatsetup_to_jnl_lines: {
      sql: `${CUBE}."COPY_VATSETUP_TO_JNL_LINES"`,
      type: `boolean`
    },
    
    non_deductible_vat: {
      sql: `${CUBE}."NON_DEDUCTIBLE_VAT"`,
      type: `string`
    },
    
    applies_to_invoice_id: {
      sql: `${CUBE}."APPLIES_TO_INVOICE_ID"`,
      type: `string`
    },
    
    secondary_ofacscr_indicator: {
      sql: `${CUBE}."SECONDARY_OFACSCR_INDICATOR"`,
      type: `string`
    },
    
    external_document_no: {
      sql: `${CUBE}."EXTERNAL_DOCUMENT_NO"`,
      type: `string`
    },
    
    bal_non_ded_vatamount_lcy: {
      sql: `${CUBE}."BAL_NON_DED_VATAMOUNT_LCY"`,
      type: `string`
    },
    
    use_duplication_list: {
      sql: `${CUBE}."USE_DUPLICATION_LIST"`,
      type: `boolean`
    },
    
    bal_non_ded_vatbase: {
      sql: `${CUBE}."BAL_NON_DED_VATBASE"`,
      type: `string`
    },
    
    recurring_frequency: {
      sql: `${CUBE}."RECURRING_FREQUENCY"`,
      type: `string`
    },
    
    job_quantity: {
      sql: `${CUBE}."JOB_QUANTITY"`,
      type: `string`
    },
    
    applies_to_doc_no: {
      sql: `${CUBE}."APPLIES_TO_DOC_NO"`,
      type: `string`
    },
    
    bill_to_pay_to_no: {
      sql: `${CUBE}."BILL_TO_PAY_TO_NO"`,
      type: `string`
    },
    
    foreign_exchange_ref_indicator: {
      sql: `${CUBE}."FOREIGN_EXCHANGE_REF_INDICATOR"`,
      type: `string`
    },
    
    non_deductible_vatbase_lcy: {
      sql: `${CUBE}."NON_DEDUCTIBLE_VATBASE_LCY"`,
      type: `string`
    },
    
    salespers_purch_code: {
      sql: `${CUBE}."SALESPERS_PURCH_CODE"`,
      type: `string`
    },
    
    bal_non_ded_vat: {
      sql: `${CUBE}."BAL_NON_DED_VAT"`,
      type: `string`
    },
    
    journal_batch_id: {
      sql: `${CUBE}."JOURNAL_BATCH_ID"`,
      type: `string`
    },
    
    gateway_operator_ofacscr_inc: {
      sql: `${CUBE}."GATEWAY_OPERATOR_OFACSCR_INC"`,
      type: `string`
    },
    
    job_unit_price: {
      sql: `${CUBE}."JOB_UNIT_PRICE"`,
      type: `string`
    },
    
    job_remaining_qty: {
      sql: `${CUBE}."JOB_REMAINING_QTY"`,
      type: `string`
    },
    
    company_id: {
      sql: `${CUBE}."COMPANY_ID"`,
      type: `string`
    },
    
    fa_reclassification_entry: {
      sql: `${CUBE}."FA_RECLASSIFICATION_ENTRY"`,
      type: `boolean`
    },
    
    receiv_dfiidqualifier: {
      sql: `${CUBE}."RECEIV_DFIIDQUALIFIER"`,
      type: `string`
    },
    
    bal_vatbus_posting_group: {
      sql: `${CUBE}."BAL_VATBUS_POSTING_GROUP"`,
      type: `string`
    },
    
    your_reference: {
      sql: `${CUBE}."YOUR_REFERENCE"`,
      type: `string`
    },
    
    ic_account_no: {
      sql: `${CUBE}."IC_ACCOUNT_NO"`,
      type: `string`
    },
    
    vat_amount_lcy: {
      sql: `${CUBE}."VAT_AMOUNT_LCY"`,
      type: `string`
    },
    
    correction: {
      sql: `${CUBE}."CORRECTION"`,
      type: `boolean`
    },
    
    journal_batch_name: {
      sql: `${CUBE}."JOURNAL_BATCH_NAME"`,
      type: `string`
    },
    
    transaction_information: {
      sql: `${CUBE}."TRANSACTION_INFORMATION"`,
      type: `string`
    },
    
    job_currency_code: {
      sql: `${CUBE}."JOB_CURRENCY_CODE"`,
      type: `string`
    },
    
    vat_base_discount: {
      sql: `${CUBE}."VAT_BASE_DISCOUNT"`,
      type: `string`
    },
    
    system_modified_by: {
      sql: `${CUBE}."SYSTEM_MODIFIED_BY"`,
      type: `string`
    },
    
    non_deductible_vatdiff: {
      sql: `${CUBE}."NON_DEDUCTIBLE_VATDIFF"`,
      type: `string`
    },
    
    source_curr_vatbase_amount: {
      sql: `${CUBE}."SOURCE_CURR_VATBASE_AMOUNT"`,
      type: `string`
    },
    
    fa_glaccount_no: {
      sql: `${CUBE}."FA_GLACCOUNT_NO"`,
      type: `string`
    },
    
    has_payment_export_error: {
      sql: `${CUBE}."HAS_PAYMENT_EXPORT_ERROR"`,
      type: `boolean`
    },
    
    reverse_date_calculation: {
      sql: `${CUBE}."REVERSE_DATE_CALCULATION"`,
      type: `string`
    },
    
    ship_to_order_address_code: {
      sql: `${CUBE}."SHIP_TO_ORDER_ADDRESS_CODE"`,
      type: `string`
    },
    
    keep_description: {
      sql: `${CUBE}."KEEP_DESCRIPTION"`,
      type: `boolean`
    },
    
    company_entry_description: {
      sql: `${CUBE}."COMPANY_ENTRY_DESCRIPTION"`,
      type: `string`
    },
    
    salvage_value: {
      sql: `${CUBE}."SALVAGE_VALUE"`,
      type: `string`
    },
    
    profit_lcy: {
      sql: `${CUBE}."PROFIT_LCY"`,
      type: `string`
    },
    
    bal_gen_prod_posting_group: {
      sql: `${CUBE}."BAL_GEN_PROD_POSTING_GROUP"`,
      type: `string`
    },
    
    system_created_by: {
      sql: `${CUBE}."SYSTEM_CREATED_BY"`,
      type: `string`
    },
    
    shortcut_dimension_1_code: {
      sql: `${CUBE}."SHORTCUT_DIMENSION_1_CODE"`,
      type: `string`
    },
    
    index_entry: {
      sql: `${CUBE}."INDEX_ENTRY"`,
      type: `boolean`
    },
    
    eu_3_party_trade: {
      sql: `${CUBE}."EU_3_PARTY_TRADE"`,
      type: `boolean`
    },
    
    financial_void: {
      sql: `${CUBE}."FINANCIAL_VOID"`,
      type: `boolean`
    },
    
    foreign_exchange_reference: {
      sql: `${CUBE}."FOREIGN_EXCHANGE_REFERENCE"`,
      type: `string`
    },
    
    transaction_code: {
      sql: `${CUBE}."TRANSACTION_CODE"`,
      type: `string`
    },
    
    prepayment: {
      sql: `${CUBE}."PREPAYMENT"`,
      type: `boolean`
    },
    
    job_line_amount: {
      sql: `${CUBE}."JOB_LINE_AMOUNT"`,
      type: `string`
    },
    
    on_hold: {
      sql: `${CUBE}."ON_HOLD"`,
      type: `string`
    },
    
    bal_use_tax: {
      sql: `${CUBE}."BAL_USE_TAX"`,
      type: `boolean`
    },
    
    additional_currency_posting: {
      sql: `${CUBE}."ADDITIONAL_CURRENCY_POSTING"`,
      type: `string`
    },
    
    bal_account_no: {
      sql: `${CUBE}."BAL_ACCOUNT_NO"`,
      type: `string`
    },
    
    selected_alloc_account_no: {
      sql: `${CUBE}."SELECTED_ALLOC_ACCOUNT_NO"`,
      type: `string`
    },
    
    job_unit_price_lcy: {
      sql: `${CUBE}."JOB_UNIT_PRICE_LCY"`,
      type: `string`
    },
    
    check_exported: {
      sql: `${CUBE}."CHECK_EXPORTED"`,
      type: `boolean`
    },
    
    origin_dfiidqualifier: {
      sql: `${CUBE}."ORIGIN_DFIIDQUALIFIER"`,
      type: `string`
    },
    
    depreciation_book_code: {
      sql: `${CUBE}."DEPRECIATION_BOOK_CODE"`,
      type: `string`
    },
    
    document_no: {
      sql: `${CUBE}."DOCUMENT_NO"`,
      type: `string`
    },
    
    payment_reference: {
      sql: `${CUBE}."PAYMENT_REFERENCE"`,
      type: `string`
    },
    
    job_task_no: {
      sql: `${CUBE}."JOB_TASK_NO"`,
      type: `string`
    },
    
    source_code: {
      sql: `${CUBE}."SOURCE_CODE"`,
      type: `string`
    },
    
    orig_pmt_disc_possible: {
      sql: `${CUBE}."ORIG_PMT_DISC_POSSIBLE"`,
      type: `string`
    },
    
    job_line_discount: {
      sql: `${CUBE}."JOB_LINE_DISCOUNT"`,
      type: `string`
    },
    
    allow_zero_amount_posting: {
      sql: `${CUBE}."ALLOW_ZERO_AMOUNT_POSTING"`,
      type: `boolean`
    },
    
    account_id: {
      sql: `${CUBE}."ACCOUNT_ID"`,
      type: `string`
    },
    
    inv_discount_lcy: {
      sql: `${CUBE}."INV_DISCOUNT_LCY"`,
      type: `string`
    },
    
    description: {
      sql: `${CUBE}."DESCRIPTION"`,
      type: `string`
    },
    
    campaign_no: {
      sql: `${CUBE}."CAMPAIGN_NO"`,
      type: `string`
    },
    
    bal_vat: {
      sql: `${CUBE}."BAL_VAT"`,
      type: `string`
    },
    
    tax_exemption_no: {
      sql: `${CUBE}."TAX_EXEMPTION_NO"`,
      type: `string`
    },
    
    non_deductible_vatamount: {
      sql: `${CUBE}."NON_DEDUCTIBLE_VATAMOUNT"`,
      type: `string`
    },
    
    payment_method_id: {
      sql: `${CUBE}."PAYMENT_METHOD_ID"`,
      type: `string`
    },
    
    comment: {
      sql: `${CUBE}."COMMENT"`,
      type: `string`
    },
    
    debit_amount: {
      sql: `${CUBE}."DEBIT_AMOUNT"`,
      type: `string`
    },
    
    prod_order_no: {
      sql: `${CUBE}."PROD_ORDER_NO"`,
      type: `string`
    },
    
    recurring_method: {
      sql: `${CUBE}."RECURRING_METHOD"`,
      type: `string`
    },
    
    bal_vatdifference: {
      sql: `${CUBE}."BAL_VATDIFFERENCE"`,
      type: `string`
    },
    
    ic_account_type: {
      sql: `${CUBE}."IC_ACCOUNT_TYPE"`,
      type: `string`
    },
    
    job_unit_of_measure_code: {
      sql: `${CUBE}."JOB_UNIT_OF_MEASURE_CODE"`,
      type: `string`
    },
    
    bal_non_ded_vatamount: {
      sql: `${CUBE}."BAL_NON_DED_VATAMOUNT"`,
      type: `string`
    },
    
    currency_factor: {
      sql: `${CUBE}."CURRENCY_FACTOR"`,
      type: `string`
    },
    
    job_unit_cost_lcy: {
      sql: `${CUBE}."JOB_UNIT_COST_LCY"`,
      type: `string`
    },
    
    payment_terms_code: {
      sql: `${CUBE}."PAYMENT_TERMS_CODE"`,
      type: `string`
    },
    
    creditor_no: {
      sql: `${CUBE}."CREDITOR_NO"`,
      type: `string`
    },
    
    export_file_name: {
      sql: `${CUBE}."EXPORT_FILE_NAME"`,
      type: `string`
    },
    
    quantity: {
      sql: `${CUBE}."QUANTITY"`,
      type: `string`
    },
    
    job_currency_factor: {
      sql: `${CUBE}."JOB_CURRENCY_FACTOR"`,
      type: `string`
    },
    
    tax_group_code: {
      sql: `${CUBE}."TAX_GROUP_CODE"`,
      type: `string`
    },
    
    credit_amount: {
      sql: `${CUBE}."CREDIT_AMOUNT"`,
      type: `string`
    },
    
    reversing_entry: {
      sql: `${CUBE}."REVERSING_ENTRY"`,
      type: `boolean`
    },
    
    bal_vatamount: {
      sql: `${CUBE}."BAL_VATAMOUNT"`,
      type: `string`
    },
    
    shortcut_dimension_2_code: {
      sql: `${CUBE}."SHORTCUT_DIMENSION_2_CODE"`,
      type: `string`
    },
    
    bal_vatprod_posting_group: {
      sql: `${CUBE}."BAL_VATPROD_POSTING_GROUP"`,
      type: `string`
    },
    
    ic_partner_code: {
      sql: `${CUBE}."IC_PARTNER_CODE"`,
      type: `string`
    },
    
    job_total_price_lcy: {
      sql: `${CUBE}."JOB_TOTAL_PRICE_LCY"`,
      type: `string`
    },
    
    bal_vatcalculation_type: {
      sql: `${CUBE}."BAL_VATCALCULATION_TYPE"`,
      type: `string`
    },
    
    ste_transaction_id: {
      sql: `${CUBE}."STE_TRANSACTION_ID"`,
      type: `string`
    },
    
    alloc_acc_modified_by_user: {
      sql: `${CUBE}."ALLOC_ACC_MODIFIED_BY_USER"`,
      type: `boolean`
    },
    
    sell_to_buy_from_no: {
      sql: `${CUBE}."SELL_TO_BUY_FROM_NO"`,
      type: `string`
    },
    
    non_deductible_vatamount_acy: {
      sql: `${CUBE}."NON_DEDUCTIBLE_VATAMOUNT_ACY"`,
      type: `string`
    },
    
    vat: {
      sql: `${CUBE}."VAT"`,
      type: `string`
    },
    
    linked_system_id: {
      sql: `${CUBE}."LINKED_SYSTEM_ID"`,
      type: `string`
    },
    
    bal_account_type: {
      sql: `${CUBE}."BAL_ACCOUNT_TYPE"`,
      type: `string`
    },
    
    vat_prod_posting_group: {
      sql: `${CUBE}."VAT_PROD_POSTING_GROUP"`,
      type: `string`
    },
    
    bal_vatbase_amount: {
      sql: `${CUBE}."BAL_VATBASE_AMOUNT"`,
      type: `string`
    },
    
    gen_bus_posting_group: {
      sql: `${CUBE}."GEN_BUS_POSTING_GROUP"`,
      type: `string`
    },
    
    job_line_amount_lcy: {
      sql: `${CUBE}."JOB_LINE_AMOUNT_LCY"`,
      type: `string`
    },
    
    vat_posting: {
      sql: `${CUBE}."VAT_POSTING"`,
      type: `string`
    },
    
    recipient_bank_account: {
      sql: `${CUBE}."RECIPIENT_BANK_ACCOUNT"`,
      type: `string`
    },
    
    allow_application: {
      sql: `${CUBE}."ALLOW_APPLICATION"`,
      type: `boolean`
    },
    
    vat_registration_no: {
      sql: `${CUBE}."VAT_REGISTRATION_NO"`,
      type: `string`
    },
    
    job_queue_entry_id: {
      sql: `${CUBE}."JOB_QUEUE_ENTRY_ID"`,
      type: `string`
    },
    
    system_created_entry: {
      sql: `${CUBE}."SYSTEM_CREATED_ENTRY"`,
      type: `boolean`
    },
    
    job_total_price: {
      sql: `${CUBE}."JOB_TOTAL_PRICE"`,
      type: `string`
    },
    
    applied_automatically: {
      sql: `${CUBE}."APPLIED_AUTOMATICALLY"`,
      type: `boolean`
    },
    
    vat_base_amount_lcy: {
      sql: `${CUBE}."VAT_BASE_AMOUNT_LCY"`,
      type: `string`
    },
    
    gen_prod_posting_group: {
      sql: `${CUBE}."GEN_PROD_POSTING_GROUP"`,
      type: `string`
    },
    
    job_line_type: {
      sql: `${CUBE}."JOB_LINE_TYPE"`,
      type: `string`
    },
    
    use_tax: {
      sql: `${CUBE}."USE_TAX"`,
      type: `boolean`
    },
    
    bal_non_ded_vatbase_lcy: {
      sql: `${CUBE}."BAL_NON_DED_VATBASE_LCY"`,
      type: `string`
    },
    
    check_printed: {
      sql: `${CUBE}."CHECK_PRINTED"`,
      type: `boolean`
    },
    
    pending_approval: {
      sql: `${CUBE}."PENDING_APPROVAL"`,
      type: `boolean`
    },
    
    ic_direction: {
      sql: `${CUBE}."IC_DIRECTION"`,
      type: `string`
    },
    
    transaction_type_code: {
      sql: `${CUBE}."TRANSACTION_TYPE_CODE"`,
      type: `string`
    },
    
    orig_pmt_disc_possible_lcy: {
      sql: `${CUBE}."ORIG_PMT_DISC_POSSIBLE_LCY"`,
      type: `string`
    },
    
    non_deductible_vatbase: {
      sql: `${CUBE}."NON_DEDUCTIBLE_VATBASE"`,
      type: `string`
    },
    
    vat_calculation_type: {
      sql: `${CUBE}."VAT_CALCULATION_TYPE"`,
      type: `string`
    },
    
    non_deductible_vatamount_lcy: {
      sql: `${CUBE}."NON_DEDUCTIBLE_VATAMOUNT_LCY"`,
      type: `string`
    },
    
    country_region_code: {
      sql: `${CUBE}."COUNTRY_REGION_CODE"`,
      type: `string`
    },
    
    balance_account_id: {
      sql: `${CUBE}."BALANCE_ACCOUNT_ID"`,
      type: `string`
    },
    
    job_total_cost: {
      sql: `${CUBE}."JOB_TOTAL_COST"`,
      type: `string`
    },
    
    payment_method_code: {
      sql: `${CUBE}."PAYMENT_METHOD_CODE"`,
      type: `string`
    },
    
    business_unit_code: {
      sql: `${CUBE}."BUSINESS_UNIT_CODE"`,
      type: `string`
    },
    
    source_no: {
      sql: `${CUBE}."SOURCE_NO"`,
      type: `string`
    },
    
    applies_to_id: {
      sql: `${CUBE}."APPLIES_TO_ID"`,
      type: `string`
    },
    
    bank_payment_type: {
      sql: `${CUBE}."BANK_PAYMENT_TYPE"`,
      type: `string`
    },
    
    system_id: {
      sql: `${CUBE}."SYSTEM_ID"`,
      type: `string`,
      primary_key: true
    },
    
    bal_tax_liable: {
      sql: `${CUBE}."BAL_TAX_LIABLE"`,
      type: `boolean`
    },
    
    document_type: {
      sql: `${CUBE}."DOCUMENT_TYPE"`,
      type: `string`
    },
    
    gst_hst: {
      sql: `${CUBE}."GST_HST"`,
      type: `string`
    },
    
    tax_jurisdiction_code: {
      sql: `${CUBE}."TAX_JURISDICTION_CODE"`,
      type: `string`
    },
    
    reason_code: {
      sql: `${CUBE}."REASON_CODE"`,
      type: `string`
    },
    
    payment_related_information_2: {
      sql: `${CUBE}."PAYMENT_RELATED_INFORMATION_2"`,
      type: `string`
    },
    
    maintenance_code: {
      sql: `${CUBE}."MAINTENANCE_CODE"`,
      type: `string`
    },
    
    duplicate_in_depreciation_book: {
      sql: `${CUBE}."DUPLICATE_IN_DEPRECIATION_BOOK"`,
      type: `string`
    },
    
    gen_posting_type: {
      sql: `${CUBE}."GEN_POSTING_TYPE"`,
      type: `string`
    },
    
    vat_amount: {
      sql: `${CUBE}."VAT_AMOUNT"`,
      type: `string`
    },
    
    tax_type: {
      sql: `${CUBE}."TAX_TYPE"`,
      type: `string`
    },
    
    customer_id: {
      sql: `${CUBE}."CUSTOMER_ID"`,
      type: `string`
    },
    
    amount_lcy: {
      sql: `${CUBE}."AMOUNT_LCY"`,
      type: `string`
    },
    
    account_type: {
      sql: `${CUBE}."ACCOUNT_TYPE"`,
      type: `string`
    },
    
    budgeted_fano: {
      sql: `${CUBE}."BUDGETED_FANO"`,
      type: `string`
    },
    
    vat_base_before_pmt_disc: {
      sql: `${CUBE}."VAT_BASE_BEFORE_PMT_DISC"`,
      type: `string`
    },
    
    vat_base_amount: {
      sql: `${CUBE}."VAT_BASE_AMOUNT"`,
      type: `string`
    },
    
    vat_difference: {
      sql: `${CUBE}."VAT_DIFFERENCE"`,
      type: `string`
    },
    
    payer_information: {
      sql: `${CUBE}."PAYER_INFORMATION"`,
      type: `string`
    },
    
    posting_no_series: {
      sql: `${CUBE}."POSTING_NO_SERIES"`,
      type: `string`
    },
    
    source_curr_vatamount: {
      sql: `${CUBE}."SOURCE_CURR_VATAMOUNT"`,
      type: `string`
    },
    
    system_created_at: {
      sql: `${CUBE}."SYSTEM_CREATED_AT"`,
      type: `time`
    },
    
    pmt_discount_date: {
      sql: `${CUBE}."PMT_DISCOUNT_DATE"`,
      type: `time`
    },
    
    system_modified_at: {
      sql: `${CUBE}."SYSTEM_MODIFIED_AT"`,
      type: `time`
    },
    
    due_date: {
      sql: `${CUBE}."DUE_DATE"`,
      type: `time`
    },
    
    invoice_received_date: {
      sql: `${CUBE}."INVOICE_RECEIVED_DATE"`,
      type: `time`
    },
    
    document_date: {
      sql: `${CUBE}."DOCUMENT_DATE"`,
      type: `time`
    },
    
    last_modified_date_time: {
      sql: `${CUBE}."LAST_MODIFIED_DATE_TIME"`,
      type: `time`
    },
    
    fa_posting_date: {
      sql: `${CUBE}."FA_POSTING_DATE"`,
      type: `time`
    },
    
    vat_reporting_date: {
      sql: `${CUBE}."VAT_REPORTING_DATE"`,
      type: `time`
    },
    
    expiration_date: {
      sql: `${CUBE}."EXPIRATION_DATE"`,
      type: `time`
    },
    
    posting_date: {
      sql: `${CUBE}."POSTING_DATE"`,
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
