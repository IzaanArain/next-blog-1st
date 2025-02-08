"use client"

import Link from "next/link"
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/"
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio"
  },
  {
    id: 3,
    title: "About",
    url: "/about"
  },
  {
    id: 4,
    title: "Blog",
    url: "/blog"
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact"
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard"
  },
];

const Navbar = () => {
  const session = useSession();

  return (
    <header className={styles.container}>
      <Link href={"/"} className={styles.logo}>IZAAN.DEV</Link>
      <nav className={styles.links}>
        <DarkModeToggle/>
        {
          links.map((link) => (
            <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
          ))
        }
        {
          session.status === "authenticated" && (
            <button onClick={signOut} className={styles.logout}>Logout</button>
          )
        }
      </nav>
    </header>
  )
}

export default Navbar