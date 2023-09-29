import React, { useState } from "react";
import styles from "./Search.module.scss";
import { CSSTransition } from "react-transition-group";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import { Necklace, Press } from "@/assets/interfaces";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { BeatLoader } from "react-spinners";
import exhibitionData from "@/components/Exhibitions/Information/exhibitionData";

function Search(props: any) {
  const [currentMenu, setCurrentMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState<number>(225);

  function calcHeight(el : HTMLElement){
    setMenuHeight(el.offsetHeight)
  }

  const transitionProps1 = {
    in: currentMenu === "main",
    timeout: 500,
    onEnter: calcHeight,
    unmountOnExit: true,
    classNames: {
      enter: "Search_transitionEnter__r865V",
      enterActive: "Search_transitionEnterActive__cQu4h",
      exit: "Search_transitionExit__H42QD",
      exitActive: "Search_transitionExitActive__B4l51",
    },
  };

  const transitionProps2 = {
    in: currentMenu != "main",
    timeout: 500,
    onEntered: calcHeight,
    unmountOnExit: true,
    classNames: {
      enter: "Search_submenuTransitionEnter__OTSx6",
      enterActive: "Search_subMenuTransitionEnterActive__M5nwb",
      exit: "Search_subMenuTransitionExit__Mkyj_",
      exitActive: "Search_subMenuTransitionExitActive__Z5B9p",
    },
  };

  return (
  

    <div className={`${styles.container} ${!props.mount ? styles.searchMenuHidden : styles.searchMenuShow}`} style={{height : menuHeight}}>

      {/*PRIMER MENU*/}
      <CSSTransition {...transitionProps1}>
        <div className={styles.box} >
          <li onClick={() => {setCurrentMenu("necklaces")}}>NECKLACES</li>
          <li onClick={() => {setCurrentMenu("exhibitions")}}>EXHIBITIONS</li>
          <li onClick={() => {setCurrentMenu("press")}}>PRESS</li>
        </div>
      </CSSTransition>



      {/*SEGUNDO MENU*/}
      <CSSTransition {...transitionProps2}>
        <div className={styles.box}>
          <button className={styles.navButton} onClick={()=> setCurrentMenu("main")}><div>&raquo;</div></button>
          <ShowData/>
        </div>
      </CSSTransition>

      
    </div>
  );


  function ShowData() {
    switch (currentMenu) {
      case "necklaces":
        return (<Necklaces/>)
      case "exhibitions":
        return (<Exhibitions/>)
      case "press":
        return (<Press/>)        
    }
  }

  function Necklaces() {
    const [value, loading, error] = useCollectionDataOnce(collection(getFirestore(), "necklaces"), {});
    const array: Necklace[] = value as Necklace[];
    if (loading) return (<li><BeatLoader color="#ffffff" loading={loading} size={50} /></li>)
    console.log(array)
  
    return (
      <div>
        <li>NECKLACES</li>
          {array.map((necklace, key) => (
            <li key={key}>{necklace.title}</li>
          ))}
      </div>
    );
  }

  function Exhibitions() {

    return (
      <div>
        <li>EXHIBITION</li>
        <li>EXHIBITION</li>
        <li>EXHIBITION</li>
        <li>EXHIBITION</li>
        <li>EXHIBITION</li>
        <li>EXHIBITION</li>
        <li>EXHIBITION</li>
    </div>
    );
  }

  function Press() {
    const [value, loading, error] = useCollectionDataOnce(collection(getFirestore(), "press"), {});
    if (loading) return (<li><BeatLoader color="#777777" loading={loading} size={50} /></li>)

    const array: Press[] = value as Press[];
    console.log(array)
  
    return (
      <div>
        <li>PRESS</li>
          {array.map((press, key) => (
            <li key={key}>{press.text}</li>
          ))}
      </div>
    );
  }
}

export default Search;
