import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

const FAVICON = 'https://file.freevue.dev/images/logo/blog/favicon.ico'

class MyDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    const initialProps = await Document.getInitialProps(context)

    return {
      ...initialProps,
    }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />

          <link rel="shortcut icon" href={FAVICON} />
          <link rel="icon" href={FAVICON} type="image/x-icon" />
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
