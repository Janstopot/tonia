import React, { useState } from "react";

import styles from "./Woman.module.scss";
import Image from "next/image";
import necklaceData from "./necklaceData";
import Detail from "./Detail/Detail";
import { Necklace } from "./necklaceData";

import type { InferGetStaticPropsType, GetStaticProps } from 'next'

function Woman({

}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [showDetails, setShowDetails] = useState(false);
  const [index, setIndex] = useState(0);
  const [currentNecklace, setCurrentNecklace] = useState<Necklace>();

  const toggleViewDetails = (index: number) => {
    setIndex(index);
    setCurrentNecklace(necklaceData[index]);
    setShowDetails(true);
  };

  const increaseIndex: any = () => {
    if (index < necklaceData.length - 1) {
      setIndex(index + 1);
      setCurrentNecklace(necklaceData[index + 1]);
    }
  };

  const decreaseIndex: any = () => {
    if (index > 0) {
      setIndex(index - 1);
      setCurrentNecklace(necklaceData[index - 1]);
    }
  };

  return (
    <>
      {!showDetails && (
        <div className={styles.main}>
          <div className={styles.box}>
            {necklaceData.map((necklace : any, index : any) => (
              <button
                onClick={() => toggleViewDetails(index)}
                className={styles.image}
                key={index}
              >
                <div className={styles.text}>{necklace.name}</div>
                <Image src={necklace.image} alt={necklace.name} />
              </button>
            ))}
          </div>
        </div>
      )}

      {showDetails && (
        <Detail
          data={currentNecklace}
          increaseIndex={increaseIndex}
          decreaseIndex={decreaseIndex}
          index={index}
          listLength={necklaceData.length}
        />
      )}
    </>
  );
}

// Fetch the data using getStaticProps
export const getStaticProps: GetStaticProps = async () => {
  
  return {
    props: {
      necklaceData,
    },
  };
};

export default Woman;