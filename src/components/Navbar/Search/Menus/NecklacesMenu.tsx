
import { Necklace } from "@/assets/interfaces";
import styles from "./Menus.module.scss"
import { collection, getDocs, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import Image from "next/image";

function NecklacesMenu(props : any) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<Necklace[]>([]);
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState<Necklace[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredData(query === '' ? data : data.filter((necklace) => { return necklace.title.toLowerCase().includes(query.toLowerCase())}));
  }, [query]);

  useEffect(() => {
    props.calcHeight(document.getElementById("list"));
  }, [filteredData]);


  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(getFirestore(), "necklaces"))
      const dataArray = querySnapshot.docs.map((doc:any) => doc.data() as Necklace);
      setData((prevData) => [...prevData, ...dataArray])
      setFilteredData((prevData) => [...prevData, ...dataArray])
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div id="list">
        <div className={styles.container}>
                <div className={styles.head}>
          <div className={styles.subHead}>
            <button className={styles.backButton} onClick={()=> props.setCurrentMenu("main")}><div>&raquo;</div></button>
            <div>NECKLACES</div>
          </div>
          <input className={styles.input} onChange={(event) => setQuery(event.target.value)} placeholder="Search..."/>
        </div>
        <BeatLoader color="#777777" loading={loading} size={50} />
        </div>
      </div>
    );
  }

  if (error) {
    return <li id="list">Error Loading!</li>;
  }

  return (
    <div id="list">
      <div className={styles.container}>

        <div className={styles.head}>
          <div className={styles.subHead}>
            <button className={styles.backButton} onClick={()=> props.setCurrentMenu("main")}><div>&raquo;</div></button>
            <div className={styles.title}>NECKLACES</div>
          </div>
          <input className={styles.input} onChange={(event) => setQuery(event.target.value)} placeholder="Search..."/>
        </div>

        <div className={styles.body}>
          {filteredData.map((necklace, key) => (
            <div className={styles.NecklaceCard} key={key}>
              <div>{necklace.title}</div>
              <Image className={styles.image} width={75} height={75} src={necklace.image} alt={necklace.title} loading="lazy"></Image>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
  }

  export default NecklacesMenu;