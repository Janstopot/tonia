import React from 'react'

import Link from 'next/link'
import styles from './Footer.module.scss'
import Image from 'next/image'

import facebook from '@/assets/images/Facebook.png'
import instagram from '@/assets/images/Instagram.png'

function Footer() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.font}>Follow us</div>
                <div className={styles.icons}>
                    <Link href="/" className={styles.spacing}>
                        <Image
                            src={instagram}
                            alt="Instagram logo"
                            className={styles.imgContainer}
                        />
                    </Link>
                    <Link href="/">
                        <Image
                            src={facebook}
                            alt="Facebook logo"
                            className={styles.imgContainer}
                        />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Footer