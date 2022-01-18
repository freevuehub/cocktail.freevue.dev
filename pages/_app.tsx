import Head from 'next/head'
import { Global } from '@emotion/react'
import { reset, common } from '~/style'

const App = (props) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />

        <title>Cocktail | FreeVue Toy</title>
      </Head>
      <Global styles={[reset, common]} />
      <props.Component {...props.pageProps} />
    </>
  )
}

App.getInitialProps = async (context) => {
  let pageProps = {}

  if (context.Component.getInitialProps) {
    pageProps = await context.Component.getInitialProps(context.ctx)
  }

  pageProps = { ...pageProps }

  return {
    pageProps
  }
}

export default App
