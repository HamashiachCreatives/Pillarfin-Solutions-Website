import React from 'react';
import styles from './sectionone.module.css'; // Import the section-specific styles
import cardStyles from './cards.module.css'; // Import the card styles from CSS module
import Cardy from './Cardy';

const SectionOne = () => {
  const cardsOne = [
    {
      title: 'Data Backup and Encryption:',
      description: `We employ secure data backup strategies and 
      encryption technologies to ensure your information remains safe, even in case 
      of a cyberattack.`
    },
    {
      title: 'Access Control:',
      description: `We implement robust access controls to restrict unauthorized 
      access to your data.`
    },
    {
      title: 'Compliance Expertise:',
      description: `Our team stays current on relevant data protection 
      regulations to ensure your business remains compliant.`
    }
  ];

  const cardsTwo = [
    {
      title: 'Business Impact Analysis (BIA):',
      description: `We identify your critical business functions and prioritize their 
      recovery in case of a disruption.`
    },
    {
      title: 'Disaster Recovery Testing:',
      description: `We conduct regular testing of your disaster recovery plan to ensure its 
      effectiveness.`
    },
  ];

  return (
    <section id='Data Protection & Disaster Recovery'>
      <section id='sectionOne' className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.content}>
            <h1>Secure Your Digital Foundation: Data Protection & Disaster Recovery</h1>
            <p>
              <strong>Peace of Mind with Robust Security: </strong>
              In today's digital world, protecting your data and ensuring business continuity is paramount. 
              We offer a comprehensive suite of security solutions that encompass Data Protection and Disaster 
              Recovery, safeguarding your critical information assets and minimizing downtime in the event of disruptions.
            </p>
          </div>
          <div className={styles.contentOne}>
              <h1>Data Protection:</h1>
              <p>We understand the sensitivity of your data. Our data protection measures include:</p>
            </div>
          <div className={styles.cardsOne}>
            <div className={styles.cardStyles}>
              <div className={cardStyles.cards}>
                {cardsOne.map((card, index) => (
                  <div key={index} className={cardStyles.card}>
                    <h2 className={cardStyles.cardTitle}>{card.title}</h2>
                    <p className={cardStyles.description}>{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.cardsOne}>
            <div className={styles.contentOne}>
              <div className={styles.carly}>
                <h1>Disaster Recovery Planning and Preparedness:</h1>
                <p>Be prepared for the unexpected. We help you develop a comprehensive disaster recovery plan 
                  that outlines procedures for recovering your IT infrastructure and data in the event of an outage 
                  or disaster. This includes:</p>
              </div>
            </div>
            <div className={styles.cardStyles}>
              <Cardy />
            </div>
          </div>
          <div className={styles.cardsTwo}></div>
            <div className={styles.blobs}>
              <div className={styles.blob1}></div>
              <div className={styles.blob2}></div>
              <div className={styles.blob3}></div>
            </div>
        </div>
      </section>
    </section>
  );
};

export default SectionOne;
