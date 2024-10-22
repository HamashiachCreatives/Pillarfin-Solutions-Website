"use client";

import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import styles from "./infinatescroller.module.css";

const services = [
  {
    name: "IT Consulting",
    quote: `Our IT consulting services provide strategic guidance to help businesses harness technology for 
        growth and efficiency. We analyze your unique needs, develop tailored IT roadmaps, and optimize 
        operations for maximum ROI to keep you focused on your growth.`,
  },
  {
    name: "Cloud Adoption",
    quote: `Accelerate your digital transformation with our cloud adoption services. We help businesses migrate 
        to the cloud, optimize cloud resources, and leverage cloud-based solutions for increased agility and 
        cost savings.`,
  },
  {
    name: "SaaS Solutions",
    quote: `Streamline your business processes with our carefully selected SaaS solutions. We offer a range of 
        software applications to improve productivity, collaboration, and customer engagement.`,
  },
  {
    name: "Data & Analytics",
    quote: `Unlock the power of your data with our advanced analytics solutions. We help you turn raw data into 
        actionable insights to drive informed decision-making and gain a competitive edge.`,
  },
  {
    name: "Cybersecurity",
    quote: `Protect your business from cyber threats with our robust cybersecurity solutions. We offer 
        comprehensive protection to safeguard your sensitive data, systems, and networks.`,
  },
  {
    name: "Product Development",
    quote: `Transform your ideas into innovative products with our end-to-end product development services. 
        We provide expert guidance from concept to launch, ensuring your product meets market demands.`,
  },
];

const InfinateScroller = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true, // Enable swipe with mouse
  });

  return (
    <div className={styles.cardsOne} {...handlers}>
      <button className={`${styles.navButton} ${styles.left}`} onClick={handlePrev}>
        Previous
      </button>
      <div className={styles.card}>
        <div className={styles.cardy}>
          <h2>{services[currentIndex].name}</h2>
          <p>{services[currentIndex].quote}</p>
        </div>
      </div>
      <button className={`${styles.navButton} ${styles.right}`} onClick={handleNext}>
        Next
      </button>
      <div className={styles.toggles}>
        {services.map((_, index) => (
          <div
            key={index}
            className={`${styles.toggle} ${
              index === currentIndex ? styles.active : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default InfinateScroller;
