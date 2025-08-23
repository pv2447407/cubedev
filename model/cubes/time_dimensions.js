// Time-Based Dimensions for Financial Analysis

// Enhanced GL Entry Time Dimensions
cube(`g_l_entry_time`, {
  extends: g_l_entry,
  
  dimensions: {
    // Posting Date Hierarchies
    posting_date: {
      sql: `${CUBE}."POSTING_DATE"`,
      type: `time`
    },
    
    posting_year: {
      sql: `EXTRACT(YEAR FROM ${CUBE}."POSTING_DATE")`,
      type: `number`,
      title: `Posting Year`
    },
    
    posting_quarter: {
      sql: `'Q' || EXTRACT(QUARTER FROM ${CUBE}."POSTING_DATE")`,
      type: `string`,
      title: `Posting Quarter`
    },
    
    posting_month: {
      sql: `TO_CHAR(${CUBE}."POSTING_DATE", 'YYYY-MM')`,
      type: `string`,
      title: `Posting Month`
    },
    
    posting_month_name: {
      sql: `TO_CHAR(${CUBE}."POSTING_DATE", 'Month')`,
      type: `string`,
      title: `Posting Month Name`
    },
    
    posting_week: {
      sql: `TO_CHAR(${CUBE}."POSTING_DATE", 'YYYY-"W"IW')`,
      type: `string`,
      title: `Posting Week`
    },
    
    posting_day_of_week: {
      sql: `TO_CHAR(${CUBE}."POSTING_DATE", 'Day')`,
      type: `string`,
      title: `Posting Day of Week`
    },
    
    posting_day_of_month: {
      sql: `EXTRACT(DAY FROM ${CUBE}."POSTING_DATE")`,
      type: `number`,
      title: `Posting Day of Month`
    },
    
    // Document Date Hierarchies
    document_date: {
      sql: `${CUBE}."DOCUMENT_DATE"`,
      type: `time`
    },
    
    document_year: {
      sql: `EXTRACT(YEAR FROM ${CUBE}."DOCUMENT_DATE")`,
      type: `number`,
      title: `Document Year`
    },
    
    document_quarter: {
      sql: `'Q' || EXTRACT(QUARTER FROM ${CUBE}."DOCUMENT_DATE")`,
      type: `string`,
      title: `Document Quarter`
    },
    
    document_month: {
      sql: `TO_CHAR(${CUBE}."DOCUMENT_DATE", 'YYYY-MM')`,
      type: `string`,
      title: `Document Month`
    },
    
    // Fiscal Period Dimensions
    fiscal_year: {
      sql: `
        CASE 
          WHEN EXTRACT(MONTH FROM ${CUBE}."POSTING_DATE") >= 7 
          THEN EXTRACT(YEAR FROM ${CUBE}."POSTING_DATE") + 1
          ELSE EXTRACT(YEAR FROM ${CUBE}."POSTING_DATE")
        END
      `,
      type: `number`,
      title: `Fiscal Year`,
      description: `Fiscal year assuming July 1 start`
    },
    
    fiscal_quarter: {
      sql: `
        CASE 
          WHEN EXTRACT(MONTH FROM ${CUBE}."POSTING_DATE") IN (7,8,9) THEN 'FQ1'
          WHEN EXTRACT(MONTH FROM ${CUBE}."POSTING_DATE") IN (10,11,12) THEN 'FQ2'
          WHEN EXTRACT(MONTH FROM ${CUBE}."POSTING_DATE") IN (1,2,3) THEN 'FQ3'
          WHEN EXTRACT(MONTH FROM ${CUBE}."POSTING_DATE") IN (4,5,6) THEN 'FQ4'
        END
      `,
      type: `string`,
      title: `Fiscal Quarter`
    },
    
    fiscal_period: {
      sql: `
        CASE 
          WHEN EXTRACT(MONTH FROM ${CUBE}."POSTING_DATE") >= 7 
          THEN 'FY' || (EXTRACT(YEAR FROM ${CUBE}."POSTING_DATE") + 1) || '-P' || LPAD((EXTRACT(MONTH FROM ${CUBE}."POSTING_DATE") - 6)::TEXT, 2, '0')
          ELSE 'FY' || EXTRACT(YEAR FROM ${CUBE}."POSTING_DATE") || '-P' || LPAD((EXTRACT(MONTH FROM ${CUBE}."POSTING_DATE") + 6)::TEXT, 2, '0')
        END
      `,
      type: `string`,
      title: `Fiscal Period`
    },
    
    // Time-based Analysis Dimensions
    days_since_posting: {
      sql: `CURRENT_DATE - DATE(${CUBE}."POSTING_DATE")`,
      type: `number`,
      title: `Days Since Posting`
    },
    
    is_current_month: {
      sql: `
        CASE 
          WHEN TO_CHAR(${CUBE}."POSTING_DATE", 'YYYY-MM') = TO_CHAR(CURRENT_DATE, 'YYYY-MM')
          THEN 'Yes' 
          ELSE 'No' 
        END
      `,
      type: `string`,
      title: `Is Current Month`
    },
    
    is_current_year: {
      sql: `
        CASE 
          WHEN EXTRACT(YEAR FROM ${CUBE}."POSTING_DATE") = EXTRACT(YEAR FROM CURRENT_DATE)
          THEN 'Yes' 
          ELSE 'No' 
        END
      `,
      type: `string`,
      title: `Is Current Year`
    },
    
    is_current_fiscal_year: {
      sql: `
        CASE 
          WHEN (
            CASE 
              WHEN EXTRACT(MONTH FROM ${CUBE}."POSTING_DATE") >= 7 
              THEN EXTRACT(YEAR FROM ${CUBE}."POSTING_DATE") + 1
              ELSE EXTRACT(YEAR FROM ${CUBE}."POSTING_DATE")
            END
          ) = (
            CASE 
              WHEN EXTRACT(MONTH FROM CURRENT_DATE) >= 7 
              THEN EXTRACT(YEAR FROM CURRENT_DATE) + 1
              ELSE EXTRACT(YEAR FROM CURRENT_DATE)
            END
          )
          THEN 'Yes' 
          ELSE 'No' 
        END
      `,
      type: `string`,
      title: `Is Current Fiscal Year`
    }
  }
});

