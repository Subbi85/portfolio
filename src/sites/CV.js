import React from 'react';

import { SiTailwindcss, SiCraftcms } from "react-icons/si";
import { FaHtml5, FaReact,FaNeos, FaBootstrap, FaTypo3, FaPhp, FaCss3Alt  } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

export default function App() {

  return (
    <div name="lebenslauf" id="lebenslauf" className='bg-gradient-to-b from-gray-500 to-black w-full p-4 h-auto'>
      <div className='w-12/12 md:w-full lg:max-w-screen-lg mx-auto flex flex-col justify-center text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-cyan-500 inline font-signature'>Meine Stationen</p>
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
                  <div className="mb-10 ml-6 block max-w-full rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10 relative">
                    <div className="mb-4 flex justify-between">
                      <p
                        className="text-xl text-info transition duration-150 ease-in-out"
                      >
                        Arbeitsuchend
                      </p>
                      <p className="text-xl text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                      >
                        seit April 2024
                      </p>
                    </div>
                    <p className="mb-6 text-neutral-700 dark:text-neutral-200">
                      Libero expedita explicabo eius fugiat quia aspernatur autem
                      laudantium error architecto recusandae natus sapiente sit nam
                      eaque, consectetur porro molestiae ipsam an deleniti.
                    </p>

                    <div className='flex flex-row justify-start'>
                      <FaReact size={40} /> <SiTailwindcss size={60} />
                    </div>
                  </div>
                </div>
              </li>

              {/* <!--Second item--> */}
              <li>
                <div className="flex-start md:flex">
                  <div className="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-info-100 bg-gray-500 text-info-700">
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
                    <div className="mb-4 flex justify-between ">
                      <a
                        href="https://www.globit.com/" target="_blank" rel="noreferrer"
                        className="text-xl text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                      >
                        <span className='font-bold'>Webentwickler NEOS</span>
                        <p>Globit GmbH - Globit Internet Servixe Provider</p>
                      </a>
                      <p className="text-xl text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                      >
                        März 2023 - April 2024
                      </p>
                    </div>
                    <p className="mb-6 text-neutral-700 dark:text-neutral-200">
                      Die Globit GmbH ist ein IT Dienstleister, der sich auf Kongresswebsites - in Zusammenarbeit mit der CPO Hanser - für medizinische Kongresse 
                      spezialisiert hat.
                    </p>
                    <ol className='m-4 list-disc'>
                        <li>Pflege der einzelnen Kongresswebsites in NEOS CMS</li>
                        <li>Umsetzung neuer grafischer Konzepte</li>
                        <li>Erstellen und Bearbeiten von Newsletter Templates</li>
                        <li>Erstellen von Online Programmen und weiterer kongressrelevanter Inhalte</li>
                        <li></li>
                      </ol>
                    <div className='flex flex-row justify-start'>
                      < FaHtml5 size={40} /> <FaCss3Alt size={40} /> <FaPhp size={40} /> <IoLogoJavascript size={40} /> <FaBootstrap size={40} /> <FaNeos  size={40} />
                    </div>
                  </div>
                </div>
              </li>

              {/* <!--Third item--> */}
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
                        href="https://www.netzhaut.de/" target="_blank" rel="noreferrer"
                        className="text-xl text-info transition duration-150 ease-in-out"
                      >
                        <span className='font-bold'>Webentwickler Craft CMS</span>
                        <p>Netzhaut GmbH, Würzburg</p>
                      </a>
                      
                      <p className="text-xl text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                      >
                        Dezember 2019 - Juni 2022
                      </p>
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
                        21 / 12 / 2021
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
            </ol>
      </div>
    </div>
  );
}