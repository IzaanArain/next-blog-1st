"use client";

import { useSession } from "next-auth/react";
// import { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";

const Dashboard = () => {
  // ## useEffect data fetching
  // const [data, setData] = useState([]);
  // const [error, setError] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // async function getData() {
  //   setIsLoading(true);
  //   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`,
  //     {
  //       cache: "no-store",
  //     }
  //   );
  //   if (!res.ok) {
  //     setError(true);
  //   }
  //   const data = await res.json();
  //   setData(data);
  //   setIsLoading(false)
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  // ## SWR data fetching
  // ## Next Auth
  const router = useRouter();
  const session = useSession();
  console.log(session)

  // const fetcher = async () => {
  //   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`,
  //     {
  //       cache: "no-store",
  //     }
  //   );
  //   if (!res.ok) {
  //     throw new Error("Failed fetch from API")
  //   }
  //   const data = await res.json();
  //   return data
  // }
  // const fetcher = url => fetch(url).then(r => r.json());
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user?.name}`,
    fetcher
  )

  console.log(data);
  if (session.status === "Loading") {
    return <p>Loading...</p>
  }

  // The error you encountered happens because React does not allow state updates (like navigation) during rendering. When you call router.push() inside the component body (directly in if conditions), it modifies state while React is still rendering, which causes an error.
  //  useEffect ensures the navigation happens after the component has rendered.
  // useEffect runs after the component has completed rendering. This prevents React from throwing errors related to state updates during render.
  useEffect(() => {
    if (session.status === "unauthenticated") {
      router?.push("/dashboard/login")
    }
  }, [session.status, router])

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>


  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name
        }),
      })
      mutate();
      e.target.reset();
    } catch (error) {
      console.error(error);
    }
  }

  const handleDelete = async (id)=> {
    try {
      await fetch(`/api/posts/${id}`,{
        method:"DELETE"
      });
      mutate();
    } catch (error) {
      console.error(error)
    }
  }

  if (session.status === "authenticated") return (
    <div className={styles.container}>
      <section className={styles.posts}>
        {isLoading ? "Loading..." : data?.map((post) => (
          <div className={styles.post} key={post._id}>
            <div className={styles.imgContainer} key={post._id}>
              <Image
                src={post.img}
                alt="post image"
                width={200}
                height={100}
              />
            </div>
            <h2 className={styles.postTitle}>{post.title}</h2>
            <span className={styles.delete} onClick={()=>handleDelete(post._id)}>X</span>
          </div>
        ))}
      </section>
      <form className={styles.new} onSubmit={handleSubmit}>
        <h1>Add New Post</h1>
        <input type="text" placeholder="Title" className={styles.input} />
        <input type="text" placeholder="Desc" className={styles.input} />
        <input type="text" placeholder="Image" className={styles.input} />
        <textarea
          placeholder="Content"
          className={styles.textArea}
          cols={30}
          rows={10}
        >
        </textarea>
        <button className={styles.button}>Send</button>
      </form>
    </div>
  )
}

export default Dashboard