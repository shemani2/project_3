Notes for Hospitalizations Data Analysis:
1. Compare Current Data vs Historic Data
2. Compare Actuals vs ActualsTimeseries

5. Compare across March different years

----Results:
TX.Actuals has 320 fields and 3223 results

TX.Timeseries has 284 fields and 7874 results and 1590 without NULLs

Notes for Hospitalizations Data Analysis:
1. Compare Actual data vs timeseries
2. 

5. Compare across March different years








# project_3
Group Title: Data Van Gogh

# Authors
Brian Quintero, Jennifer Tran, Sumain Hemani

# Description
This project utilizes Python, Pandas, Matplotlib, Javascript to visualize COVID-19 cases, hospitalizations, and vaccinations reported in March 2021, March 2022, and March 2023. 


In the face of the unprecedented global pandemic caused by the novel coronavirus, COVID-19, the utilization of comprehensive datasets has emerged as a cornerstone in the fight against the virus. These datasets, comprising a wealth of information ranging from infection rates and mortality statistics to vaccination data, provide invaluable insights into the dynamics of the pandemic. Understanding and leveraging these datasets is pivotal in several key aspects:

1.	COVID-19 datasets serve as a vital tool for tracking and analyzing the transmission patterns of the virus within populations. By documenting the number of confirmed cases, identifying hotspot regions, and monitoring trends over time, researchers and public health officials can gain a deeper understanding of how the virus spreads through communities.
2.	As vaccines against COVID-19 have been developed and deployed on a global scale, COVID-19 datasets play a pivotal role in evaluating the effectiveness of vaccination campaigns. 
3.	COVID-19 datasets provide essential insights into the progression towards herd immunity by tracking population-level immunity through natural infection and vaccination.

The analysis of vaccinations is informative for health promotion and to visualize the growth of the covid outbreak. It allows us to reflect on our experiences and how it shapes the healthcare field in the future. There was controversy around the validity and reliability of the vaccines, and we now have data to understand the concrete value of them. We can analyze the effectiveness of vaccines based on data availability.

# Dataset Citation 
- [Covid Act Now [Data Set]](https://apidocs.covidactnow.org/)

# Describing the Datasets
This dataset is collected by using an API that encompasses a collection of COVID-19 data from 2021-2023. It is a valuable resource in advancing our understanding of the virus's epidemiology and transmission dynamics. We used Trello to help keep our work organized.

# Analysis
New Cases 
- As expected, there are the most new cases in 2021 which followed the incline of cases in 2020 into 2021.
- Remote/ rural counties have smaller populations therefore the numbers may be more or less significant and may inflate the case and hospitalization rates.
- There are outliers for the number of cases in each year which could be due to lifestyle habits, susceptibility to the virus, location, or any number of things. 

Covid Hospitalization Rates
- There is a wide range of bed usage percentages for COVID-19 in all three years, with 2021 having the highest percentage rates in all the counties of Texas.
- The rates reduce thereafter for 2022 and significantly for 2023, which is not unexpected.
- What is unexpected is the rates for each year compared to the various counties, do not hold a significant trend for hospital bed usage. 

Vaccinations
- Between 2021 through the end of 2022, there is a significant increase in vaccination dissemination and administration, with all numbers being well over 100k vaccines administered.
- That trend is the same for all counties across Texas. A significant drop in vaccine administration in 2023 coincides with the drop in new cases and hospitalizations in 2023.
- There is a correlation between vaccinations and the drop in COVID from 2021 to 2023. 


# Summary
<<<<<<< HEAD
- The analysis reveals an inverse relationship between increased vaccinations and the decline of cases and beds being occupied due to the virus. These categories combined demonstrate that things like herd immunity are valuable in the decline of COVID-19. Working together as a community to collect the appropriate data, keep an eye on hospitalization admissions concerning the virus, and how vaccines benefit in reducing the likelihood of getting the virus, collects the data to determine future and long-term impact as well as keep good historical knowledge of how our society fights biological diseases. 

- Some caveats or gaps to be aware of in the data include how there is no significant 2020 data available in this dataset, even with it being sourced from the CDC, which demonstrates that collection of the data was not as paramount at the peak until the virus was controllable. There were no specific methods of collecting or managing the collection of the type of data for evaluation. The means to collect the data and collecting the appropriate data was more significant in 2021 and after which has now become historical data. The other gap to be aware of includes small counties that did not have the resources to add more patients to their care, therefore outsourcing to other healthcare facilities in other counties, which may inflate or deflate the data we have analyzed. 

Our final presentation can be viewed at: https://docs.google.com/presentation/d/1pRNSB5RfqrEZewhkrODVKxxRn83B7K6bRefdmJcdpK0/edit?usp=sharing




=======
- The analysis of work experience levels reveals a positive correlation between experience and salary across various job titles, with the top five positions demonstrating this trend. However, the salary growth for Data Analysts appears slower compared to other top job titles. Notably, Data Scientists experience a significant salary increase, doubling from Entry level to Executive level. It is shown that Data Engineer jobs offer the widest salary range while Data Scientist positions have the highest growth potential. Examining job growth since 2020, median salaries for different positions have remained relatively stable, as indicated by box plot distributions. However, there is an increase in outliers, suggesting the possibility of more extreme salary offers, potentially continuing into 2024. The growing demand for data science roles indicates either sustained growth or an eventual plateau in the job market, as projected by the Bureau of Labor Statistics. Regarding work environments, analysis of the top five job titles (Data Analysts, Data Scientists, Data Engineers, Analytics Engineers, and Machine Learning Engineers) reveals no statistically significant differences in salaries or work environments.
>>>>>>> b-ri-an
