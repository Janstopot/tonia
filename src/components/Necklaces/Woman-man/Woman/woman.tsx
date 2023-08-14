import React from "react";
import styles from "./Woman.module.scss";
import Image from "next/image";
import woman1 from "../../../../assets/images/woman-necklances/1.png";
import woman2 from "../../../../assets/images/woman-necklances/2.png"
//import woman1 from "../../../../assets/images/woman-necklances/womannecklace1.jpg";
//import woman2 from "../../../../assets/images/woman-necklances/womannecklace2.jpg"

function Woman() {
  return (
    <div className={styles.main}>
      <div className={styles.box}>

        <div className={styles.image}>
          <link href="/" />
          <Image src={woman1} alt="Woman1"/>
        </div>

        <div className={styles.image}>
          <link href="/"/>
          <Image src={woman2} alt="Woman1"/>
        </div>

        


      </div>
    </div>
  );
}

export default Woman;
