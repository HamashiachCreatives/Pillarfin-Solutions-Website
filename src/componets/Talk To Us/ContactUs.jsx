import React from 'react';
import styles from './ContactUs.module.css';

const ContactUs = () => {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <h1 className={styles.h1}>contact us</h1>
            </div>
            <div className={styles.row}>
                <h4 className={styles.h4} style={{ textAlign: 'center' }}>We'd love to hear from you!</h4>
            </div>
            <div className={`${styles.row} ${styles.inputContainer}`}>
                <div className="col-xs-12">
                    <div className={`${styles.styledInput} ${styles.wideInput}`}>
                        <input className={styles.input} type="text" required />
                        <label className={styles.label}>Name</label>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className={styles.styledInput}>
                        <input className={styles.input} type="text" required />
                        <label className={styles.label}>Email</label>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className={styles.styledInput} style={{ float: 'right' }}>
                        <input className={styles.input} type="text" required />
                        <label className={styles.label}>Phone Number</label>
                    </div>
                </div>
                <div className="col-xs-12">
                    <div className={`${styles.styledInput} ${styles.wideInput}`}>
                        <textarea className={styles.textarea} required></textarea>
                        <label className={styles.label}>Message</label>
                    </div>
                </div>
                <div className="col-xs-12">
                    <div className={`${styles.btnLrg} ${styles.submitBtn}`}>Send Message</div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
