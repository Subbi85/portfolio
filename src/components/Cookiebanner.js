import React, { useState, useEffect } from 'react'
import posthog from 'posthog-js'

const Cookiebanner = () => {
    const [showBanner, setShowBanner] = useState(false)

    useEffect(() => {
        const hasOptedIn = posthog.has_opted_in_capturing()
        const hasOptedOut = posthog.has_opted_out_capturing()
        // Show banner only if the user has not made a choice
        if (!hasOptedIn && !hasOptedOut) {
            setShowBanner(true)
        }
    }, [])

    const acceptCookies = () => {
        posthog.opt_in_capturing() // Enable tracking
        setShowBanner(false)
    }

    const declineCookies = () => {
        posthog.opt_out_capturing() // Explicitly disable tracking
        setShowBanner(false)
    }

    return (
        <div>
            {showBanner && (
                <div className="w-full h-10 flex flex-row justify-center items-center bg-red-500 text-white">
                    <p className="mr-4">
                        Alles ist besser mit Cookies... und wir müssen fragen
                    </p>
                    <button
                        onClick={acceptCookies}
                        className="px-4 py-1 bg-green-500 text-white rounded mr-2"
                    >
                        Akzeptieren
                    </button>
                    <button
                        onClick={declineCookies}
                        className="px-4 py-1 bg-gray-500 text-white rounded"
                    >
                        Ablehnen
                    </button>
                </div>
            )}
        </div>
    )
}

export default Cookiebanner
