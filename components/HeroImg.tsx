'use client'

import Image from "next/image"
import { AiFillHome } from 'react-icons/ai'
import { MdHotelClass, MdLocationPin } from 'react-icons/md'
import { GiLighthouse, GiSpeedBoat } from 'react-icons/gi'
import { BsFillCalendar2RangeFill, BsFillPersonCheckFill, BsSearch, BsFacebook } from 'react-icons/bs'
import {RiStarSFill } from 'react-icons/ri'
import {FcGoogle} from 'react-icons/fc'

import { useState, useEffect } from "react"

export default function HeroImg ( {dropdown} : any ) {
    const [tabNumber, setTabNumber] = useState(1)

    useEffect(() => {
        const interval = setInterval(() => {
          setTabNumber((prevTabNumber) => {
            if (prevTabNumber === 1) return 2;
            else if (prevTabNumber === 2) return 3;
            else return 1;
          });
        }, 5000);
    
        return () => clearInterval(interval);
      }, []);

    return (
        <div className={`${dropdown ? 'pixel' : ''} w-full h-full relative overflow-hidden`}>
            <div className="z-0 absolute w-full h-full">
            <Image
            src="/more.jpg"
            width={100}
            height={50}
            alt="Jadran"
            layout="responsive"
          />
            </div>
          <div className="z-10 absolute p-9 w-full h-full">
            <div className="w-full h-full flex justify-center items-center">
                <div className="lg:w-1/2 w-full h-full">
                    <div className="w-full h-full rounded-lg bg-white shadow-md shadow-dAdria p-4 flex flex-col gap-1 items-center justify-center">
                        <div className="w-full h-1/2 flex justify-between items-center">
                            <div className="flex flex-col justify-center items-center p-2">
                                <figure className="w-full h-3/5 text-dAdria flex justify-center items-center text-3xl"><AiFillHome /></figure>
                                <p className="w-full h-2/5 text-dAdria hover:text-+dAdria hover:cursor-pointer flex justify-center items-center text-xl font-semibold">Privatni</p>
                            </div> 

                            <div className="flex flex-col justify-center items-center p-2">
                                <figure className="w-full h-3/5 text-dAdria flex justify-center items-center text-3xl"><MdHotelClass /></figure>
                                <p className="w-full h-2/5 text-dAdria hover:text-+dAdria hover:cursor-pointer flex justify-center items-center text-xl font-semibold">Hoteli</p>
                            </div>

                            <div className="flex flex-col justify-center items-center p-2">
                                <figure className="w-full h-3/5 text-dAdria flex justify-center items-center text-3xl"><GiLighthouse /></figure>
                                <p className="w-full h-2/5 text-dAdria hover:text-+dAdria hover:cursor-pointer flex justify-center items-center text-xl font-semibold">Svjetionici</p>
                            </div> 

                            <div className="flex flex-col justify-center items-center p-2">
                                <figure className="w-full h-3/5 text-dAdria flex justify-center items-center text-3xl"><GiSpeedBoat /></figure>
                                <p className="w-full h-2/5 text-dAdria hover:text-+dAdria hover:cursor-pointer flex justify-center items-center text-xl font-semibold">Čarteri</p>
                            </div> 
                        </div>

                        <div className="w-full h-1/2 bg-yellow-500 flex lg:justify-evenly justify-center lg:flex-row items-center p-5 gap-2">
                            <div className="w-fit h-1/2 flex gap-2 justify-center items-center bg-white rounded-md p-3">
                                <figure className="lg:w-1/5 w-full h-full text-gray-500 flex items-center text-xl"><MdLocationPin /></figure> 
                                <p className="text-gray-500 font-semibold lg:text-xl text-sm lg:flex items-center w-4/5 hidden">Mjesto</p>
                            </div> 

                            <div className="w-fit h-1/2 flex gap-2 justify-center items-center bg-white rounded-md p-3">
                                <figure className="lg:w-1/5 w-full h-full text-gray-500 flex items-center text-xl"><BsFillCalendar2RangeFill /></figure> 
                                <p className="text-gray-500 font-semibold lgtext-xl text-sm lg:flex items-center w-4/5 hidden">Dolazak</p>
                            </div> 

                            <div className="w-fit h-1/2 flex gap-2 justify-center items-center bg-white rounded-md p-3">
                                <figure className="lg:w-1/5 w-full h-full text-gray-500 flex items-center text-xl"><BsFillCalendar2RangeFill /></figure> 
                                <p className="text-gray-500 font-semibold lg:text-xl text-sm lg:flex items-center w-4/5 hidden">Odlazak</p>
                            </div> 

                            <div className="w-fit h-1/2 flex gap-2 justify-center items-center bg-white rounded-md p-3">
                                <figure className="lg:w-1/5 w-full h-full text-gray-500 flex items-center text-xl"><BsFillPersonCheckFill /></figure> 
                                <p className="text-gray-500 font-semibold lg:text-xl text-sm lg:flex items-center w-4/5 hidden">Osobe</p>
                            </div> 

                            <div className="lg:w-full w-1/5 h-1/2 flex gap-2 justify-center items-center bg-dAdria rounded-md hover:bg-+dAdria hover:cursor-pointer">
                                <figure className="w-full h-full lg:text-3xl text-sm text-white font-bold flex justify-center items-center"><BsSearch /></figure>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden w-1/2 h-full p-10 lg:flex justify-center items-center">
                    <div className="bg-sAdria w-full h-full rounded-md bg-opacity-50 flex justify-center items-center">
                        <div className="w-2/3 h-2/3 flex justify-center items-center p-2">
                        
                        {tabNumber === 1 && (
                            <p className="text-white font-semibold text-xl">
                            U 2022. godini ostvarili smo 571.639 noćenja.
                            </p>
                        )}

                        {tabNumber === 2 && <div className="w-full h-full flex flex-col rounded-md items-center justify-center gap-1">
                            <div className="w-full h-fit flex gap-1 justify-center">
                                <figure className="text-xl text-white"><BsFacebook /></figure>
                                <p className="text-white text-xl font-semibold">Facebook</p>
                            </div>
                            <div className="w-full h-fit flex items-center justify-center">
                                <div className="text-white text-xl font-semibold">4.2</div>
                                <div>
                                <div className="flex w-full h-full">
                                <figure className="text-yellow-500 font-semibold text-xl"><RiStarSFill /></figure>
                                <figure className="text-yellow-500 font-semibold text-xl"><RiStarSFill /></figure>
                                <figure className="text-yellow-500 font-semibold text-xl"><RiStarSFill /></figure>
                                <figure className="text-yellow-500 font-semibold text-xl"><RiStarSFill /></figure>
                                <figure className="text-white font-semibold text-xl"><RiStarSFill /></figure>
                                </div>
                                </div>
                            </div>
                            <div className="w-full h-fit text-white font-semibold justify-center items-center flex">Bazirano na 284 recenzije</div>
                            </div>}

                        {tabNumber === 3 && <div className="w-full h-full flex flex-col rounded-md items-center justify-center gap-1">
                            <div className="w-full h-fit flex gap-1 justify-center">
                                <figure className="text-xl text-white"><FcGoogle /></figure>
                                <p className="text-white text-xl font-semibold">Google</p>
                            </div>
                            <div className="w-full h-fit flex items-center justify-center">
                                <div className="text-white text-xl font-semibold">4.5</div>
                                <div>
                                <div className="flex w-full h-full">
                                <figure className="text-yellow-500 font-semibold text-xl"><RiStarSFill /></figure>
                                <figure className="text-yellow-500 font-semibold text-xl"><RiStarSFill /></figure>
                                <figure className="text-yellow-500 font-semibold text-xl"><RiStarSFill /></figure>
                                <figure className="text-yellow-500 font-semibold text-xl"><RiStarSFill /></figure>
                                <figure className="text-yellow-700 text-xl font-semibold"><RiStarSFill /></figure>
                                </div>
                                </div>
                            </div>
                            <div className="w-full h-fit text-white font-semibold justify-center items-center flex">Bazirano na 962 recenzije</div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </div>
    )
}