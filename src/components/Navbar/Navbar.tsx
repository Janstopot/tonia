import React from 'react'

import { useEffect, useState } from 'react';
import Link from 'next/link'
import styles from './Navbar.module.scss'
import Image from 'next/image'

import logo from '@/assets/images/Logo.png'
import search from '@/assets/images/Search.png'
import hamburger from "@/assets/images/hamburger.png"

function shouldShowAdditionalNavItems() {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        setWindowWidth(window.innerWidth);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowWidth > 425.98;
}

function Navbar() {
    const [isResponsiveMode, setIsResponsiveMode] = useState(false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 425.98) {
                setIsResponsiveMode(true);
            } else {
                setIsResponsiveMode(false);
            }
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
                    <li>
                        <Link href="/">HOME</Link>
                    </li>
                    {shouldShowAdditionalNavItems() && (
                        <>
                            <li>
                                <Link href="/profile">MEET THE ARTIST</Link>
                            </li>
                            <li>
                                <Link href="/necklaces">NECKLACES</Link>
                            </li>
                            <li>
                                <Link href="/exhibitions">EXHIBITIONS</Link>
                            </li>
                            <li>
                                <Link href="/press">PRESS</Link>
                            </li>
                            <li>
                                <Link href="/contact">CONTACT</Link>
                            </li>
                        </>
                    )}
                    <Image
                        src={isResponsiveMode ? hamburger : search}
                        alt="Logo"
                        className={styles.searchImage}
                    />
                </ul>
            </div>
        </>
    )
}

export default Navbar