import Contact from '@/components/Contact/Contact'
import React from 'react'
import styles from '@/styles/Home.module.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function contact() {
  return (
    <div>
        <main className={`${styles.main} ${inter.className}`}>
          <div className={styles.description}>
            <Contact />
          </div>
        </main>
    </div>
  )
}

export default contact