import React from 'react'

//Icons
import { FaWhatsapp   } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";

const Contact = () => {

  const clearForm =()=>{
    console.log("Form gecleart")
  }

  return (
    <div name="kontakt" className='h-auto w-full bg-gradient-to-b from-black via-black to-gray-800 p-4' id="kontakt">
      <div className='w-full lg:max-w-screen-lg mx-auto flex flex-col justify-center text-white pt-6'>
          <div>
              <p className='text-4xl font-bold border-b-4 border-cyan-500 p-2 inline font-signature mt-8'>Kontakt</p>
              <p className='py-6 '></p>
          </div>
        
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <form className="w-full" action="https://getform.io/f/navvjwka" method='POST'>
              <div className="flex items-center border-b border-cyan-500 active:border-cyan-300 py-2 mb-6">
                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" name="firstname" type="text" placeholder="Name" aria-label="Vorname" />
              </div>
              <div className="flex items-center border-b border-cyan-500 active:border-cyan-300 py-2 mb-6">
                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" name="lastname" type="text" placeholder="Vorname" aria-label="Nachname" />
              </div>
              <div className="flex items-center border-b border-cyan-500 active:border-cyan-300 py-2 mb-6">
                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" name="company" type="text" placeholder="Firma" aria-label="Firma" />
              </div>
              <div className="flex items-center border-b border-cyan-500 active:border-cyan-300 py-2 mb-6">
                <textarea className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" name="message" type="textarea" placeholder="Nachricht" aria-label="Nachricht" />
              </div>
              <div className='py-4'>
                <button className="flex-shrink-0 text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                  Abschicken
                </button>
                <button onClick={clearForm} className="flex-shrink-0 border-transparent border-4 text-cyan-500 hover:text-cyan-400 text-sm py-1 px-2 rounded" name="" type="button">
                  Abbrechen
                </button>
              </div>
            </form>

            <div className='p-8'>
              <div id="about_cards" className='flex flex-row md:flex-col justify-between'>
                <article className='group bg-cyan-500 hover:bg-transparent hover:border-cyan-500 border-solid border-2 border-transparent rounded-sm p-8 text-center duration-200 cursor-default w-40'>
                  <FaWhatsapp size={45} className='group-hover:text-cyan-500 text-center m-auto mb-4'/>
                  <h5 className='ext-xl font-bold group-hover:text-cyan-500 '> Mail</h5>
                </article>

                <article className='group bg-cyan-500 hover:bg-transparent hover:border-cyan-500 border-solid border-2 border-transparent rounded-sm p-8 text-center duration-200 cursor-default w-40'>
                  <FiMessageSquare size={45} className='group-hover:text-cyan-500 text-center m-auto mb-4'/>
                  <h5 className='ext-xl font-bold group-hover:text-cyan-500 '> Mail</h5>
                </article>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Contact