import Head from "next/head";
import styles from "../styles/Home.module.css";
import { styled } from "baseui";

const MainSectionNoAuth = styled("section", {
  display: "grid",
  width: "calc(100vw - 5rem)",
  margin: "0 auto",
  maxWidth: "1440px",
  height: "100%",
  "@media screen and (max-width: 880px)": {},
});

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <MainSectionNoAuth>aaaaa</MainSectionNoAuth>
      </main>

      <footer className={styles.footer}>Powered by LMAO</footer>
    </div>
  );
}
