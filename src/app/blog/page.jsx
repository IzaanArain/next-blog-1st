import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`,
    {
      cache:"no-store",
    }
  );
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {
        data.map((item, index) => (
          <Link href={`/blog/${item._id}`} className={styles.container} key={index} >
            <section className={styles.imgContainer}>
              <Image
                src={item.img}
                alt=""
                width={400}
                height={250}
                className={styles.image}
              />
            </section>
            <section className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.body}</p>
            </section>
          </Link>
        ))
      }
    </div>
  )
}

export default Blog