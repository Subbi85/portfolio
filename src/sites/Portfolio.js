import React from 'react'
import placeholderimage from '../assets/img/placeholder.jpg'

const Projects = () => {


  return (
    <div name="portfolio" className='w-full md:h-screen bg-gradient-to-b from-black to-gray-800 text-white'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 font-signature'>Portfolio</p>
            <p className='py-6'>Check out my work right here...</p>
          </div>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

            <div className='shadow-md shadow-gray-500 rounded-lg'>
              <img src={placeholderimage} alt=""  className='rounded-md duration-200 hover:scale-105'/> 
              <div className='flex items-center justify-center'>
                <button className='w-1/2 px-6 py-3 duration-200'>Link</button>
                <button className='w-1/2 px-6 py-3 duration-200'>Code</button>
              </div>
            </div>
            
            <div className='shadow-md shadow-gray-500 rounded-lg'>
              <img src={placeholderimage} alt=""  className='rounded-md duration-200 hover:scale-105'/>
              <div className='flex items-center justify-center'>
                <button className='w-1/2 px-6 py-3 duration-200'>Link</button>
                <button className='w-1/2 px-6 py-3 duration-200'>Code</button>
              </div>
            </div>
            
            <div className='shadow-md shadow-gray-500 rounded-lg'>
              <img src={placeholderimage} alt=""  className='rounded-md duration-200 hover:scale-105'/>
              <div className='flex items-center justify-center'>
                <button className='w-1/2 px-6 py-3 duration-200'>Link</button>
                <button className='w-1/2 px-6 py-3 duration-200'>Code</button>
              </div>
            </div>

            <div className='shadow-md shadow-gray-500 rounded-lg'>
              <img src={placeholderimage} alt=""  className='rounded-md duration-200 hover:scale-105'/>
              <div className='flex items-center justify-center'>
                <button className='w-1/2 px-6 py-3 duration-200'>Link</button>
                <button className='w-1/2 px-6 py-3 duration-200'>Code</button>
              </div>
            </div>

            <div className='shadow-md shadow-gray-500 rounded-lg'>
              <img src={placeholderimage} alt=""  className='rounded-md duration-200 hover:scale-105'/>
              <div className='flex items-center justify-center'>
                <button className='w-1/2 px-6 py-3 duration-200'>Link</button>
                <button className='w-1/2 px-6 py-3 duration-200'>Code</button>
              </div>
            </div>

            <div className='shadow-md shadow-gray-500 rounded-lg'>
              <img src={placeholderimage} alt=""  className='rounded-md duration-200 hover:scale-105'/>
              <div className='flex items-center justify-center'>
                <button className='w-1/2 px-6 py-3 duration-200'>Link</button>
                <button className='w-1/2 px-6 py-3 duration-200'>Code</button>
              </div>
            </div>

            <div className='shadow-md shadow-gray-500 rounded-lg'>
              <img src={placeholderimage} alt=""  className='rounded-md duration-200 hover:scale-105'/>
              <div className='flex items-center justify-center'>
                <button className='w-1/2 px-6 py-3 duration-200'>Link</button>
                <button className='w-1/2 px-6 py-3 duration-200'>Code</button>
              </div>
            </div>

            <div className='shadow-md shadow-gray-500 rounded-lg'>
              <img src={placeholderimage} alt=""  className='rounded-md duration-200 hover:scale-105'/>
              <div className='flex items-center justify-center'>
                <button className='w-1/2 px-6 py-3 duration-200'>Link</button>
                <button className='w-1/2 px-6 py-3 duration-200'>Code</button>
              </div>
            </div>

            <div className='shadow-md shadow-gray-500 rounded-lg'>
              <img src={placeholderimage} alt=""  className='rounded-md duration-200 hover:scale-105'/>
              <div className='flex items-center justify-center'>
                <button className='w-1/2 px-6 py-3 duration-200'>Link</button>
                <button className='w-1/2 px-6 py-3 duration-200'>Code</button>
              </div>
            </div>


          </div>
            
          </div>

        </div>
  )
}

export default Projects