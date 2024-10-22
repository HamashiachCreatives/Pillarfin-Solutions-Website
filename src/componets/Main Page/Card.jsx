import React from 'react';
import './card.css'; // Change the extension to .css
import styles from './sectionone.module.css';

const Card = () => {
  const cardsOne = [
    {
      title: 'Data Backup and Encryption:',
      description: `We employ secure data backup strategies and 
      encryption technologies to ensure your information remains safe, even in case 
      of a cyberattack.`
    },
    {
      title: 'Access Control:',
      description: `We implement robust access controls to restrict unauthorized 
      access to your data. `
    },
    {
      title: 'Compliance Expertise:',
      description: `Our team stays current on relevant data protection 
      regulations to ensure your business remains compliant. `
    }
  ];
  return (
    <div >
      <div className={styles.container}>
      <div className="container">
        <div className="cards">
          <div className="card card-one">
            <h2 className="card-title">Card One</h2>
            <p className="date">May 25, 2021</p>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores alias ut veniam?</p>
          </div>
          
          <div className="card card-two">
            <h2 className="card-title">Card Two</h2>
            <p className="date">May 26, 2021</p>
            <p className="description">If you read carefully, you'll find that this is not your typical lorem ipsum.</p>
          </div>
          
          <div className="card card-three">
            <h2 className="card-title">Card Three</h2>
            <p className="date">May 27, 2021</p>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores alias ut veniam?</p>
          </div>
          
          <div className="card card-four">
            <h2 className="card-title">Card Four</h2>
            <p className="date">May 28, 2021</p>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores alias ut veniam?</p>
          </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Card;
