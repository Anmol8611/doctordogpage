import React from 'react'

const RecentPostCard = (props) => {
  return (
    <div className='flex flex-col items-center gap-5 border-2 rounded-lg pb-5'>
        <div><img src={`/assets/${props.img}`} alt="image" /></div>
        <div className='flex flex-col items-start gap-4 max-w-[300px]'>
            <h4 className='text-3xl font-bold'>As a Veterinarian and lover of animals</h4>
            <p className='text-left text-base text-[#00bfcb]'>February 09, 2020</p>
            <p className='text-sm font-extralight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, esse temporibus amet cumque sapiente ullam animi ratione beatae aliquid quaerat!</p>
            <p className='text-lg text-[#00bfcb]'>Read More+</p>
        </div>
    </div>
  )
}

export default RecentPostCard