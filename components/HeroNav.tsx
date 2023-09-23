import { BiSolidUserCircle } from 'react-icons/bi'
import { MdBedroomParent, MdCompareArrows } from 'react-icons/md'
import { BsPersonHeart } from 'react-icons/bs'
import { GoMultiSelect } from 'react-icons/go'
import CountryFlag from 'react-country-flag';


export default function HeroNav () {
    return (
        <div className="bg-dAdria h-12 w-full flex justify-between items-center p-2">
            <div className="h-full w-max flex gap-1 border-l-lAdria border-2 border-transparent">
                <figure className='w-2/5 h-full flex justify-center items-center'>
                    <BiSolidUserCircle className="icon-large" /></figure>
                <div className='w-3/5 h-full flex flex-col justify-center'>
                    <p className='text-white hover:cursor-pointer hover:text-lAdria'>Prijava</p>
                    <p className='text-white hover:cursor-pointer hover:text-lAdria'>Registracija</p>
                </div>
            </div>

            <div className='h-full w-max flex gap-1 border-l-lAdria border-2 border-transparent p-2'>
                <figure className='w-2/5 h-full flex justify-center items-center'>
                    <MdBedroomParent className="icon-large" /></figure>
                <p className='text-white hover:cursor-pointer hover:text-lAdria flex justify-center items-center'>Iznajmljivači</p>
            </div>

            <div className='h-full w-max flex gap-1 border-l-lAdria border-2 border-transparent p-2'>
                <figure className='w-2/5 h-full flex justify-center items-center'>
                    <BsPersonHeart className="icon-large"/>
                </figure>
                <p className='text-white hover:cursor-pointer hover:text-lAdria flex justify-center items-center'>Moj Izbor</p>
            </div>

            <div className='h-full w-max flex gap-1 border-l-lAdria border-2 border-transparent p-2'>
                <figure className='w-2/5 h-full flex justify-center items-center'>
                    <MdCompareArrows className="icon-large"/>
                </figure>
                <p className='text-white hover:cursor-pointer hover:text-lAdria flex justify-center items-center'>Usporedba</p>
            </div>

            <div className='h-full w-max flex gap-1 border-l-lAdria border-2 border-transparent p-2'>
                <figure className='w-2/5 h-full flex justify-center items-center'>
                    <GoMultiSelect className="icon-large"/>
                </figure>
                <figure className='w-2/5 h-full flex justify-center items-center'>
                    <CountryFlag countryCode="HR" svg className="icon-large" />
                </figure>
            </div>
        </div>
    )
}