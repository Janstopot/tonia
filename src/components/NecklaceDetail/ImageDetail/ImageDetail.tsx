import styles from "./ImageDetail.module.scss"
import Image from "next/image";

function ImageDetail(props: any){
    const { onClose, image } = props;
    const handleClose = () => {
      onClose();
    };
  
    return (
      <div className={styles.main}>
        <button className={styles.closeButton} onClick={handleClose}>
        </button>
        <Image
          width={500}
          height={500}
          className={styles.image}
          src={image}
          alt="image"
        />
      </div>
    );
}

export default ImageDetail;