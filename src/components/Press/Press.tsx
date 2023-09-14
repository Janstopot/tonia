import React from "react";
import styles from "./Press.module.scss";
import Link from "next/link";
import {useCollectionData} from "react-firebase-hooks/firestore";
import { collection, getFirestore } from "firebase/firestore";
import { press } from "@/assets/interfaces";


function Press() {
  const [value, loading, error] = useCollectionData(collection(getFirestore(), "press"),{});
  const pressArray: press[] = value as press[];

  if (loading) {
    // Render a loading indicator or a message while data is being fetched
    return <div>Loading...</div>;
  }

  if (error) {
    // Handle the error gracefully, e.g., display an error message
    return <div>Error: {error.message}</div>;
  }

  if (!value) {
    // Handle the case where value is still undefined
    return null;
  }

  return (
    <>
      <div className={styles.main}>
        <div className={styles.backgroundImage}></div>

        <div className={styles.titleBox}>
          <div className={styles.titleText}>PRESS</div>
        </div>

        <div className={styles.box}>
          {pressArray!.map((press, key) => (
            <Link
              key={key}
              className={`${styles.exposition} ${
                key % 2 === 0 ? styles.black : styles.white
              }`}
              href={press.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className={styles.textWrapper}>{press.text}</div>
              <p>{press.date}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Press;
