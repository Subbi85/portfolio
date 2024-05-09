import React from 'react'

import { SiTailwindcss, SiCraftcms } from "react-icons/si";
import { FaHtml5, FaReact,FaNeos, FaBootstrap, FaTypo3, FaPhp, FaCss3Alt, FaArrowAltCircleDown } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const CvInfos = () => {
  return (
    
    <li>
    <div id="first-item" className="flex-start md:flex">
      <div className="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-gray-500 text-info-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path
            fillRule="evenodd"
            d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div id="content" className="mb-10 ml-6 block max-w-full rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10 relative">
        <div className="mb-4 flex justify-between">
          <p
            className="text-xl text-info transition duration-150 ease-in-out"
          >
            Neue Herausforderung gesucht!
          </p>
          <p className="text-xl text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
          >
            seit April 2024
          </p>
        </div>
        <p className="mb-6 text-neutral-700 dark:text-neutral-200">
          Libero expedita explicabo eius fugiat quia aspernatur autem
          laudantium error architecto recusandae natus sapiente sit nam
          eaque, consectetur porro molestiae ipsam an deleniti.
        </p>

        <div className='flex flex-row justify-start'>
          <FaReact size={40} /> <SiTailwindcss size={60} />
        </div>
        <div className='absolute right-5 bottom-5'>
          <FaArrowAltCircleDown size={20}/>
        </div>
      </div>
    </div>
  </li>
  )
}

export default CvInfos