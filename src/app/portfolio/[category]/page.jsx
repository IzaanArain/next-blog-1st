import Button from "@/components/button/Button";
import styles from "./page.module.css";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data
  }

  return notFound();
}

const Category = async ({ params }) => {
  const { category } = await params
  const data = getData(category);

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{category}</h1>
      {
        data.map((item, index) => (
          <section className={styles.item} key={item.id}>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
              <Button text={`See More`} url={"#"} />
            </div>
            <div className={styles.imgContainer}>
              <Image
                className={styles.img}
                fill={true}
                src={item.image}
                alt={item.title}
              />
            </div>
          </section>
        ))
      }
    </div>
  )
}

export default Category