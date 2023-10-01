import { useEffect, useRef, useState } from "react";
import styles from "./Menus.module.scss"
import { Press } from "@/assets/interfaces";
import { BeatLoader } from "react-spinners";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Link from "next/link";

function PressMenu(props: any) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<Press[]>([]);
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState<Press[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredData(query === '' ? data : data.filter((press) => {
      return press.text.toLowerCase().includes(query.toLowerCase())
    }))
  }, [query]);


  useEffect(() => {
    props.calcHeight(document.getElementById("list"));
  }, [filteredData]);



  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(getFirestore(), "press"))
      const dataArray = querySnapshot.docs.map((doc:any) => doc.data() as Press);
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
              <div>PRESS</div>
          </div>
          <input className={styles.input} onChange={(event) => setQuery(event.target.value)}/>
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
            <div className={styles.title}>PRESS</div>
          </div>
          <input className={styles.input} onChange={(event) => setQuery(event.target.value)}/>
        </div>

        <div className={styles.body}>
          {filteredData.map((press, key) => (
            <div className={styles.NecklaceCard} key={key}>
              <Link href={press.link} style={{ textDecoration: 'none' }} rel="noopener noreferrer" target="_blank">
                <div >{press.text}</div>
              </Link>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
}

export default PressMenu;
