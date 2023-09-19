import React, { useEffect, useState } from "react";
import styles from "./Necklaces.module.scss";
import Image from "next/image";

import { collection, getDocs, getFirestore, limit, orderBy, query, startAfter } from "firebase/firestore";
import { Necklace } from "@/assets/interfaces";

import necklaceData2 from "./necklaceData";
import Detail from "./Details/Detail";
import { useInView } from 'react-intersection-observer';

function Necklaces() {
  const [initialLoad, setInitialLoad] = useState(true);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 1,
    //rootMargin: '15px 0px 0px 0px',
    trackVisibility: true, 
    delay: 500,
    onChange : (inView)=> {
      if(inView && !initialLoad) nextPage()
    }
  });

  const [necklaceData, setNecklaceData] = useState<Necklace[]>([]);
  const [pageSize, setPageSize] = useState(9); // Numero inicial de collares
  const [lastDoc, setLastDoc] = useState(null); // último collar de la lista

  useEffect(() => {
    console.log("MOUNTINGGG")
    fetchData();
  }, []);


  const fetchData = async () => {
    console.error("FETCHING DATA")
    try {
      const q = query(
        collection(getFirestore(), "necklaces"),
        orderBy("title"),
        startAfter(lastDoc),
        limit(pageSize)
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
      setPageSize(3); // Setea el numero de elementos despúes de la primera carga
      setInitialLoad(false);
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
    setShowDetails(show => !show);
    //router.push('/woman/[secondary]');
  };

  const increaseIndex: any = () => {
    if (index < necklaceData.length - 1) {
      setIndex((prevIndex) => prevIndex +1);
      setCurrentNecklace(necklaceData[index + 1]);
    }
  };

  const decreaseIndex: any = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
      setCurrentNecklace(necklaceData[index - 1]);
    }
  };

  return (
    <>
      {!showDetails && (
        <div className={styles.main}>
          <div className={styles.box}>
            {necklaceData.map((necklace, index) => (
              <button onClick={() => toggleViewDetails(index)} className={styles.image} key={index}>
                <div className={styles.text}>{necklace.title}</div>
                <Image width={500} height={500} src={necklace.image} alt={necklace.title} />
              </button>
            ))}
          </div>
          <div ref={ref} className={styles.spinnerBox}>
          <div className={styles.spinner}>
            <span className={styles.spinnerInner1}></span>
            <span className={styles.spinnerInner2}></span>
            <span className={styles.spinnerInner3}></span>
          </div>
          </div>
        </div>
      )}

      {showDetails && (
        <Detail showComponent = {toggleViewDetails} data={currentNecklace} increaseIndex={increaseIndex} decreaseIndex={decreaseIndex} index={index} listLength={necklaceData.length}  />
      )}
    </>
  );
}

export default Necklaces;
