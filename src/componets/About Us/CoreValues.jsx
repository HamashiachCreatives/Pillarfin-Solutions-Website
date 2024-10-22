import React from 'react';
import styles from './corevalues.module.css';
import cardStyles from '../Main Page/cart.module.css'; // Import the card styles from CSS module


const CoreValues = () => {
  const cardsOne = [
    { name: "Partnership", quote: `We believe in building strong, long-term partnerships with our clients. 
      By understanding their unique needs and challenges, we collaborate closely to 
      deliver tailored solutions that drive success.` },
      { name: "Agility", quote: `We thrive in a dynamic digital landscape. Our agility enables us to adapt quickly to 
      emerging technologies and market trends, ensuring that our clients stay ahead of the curve.` },
      { name: "Excellence", quote: `We are committed to delivering exceptional 
      IT solutions and services that align with client expectations. Our pursuit of excellence drives us to continuously
       improve our offerings and deliver measurable results.` },
      { name: "Impact", quote: `Our focus is on creating a positive impact on our clients' businesses. 
      By providing innovative IT solutions, we empower organizations to achieve their goals, enhance efficiency, 
      and gain a competitive edge.` }
  ];

  const cardsTwo = [
    { title: "Cyber Security", description: "Advanced security for a digital world, your peace of mind." },
    { title: "Data & Analytics", description: "Transforming data into actionable insights." },
    { title: "Product Development", description: "We design your dreams." }
  ];

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
            <div className={styles.cardStyles}>
              <div className={cardStyles.cards}>
                {cardsOne.map((card, index) => (
                  <div key={index} className={cardStyles.card}>
                    <h2 className={cardStyles.cardTitle}>{card.name}</h2>
                    <p className={cardStyles.description}>{card.quote}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CoreValues;
