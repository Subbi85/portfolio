import React from 'react'

const Footer = () => {
  return (

    <div name="footer" className='h-auto w-full bg-gradient-to-b from-blue-500 to-blue-800 p-4' id="kontakt">
        <div className='w-full lg:max-w-screen-lg mx-auto flex flex-col justify-center text-white pt-6'>
        
            <div className='flex flex-col sm:flex-row justify-between p-6'>
                <p className='py-2'>Lars Schleyer <br/> Webentwickler</p>
                <p className='py-2'>Ahrensböker Str. 116 <br/>23617 Stockelsdorf</p>
                <p className='py-2'>0175/6615083 <br/>lars.schleyer@gmx.de</p>

            </div>

        </div>
    </div>



  )
}

export default Footer