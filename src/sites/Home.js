import React from 'react'
import {FaLongArrowAltRight  } from 'react-icons/fa'
import { useTypewriter } from 'react-simple-typewriter'

import HeroImage from '../assets/img/Hero.png'
import Sociallinks from '../components/Sociallinks'

const Home = () => {

  const [typeEffect] = useTypewriter({
    words:['Frontend', 'CMS', 'PHP', 'JS/React'],
    loop:{},
    typeSpeed:100,
    deleteSpeed:40
  })

  return (
    <div name="home" className='h-screen w-full bg-black' id="home">
      <div className='h-full max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-centerh-full px-4 md:flex-row text-white'>
        <div className='flex flex-col justify-center h-full'>
          <h2 id="typewriter" className='text-5xl md:text-6xl font-bold pr-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800'>Lars Schleyer -<br />Webentwickler:</h2>
          <h2 className='text-5xl md:text-6xl font-bold pr-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800'>{typeEffect}</h2>
          
          <p className='text-gray-500 py-4 max-w-md'></p>
          <div>
            <a href="/#portfolio">
              <button className='group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-blue-800 cursor-pointer'> 
                Portfolio
                <span className='px-2 group-hover:rotate-90 duration-300'>
                  <FaLongArrowAltRight size={25}/>
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className='pt-16 md:pt-0'>
          <img src={HeroImage} alt="my pic" className='rounded-2xl mx-auto w-2/3 m-auto py-6 md:w-full'/>
        </div>
      </div>

      <Sociallinks />
    </div>
  )
}

export default Home