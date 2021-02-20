import Head from "next/head";
import styles from "../styles/Home.module.css";
import { styled, useStyletron } from "baseui";
import { Button } from "baseui/button";
import SearchMain from "../components/SearchMain";
import ListMain from "../components/ListMain";
import SideNav from "../components/SideNav";

const MainSection = styled("section", {
  display: "grid",
  gridTemplateColumns: "320px 1fr",
  gap: "2.5rem",
  margin: "0 auto",
  maxWidth: "1440px",
});
const MenuContainer = styled("div", {
  top: "2.5rem",
  position: "sticky",
  height: "20rem",
});

const MenuLogin = styled("div", {
  width: "100%",
  height: "5.5rem",
  padding: "1rem",
  borderRadius: "12px",
  boxShadow: "1px 1px 6px rgba(0, 0, 0, 0.25)",
  display: "flex",
  marginBottom: "1rem",
});

const MainSectionNoAuth = styled("section", {
  width: "100%",
  margin: "0",
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
const ProfileImg = styled("img", {
  borderRadius: "120px",
  height: "56px",
  width: "56px",
  marginRight: "0.5rem",
});
const ProfileTitle = styled("h1", {
  fontSize: "1rem",
  fontWeight: "600",
  margin: "0",
});
const ProfileStat = styled("p", {
  fontSize: "1rem",
  fontWeight: "400",
  margin: "0",
  color: "#666",
});
const ProfileContainer = styled("div", {
  alignSelf: "center",
  display: "flex",
  flexDirection: "column",
  lineHeight: "1.5",
});

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Voluntarily V3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <MainSection>
          <MenuContainer>
            <MenuLogin>
              <ProfileImg src="https://placeimg.com/80/80/people/2" />
              <ProfileContainer>
                <ProfileTitle>Artemis Anaisha</ProfileTitle>

                <ProfileStat>3 Clout</ProfileStat>
              </ProfileContainer>
            </MenuLogin>
            <SideNav />
          </MenuContainer>
          <MainSectionNoAuth>
            <Heading>Discover activities</Heading>
            <SearchMain />
            <ListMain />
          </MainSectionNoAuth>
        </MainSection>
      </main>

      <footer className={styles.footer}>
        Powered by code written by @minh and UX design by @walt
      </footer>
    </div>
  );
}
