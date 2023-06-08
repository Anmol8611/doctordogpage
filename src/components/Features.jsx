import React from 'react'
import Feature from './Feature'

const Features = () => {
  return (
    <section className='flex justify-around items-center bg-[#ffc400] h-[50vh]'>
        <Feature icon={`kangojar.png`} number={`+34893`} title={`Happy Clients`}/>
        <Feature icon={`plus-icon.png`} number={`+34893`} title={`Department`}/>
        <Feature icon={`suii-icon.png`} number={`+34893`} title={`Vaccinations`}/>
    </section>
  )
}

export default Features