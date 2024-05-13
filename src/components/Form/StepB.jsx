import React from 'react'
import { FaLongArrowAltRight, FaLongArrowAltLeft  } from "react-icons/fa";

const StepB = ({formData,handleChangeInput,handleNextStep,handlePrevStep}) => {
  return (
    <div>
        <h1 className='mt-2 text-xl font-bold text-blue-500'>Ihre Firma</h1>
        <div>
          <div className="flex items-center border-b border-blue-500 active:border-cyan-300 py-4 mb-6">
            <input 
              type="text"
              id="company"
              name="company"
              placeholder="Firma"
              value={formData.company}
              onChange={(e) => handleChangeInput(e)}
              className='appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none'
            />
          </div>
            
          <div className="flex items-center border-b border-blue-500 active:border-cyan-300 py-4 mb-6">
            <input 
              type="email"
              id="email"
              name="email"
              placeholder="E-Mail"
              value={formData.email}
              onChange={(e) => handleChangeInput(e)}
              className='appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none'
            />
          </div>

          <div className="flex items-center border-b border-blue-500 active:border-cyan-300 py-4 mb-6">
            <input 
              type="text"
              id="phone"
              name="phone"
              placeholder="Telefon"
              value={formData.phone}
              onChange={(e) => handleChangeInput(e)}
              className='appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none'
            />
          </div>
        </div>
        <div className='my-2 flex justify-around items-center'>
            <button className='bg-gradient-to-tr from-blue-800 to-blue-500 p-4 rounded-md' onClick={handlePrevStep}><FaLongArrowAltLeft size={30}/></button>
            <button className='bg-gradient-to-tr from-blue-500 to-blue-800 p-4 rounded-md' onClick={handleNextStep}><FaLongArrowAltRight size={30}/></button>
        </div>
    </div>
  )
}

export default StepB