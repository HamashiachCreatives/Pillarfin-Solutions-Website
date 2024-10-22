import React, { useEffect, useState } from 'react';
import styles from './styles.module.css'; // Importing the CSS file

const SectionFiveTwo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      title: 'Network Security:',
      description: 'We implement robust network security measures, including firewalls, intrusion detection and prevention systems (IDS/IPS), and vulnerability assessments to shield your network from unauthorized access.'
    },
    {
      title: 'Endpoint Protection:',
      description: 'We secure your devices, including desktops, laptops, and mobile devices, with advanced endpoint protection software to detect and prevent malware, ransomware, and other threats.'
    },
    {
      title: 'Security Awareness Training:',
      description: 'We empower your employees to become the first line of defense against cyberattacks by providing comprehensive security awareness training programs.'
    },
    {
      title: 'Security Incident Response:',
      description: 'In the event of a cyberattack, we have a proven security incident response plan to minimize damage, contain the breach, and restore operations efficiently.'
    },
    {
      title: 'Cloud Security:',
      description: 'Secure your cloud environments with our comprehensive cloud security solutions, including encryption, access management, and continuous monitoring.'
    },
    {
      title: 'Data Protection:',
      description: 'Protect your critical business data with our advanced data protection strategies, ensuring confidentiality, integrity, and availability.'
    },
  ];

  // Change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className={styles.container}>
      <button onClick={handlePrev} className={styles.navButton + ' ' + styles.left}>❮</button>
      <div className={styles.slider}>
        <div className={styles.slideTrack} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <div className={styles.slide} key={index}>
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
            </div>
          ))}
        </div>
      </div>
      <button onClick={handleNext} className={styles.navButton + ' ' + styles.right}>❯</button>
    </div>
  );
};

export default SectionFiveTwo;
