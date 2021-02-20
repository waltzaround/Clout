import Document, { Html, Head, Main, NextScript } from "next/document";

class CloutMain extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <StyletronProvider value={engine}>
          <BaseProvider theme={LightTheme}>
            <Head />
            <body>
              <Main />
              <NextScript />
            </body>
          </BaseProvider>
        </StyletronProvider>
      </Html>
    );
  }
}

export default CloutMain;
