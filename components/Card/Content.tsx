import React from 'react'
import { css } from '@emotion/react'

const ContentCss = () => css`
  padding: 10px;
`
const Content: React.FC = (props) => {
  return (
    <div css={ContentCss}>
      {props.children}
    </div>
  )
}

export default Content
