import styles from "./ImageDetail.module.scss";

function ImageDetail({ onClose } : any) {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className={styles.main}>
      IMAGEEE
      <button onClick={handleClose}>Close Modal</button>
    </div>
  );
}

export default ImageDetail;
