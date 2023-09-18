import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import styles from './Gallery.module.scss';
import galleryData from "./galleryImages"
import { useRouter } from 'next/router';

interface GalleryProps {
  place: string;
}

function Gallery({ place }: GalleryProps) {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredGalleryData = galleryData.filter((image) => image.place === place);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    setModalVisible(false);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex < filteredGalleryData.length - 1) {
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

  useEffect(() => {
    const handleRouteChange = () => {
      closeModal();
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  console.log('Place:', place);
  console.log('Filtered Gallery Data:', filteredGalleryData);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.box}>
          {filteredGalleryData.map((image, index) => (
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
                <button className={`${styles.navButton} ${styles.previousButton}`} onClick={(e) => { previousImage(); preventPropagation(e); }}>
                  <div className={styles.nextButton}>&raquo;</div>
                </button>
              )}
              <Image
                src={filteredGalleryData[selectedImageIndex].image}
                alt={filteredGalleryData[selectedImageIndex].name}
              />
              {selectedImageIndex < filteredGalleryData.length - 1 && (
                <button className={`${styles.navButton} ${styles.nextButton}`} onClick={(e) => { nextImage(); preventPropagation(e); }}>
                  <div className={styles.nextButton}>&raquo;</div>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Gallery;
