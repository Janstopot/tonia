import React from 'react'

import { useEffect, useState } from 'react';
import Link from 'next/link'
import styles from './Navbar.module.scss'
import Image from 'next/image'

import logo from '@/assets/images/Logo.png'
import search from '@/assets/images/Search.png'
import hamburger from "@/assets/images/hamburger.png"


function Navbar() {
    const [isActive, setIsActive] = useState(false);

    const handleMenuClick = () => {
        setIsActive((prevIsActive) => !prevIsActive);
    };


    return (
        <>
            <div className={styles.container}>
                <ul className={styles.content}>
                    <div>
                        <Link href="/">
                            <Image
                                src={logo}
                                alt="Logo"
                                className={styles.logoImage}
                            />
                        </Link>
                    </div>

                    <nav className={`${styles.text} ${styles.smallLinks}`}>
                        <a href="/">HOME</a>
                        <a href="/necklaces">NECKLACES</a>
                        <a href="/exhibitions">EXHIBITIONS</a>
                        <a href="/press">PRESS</a>
                        <a href="/contact">CONTACT</a>
                    </nav>
                    <Image src={search} alt="search" className={styles.searchImage} />
                    <button
                        className={`${styles.hamburger} ${isActive ? styles.isActive : ''}`}
                        onClick={handleMenuClick}
                    >
                        <div className={styles.bar}></div>
                    </button>
                    <nav className={`${styles.mobileNav} ${isActive ? styles.isActive : ''}`}>
                        <a href="/">HOME</a>
                        <a href="/necklaces">NECKLACES</a>
                        <a href="/exhibitions">EXHIBITIONS</a>
                        <a href="/press">PRESS</a>
                        <a href="/contact">CONTACT</a>
                    </nav>
                </ul>
            </div>
        </>
    )
}

export default Navbar