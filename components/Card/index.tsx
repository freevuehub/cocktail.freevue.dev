import React from 'react'
import { css } from '@emotion/react'
import Content from './Content'

interface ICard extends React.FC {
  Content: React.FC
}

const CardCss = () => css`
  border-radius: 50px;
  background: #e0e0e0;
  box-shadow: 10px 10px 20px #bebebe, -10px -10px 20px #ffffff;
`
const Card: ICard = (props) => {
  return (
    <div css={CardCss}>
      {props.children}
    </div>
  )
}

Card.Content = Content

export default Card
