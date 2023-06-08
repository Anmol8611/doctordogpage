import React from 'react'
import Button from './Button'
import { BsPlayCircleFill } from 'react-icons/bs'

const ServiceBanner = (props) => {
  return (
    <section className={`flex ${props.flexDirection} justify-around items-center h-screen`}>
        <div className='flex flex-col gap-20'>
            <h3 className='text-7xl max-w-4xl font-bold'>As a Veterinarian and lover of animals</h3>
            <p className='max-w-4xl text-4xl font-thin'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem est voluptate eos asperiores enim? Repellendus quos ad corrupti ullam nobis?</p>
            <div>
            <Button text={"Our Services"} color={"#ffc400"}/>
            </div>
        </div>
        <div  className={`bg-[#ffc400cf] bg-[url("/assets/${props.img}")] bg-cover bg-blend-multiply bg-center h-[500px] w-[530px]`}>
            <div className='mx-[240px] my-[220px]'>
                <BsPlayCircleFill className='text-white text-7xl hover:text-[#00bdcbc1] transition-all'/>
            </div>
        </div>
    </section>
  )
}

export default ServiceBanner