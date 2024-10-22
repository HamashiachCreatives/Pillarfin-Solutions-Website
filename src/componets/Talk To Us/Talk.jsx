import React from 'react';
import styles from './talk.module.css';
import Talky from './Talky';

const Talk = () => {
  return (
    <section id='Contact Us Page'>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <Talky />
        </div>
      </div>
    </section>
  );
}

export default Talk;
