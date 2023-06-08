import React from 'react'
import TeamCard from './TeamCard'

const Team = () => {
  return (
    <section className='h-screen flex flex-col gap-16 justify-center items-center'>
        <h2 className='text-7xl font-extrabold'>The Vetcare Team</h2>
        <p className='text-3xl font-medium max-w-3xl text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A esse omnis architecto, vero illum</p>
        <div className='flex items-center'>
            <TeamCard img={`doctorcard1.png`} name={`Jeniffer Mullen`} text={`VETERINARY`}/>
            <TeamCard img={`doctorcard2.png`} name={`Shereen Collins`} text={`ADMINISTRATION`}/>
            <TeamCard img={`doctorcard3.png`} name={`Jeniffer Mullen`} text={`VETERINARY`}/>
        </div>
    </section>
  )
}

export default Team