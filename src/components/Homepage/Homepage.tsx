import React from 'react'

import styles from './Homepage.module.scss'

function Homepage() {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.backgroundImage}></div>
                <div className={styles.container}>
                    <div className={styles.title}>TONIA'S</div>
                    <div className={styles.subtitle}>NECKLACES</div>
                    <div className={styles.text}>Suddenly you carry a part of Africa's history</div>
                </div>
            </div>
        </>
    )
}

export default Homepage