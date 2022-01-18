import React from 'react'

const Content: React.FC = (props) => {
  return (
    <div className="pa-1">
      {props.children}
    </div>
  )
}

export default Content
