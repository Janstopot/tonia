import React from 'react'

import { useEffect, useState } from 'react';
import Link from 'next/link'
import styles from './Navbar.module.scss'
import Image from 'next/image'
import { useLanguage } from '@/hooks/LanguageContext';

import logo from '@/assets/images/Logo.png'
import search from '@/assets/images/Search.png'
import { useRouter } from 'next/router';

function Navbar() {
    const router = useRouter()
    const [current, setCurrent] = useState(router.pathname);
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

    useEffect(()=> {
        setCurrent(router.pathname)
    }, [router.pathname])

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
                        <Link href="/" className={current == "/" ? styles.current : ''}>{linkText[currentLanguage].home}</Link>
                        <Link href="/profile" className={current == "/profile" ? styles.current : ''}>{linkText[currentLanguage].artist}</Link>
                        <Link href="/necklaces" className={current == "/necklaces" ? styles.current : ''}>{linkText[currentLanguage].necklaces}</Link>
                        <Link href="/exhibitions" className={current == "/exhibitions" ? styles.current : ''}>{linkText[currentLanguage].exhibitions}</Link>
                        <Link href="/press" className={current == "/press" ? styles.current : ''}>{linkText[currentLanguage].press}</Link>
                        <Link href="/contact" className={current == "/contact" ? styles.current : ''}>{linkText[currentLanguage].contact}</Link>
                        {!isActive && !isSmallScreen && (
                            <>
                                <button className={`${styles.languageBtn} ${currentLanguage === 'ENG' ? styles.active : ''}`} onClick={handleEngClick}>ENG</button>
                                <div className={styles.line}>|</div>
                                <button className={`${styles.languageBtn} ${currentLanguage === 'FR' ? styles.active : ''}`} onClick={handleFrClick}>FR</button>
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
                        <Link href="/profile" className={current == "/profile" ? styles.current : ''} onClick={handleLinkClick}>
                            {linkText[currentLanguage].artist}
                        </Link>
                        <Link href="/necklaces" className={current == "/necklaces" ? styles.current : ''} onClick={handleLinkClick}>
                            {linkText[currentLanguage].necklaces}
                        </Link>
                        <Link href="/exhibitions" className={current == "/exhibitions" ? styles.current : ''} onClick={handleLinkClick}>
                            {linkText[currentLanguage].exhibitions}
                        </Link>
                        <Link href="/press" className={current == "/press" ? styles.current : ''} onClick={handleLinkClick}>
                            {linkText[currentLanguage].press}
                        </Link>
                        <Link href="/contact" className={current == "/contact" ? styles.current : ''} onClick={handleLinkClick}>
                            {linkText[currentLanguage].contact}
                        </Link>
                        {isActive && (
                            <div className={styles.navLanguageBtn}>
                                <button className={`${styles.languageBtn} ${currentLanguage === 'ENG' ? styles.active : ''}`} onClick={handleEngClick}>ENG</button>
                                <div className={styles.line}>|</div>
                                <button className={`${styles.languageBtn} ${currentLanguage === 'FR' ? styles.active : ''}`} onClick={handleFrClick}>FR</button>
                            </div>
                        )}
                    </nav>
                </ul>
            </div>
        </>
    )
}

export default Navbar