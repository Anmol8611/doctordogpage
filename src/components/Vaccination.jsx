import React from 'react'
import VaccinationCard from './VaccinationCard'

const Vaccination = () => {
  return (
    <section className='bg-[#ffc400] h-screen text-white flex flex-col gap-16 justify-center items-center'>
        <h2 className='text-7xl font-extrabold'>Vaccination</h2>
        <p className='text-3xl font-medium max-w-3xl text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A esse omnis architecto, vero illum</p>
        <div className='flex items-center'>
            <VaccinationCard img={`card1.png`} text={`Veterinarian`}/>
            <VaccinationCard img={`card2.png`} text={`Vaccination Care`}/>
            <VaccinationCard img={`card3.png`} text={`Dental Care`}/>
        </div>
    </section>
  )
}

export default Vaccination