import styles from '../styles/AddLocation.module.css';

export default function AddLocation() {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>

                <input className={styles.LocationInput} placeholder="Add location" />
                <div className={styles.location}>
                    <img src="/Icons/location.png" alt="location" className={styles.locationIcon} />


                    <span>Locate Me</span>

                </div>




            </div>

        </div>
    )

}
