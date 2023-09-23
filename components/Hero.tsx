import { HeroHead, HeroNav, HeroImg, HeroRest } from "."

export default function Hero () {
    return (
        <div className="h-full w-full flex flex-col">
            <HeroNav />
            <HeroHead />
            <HeroImg />
            <HeroRest />
        </div>
    )
}