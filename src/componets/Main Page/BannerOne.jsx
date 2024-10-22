"use client";

import React, { useState, useEffect } from 'react';
import styles from './bannerone.module.css';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Link  from 'next/link'

const services = [
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

const BannerOne = () => {
  const [visibleServices, setVisibleServices] = useState([]);
  const [index, setIndex] = useState(0);
  const [textVariant, setTextVariant] = useState(0);

  useEffect(() => {
    const updateVisibleServices = () => {
      const newServices = services.slice(index, index + 4);
      if (newServices.length < 4) {
        newServices.push(...services.slice(0, 4 - newServices.length));
      }
      setVisibleServices(newServices);
    };

    updateVisibleServices();

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 300000000000000000);

    return () => clearInterval(interval);
  }, [index]);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextVariant((prevVariant) => (prevVariant + 1) % 2);
    }, 1100000000000000000); // 11 seconds

    return () => clearInterval(textInterval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {/* Banner Data Section */}
        <div className={styles.bannerData}>
          <h1>Unleash the Power of  Your Technology and Data.
            
          </h1>
          <p>
            We interrogate technologies, enlighten to inspire and solve problems.
          </p>
          <Link href="/about/values" className={styles.btn} role="button">
            Our Core Values <FaLongArrowAltRight />
          </Link>
        </div>

        {/* Banner Image Section */}
        <div className={styles.bannerImage}>
          <div className={styles.polygonBackground}></div>
          <div className={styles.floatingCard}></div>
            <div className={styles.servicesCard}>
              {visibleServices.map((service, idx) => (
                <div key={idx} className={styles.serviceCard}>
                  <p>{service.name}</p>
                  <span className={styles.quote}>"{service.quote}"</span>
                </div>
              ))}
            </div>
        </div>

        {/* Banner Image Section */}
        <div className={styles.bannerImageOne}>
          <div className={styles.polygonBackground}></div>
          <div className={styles.floatingCard}></div>
            <div className={styles.servicesCard}>
              {visibleServices.map((service, idx) => (
                <div key={idx} className={styles.serviceCard}>
                  <p>{service.name}</p>
                  <span className={styles.quote}>"{service.quote}"</span>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default BannerOne;
