import React from 'react';
import './saz.css'; // Ensure your CSS is imported here

const cards = [
  {
    className: '',
    href: 'Managed Service Provider:',
    iconName: 'Why?',
    title: 'Managed Service Provider: ',
    description: `Whether you are a start-up or just want to concentrate on business 
    growth. We can partner with you to manage IT end to end enabling you to continuously improve and 
    innovate. `
  },
  {
    className: '',
    href: ' Data  Driven Strategies:',
    iconName: 'Why?',
    title: 'Data-Driven Strategies:',
    description: `We don't stop at process optimization. Our consultants integrate data 
    analytics and modern business intelligence tools to provide actionable insights that inform strategic 
    decision-making. Imagine using real-time data to optimize marketing campaigns or predict customer 
    behaviour. We can make it happen `
  },
];

const cardsOne = [
    {
      className: 'card--dark',
      href: 'Cloud Solutions for Scalability and Agility:',
      iconName: 'Why?',
      title: 'Cloud Solutions for Scalability and Agility: ',
      description: ` Meet the flexibility and scalability you need to thrive in 
      the digital age with our secure cloud solutions. Access essential resources like servers, storage, and 
      software remotely, allowing you to scale your IT infrastructure up or down as needed.  `
    },
    {
      className: 'card--dark',
      href: 'Subscription-based SaaS Solutions:',
    iconName: 'Why?',
    title: 'Subscription-based SaaS Solutions: ',
    description: `Ditch expensive software licenses and simplify IT management! 
    Meet your business needs with a wide range of subscription-based SaaS (Software as a Service) 
    applications, including CRM, ERP, HRM, and more. This eliminates software license headaches and 
    frees up your IT team to focus on strategic initiatives. Additionally, SaaS solutions often come with 
    automatic updates, ensuring you always have access to the latest features and security patches. (Focuses 
    on value and ease of use with a range of SaaS examples)  `
    }
  ];

const Saz = () => {
  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div key={index} className={`card ${card.className}`}>
          <a href='#sectionTwo'>
            <div className="card--display">
              <i className="material-icons">{card.iconName}</i>
              <h2 className='titler'>{card.title}</h2>
            </div>
            <div id='carf' className="card--hover">
              <h2>{card.title}</h2>
              <p>{card.description}</p>
             
            </div>
            <div className="card--border"></div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Saz;