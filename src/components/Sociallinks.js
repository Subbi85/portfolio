import React from 'react'
import { FaLinkedin, FaXing,FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Sociallinks = () => {
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-0 duration-300 hover:shadow-lg hover:shadow-blue-500 hover:rounded-r-md'>
                <a href='https://www.linkedin.com/in/lars-schleyer-6a4949181/' className='flex justify-between items-center w-full text-white' target='_blank' rel='noreferrer'>
                    <>
                        LinkedIn <FaLinkedin size={25} />
                    </>
                </a>
            </li>
            <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-0 duration-300 hover:shadow-lg hover:shadow-blue-500 hover:rounded-r-md' target='_blank' rel='noreferrer'>
                <a href='https://www.xing.com/profile/Lars_Schleyer/web_profiles' className='flex justify-between items-center w-full text-white' target='_blank' rel='noreferrer'>
                    <>
                        Xing <FaXing  size={25} />
                    </>
                </a>
            </li>
            <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-0 duration-300 hover:shadow-lg hover:shadow-blue-500 hover:rounded-r-md' target='_blank' rel='noreferrer'>
                <a href='https://github.com/Subbi85' className='flex justify-between items-center w-full text-white' target='_blank' rel='noreferrer'>
                    <>
                        Github <FaGithub size={25} />
                    </>
                </a>
            </li>
            <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-0 duration-300 hover:shadow-lg hover:shadow-blue-500 hover:rounded-r-md' target='_blank' rel='noreferrer'>
                <a href='mailto:lars.schleyer@gmx.de' className='flex justify-between items-center w-full text-white'>
                    <>
                        Mail <HiOutlineMail size={25} />
                    </>
                </a>
            </li>

        </ul>
    </div>
  )
}

export default Sociallinks