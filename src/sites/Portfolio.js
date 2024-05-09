import React from 'react'

//Images
import DBMuseum from '../assets/img/projects/dbm.png'
import Baugrund from '../assets/img/projects/baugrund.png'
import Pfister from '../assets/img/projects/pfister.png'
import SWAalen from '../assets/img/projects/SWAalen.png'
import ECPOP from '../assets/img/projects/ECPOP.png'
import iatul from '../assets/img/projects/IATUL.png'
import Netzhaut from '../assets/img/netzhaut.jpg'
import Globit from '../assets/img/globit.png'

const Projects = () => {

  const projects = [
    { id:1,
      title:'DB Musem',
      img_path:DBMuseum ,
      link:"https://www.dbmuseum.de/",
      company: Netzhaut
    },
    { id:2,
      title:'Baugrund',
      img_path:Baugrund,
      link:"",
      company: Netzhaut
    },
    { id:3,
      title:'Autohaus Pfister',
      img_path:Pfister,
      link:"",
      company: Netzhaut
    },
    { id:4,
      img_path:SWAalen,
      link:"",
      company: Netzhaut
    },
    { id:5,
      title:'IATUL',
      img_path:ECPOP,
      link:"https://www.esp-congress.org/scientific-programme/online-programme.html",
      company: Globit
    },
    { id:6,
      title:'ECP Kongress',
      img_path:iatul,
      link:"https://iatul.org/",
      company: Globit
    },
    { id:4,
      img_path:SWAalen,
      link:"",
      company: Netzhaut
    },
    { id:5,
      title:'IATUL',
      img_path:ECPOP,
      link:"https://www.esp-congress.org/scientific-programme/online-programme.html",
      company: Globit
    },
    { id:6,
      title:'ECP Kongress',
      img_path:iatul,
      link:"https://iatul.org/",
      company: Globit
    }
]

  return (
    <div name="portfolio" id="portfolio" className='w-full md:h-auto bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto'>
        <div className='pb-8 mt-[80px]'>
          <p className='text-4xl font-bold inline border-b-4 border-blue-500 font-signature '>Portfolio</p>
          <p className='py-6'>Eine Auswahl der Webprojekte an denen ich mitgearbeitet habe:</p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-12 sm:px-0 mb-[40px]'>
          { projects.map((project)=>{
            return (
              <div key={project.id} className="group relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-md">
                <img
                  src={project.img_path}
                  className="max-w-xs transition duration-300 ease-in-out group-hover:scale-110"
                  alt="" />
                <div className="absolute flex flex-col justify-center items-center bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-blue-500 to-blue-800 opacity-0 transition duration-300 ease-in-out hover:opacity-90">
                    <h3 className='text-2xl font-bold'>{project.title}</h3>
                    <p><a href="/#kontakt" target='_blank' >Zur Seite</a></p>
                    <div className='absolute top-0 left-0 p-2 '>
                      <img className='w-12 rounded-lg' src={project.company} alt=""/>
                    </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects