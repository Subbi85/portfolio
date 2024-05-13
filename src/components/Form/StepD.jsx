import React from 'react'
import { FaLongArrowAltLeft  } from "react-icons/fa";
import { CiMail } from "react-icons/ci";


const StepD = ({formData,handleSubmitFormData,handlePrevStep}) => {
  return (
    <div>
        <h1 className='mt-2 text-xl font-bold text-blue-500'>Zusammenfassung</h1>

        <form className="w-full" action="https://getform.io/f/navvjwka" method='POST'>

          <DataConfirmRow label={'Vorname'} value={formData.firstName} name={"firstname"} />
          <DataConfirmRow label={'Nachname'} value={formData.lastName} name={"lastname"}/>
          <DataConfirmRow label={'Firma'} value={formData.company} name={"company"} />
          <DataConfirmRow label={'E-Mail'} value={formData.email} name={"email"}/>
          <DataConfirmRow label={'Telefon'} value={formData.phone} name={"phone"}/>
          <DataConfirmRow label={'Nachricht'} value={formData.message} name={"message"}/>
                
          <div className='my-2 flex justify-around items-center'>
              <button className='bg-gradient-to-tr from-blue-800 to-blue-500 p-4 rounded-md' onClick={handlePrevStep}><FaLongArrowAltLeft size={30}/></button>
              <button className='bg-gradient-to-tr from-blue-500 to-blue-800 p-4 rounded-md' onClick={handleSubmitFormData}><CiMail size={30}/></button>
          </div>        
          <input type="hidden" name="_gotcha" className="hidden !important"></input>
        </form>

    </div>
  )
}

export default StepD


const DataConfirmRow=({label, value, name})=>{
    if (label === "Nachricht") {
        return(
            <div>
                  <div className="flex items-center border-b border-blue-500 active:border-cyan-300 py-4 mb-6">
                    <textarea key={label} className="text-white appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none" name={name} type="text" value={value} disabled/>
                  </div>
            </div>
        )
    }else{
        return(

            <div>
                  <div className="flex items-center border-b border-blue-500 active:border-cyan-300 py-4 mb-6">
                    <input key={label} className="text-white appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none" name={name} type="text" value={value} disabled/>
                  </div>
            </div>
        )
    } 
}
