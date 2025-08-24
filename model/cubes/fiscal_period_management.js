// Fiscal Period Management
// Handles fiscal year boundaries, period comparisons, and time-based analysis

cube(`fiscal_periods`, {
  sql: `
    WITH date_spine AS (
      SELECT 
        DATEADD(day, seq4(), '2020-01-01'::DATE) as calendar_date
      FROM TABLE(GENERATOR(rowcount => 3650))  -- 10 years of dates
    ),
    fiscal_calendar AS (
      SELECT 
        calendar_date,
        EXTRACT(YEAR FROM calendar_date) as calendar_year,
        EXTRACT(QUARTER FROM calendar_date) as calendar_quarter,
        EXTRACT(MONTH FROM calendar_date) as calendar_month,
        EXTRACT(WEEK FROM calendar_date) as calendar_week,
        EXTRACT(DAY FROM calendar_date) as calendar_day,
        TO_CHAR(calendar_date, 'YYYY-MM') as calendar_year_month,
        TO_CHAR(calendar_date, 'Mon') as month_name_short,
        TO_CHAR(calendar_date, 'Month') as month_name,
        TO_CHAR(calendar_date, 'Day') as day_name,
        DAYOFWEEK(calendar_date) as day_of_week,
        DAYOFYEAR(calendar_date) as day_of_year,
        
        -- Fiscal Year calculations (configurable start month)
        CASE 
          WHEN EXTRACT(MONTH FROM calendar_date) >= 4
          THEN EXTRACT(YEAR FROM calendar_date) + 1
          ELSE EXTRACT(YEAR FROM calendar_date)
        END as fiscal_year,
        
        -- Fiscal Quarter
        CASE 
          WHEN EXTRACT(MONTH FROM calendar_date) >= 4
          THEN CEIL((EXTRACT(MONTH FROM calendar_date) - 4 + 1) / 3.0)
          ELSE CEIL((EXTRACT(MONTH FROM calendar_date) + 12 - 4 + 1) / 3.0)
        END as fiscal_quarter_num,
        
        -- Fiscal Period (Month within fiscal year)
        CASE 
          WHEN EXTRACT(MONTH FROM calendar_date) >= 4
          THEN EXTRACT(MONTH FROM calendar_date) - 4 + 1
          ELSE EXTRACT(MONTH FROM calendar_date) + 12 - 4 + 1
        END as fiscal_period,
        
        -- Fiscal Week calculation
        CASE 
          WHEN EXTRACT(MONTH FROM calendar_date) >= 4
          THEN DATEDIFF(week, 
            DATE_FROM_PARTS(EXTRACT(YEAR FROM calendar_date), 4, 1),
            calendar_date) + 1
          ELSE DATEDIFF(week,
            DATE_FROM_PARTS(EXTRACT(YEAR FROM calendar_date) - 1, 4, 1),
            calendar_date) + 1
        END as fiscal_week,
        
        -- Fiscal Year Start and End dates
        CASE 
          WHEN EXTRACT(MONTH FROM calendar_date) >= 4
          THEN DATE_FROM_PARTS(EXTRACT(YEAR FROM calendar_date), 4, 1)
          ELSE DATE_FROM_PARTS(EXTRACT(YEAR FROM calendar_date) - 1, 4, 1)
        END as fiscal_year_start_date,
        
        CASE 
          WHEN EXTRACT(MONTH FROM calendar_date) >= 4
          THEN DATEADD(day, -1, DATE_FROM_PARTS(EXTRACT(YEAR FROM calendar_date) + 1, 4, 1))
          ELSE DATEADD(day, -1, DATE_FROM_PARTS(EXTRACT(YEAR FROM calendar_date), 4, 1))
        END as fiscal_year_end_date,
        
        -- Current period flags
        CASE WHEN calendar_date = CURRENT_DATE THEN 1 ELSE 0 END as is_today,
        CASE WHEN calendar_date <= CURRENT_DATE THEN 1 ELSE 0 END as is_past,
        CASE WHEN calendar_date > CURRENT_DATE THEN 1 ELSE 0 END as is_future,
        
        -- Current fiscal period flags
        CASE 
          WHEN CASE 
            WHEN EXTRACT(MONTH FROM calendar_date) >= 4
            THEN EXTRACT(YEAR FROM calendar_date) + 1
            ELSE EXTRACT(YEAR FROM calendar_date)
          END = CASE 
            WHEN EXTRACT(MONTH FROM CURRENT_DATE) >= 4
            THEN EXTRACT(YEAR FROM CURRENT_DATE) + 1
            ELSE EXTRACT(YEAR FROM CURRENT_DATE)
          END 
          THEN 1 ELSE 0 
        END as is_current_fiscal_year,
        
        -- Prior year same period
        DATEADD(year, -1, calendar_date) as prior_year_date,
        
        -- Company (for multi-company support)
        c."ID" as company_id
      FROM date_spine
      CROSS JOIN (SELECT DISTINCT "ID" FROM BUSINESS_CENTRAL.COMPANY) c
      WHERE calendar_date BETWEEN '2020-01-01' AND '2030-12-31'
    )
    SELECT * FROM fiscal_calendar
  `,
  
  joins: {
    company: {
      relationship: `many_to_one`,
      sql: `${CUBE}.company_id = ${company}."ID"`
    },
    
    // Join to GL Entries on posting date
    g_l_entry: {
      relationship: `one_to_many`,
      sql: `DATE(${CUBE}.calendar_date) = DATE(${g_l_entry}."POSTING_DATE") AND ${CUBE}.company_id = ${g_l_entry}."COMPANY_ID"`
    },
    
    // Join to Budget Entries on budget date
    g_l_budget_entry: {
      relationship: `one_to_many`,
      sql: `DATE(${CUBE}.calendar_date) = DATE(${g_l_budget_entry}."DATE") AND ${CUBE}.company_id = ${g_l_budget_entry}."COMPANY_ID"`
    }
  },
  
  measures: {
    days_count: {
      sql: `1`,
      type: `sum`,
      title: `Number of Days`
    },
    
    working_days_count: {
      sql: `CASE WHEN ${CUBE}.day_of_week NOT IN (1, 7) THEN 1 ELSE 0 END`,
      type: `sum`,
      title: `Number of Working Days`
    },
    
    periods_count: {
      sql: `${CUBE}.fiscal_period`,
      type: `countDistinct`,
      title: `Number of Fiscal Periods`
    },
    
    weeks_count: {
      sql: `${CUBE}.fiscal_week`,
      type: `countDistinct`,
      title: `Number of Fiscal Weeks`
    }
  },
  
  dimensions: {
    calendar_date: {
      sql: `${CUBE}.calendar_date`,
      type: `time`,
      primary_key: true
    },
    
    // Calendar dimensions
    calendar_year: {
      sql: `${CUBE}.calendar_year`,
      type: `number`
    },
    
    calendar_quarter: {
      sql: `${CUBE}.calendar_quarter`,
      type: `number`
    },
    
    calendar_month: {
      sql: `${CUBE}.calendar_month`,
      type: `number`
    },
    
    calendar_year_month: {
      sql: `${CUBE}.calendar_year_month`,
      type: `string`
    },
    
    month_name: {
      sql: `${CUBE}.month_name`,
      type: `string`
    },
    
    month_name_short: {
      sql: `${CUBE}.month_name_short`,
      type: `string`
    },
    
    day_name: {
      sql: `${CUBE}.day_name`,
      type: `string`
    },
    
    day_of_week: {
      sql: `${CUBE}.day_of_week`,
      type: `number`
    },
    
    day_of_year: {
      sql: `${CUBE}.day_of_year`,
      type: `number`
    },
    
    // Fiscal dimensions
    fiscal_year: {
      sql: `${CUBE}.fiscal_year`,
      type: `number`,
      title: `Fiscal Year`
    },
    
    fiscal_year_label: {
      sql: `'FY' || ${CUBE}.fiscal_year`,
      type: `string`,
      title: `Fiscal Year Label`
    },
    
    fiscal_quarter_num: {
      sql: `${CUBE}.fiscal_quarter_num`,
      type: `number`,
      title: `Fiscal Quarter Number`
    },
    
    fiscal_quarter: {
      sql: `'FY' || ${CUBE}.fiscal_year || '-Q' || ${CUBE}.fiscal_quarter_num`,
      type: `string`,
      title: `Fiscal Quarter`
    },
    
    fiscal_period: {
      sql: `${CUBE}.fiscal_period`,
      type: `number`,
      title: `Fiscal Period`
    },
    
    fiscal_period_label: {
      sql: `'FY' || ${CUBE}.fiscal_year || '-P' || LPAD(${CUBE}.fiscal_period::TEXT, 2, '0')`,
      type: `string`,
      title: `Fiscal Period Label`
    },
    
    fiscal_week: {
      sql: `${CUBE}.fiscal_week`,
      type: `number`,
      title: `Fiscal Week`
    },
    
    fiscal_year_start_date: {
      sql: `${CUBE}.fiscal_year_start_date`,
      type: `time`,
      title: `Fiscal Year Start Date`
    },
    
    fiscal_year_end_date: {
      sql: `${CUBE}.fiscal_year_end_date`,
      type: `time`,
      title: `Fiscal Year End Date`
    },
    
    // Period comparison dimensions
    is_today: {
      sql: `${CUBE}.is_today`,
      type: `boolean`
    },
    
    is_past: {
      sql: `${CUBE}.is_past`,
      type: `boolean`
    },
    
    is_future: {
      sql: `${CUBE}.is_future`,
      type: `boolean`
    },
    
    is_current_fiscal_year: {
      sql: `${CUBE}.is_current_fiscal_year`,
      type: `boolean`
    },
    
    prior_year_date: {
      sql: `${CUBE}.prior_year_date`,
      type: `time`
    },
    
    days_from_fiscal_year_start: {
      sql: `DATEDIFF(day, ${CUBE}.fiscal_year_start_date, ${CUBE}.calendar_date)`,
      type: `number`,
      title: `Days from Fiscal Year Start`
    },
    
    days_to_fiscal_year_end: {
      sql: `DATEDIFF(day, ${CUBE}.calendar_date, ${CUBE}.fiscal_year_end_date)`,
      type: `number`,
      title: `Days to Fiscal Year End`
    },
    
    fiscal_year_progress: {
      sql: `
        ROUND(
          CAST(DATEDIFF(day, ${CUBE}.fiscal_year_start_date, ${CUBE}.calendar_date) AS FLOAT) / 
          CAST(DATEDIFF(day, ${CUBE}.fiscal_year_start_date, ${CUBE}.fiscal_year_end_date) AS FLOAT) * 100,
          2
        )
      `,
      type: `number`,
      format: `percent`,
      title: `Fiscal Year Progress %`
    },
    
    company_id: {
      sql: `${CUBE}.company_id`,
      type: `string`
    }
  },
  
  segments: {
    // Time period segments
    current_fiscal_year: {
      sql: `${CUBE}.is_current_fiscal_year = 1`,
      title: `Current Fiscal Year`
    },
    
    prior_fiscal_year: {
      sql: `${CUBE}.fiscal_year = (
        CASE 
          WHEN EXTRACT(MONTH FROM CURRENT_DATE) >= 4
          THEN EXTRACT(YEAR FROM CURRENT_DATE)
          ELSE EXTRACT(YEAR FROM CURRENT_DATE) - 1
        END
      )`,
      title: `Prior Fiscal Year`
    },
    
    current_fiscal_quarter: {
      sql: `
        ${CUBE}.fiscal_year = (
          CASE 
            WHEN EXTRACT(MONTH FROM CURRENT_DATE) >= 4
            THEN EXTRACT(YEAR FROM CURRENT_DATE) + 1
            ELSE EXTRACT(YEAR FROM CURRENT_DATE)
          END
        ) AND ${CUBE}.fiscal_quarter_num = (
          CASE 
            WHEN EXTRACT(MONTH FROM CURRENT_DATE) >= 4
            THEN CEIL((EXTRACT(MONTH FROM CURRENT_DATE) - 4 + 1) / 3.0)
            ELSE CEIL((EXTRACT(MONTH FROM CURRENT_DATE) + 12 - 4 + 1) / 3.0)
          END
        )
      `,
      title: `Current Fiscal Quarter`
    },
    
    current_fiscal_period: {
      sql: `
        ${CUBE}.fiscal_year = (
          CASE 
            WHEN EXTRACT(MONTH FROM CURRENT_DATE) >= 4
            THEN EXTRACT(YEAR FROM CURRENT_DATE) + 1
            ELSE EXTRACT(YEAR FROM CURRENT_DATE)
          END
        ) AND ${CUBE}.fiscal_period = (
          CASE 
            WHEN EXTRACT(MONTH FROM CURRENT_DATE) >= 4
            THEN EXTRACT(MONTH FROM CURRENT_DATE) - 4 + 1
            ELSE EXTRACT(MONTH FROM CURRENT_DATE) + 12 - 4 + 1
          END
        )
      `,
      title: `Current Fiscal Period`
    },
    
    year_to_date: {
      sql: `
        ${CUBE}.fiscal_year = (
          CASE 
            WHEN EXTRACT(MONTH FROM CURRENT_DATE) >= 4
            THEN EXTRACT(YEAR FROM CURRENT_DATE) + 1
            ELSE EXTRACT(YEAR FROM CURRENT_DATE)
          END
        ) AND ${CUBE}.calendar_date <= CURRENT_DATE
      `,
      title: `Year to Date (YTD)`
    },
    
    quarter_to_date: {
      sql: `
        ${CUBE}.fiscal_year = (
          CASE 
            WHEN EXTRACT(MONTH FROM CURRENT_DATE) >= 4
            THEN EXTRACT(YEAR FROM CURRENT_DATE) + 1
            ELSE EXTRACT(YEAR FROM CURRENT_DATE)
          END
        ) AND ${CUBE}.fiscal_quarter_num = (
          CASE 
            WHEN EXTRACT(MONTH FROM CURRENT_DATE) >= 4
            THEN CEIL((EXTRACT(MONTH FROM CURRENT_DATE) - 4 + 1) / 3.0)
            ELSE CEIL((EXTRACT(MONTH FROM CURRENT_DATE) + 12 - 4 + 1) / 3.0)
          END
        ) AND ${CUBE}.calendar_date <= CURRENT_DATE
      `,
      title: `Quarter to Date (QTD)`
    },
    
    month_to_date: {
      sql: `
        ${CUBE}.fiscal_year = (
          CASE 
            WHEN EXTRACT(MONTH FROM CURRENT_DATE) >= 4
            THEN EXTRACT(YEAR FROM CURRENT_DATE) + 1
            ELSE EXTRACT(YEAR FROM CURRENT_DATE)
          END
        ) AND ${CUBE}.fiscal_period = (
          CASE 
            WHEN EXTRACT(MONTH FROM CURRENT_DATE) >= 4
            THEN EXTRACT(MONTH FROM CURRENT_DATE) - 4 + 1
            ELSE EXTRACT(MONTH FROM CURRENT_DATE) + 12 - 4 + 1
          END
        ) AND ${CUBE}.calendar_date <= CURRENT_DATE
      `,
      title: `Month to Date (MTD)`
    },
    
    // Day type segments
    weekdays: {
      sql: `${CUBE}.day_of_week NOT IN (1, 7)`,
      title: `Weekdays Only`
    },
    
    weekends: {
      sql: `${CUBE}.day_of_week IN (1, 7)`,
      title: `Weekends Only`
    },
    
    // Fiscal quarter segments
    fiscal_q1: {
      sql: `${CUBE}.fiscal_quarter_num = 1`,
      title: `Fiscal Q1`
    },
    
    fiscal_q2: {
      sql: `${CUBE}.fiscal_quarter_num = 2`,
      title: `Fiscal Q2`
    },
    
    fiscal_q3: {
      sql: `${CUBE}.fiscal_quarter_num = 3`,
      title: `Fiscal Q3`
    },
    
    fiscal_q4: {
      sql: `${CUBE}.fiscal_quarter_num = 4`,
      title: `Fiscal Q4`
    },
    
    // Year-end segments
    fiscal_year_end_month: {
      sql: `${CUBE}.fiscal_period = 12`,
      title: `Fiscal Year-End Month`
    },
    
    fiscal_year_start_month: {
      sql: `${CUBE}.fiscal_period = 1`,
      title: `Fiscal Year-Start Month`
    }
  },
  
  pre_aggregations: {
    fiscal_calendar_cache: {
      measures: [days_count, working_days_count],
      dimensions: [
        fiscal_year,
        fiscal_quarter,
        fiscal_period,
        calendar_year,
        calendar_month
      ],
      refreshKey: {
        every: `1 week`
      }
    }
  }
});