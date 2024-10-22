"use client";

import React, { useState } from 'react';
import styles from './sectionfive.module.css'
import SectionFiveOne from './SectionFiveOne';
import { SectionOne } from '..';
import SectionFiveTwo from './SectionFiveTwo';

const services = [
  {
    name: 'Network Security:',
    quote:
      'We implement robust network security measures, including firewalls, intrusion detection and prevention systems (IDS/IPS), and vulnerability assessments to shield your network from unauthorized access.',
  },
  {
    name: 'Endpoint Protection:',
    quote:
      'We secure your devices, including desktops, laptops, and mobile devices, with advanced endpoint protection software to detect and prevent malware, ransomware, and other threats.',
  },
  {
    name: 'Security Awareness Training:',
    quote:
      'We empower your employees to become the first line of defence against cyberattacks by providing comprehensive security awareness training programs.',
  },
  {
    name: 'Security Incident Response:',
    quote:
      'In the event of a cyberattack, we have a proven security incident response plan to minimize damage, contain the breach, and restore operations efficiently.',
  },
  {
    name: 'Cloud Security:',
    quote:
      'Secure your cloud environments with our comprehensive cloud security solutions, including encryption, access management, and continuous monitoring.',
  },
  {
    name: 'Data Protection:',
    quote:
      'Protect your critical business data with our advanced data protection strategies, ensuring confidentiality, integrity, and availability.',
  },
];

const SectionFive = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 3 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === services.length - 3 ? 0 : prevIndex + 1
    );
  };

  const getTransformStyle = () => {
    const cardsPerView = window.innerWidth <= 480 ? 1 : window.innerWidth <= 768 ? 1.5 : 3;
    return { transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` };
  };

  return (
    <section id='Fortify Your Defences: Cybersecurity'>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.content}>
            <h1>4. Fortify Your Defences: Cybersecurity</h1>
            <p>
              <strong>Combatting Cyber Threats in a Digital Age:</strong> The
              evolving cyber threat landscape demands a proactive approach to
              cybersecurity. We offer a comprehensive suite of cybersecurity
              services designed to safeguard your data, systems, and networks
              from malicious attacks.
              <strong> Our Cybersecurity Solutions:</strong>
            </p>
          </div>
          
          <SectionFiveOne />
          <div className={styles.content}>
            <h1>Why Choose Us for Cybersecurity?:</h1>
            <p>
                We go beyond basic antivirus software. Our team of 
                cybersecurity experts stays current on the latest threats and leverages advanced tools and techniques to 
                protect your organization comprehensively.  

            </p>
          </div>
          <SectionOne />
        </div>
      </div>
    </section>
  );
};

export default SectionFive;