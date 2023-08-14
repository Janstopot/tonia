import React from "react";
import styles from "./Woman.module.scss";
import Image from "next/image";
import Link from "next/link";
//import woman1 from "../../../../assets/images/woman-necklances/1.png";
//import woman2 from "../../../../assets/images/woman-necklances/2.png"
import woman1 from "../../../../assets/images/woman-necklances/womannecklace1.jpg";
import woman2 from "../../../../assets/images/woman-necklances/womannecklace2.jpg";

function Woman() {
  return (
    <div className={styles.main}>
      <div className={styles.box}>

        <Link href="/" className={styles.image}>
          <div className={styles.text}>ROMAN HEAD</div>
          <Image src={woman1} alt="Woman1" />
        </Link>

        <Link href="/" className={styles.image}>
          <div className={styles.text}>ROMAN HEAD2</div>
          <Image src={woman2} alt="Woman1" />
        </Link>

        <Link href="/" className={styles.image}>
          <div className={styles.text}>ROMAN HEAD</div>
          <Image src={woman1} alt="Woman1" />
        </Link>

        <Link href="/" className={styles.image}>
          <div className={styles.text}>ROMAN HEAD2</div>
          <Image src={woman2} alt="Woman1" />
        </Link>

        <Link href="/" className={styles.image}>
          <div className={styles.text}>ROMAN HEAD</div>
          <Image src={woman1} alt="Woman1" />
        </Link>

        <Link href="/" className={styles.image}>
          <div className={styles.text}>ROMAN HEAD2</div>
          <Image src={woman2} alt="Woman1" />
        </Link>

        <Link href="/" className={styles.image}>
          <div className={styles.text}>ROMAN HEAD</div>
          <Image src={woman1} alt="Woman1" />
        </Link>

        <Link href="/" className={styles.image}>
          <div className={styles.text}>ROMAN HEAD2</div>
          <Image src={woman2} alt="Woman1" />
        </Link>

        <Link href="/" className={styles.image}>
          <div className={styles.text}>ROMAN HEAD</div>
          <Image src={woman1} alt="Woman1" />
        </Link>

      </div>
    </div>
  );
}

export default Woman;
