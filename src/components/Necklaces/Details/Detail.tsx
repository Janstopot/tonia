import React, { useEffect, useRef, useState } from "react";
import styles from "./Detail.module.scss";
import Image from "next/image";
import ImageDetail from "../ImageDetails/ImageDetail";
import arrow from "@/assets/images/arrow.png";
import { useLanguage } from "@/pages/hooks/LanguageContext";

function Detail(props: any) {
  const { currentLanguage, handleEngClick, handleFrClick } = useLanguage();

  const {showComponent, data, increaseIndex, decreaseIndex, index, listLength } = props;
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [imageClass, setImageClass] = useState("tall")

  const [imageDimensions, setImageDimensions] = useState({width: 0, height: 0});

  
  useEffect(() => {
    getImageDimensions();
    console.log("mounting detail")

    window.scrollTo({
      top: 0,
    })
  }, [data])

  async function getImageDimensions ()  {
    console.log("joder")
    try {
      const response = await fetch(data.image, { method: 'HEAD' });
      if (response.ok) {
        const widthHeader = response.headers.get('x-amz-meta-width'); // Replace with the actual header field name for width
        const heightHeader = response.headers.get('x-amz-meta-height'); // Replace with the actual header field name for height

        if (widthHeader && heightHeader) {
          const width = parseInt(widthHeader, 10);
          const height = parseInt(heightHeader, 10);
          setImageDimensions({ width, height });
        }
        console.log(imageDimensions)
      }
    } catch (error) {
      console.error('Error fetching image dimensions:', error);
    }
  };

  const openImage = () => {
    setIsImageOpen(true);
  };

  const closeImage = () => {
    setIsImageOpen(false);
  };

  const handleClose = () => {
    showComponent()
  };

  return (
    <div id="top">
      <button className={styles.closeButton} onClick={handleClose}></button>
      <div className={styles.main}>
      
        <button
          className={index === 0 ? styles.hiddenButton : styles.backArrow} onClick={decreaseIndex}>
          <Image src={arrow} alt="arrow" />
        </button>

        <div className={styles.imageBlock}>
          <div className={styles.hiddenName}>{data.title}</div>
          <button className={styles.image} onClick={openImage}>
            <Image width={500} height={200} src={data.image} alt="image" />
          </button>
          <div className={styles.descriptionBox}>
            <div className={styles.name}>{data.title}</div>
            <div className={styles.description}>{currentLanguage === 'ENG' ? data.eng : data.fr}</div>
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
