import React from 'react'

//Icons
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div name="footer" className='h-auto w-full bg-gray-500 p-4' id="kontakt">
        <div className='w-full lg:max-w-screen-lg mx-auto flex flex-col justify-center text-white pt-6'>
            <div className='flex flex-col sm:flex-row justify-between p-6'>
                <p className='py-2 flex jusify-center align-center'><FaRegCopyright size={15}/> <span className='px-2'>Lars Schleyer / Webentwickler</span></p>
            </div>
        </div>
    </div>
  )
}

export default Footer