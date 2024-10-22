"use client";

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './navbar.module.css';
import lg from '../assets/lg.svg'
import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <section id='navbar' className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.logoContainer}>
            <Image src={lg} className={styles.logosImage} alt="Logo Image" />
            <a href="/" className={styles.logosDetails}>
              <h2>Pillarfin Solutions</h2>
              <p><i>Supporting you and your business</i></p>
            </a>
          </div>
          <div className={`${styles.linksContainer} ${isNavOpen ? styles.open : ''}`}>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/services" className={styles.link}>Our Services</Link>
            <Link href="/about" className={styles.link}>About Us</Link>
            <Link href="/story" className={styles.link}>Our Story</Link>
            <div className={styles.buttonContainer}>
              <div className={styles.polygonBackground}></div>
              <button className={styles.talkButton}>
                <Link href="/talk">Talk To Us</Link>
              </button>
            </div>
          </div>
          <div className={styles.navToggle} onClick={toggleNav}>
            {isNavOpen ? (
              <FaTimes className={styles.menuIcon} />
            ) : (
              <FaBars className={styles.menuIcon} />
            )}
          </div>
        </div>
    </section>
  );
};

export default Navbar;
