import React from 'react'
import Image from 'next/image'
import PlatformStyle from '../styles/Platform.module.css'
import { useAppContext } from '../context/AppContext'
export default function Platform({ platformData }) {
    let { data, setData } = useAppContext()


    function selectPlatform() {
        platformData.selected = !platformData.selected


        setData([...data])

    }
    let className = `${platformData.selected ? PlatformStyle.selected : " "}`;

    return (
        <div className={PlatformStyle.wrapper + ' ' + className}
            onClick={selectPlatform}
        >
            <div className={PlatformStyle.icon_title}>
                <div>
                    <img src={platformData.icon} alt="a" className={PlatformStyle.icon} />
                </div>

                <div className={PlatformStyle.title}>
                    {platformData.title}
                </div>
            </div>

            <div className={PlatformStyle.platforms}>
                {platformData.platforms.map((platform, id) =>
                    <img src={platform.icon} alt="" key={id} />

                )}

                <button>+</button>
            </div>
        </div >
    )
}
