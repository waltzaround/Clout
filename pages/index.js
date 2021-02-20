import Head from "next/head";
import styles from "../styles/Home.module.css";
import { styled, useStyletron } from "baseui";
import { Button } from "baseui/button";
import SearchMain from "../components/SearchMain";
import ListMain from "../components/ListMain";

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

const Heading = styled("h1", {
  fontSize: "2rem",
  fontWeight: "600",
  margin: "0",
  textAlign: "left",
});

const Description = styled("p", {
  fontSize: "1rem",
  marginTop: "0.5rem",
  marginBottom: "0",
  color: "#555",
  fontWeight: "400",
  textAlign: "left",
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
          <Heading>Volunteer in New Zealand</Heading>
          <Description>
            Discover ways to get involved in volunteering and help out in your
            community. Find ways to ask for help when you need it.
          </Description>
          <SearchMain />
          <ListMain />
        </MainSectionNoAuth>
      </main>

      <footer className={styles.footer}>
        Powered by code written by @minh and UX design by @walt
      </footer>
    </div>
  );
}
