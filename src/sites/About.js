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
          <p className='text-4xl font-bold border-b-4 border-blue-800 inline font-signature'>Über mich</p>
          <p className='py-6 '></p>
        </div>

        <div className='flex flex-col md:grid md:grid-cols-2 ' id="about_container">
        <div className="container flex justify-center items-center">
          <div className="moving_shape">
            <Image />
          </div>
        </div>
          

          <div id="about_content" className='w-100'>
            <div id="about_cards" className='flex flex-col md:grid grid-cols-2 gap-10 justify-between'>
              <article className='group bg-blue-800 hover:bg-transparent hover:border-blue-800 border-solid border-2 border-transparent rounded-lg p-8 text-center duration-200 cursor-default min-w-[162px]'>
                <FaAward size={45} className='group-hover:text-blue-800 text-center m-auto mb-4'/>
                <h5 className='text-xl font-bold group-hover:text-blue-800'> Erfahrung</h5>
                <small className='group-hover:text-blue-800'>3+ Jahre im Job</small>
              </article>

              <article className='group bg-blue-800 hover:bg-transparent hover:border-blue-800 border-solid border-2 border-transparent rounded-lg p-8 text-center duration-200 cursor-default min-w-[162px]'>
                <FaRegFolderOpen  size={45} className='group-hover:text-blue-800 text-center m-auto mb-4'/>
                <h5 className='text-xl font-bold group-hover:text-blue-800'> Projekte</h5>
                <small className='group-hover:text-blue-800'>20+ Websites</small>
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
              <h2 className='text-3xl font-bold py-4'>Herzlich Willkommen</h2>
              <p>
              In meiner bisherigen beruflichen Laufbahn habe ich umfangreiche Erfahrungen in der Entwicklung von Webseiten gesammelt. Ich beherrsche die gängigen Programmiersprachen und Frameworks, darunter HTML, CSS, JavaScript. Darüber hinaus interessiere ich mich für bekannte Backend-Technologien wie Node.js und PHP. Zudem habe ich Erfahrung in der Arbeit mit Content-Management-Systemen wie WordPress, Typo3 und Craft gesammelt.<br/> <br/>
              Besonders wichtig ist mir, stets auf dem neuesten Stand der Technik zu bleiben und mich kontinuierlich weiterzubilden. Ich bin daher immer bestrebt, neue Technologien und Best Practices zu erlernen und in meine Arbeit zu integrieren.
              <br/><br/>
              Schauen Sie sich gern um<br/>
              <span className='font-signature text-3xl'>Lars Schleyer</span>
              </p>
            </div>

            <a href='/#kontakt' className='text-white w-fit px-6 py-3 flex items-center rounded-lg bg-gradient-to-r from-blue-500 to-blue-800 cursor-pointer mb-[40px]'>Kontakt</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About