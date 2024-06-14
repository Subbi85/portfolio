import React from 'react'

const Project = ({project}) => {
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
}

export default Project