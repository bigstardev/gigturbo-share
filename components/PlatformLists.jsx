import React from 'react'
import { useAppContext } from '../context/AppContext'
import Platform from '../components/Platform'
export default function PlatformLists() {
    let { data, setData } = useAppContext()
    console.log(data)
    return (
        <div className="PlatformList">
            {
                data.map((platform) => (
                    <Platform key={platform.id} platformData={platform}
                    />
                ))

            }

        </div>


    )
}
//setData({ ...data, platform: { ["selected"]: !selected } })