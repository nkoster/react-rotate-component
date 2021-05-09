import React, { useState } from 'react'

const style = {
  normal: {
    transition: 'transform .7s ease-in-out'
  },
  hover: {
    transform: 'rotate(360deg)'
  }
}

const Rotate = ({ children }) => {
  const [hover, setHover] = useState(false)
  return (
    <span
      onMouseEnter={_=> setHover(true)}
      onMouseLeave={_ => setHover(false)}
      style={{
        ...style.normal,
        ...(hover ? style.hover : null)
      }}
    >
      {children}
    </span>
  )
}

export default Rotate
