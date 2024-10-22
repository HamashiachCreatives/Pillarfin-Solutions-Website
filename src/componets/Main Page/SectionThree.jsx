import React from 'react';
import styles from './sectionthree.module.css';
import css from './cardFour.module.css';

const SectionThree = () => {
  const cardsOne = [
    {
      title: 'Cloud Solutions for Scalability and Agility:',
      description: `Meet the flexibility and scalability you need to thrive in 
      the digital age with our secure cloud solutions. Access essential resources like servers, storage, and 
      software remotely, allowing you to scale your IT infrastructure up or down as needed.`,
    },
    {
      title: 'Subscription-based SaaS Solutions:',
      description: `Ditch expensive software licenses and simplify IT management! 
      Meet your business needs with a wide range of subscription-based SaaS (Software as a Service) 
      applications, including CRM, ERP, HRM, and more. This eliminates software license headaches and 
      frees up your IT team to focus on strategic initiatives. Additionally, SaaS solutions often come with 
      automatic updates, ensuring you always have access to the latest features and security patches.`,
    },
  ];

  const cardsTwo = [
    {
      title: 'Business Impact Analysis (BIA):',
      description: `We employ secure data backup strategies and 
      encryption tech. We identify your critical business functions and prioritize their 
      recovery in case of a disruption.`,
    },
    {
      title: 'Disaster Recovery Testing:',
      description: `We conduct regular testing of your disaster recovery plan to ensure its 
      effectiveness.`,
    },
  ];

  return (
    <section id='Scalable Solutions for the Modern Age'>
      <div id='sectionThree' className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.content}>
            <h1>2. Scalable Solutions for the Modern Age:</h1>
          </div>
          <div className={styles.cardsOne}>
            <div className={styles.cardStyles}>
              <div className={css.cards}>
                {cardsOne.map((card, index) => (
                  <div key={index} className={`${css.card} ${css.cardOne}`}>
                    <h2 className={css.cardTitle}>{card.title}</h2>
                    <p className={css.description}>{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
