import React, { useState } from "react";
import styles from "./Search.module.scss";
import { CSSTransition } from "react-transition-group";
import PressMenu from "./Menus/PressMenu";
import NecklacesMenu from "./Menus/NecklacesMenu";

function Search(props: any) {
  const [currentMenu, setCurrentMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState<number>(225);

  function calcHeight(el : HTMLElement){
    setMenuHeight(el.offsetHeight)
    console.log(menuHeight)
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
          {currentMenu === "necklaces" && <NecklacesMenu calcHeight ={calcHeight} />}
          {currentMenu === "exhibitions" && <Exhibitions/>}
          {currentMenu === "press" && <PressMenu calcHeight ={calcHeight}/>}
        </div>
      </CSSTransition>

      
    </div>
  );



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

}

export default Search;
