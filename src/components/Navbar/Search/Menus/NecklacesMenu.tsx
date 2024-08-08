import { Necklace } from "@/assets/interfaces";
import styles from "./Menus.module.scss"
import React, { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import Image from "next/image";


import { useApi } from "@/hooks/ApiContext";
import Router from "next/router";


function NecklacesMenu(props : any) {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState<Necklace[]>([]);

  
  const {loading, error, data} = useApi()


  useEffect(() => {
    setFilteredData(query === '' ? data : data.filter((necklace) => { return necklace.title.toLowerCase().includes(query.toLowerCase())}));
  }, [query]);

  useEffect(() => {
    props.calcHeight(document.getElementById("list"));
  }, [filteredData]);

  function findNecklace(title : string){
    console.log("DATA: " + data)
    console.log(title)
    data.map((n)=> {
      if(n.title === title){
        console.log(`/necklaceDetail?index=${data.indexOf(n)}`)
        return Router.push(`/necklaceDetail?index=${data.indexOf(n)}`)

      } 
    })
    
  }




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
    <>
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
          {filteredData.map((necklace, index) => (
            <div key={index} className={styles.links} onClick={()=> findNecklace(necklace.title)}>
              <div className={styles.NecklaceCard}>
                <div className={styles.titleNecklace}>{necklace.title}</div>
                <Image className={styles.image} width={75} height={75} src={necklace.image} alt={necklace.title} loading="lazy"></Image>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    </>
  );
  }

  export default NecklacesMenu;