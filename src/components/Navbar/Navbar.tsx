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

    const handleLinkClick = () => {
        setIsActive(false);
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
                        <Link href="/">HOME</Link>
                        <Link href="/necklaces">NECKLACES</Link>
                        <Link href="/exhibitions">EXHIBITIONS</Link>
                        <Link href="/press">PRESS</Link>
                        <Link href="/contact">CONTACT</Link>
                    </nav>
                    <Image src={search} alt="search" className={styles.searchImage} />
                    <button
                        className={`${styles.hamburger} ${isActive ? styles.isActive : ''}`}
                        onClick={handleMenuClick}
                    >
                        <div className={styles.bar}></div>
                    </button>
                    <nav className={`${styles.mobileNav} ${isActive ? styles.isActive : ''}`}>
                        <Link href="/" onClick={handleLinkClick}>HOME</Link>
                        <Link href="/necklaces" onClick={handleLinkClick}>NECKLACES</Link>
                        <Link href="/exhibitions" onClick={handleLinkClick}>EXHIBITIONS</Link>
                        <Link href="/press" onClick={handleLinkClick}>PRESS</Link>
                        <Link href="/contact" onClick={handleLinkClick}>CONTACT</Link>
                    </nav>
                </ul>
            </div>
        </>
    )
}

export default Navbar