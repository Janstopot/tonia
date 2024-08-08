import { useEffect, useState } from "react";
import styles from "./NecklaceDetail.module.scss"
import { useRouter } from "next/router";
import { Necklace } from "@/assets/interfaces";
import Image from "next/image";
import { useLanguage } from "@/hooks/LanguageContext";
import { BeatLoader } from "react-spinners";
import ImageDetail from "./ImageDetail/ImageDetail";

import { useApi } from "@/hooks/ApiContext";

function NecklaceDetail(){
    const router = useRouter();
    const [necklace, setNecklace] = useState<Necklace>();
    const { currentLanguage} = useLanguage();

    const [isImageOpen, setIsImageOpen] = useState(false);


    const {data} = useApi()

    useEffect(() => {
      setNecklace(data[+router.query.index!])
      }, [router.query.index]);

      const openImage = () => {
        setIsImageOpen(true);
      };
    
      const closeImage = () => {
        setIsImageOpen(false);
      };
    
      const handleClose = () => {
        router.push("/necklaces");
      };

      function changePage(value:string){
        var index : number = +router.query.index!
        if(value === "-"){
          setNecklace(data[index-1])
        }
        if(value === "+"){
          setNecklace(data[index+1])
        }

      }

  

      return (
        <>
        {necklace === undefined && (
            <div className={styles.loaderContainer}>
              <BeatLoader color="#ffffff" size={30} />
            </div>
          )}
          {necklace != undefined && !isImageOpen && (
            <div id="top">
            <div className={styles.main}>
              <div className={styles.wrapper}>
                <button className={styles.closeButton} onClick={handleClose}></button>
                <div className={styles.hiddenName}>{necklace!.title}</div>
                <div className={styles.imageBlock}>
                  <button className={styles.image} onClick={openImage}>
                    <Image width={500} height={200} src={necklace!.image} alt="image" />
                  </button>
                  <div className={styles.descriptionBox}>
                    <div className={styles.name}>{necklace!.title}</div>
                    <div className={styles.description}>{currentLanguage === 'ENG' ? necklace!.eng : necklace!.fr}</div>
                    <div className={styles.copyright}>© {necklace!.copyright}</div>
                  </div>
                </div>
                
                <button className={`${styles.navButton} ${styles.previousButton}`} onClick={()=> router.push(`/necklaceDetail?index=${+router.query.index! -1}`)}>
                  <div className={styles.nextButton}>&raquo;</div>
                </button>
                
                <button className={`${styles.navButton} ${styles.nextButton}`} onClick={()=> router.push(`/necklaceDetail?index=${+router.query.index! +1}`)}>
                  <div className={styles.nextButton}>&raquo;</div>
                </button>

              </div>
            </div>
          </div>
        
          )}
          {isImageOpen &&(
            <div className="modal-container">
              <ImageDetail onClose={closeImage} image={necklace!.image} />
            </div>
          )}

          
        </>
      );

}

export default NecklaceDetail;