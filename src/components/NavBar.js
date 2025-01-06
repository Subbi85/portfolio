import React, { useState } from 'react'
import { FaBars, FaTimes, FaRegMoon, FaHome, FaComputer } from "react-icons/fa";
import { MdOutlineWbSunny, MdConnectWithoutContact } from "react-icons/md";
import { IoPerson, IoDocumentAttachOutline } from "react-icons/io5";
import { PiProjectorScreenChartDuotone } from "react-icons/pi";

const NavBar = ({ lightTheme, setLightTheme }) => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState('#home'); // Track active link
  
  const toggleTheme = () => {
    setLightTheme(!lightTheme);
  };

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  return (
    <div className={`flex justify-between items-center w-full h-20 fixed px-4 z-10 ${lightTheme ? 'bg-white text-black' : 'bg-black text-white'}`}>
      {/* Logo */}
      <div>
        <a href="/#home" onClick={() => handleSetActive('#home')} className={`text-5xl font-signature ml-2 ${activeLink === '#home' ? 'isActive' : ''}`}>
          Schleyer
        </a>
      </div>

      {/* Theme Toggle Button
      <div className='md:flex'>
        <div onClick={toggleTheme} className='cursor-pointer'>
          {lightTheme ? <MdOutlineWbSunny size={30} className='duration-200 text-black' /> : <FaRegMoon size={30} className='duration-200 text-gray-500' />}
        </div>
      </div> */}

      {/* Desktop Menu */}
      <ul className='hidden md:flex desktop-menu'>
        <a href="/#about" onClick={() => handleSetActive('#about')} className={`navLink px-4 cursor-pointer capitalize font-medium ${activeLink === '#about' ? 'text-blue-500' : lightTheme ? 'text-black' : 'text-gray-500'} hover:scale-105 duration-200`}>
          Über mich
        </a>
        <a href="/#portfolio" onClick={() => handleSetActive('#portfolio')} className={`navLink px-4 cursor-pointer capitalize font-medium ${activeLink === '#portfolio' ? 'text-blue-500' : lightTheme ? 'text-black' : 'text-gray-500'} hover:scale-105 duration-200`}>
          Portfolio
        </a>
        <a href="/#techstack" onClick={() => handleSetActive('#techstack')} className={`navLink px-4 cursor-pointer capitalize font-medium ${activeLink === '#techstack' ? 'text-blue-500' : lightTheme ? 'text-black' : 'text-gray-500'} hover:scale-105 duration-200`}>
          Techstack
        </a>
        <a href="/#lebenslauf" onClick={() => handleSetActive('#lebenslauf')} className={`navLink px-4 cursor-pointer capitalize font-medium ${activeLink === '#lebenslauf' ? 'text-blue-500' : lightTheme ? 'text-black' : 'text-gray-500'} hover:scale-105 duration-200`}>
          Lebenslauf
        </a>
        <a href="/#kontakt" onClick={() => handleSetActive('#kontakt')} className={`navLink px-4 cursor-pointer capitalize font-medium ${activeLink === '#kontakt' ? 'text-blue-500' : lightTheme ? 'text-black' : 'text-gray-500'} hover:scale-105 duration-200`}>
          Kontakt
        </a>
      </ul>

      {/* Mobile Menu Icon */}
      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className={`flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen ${lightTheme ? 'bg-white text-black' : 'bg-gradient-to-b from-black to-blue-800 text-gray-500'}`}>
          <li onClick={() => setNav(false)} className='cursor-pointer pr-4 z-10 hover:text-blue-500 absolute top-6 right-4'>
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </li>
          <li className={`px-4 py-6 text-4xl capitalize ${activeLink === '#home' ? 'text-blue-500' : ''}`}><a href="/#home" onClick={() => { setNav(false); handleSetActive('#home'); }}><FaHome className='mr-2' size={40}/>Home</a></li>
          <li className={`px-4 py-6 text-4xl capitalize ${activeLink === '#about' ? 'text-blue-500' : ''}`}><a href="/#about" onClick={() => { setNav(false); handleSetActive('#about'); }}><IoPerson className='mr-2' size={40}/>Über mich</a></li>
          <li className={`px-4 py-6 text-4xl capitalize ${activeLink === '#portfolio' ? 'text-blue-500' : ''}`}><a href="/#portfolio" onClick={() => { setNav(false); handleSetActive('#portfolio'); }}><PiProjectorScreenChartDuotone className='mr-2' size={40}/>Portfolio</a></li>
          <li className={`px-4 py-6 text-4xl capitalize ${activeLink === '#techstack' ? 'text-blue-500' : ''}`}><a href="/#techstack" onClick={() => { setNav(false); handleSetActive('#techstack'); }}><IoDocumentAttachOutline className='mr-2' size={40}/>Techstack</a></li>
          <li className={`px-4 py-6 text-4xl capitalize ${activeLink === '#lebenslauf' ? 'text-blue-500' : ''}`}><a href="/#lebenslauf" onClick={() => { setNav(false); handleSetActive('#lebenslauf'); }}><IoDocumentAttachOutline className='mr-2' size={40}/>Lebenslauf</a></li>
          <li className={`px-4 py-6 text-4xl capitalize ${activeLink === '#kontakt' ? 'text-blue-500' : ''}`}><a href="/#kontakt" onClick={() => { setNav(false); handleSetActive('#kontakt'); }}><MdConnectWithoutContact className='mr-2' size={40}/>Kontakt</a></li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
