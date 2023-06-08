import React from 'react'

const VaccinationCard = (props) => {
  return (
    <div className='flex flex-col justify-center items-center gap-6 mx-40'>
        <div><img className='max-h-[300px]' src={`assets/${props.img}`} alt="" /></div>
        <h4 className='text-white text-4xl font-semibold'>{props.text}</h4>
        <p className='text-white text-center text-xl max-w-[350px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, corrupti?</p>
    </div>
  )
}

export default VaccinationCard