CREATE TABLE IF NOT EXISTS combined_data AS
SELECT cc.county, cc.total_new_cases, cc.month, cc.year,
       ch.hospitalizations,
       cv.vaccinations
FROM covid_cases AS cc
JOIN covid_hospitalizations AS ch ON cc.county = ch.county AND cc.month = ch.month AND cc.year = ch.year
JOIN covid_vaccinations AS cv ON cc.county = cv.county AND cc.month = cv.month AND cc.year = cv.year;

select * from combined_data

CREATE TEMP TABLE temp_combined_data AS SELECT * FROM combined_data;
COPY temp_combined_data TO '/Users/sumainhemani/Documents/Homework/project3/project_3/combined_data.csv' WITH CSV HEADER;

