import React from 'react';
import styles from './story.module.css'
import css from './sectionstory.module.css'

const SectionStory = () => {
  const cardsOne = [
    {
      title: 'A Compelling Narrative: ',
      description: `In today's digital landscape, small and established enterprises face the 
      challenge of balancing technology adoption with sustainable growth. Pillarfin Solutions Ltd 
      leverages our expertise and diverse experience to guide organizations in securely navigating digital 
      transformation. We focus on building the right fundamentals and strategic synergies to help you 
      implement the technologies that enable and drive your core business objectives. We are passionate 
      about helping businesses achieve success in the digital age.`,
    },
 
  ];

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.content}>
          <h1>Our Authenticity and Connection</h1>
        </div>
        <div className={styles.cardsOne}>
          <div className={styles.cardStyles}>
            <div className={css.cards}>
              {cardsOne.map((card, index) => (
                <div key={index} className={`${css.card} ${css.cardOne}`}>
                  <p className={css.description}>{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionStory;
