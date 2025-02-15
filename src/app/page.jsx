import Image from "next/image";
import styles from "./page.module.css";
import Hero from "/public/hero.png";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <article  className={styles.container}>
      {/* <Image width={500} height={500} src={"https://picsum.photos/300/200"} alt="heroImg" className={styles.img}/> */}
      <section className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products</h1>
        <p className={styles.desc}>Turning your idea into Reality. We bring together the teams from the
          global tech industry
        </p>
        <Button url={"/portfolio"} text="See our works" />
      </section>
      <section className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </section>
    </article >
  );
}

// when you add a external image via url you must set the image domain in next.config