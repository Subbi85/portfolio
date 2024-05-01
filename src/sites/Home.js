import React from 'react'
import {FaLongArrowAltRight  } from 'react-icons/fa'


import HeroImage from '../assets/img/Hero.png'
import Sociallinks from '../components/Sociallinks'

const Home = (lightTheme) => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800' id="home">
      <div className='h-full max-w-screen-lg mx-auto flex flex-col items-center justify-centerh-full px-4 md:flex-row text-white'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>Ich bin ein Frontend Entwickler</h2>
          <p className='text-gray-500 py-4 max-w-md'>Lorem Ipsum</p>
          <div>
            <button className='group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio
              <span className='px-2 group-hover:rotate-90 duration-300'>
                <FaLongArrowAltRight size={25}/>
              </span>
            </button>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="my pic" className='rounded-2xl mx-auto w2/3 md:w-full'/>
        </div>
      </div>

      <Sociallinks />
    </div>
  )
}

export default Home