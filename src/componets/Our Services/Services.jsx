import React from 'react'
import styles from './services.module.css'
import ServicesSection from './ServicesSection'

const Services = () => {
  return (
    <section id='Services Page'>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <ServicesSection />
        </div>
      </div>
    </section>
  )
}

export default Services
