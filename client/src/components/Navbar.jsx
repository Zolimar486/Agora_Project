import React, { useState, useRef } from 'react';
import { useFontSize } from '../Context/FontSizeContext';
import { Menu } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { textSize, lineSpacing, wordSpacing, grayscale, highContrast, negativeContrast } = useFontSize();
  const [open, setOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [openSede, setOpenSede] = useState(false)
  const timerRef = useRef(null);


  const handleHover = () => {
    clearTimeout(timerRef.current)
    setOpenMenu(true)
  }


  const handleClose = () => {
    timerRef.current = setTimeout(() => {
      setOpenMenu(false);
    }, 1000);
  }


  const handleClick = () => {
    setOpenSede(true)
  }


  const handleLeave = () => {
    setOpenSede(false)
  }


  return (
    <div
      style={{
        fontSize: `${textSize}px`,
        lineHeight: lineSpacing,
        wordSpacing: wordSpacing,
      }}
      className={`${grayscale ? "grayscale" : ""} ${highContrast ? "high-contrast" : ""} $ ${negativeContrast ? "negative-contrast" : ""}   padding-x  h-[70px]  bg-white z-[999] shadow-md p-4 flex items-center justify-between max-md:flex-wrap  max-lg:justify-normal fixed top-0 left-0 w-full 2xl:px-[200px] `}
    >
      <div>
        <Link to="/">
          <img src="https://agora2030.org/wp-content/uploads/2022/10/logo-14.png" alt="Agora" className=' w-[100px] ' />
        </Link>
      </div>



      <div className=' max-lg:absolute max-lg: right-[32%] max-md:right-[2%] bg-slate-200 p-1 cursor-pointer lg:hidden block' onClick={() => setOpen(!open)}>

        <Menu className="text-white" />

      </div>

      <div className={`  bg-white z-[999] shadow-md max-lg:overflow-hidden max-lg:w-full  lg:flex items-center justify-center gap-2 max-lg:flex  max-lg:relative max-lg:top-[200px]  max-md:top-0  max-lg:items-center max-lg:justify-center ${open ? "max-h-[450px]" : "max-h-[0px]"} navbarTransition `}>

        <ul className=' text-gray-500 flex items-center justify-center gap-4 max-lg:flex-col max-lg:my-4'>
          <li className=' cursor-pointer'>Quiénes somos</li>
          <li className=' cursor-pointer' onMouseEnter={handleHover} onMouseLeave={handleClose}  >Programas</li>

          {openMenu && (
            <div className='md:absolute top-[100%] right-[60%] max-lg:overflow-auto overflow-hidden w-[150px] md:w-[380px] md:right-[43%] bg-gray-400 ' >
              <div className='max-md: text-[10px] md:text-[14px] bg-gray-700 text-white my-1 p-1 md:p-4 rounded-xl cursor-pointer hover:background'>Empredimientos y pequeñas empresas en crecimientos</div>
              <div className='max-md: text-[10px] md:text-[14px] bg-gray-700 text-white my-1 p-1 md:p-4 rounded-xl cursor-pointer hover:bg-yellow-600'>Ecosistema</div>
              <div className='max-md: text-[10px] md:text-[14px] bg-gray-700 text-white my-1 p-1 md:p-4 rounded-xl cursor-pointer hover:bg-green-600'>Proyectos inclusivos</div>
            </div>
          )}
          <li className=' cursor-pointer'>Impacto</li>
          <li className=' cursor-pointer'>Súmate</li>
          <Link to="/blog">
            <li className=' cursor-pointer'>Blog</li>
          </Link>
          <li className=' cursor-pointer'>Recursos</li>
          <li className=' cursor-pointer' onMouseEnter={handleClick}>Sedes</li>
          <div className={` py-[4px] absolute  w-[150px] top-[98%] right-[33%] bg-slate-500 max-lg:hidden ${openSede ? "block" : "hidden"}  bg-gray-400`}>
            <li className=' cursor-pointer hover:background bg-gray-700 text-white p-[12px] rounded-xl pl-8' onMouseLeave={handleLeave}>México</li>
          </div>

          <li className=' cursor-pointer itemColor font hover:change'>Change Lab</li>
          <div className=' flex flex-col items-center justify-center gap-2 lg:hidden max-lg:block  '>
            <button className='background border-none rounded-xl py-1 px-8 text-white'>Donar</button>

          </div>
        </ul>



      </div>
      <div className=' lg:ml-10 flex items-center justify-center  lg:block max-md:hidden'>
        <button className='background border-none rounded-xl py-1 px-8 text-white xl:mr-3 max-xl:mr-2 max-lg:mr-[10px] visible-element'>Donar</button>
        <button className=' bg-slate-800 text-white rounded-md border-none py-[6px] px-4 xl:mr-4 max-xl:mr-2  max-lg:mr-[10px]'>ES</button>
        <a href="#" className=' text-gray-500 '>EN</a>
      </div>




    </div>
  );
};

export default Navbar;
