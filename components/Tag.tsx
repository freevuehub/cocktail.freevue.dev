import React from 'react'
import { css } from '@emotion/react'

const TagCss = () => css`
  background: #e0e0e0;
  box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
  padding: 5px 10px;
  border-radius: 10px;
`

const Tag: React.FC = (props) => {
  return (
    <span css={TagCss} className="d-flex ai-center">{props.children}</span>
  )
}

export default Tag
