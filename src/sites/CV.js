import React from 'react';

//Icons
import { SiTailwindcss, SiCraftcms } from "react-icons/si";
import { FaHtml5, FaReact,FaNeos, FaBootstrap, FaTypo3, FaPhp, FaCss3Alt, FaArrowAltCircleDown } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

export default function App() {

  const hideTasks=(event)=>{
    console.log("Klicked!")
    console.log(event.target.parentElement.childNodes)
    
  }

  return (
    <div name="lebenslauf" id="lebenslauf" className='bg-gradient-to-b from-gray-500 to-black w-full p-4 h-auto scroll-mt-5'>
      <div className='w-12/12 md:w-full lg:max-w-screen-lg mx-auto flex flex-col justify-center text-white h-auto mt-[60px]'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-blue-500 inline font-signature'>Meine Stationen</p>
                <p className='py-6 '></p>
            </div>

            <ol className="border-l-2 border-info-100 w-11/12 flex flex-col justify-center items-center">

              {/* <!--First item--> */}
              <li>
                <div id="first-item" className="flex-start md:flex">
                  <div className="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-gray-500 text-info-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div id="content" className="mb-10 ml-6 block max-w-full rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10 relative">
                  <span class="absolute flex h-4 w-4 right-0 -top-2">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-4 w-4 bg-blue-500"></span>
                  </span>
                    <div className="mb-4 flex justify-between">
                      <p
                        className="text-xl text-info transition duration-150 ease-in-out"
                      >
                        Neue Herausforderung gesucht!
                      </p>
                      <p className="text-xl text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                      >
                      </p>
                    </div>
                    <p className="mb-6 text-neutral-700 dark:text-neutral-200">
                      Aktuell befinde ich mich auf der Suche nach neuen beruflichen Herausforderungen. Meine berfuliche Zukunft - wie es immer so schön heißt - sehe ich entweder im <br/>
                      der CMS - am liebsten WordPress - oder in Richtung React.js. Sehr gern mit einem Fokus auf die Frontend-Entwicklung.
                    </p>

                    <div className='flex flex-row justify-start'>
                      <FaReact size={40} /> <SiTailwindcss size={60} />
                    </div>
                  </div>
                </div>
              </li>

              {/* <!--First item--> */}
              <li>
                <div id="first-item" className="flex-start md:flex">
                  <div className="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-gray-500 text-info-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div id="content" className="mb-10 ml-6 block max-w-full rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10 relative">
                    <div className="mb-4 flex justify-between">
                      <a
                        href="https://www.globit.com/" target="_blank" rel="noreferrer"
                        className="text-xl text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                      >
                        <span className='font-bold'>Webentwickler NEOS</span>
                        <p>Globit GmbH - Globit Internet Servixe Provider</p>
                      </a>
                    </div>
                    <p className="mb-6 text-neutral-700 dark:text-neutral-200">
                    Die Globit GmbH ist ein IT Dienstleister, der sich auf Kongresswebsites - in Zusammenarbeit mit der CPO Hanser - für medizinische Kongresse 
                      spezialisiert hat.
                    </p>
                    <ol className='m-4 list-disc hidden'>
                      <li>Wartung und Pflege von Websites</li>
                      <li>Aufbau und Konfiguration von Websites mit Neos CMS und relevanten Plugins</li>
                      <li>Zusammenarbeit mit dem Web-Hoster zur Verknüpfung von Domains</li>
                      <li>Entwicklung und Wartung von Neos-Elementen und Plugis</li>
                      <li>Zusammenarbeit mit dem UI/UX-Design Team zur Ausarbeitung und Umsetzung von Design-Anforderungen </li>
                      <li>CSS-basierte Anspassungen von Design-Elementen</li>
                    </ol>
                    <div className='flex flex-row justify-start'>
                      < FaHtml5 size={40} /> <FaCss3Alt size={40} /> <FaPhp size={40} /> <IoLogoJavascript size={40} /> <FaBootstrap size={40} /> <FaNeos  size={40} />
                    </div>
                    <div className='absolute right-5 bottom-5' onClick={hideTasks}>
                      <FaArrowAltCircleDown size={20}/>
                    </div>
                  </div>
                </div>
              </li>

              {/* <!--First item--> */}
              <li>
                <div id="first-item" className="flex-start md:flex">
                  <div className="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-gray-500 text-info-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div id="content" className="mb-10 ml-6 block max-w-full rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10 relative">
                    <div className="mb-4 flex justify-between">
                    <a
                        href="https://www.netzhaut.de/" target="_blank" rel="noreferrer"
                        className="text-xl text-info transition duration-150 ease-in-out"
                      >
                        <span className='font-bold'>Webentwickler Craft CMS</span>
                        <p>Netz-haut GmbH, Würzburg</p>
                      </a>
                    </div>
                    <p className="mb-6 text-neutral-700 dark:text-neutral-200">
                    Im Rahmen meines ersten Jobs in der Webentwicklung, arbeitete ich bei der Webagentur Netzhaut GmbH in Würzburg. Meine Aufgaben im
                      Arbeitsalltag umfassten:
                    </p>
                    <ol className='m-4 list-disc'>
                        <li>Umsetzung grafischer Entwürfe</li>
                        <li>Erstellen von Webpräsenzen auf Basis von Typo3 und Craft CMS</li>
                        <li>Erstellen von Online Shops mit Shopware </li>
                        <li>Erweiterung und Support von bestehenden Webpräsenzen</li>
                        <li>Kundenschulungen</li>
                        <li>Projektbetreuung</li>

                        <div className='absolute right-5 bottom-5' onClick={hideTasks}>fes</div>
                      </ol>

                    <div className='flex flex-row justify-start'>
                      < FaHtml5 size={40} /> <FaCss3Alt size={40} /> <FaPhp size={40} /> <IoLogoJavascript size={40} /> <FaBootstrap size={40} /> <SiCraftcms  size={40} /> <FaTypo3 size={40} />
                    </div>

                  </div>
                </div>
              </li>

              {/* <!--Last item--> */}
              <li>
                <div className="flex-start md:flex">
                  <div className="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-info-100 text-info-700 bg-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="mb-10 ml-6 block max-w-full rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
                    <div className="mb-4 flex justify-between">
                      <a
                        href="#!"
                        className="text-xl text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                      >
                        JavaScript Bootcamp
                      </a>
                      <p className="text-xl text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                      >
                      </p>
                    </div>
                    <p className="mb-6 text-neutral-700 dark:text-neutral-200">
                      Voluptatibus temporibus esse illum eum aspernatur, fugiat
                      suscipit natus! Eum corporis illum nihil officiis tempore.
                      Excepturi illo natus libero sit doloremque, laborum molestias
                      rerum pariatur quam ipsam necessitatibus incidunt, explicabo.
                    </p>
                  </div>
                </div>
              </li>

                {/* <!--Last item--> */}
                <li>
                <div className="flex-start md:flex">
                  <div className="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-info-100 text-info-700 bg-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="mb-10 ml-6 block max-w-full rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
                    <div className="mb-4 flex justify-between">
                      <a
                        href="https://www.apicon.de/"
                        className="text-xl text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                        target="_blank" rel="noreferrer"
                      >
                        
                        <span className='font-bold'>Ausbildung "Fachinformatiker für Anwendungsentwicklung"</span>
                        <p>APICON GmbH, Schweinfurt</p>
                      </a>
                      <p className="text-xl text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                      >
                      </p>
                    </div>
                    <p className="mb-6 text-neutral-700 dark:text-neutral-200">
                      Meine zweite Berufsausbildung absolvierte ich bei der Apicon, einem SAP-Systemhaus in Schweinfurt. Der Fokus lag damals auf der Programmiersprache ABAP. Im Rahmen einer Projektarbeit <br />
                      in der Berufsschule gab es erste Berührungspunkte zur Webentwicklung und ich war schnell Feuer und Flamme.
                    </p>
                  </div>
                </div>
              </li>
            </ol>
      </div>
    </div>
  );
}