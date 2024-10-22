import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <p className={styles.matiku}>
            &copy; All rights reserved to Pillarfin Solutions, 2024.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
