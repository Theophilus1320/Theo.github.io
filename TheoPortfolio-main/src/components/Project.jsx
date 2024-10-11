import React, { Suspense, memo } from 'react';

const portfolioProjects = [
  {
    id: 1,
    title: 'HEALTHCARE ANALYTICS WITH MICROSOFT EXCEL',
    description: 'I carried out exploratory data Analysis on this Healthcare dataset which consists of 10,000 patient records, each representing a synthetic patient healthcare record. The dataset includes various attributes, such as patient demographics, medical conditions, admission details, and more. Data cleaning, analysis and visualization was done using Microsoft  Excel with metrics like Count of Patients by Gender, number of patients per medical condition, and  total billing amount by each insurance provider or company were captured and a dashboard created.',
    imageUrl: 'https://res.cloudinary.com/dtqrzl86y/image/upload/v1726647801/Personal%20Gigs/health_wltzhc.jpg',
    projectLink: 'https://dev.to/theophilus1320/health-care-analytics-with-microsoft-excel-5h9l'
  },
  {
    id: 2,
    title: 'SALES REPORT ANALYSIS USING POWER BI',
    description: 'In this project I  conducted an exploratory data analysis and visualization of a Burmese retail store\'s sales records for the year 2019 using Power BI. The data cleaning process was carried out with Power BI\'s Power Query Editor. The visualizations created focused on highlighting key performance indicators (KPIs) and uncovering insights to enhance the retail store\'s sales strategies. This analysis addressed several key questions, such as identifying the most sold products, determining the most profitable payment channel, and pinpointing the least profitable products. Additionally, I offered strategic recommendations aimed at fostering the growth of the retail store',
    imageUrl: 'https://res.cloudinary.com/dtqrzl86y/image/upload/v1726647801/Personal%20Gigs/power-BI_aobn1q.png',
    projectLink: 'https://dev.to/theophilus1320/data-analysis-with-power-bi-sales-analysis-156f'
  },
  {
    id: 3,
    title: 'DATA EXPLORATION AND ANALYSIS USING PYTHON',
    description: 'Performed exploratory data analysis on the Global development and  Prosperity Index for the year 2023. The dataset, which covers global development and prosperity metrics, was analyzed using Python libraries such as Numpy, Pandas, Matplotlib, and Seaborn. The analysis addresses several important questions, including identifying the top ten countries ranked in the Global Prosperity Index, the bottom ten countries, and the areas where the top ten prosperous countries excelled. It also highlights potential areas of improvement for the bottom ten ranked countries and explores the relationship between governance and living conditions within the recorded period.The findings of this analysis provide valuable insights into global prosperity trends and offer actionable recommendations for enhancing developmental outcomes. Through detailed data visualization and statistical analysis, this report aims to contribute to a deeper understanding of global prosperity dynamics.',
    imageUrl: 'https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F1nvmdmb24six6jws3qzh.png',
    projectLink: 'https://dev.to/theophilus1320/data-analysis-with-pythonanalysis-of-the-global-development-and-prosperity-index-for-the-year-2023-2fj4'
  },
  {
    id: 4,
    title: 'DATA EXPLORATION USING SQL',
    description: 'Performed exploratory data analysis on global internet usage using a dataset sourced from gapminder.org. This dataset includes information on the number of internet users and their percentages for countries around the world, among other details. Through extensive querying of the dataset, I obtained insights such as the total number of internet users worldwide, the countries with the highest and lowest numbers of internet users, the top five and bottom five countries by internet users, and the correlation between internet usage and a country’s population, among other findings.',
    imageUrl: 'https://res.cloudinary.com/dtqrzl86y/image/upload/v1726648746/Personal%20Gigs/sqlf_ikagrq.png',
    projectLink: 'https://dev.to/theophilus1320/exploratory-data-analysis-using-sql-10ka'
  },
  {
    id: 5,
    title: 'PEOPLE ANALYTICS USING MICROSOFT EXCEL',
    description: 'I carried out an Analysis on this HR dataset of one hundred  (100) host companies in Nigeria each with fellows assigned to them. The Analysis was done  to extract meaningful insights about the distribution and characteristics of the fellows across different companies. The analysis aimed to understand key aspects of the workforce composition, providing insights into the demographics and distribution of fellows. This information is essential for strategic planning, resource allocation, and improving HR practices within the organization. Key metrics such as the average number of fellows per company, Count of  Fellow By Age, Count of Fellow By Gender,  and Count of Fellow by Company Location were Captured and analyzed  with visualizations and a Dashboard Created.',
    imageUrl: 'https://res.cloudinary.com/dtqrzl86y/image/upload/v1726647801/Personal%20Gigs/excel_r3l4k9.jpg',
    projectLink: 'https://dev.to/theophilus1320/data-analysis-with-microsoft-excel-people-analytics-43c2'
  }

];

const PortfolioItem = memo(({ project }) => {
  return (
    <div className="portfolio-item">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="portfolio-image"
        loading="lazy"
      />
      <h3 className="title-class">{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="view-project-button">
        View Project
      </a>
    </div>
  );
});

const Project = () => {
  return (
    <section className="portfolio-section">
      <h1>Projects</h1>
      <div className="portfolio-container">
        <Suspense fallback={<div>Loading Projects...</div>}>
          {portfolioProjects.map((project) => (
            <PortfolioItem key={project.id} project={project} />
          ))}
        </Suspense>
      </div>
    </section>
  );
};

export default Project;
