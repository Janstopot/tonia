import React, { useState } from "react";

import styles from "./Woman.module.scss";
import Image from "next/image";
import necklaceData from "./necklaceData";
import Detail from "./Detail/Detail";
//import { Necklace } from "./necklaceData";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, getFirestore } from "firebase/firestore";
import { Necklace } from "@/assets/interfaces";



function Woman() {
  const [value, loading, error] = useCollectionData(collection(getFirestore(), "necklaces"),{});
  const necklaceData: Necklace[] = value as Necklace[];



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



  if (loading) {
    // Render a loading indicator or a message while data is being fetched
    return <div>Loading...</div>;
  }

  if (error) {
    // Handle the error gracefully, e.g., display an error message
    return <div>Error: {error.message}</div>;
  }

  if (!value) {
    // Handle the case where value is still undefined
    return null;
  }

  return (
    <>
      {!showDetails && (
        <div className={styles.main}>
          <div className={styles.box}>
            {necklaceData.map((necklace, index) => (
              <button
                onClick={() => toggleViewDetails(index)}
                className={styles.image}
                key={index}
              >
                <div className={styles.text}>{necklace.title}</div>
                <Image width={500} height={500} src={necklace.image} alt={necklace.title} />
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

export default Woman;
