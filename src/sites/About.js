import React from 'react'

//components
import Image from '../components/PersonalImage'

//Icons
import {FaRegFolderOpen ,FaAward  } from "react-icons/fa";
import { MdPeopleOutline } from "react-icons/md";

function About() {
  return (
    <div id="about" name="about" className='h-auto w-full bg-gradient-to-b from-black via-black to-gray-800 p-4 py-12 text-white'>
      <div className='h-full max-w-screen-lg mx-auto items-center justify-centerh-full px-4 md:flex-row text-white'>
        <div>  
          <p className='text-4xl font-bold group-hover:text-cyan-500 border-b-4 border-cyan-500 inline font-signature'>Über mich</p>
          <p className='py-6 '></p>
        </div>

        <div className='grid grid-cols-1' id="about_container">
          <div id="about_me" className='w-1/2 mb-8 lg:w-11/12 m-auto lg:m-0 grid items-center w-100 aspect-square rounded-3xl bg-gradient-to-tr from-blue-400 to-transparent'>
            <div id="about_me_image" className='rounded overflow-hidden rotate-10 hover:rotate-0 duration-200'>
              <Image className=""/>
            </div>
          </div>

          <div id="about_content" className='w-100'>
            <div id="about_cards" className='flex flex-col md:grid grid-cols-3'>
              <article className='group bg-cyan-500 hover:bg-transparent hover:border-cyan-500 border-solid border-2 border-transparent rounded-sm p-8 text-center duration-200 cursor-default'>
                <FaAward size={45} className='group-hover:text-cyan-500 text-center m-auto mb-4'/>
                <h5 className='text-xl font-bold group-hover:text-cyan-500'> Erfahrung</h5>
                <small className='group-hover:text-cyan-500'>3+ Jahre</small>
              </article>

              <article className='group bg-cyan-500 hover:bg-transparent hover:border-cyan-500 border-solid border-2 border-transparent rounded-sm p-8 text-center duration-200 cursor-default'>
                <FaRegFolderOpen  size={45} className='group-hover:text-cyan-500 text-center m-auto mb-4'/>
                <h5 className='text-xl font-bold group-hover:text-cyan-500'> Projekte</h5>
                <small className='group-hover:text-cyan-500'>30+ Website</small>
              </article>

              <article className='group bg-cyan-500 hover:bg-transparent hover:border-cyan-500 border-solid border-2 border-transparent rounded-sm p-8 text-center duration-200 cursor-default'>
                <MdPeopleOutline  size={45} className='group-hover:text-cyan-500 text-center m-auto mb-4'/>
                <h5 className='text-xl font-bold group-hover:text-cyan-500'> Erfahrung</h5>
                <small className='group-hover:text-cyan-500'>3+ Jahre</small>
              </article>
            </div>

            <p className='my-8'>
              Laboris mollit irure exercitation excepteur fugiat in reprehenderit irure ut consectetur. Consectetur occaecat velit aliquip duis cillum duis veniam nostrud dolor officia pariatur nostrud. Tempor occaecat exercitation nisi eiusmod sint ex duis. Reprehenderit cupidatat eu consectetur duis duis mollit ex commodo adipisicing amet minim ullamco laborum. Irure laboris minim tempor adipisicing non incididunt id consectetur anim aliquip non sunt officia. Consectetur duis eu est cillum magna occaecat incididunt excepteur commodo anim irure fugiat labore duis.

              Qui aute officia ad in qui nostrud excepteur fugiat cillum. Non ipsum consequat exercitation incididunt Lorem est. Aliqua cupidatat culpa nisi proident velit aliqua consequat esse ea nulla anim magna pariatur.
            </p>
            <a href='/#kontakt' className='text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>Kontakt</a>
          </div>



        </div>
      </div>
    </div>
  )
}

export default About