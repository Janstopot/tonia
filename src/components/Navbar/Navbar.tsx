import React from 'react'

import { useEffect, useState } from 'react';
import Link from 'next/link'
import styles from './Navbar.module.scss'
import Image from 'next/image'
import { useLanguage } from '@/hooks/LanguageContext';

import logo from '@/assets/images/Logo.png'
import search from '@/assets/images/Search.png'

function Navbar() {
    const [isActive, setIsActive] = useState(false);
    const { currentLanguage, handleEngClick, handleFrClick } = useLanguage() as { currentLanguage: "ENG" | "FR", handleEngClick: () => void, handleFrClick: () => void };

    const handleMenuClick = () => {
        setIsActive((prevIsActive) => !prevIsActive);
    };

    const handleLinkClick = () => {
        setIsActive(false);
    };

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {

        const updateScreenSize = () => {
            setIsSmallScreen(window.innerWidth <= 428.98);
        };

        updateScreenSize();

        window.addEventListener("resize", updateScreenSize);

        return () => window.removeEventListener("resize", updateScreenSize);
    }, []);

    const linkText = {
        ENG: {
            home: 'HOME',
            artist: 'MEET THE ARTIST',
            necklaces: 'NECKLACES',
            exhibitions: 'EXHIBITIONS',
            press: 'PRESS',
            contact: 'CONTACT',
        },
        FR: {
            home: 'ACCUEIL',
            artist: 'L\'ARTISTE',
            necklaces: 'COLLIERS',
            exhibitions: 'EXPOSITIONS',
            press: 'PRESSE',
            contact: 'CONTACT',
        },
    };


    return (
        <>
            <div className={styles.container}>
                <ul className={styles.content}>
                    <div className={styles.logoContainer}>
                        <Link href="/">
                            <Image
                                src={logo}
                                alt="Logo"
                                className={styles.logoImage}
                            />
                        </Link>
                    </div>
                    <nav className={`${styles.text} ${styles.smallLinks}`}>
                        <Link href="/">{linkText[currentLanguage].home}</Link>
                        <Link href="/profile">{linkText[currentLanguage].artist}</Link>
                        <Link href="/necklaces">{linkText[currentLanguage].necklaces}</Link>
                        <Link href="/exhibitions">{linkText[currentLanguage].exhibitions}</Link>
                        <Link href="/press">{linkText[currentLanguage].press}</Link>
                        <Link href="/contact">{linkText[currentLanguage].contact}</Link>
                        {!isActive && !isSmallScreen && (
                            <>
                                <button className={styles.languageBtn} onClick={handleEngClick}>ENG</button>
                                <div className={styles.line}>|</div>
                                <button className={styles.languageBtn} onClick={handleFrClick}>FR</button>
                            </>
                        )}
                    </nav>
                    <div className={styles.searchContainer}>

                        <Image src={search} alt="search" className={styles.searchImage} />
                    </div>
                    <button
                        className={`${styles.hamburger} ${isActive ? styles.isActive : ''}`}
                        onClick={handleMenuClick}
                    >
                        <div className={styles.bar}></div>
                    </button>
                    <nav className={`${styles.mobileNav} ${isActive ? styles.isActive : ''}`}>
                        <Link href="/profile" onClick={handleLinkClick}>
                            {linkText[currentLanguage].artist}
                        </Link>
                        <Link href="/necklaces" onClick={handleLinkClick}>
                            {linkText[currentLanguage].necklaces}
                        </Link>
                        <Link href="/exhibitions" onClick={handleLinkClick}>
                            {linkText[currentLanguage].exhibitions}
                        </Link>
                        <Link href="/press" onClick={handleLinkClick}>
                            {linkText[currentLanguage].press}
                        </Link>
                        <Link href="/contact" onClick={handleLinkClick}>
                            {linkText[currentLanguage].contact}
                        </Link>
                        {isActive && (
                            <div className={styles.navLanguageBtn}>
                                <button className={styles.languageBtn} onClick={handleEngClick}>ENG</button>
                                <div className={styles.line}>|</div>
                                <button className={styles.languageBtn} onClick={handleFrClick}>FR</button>
                            </div>
                        )}
                    </nav>
                </ul>
            </div>
        </>
    )
}

export default Navbar