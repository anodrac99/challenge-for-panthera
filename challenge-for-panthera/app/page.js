import CreatePost from "@/src/components/CreatePost";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <CreatePost />
    </main>
  );
}
