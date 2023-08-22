import styles from "./ImageDetail.module.scss";
import Image from "next/image";
import close from "../../../../../../assets/images/close.svg"

function ImageDetail(props : any) {
  const {onClose , image} = props;
  const handleClose = () => {
    onClose();
  };

  return (
    <div className={styles.main}>
      <button className={styles.closeButton} onClick={handleClose}>
        <Image src={close} alt="closeButton"/>
      </button>
      <Image className={styles.image} src={image} alt="image"/>
    </div>
  );
}

export default ImageDetail;
