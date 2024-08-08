import React, { useEffect, useState } from "react";
import styles from "./Necklaces.module.scss";
import Image from "next/image";
import { BeatLoader } from "react-spinners"
import { useApi } from "@/hooks/ApiContext";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";




function Necklaces() {
  const router = useRouter();
  const {data} = useApi()

  useEffect(() => {
    if(localStorage.getItem("positionY")){
      const position = +localStorage.getItem("positionY")! 
      window.scrollTo(0, position);
    }
  }, []);

  function openComp(index : number){
    localStorage.setItem("positionY", window.scrollY.toString());
    router.push(`/necklaceDetail?index=${index}`)

  }

  return (
    <>
      {data === undefined && (
        <div className={styles.loaderContainer}>
          <BeatLoader color="#ffffff" size={30} />
        </div>
      )}
      {data != undefined && (
        <div className={styles.main} >
          <div className={styles.box}>
            {data.map((necklace, index) => (
              <button key={index} className={styles.image} onClick={()=> openComp(index)}>
                <div className={styles.text}>{necklace.title}</div>
                <Image width={500} height={500} src={necklace.image} alt={necklace.title} />
              </button>
            ))}
          </div>
        </div>
      )}


    </>
  );
}

export default Necklaces;
