import { ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Benefit() {

  const [paises, setPaises] = useState(0)
  const [catalizadores, setCatalizadores] = useState(0)
  const [emprededores, setEmprendedores] = useState(0)

  useEffect(() => {

    const paisesInterval = setInterval(() => {
      if (paises < 23) {
        setPaises(prevCount => prevCount + 1)
      } else {
        clearInterval(paisesInterval)
      }
    }, 6)

    const catalizadoresInterval = setInterval(() => {
      if (catalizadores < 329) {
        setCatalizadores(prevCount => prevCount + 1)
      } else {
        clearInterval(catalizadoresInterval)
      }
    }, 6)

    const emprededoresInterval = setInterval(() => {
      if (emprededores < 2300) {
        setEmprendedores(prevCount => prevCount + 1)
      } else {
        clearInterval(emprededoresInterval)
      }
    }, 6)

    return () => {
      clearInterval(paisesInterval)
      clearInterval(catalizadoresInterval)
      clearInterval(emprededoresInterval)
    }
  }, [paises, catalizadores, emprededores])


  return (
    <div className="  rounded-xl padding-x  padding-y blue flex md:flex-row flex-col md:items-center justify-between">
      <div>
        <h1 className=" text-[30px] text-white font-bold ">Impacto</h1>
        <p className=" text-white  sm:max-w-[290px] my-2">Nos comprometemos a la transparencia con los emprendedores y el ecosistema emprendedor en Latinoamérica alineándonos con los Objetivos de Desarrollo Sostenible de las Naciones Unidas.</p>
      </div>
      <div>
        <div className=' flex items-baseline justify-end gap-4'>
          <div className=' '>
            <h1 className=" text-[16px] font-bold text-white my-3">Ver mas</h1>
          </div>
          <div className="  cursor-pointer w-[18px] h-[18px] flex items-center justify-center rounded-full borderWihte">
            <ArrowUpRight size={16} className=" text-white " />
          </div>
        </div>
        <div className=' my-6 flex md:flex-row max-md: flex-col gap-4 lg:gap-6  '  >
          <div className=' bg-white p-2  md:w-[120px] lg:w-[180px] rounded-xl h-[150px] flex items-center justify-center transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
            <div>
              <h2 className='text-2xl text-center itemColor font-bold'>{emprededores} </h2>
              <p className=' text-center  text-[16px] my-1 itemColor'>Emprendedores atendidos</p>
            </div>
          </div>
          <div className=' bg-white p-2   md:w-[120px] lg:w-[180px] rounded-xl h-[150px] flex items-center justify-center transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
            <div>
              <h2 className='text-2xl text-center itemColor font-bold'> {catalizadores} </h2>
              <p className='text-center text-[16px]my-1 itemColor'>Catalizadores capacitados</p>
            </div>
          </div>
          <div className=' bg-white p-2   md:w-[120px] lg:[200px] lg:w-[190px] rounded-xl h-[180px] flex items-center justify-center transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
            <div>
              <h2 className='text-2xl text-center itemColor font-bold '>{paises} </h2>
              <p className=' text-center text-[16px] my-1 itemColor'>Países que tenemos incidencia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}