// Employee Time Dimensions
cube(`employee_time`, {
  extends: employee,
  
  dimensions: {
    // Employment Date Dimensions
    employment_date: {
      sql: `${CUBE}."EMPLOYMENT_DATE"`,
      type: `time`
    },
    
    employment_year: {
      sql: `EXTRACT(YEAR FROM ${CUBE}."EMPLOYMENT_DATE")`,
      type: `number`,
      title: `Employment Year`
    },
    
    employment_month: {
      sql: `TO_CHAR(${CUBE}."EMPLOYMENT_DATE", 'YYYY-MM')`,
      type: `string`,
      title: `Employment Month`
    },
    
    employment_quarter: {
      sql: `'Q' || EXTRACT(QUARTER FROM ${CUBE}."EMPLOYMENT_DATE")`,
      type: `string`,
      title: `Employment Quarter`
    },
    
    // Termination Date Dimensions
    termination_date: {
      sql: `${CUBE}."TERMINATION_DATE"`,
      type: `time`
    },
    
    termination_year: {
      sql: `EXTRACT(YEAR FROM ${CUBE}."TERMINATION_DATE")`,
      type: `number`,
      title: `Termination Year`
    },
    
    termination_month: {
      sql: `TO_CHAR(${CUBE}."TERMINATION_DATE", 'YYYY-MM')`,
      type: `string`,
      title: `Termination Month`
    },
    
    // Birth Date Dimensions
    birth_date: {
      sql: `${CUBE}."BIRTH_DATE"`,
      type: `time`
    },
    
    birth_year: {
      sql: `EXTRACT(YEAR FROM ${CUBE}."BIRTH_DATE")`,
      type: `number`,
      title: `Birth Year`
    },
    
    // Calculated Age and Tenure Dimensions
    employee_age: {
      sql: `EXTRACT(YEAR FROM AGE(CURRENT_DATE, ${CUBE}."BIRTH_DATE"))`,
      type: `number`,
      title: `Employee Age`
    },
    
    age_group: {
      sql: `
        CASE 
          WHEN EXTRACT(YEAR FROM AGE(CURRENT_DATE, ${CUBE}."BIRTH_DATE")) < 25 THEN 'Under 25'
          WHEN EXTRACT(YEAR FROM AGE(CURRENT_DATE, ${CUBE}."BIRTH_DATE")) BETWEEN 25 AND 34 THEN '25-34'
          WHEN EXTRACT(YEAR FROM AGE(CURRENT_DATE, ${CUBE}."BIRTH_DATE")) BETWEEN 35 AND 44 THEN '35-44'
          WHEN EXTRACT(YEAR FROM AGE(CURRENT_DATE, ${CUBE}."BIRTH_DATE")) BETWEEN 45 AND 54 THEN '45-54'
          WHEN EXTRACT(YEAR FROM AGE(CURRENT_DATE, ${CUBE}."BIRTH_DATE")) BETWEEN 55 AND 64 THEN '55-64'
          WHEN EXTRACT(YEAR FROM AGE(CURRENT_DATE, ${CUBE}."BIRTH_DATE")) >= 65 THEN '65+'
          ELSE 'Unknown'
        END
      `,
      type: `string`,
      title: `Age Group`
    },
    
    years_of_service: {
      sql: `
        EXTRACT(YEAR FROM AGE(
          COALESCE(${CUBE}."TERMINATION_DATE", CURRENT_DATE), 
          ${CUBE}."EMPLOYMENT_DATE"
        ))
      `,
      type: `number`,
      title: `Years of Service`
    },
    
    days_employed: {
      sql: `
        DATE(COALESCE(${CUBE}."TERMINATION_DATE", CURRENT_DATE)) - 
        DATE(${CUBE}."EMPLOYMENT_DATE")
      `,
      type: `number`,
      title: `Days Employed`
    },
    
    tenure_group: {
      sql: `
        CASE 
          WHEN EXTRACT(YEAR FROM AGE(COALESCE(${CUBE}."TERMINATION_DATE", CURRENT_DATE), ${CUBE}."EMPLOYMENT_DATE")) < 1 THEN 'Less than 1 year'
          WHEN EXTRACT(YEAR FROM AGE(COALESCE(${CUBE}."TERMINATION_DATE", CURRENT_DATE), ${CUBE}."EMPLOYMENT_DATE")) BETWEEN 1 AND 2 THEN '1-2 years'
          WHEN EXTRACT(YEAR FROM AGE(COALESCE(${CUBE}."TERMINATION_DATE", CURRENT_DATE), ${CUBE}."EMPLOYMENT_DATE")) BETWEEN 3 AND 5 THEN '3-5 years'
          WHEN EXTRACT(YEAR FROM AGE(COALESCE(${CUBE}."TERMINATION_DATE", CURRENT_DATE), ${CUBE}."EMPLOYMENT_DATE")) BETWEEN 6 AND 10 THEN '6-10 years'
          WHEN EXTRACT(YEAR FROM AGE(COALESCE(${CUBE}."TERMINATION_DATE", CURRENT_DATE), ${CUBE}."EMPLOYMENT_DATE")) > 10 THEN 'Over 10 years'
          ELSE 'Unknown'
        END
      `,
      type: `string`,
      title: `Tenure Group`
    },
    
    is_active_employee: {
      sql: `
        CASE 
          WHEN ${CUBE}."TERMINATION_DATE" IS NULL OR ${CUBE}."TERMINATION_DATE" > CURRENT_DATE
          THEN 'Yes'
          ELSE 'No'
        END
      `,
      type: `string`,
      title: `Is Active Employee`
    }
  }
});

