import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { css, Global } from '@emotion/react'
import { reset, common } from '~/style'

const AppCss = () => css`
  background-color: #e0e0e0;
`
const App: NextPage<AppProps> = (props) => {
  return (
    <>
      <Global styles={[reset, common]} />
      <div css={AppCss} className="fill height">
        <props.Component />
      </div>
    </>
  )
}

export default App
