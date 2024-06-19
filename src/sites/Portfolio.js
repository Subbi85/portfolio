import React, { useState, useEffect } from 'react';

// Components
import Project from '../components/Project';

// Companies
import Netzhaut from '../assets/img/netzhaut.jpg';
import Globit from '../assets/img/globit.png';
import privateLogo from '../assets/img/logo.png';

// Images
import DBMuseum from '../assets/img/projects/dbm.png';
import Baugrund from '../assets/img/projects/baugrund.png';
import Pfister from '../assets/img/projects/pfister.png';
import SWAalen from '../assets/img/projects/SWAalen.png';
import ECPOP from '../assets/img/projects/ECPOP.png';
import IATUL from '../assets/img/projects/IATUL.png';
import IACAPAP from '../assets/img/projects/IACAPAP.png';
import SMHS from '../assets/img/projects/SMHS.png';
import Klempau from '../assets/img/projects/klempau.png';
import DDAC from '../assets/img/projects/ddac.png';
import Kulturbureau from '../assets/img/projects/kulturbureau.png';
import Lohr from '../assets/img/projects/lohr.png';
import PortfolioAlt from '../assets/img/projects/old-portfolio.png';
import Games from '../assets/img/projects/games.jpg';

// Icons
import { SiCraftcms } from 'react-icons/si';
import { FaNeos, FaTypo3, FaWordpressSimple } from 'react-icons/fa';
import { VscEditorLayout } from "react-icons/vsc";

