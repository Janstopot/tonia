import React from "react";

import styles from "./Press.module.scss";
import Link from "next/link";

interface press {
  date : string,
  text : string,
  link : string
}

function Press() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.backgroundImage}></div>

        <div className={styles.titleBox}>
          <div className={styles.titleText}>PRESS</div>
        </div>

        <div className={styles.box}>
          <Link
            className={`${styles.exposition} ${styles.black}`}
            href="https://divercite.be/premiere-exposition-a-paris-de-tonia-marek-creatrice-de-colliers-africains-galerie-first-floor-du-19-au-26-juin-2021/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className={styles.textWrapper}>
              Première exposition à Paris de Tonia Marek, créatrice de colliers
              africains || DiverCite Belgique
            </div>
            <p>JUNE 2021</p>
          </Link>

          <Link
            className={`${styles.exposition} ${styles.white}`}
            href="https://www.intersectstl.org/ritual/21"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className={styles.textWrapper}>
              Ritual || Intersect Art Center
              <br />
            </div>
            <p>MAY 2021</p>
          </Link>

          <Link
            className={`${styles.exposition} ${styles.black}`}
            href="https://www.montmartre-addict.com/event/perles-et-rites/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className={styles.textWrapper}>
              Exposition originale de colliers contemporains par Tonia Marek ||
              Montmartre Addict
              <br />
            </div>
            <p>MAY 2021</p>
          </Link>

          <Link
            className={`${styles.exposition} ${styles.white}`}
            href="https://lequotidien.sn/expo-passe-present-tonia-marek-roule-sur-des-perles/?sfw=pass1677943709"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className={styles.textWrapper}>
              EXPO – Passé présent : Tonia Marek roule sur des perles || Le
              Quotidien Sénégal
            </div>
            <p>DECEMBER 2018</p>
          </Link>

          <Link
            className={`${styles.exposition} ${styles.black}`}
            href="https://www.au-senegal.com/exposition-passe-present,15536.html?lang=fr"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className={styles.textWrapper}>
              Exposition « Passé Présent » || Au Sénégal
            </div>
            <p>DECEMBER 2018</p>
          </Link>

          <Link
            className={`${styles.exposition} ${styles.white}`}
            href="https://www.enqueteplus.com/content/partcours-%E2%80%93-exposition-la-galerie-kemboury-tout-en-perles"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className={styles.textWrapper}>
              La Galerie Kemboury tout en perles || ENQUÊTE+
            </div>
            <p>DECEMBER 2018</p>
          </Link>

          <Link
            className={`${styles.exposition} ${styles.black}`}
            href="http://www.partcours.art/lieu/galerie-kemboury/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className={styles.textWrapper}>Passé Présent || Partcours</div>
            <p>2018</p>
          </Link>

          <Link
            className={`${styles.exposition} ${styles.white}`}
            href="https://www.facebook.com/100011597867829/videos/328231717573421/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className={styles.textWrapper}>
              Interview Tonia Marek || Bonjour d’Algérie
            </div>
            <p>FEBRUARY 2017</p>
          </Link>

          <Link
            className={`${styles.exposition} ${styles.black}`}
            href="https://www.imodara.com/magazine/collector-spotlight-tonia-marek-france/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className={styles.textWrapper}>
              Collector Spotlight: Interview to Tonia Marek, France || IMODARA
            </div>
            <p>OCTOBER 2017</p>
          </Link>

          <Link
            className={`${styles.exposition} ${styles.white}`}
            href="https://www.paperbagg.com/tonia-marek-la-passion-des-perles/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className={styles.textWrapper}>
              Interview: Tonia Marek, La Passion des Perles || PAPERBAGG
            </div>
          </Link>

          <Link
            className={`${styles.exposition} ${styles.black}`}
            href="https://www.lexpressiondz.com/culture/des-bienfaits-et-des-couleurs-207197"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className={styles.textWrapper}>
              Des bienfaits et des couleurs || L’EXPRESSION
            </div>
            <p>DECEMBER 2015</p>
          </Link>

          <Link
            className={`${styles.exposition} ${styles.white}`}
            href="https://beadresearch.org/wp-content/uploads/Repeating_Material/The_Bead_Forum_Archive/The-Bead-Forum-Issue-67-Autumn-2015.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className={styles.textWrapper}>
              The Bead that Gives Its Power to Priests in Dogon Country || TheBead Forum
            </div>
            <p>AUTOMN 2015</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Press;
