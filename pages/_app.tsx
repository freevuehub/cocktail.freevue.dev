import Head from 'next/head'
import { css, Global } from '@emotion/react'
import { reset, common } from '~/style'

const AppCss = () => css`
  background-color: #e0e0e0;
`
const App = (props) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />

        <title>Cocktail | FreeVue Toy</title>
      </Head>
      <Global styles={[reset, common]} />
      <div css={AppCss} className="fill height">
        <props.Component {...props.pageProps} />
      </div>
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
