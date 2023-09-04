import React, { useState } from "react";
import styles from "./Detail.module.scss";
import Image from "next/image";
import ImageDetail from "./ImageDetail/ImageDetail";
import arrow from "@/assets/images/arrow.png";

function Detail(props: any) {
  const { data, increaseIndex, decreaseIndex, index, listLength } = props;
  const [isImageOpen, setIsImageOpen] = useState(false);

  const openImage = () => {
    setIsImageOpen(true);
  };

  const closeImage = () => {
    setIsImageOpen(false);
  };

  return (
    <>
      <div className={styles.main}>
        <button
          className={index === 0 ? styles.hiddenButton : styles.backArrow}
          onClick={decreaseIndex}
        >
          <Image src={arrow} alt="arrow" />
        </button>

        <button className={styles.image} onClick={openImage}>
          
        </button>
        <div className={styles.descriptionBox}>
          <div className={styles.name}>{data.name}</div>
          <div className={styles.description}>{data.description}</div>
        </div>

        <button
          className={
            index === listLength - 1 ? styles.hiddenButton : styles.arrow
          }
          onClick={increaseIndex}
        >
          <Image src={arrow} alt="arrow" />
        </button>
      </div>

      {isImageOpen && (
        <div className="modal-container">
          <ImageDetail onClose={closeImage} image={data.image} />
        </div>
      )}
    </>
  );
}

export default Detail;
