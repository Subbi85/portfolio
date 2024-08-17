import React, { useState } from 'react';

// Icons
import { SiTailwindcss, SiCraftcms } from "react-icons/si";
import { FaHtml5, FaReact, FaNeos, FaBootstrap, FaTypo3, FaPhp, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const Experience = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const techs = [
    {
      icon: <FaHtml5 size={80} aria-label="HTML5 Icon" />,
      name: "HTML",
      progress: 90,
      points: [
        "Gute Kenntnisse in HTML und Tags",
        "semantischem HTML",
      ]
    },
    {
      icon: <FaCss3Alt size={80} aria-label="CSS3 Icon" />,
      name: "CSS",
      progress: 85,
      points: [
        "responsive Design",
        "Flexbox und Grid",
        "Animationen und Transitions",
        "Erfahrunge mi SCSS"
      ]
    },
    {
      icon: <IoLogoJavascript size={80} aria-label="JavaScript Icon" />,
      name: "JS",
      progress: 80,
      points: [
        "asynchronen Funktionen",
        "DOM-Manipulation, Event Handling",
        "Fetch API-Daten"
      ]
    },
    {
      icon: <FaPhp size={80} aria-label="PHP Icon" />,
      name: "PHP",
      progress: 75,
      points: [
        "Backend-Entwicklung mit PHP",
        "Integration von MySQL-Datenbanken",
        "Verarbeitung von Formularen und Sessions"
      ]
    },
    {
      icon: <SiCraftcms size={80} aria-label="Craft CMS Icon" />,
      name: "Craft CMS",
      progress: 70,
      points: [
        "Aufbau von Backend und Frontend",
        "Erstellung, Anpassungen und Verwaltung von Plugins",
        "Erstellung benutzerdefinierter Module",
        "Kommunikation mit Datenbanken"
      ]
    },
    {
      icon: <FaTypo3 size={80} aria-label="Typo3 Icon" />,
      name: "Typo3",
      progress: 60,
      points: [
        "Erstellen und Anpassen von Webinhalten",
        "TypoScript-Konfigurationen",
        "Anpassungen an benutzerdefinierten Erweiterungen"
      ]
    },
    {
      icon: <FaNeos size={80} aria-label="Neos CMS Icon" />,
      name: "Neos CMS",
      progress: 65,
      points: [
        "Anpassungen von bestehenden Webseiten basierend auf NEOS",
        "Verwaltung und Anpassung von Plugins",
        "Arbeiten mit dem Flow-Framework"
      ]
    },
    {
      icon: <FaBootstrap size={80} aria-label="Bootstrap Icon" />,
      name: "Bootstrap",
      progress: 80,
      points: [
        "Verwendung bei responsiven Websites",
        "Integration von vorgefertigten Komponenten",
        "Anpassung / Verwendung der Bootstrap-Themes"
      ]
    }
  ];

  const newTechs = [
    {
      icon: <FaReact size={80} aria-label="React Icon" />,
      name: "React",
      progress: 50,
      points: [
        "Komponentenbasierte Architektur",
        "Zustandsverwaltung mit Hooks",
        "Integration mit REST APIs"
      ]
    },
    {
      icon: <SiTailwindcss size={80} aria-label="Tailwind CSS Icon" />,
      name: "Tailwind",
      progress: 40,
      points: [
        "Nutzung von Utility-first CSS",
        "Anpassungen an den Default Einstellungen",
        "Erstellen von benutzerdefinierten Styles",
        "Hinterlegen neuer projektinterner Values"
      ]
    }
  ];

  return (
    <div name="experience" id="techstack" className='bg-gradient-to-b from-black to-gray-500 w-full h-auto p-4'>
      <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-auto text-white mt-[80px]'>

        <div>
          <p className='text-4xl font-bold border-b-4 border-blue-800 p-2 inline font-signature'>Tech Stack</p>
          <p className='py-6'>Im Arbeitsalltag habe ich Erfahrungen mit folgenden Techs gesammelt:</p>
        </div>

        <div className='flex flex-col md:flex-row w-full gap-8'>
          <div className='grid grid-cols-3 sm:grid-cols-4 gap-8 text-center py-8 px-4 md:px-0 w-full md:w-2/3'>
            {techs.map((tech, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredTech(tech)}
                onMouseLeave={() => setHoveredTech(null)}
                className={`transition-all duration-500 rounded-lg py-2 md:hover:scale-105 md:hover:drop-shadow-lg ${
                  tech.name === "HTML" ? "md:hover:drop-shadow-orange-500" :
                  tech.name === "CSS" ? "md:hover:drop-shadow-blue-500" :
                  tech.name === "JS" ? "md:hover:drop-shadow-yellow-400" :
                  tech.name === "PHP" ? "md:hover:drop-shadow-purple-400" :
                  tech.name === "Craft CMS" ? "md:hover:drop-shadow-red-400" :
                  tech.name === "Typo3" ? "md:hover:drop-shadow-orange-400" :
                  tech.name === "Neos CMS" ? "md:hover:drop-shadow-blue-400" :
                  "md:hover:drop-shadow-purple-600"
                }`}
              >
                <div className="flex justify-center items-center">
                  {tech.icon}
                </div>
                <p className='mt-4'>{tech.name}</p>
              </div>
            ))}
          </div>

          <div className={`hidden md:flex transition-all duration-500 w-full md:w-1/3 p-4 flex-col justify-center items-center bg-neutral-700 rounded-lg ${hoveredTech ? 'opacity-100' : 'opacity-0'}`}>
            {hoveredTech && (
              <>
                <div className="text-center">
                  {hoveredTech.icon}
                </div>
                <div className="w-full bg-gray-300 rounded-full h-4 mt-4">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-800 h-4 rounded-full"
                    style={{ width: `${hoveredTech.progress}%` }}
                  ></div>
                </div>
                <p className="mt-2">{hoveredTech.progress}%</p>
                <ul className="mt-4 list-disc list-inside">
                  {hoveredTech.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        <div>
          <p className='text-4xl font-bold border-b-4 border-blue-800 p-2 inline font-signature'>Neue Techs</p>
          <p className='py-6'>Außerdem interessiere ich mich derzeit für:</p>
        </div>

        <div className='flex flex-col md:flex-row w-full gap-8'>
          <div className='grid grid-cols-3 sm:grid-cols-4 gap-8 text-center py-8 px-4 md:px-0 w-full md:w-2/3'>
            {newTechs.map((tech, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredTech(tech)}
                onMouseLeave={() => setHoveredTech(null)}
                className={`transition-all duration-500 rounded-lg py-2 md:hover:scale-105 md:hover:drop-shadow-lg ${
                  tech.name === "React" ? "md:hover:drop-shadow-sky-500" : "md:hover:drop-shadow-blue-500"
                }`}
              >
                <div className="flex justify-center items-center">
                  {tech.icon}
                </div>
                <p className='mt-4'>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Experience;
