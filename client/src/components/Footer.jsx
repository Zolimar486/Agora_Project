import { ArrowUpRight, Instagram } from 'lucide-react'
import spot from '../assets/spot.svg'
import medium from '../assets/medium.svg'
import face from '../assets/face.svg'
import linke from '../assets/linke.svg'
import youto from '../assets/youtu.svg'

export default function Footer() {
  return (
    <div className=" flex md:flex-row flex-col md:items-baseline md:justify-normal max-md: justify-center max-md:items-center gap-10 md:gap-20">
      <div className=" flex-1">
        <div className=' flex flex-col md:gap-52'>
          <div className='' >
            <img src="https://agora2030.org/wp-content/uploads/2022/10/logo-1.svg" alt="" className='' />
          </div>
          <div className=''>
            <p className=" text-[10px] max-md:my-3">Agora Partnerships <span className=" text-gray-400">® All Rights Reserved.Reg. U.S. Pat. and TM</span> <span className=" change">Off Política de Privacidad</span></p>
          </div>
        </div>

      </div>
      <div className=" flex-1">
        <ul className=" text-gray-500 text-sm flex flex-col gap-3">
          <li>Quiénes somos</li>
          <li>Programas</li>
          <li>Impacto</li>
          <li>Súmate</li>
          <li>Blog</li>
          <li>Recursos</li>
          <li>Sedes</li>
          <li>Change Lab</li>

        </ul>
      </div>
      <div className=" flex-1">
        <div>
          <button className='  max-sm:ml-10 background border-none rounded-xl py-1 px-8 text-white'>Donar</button>
        </div>
        <div className="flex  items-center justify-start gap-2 my-3">
          <h1 className=" text-[16px] font-bold itemColor">Suscribirme al newsletter</h1>
          <div className="  cursor-pointer w-[18px] h-[18px] flex items-center justify-center rounded-full border">
            <ArrowUpRight size={16} className=" itemColor " />
          </div>
        </div>
        <div className='max-sm:ml-10'>
          <button className=' bg-slate-800 text-white rounded-md border-none py-[6px] px-4 xl:mr-4 max-xl:mr-2  max-lg:mr-[10px]'>ES</button>
          <a href="#" className=' text-gray-500 '>EN</a>
        </div>
      </div>
      <div className=" flex-1 md:flex md:flex-col md:gap-40">
        <div>
          <div className=' flex items-baseline justify-normal gap-4'>
            <div>
              <img src={face} alt="" />
            </div>
            <div>
              <Instagram />
            </div>
            <div>
              <img src={medium} alt="image" />
            </div>
          </div>
          <div className=' flex items-baseline justify-normal gap-4 my-4'>
            <div>
              <img src={linke} alt="" />
            </div>
            <div>
              <img src={spot} alt="" className='color' />
            </div>
            <div>
              <img src={youto} alt="" />
            </div>
          </div>
        </div>

        <div>
          <p className=' text-gray-400 text-sm'>info@agora2030.org</p>
        </div>
      </div>
    </div>
  )
}