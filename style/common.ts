import { css } from '@emotion/react'

const flexItems = ['center']
const flexContents = ['center']
export default css`
  .fill {
    &.width { width: 100%; }
    &.height { height: 100%; }
  }
  .d-flex {
    display: flex;
  }
  ${flexItems.map((value) => `.ai-${value} { align-items: ${value}; }`)}
  ${flexContents.map((value) => `.jc-${value} { justify-content: ${value}; }`)}
`
