import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavBar = () => {

  const [nav, setNav] = useState(false)

  return (
    <div className='flex justify-between items-center w-full h-20 text-white fixed bg-black px-4'>
      <div>
        <Link to="/">
          <h1 className='text-3xl font-signature ml-2'>Schleyer</h1>
        </Link>
      
      </div>
          <ul className='flex desktop-menu'>
          <Link to="/about" className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
              <h1>Über mich</h1>
          </Link>
          <Link to="/projekte" className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
              <h1>Projekte</h1>
          </Link>         
          <Link to="/kontakt" className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
              <h1>Kontakt</h1>
          </Link>          
        </ul>

      <div onClick={()=> setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30}/>}
      </div>

      {nav && (

      <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-200 text-gray-500'>
        <li className=' px-4 cursor-pointer py-6 text-4xl capitalize'>owdnjwon</li>
      </ul>

      )}


    </div>
  )
}

export default NavBar