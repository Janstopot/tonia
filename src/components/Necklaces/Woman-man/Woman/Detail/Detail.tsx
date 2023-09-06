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
          {/* Initially hidden */}
          <div className={styles.hiddenName}>{data.name}</div>
          <button className={styles.image} onClick={openImage}>
            <Image src={data.image} alt="image" />
          </button>
          <div className={styles.descriptionBox}>
            {/* Initially visible */}
            <div className={styles.name}>{data.name}</div>
            <div className={styles.description}>{data.description}</div>
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
