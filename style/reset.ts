import { css } from '@emotion/react'

export default css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #__next {
    width: 100%;
    height: 100%;
    background-color: #e0e0e0;
    font-size: 16px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  p {
    font-size: 1rem;
    line-height: 1.4;
  }
  button {
    border: 0;
    background-color: transparent;
    font-size: 1rem;
    &:focus {
      outline: 0;
    }
  }
`
