import React from 'react'

const Button = (props) => {
  return (
    <button className={`bg-[${props.color}] py-4 px-8 rounded-md text-white font-semibold ${props.bor}`}>{props.text}</button>
  )
}

export default Button