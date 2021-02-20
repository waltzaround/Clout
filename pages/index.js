import Head from "next/head";
import styles from "../styles/Home.module.css";
import { styled, useStyletron } from "baseui";

const MainSectionNoAuth = styled("section", {
  fontFamily: "Comic Sans MS",
  display: "grid",
  width: "calc(100vw - 5rem)",
  margin: "0 auto",
  maxWidth: "1440px",
  height: "100%",
  "@media screen and (max-width: 880px)": {},
});
const SearchContainer = styled("section", {
  fontFamily: "Comic Sans MS",
  display: "grid",
  width: "100%",
  margin: "1rem",
});

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Voluntarily V2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <MainSectionNoAuth>
          <h1>Discover Clout</h1>
          <p>aaaaaaaaa</p>
          <SearchContainer></SearchContainer>
        </MainSectionNoAuth>
      </main>

      <footer className={styles.footer}>Powered by LMAO</footer>
    </div>
  );
}
