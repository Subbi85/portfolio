import React, { useState , useEffect } from 'react'

//Components
import Project from '../components/Project'

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

//Icons 
import { SiCraftcms } from "react-icons/si";
import { FaNeos, FaTypo3,FaWordpressSimple  } from "react-icons/fa";


const Projects = () => {
  const projects = [
    { id:1,
      title:'ECP Kongress',
      img_path:ECPOP,
      link:"https://www.esp-congress.org/scientific-programme/online-programme.html",
      company: Globit,
      tech: "Neos"
    },
    { id:2,
      title:'IATUL',
      img_path:iatul,
      link:"https://iatul.org/",
      company: Globit,
      tech: "Neos"
    },
    { id:3,
      title:'Sports Summit',
      img_path:SMHS,
      link:"https://www.sports-medicine-health-summit.de/",
      company: Globit,
      tech: "Neos"
    },
    { id:4,
      title:'IACAPAP',
      img_path:IACAPAP,
      link:"https://iacapap.org/",
      company: Globit,
      tech: "Neos"
    },
    { id:5,
      title:'DB Musem',
      img_path:DBMuseum ,
      link:"https://www.dbmuseum.de/",
      company: Netzhaut,
      tech: "Craft"
    },
    { id:6,
      title:'Baugrund',
      img_path:Baugrund,
      link:"",
      company: Netzhaut,
      tech: "Typo3"
    },
    { id:7,
      title:'Autohaus Pfister',
      img_path:Pfister,
      link:"",
      company: Netzhaut,
      tech: "Craft"
    },
    { id:8,
      title: 'SW Aalen',
      img_path:SWAalen,
      link:"",
      company: Netzhaut,
      tech: "Typo3"
    },
    { id:9,
      title:'Klempauer Hofsee',
      img_path:Klempau,
      link:"https://vom-klempauer-hofsee.de/",
      company: privateLogo,
      tech: "Wordpress"
    }
]

  //String Logik
  const [searchResults, setSearchResults] = useState([])
  const [searchString, setSearchString] = useState("");
  const [selectedCms, setSelectedCms] = useState({
    typo3: false,
    wordpress: false,
    craftcms: false,
  });

  const handleChangeInput=(event)=>{
    setSearchString(event.target.value);
  }

  useEffect(() => {
    const results = projects.filter(project =>
      project.title.toLowerCase().includes(searchString.toLowerCase())
    );
    setSearchResults(results);
  }, [searchString]);

  //Checkbox
  const [selectedTech, setSelectedTech] = useState({
    Neos: false,
    Typo3: false,
    Craft: false,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setSelectedTech((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const filteredProjects = projects.filter((project) => {
    const matchesTech = !selectedTech.Neos && !selectedTech.Typo3 && !selectedTech.Craft && !selectedTech.Wordpress ? true : selectedTech[project.tech];
    const matchesTitle = project.title.toLowerCase().includes(searchString.toLowerCase());
    return matchesTech && matchesTitle;
  });

  return (
    <div name="portfolio" id="portfolio" className='w-full md:h-auto bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto'>
        <div className='pb-8 mt-[80px]'>
          <p className='text-4xl font-bold inline border-b-4 border-blue-800 font-signature '>Portfolio</p>
          <p className='py-6'>Eine kleine Auswahl der Webprojekte an denen ich mitgearbeitet habe:</p>
        </div>

        <div className='px-4 md:px-12 sm:px-0 mb-[40px]'>
          <div className='flex flex-col md:flex-row items-center justify-between'>
            <div className="flex items-center border-b border-blue-500 active:border-cyan-300 py-2 mb-6 w-full md:w-1/2">
              <input 
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Suchbegriff"
                value={searchString}
                onChange={(e) => handleChangeInput(e)}
                className='appearance-none bg-transparent border-none w-1/2 text-white mr-3 py-1 px-2 leading-tight focus:outline-none'
              />
            </div>
            <div className="filter-options flex flex-row">
              <label>
                <input
                  type="checkbox"
                  name="Neos"
                  checked={selectedTech.Neos}
                  onChange={handleCheckboxChange}
                  className='p-2'
                />
                <FaNeos size={30} />
              </label>
              <label>
                <input
                  type="checkbox"
                  name="Typo3"
                  checked={selectedTech.Typo3}
                  onChange={handleCheckboxChange}
                />
                <FaTypo3 size={30} />
              </label>
              <label>
                <input
                  type="checkbox"
                  name="Craft"
                  checked={selectedTech.Craft}
                  onChange={handleCheckboxChange}
                />
                <SiCraftcms size={30} />
              </label>
              <label>
                <input
                  type="checkbox"
                  name="Wordpress"
                  checked={selectedTech.Wordpress}
                  onChange={handleCheckboxChange}
                />
                <FaWordpressSimple size={30} />
              </label>
            </div>
          </div>
        </div>


  <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-4 md:px-12 sm:px-0 mb-[40px]'>
    {filteredProjects.map((project) => (
      <>
        <Project project = {project} />
      </>
    ))}
    </div>
  </div>
</div>
  )
}

export default Projects