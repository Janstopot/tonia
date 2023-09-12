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
    <div className={styles.container}>
      <div className={styles.main}>
        <button
          className={index === 0 ? styles.hiddenButton : styles.backArrow} onClick={decreaseIndex}>
          <Image src={arrow} alt="arrow" />
        </button>

        <div className={styles.imageBlock}>
          <div className={styles.hiddenName}>{data.title}</div>
          <button className={styles.image} onClick={openImage}>
            <Image width={500} height={500} src={data.image} alt="image" />
          </button>
          <div className={styles.descriptionBox}>
            <div className={styles.name}>{data.title}</div>
            <div className={styles.description}>{data.eng}</div>
          </div>
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
    </div>
  );
}

export default Detail;
