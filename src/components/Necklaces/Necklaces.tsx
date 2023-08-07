import React from 'react'

import styles from './Necklaces.module.scss'

function Necklaces() {
  return (
    <div className={styles.container}>
        <div>NECKLACES</div>
        <div className={styles.imageContainer}>
            <div className={styles.imageLeft}>
                <div>WOMAN</div>
            </div>
            <div className={styles.imageRight}>
                <div>MAN</div>
            </div>
        </div>
    </div>
  )
}

export default Necklaces