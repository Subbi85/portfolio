import React from 'react'

//Companies
import Netzhaut from '../assets/img/netzhaut.jpg'
import Globit from '../assets/img/globit.png'
import privateLogo from '../assets/img/logo.png'

//Images
import DBMuseum from '../assets/img/projects/dbm.png'
import Baugrund from '../assets/img/projects/baugrund.png'
import Pfister from '../assets/img/projects/pfister.png'
import SWAalen from '../assets/img/projects/SWAalen.png'
import ECPOP from '../assets/img/projects/ECPOP.png'
import iatul from '../assets/img/projects/IATUL.png'
import IACAPAP from '../assets/img/projects/IACAPAP.png'
import SMHS from '../assets/img/projects/SMHS.png'
import Klempau from '../assets/img/projects/klempau.png'

const Projects = () => {

  const projects = [
    { id:1,
      title:'ECP Kongress',
      img_path:ECPOP,
      link:"https://www.esp-congress.org/scientific-programme/online-programme.html",
      company: Globit
    },
    { id:2,
      title:'IATUL',
      img_path:iatul,
      link:"https://iatul.org/",
      company: Globit
    },
    { id:3,
      title:'Sports Summit',
      img_path:SMHS,
      link:"https://www.sports-medicine-health-summit.de/",
      company: Globit
    },
    { id:4,
      title:'IACAPAP',
      img_path:IACAPAP,
      link:"https://iacapap.org/",
      company: Globit
    },
    { id:5,
      title:'DB Musem',
      img_path:DBMuseum ,
      link:"https://www.dbmuseum.de/",
      company: Netzhaut
    },
    { id:6,
      title:'Baugrund',
      img_path:Baugrund,
      link:"",
      company: Netzhaut
    },
    { id:7,
      title:'Autohaus Pfister',
      img_path:Pfister,
      link:"",
      company: Netzhaut
    },
    { id:8,
      title: 'SW Aalen',
      img_path:SWAalen,
      link:"",
      company: Netzhaut
    },
    { id:9,
      title:'Klempauer Hofsee',
      img_path:Klempau,
      link:"https://vom-klempauer-hofsee.de/",
      company: privateLogo
    }
]

  return (
    <div name="portfolio" id="portfolio" className='w-full md:h-auto bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto'>
        <div className='pb-8 mt-[80px]'>
          <p className='text-4xl font-bold inline border-b-4 border-blue-800 font-signature '>Portfolio</p>
          <p className='py-6'>Eine kleine Auswahl der Webprojekte an denen ich mitgearbeitet habe:</p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-4 md:px-12 sm:px-0 mb-[40px]'>
          { projects.map((project)=>{
            return (
              <div key={project.id} className="group relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-md">
                <img
                  src={project.img_path}
                  className="max-w-xs transition duration-300 ease-in-out group-hover:scale-110"
                  alt="" />
                <div className="absolute flex flex-col justify-center items-center bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-blue-500 to-blue-800 opacity-0 transition duration-300 ease-in-out hover:opacity-90">
                    <h3 className='text-lg md:text-2xl font-bold'>{project.title}</h3>
                    <p><a href={project.link} target='_blank' rel="noreferrer">Link</a></p>
                    <div className='absolute top-0 left-0 p-2 '>
                      <img className='w-12 rounded-lg object-contain md:object-scale-down' src={project.company} alt=""/>
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