import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

const NavBar = ({lightTheme, setLightTheme}) => {

  const [nav, setNav] = useState(false)
  const toggelTheme =()=>{
    lightTheme ? setLightTheme(false) : setLightTheme(true)
  }

  const hideNav =()=>{
    const mobileNav = document.getElementById("navMobile")
  }

  return (
    <div className='flex justify-between items-center w-full h-20 text-white fixed bg-black px-4 z-10'>
      <div>
        <a href="/#home">
          <h1 className='text-5xl font-signature ml-2'>Schleyer</h1>
        </a>
      </div>
        <div className='invisible'>
          {lightTheme ? <div onClick={toggelTheme}><MdOutlineWbSunny size={30} className='duration-200'/></div> : <div onClick={toggelTheme}><FaRegMoon size={30} className='duration-200'/></div> }
        </div>
          <ul className='hidden md:flex desktop-menu'>
          <input
            className="me-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-black/25 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-white after:shadow-switch-2 after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ms-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-switch-1 checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-switch-3 focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ms-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-switch-3 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-white/25 dark:after:bg-surface-dark dark:checked:bg-primary dark:checked:after:bg-primary invisible"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault01" 
            onClick={toggelTheme}/>

          <a href="/#about" className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
              <h1>Über mich</h1>
          </a>
          <a href="/#projekte" className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
              <h1>Projekte</h1>
          </a>
          <a href="/#experience" className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
              <h1>Tech</h1>
          </a>
          <a href="/#lebenslauf" className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
              <h1>Lebenslauf</h1>
          </a>               
          <a href="/#kontakt" className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
              <h1>Kontakt</h1>
          </a>          
        </ul>

      <div onClick={()=> setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30}/>}
      </div>

      {nav && (

      <ul id="navMobile" className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black text-gray-500'>
        <li className='px-4 cursor-pointer py-6 text-4xl capitalize hover:text-cyan-500'><a href="/#home" rel="noreferrer" onClick={hideNav} >Home</a></li>
        <li className='px-4 cursor-pointer py-6 text-4xl capitalize hover:text-cyan-500'><a href="/#about" rel="noreferrer" onClick={hideNav} >Über mich</a></li>
        <li className='px-4 cursor-pointer py-6 text-4xl capitalize hover:text-cyan-500'><a href="/#projekte" rel="noreferrer" onClick={hideNav} >Projekte</a></li>
        <li className='px-4 cursor-pointer py-6 text-4xl capitalize hover:text-cyan-500'><a href="/#experience" rel="noreferrer" onClick={hideNav} >Techstack</a></li>
        <li className='px-4 cursor-pointer py-6 text-4xl capitalize hover:text-cyan-500'><a href="/#lebenslauf" rel="noreferrer" onClick={hideNav} >CV</a></li>
        <li className='px-4 cursor-pointer py-6 text-4xl capitalize hover:text-cyan-500'><a href="/#kontakt" rel="noreferrer" onClick={hideNav} >Kontakt</a></li>
      </ul>
      )}
    </div>
  )
}

export default NavBar