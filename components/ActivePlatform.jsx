import React from 'react'
import styles from '../styles/ActivePlatform.module.css'
import Modal from 'react-modal';
import ModalContent from '../components/ModalContent';
export default function ActivePlatform({ data }) {
    const [showModal, setShowModal] = React.useState(false)
    console.log("data", data)
    return (
        <>
            <img src={data.image} alt="platform"
                onClick={() => setShowModal(true)} />
            <Modal
                isOpen={showModal}
                ariaHideApp={false}
                contentLabel="Minimal Modal Example"
                className={styles.modal}
                overlayClassName={styles.modalOverlay}
                onRequestClose={() => setShowModal(false)}
            >
                <ModalContent content={data} closeModal={() => setShowModal(false)} />
            </Modal>
        </>
    )
}
