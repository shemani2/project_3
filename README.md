Notes for Hospitalizations Data Analysis:
1. Compare Actual data vs timeseries
2. 

5. Compare across March different years

----Results:
Actuals has 320 fields and 3223 results

Timeseries has 284 fields and 7874 results and 1590 without NULLs

Notes for Hospitalizations Data Analysis:
1. Compare Actual data vs timeseries
2. 

5. Compare across March different years








# project_3
Group Title: 

# Authors
Brian Quintero, Jennifer Tran, Sumain Hemani

# Description
This project utilizes Python, Pandas, Matplotlib, Javascript to visualize COVID-19 vaccination data up until 2021. 

In the field of data science that is rapidly evolving, understanding the dataset of salaries from different job titles and trends will be beneficial for those in interests of the data science community. By using Python, Pandas, and Matplotlib we are able to answer:
1.	Comparison of different experience levels of a position under the same job title and the salary they earn
2.	Mean, median, mode statistics for the different top 5 job titles in the data science community
3.	Trend of how a position has changes in demand over time and predicting their value for the future
4.	Does work environment (hybrid, on-site, and remote) impact on salary?

# Dataset Citation 
- Islam, Sazidul (2024). [Data Science Salaries 2024 [Data Set]](https://www.kaggle.com/datasets/sazidthe1/data-science-salaries)

# Describing the Datasets
This dataset is a CSV file that encompasses a collection of data science salary from 2020 to 2024, however we are ommitting year 2024. In this dataset, not only salaries are collected but the details of each job titles and their location, experience level, company size, and work models.

# Analysis
Work Experience level
- As predicted, positive increase on average salary with the experience level goes up reflect on top 5 job titles. 
- Job title - Data Analyst shows slower increase compares to the other top job titles. 
- Job title - Data Scientist shows doubled salary from Entry level to Executive level.

Salary Distribution
- The job with the widest salary range is Data Engineer.
- The job with the highest growth potential is Data Scientist.
- The job with the highest probability for higher pay with less competition is Analytics Engineer.

Analysis of job growth since 2020
- The data shown in the distributions (box plot) demonstrates the median salaries for each job are not statistically significant from 2020-2024. With more outliers in 2023, it demonstrates that more extreme salary amounts are being offered which may continue into 2024.
- One major thing to notice from 2020 to 2023, is the progression of demand and amount of jobs. Two predictions can be made: the progression of demand indicates that as long as conditions remain steady, we will either see a continuing growth in the data science job market or an eventual plateau. This is concurred by the Bureau of Labor Statistics that states, “Employment of data scientists is projected to grow 35 percent from 2022 to 2032, much faster than the average for all occupations. About 17,700 openings for data scientists are projected each year, on average, over the decade. Many of those openings are expected to result from the need to replace workers who transfer to different occupations or exit the labor force, such as to retire.”

Work Environments
- The job titles we had observed in the top 5 job titles (data analysts, data scientists, data engineers, analytics engineers, and machine learning engineers) showed there is no statistical difference in salaries and work. enviornments.

# Summary
- The analysis of work experience levels reveals a positive correlation between experience and salary across various job titles, with the top five positions demonstrating this trend. However, the salary growth for Data Analysts appears slower compared to other top job titles. Notably, Data Scientists experience a significant salary increase, doubling from Entry level to Executive level. It is shown that Data Engineer jobs offer the widest salary range while Data Scientist positions have the highest growth potential. Examining job growth since 2020, median salaries for different positions have remained relatively stable, as indicated by box plot distributions. However, there is an increase in outliers, suggesting the possibility of more extreme salary offers, potentially continuing into 2024. The growing demand for data science roles indicates either sustained growth or an eventual plateau in the job market, as projected by the Bureau of Labor Statistics. Regarding work environments, analysis of the top five job titles (Data Analysts, Data Scientists, Data Engineers, Analytics Engineers, and Machine Learning Engineers) reveals no statistically significant differences in salaries or work environments.