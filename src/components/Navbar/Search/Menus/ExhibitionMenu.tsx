import { useEffect, useRef, useState } from "react";
import styles from "./Menus.module.scss"
import { Press } from "@/assets/interfaces";
import { BeatLoader } from "react-spinners";
import Link from "next/link";


function ExhibitionMenu(props: any){
    const [query, setQuery] = useState("");
    const [filteredData, setFilteredData] = useState<any[]>([]);

    const exhibitionList = [
        {title: "GALLERIUM 2023", link:`/information?exhibition=gallerium2023&place=gallerium`}, 
        {title: "PARIS 2022" , link: `/information?exhibition=paris2022&place=paris`}, 
        {title: "NEW ORLEANS 2022", link: `/information?exhibition=neworleans2022&place=neworleans`}, 
        {title: "ST LOUIS 2021", link: `/information?exhibition=santlouis2021&place=stlouis`},
        {title: "PROVENCE 2020", link: `/information?exhibition=provence2020&place=provence`},
        {title: "MONTPELLIER 2019" , link: `/information?exhibition=montpellier2019&place=montpellier`},
        {title: "DAKAR 2018" , link: `/information?exhibition=dakar2018&place=dakar`},
        {title: "ALGIERS 2017", link: `/information?exhibition=algiers2017&place=algiers`}
    ]

    useEffect(() => {
        setFilteredData(query === '' ? exhibitionList : exhibitionList.filter((e) => {
          return e.title.toLowerCase().includes(query.toLowerCase())
        }))
      }, [query]);
    
    
      useEffect(() => {
        props.calcHeight(document.getElementById("list"));
      }, [filteredData]);

      return(
        <div id="list">
      <div className={styles.container}>

        <div className={styles.head}>
          <div className={styles.subHead}>
            <button className={styles.backButton} onClick={()=> props.setCurrentMenu("main")}><div>&raquo;</div></button>
            <div className={styles.title}>PRESS</div>
          </div>
          <input className={styles.input} onChange={(event) => setQuery(event.target.value)} placeholder="Search..."/>
        </div>

        <div className={styles.body}>
          {filteredData.map((e, key) => (
            <div className={styles.NecklaceCard} key={key}>
              <Link href={e.link} style={{ textDecoration: 'none' }}>
                <div >{e.title}</div>
              </Link>
            </div>
          ))}
        </div>


      </div>
    </div>
      )

}

export default ExhibitionMenu;