// Currency Exchange Rate Time Dimensions
cube(`currency_exchange_rate_time`, {
  extends: currency_exchange_rate,
  
  dimensions: {
    starting_date: {
      sql: `${CUBE}."STARTING_DATE"`,
      type: `time`,
      primaryKey: true
    },
    
    exchange_year: {
      sql: `EXTRACT(YEAR FROM ${CUBE}."STARTING_DATE")`,
      type: `number`,
      title: `Exchange Year`
    },
    
    exchange_quarter: {
      sql: `'Q' || EXTRACT(QUARTER FROM ${CUBE}."STARTING_DATE")`,
      type: `string`,
      title: `Exchange Quarter`
    },
    
    exchange_month: {
      sql: `TO_CHAR(${CUBE}."STARTING_DATE", 'YYYY-MM')`,
      type: `string`,
      title: `Exchange Month`
    },
    
    days_since_rate_set: {
      sql: `CURRENT_DATE - DATE(${CUBE}."STARTING_DATE")`,
      type: `number`,
      title: `Days Since Rate Set`
    },
    
    is_current_rate: {
      sql: `
        CASE 
          WHEN ${CUBE}."STARTING_DATE" = (
            SELECT MAX("STARTING_DATE") 
            FROM BUSINESS_CENTRAL.CURRENCY_EXCHANGE_RATE 
            WHERE "CURRENCY_CODE" = ${CUBE}."CURRENCY_CODE"
              AND "COMPANY_ID" = ${CUBE}."COMPANY_ID"
          )
          THEN 'Yes'
          ELSE 'No'
        END
      `,
      type: `string`,
      title: `Is Current Rate`
    }
  }
});

// General Journal Line Time Dimensions
cube(`gen_journal_line_time`, {
  extends: gen_journal_line,
  
  dimensions: {
    posting_date: {
      sql: `${CUBE}."POSTING_DATE"`,
      type: `time`
    },
    
    due_date: {
      sql: `${CUBE}."DUE_DATE"`,
      type: `time`
    },
    
    document_date: {
      sql: `${CUBE}."DOCUMENT_DATE"`,
      type: `time`
    },
    
    days_until_due: {
      sql: `DATE(${CUBE}."DUE_DATE") - CURRENT_DATE`,
      type: `number`,
      title: `Days Until Due`
    },
    
    is_overdue: {
      sql: `
        CASE 
          WHEN ${CUBE}."DUE_DATE" < CURRENT_DATE 
          THEN 'Yes'
          ELSE 'No'
        END
      `,
      type: `string`,
      title: `Is Overdue`
    },
    
    payment_terms_days: {
      sql: `DATE(${CUBE}."DUE_DATE") - DATE(${CUBE}."DOCUMENT_DATE")`,
      type: `number`,
      title: `Payment Terms (Days)`
    }
  }
});