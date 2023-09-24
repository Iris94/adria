'use client'

import { HeroHead, HeroNav, HeroImg, HeroRest } from "."
import { useState } from "react"

export default function Hero () {
    const [dropdown, setDropdown] = useState(false)

    const toggleMenu = () => {
        setDropdown(!dropdown)
    }

    return (
        <div className="h-full w-full flex flex-col overflow-hidden">
            <HeroNav dropdown={dropdown} toggleMenu={toggleMenu} />
            <HeroHead dropdown={dropdown}/>
            <HeroImg dropdown={dropdown}/>
            <HeroRest dropdown={dropdown}/>
        </div>
    )
}