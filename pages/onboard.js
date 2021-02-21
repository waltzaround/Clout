import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useStyletron, styled } from "baseui";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { Button } from "baseui/button";

const MainSection = styled("section", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "2.5rem",
  margin: "0 auto",
  width: "calc(100vw - 5rem)",
  maxWidth: "1440px",
});

export default function Onboard() {
  const [css] = useStyletron();
  return (
    <div className={styles.container}>
      <Head>
        <title>Voluntarily V2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainSection>
        <img
          src="https://images.unsplash.com/photo-1461532257246-777de18cd58b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80"
          className={css({
            width: "100%",
          })}
        />
        <div>
          <h1>Get ready to be a Volunteer</h1>
          <p>We just need a few more details before you can get started</p>
          <div
            className={css({
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
              "@media screen and (max-width: 1024px)": {
                width: "100%",
                marginTop: "0.5rem",
                paddingLeft: "0",
              },
            })}
          >
            <div>
              <FormControl label={() => "First Name"}>
                <Input />
              </FormControl>
            </div>
            <div>
              <FormControl label={() => "Last Name"}>
                <Input />
              </FormControl>
            </div>
          </div>
          <div
            className={css({
              marginTop: "0.5rem",
            })}
          >
            <FormControl label={() => "Email Address"}>
              <Input />
            </FormControl>
          </div>
          <div
            className={css({
              marginTop: "1rem",
            })}
          >
            <FormControl label={() => "Link to your Linkedin Profile"}>
              <Input />
            </FormControl>
          </div>
          <Button onClick={() => alert("click")}>Sign Up</Button>
        </div>
      </MainSection>

      <main className={styles.main}></main>

      <footer className={styles.footer}>Powered by LMAO</footer>
    </div>
  );
}
