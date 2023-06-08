import React from 'react'
import RecentPostCard from './RecentPostCard'

const RecentPost = () => {
  return (
    <section className='h-screen flex flex-col gap-16 items-center my-40'>
        <h2 className='text-7xl font-extrabold'>The Vetcare Team</h2>
        <p className='text-3xl font-medium max-w-3xl text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A esse omnis architecto, vero illum</p>
        <div className='flex items-center justify-around gap-32'>
            <RecentPostCard img={`Lcard1.png`}/>
            <RecentPostCard img={`Lcard1.png`}/>
            <RecentPostCard img={`Lcard1.png`}/>
        </div>
    </section>
  )
}

export default RecentPost