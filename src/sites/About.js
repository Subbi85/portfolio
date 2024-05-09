import React from 'react'

//components
import Image from '../components/PersonalImage'

//Icons
import {FaRegFolderOpen ,FaAward  } from "react-icons/fa";

function About() {
  return (
    <div id="about" name="about" className='h-auto md:h-auto w-full bg-gradient-to-b from-black via-black to-gray-800 p-4 py-12 text-white'>
      <div className='h-full max-w-screen-lg mx-auto items-center justify-centerh-full px-4 md:flex-row text-white mt-[40px]'>
        <div>  
          <p className='text-4xl font-bold group-hover:text-blue-500 border-b-4 border-blue-500 inline font-signature'>Über mich</p>
          <p className='py-6 '></p>
        </div>

        <div className='flex flex-col md:grid md:grid-cols-2' id="about_container">
          <div id="about_me" className='w-1/2 mb-8 lg:w-11/12 m-auto lg:m-0 grid items-center w-50 aspect-square rounded-3xl bg-gradient-to-tr from-blue-500 via-blue-00 to-transparent'>
            <div id="about_me_image" className='rounded overflow-hidden hover:rotate-0 duration-200'>
              <Image className=""/>
            </div>
          </div>
          
          <div id="about_content" className='w-100'>
            <div id="about_cards" className='flex flex-col md:grid grid-cols-3 gap-10 justify-between'>
              <article className='group bg-blue-500 hover:bg-transparent hover:border-blue-500 border-solid border-2 border-transparent rounded-lg p-8 text-center duration-200 cursor-default min-w-[162px]'>
                <FaAward size={45} className='group-hover:text-blue-500 text-center m-auto mb-4'/>
                <h5 className='text-xl font-bold group-hover:text-blue-500'> Erfahrung</h5>
                <small className='group-hover:text-blue-500'>3+ Jahre</small>
              </article>

              <article className='group bg-blue-500 hover:bg-transparent hover:border-blue-500 border-solid border-2 border-transparent rounded-lg p-8 text-center duration-200 cursor-default min-w-[162px]'>
                <FaRegFolderOpen  size={45} className='group-hover:text-blue-500 text-center m-auto mb-4'/>
                <h5 className='text-xl font-bold group-hover:text-blue-500'> Projekte</h5>
                <small className='group-hover:text-blue-500'>20+ Websites</small>
              </article>
              {/*}
              <article className='group bg-blue-500 hover:bg-transparent hover:border-blue-500 border-solid border-2 border-transparent rounded-lg p-8 text-center duration-200 cursor-default min-w-[162px]'>
                <MdPeopleOutline  size={45} className='group-hover:text-blue-500 text-center m-auto mb-4'/>
                <h5 className='text-xl font-bold group-hover:text-blue-500'> Erfahrung</h5>
                <small className='group-hover:text-blue-500'>3+ Jahre</small>
              </article>
              {*/}
            </div>

            <div className='my-8'>
              <h2 className='text-3xl font-signature py-4'>Herzlich Willkommen</h2>
              <p>
              Ich heiße <span className='text-blue-500'>Lars Schleyer</span> und bin Webentwickler auf der Suche nach neuen Herausforderungen. <br />
              Während meiner Ausbildung zum Fachinformatiker und Webentickler mit mehereren Jahren Berufserfahrung. habe ich mein Interesse für die Webentwicklung gefunden. Ich fühle mich im Agenturalltag sehr wohl. Im Laufe der Jahre habe ich mit mehreren CMS gearbeitet und bin aktuell auf der Suche nach neuen Herausforderungen in der Webentwicklung.
              Derzeit interessiere ich sehr für React.Js - mit Tailwind - und WordPress.
              <br/><br/>
              Schauen Sie sich gern um<br/>
              <span className='font-signature text-3xl'>Lars Schleyer</span>
              </p>
            </div>

            <a href='/#kontakt' className='text-white w-fit px-6 py-3 flex items-center rounded-lg bg-gradient-to-r from-blue-500 to-blue-500 cursor-pointer  mb-[40px]'>Kontakt</a>
          </div>



        </div>
      </div>
    </div>
  )
}

export default About