import React from 'react'
import styles from '../styles/ModalContent.module.css';
export default function ModalContent({ content, closeModal }) {
    console.log("content", content)
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <div>  <img src={content.image} alt="" /></div>
                    <div> <h3>{content.name}</h3></div>

                </div>
            </div>
            <div className={styles.content}>
                <div>Work Location: {content.content.location}</div>
                <div>Job Catergories: {content.content.job_category}</div>
                <div>Hourly Rate: {content.content.hourly_rate}</div><br />

                <div>{content.content.description}</div>
            </div>
            <div className={styles.footer}>
                <button>Start Petbacker on Gigturbe</button>
                <span onClick={() => closeModal(false)}>Not now</span>
            </div>

        </div>
    )
}
