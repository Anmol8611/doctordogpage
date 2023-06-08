import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'

const Footer = () => (
    <footer className='flex justify-around items-center h-[70vh] bg-[#313131] text-white'>
        <div className='flex flex-col items-start gap-5'>
            <h2 className='text-5xl font-bold'>About</h2>
            <ul className='flex flex-col gap-2'>
                <li className='text-xl font-medium'>History</li>
                <li className='text-xl font-medium'>Our Team</li>
                <li className='text-xl font-medium'>Brand Guidelines</li>
                <li className='text-xl font-medium'>Terms & Conditions</li>
                <li className='text-xl font-medium'>Privacy Policy</li>
            </ul>
        </div>
        <div className='flex flex-col items-start gap-5'>
            <h2 className='text-5xl font-bold'>Services</h2>
            <ul className='flex flex-col gap-2'>
                <li className='text-xl font-medium'>How to Order?</li>
                <li className='text-xl font-medium'>Our Product</li>
                <li className='text-xl font-medium'>Order Status</li>
                <li className='text-xl font-medium'>Promo</li>
                <li className='text-xl font-medium'>Payment Method</li>
            </ul>
        </div>
        <div className='flex flex-col items-end'>
            <h2 className='text-5xl font-bold mb-3'>Contact Us</h2>
            <p className='text-xl font-medium'>Lorem ipsum dolor sit amet consectetur.</p>
            <div className='flex items-center mt-10'>
                <input type="text" className='bg-[#ffc400] py-4 px-10' />
                <div className='py-4 px-7 bg-[#00bfcb]'>
                    <FaTelegramPlane className='text-2xl' />
                </div>
            </div>
            <div className='flex items-center gap-5 mt-10'>
                <BsInstagram className='text-3xl'/>
                <BsFacebook className='text-3xl'/>
                <BsTwitter className='text-3xl'/>
                <BsWhatsapp className='text-3xl'/>
            </div>
        </div>
    </footer>
)

export default Footer