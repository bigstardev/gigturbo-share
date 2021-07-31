import Link from "next/link"
import React from 'react';
import navStyles from '../styles/Nav.module.css'

export default function Nav() {
    const [showMenu, SetShowMenu] = React.useState(false)
    return (
        <>
            <div className={navStyles.topBar}>
                <div className={navStyles.nav}>
                    <div className={navStyles.left}>
                        <ul>
                            <li>
                                <Link href="/"><img alt="logo" src="/logo.svg" /></Link>

                            </li>
                            <li>
                                <Link href="/second">Discover Gigs</Link>
                            </li>
                            <li>
                                <Link href="/">Community</Link>
                            </li>
                            <li>
                                <Link href="/">Promotions</Link>
                            </li>
                            <li>
                                <Link href="/">FAQ</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={navStyles.right}>

                        <ul>
                            <li>
                                <Link href="/login">Login</Link>
                            </li>
                            <li>
                                <div className={navStyles.join}>
                                    <Link href="/signup" >Get Started</Link>
                                </div>

                            </li>
                        </ul>
                    </div>
                </div>


            </div>
            <div className={navStyles.mobileNav}>
                <div className={navStyles.mContainer}>
                    <div className={navStyles.mLeft}>
                        <Link href="/"><img alt="logo" src="/logo.svg" /></Link>
                    </div>
                    <div className={navStyles.mRight}>
                        <div className={navStyles.hamburger} onClick={() => SetShowMenu(!showMenu)} >
                            <span className={navStyles.line1}></span>
                            <span className={navStyles.line2}></span>
                            <span className={navStyles.line3}></span>
                        </div>

                    </div>
                </div>
            </div>
            <div className={navStyles.menu + ' ' + `${showMenu ? navStyles.another : " "}`}>
                <ul>
                    <li>
                        <Link href="/second">Discover Gigs</Link>
                    </li>
                    <li>
                        <Link href="/">Community</Link>
                    </li>
                    <li>
                        <Link href="/">Promotions</Link>
                    </li>
                    <li>
                        <Link href="/">FAQ</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
