import Link from "next/link";
import styles from "./Exhibtions.module.scss";
import { useRouter } from "next/router";

function Exhibitions() {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.title}>EXHIBITIONS</div>
      <div className={styles.box}>
        <div className={styles.row}>
          <Link href={`/information?exhibition=paris2022`} className={styles.circle}>
            <div className={styles.text}>PARIS 2020</div>
          </Link>
          <Link href={`/information?exhibition=neworleans2022`} className={styles.circle}>
            <div className={styles.text}>NEW ORLEANS 2022</div>
          </Link>
          <Link href={`/information?exhibition=santlouis2021`} className={styles.circle}>
            <div className={styles.text}>SANT LOUIS 2021</div>
          </Link>
        </div>
        <div className={styles.row2}>
          <Link href={`/information?exhibition=algiers2017`} className={styles.circle}>
            <div className={styles.text}>DAKAR 2018</div>
          </Link>
          <Link href={`/information?exhibition=dakar2018`} className={styles.circle}>
            <div className={styles.text}>ALGIERS 2017</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Exhibitions;
