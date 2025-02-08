import Button from "@/components/button/Button";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata = {
  title: "DEV BLOG Contact Information",
  description: "This is Contact Page",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src={'/contact.png'}
            fill={true}
            alt="image"
            className={styles.img}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            cols={30}
            rows={10}
            placeholder="message"></textarea>
            <Button url={"#"} text={"Send"} />
        </form>
      </div>
    </div>
  )
}

export default Contact