import React, { useState } from "react";
import styles from "./Detail.module.scss";
import Image, { StaticImageData } from "next/image";
import ImageDetail from "./ImageDetail/ImageDetail";
import arrow from "../../../../../assets/images/arrow.png";

function Detail(props: any) {
  const { data, selectedIndex } = props;

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
        <button className={styles.arrow}>
          <Image src={arrow} alt="arrow" />
        </button>

        <button className={styles.image} onClick={openImage}>
          <Image src={data[selectedIndex].image} alt="image" />
        </button>
        <div className={styles.descriptionBox}>
          <div className={styles.name}>{data[selectedIndex].name}</div>
          <div className={styles.description}>
            {data[selectedIndex].description}
          </div>
        </div>

        <button className={styles.arrow}>
          <Image src={arrow} alt="arrow" />
        </button>
      </div>
      {isImageOpen && (
        <div className="modal-container">
          <ImageDetail onClose={closeImage} />
        </div>
      )}
    </>
  );
}

export default Detail;
