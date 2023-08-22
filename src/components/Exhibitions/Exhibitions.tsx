import Link from "next/link";
import styles from "./Exhibtions.module.scss";

function Exhibitions() {
  return (
    <div className={styles.main}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.title}>EXHIBITIONS</div>
      <div className={styles.box}>
        <div className={styles.row}>
          <Link href="/" className={styles.circle}>
            <div className={styles.text}>PARIS 2020</div>
          </Link>
          <Link href="/" className={styles.circle}>
            <div className={styles.text}>NEW ORLEANS 2022</div>
          </Link>
          <Link href="/" className={styles.circle}>
            <div className={styles.text}>SANT LOUIS 2021</div>
          </Link>
        </div>
        <div className={styles.row2}>
          <Link href="/" className={styles.circle}>
            <div className={styles.text}>ALGIERS 2017</div>
          </Link>
          <Link href="/" className={styles.circle}>
            <div className={styles.text}>DAKAR 2018</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Exhibitions;
