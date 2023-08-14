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
      <Link href="/woman" className={styles.image}>
        <div className={styles.text}>WOMAN</div>
        <Image src={woman} alt="Woman" />
      </Link>

      <div className={styles.separation}></div>

      <Link href="/" className={styles.image}>
        <div className={styles.text}>MAN</div>
        <Image src={man} alt="Man" />
      </Link>
    </div>
  );
}

export default Necklaces;
