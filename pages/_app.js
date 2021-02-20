import App from "next/app";
import { Provider as StyletronProvider } from "styletron-react";
import { styletron } from "../styletron";
import { createTheme, BaseProvider, lightThemePrimitives } from "baseui";
import "../styles.css";

const primitives = {
  ...lightThemePrimitives,
};
const overrides = {};

const VTheme = createTheme(lightThemePrimitives, overrides);
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <StyletronProvider value={styletron}>
        <BaseProvider theme={VTheme}>
          <Component {...pageProps} />
        </BaseProvider>
      </StyletronProvider>
    );
  }
}
