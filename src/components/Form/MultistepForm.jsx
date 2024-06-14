"use client"
//Parent Control

import React, { useEffect } from 'react'
import { useState } from 'react'

//Schritte
import StepA from "./StepA"
import StepB from "./StepB"
import StepC from "./StepC"
import StepD from "./StepD"
import StepFinal from "./StepFinal"

//Icons
import { GiFinishLine } from "react-icons/gi";

const MultistepForm = ({showStepNumber}) => {

  const initialFormData = {
    firstName :'',
    lastName:'',
    company:'',
    email:'',
    message:'',
    phone:'',
    agreeToTerms:false
  }

  const stepsArray= ["A", "B", "C", "D"]

  const [step, setStep] = useState("A")
  const [lastStep, setLastStep] = useState(false)
  const [formData, setFormData] = useState(initialFormData)

    const handleNextStep=()=>{
        if( step === "A") setStep("B")
        else if( step === "B") setStep("C")
        else if( step === "C") setStep("D")
    }

    const handlePrevStep=()=>{
        if( step === "D") setStep("C")
        else if( step === "C") setStep("B")
        else if( step === "B") setStep("A")
    }

    //Update Formdata
    const handleChangeInput = (event) =>{
        const fieldName = event.target.name;
        console.log(formData)
        setFormData({
            ...formData,
            [fieldName]:event.target.value,
        })
    }

    //Final Operation
    const handleSubmitFormData=()=>{
        console.log("Senden")
    }

    const renderFormMenu=()=>{
        if (!showStepNumber || step === 'Final') {
            return null;
        }
    
        // Check if the current step is the last step
        const isLastStep = step === stepsArray[stepsArray.length - 1];
    
        return (
            <section className='mt-2 mb-4 flex justify-between'>
                <ol className="flex items-center w-full">
                    {stepsArray.map((item, index) => (

                        <li key={index} className={`flex w-full items-center text-blue-600 dark:text-blue-500 ${item === step ? 'text-white after:border-blue-800' : ''}`} onClick={() => setStep(item)}>
                            <span className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 ${item === step ? 'bg-gradient-to-tr from-blue-500 to-blue-800 text-white' : 'bg-neutral-700'}`}>
                                <GiFinishLine size={25} className={`text-white ${isLastStep ? 'text-blue-500' : ''}`} />
                            </span>
                        </li>
                    ))}
                </ol>
            </section>
        );
    }

  return (
    <div className='w-full max-w-full px-6 mx-auto rounded-lg cursor-pointer pb-8'>

        {/* //Render the Steps */}
        {step ==='A' ? <StepA formData={formData}
                              handleChangeInput={handleChangeInput}
                              handleNextStep={handleNextStep}
                             /> : null}
        {step ==='B' ? <StepB formData={formData}
                              handleChangeInput={handleChangeInput}
                              handleNextStep={handleNextStep}
                              handlePrevStep={handlePrevStep}
                              /> : null}
        {step ==='C' ? <StepC formData={formData}
                              handleChangeInput={handleChangeInput}
                              handleNextStep={handleNextStep}
                              handlePrevStep={handlePrevStep}
                              /> : null}
        {step ==='D' ? <StepD formData={formData}
                              handleChangeInput={handleChangeInput}
                              handleNextStep={handleNextStep}
                              handlePrevStep={handlePrevStep}
                              handleSubmitFormData={handleSubmitFormData}
                              /> : null}                              
        {step ==='Final' ? <StepFinal /> : null}

    </div>
  )
}

export default MultistepForm
