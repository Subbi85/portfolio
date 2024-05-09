import React from 'react'

const NewCvComp = () => {

    const works=[
        {
          id:1,
          title: "Neue Herausforderung gesucht",
          company:"",
          link:"",
          dates: ["04/2024"],
          tasks: [],
          text: "Aktuell auf der Suche nach neuen Herausforderungen. Sehr gern im Bereich JavaScript-Frameworks (React), CMS (am liebsten WordPress)",
          techs:["FaHtml5"]
        },
        {
          id:2,
          title: "Webentwickler Neos",
          company:"Globit GmbH",
          link:"",
          dates: ["12/2019", "07/2022"],
          tasks: [{id:1, title:"Pflege der einzelnen Kongresswebsites in NEOS CMS"},{id:2, title:"Umsetzung neuer grafischer Konzepte"},{id:3, title:"Erstellen und Bearbeiten von Newsletter Templates"},{id:4, title:"Erstellen von Online Programmen und weiterer kongressrelevanter Inhalte"}],
          text:"Die Globit GmbH ist ein IT Dienstleister, der sich auf Kongresswebsites - in Zusammenarbeit mit der CPO Hanser - für medizinische Kongresse spezialisiert hat.",
          techs:[]
        },
        {
          id:3,
          title: "Webentwickler Craft CMS",
          company:"Netzhaut GmbH",
          link:"",
          dates: ["12/2019", "07/2022"],
          tasks: [{id:1, title:"Umsetzung grafischer Entwürfe"},{id:2, title:"Erstellen von Webpräsenzen auf Basis von Typo3 und Craft CMS"},{id:3, title:"Erstellen von Online Shops mit Shopware"},{id:4, title:"Erweiterung und Support von bestehenden Webpräsenzen"},{id:5, title:"Kundenschulungen"},{id:6, title:"Projektbetreuung"}],
          text:"Im Rahmen meines ersten Jobs in der Webentwicklung, arbeitete ich bei der Webagentur Netzhaut GmbH in Würzburg. Meine Aufgaben im Arbeitsalltag umfassten:"
        }
      ]


  return (
    <div>

{works.map((work)=>{
              return(
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
                        href={work.link} target="_blank" rel="noreferrer"
                        className="text-xl text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                      >
                        <span className='font-bold'>{work.title}</span>
                        <p>{work.company}</p>
                      </a>
                      <p className="text-xl text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                      >
                        {work.dates.length > 1 ? work.dates[0]+" - "+ work.dates[1] : "Seit "+work.dates[0]}
                      </p>
                    </div>
                    <p className="mb-6 text-neutral-700 dark:text-neutral-200">
                      {work.text}

                      <ol className='m-4 list-disc'>
                      {work.tasks.map((task)=>{
                        return(
                          <li>{task.title}</li>
                        )
                      })}
                      </ol>
                    </p>

                    <div className='flex flex-row justify-start'>
                      <FaReact size={40} /> <SiTailwindcss size={60} />
                    </div>
                    
                    <div className='absolute right-5 bottom-5' onClick={hideTasks}>
                      <FaArrowAltCircleDown size={20}/>
                    </div>
                  </div>
                </div>
              </li>
              )
            })}




<div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <div
                class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                <div class="relative z-10 mx-auto max-w-md">
                    <span class="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10 text-white transition-all">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>
                    </span>
                    <div
                        class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                        <p>Das DB Museum mit den Standorten Nürnberg, Koblenz und Halle ist das größte Projekt, das ich im Rahmen meiner Tätigkeit bei Netzhaut umsetzen durfte.</p>
                    </div>
                    <div class="pt-5 text-base font-semibold leading-7">
                        <p>
                            <a href="#" class="text-sky-500 transition-all duration-300 group-hover:text-white">Read the docs
                                &rarr;
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>



    </div>
  )
}

export default NewCvComp


