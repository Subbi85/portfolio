import React from 'react'

//icons
import { SiTailwindcss, SiCraftcms } from "react-icons/si";
import { FaHtml5, FaReact,FaNeos, FaBootstrap, FaTypo3, FaPhp, FaCss3Alt  } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const Experience = () => {
  return (
    <div name="experience" id="techstack" className='bg-gradient-to-b from-black to-gray-500 w-full h-auto p-4'>
      <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-auto text-white mt-[80px]'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-blue-800 p-2 inline font-signature'>Tech Stack</p>
                <p className='py-6'>Im Arbeitsalltag habe ich Erfahrungen mit folgenden Techs gesammelt:</p>
            </div>

            <div className='w-full grid grid-cols-3 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'>
                <div className='hover:scale-105 duration-500 rounded-lg py-2 hover:shadow-lg hover:shadow-red-500'>
                    <FaHtml5 size={80} className='w-20 mx-auto' />
                    <p className='mt-4'>HTML</p>
                </div>

                <div className='hover:scale-105 duration-500 rounded-lg py-2 hover:shadow-lg hover:shadow-blue-500 '>
                    <FaCss3Alt size={80} className='w-20 mx-auto ' />
                    <p className='mt-4'>Css</p>
                </div>

                <div className='hover:scale-105 duration-500 rounded-lg py-2 hover:shadow-lg hover:shadow-yellow-400'>
                    <IoLogoJavascript size={80} className='w-20 mx-auto' />
                    <p className='mt-4'>JS</p>
                </div>

                <div className='hover:scale-105 duration-500 rounded-lg py-2 hover:shadow-lg hover:shadow-purple-400'>
                    <FaPhp size={80} className='w-20 mx-auto' />
                    <p className='mt-4'>PHP</p>
                </div>
           
                <div className='hover:scale-105 duration-500 rounded-lg py-2 hover:shadow-lg hover:shadow-red-400'>
                    <SiCraftcms size={80} className='w-20 mx-auto' />
                    <p className='mt-4'>Craft CMS</p>
                </div>

                <div className='hover:scale-105 duration-500 rounded-lg py-2 hover:shadow-lg hover:shadow-orange-400'>
                    <FaTypo3 size={80} className='w-20 mx-auto' />
                    <p className='mt-4'>Typo3</p>
                </div>

                <div className='hover:scale-105 duration-500 rounded-lg py-2 hover:shadow-lg hover:shadow-blue-400'>
                    <FaNeos size={80} className='w-20 mx-auto' />
                    <p className='mt-4'>Neos CMS</p>
                </div>

                <div className='hover:scale-105 duration-500 rounded-lg py-2 hover:shadow-lg hover:shadow-purple-600'>
                    <FaBootstrap size={80} className='w-20 mx-auto' />
                    <p className='mt-4'>Bootstrap</p>
                </div>
            </div>           

            <div>
                <p className='text-4xl font-bold border-b-4 border-blue-800 p-2 inline font-signature'>Neue Techs</p>
                <p className='py-6 '>Außerdem interessiere ich mich derzeit für:</p>
            </div>

            <div className='w-full grid grid-cols-3 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'>
                <div className='hover:scale-105  duration-500 rounded-lg py-2 hover:shadow-lg hover:shadow-sky-500'>
                    < FaReact size={80} className='w-20 mx-auto' />
                    <p className='mt-4'>React</p>
                </div>

                <div className='hover:scale-105  duration-500 rounded-lg py-2 hover:shadow-lg hover:shadow-blue-500'>
                    <SiTailwindcss size={80} className='w-20 mx-auto' />
                    <p className='mt-4'>Tailwind</p>
                </div>
            </div>

      </div>
    </div>
  )
}

export default Experience
