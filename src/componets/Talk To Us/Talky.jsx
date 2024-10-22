"use client";

import { useState } from 'react';
import styles from './talky.module.css';
import Conta from '../assets/conta.png';
import Image from 'next/image';

const ContactForm = () => {
    const [user_name, setUserName] = useState('');
    const [user_email, setUserEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const [fadeOut, setFadeOut] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('https://formspree.io/f/mvgpnkpe', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                name: user_name, 
                email: user_email, 
                message: message 
            }),
        });

        if (response.ok) {
            setStatus('Email sent successfully!');
            setFadeOut(false); // Ensure message is visible
            setTimeout(() => {
                setFadeOut(true); // Start fade-out effect after 3 seconds
            }, 3000);

            setTimeout(() => {
                setStatus(''); // Remove message completely
                setUserName(''); // Clear input fields
                setUserEmail('');
                setMessage('');
            }, 3500); // Fades out completely after 3 seconds and clears inputs
        } else {
            setStatus('An error occurred while sending the email.');
            setFadeOut(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.messageForm}>
                <form onSubmit={handleSubmit}>
                    <h2 className={styles.title}>Send us a message</h2>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Your Name"
                        value={user_name}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                        aria-label="Your Name"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className={styles.input}
                        value={user_email}
                        onChange={(e) => setUserEmail(e.target.value)}
                        required
                        aria-label="Your Email"
                    />
                    <textarea
                        placeholder="Your Message"
                        value={message}
                        className={styles.input}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        aria-label="Your Message"
                    ></textarea>
                    <button type="submit" className={styles.button}>Send</button>
                    {status && (
                        <p className={`${styles.status} ${fadeOut ? styles.fadeOut : ''}`}>
                            {status}
                        </p>
                    )}
                </form>
            </div>
            <div className={styles.contactInfo}>
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

export default ContactForm;
