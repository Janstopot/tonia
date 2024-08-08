import React, { useEffect, useState } from "react";
import styles from "./Search.module.scss";
import { CSSTransition } from "react-transition-group";
import PressMenu from "./Menus/PressMenu";
import NecklacesMenu from "./Menus/NecklacesMenu";
import ExhibitionMenu from "./Menus/ExhibitionMenu";

function Search(props: any) {
  const [currentMenu, setCurrentMenu] = useState<string>();
  const [menuHeight, setMenuHeight] = useState<number>(225);

  useEffect(()=> {
    setCurrentMenu("main")
  },[])

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
    onEnter: calcHeight,
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
          {currentMenu === "necklaces" && <NecklacesMenu calcHeight ={calcHeight} setCurrentMenu={setCurrentMenu} />}
          {currentMenu === "exhibitions" && <ExhibitionMenu calcHeight ={calcHeight} setCurrentMenu={setCurrentMenu} />}
          {currentMenu === "press" && <PressMenu calcHeight ={calcHeight} setCurrentMenu={setCurrentMenu} />}
        </div>
      </CSSTransition>

      
    </div>
  );



}

export default Search;
