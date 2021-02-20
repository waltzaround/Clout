import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Onboard() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Voluntarily V2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Ahoy, welcome onboard</h1>

        <p>aaaaaaaaa</p>
      </main>

      <footer className={styles.footer}>Powered by LMAO</footer>
    </div>
  );
}
