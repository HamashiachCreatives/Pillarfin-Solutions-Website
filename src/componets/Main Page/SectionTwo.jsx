import React from 'react'
import styles from './sectiontwo.module.css'
import Saz from './Saz'

const SectionTwo = () => {
  return (
    <div id='Empowering Decisions with IT Consulting'>
      <div id='sectionTwo' className={styles.container}>
        <div className={styles.innerContainer}>
        <div className={styles.content}>
            <h1>1.  Empowering Decisions with IT Consulting:  </h1>
            <p>
              As experts and consultants we
              analyze your needs and recommend the best IT solutions to achieve 
                your business goals. We leverage cutting-edge technologies like cloud computing, automation, and 
                artificial intelligence (AI) to create a digital transformation roadmap that streamlines processes, boosts 
                efficiency, and fuels growth.
                </p>
            </div>
            <div className={styles.cardsOne}>
                <Saz />
            </div>
        
        </div>
      </div>
    </div>
  )
}

export default SectionTwo
