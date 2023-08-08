import React from "react";

import styles from "./Necklaces.module.scss";

import Image from "next/image";
import woman from "../../assets/images/woman.png";
import man from "../../assets/images/man.png";
import Link from "next/link";

function Necklaces() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <Image src={woman} alt="Woman" className={styles.image} />
      </Link>
      <Link href="/">
        <Image src={man} alt="Man" className={styles.image} />
      </Link>
    </div>
  );
}

export default Necklaces;
