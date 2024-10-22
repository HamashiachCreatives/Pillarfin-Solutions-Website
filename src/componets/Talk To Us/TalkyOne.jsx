"use client";

import React, { useRef, useState } from 'react';
import styles from './talky.module.css';
import Conta from '../assets/conta.png';

const TalkyOne = () => {
    const form = useRef();
    const [showPopup, setShowPopup] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);

        fetch('http://localhost:5000/send-email', {
            method: 'POST',
            body: JSON.stringify({
                user_name: formData.get('user_name'),
                user_email: formData.get('user_email'),
                message: formData.get('message')
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                setShowPopup(true);
                setTimeout(() => setShowPopup(false), 3000);
            } else {
                console.error('Failed to send the message');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.messageForm}>
                <h2 className={styles.title}>Send us a message</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" placeholder="John" name="user_name" className={styles.input} required />
                    <input type="email" placeholder="John@gmail.com" name="user_email" className={styles.input} required />
                    <textarea placeholder="Hello there" name="message" className={styles.textarea} required></textarea>
                    <button type="submit" className={styles.button}>Send Message</button>
                </form>
                {showPopup && (
                    <div className={styles.popup}>
                        <p>Message sent successfully!</p>
                    </div>
                )}
            </div>
            <div className={styles.contactInfo}>
                <div className={styles.contactIconWrapper}>
                    <img className={styles.conta} src={Conta} alt="Contact Emoji" />
                </div>
                <h2 className={styles.contactTitle}>Contact us</h2>
                <p>We're open for any suggestion or just to have a chat</p>
                <div className={styles.infoItem}>
                    <span><strong>Address:</strong> Nairobi CBD, Kenya</span>
                </div>
                <div className={styles.infoItem}>
                    <span><strong>Phone:</strong> +254 705 311 198</span>
                </div>
                <div className={styles.infoItem}>
                    <span><strong>Email:</strong> info@pillarfinsolutions.com</span>
                </div>
                <div className={styles.infoItem}>
                    <span><strong>Website:</strong> pillarfinsolutions.com</span>
                </div>
            </div>
        </div>
    );
};

export default TalkyOne;
