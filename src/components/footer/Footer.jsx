import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className={styles.container}>
      <section>{`${currentYear}`} IZAAN.DEV All rights reserved.</section>
      <section className={styles.social}>
        {/* <div className={styles.imgContainer}>
          <Image src={`/1.png`} fill={true} alt="IZAAN.DEV" />
        </div> */}
        <Image src={`/1.png`} alt="FACEBOOK"  className={styles.icon} width={15} height={15} />
        <Image src={`/2.png`} alt="INSTAGRAM" className={styles.icon} width={15} height={15} />
        <Image src={`/3.png`} alt="IZAAN.DEV" className={styles.icon} width={15} height={15} />
        <Image src={`/4.png`} alt="IZAAN.DEV" className={styles.icon} width={15} height={15} />
      </section>
    </footer>
  )
}

export default Footer