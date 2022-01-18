import React from 'react'
import { css } from '@emotion/react'
import Content from './Content'

interface IProps {
  className?: string
}
interface ICard extends React.FC<IProps> {
  Content: React.FC
}

const CardCss = () => css`
  border-radius: 20px;
  background: #e0e0e0;
  box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
  overflow: hidden;
`
const Card: ICard = (props) => {
  return (
    <div css={CardCss} className={props.className || ''}>
      {props.children}
    </div>
  )
}

Card.Content = Content

export default Card
