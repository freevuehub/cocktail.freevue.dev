import { css } from '@emotion/react'

const flexItems = ['center', 'start']
const flexContents = ['center', 'space-between']
const gap = [0, 1, 2, 3, 4, 5]
const display = ['flex', 'block']

export default css`
  .fill {
    &.width { width: 100%; }
    &.height { height: 100%; }
  }
  
  ${display.map((value) => `.d-${value} { display: ${value}; }`)}
  ${flexItems.map((value) => `.ai-${value} { align-items: ${value}; }`)}
  ${flexContents.map((value) => `.jc-${value} { justify-content: ${value}; }`)}
  ${gap.map((value) => `
    .ga-${value} { gap: ${value}rem; }
    
    .pa-${value} { padding: ${value}rem; }
    .pl-${value} { padding-left: ${value}rem; }
    .pt-${value} { padding-top: ${value}rem; }
    .pr-${value} { padding-right: ${value}rem; }
    .pb-${value} { padding-bottom: ${value}rem; }
    
    .ma-${value} { margin: ${value}rem; }
    .ml-${value} { margin-left: ${value}rem; }
    .mt-${value} { margin-top: ${value}rem; }
    .mr-${value} { margin-right: ${value}rem; }
    .mb-${value} { margin-bottom: ${value}rem; }
  `)}
  
  .flex-wrap { flex-wrap: wrap; }
`
