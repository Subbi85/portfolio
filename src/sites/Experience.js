import React from 'react'

import htmlImage from '../assets/img/html.png'

const Experience = () => {
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-500 to-black w-full h-screen'>
      <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline font-signature'>Experience</p>
                <p className='py-6 '>Techs i worked with</p>
            </div>

            <div className='w-full grid grid-cols-3 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'>
                <div className=' hover:scale-105  duration-500 rounded-lg py-2'>
                    <img src={htmlImage} alt="" className='w-20 mx-auto hover:shadow-xl  shadow-red-900 duration-200' />
                    <p className='mt-4'>HTML</p>
                </div>

                <div className=' hover:scale-105 duration-500 rounded-lg py-2 '>
                    <img src={htmlImage} alt="" className='w-20 mx-auto shadow-lg shadow-red-900' />
                    <p className='mt-4'>Css</p>
                </div>

                <div className=' hover:scale-105 duration-500 rounded-lg py-2'>
                    <img src={htmlImage} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>JS</p>
                </div>

                <div className=' hover:scale-105 duration-500 rounded-lg py-2'>
                    <img src={htmlImage} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>PHP</p>
                </div>
           
                <div className=' hover:scale-105 duration-500 rounded-lg py-2'>
                    <img src={htmlImage} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>HTML</p>
                </div>

                <div className=' hover:scale-105 duration-500 rounded-lg py-2'>
                    <img src={htmlImage} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>Css</p>
                </div>

                <div className=' hover:scale-105 duration-500 rounded-lg py-2'>
                    <img src={htmlImage} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>JS</p>
                </div>

                <div className=' hover:scale-105 duration-500 rounded-lg py-2'>
                    <img src={htmlImage} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>PHP</p>
                </div>
            </div>           

      </div>
    </div>
  )
}

export default Experience
