import React, { useEffect, useState } from "react";
import styles from "./Woman.module.scss";
import Image from "next/image";
import Detail from "./Detail/Detail";
import { DocumentData, collection, getDocs, getFirestore, limit, orderBy, query, startAfter } from "firebase/firestore";
import { Necklace } from "@/assets/interfaces";

import necklaceData2 from "./necklaceData";

function Woman() {
  const [necklaceData, setNecklaceData] = useState<Necklace[]>([]);
  const [pageSize, setPageSize] = useState(9); // Initial page size
  const [lastDoc, setLastDoc] = useState(null); // Store the last document for pagination

  useEffect(() => {
    console.log("MOUNTINGGG")
    fetchData();
  }, []);


  const fetchData = async () => {
    console.error("FETCHING DATA")
    try {
      const q = query(
        collection(getFirestore(), "necklaces"), // Replace with your collection name
        orderBy("title"),
        startAfter(lastDoc),
        limit(pageSize)
        // Use startAfter if lastDoc is available
      );

      const querySnapshot = await getDocs(q);
      const data: any[] = [];

      querySnapshot.forEach((doc) => {
        console.log(doc.data().title);
        data.push({ doc, ...doc.data() });
      });
      console.log(data);

      // Append newly fetched data to the existing necklaceData
      setNecklaceData((prevData) => [...prevData, ...data]);

      // Update lastDoc for pagination
      if (querySnapshot.docs.length > 0) {
        setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1].data().title);
      }
      setPageSize(3);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const nextPage = () => {
    fetchData();
  };

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
            {necklaceData.map((necklace, index) => (
              <button
                onClick={() => toggleViewDetails(index)}
                className={styles.image}
                key={index}
              >
                <div className={styles.text}>{necklace.title}</div>
                <Image
                  width={500}
                  height={500}
                  src={necklace.image}
                  alt={necklace.title}
                />
              </button>
            ))}
          </div>
          <div>
            <h1>
              <button onClick={nextPage}>NEXT PAGE</button>
            </h1>
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
