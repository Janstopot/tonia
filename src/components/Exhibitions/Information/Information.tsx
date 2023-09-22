import React from 'react';
import styles from './Information.module.scss';
import { useRouter } from 'next/router';

import { Exhibition } from './exhibitionData';
import exhibitionData from './exhibitionData';
import Link from "next/link"

import backgroundImages from './backgroundImage';
import { useLanguage } from "@/hooks/LanguageContext";

interface ExhibitionProps {
    exhibition: Exhibition;
    place: string;
}

function InformationWrapper() {
    const router = useRouter();
    const { exhibition, place } = router.query;

    const currentExhibition = exhibitionData[exhibition as string] || {};

    return <Information exhibition={currentExhibition} place={place as string} />;
}

const Information: React.FC<ExhibitionProps> = ({ exhibition, place }) => {

    const defaultPlace = 'paris';
    const minImagesToShow = 7;
    const galleryLink = `/gallery?exhibition=${exhibition.place}&place=${place}`;

    const { currentLanguage } = useLanguage();

    const imagesForCurrentPlace = backgroundImages[place || defaultPlace] || [];
    const showParisGallery = imagesForCurrentPlace.length < minImagesToShow;

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
                    <div className={styles['text-info']}>
                        <div className={styles.left}>{currentLanguage === 'ENG' ? exhibition.leftTextEng : exhibition.leftTextFr}</div>
                        <div className={styles.right}>{currentLanguage === 'ENG' ? exhibition.rightTextEng : exhibition.rightTextFr}</div>
                    </div>
                </div>
                <div className={styles.stickyBackgroundGallery}>
                    <Link href={galleryLink}>
                        <div className={styles.background}>
                            {!exhibition.video ? <div className={styles['background-wrapper']}>
                                {showParisGallery
                                    ? backgroundImages.paris.slice(0, minImagesToShow).map((image, index) => (
                                        <img
                                            key={index}
                                            className={styles['background-image']}
                                            src={image.src}
                                            alt={`Background Image ${index}`}
                                        />
                                    ))
                                    : imagesForCurrentPlace.slice(0, minImagesToShow).map((image, index) => (
                                        <img
                                            key={index}
                                            className={styles['background-image']}
                                            src={image.src}
                                            alt={`Background Image ${index}`}
                                        />
                                    ))}
                                <div className={styles.text}>GALLERY</div>
                            </div> : <iframe width="420" height="315"src={exhibition.video}></iframe>
                            }
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};


export default InformationWrapper;
