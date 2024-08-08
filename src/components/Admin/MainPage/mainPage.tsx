import React from "react";
import styles from "../Admin.module.scss"
import { useState } from "react";
import PressAdmin from "../Lists/PressAdmin";
import NecklacesAdmin from "../Lists/NecklacesAdmin";


function MainPage(){
    const [selection, setSelection] = useState("")
    return (
        <div className={styles.container}>
            <div className={styles.buttonsBox}>
                <button onClick={()=> setSelection("necklaces")}>NECKLACES</button>
                <button onClick={()=> setSelection("exhibitions")}>EXHIBITIONS</button>
                <button onClick={()=> setSelection("press")}>PRESS</button>
            </div>
            <div>
                {selection === "press" && <PressAdmin/>}
                {selection === "necklaces" && <NecklacesAdmin/>}
            </div>
        </div>
    )
}

export default MainPage;