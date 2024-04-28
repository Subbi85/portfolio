import React from 'react'
import {FaGithub, FaLinkedin, FaXing } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Sociallinks = () => {
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-0 duration-300'>
                <a href='https://www.youtube.com/watch?v=LpZrAjU6Hhk&t=3499s' className='flex justify-between items-center w-full text-white' target='_blank' rel='noreferrer'>
                    <>
                        LinkedIn <FaLinkedin size={25} />
                    </>
                </a>
            </li>
            <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-0 duration-300' target='_blank' rel='noreferrer'>
                <a href='https://www.youtube.com/watch?v=LpZrAjU6Hhk&t=3499s' className='flex justify-between items-center w-full text-white'>
                    <>
                        Xing <FaXing  size={25} />
                    </>
                </a>
            </li>
            <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-0 duration-300' target='_blank' rel='noreferrer'>
                <a href='https://www.youtube.com/watch?v=LpZrAjU6Hhk&t=3499s' className='flex justify-between items-center w-full text-white'>
                    <>
                        Github <FaGithub size={25} />
                    </>
                </a>
            </li>
            <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-0 duration-300' target='_blank' rel='noreferrer'>
                <a href='https://www.youtube.com/watch?v=LpZrAjU6Hhk&t=3499s' className='flex justify-between items-center w-full text-white'>
                    <>
                        Mail <HiOutlineMail size={25} />
                    </>
                </a>
            </li>
            <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-0 duration-300' target='_blank' rel='noreferrer'>
                <a href='https://www.youtube.com/watch?v=LpZrAjU6Hhk&t=3499s' className='flex justify-between items-center w-full text-white'>
                    <>
                        Lebenslauf <BsFillPersonLinesFill size={25} />
                    </>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Sociallinks