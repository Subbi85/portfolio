import React from 'react'
import { FaLongArrowAltRight, FaLongArrowAltLeft  } from "react-icons/fa";

const StepC = ({formData,handleChangeInput,handleNextStep,handlePrevStep}) => {
  return (
    <div>
        <h1 className='mt-2 text-xl font-bold text-blue-500'>Ihre Nachricht</h1>
        <div className="flex items-center border-b border-blue-500 active:border-cyan-300 py-4 mb-6">
            <textarea 
              id="message"
              name="message"
              placeholder="Nachricht"
              value={formData.message}
              onChange={(e) => handleChangeInput(e)}
              className='appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none'
              rows="10"
            />
          </div>

        <div className='my-2 flex justify-around items-center'>
            <button className='bg-gradient-to-tr from-blue-800 to-blue-500 p-4 rounded-md' onClick={handlePrevStep}><FaLongArrowAltLeft size={30}/></button>
            <button className='bg-gradient-to-tr from-blue-500 to-blue-800 p-4 rounded-md' onClick={handleNextStep}><FaLongArrowAltRight size={30}/></button>
        </div>
    </div>
  )
}

export default StepC