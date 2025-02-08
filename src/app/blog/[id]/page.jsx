import Image from "next/image";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    return notFound();
  }
  return res.json();
}

export async function generateMetadata({ params }) {
  const { id } = await params
  const post = await getData(id);
  return {
    title: post.title,
    description: post.desc,
    openGraph:{
      images:[post.img],
    }
  }
}

const BlogPost = async ({ params }) => {
  const { id } = await params;
  const data = await getData(id);

  return (
    <div className={styles.container}>
      <section className={styles.top}>
        <section className={styles.info}>
          <h1 className={styles.title}>
            {data.title}
          </h1>
          <p className={styles.desc}>
            {data.desc}
          </p>
          <div className={styles.author}>
            <Image
              src={data.img}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </section>
        <section className={styles.imgContainer}>
          <Image
            src={"https://picsum.photos/300/200"}
            alt=""
            fill={true}
            className={styles.image}
          />
        </section>
      </section>
      <section className={styles.content}>
        <p className={styles.text}>
          {data.content}
        </p>
      </section>
    </div>
  )
}

export default BlogPost