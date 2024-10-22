import React from 'react';
import styles from './sectionabout.module.css';
import cardStyles from '../Main Page/cart.module.css'; // Import the card styles from CSS module


const SectionAbout = () => {
  const cardsOne = [
    { title: "Data Protection", description: "Peace of Mind with Robust Security." },
    { title: "Cloud Adoption", description: "Cloud computing: Your business's best friend." },
    { title: "Saas Solutions", description: "Transforming your business by maxmizing your IT Investment." },
    { title: "IT Consulting", description: "Smarter Data driven decisions insightful results." },
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
          <div className={styles.content}>
            <h1>Vision Statement: </h1>
            <p>
                "To be the trusted partner empowering businesses to thrive in the digital age through innovative IT 
                solutions and exceptional service." 
            </p>
          </div>
          <div className={styles.cardsOne}>
            <div className={styles.contentOne}>
              <h1>Mission Statement </h1>
              <p>To deliver exceptional IT solutions that empower businesses to achieve their full potential in the 
                digital age. 
              </p>
            </div>
            <div className={styles.cardStyles}>
              <div className={cardStyles.cards}>
                {cardsOne.map((card, index) => (
                  <div key={index} className={cardStyles.card}>
                    <h2 className={cardStyles.cardTitle}>{card.title}</h2>
                    <p className={cardStyles.description}>{card.description}</p>
                  </div>
                ))}
              </div>
              <div className={cardStyles.cardsOne}>
                {cardsTwo.map((card, index) => (
                  <div key={index} className={cardStyles.card}>
                    <h2 className={cardStyles.cardTitle}>{card.title}</h2>
                    <p className={cardStyles.description}>{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.cardsOne}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
            <div className={styles.contentOne}>
              <p>We empower businesses with the tools and expertise to unlock data insights, optimize operations, and 
                drive growth, to unlock the power of their technologies to optimize operations and drive growth..  </p>
            </div>
            <div className={styles.cardStyles}>
            </div>
          </div>
          <div className={styles.cardsTwo}></div>
          <div className={styles.blobs}>
            <div className={styles.blob1}></div>
            <div className={styles.blob2}></div>
            <div className={styles.blob3}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionAbout;
