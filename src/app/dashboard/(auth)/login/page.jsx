"use client"
import { signIn, useSession } from "next-auth/react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const page = () => {
  const router = useRouter();
  const session = useSession();

  if (session.status === "Loading") {
    return <p>Loading...</p>
  }

  // The error you encountered happens because React does not allow state updates (like navigation) during rendering. When you call router.push() inside the component body (directly in if conditions), it modifies state while React is still rendering, which causes an error.
  //  useEffect ensures the navigation happens after the component has rendered.
  // useEffect runs after the component has completed rendering. This prevents React from throwing errors related to state updates during render.
  useEffect(() => {
    if (session.status === "authenticated") {
      router?.push("/dashboard")
    }
  }, [session.status, router])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value
    const password = e.target[1].value
    signIn("credentials", { email, password })
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          className={styles.input}
          required />
        <input
          type="password"
          placeholder="password"
          className={styles.input}
          required />
        <button className={styles.button}>Login</button>
      </form>
      <button onClick={() => signIn("google")}>Login with google</button>
    </div>
  )
}

export default page