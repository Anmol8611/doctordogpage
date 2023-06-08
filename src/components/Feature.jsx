import React from 'react'

const Feature = (props) => {
  return (
    <div className='flex flex-col justify-center items-center text-white gap-6'>
        <div className='text-white mb-7'><img src={`/assets/${props.icon}`} alt="" /></div>
        <h4 className='text-3xl'>{props.number}</h4>
        <h3 className='text-4xl font-bold'>{props.title}</h3>
    </div>
  )
}

export default Feature