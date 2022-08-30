import React from 'react'

const Button = ({children,onClick}) => {
    return (
      <button onClick={onClick} className='bgbtn py-3'>{children}</button>
  )
}

export default Button