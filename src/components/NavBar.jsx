import React from 'react'
import { FaSearch } from 'react-icons/fa';

const NavBar = () => {
  return (
    <nav className="bg-[#eaae00] flex justify-around items-center p-5">
        <div>
            <img className='' src="/assets/logo.png" alt="logo" />
        </div>
        <div>
          <ul className='flex gap-[100px] items-center text-white'>
            <li className='text-2xl font-bold'><a href="#">Home</a></li>
            <li className='text-2xl font-bold'><a href="#">About</a></li>
            <li className='text-2xl font-bold'><a href="#">Service</a></li>
            <li className='text-2xl font-bold'><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="flex items-center">
          <input type="text" placeholder='Search' className='text-center bg-[#ffc400] p-[10px] placeholder-white text-lg' />
          <div className='py-[9px] px-5 text-center bg-[#00bfcb]' >
            <FaSearch size="1.5rem" className='fill-white'/>
          </div>
        </div>
    </nav>
  )
}

export default NavBar