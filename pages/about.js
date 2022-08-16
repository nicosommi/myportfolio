import Head from "next/head";
import styles from "../styles/Home.module.css";
import About from "../components/About";

export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>Kevin Sommi</title>
      </Head>
      <main className={styles.main}>
        <About />
      </main>
    </div>
  );
}
