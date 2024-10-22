import React from 'react';
import styles from './cardOne.module.css';

const Cardy = () => {
  return (
    <div id='cardi'>
      
      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.icon}></div>
          <p className={styles.title}>Business Impact Analysis:</p>
          <a href="#cardi" className={styles.readMore}>Read More</a>
          <p className={styles.text}>We employ secure data backup strategies and 
            encryption tech. We identify your critical business functions and prioritize their 
            recovery in case of a disruption.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}></div>
          <p className={styles.title}>Disaster Recovery Testing:</p>
          <a href="#cardi" className={styles.readMore}>Read More</a>
          <p className={styles.text}>We conduct regular testing of your disaster recovery plan to ensure its 
            effectiveness.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cardy;
