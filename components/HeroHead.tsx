import { BsFillClockFill, BsFillTelephoneForwardFill } from 'react-icons/bs'
import { AiFillCaretDown } from 'react-icons/ai'

export default function HeroHead ( {dropdown} : any ) {
    return (
        <div className={`${dropdown ? 'pixel' : ''} w-full h-1/3 bg-mAdria flex justify-center items-center`}>
            <div className="w-full lg:w-2/3 h-full flex flex-col gap-1 justify-center items-center border-r-lAdria border-2 border-transparent">
                <div className="flex flex-col items-center justify-center w-1/2 h-4/5">
                    <h1 className="text-oAdria text-5xl font-bold">Adriatic
                    <span className="text-white font-normal">.HR</span>
                    </h1>
                    <p className="text-white">Najkraći put do Jadrana</p>
                </div>

                <div className="flex justify-between items-center w-full p-5 h-1/5">
                    <h3 className='text-white font-semibold md:text-l text-sm lg:text-xl hover:cursor-pointer hover:text-+dAdria hover:bg-white p-1 rounded-md'>Privatni Smještaj</h3>
                    <h3 className='text-white font-semibold md:text-l text-sm lg:text-xl hover:cursor-pointer hover:text-+dAdria hover:bg-white p-1 rounded-md'>Hoteli</h3>
                    <h3 className='text-white font-semibold md:text-l text-sm lg:text-xl hover:cursor-pointer hover:text-+dAdria hover:bg-white p-1 rounded-md'>Svjetionici</h3>
                    <h3 className='text-white font-semibold md:text-l text-sm lg:text-xl hover:cursor-pointer hover:text-+dAdria hover:bg-white p-1 rounded-md'>Čarteri</h3>
                    <h3 className='text-white font-semibold md:text-l text-sm lg:text-xl hover:cursor-pointer hover:text-+dAdria hover:bg-white p-1 rounded-md'>Hrvatska</h3>
                </div>
            </div> 

            <div className="hidden w-1/3 h-full lg:flex justify-center">
                <div className="w-1/2 h-2/3 flex flex-col justify-center gap-1 p-4">
                   <div className='w-full h-fit flex gap-2 items-center'>
                       <figure className='text-oAdria text-l'>
                            <BsFillClockFill />
                        </figure> 
                        <p className='text-white text-l'>08:00h - 20:00h</p>
                    </div> 

                    <div className='w-full h-fit flex gap-2 items-center'>
                       <figure className='text-oAdria text-l'>
                            <BsFillTelephoneForwardFill />
                        </figure> 
                        <p className='text-white text-l'>+385 21 456-456</p>
                    </div> 
                </div>

                <div className="w-1/2 h-2/3 flex flex-col justify-center self-center gap-1 p-2">
                    <div className='w-full h-fit flex gap-1 items-center hover:bg-+dAdria hover:cursor-pointer'>
                       <figure className='text-oAdria text-l'><AiFillCaretDown /></figure>
                       <p className='text-white text-l'>O nama</p> 
                    </div>
                    <div className='w-full h-fit flex gap-1 items-center hover:bg-+dAdria hover:cursor-pointer'>
                       <figure className='text-oAdria text-l'><AiFillCaretDown /></figure>
                       <p className='text-white text-l'>Kontakt</p> 
                    </div>
                    <div className='w-full h-fit flex gap-1 items-center hover:bg-+dAdria hover:cursor-pointer'>
                       <figure className='text-oAdria text-l'><AiFillCaretDown /></figure>
                       <p className='text-white text-l'>Knjiga Gostiju</p> 
                    </div>
                    <div className='w-full h-fit flex gap-1 items-center hover:bg-+dAdria hover:cursor-pointer'>
                       <figure className='text-oAdria text-l'><AiFillCaretDown /></figure>
                       <p className='text-white text-l'>Partneri</p> 
                    </div>
                    <div className='w-full h-fit flex gap-1 items-center hover:bg-+dAdria hover:cursor-pointer'>
                       <figure className='text-oAdria text-l'><AiFillCaretDown /></figure>
                       <p className='text-white text-l'>Iznajmljivači</p> 
                    </div>
                </div>
            </div>
        </div>
    )
}