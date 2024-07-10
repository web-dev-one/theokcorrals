import Image from "next/image";
import styles from "./page.module.css";
import Head from "./components/head";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Head />
      <Footer />
    </main>
  );
}
