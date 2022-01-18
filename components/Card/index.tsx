import React from 'react'
import Link from 'next/link'
import { css } from '@emotion/react'
import Content from './Content'

interface IProps {
  className?: string
  href?: string
}
interface ICard extends React.FC<IProps> {
  Content: React.FC
}

const CardCss = () => css`
  border-radius: 20px;
  background: #e0e0e0;
  box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
  overflow: hidden;
`
const Card: ICard = (props) => {
  return (
    <div css={CardCss} className={props.className || ''}>
      {
        props.href ? (
          <Link href={props.href}>
            <a className="d-block fill width">{props.children}</a>
          </Link>
        ) : props.children
      }
    </div>
  )
}

Card.Content = Content

export default Card
