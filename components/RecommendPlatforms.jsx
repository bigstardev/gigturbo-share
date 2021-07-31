import React from 'react';
import styles from '../styles/RecommendPlatforms.module.css'
import { useAppContext } from '../context/AppContext'
// import Modal from 'react-modal';
// import ModalContent from '../components/ModalContent';
import ActivePlatform from './ActivePlatform';
export default function RecommendPlatforms() {
    let { data, setData } = useAppContext()
    let totalList = data.filter((platform) => platform.selected == true)
    /* Change the index of active platform and show relevant image*/
    const [activePlatform, setActivePlatform] = React.useState(0)
    // const [showModal, setShowModal] = React.useState(false)



    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.selectedItems}>
                        {totalList.length > 0 &&
                            totalList.map((platform, index) => (
                                <button key={index} className={styles.selectedPlatform + ' ' + `${activePlatform == index ? styles.active : ""}`} onClick={() => setActivePlatform(index)}>
                                    {platform.title}
                                    <span>

                                        <img src={platform.icon} alt="" />
                                    </span>
                                </button>


                            ))
                        }

                        <button >Add Next</button>
                    </div>
                    <div className={styles.platformLists}>
                        {totalList.length > 0 &&
                            totalList[activePlatform].platforms.map((modalContent, index) => (
                                <ActivePlatform key={index} id={index} data={modalContent} />
                            ))
                        }
                    </div>

                </div>

            </div>

        </>

    )
}
