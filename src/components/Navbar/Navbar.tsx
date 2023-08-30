import React from 'react'

import Link from 'next/link'
import styles from './Navbar.module.scss'
import Image from 'next/image'

import logo from '@/assets/images/Logo.png'
import search from '@/assets/images/Search.png'

function Navbar() {
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
                    <Image
                        src={search}
                        alt="Logo"
                        className={styles.searchImage}
                    />
                </ul>
            </div>
        </>
    )
}

export default Navbar