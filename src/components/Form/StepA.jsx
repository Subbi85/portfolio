import React from 'react'

import { FaLongArrowAltRight } from "react-icons/fa";


const StepA = ({formData,handleChangeInput,handleNextStep}) => {
  return (
    <div>
        <h1 className='mt-2 text-xl font-bold text-blue-500'>Persönliche Daten</h1>
        <div>
          <div className="flex items-center border-b border-blue-500 active:border-cyan-300 py-2 mb-6">
            <input 
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Vorname"
              value={formData.firstName}
              onChange={(e) => handleChangeInput(e)}
              className='appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none'
            />
          </div>
            
          <div className="flex items-center border-b border-blue-500 active:border-cyan-300 py-2 mb-6">
            <input 
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Nachname"
              value={formData.lastName}
              onChange={(e) => handleChangeInput(e)}
              className='appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none'
            />
          </div>
        </div>
        <div className='my-2 flex justify-around'>
            <button className='bg-gradient-to-tr from-blue-500 to-blue-800 p-4 rounded-md' onClick={handleNextStep}><FaLongArrowAltRight size={30} /></button>
        </div>
    </div>
  )
}

export default StepA