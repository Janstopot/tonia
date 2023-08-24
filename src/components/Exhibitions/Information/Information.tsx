import React from 'react';
import styles from './Information.module.scss';
import { useRouter } from 'next/router';

import { Exhibition } from './exhibitionData';
import exhibitionData from './exhibitionData';

import backgroundImages from './backgroundImage';

interface ExhibitionProps {
    exhibition: Exhibition;
}

function InformationWrapper() {
    const router = useRouter();
    const { exhibition } = router.query;

    const currentExhibition = exhibitionData[exhibition as string] || {};

    return <Information exhibition={currentExhibition} />;
}

const Information: React.FC<ExhibitionProps> = ({ exhibition }) => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.title}>
                    {exhibition.title}
                </div>
                <div className={styles.subtitle}>
                    <div>{exhibition.subtitle}</div>
                    <div>{exhibition.location}</div>
                </div>
                <div className={styles.description}>
                    <div className={styles.left}>{exhibition.leftText}</div>
                    <div className={styles.right}>{exhibition.rightText}</div>
                </div>
                <div className={styles.background}>
                    <div className={styles['background-wrapper']}>
                        {backgroundImages.slice(0, 7).map((image, index) => (
                            <img
                                key={index}
                                className={styles['background-image']}
                                src={image.src}
                                alt={`Background Image ${index}`}
                            />
                        ))}
                        <div className={styles.text}>GALLERY</div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default InformationWrapper;
