import React from "react";

import styles from "./Necklaces.module.scss";

import Image from "next/image";
//import woman from "../../assets/images/woman.png";
//import man from "../../assets/images/man.png";
import woman from "../../assets/images/woman2.jpg";
import man from "../../assets/images/man2.jpg";
import Link from "next/link";

function Necklaces() {
  return (
    <div className={styles.main}>
      <div className={styles.imagesContainer}>
        <Link href="/woman" className={styles.imageWrapper}>
          <div className={styles.text}>WOMAN</div>
          <Image src={man} alt="Woman" className={styles.image} />
        </Link>

        <div className={styles.separation}></div>

        <Link href="/" className={styles.imageWrapper}>
          <div className={styles.text}>MAN</div>
          <Image src={man} alt="Man" className={styles.image} />
        </Link>
      </div>
    </div>
  );
}

export default Necklaces;
