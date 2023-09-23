import { BiSolidLike, BiSupport } from 'react-icons/bi'
import { BsFillHouseUpFill } from 'react-icons/bs'

export default function HeroRest() {
  return (
    <div className="w-full h-2/5 flex justify-center items-center p-5">
      <div className="w-full h-full flex justify-center gap-5 items-center">
        <div className="flex flex-col items-center justify-center w-1/4">
          <p className="text-3xl text-yellow-500 font-bold">24</p>
          <p className="text-l text-dAdria font-semibold text-xl">godine iskustva</p>
        </div>

        <div className="flex flex-col items-center justify-center w-1/4">
          <figure className='text-dAdria text-5xl flex justify-center items-center'><BiSolidLike /></figure>
          <p className="text-2xl text-yellow-500 font-bold">6.348</p>
          <p className="text-center text-dAdria font-semibold text-xl">gostiju nas preporučuje</p>
        </div>

        <div className="flex flex-col items-center justify-center w-1/4">
          <figure className='text-dAdria text-5xl flex justify-center items-center'><BiSupport /></figure>
          <p className="text-2xl text-yellow-500 font-bold">16</p>
          <p className="text-dAdria font-semibold text-xl text-center">jezika na kojima pružamo korisničku podršku</p>
        </div>

        <div className="flex flex-col items-center justify-center w-1/4">
          <figure className='h-3/5 text-dAdria text-5xl flex justify-center items-center'><BsFillHouseUpFill /></figure>
          <p className="text-2xl text-yellow-500 font-bold h-1/5">11.141</p>
          <p className="text-center text-dAdria font-semibold text-xl">smještajnih jedinica, u izravnom ugovoru s iznajmljivačima</p>
        </div>
      </div>
    </div>
  )
}
