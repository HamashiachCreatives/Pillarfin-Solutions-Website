"use client";

import React, { useState, useEffect } from 'react';
import styles from './banner.module.css';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Link from 'next/link';

const services = [
  { name: "Cloud Adoption", quote: "Transforming your business by maxmizing your IT Investment." },
  { name: "Saas Solutions", quote: "Cloud computing: Your business's best friend." },
  { name: "IT Consulting", quote: "Smarter Data driven decisions insightful results." },
  { name: "Cyber Security", quote: "Advanced security for a digital world, your peace of mind." },
  { name: "Data & Analytics", quote: "Transforming data into actionable insights." },
  { name: "Product Development", quote: "We design your dreams." }
];

const Banner = () => {
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
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextVariant((prevVariant) => (prevVariant + 1) % 2);
    }, 11000); // 11 seconds

    return () => clearInterval(textInterval);
  }, []);

  return (
    <section id='hero-section' className={styles.container}>
      <div className={styles.innerContainer}>
        {/* Banner Data Section */}
        <div className={styles.bannerData}>
          <h1>Discover the Perfect and Future ready  
            <span className={textVariant === 0 ? styles.textVariant1 : styles.textVariant2}>
              <br />Tech Stack To Maximize Your business Potential.
            </span>
          </h1>
          <p>
            We empower businesses with the tools and expertise to unlock data insights, optimize
            operations, and drive growth.
          </p>
          <Link href="/services" className={styles.btn}>
            Explore Our Services <FaLongArrowAltRight />
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
      </div>
    </section>
  );
};

export default Banner;
