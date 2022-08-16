import Head from "next/head";
import styles from "../styles/Home.module.css";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Kevin Sommi</title>
      </Head>
      <main className={styles.main}>
        <Home />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}
