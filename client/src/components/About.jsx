import { useState, useEffect } from "react";
import { array } from "../utils/dummy";
import { ArrowUpRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleItemHover = (itemId) => {
    setHoveredItem(itemId);
  };

  const handleItemLeave = () => {
    setHoveredItem(null);
  };

  useEffect(() => {
    AOS.init({ duration: 3000 })
  }, []);

  return (
    <div className="max-sm:mt-[430px]  ">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h1 className=" font-bold text-3xl itemColor my-2" data-aos="fade-right">¿Qué hacemos?</h1>
          <p className=" text-gray-600 sm:max-w-[300px] lg:max-w-[400px]" data-aos="fade-right">Calibramos el ecosistema emprendedor de América Latina para crear prosperidad inclusiva para el individuo, la empresa, la comunidad y el medio ambiente.</p>
        </div>
        <div className=" max-sm:my-4 gap-4 flex items-center justify-center">
          <h1 className=" text-[16px] font-bold itemColor" data-aos="fade-left">Conocer más sobre nuestros programas</h1>
          <div className="  cursor-pointer w-[18px] h-[18px] flex items-center justify-center  rounded-full border">
            <ArrowUpRight size={16} className=" itemColor " />
          </div>
        </div>
      </div>

      <div className="sm: my-10">
        <div className=" grid  grid-cols-3 gap-4  max-sm:grid-cols-1 " data-aos="fade-up">


          {array && array.map((item) => (
            <div className="transform transition-transform duration-300 hover:scale-105 cursor-pointer" key={item.id}>
              <img src={item.img} alt="" className=" rounded-xl" />
              <div className=" my-2 rounded-xl p-4" style={{ backgroundColor: hoveredItem === item.id ? item.bg : "" }} onMouseEnter={() => handleItemHover(item.id)}
                onMouseLeave={handleItemLeave}>
                <h1 className={`group-hover:text-white text-gray-800 font-bold my-2 ${hoveredItem === item.id ? "text-white" : ""}`}>{item.title} </h1>
                <p className=" text-gray-500 max-sm: text-[16px]" style={{ color: hoveredItem === item.id ? 'white' : '' }}> {item.desc} </p>
              </div>
            </div>
          ))}
        </div>
        <div className="my-20">
          <div className=" flex flex-col gap-8">
            <h1 className=" text-[24px] itemColor font-semibold">Convocatorias abiertas y novedades</h1>
            <div className="grid  grid-cols-3 gap-4  max-sm:grid-cols-1">
              <div className="relative ">
                <img
                  src="https://agora2030.org/wp-content/uploads/2023/03/Juntas-Contamos-portada-1-768x578.webp"
                  alt="Card Image"
                  className="w-full  rounded-xl h-[280px]  "
                />
                <div className=" absolute top-4 left-2 w-full h-full">
                  <button className=" text-[10px] py-2 px-4 bg-slate-800 text-white rounded-xl">CONVOCATORIA ABIERTA</button>
                </div>
                <div>
                  <h1 className=" text-gray-700 my-3 font-bold ">Programa Juntas Contamos</h1>
                  <p className=" text-gray-500">Oportunidad para mujeres empresarias en México, Guatemala, El Salvador y Honduras. Juntas Contamos Consta de tres programas dirigidos a 3 perfiles diferentes de empresarias</p>
                  <button className=" my-4 py-2 px-4 background text-white rounded-xl">CONOCER MAS</button>
                </div>
              </div>
              <div className=" relative">
                <img src="https://agora2030.org/wp-content/uploads/2024/03/Francis-Castillo-768x602.webp" alt="content" className=" rounded-xl h-[280px]  " />

                <div className=" absolute top-4 left-2 w-full h-full">
                  <button className=" text-[10px] py-2 px-4 bg-slate-800 text-white rounded-xl">BLOG</button>

                </div>
                <div>
                  <h1 className=" text-gray-700 my-3 font-bold">“Alcanzar un equilibrio entre el trabajo y familia uno de los retos más importantes al ser empresaria”</h1>
                  <p className=" line-clamp-3 text-gray-500">Francis Castillo, fundadora de ‘The Baking Mom’es un gran ejemplo de cómo el ser mamá y emprendedora se puede lograr rompiendo paradigmas y miedos</p>
                  <button className=" my-4 py-2 px-4 background text-white rounded-xl">CONOCER MAS</button>
                </div>
              </div>
              <div className="relative">
                <img src="https://agora2030.org/wp-content/uploads/2024/03/Agora-Partnership-y-Change-Lab-jpg.webp" alt="content" className=" rounded-xl h-[285px]" />
                <div className=" absolute top-4 left-2 w-full h-full">
                  <button className=" text-[10px] py-2 px-4 bg-slate-800 text-white rounded-xl">SALA DE PRENSA</button>
                </div>
                <div>
                  <h1 className=" text-gray-700 my-3 font-bold">Transformando a América Latina: Agora Partnerships adquiere CreativeLab</h1>
                  <p className=" text-gray-500">Esta unión no solo representa una evolución en el nombre de la marca colombiana a ChangeLab, sino que también establece ambiciosas metas para el futuro.</p>
                  <button className=" my-4 py-2 px-4 background text-white rounded-xl">CONOCER MAS</button>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}