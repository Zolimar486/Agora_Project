import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Features() {
  useEffect(() => {
    AOS.init({duration:3000})
  }, []);

  return (
    <div data-aos="zoom-in">
      <div className=" flex items-baseline max-md:flex-col justify-normal gap-40 xl:gap-80 max-lg:gap-20 max-md:gap-8 ">
        <h1 className=" itemColor text-[30px] max-md:text-[25px] max-sm:text-[29px] font-bold">Oportunidades laborales</h1>
        <button className=" background py-2 px-4 text-white rounded-2xl">Conoces todas nuestras vacantes</button>
       
      </div>
      <div className=" my-10">
      <div className=" flex flex-col gap-8">
            <h1 className=" text-[24px] itemColor font-semibold">Convocatorias abiertas y novedades</h1>
            <div className="grid  grid-cols-3 gap-4  max-sm:grid-cols-1">
              <div className="relative">
                <img src="https://agora2030.org/wp-content/uploads/2024/02/Disenador-freelance-1024x716.webp" alt="content" className=" rounded-xl h-[285px] " />
                <div className=" absolute top-4 left-2 w-full h-full">
                  <button className=" text-[10px] py-2 px-4 bg-slate-800 text-white rounded-xl">OPORTUNIDAD LABORAL</button>
                </div>
                <div className=" my-10">
                  <h1 className=" text-gray-700 my-3 font-bold ">Diseñador Gráfico Freelance</h1>
                  <p className=" text-gray-500 line-clamp-3">Buscamos un/a Diseñador/a Gráfico con al menos 3 años de experiencia en diseño de presentaciones,materiales educativos, brochures, y otros materiales .</p>
                  <button className=" my-4 py-2 px-4 background text-white rounded-xl">CONOCER MAS</button>
                </div>
              </div>
              <div className=" relative">
                <img src="https://agora2030.org/wp-content/uploads/2024/02/Data-engineer-1024x684.webp" alt="content" className=" rounded-xl h-[280px]" />

                <div className=" absolute top-4 left-2 w-full h-full">
                  <button className=" text-[10px] py-2 px-4 bg-slate-800 text-white rounded-xl">OPORTUNIDAD LABORAL</button>
                
                </div>
                <div className=" my-10">
                  <h1 className=" text-gray-700 my-3 font-bold">Data Engineer (Ingeniero/a de Datos)</h1>
                  <p className=" line-clamp-3 text-gray-500">Buscamos un/a Data Engineer(Ingeniero de Datos) que contribuya al desarrollo, implementación y mantenimiento de un sistema degestión de datos eficiente, eficaz y robusto</p>
                  <button className=" my-4 py-2 px-4 background text-white rounded-xl">CONOCER MAS</button>
                </div>
              </div>
              <div className="relative">
                <img src="https://agora2030.org/wp-content/uploads/2024/02/Gerente-de-Alianzas-1024x684.webp" alt="content" className=" rounded-xl h-[285px]" />
                <div className=" absolute top-4 left-2 w-full h-full">
                  <button className=" text-[10px] py-2 px-4 bg-slate-800 text-white rounded-xl">OPORTUNIDAD LABORAL</button>
                </div>
                <div className=" my-10">
                  <h1 className=" text-gray-700 my-3 font-bold">Gerente de Alianzas</h1>
                  <p className=" line-clamp-3 text-gray-500">Buscamos un/una profesional con experiencia y habilidades en la construcción y gestión de alianzas comerciales y estratégicas con múltiples tipos de organizaciones.</p>
                  <button className=" my-4 py-2 px-4 background text-white rounded-xl">CONOCER MAS</button>
                </div>
              </div>
            </div>
          </div>
      </div>

    </div>
  )
}