import React from 'react'

import MultistepForm from '../components/Form/MultistepForm';
import privateLogo from '../assets/img/logo.png'

const Contact = () => {

  const Schleyer = {
    "id": "1",
    "title":"Web Developer",
    "mail":"lars.schleyer@gmx.de",
    "location":"Stockelsdorf / Lübeck",
    "experience":"3+ years",
    "languages":["HTML","CSS","JS","PHP"],
    "style":["Bootstrap", "Tailwind"],
    "inProgress":["React.js","Tailwind","MongoDB"],
    "CMS":["Craft","Typo3","Neos","Shopware"],
    "furtherAttributes":["Motivated","Creative","..."],
    "hireable": true,
  }

  const renderAttribute = (key, value) => {
    return (
        <span className="p-4">
            <span className="text-blue-500">{key}: </span>
            <span className="text-white">{JSON.stringify(value)}</span>
            <br/>
        </span>
    );
};

  return (
    <div name="kontakt" className='h-auto w-full bg-gradient-to-b from-black to-gray-500 p-4' id="kontakt">
      <div className='w-full lg:max-w-screen-lg mx-auto flex flex-col justify-center text-white pt-6'>
          <div className='mt-[40px]'>
              <p className='text-4xl font-bold border-b-4 border-blue-500 p-2 inline font-signature'>Kontakt</p>
              <p className='py-6 '></p>
          </div>
        
          <div className='grid grid-cols-1 md:grid-cols-2 md:gap-2'>
            
            <MultistepForm showStepNumber={true}/>

            <pre className="hidden sm:block text-md md:text-md mb-10 ml-6 max-w-full rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10 max-h-[330px]">
                LarsSchleyer: <br/>{Object.keys(Schleyer).map(key => renderAttribute(key, Schleyer[key]))}
            </pre>
          </div>
      </div>
      <div className='body'>
        <div className="slider-thumb"><p>owldndolan</p></div>
      </div>
    </div>
  )
}

export default Contact