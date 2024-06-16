import React from 'react';
import { FaLinkedin, FaXing, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { HiOutlineDocumentDownload } from 'react-icons/hi';

const Sociallinks = () => {
  const links = [
    {
      href: 'https://www.linkedin.com/in/lars-schleyer-6a4949181/',
      label: 'LinkedIn',
      icon: <FaLinkedin size={25} />,
    },
    {
      href: 'https://www.xing.com/profile/Lars_Schleyer/web_profiles',
      label: 'Xing',
      icon: <FaXing size={25} />,
    },
    {
      href: 'https://github.com/Subbi85',
      label: 'Github',
      icon: <FaGithub size={25} />,
    },
    {
      href: 'mailto:lars.schleyer@gmx.de',
      label: 'Mail',
      icon: <HiOutlineMail size={25} />,
    },
    {
      href: '/assets/Lebenslauf.pdf',
      label: 'Lebenslauf',
      icon: <HiOutlineDocumentDownload size={25} />,
      download: true,
    },
  ];

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {links.map(({ href, label, icon, download }) => (
          <li key={label} className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-0 duration-300 hover:shadow-lg hover:shadow-blue-500 hover:rounded-r-md'>
            <a
              href={href}
              className='flex justify-between items-center w-full text-white'
              target='_blank'
              rel='noreferrer'
              download={download ? true : undefined}
            >
              <>
                {label} {icon}
              </>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sociallinks;