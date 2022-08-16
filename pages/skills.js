import Head from "next/head";
import Skills from "../components/Skills";
import styles from "../styles/Home.module.css";

export default function SkillsPage() {
  return (
    <div>
      <Head>
        <title>Kevin Sommi</title>
      </Head>
      <main className={styles.main}>
        <Skills />
      </main>
    </div>
  );
}
