import Head from "next/head";
import styles from "../styles/Home.module.css";
import { styled, useStyletron } from "baseui";
import { Button } from "baseui/button";
import SearchMain from "../components/SearchMain";
const MainSectionNoAuth = styled("section", {
  display: "grid",
  width: "calc(100vw - 5rem)",
  margin: "0 auto",
  maxWidth: "1440px",
  height: "100%",
  "@media screen and (max-width: 880px)": {},
});

const Divider = styled("div", {
  display: "grid",
  width: "100%",
  height: "4px",
  borderRadius: "120px",
});

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Voluntarily V3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <MainSectionNoAuth>
          <h1>Discover Clout</h1>
          <p>aaaaaaaaa</p>
          <SearchMain />
        </MainSectionNoAuth>
      </main>

      <footer className={styles.footer}>Powered by LMAO</footer>
    </div>
  );
}
