import React, { useState } from 'react'

import styles from './Profile.module.scss'
import Image from 'next/image'
import { useLanguage } from '@/hooks/LanguageContext';

import profile from '@/assets/images/tonia_profile.png'

type Language = 'ENG' | 'FR';

function Profile() {
    const { currentLanguage } = useLanguage();

    const textLanguage: Record<Language, { text1: string; text2: string }> = {
        ENG: {
            text1: 'Born in France, moved to Algeria in 1963 then Tonia obtained a Doctorate of Public Health in the USA. Her work in this area has enabled her to practice and live throughout Africa, in countries as diverse as Mali, Zambia, Senegal, Cote d`Ivoire, Rwanda, Mauritania and others.',
            text2: 'She took advantage of these stays to collect beads from Africa and to document their uses by traditional healers and some animist priests. Now retired, Tonia devotes herself to her passion, the beads of Africa.'
        },
        FR: {
            text1: "Née en France, déménagée en Algérie en 1963, puis Tonia a obtenu un doctorat en santé publique aux États-Unis. Son travail dans ce domaine lui a permis de pratiquer et de vivre dans toute l'Afrique, dans des pays aussi divers que le Mali, la Zambie, le Sénégal, la Côte d'Ivoire, le Rwanda, la Mauritanie, et d'autres.",
            text2: "Elle a profité de ces séjours pour collecter des perles d'Afrique et documenter leurs utilisations par les guérisseurs traditionnels et certains prêtres animistes. Maintenant à la retraite, Tonia se consacre à sa passion, les perles d'Afrique."
        }
    };

    const currentText = textLanguage[currentLanguage as Language];

    const [showNewText, setShowNewText] = useState(false);

    const toggleNewText = () => {
        setShowNewText(!showNewText);
    };

    const descriptionText: Record<Language, { title: string; texts: string[] }> = {
        ENG: {
            title: "DOCUMENTING THE FUNCTIONS OF AFRICAN BEADS",
            texts: [
                "✓ Conference on « Ritual Functions of Venetian Glass Beads in Africa » as part of the program for the yearly ‘Venice Glass Week’, Venice, Italy. September 2020",
                "✓ Exhibit and conferences on « Powers of African Beads », National Bardo Museum, Museum of Prehistory and Ethnography, Algiers, Algeria, December 2014 to October 2015",
                "✓ Conferences on ‘Functions of Beads’ at the Senegalese Superior Institute for Arts and Cultures, for Master students specialized in « Cultural Heritage ». Dakar, Senegal. 2010 and 2011",
                "✓ Publications: *« The bead that gives his power to the Dogon Priest », Bulletin de la Society of Bead Researchers, autumn 2015. USA ; *« La Couleur de l'Invisible », 2010. Mali",
                "✓ Membership in : * The ≪ Society of Bead Researchers ≫ (beadresearch.org); * The NGO PROMETRA (Promotion of Traditional Medicine), Dakar. This NGO regroups traditional healers of the 20 member countries (prometra.org)",
            ],
        },
        FR: {
            title: "RECHERCHES DE TONIA SUR LES FONCTIONS DES PERLES D'AFRIQUE",
            texts: [
                "✓ Conférence sur « Fonctions Rituelles des Perles de Venise en Afrique » dans le cadre de ‘La Semaine du Verre de Venise’, Venise, Italie, Septembre 2020",
                "✓ Exposition et conférences sur « Pouvoirs des Perles d'Afrique », Musée National du Bardo, Musée de Préhistoire et d’Ethnographie, Alger, Algérie, Décembre 2014 à Octobre 2015",
                "✓ Conférences à L’Institut Supérieur des Arts et des Cultures du Sénégal à des étudiants de Master 2 spécialisés en « Patrimoine Culturel ». Dakar, Sénégal. 2010 et 2011",
                "✓ Publications: *« The bead that gives his power to the Dogon Priest », Bulletin de la Society of Bead Researchers, autumn 2015. USA ; *« La Couleur de l'Invisible », 2010. Mali",
                "✓ Membre de la « Society of Bead Researchers » (beadresearch.org); et de l'ONG internationale PROMETRA (Promotion de la Médecine Traditionnelle), composée de tradithérapeutes de chacun des 17 pays africains membres de cette ONG (prometra.org)",
            ],
        },
    };

    const titleText: Record<Language, string> = {
        ENG: "MEET THE ARTIST",
        FR: "RENCONTREZ L'ARTISTE",
      };

    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.title}>{titleText[currentLanguage as Language]}</div>
                    <div className={styles.content}>
                        <div className={styles.text}>
                            {!showNewText && (
                                <>
                                    <p>{currentText.text1}</p>
                                    <p>{currentText.text2}</p>
                                </>
                            )}

                            {showNewText && (
                                <>
                                    <div className={styles.textTitle}>
                                        {descriptionText[currentLanguage as Language].title}
                                    </div>
                                    {descriptionText[currentLanguage as Language].texts.map((text, index) => (
                                        <p key={index}>{text}</p>
                                    ))}
                                    <iframe  height="315"src="https://www.youtube.com/embed/dazr9V75t7Q"></iframe>
                                    <iframe  height="315"src="https://www.youtube.com/embed/oURvwjVlHQc"></iframe>
                                </>
                            )}

                            <button
                                className={`${styles.btn} ${showNewText ? styles.rotated : ''}`}
                                onClick={toggleNewText}
                            >
                                {showNewText ? '' : ''}
                            </button>
                        </div>
                        <div className={styles.imageContainer}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={profile}
                                    alt="Profile picture"
                                    className={styles.profileImage}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile