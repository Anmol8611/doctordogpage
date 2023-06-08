import React from 'react'

const TeamCard = (props) => {
  return (
    <div className='flex flex-col justify-center items-center gap-6 mx-32'>
      <div>
        <img src={`/assets/${props.img}`} alt='' />
      </div>
      <h4 className='text-4xl font-semibold'>{props.name}</h4>
      <button className='py-4 px-14 rounded-3xl text-white font-semibold bg-[#00bdcb] border-0'>
        {props.text}
      </button>
    </div>
  )
}

export default TeamCard