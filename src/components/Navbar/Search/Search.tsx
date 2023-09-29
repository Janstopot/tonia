import React, { useState } from "react";
import styles from "./Search.module.scss";
import { CSSTransition } from "react-transition-group";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import { Necklace } from "@/assets/interfaces";

function Search(props: any) {
  const [currentMenu, setCurrentMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState<number>(225);

  function calcHeight(el : HTMLElement){
    setMenuHeight(el.offsetHeight)
    console.error(menuHeight)
  }

  const fetchData = async (cll : string) => {
    try {
      const q = query(collection(getFirestore(), cll));

      const querySnapshot = await getDocs(q);
      const data: Necklace[] = [];

      querySnapshot.forEach((doc: any) => {
        data.push({ ...doc.data() });
      });
      console.log(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
  

      <div className={`${styles.container} ${!props.mount ? styles.searchMenuHidden : styles.searchMenuShow}`} style={{height : menuHeight}}>

      <CSSTransition
        in={currentMenu === "main"}
        timeout={500}
        onEnter={calcHeight}
        unmountOnExit
        classNames={{
          enter: "Search_transitionEnter__r865V",
          enterActive: "Search_transitionEnterActive__cQu4h",
          exit: "Search_transitionExit__H42QD",
          exitActive: "Search_transitionExitActive__B4l51",
        }}
      >
        
        <div key={"1"} className={styles.box} >
          <li onClick={() => {setCurrentMenu("necklaces")}}>NECKLACES</li>
          <li onClick={() => {setCurrentMenu("necklaces")}}>EXHIBITIONS</li>
          <li onClick={() => {setCurrentMenu("necklaces")}}>PRESS</li>
        </div>
      </CSSTransition>



      
      <CSSTransition
        in={ currentMenu === "necklaces"}
        timeout={500}
        onEnter={calcHeight}
        unmountOnExit
        classNames={{
          enter: "Search_submenuTransitionEnter__OTSx6",
          enterActive: "Search_subMenuTransitionEnterActive__M5nwb",
          exit: "Search_subMenuTransitionExit__Mkyj_",
          exitActive: "Search_subMenuTransitionExitActive__Z5B9p",
        }}
      >

        
        <div key={"2"} className={styles.box}>
          <button className={styles.navButton} onClick={()=> setCurrentMenu("main")}>
            <div>&raquo;</div>
          </button>
          <li>asdas</li>
          <li>asdasd</li>
          <li>asdasd</li>
          <li>asdas</li>
          <li>asdasd</li>
          <li>asdasd</li>
          <li>asdas</li>
          <li>asdasd</li>
          <li>asdasd</li>
        </div>
      </CSSTransition>

      
    </div>


      

  );

  function Necklaces() {
    return (
      <li onClick={() => {setCurrentMenu("necklaces")}}>NECKLACES</li>
    );
  }

  function Exhibitions() {
    return (
      <li onClick={() => {setCurrentMenu("exhibitions")}}>EXHIBITIONS</li>
    );
  }

  function Press() {
    return (
      <li onClick={() => {setCurrentMenu("press")}}>PRESS</li>
    );
  }
}

export default Search;
