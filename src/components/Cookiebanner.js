import React, { useState } from 'react'
import posthog from 'posthog-js'

const Cookiebanner = () => {

    const [showBanner, setShowBanner] = useState(false)
    const acceptCookies=()=>{
        posthog.opt_in_capturing();
        setShowBanner(false)
    }

    const declineCookies=()=>{
        posthog.opt_out_capturing();
        setShowBanner(false)
    }

  return (
    <div>
        {showBanner &&
        <div className='w-full h-10 flex flex-row justify-center align-middle items-center bg-red-500 text-white'>
            <p>Alles ist besser mit Cookies... und wir müssen fragen</p>
            <button onClick={acceptCookies}>Ablehnen</button>
            <button onClick={declineCookies}>Akzeptieren</button>
        </div>}
    </div>
  )
}

export default Cookiebanner