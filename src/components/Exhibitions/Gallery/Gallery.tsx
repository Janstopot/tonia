import React, { useState } from 'react';

import Image from 'next/image'
import styles from './Gallery.module.scss';

import galleryData from "./galleryImages"


function Gallery() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    setModalVisible(false);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex < galleryData.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const previousImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const preventPropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.box}>
          {galleryData.map((image, index) => (
            <div
              className={styles.image}
              key={index}
              onClick={() => openModal(index)}
            >
              <Image src={image.image} alt={image.name} />
            </div>
          ))}
        </div>

        {modalVisible && selectedImageIndex !== null && (
          <div className={styles.modalBackdrop} onClick={closeModal}>
            <div className={styles.modalContent}>
              {selectedImageIndex > 0 && (
                <button className={styles.navButton} onClick={(e) => { previousImage(); preventPropagation(e); }}>Previous</button>
              )}
              <Image
                src={galleryData[selectedImageIndex].image}
                alt={galleryData[selectedImageIndex].name}
              />
              {selectedImageIndex < galleryData.length - 1 && (
                <button className={styles.navButton} onClick={(e) => { nextImage(); preventPropagation(e); }}>Next</button>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Gallery;
