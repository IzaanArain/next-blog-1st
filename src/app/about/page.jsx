import Button from "@/components/button/Button";
import styles from "./page.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.container}>
      <section className={styles.imgContainer}>
        <Image
          src={"https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
          fill={true}
          alt="image"
          className={styles.img}
        />
        <article className={styles.imgText}>
          <h1 className={styles.ImgTitle}>Digital storytellers</h1>
          <h2 className={styles.ImgDesc}>handcrafting award winning digital experiences</h2>
        </article>
      </section>
      <section className={styles.textContainer}>
        <article className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Maiores dolorum expedita quo dolores incidunt. Expedita
            voluptates commodi delectus, at nostrum accusamus,
            repellendus iure consectetur perspiciatis numquam qui sunt
            hic, assumenda repudiandae reprehenderit culpa officia ex
            facere fugit consequatur alias. Dolore, officia eos libero
            quod, totam quasi temporibus ex possimus vitae fuga.
            <br />
            <br />
            consectetur explicabo unde sapiente aut natus asperiores
            aliquam sed fugit. Iure placeat quo ut iusto dolor non quae
            saepe! Dicta, expedita. Laborum officia adipisci, mollitia
            rerum quisquam, earum voluptatem fuga corporis nam maxime vitae
            iure fugiat dolor voluptas! Tempora saepe illum ullam odit labore
            odio temporibus exercitationem adipisci id!
          </p>
        </article>
        <article className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolores sint corporis mollitia aliquam vero laboriosam
            quas nobis, nemo alias nostrum magnam eius pariatur
            ipsam et sequi explicabo temporibus quaerat aspernatur
            vitae voluptatem ducimus. Totam, voluptatum non debitis a
            voluptas nesciunt animi repellendus atque cupiditate ratione
            tempore asperiores, fuga ut ipsum.
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url={"/contact"} text="Contact" />
        </article>
      </section>
    </div>
  )
}

export default About