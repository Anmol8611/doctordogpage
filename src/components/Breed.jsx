import React from 'react'
import BreedCard from './BreedCard'

const Breed = () => {
  return (
    <section className='bg-[#ffc400] h-screen text-white flex flex-col gap-16 justify-center items-center'>
        <h2 className='text-7xl font-extrabold'>Breeds</h2>
        <p className='text-3xl font-medium max-w-3xl text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A esse omnis architecto, vero illum</p>
        <div className='flex items-center'>
            <BreedCard img={"kutta1.png"} price={`$30`} text={`Buy Now`}/>
            <BreedCard img={"kutta2.png"} price={`$25`} text={`Buy Now`}/>
            <BreedCard img={"kutta3.png"} price={`$20`} text={`Buy Now`}/>
            
        </div>
    </section>
  )
}

export default Breed