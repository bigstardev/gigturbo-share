import React from 'react'
import Image from 'next/image'
import searchStyle from "../styles/Search.module.css"
import searchIcon from '../public/search.png'
export default function Search() {
    return (
        <div className={searchStyle.container}>
            <div className={searchStyle.wrapper}>

                <span className={searchStyle.searchIcon}>
                    <Image src={searchIcon} alt="search" />
                </span>

                <input className={searchStyle.searchInput} placeholder="Search..." />


            </div>

        </div>
    )
}
