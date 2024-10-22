import React from 'react';
import './sazOne.css'; // Ensure your CSS is imported here

const cardsOne = [
    {
      className: 'card--dark',
      href: 'Consolidate and Cleanse Data:',
      iconName: 'Click Me',
      title: 'Consolidate and Cleanse Data:',
      description: ` We can help eliminate data silos and inconsistencies, ensuring the 
      quality and accuracy of your data for reliable analysis.   `
    },
    {
      className: 'card--dark',
      href: 'Advanced Analytics and Reporting:',
    iconName: 'Click Me',
    title: 'Advanced Analytics and Reporting:',
    description: ` Leverage our expertise in data mining, machine learning, and 
    statistical modelling to uncover hidden patterns and trends within your data. We create insightful reports 
    and dashboards that provide clear visualizations of complex information.   `
    },
    {
        className: 'card--dark',
        href: 'Predictive Analytics:',
      iconName: 'Click Me',
      title: 'Predictive Analytics::',
      description: `  Go beyond the present with our predictive analytics capabilities. We can help 
      you forecast future trends, anticipate customer behaviour, and make data-driven decisions that optimize 
      your business strategies.   `
      }
  ];

const SazOne = () => {
  return (
    <div className="card-container">
      {cardsOne.map((card, index) => (
        <div key={index} className={`card ${card.className}`}>
          <a href={card.href}>
            <div className="card--display">
              <i className="material-icons">{card.iconName}</i>
              <h2>{card.title}</h2>
            </div>
            <div className="card--hover">
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              <p className="link">Click to see project</p>
            </div>
            <div className="card--border"></div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default SazOne;