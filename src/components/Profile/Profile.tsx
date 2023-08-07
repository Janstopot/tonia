import React from 'react'

import styles from './Profile.module.scss'
import Image from 'next/image'

import profile from '../../assets/images/tonia_profile.png'

function Profile() {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.title}>MEET THE ARTIST</div>
                    <div className={styles.content}>
                        <div className={styles.text}>
                            <div className={styles.upperText}>
                                Born in France, in 1963 in Algeria where she will spend her adolescence, Tonia obtained a PhD in Public Health in the USA. Her work in this area has enabled her to practice and live throughout Africa, in countries as diverse as Mali, Zambia, Senegal, Cote d'Ivoire, Rwanda, Mamitania and others.
                            </div>
                            <div className={styles.lowerText}>
                                She took advantage of these stays to collect pearls from Africa and to document their uses panni the tradithérapeutes and these some animist pretres. Now retired, Tonia devotes herself to her passion, the pearls of Africa.
                            </div>
                        </div>
                        <div className={styles.imageContainer}>
                            <Image
                                src={profile}
                                alt="Profile picture"
                                className={styles.profileImage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile