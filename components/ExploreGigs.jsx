import Link from 'next/link';
import React from 'react'
import { useAppContext } from '../context/AppContext';
import styles from '../Styles/ExploreGigs.module.css';
export default function ExploreGigs() {
    let { data, setData } = useAppContext()
    let selectedList = data.filter((platform) => platform.selected == true)
    return (
        <div className={styles.container}>
            <div className={styles.wrapper + ' ' + `${selectedList.length > 0 ? styles.selected : " "}`}>
                {
                    selectedList.length > 0 ? <div className={styles.selectedWrapper}>
                        <div className={styles.selectedItems}>
                            {selectedList.map((item, id) =>
                                <img src={item.icon} key={id} />
                            )}

                        </div>
                        <div><Link href="/second"><button className={styles.exploreBtn}>Explore Gigs</button></Link></div>

                    </div> : <div style={{ margin: "auto" }}>Select to continue</div>
                }


            </div>
        </div >
    )
}
