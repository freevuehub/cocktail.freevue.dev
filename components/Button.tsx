import React from 'react'
import Link from 'next/link'
import { css } from '@emotion/react'

interface IProps {
  href?: string
}

const ButtonCss = () => css`
  border-radius: 10px;
  background: linear-gradient(145deg, #f0f0f0, #cacaca);
  box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
  padding: 10px 15px;
`
const Button: React.FC<IProps> = (props) => {
  return props.href ? (
    <Link href={props.href}>
      <a css={ButtonCss} className="d-block">{props.children}</a>
    </Link>
  ) : (
    <button css={ButtonCss}>{props.children}</button>
  )
}

export default Button
