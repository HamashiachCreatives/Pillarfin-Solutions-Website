"use client";

import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import icons
import styles from './sectionfour.module.css';

const services = [
  { name: "Consolidate and Cleanse Data", quote: `We can help eliminate data silos and inconsistencies, ensuring the quality and accuracy of your data for reliable analysis.` },
  { name: "Advanced Analytics and Reporting", quote: `Leverage our expertise in data mining, machine learning, and statistical modelling to uncover hidden patterns and trends within your data. We create insightful reports and dashboards that provide clear visualizations of complex information.` },
  { name: "Predictive Analytics", quote: `Go beyond the present with our predictive analytics capabilities. We can help you forecast future trends, anticipate customer behaviour, and make data-driven decisions that optimize your business strategies.` },
  { name: "Prescriptive Analytics", quote: `Goes beyond predicting future outcomes by recommending optimal courses of action. By combining data-driven insights with advanced algorithms, we help you make informed decisions that drive tangible results by empowering your business to optimize operations, maximize revenue, manage risks, and allocate resources effectively.` },
];

const SectionFour = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (dir) => {
    if (dir === 'LEFT') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    } else if (dir === 'RIGHT') {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('LEFT'),
    onSwipedRight: () => handleSwipe('RIGHT'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <section id='Unleash the Power of Your Data: Data & Analytics'>
      <div className={styles.container}>
        <div className={styles.innerContainer} {...handlers}>
          <div className={styles.holder}>
            <div className={styles.content}>
              <h1>3. Unleash the Power of Your Data: Data & Analytics</h1>
              <p>
                <strong>Transform Data into Actionable Insights:</strong> In today's data-driven world, extracting value from
                information is crucial. We offer a comprehensive suite of data and analytics services to help you unlock
                the power of your data and make data-driven decisions that fuel business growth.
              </p>
            </div>
            <div className={styles.cardsOne}>
              <button className={`${styles.navButton} ${styles.left}`} onClick={handlePrev}>
                <FaArrowLeft />
              </button>
              <div className={styles.card}>
                <div className={styles.cardy}>
                  <h2>{services[currentIndex].name}</h2>
                  <p>{services[currentIndex].quote}</p>
                </div>
              </div>
              <button className={`${styles.navButton} ${styles.right}`} onClick={handleNext}>
                <FaArrowRight />
              </button>
              <div className={styles.toggles}>
                {services.map((_, index) => (
                  <div
                    key={index}
                    className={`${styles.toggle} ${index === currentIndex ? styles.active : ''}`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
