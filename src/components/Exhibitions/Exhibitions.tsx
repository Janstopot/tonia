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
          <Link href={`/information?exhibition=gallerium2023&place=gallerium`} className={styles.circle}>
            <div className={styles.text}>GALLERIUM 2023</div>
          </Link>
          <Link href={`/information?exhibition=paris2022&place=paris`} className={styles.circle}>
            <div className={styles.text}>PARIS 2022</div>
          </Link>
          <Link href={`/information?exhibition=neworleans2022&place=neworleans`} className={styles.circle}>
            <div className={styles.text}>NEW ORLEANS 2022</div>
          </Link>
          <Link href={`/information?exhibition=santlouis2021&place=stlouis`} className={styles.circle}>
            <div className={styles.text}>ST LOUIS 2021</div>
          </Link>
        </div>
        <div className={styles.row2}>
          <Link href={`/information?exhibition=provence2020&place=provence`} className={styles.circle}>
            <div className={styles.text}>PROVENCE 2020</div>
          </Link>
          <Link href={`/information?exhibition=montpellier2019&place=montpellier`} className={styles.circle}>
            <div className={styles.text}>MONTPELLIER 2019</div>
          </Link>
          <Link href={`/information?exhibition=dakar2018&place=dakar`} className={styles.circle}>
            <div className={styles.text}>DAKAR 2018</div>
          </Link>
          <Link href={`/information?exhibition=algiers2017&place=algiers`} className={styles.circle}>
            <div className={styles.text}>ALGIERS 2017</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Exhibitions;
