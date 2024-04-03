import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Card({ item }) {
  useEffect(() => {
    AOS.init({ duration: 3000 })
  }, []);


  return (


    <div className="relative " data-aos="fade-up">
      <img src={item.img.url} alt="content" className=" rounded-xl h-[285px] " />
      <div className=" absolute top-4 left-2 w-full h-full">
        <button className="  text-[10px] py-2 px-4 bg-slate-800 text-white rounded-xl">{item.category} </button>
      </div>
      <div>
        <h1 className=" text-gray-700 my-3 font-bold ">{item.title} </h1>
        <p className=" text-gray-500 line-clamp-3">{item.desc} </p>
        <button className=" cursor-pointer my-4 py-2 px-4 background text-white rounded-xl"> {item.button} </button>
      </div>
    </div>




  )
}

