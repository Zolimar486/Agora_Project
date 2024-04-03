import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Card({ item }) {
  
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="relative overflow-hidden rounded-lg shadow-sm" data-aos="fade-up">

      <img src={item.img.url} alt="img" className="object-cover object-center  rounded-xl h-[285px] transition-transform duration-300 hover:scale-105" />

      <div className="absolute top-4 left-4">
        <button className="text-xs md:text-sm py-1 px-3 md:py-2 md:px-4 bg-slate-800 text-white rounded-lg">{item.category}</button>
      </div>


      <div className=" bg-white">

        <h1 className="text-gray-700 my-3 font-bold line-clamp-2">{item.title}</h1>

        <p className="text-gray-600 mb-4 line-clamp-3">{item.desc}</p>

        <button className="py-2 px-6 bg-[#c1285d] hover:bg-opacity-80  text-white rounded-lg shadow-lg transition duration-300 ease-in-out">
          Conocer Más
        </button>
      </div>
    </div>
  );
}
