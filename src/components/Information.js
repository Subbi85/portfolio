import React from 'react'

//Icons
import { FaCode } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";

const Information = () => {
  return (
    <div id="infos">
        <div className='flex flex-col justify-between'>
            <div className='flex flex-row justify-between'> 
                <div className='w-[30%] flex flex-col items-center justify-center shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10 rounded-md p-6'>
                  <FaCode size={40} className=''/>
                  <p className='mb-6 font-bold text-2xl text-white'> Erfahrung: </p>
                  <p className='mb-6 text-center'> 3+ Jahre Arbeitserfahrung</p>
                </div>
                <div className='w-[30%] flex flex-col items-center justify-center shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10 rounded-md p-6'>
                  <FaProjectDiagram size={40} className=''/>
                  <p className='mb-6 font-bold text-2xl text-white'> Projekte: </p>
                  <p className='mb-6 text-center'> 30+ Projekte</p>
                </div>
                <div className='w-[30%] flex flex-col items-center justify-center shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10 rounded-md p-6'>
                  <FaCode size={40} className=''/>
                  <p className='mb-6 font-bold text-2xl text-white'> Erfahrung: </p>
                  <p className='mb-6 text-center'> 3+ Jahre Arbeitserfahrung</p>
                </div>
            </div>
            <div className='mb-6 mt-6 text-neutral-700 dark:text-neutral-200'>
              Zuerst war die zweite Ausbildung, dann wurde ein Hobby und zum Schluss ein Beruf. 
            </div>
            <div>
              <button className='group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'> 
                Kontakt
              </button>
            </div>
        </div>

    </div>
  )
}

export default Information