const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Projects = () => {
  const projects = [
    { id: 1, title: 'ECP Kongress', img_path: ECPOP, link: 'https://www.esp-congress.org/scientific-programme/online-programme.html', company: Globit, tech: 'Neos' },
    { id: 2, title: 'IATUL', img_path: IATUL, link: 'https://iatul.org/', company: Globit, tech: 'Neos' },
    { id: 3, title: 'Sports Summit', img_path: SMHS, link: 'https://www.sports-medicine-health-summit.de/', company: Globit, tech: 'Neos' },
    { id: 4, title: 'IACAPAP', img_path: IACAPAP, link: 'https://iacapap.org/', company: Globit, tech: 'Neos' },
    { id: 5, title: 'DB Musem', img_path: DBMuseum, link: 'https://www.dbmuseum.de/', company: Netzhaut, tech: 'Craft' },
    { id: 6, title: 'Baugrund', img_path: Baugrund, link: '', company: Netzhaut, tech: 'Typo3' },
    { id: 7, title: 'Autohaus Pfister', img_path: Pfister, link: '', company: Netzhaut, tech: 'Craft' },
    { id: 8, title: 'SW Aalen', img_path: SWAalen, link: '', company: Netzhaut, tech: 'Typo3' },
    { id: 9, title: 'Klempauer Hofsee', img_path: Klempau, link: 'https://vom-klempauer-hofsee.de/', company: privateLogo, tech: 'Wordpress' },
    { id: 10, title: 'Portfolio (alt)', img_path: PortfolioAlt, link: 'https://schleyer.info/diverses/portfolio-website/', company: privateLogo, tech: 'basic' },
    { id: 11, title: 'DDAC', img_path: DDAC, link: 'https://www.ddac.de/', company: Netzhaut, tech: 'Craft' },
    { id: 12, title: 'Kulturbureau', img_path: Kulturbureau, link: 'https://www.kultur-bureau.de/', company: Netzhaut, tech: 'Craft' },
    { id: 13, title: 'GS Sendelbach ', img_path: Lohr, link: 'https://www.lohr.de/gs-sendelbach/home', company: Netzhaut, tech: 'Typo3' },
    { id: 14, title: 'Galgenraten', img_path: Games, link: 'https://schleyer.info/diverses/galgenraten/', company: privateLogo, tech: 'basic' },
    { id: 15, title: 'Tetris', img_path: Games, link: 'https://schleyer.info/diverses/tetris/', company: privateLogo, tech: 'basic' },
  ];

  const [searchString, setSearchString] = useState('');
  const [selectedTech, setSelectedTech] = useState({
    Neos: false,
    Typo3: false,
    Craft: false,
    Wordpress: false,
    basic: false,
  });

  const [projectsToShow, setProjectsToShow] = useState(6);
  const [shuffledProjects, setShuffledProjects] = useState([]);

  useEffect(() => {
    setShuffledProjects(shuffleArray(projects));
  }, []);

  useEffect(() => {
    const results = shuffleArray(projects).filter((project) =>
      project.title.toLowerCase().includes(searchString.toLowerCase())
    );
    setShuffledProjects(results);
  }, [searchString, selectedTech]);

  const handleChangeInput = (event) => {
    setSearchString(event.target.value);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setSelectedTech((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleMoreProjects = () => {
    setProjectsToShow((prevCount) => prevCount + 3);
  };

  const filteredProjects = shuffledProjects.filter((project) => {
    const matchesTech = Object.values(selectedTech).every(value => !value) || selectedTech[project.tech];
    const matchesTitle = project.title.toLowerCase().includes(searchString.toLowerCase());
    return matchesTech && matchesTitle;
  });

  return (
    <div name="portfolio" id="portfolio" className='w-full md:h-auto bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto'>
        <div className='pb-8 mt-[80px]'>
          <p className='text-4xl font-bold inline border-b-4 border-blue-800 font-signature'>Portfolio</p>
          <p className='py-6'>Eine Auswahl der Webprojekte an denen ich mitgearbeitet habe:</p>
        </div>

        <div className='px-4 md:px-12 sm:px-0 mb-[40px]'>
          <div className='flex flex-col md:flex-row items-center justify-between'>
            <div className="flex items-center border-b border-blue-500 active:border-cyan-300 py-2 mb-6 w-full md:w-1/2">
              <input
                type="text"
                placeholder="Suchbegriff"
                value={searchString}
                onChange={handleChangeInput}
                className='appearance-none bg-transparent border-none w-1/2 text-white mr-3 py-1 px-2 leading-tight focus:outline-none'
              />
            </div>
            <div className="filter-options flex flex-row space-x-4">
              <label className='flex items-center'>
                <input
                  type="checkbox"
                  name="Neos"
                  checked={selectedTech.Neos}
                  onChange={handleCheckboxChange}
                  className='mr-2'
                />
                <FaNeos size={30} />
              </label>
              <label className='flex items-center'>
                <input
                  type="checkbox"
                  name="Typo3"
                  checked={selectedTech.Typo3}
                  onChange={handleCheckboxChange}
                  className='mr-2'
                />
                <FaTypo3 size={30} />
              </label>
              <label className='flex items-center'>
                <input
                  type="checkbox"
                  name="Craft"
                  checked={selectedTech.Craft}
                  onChange={handleCheckboxChange}
                  className='mr-2'
                />
                <SiCraftcms size={30} />
              </label>
              <label className='flex items-center'>
                <input
                  type="checkbox"
                  name="Wordpress"
                  checked={selectedTech.Wordpress}
                  onChange={handleCheckboxChange}
                  className='mr-2'
                />
                <FaWordpressSimple size={30} />
              </label>
              <label className='flex items-center'>
                <input
                  type="checkbox"
                  name="basic"
                  checked={selectedTech.basic}
                  onChange={handleCheckboxChange}
                  className='mr-2'
                />
                <VscEditorLayout size={30} />
              </label>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-4 md:px-12 sm:px-0 mb-[40px]'>
          {filteredProjects.slice(0, projectsToShow).map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length > projectsToShow && (
          <div className='flex justify-center'>
            <button
              onClick={handleMoreProjects}
              className='text-white w-fit px-6 py-3 flex items-center rounded-lg bg-gradient-to-r from-blue-500 to-blue-800 cursor-pointer'
            >
              Mehr anzeigen
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;