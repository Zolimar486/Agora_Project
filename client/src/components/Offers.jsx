import { ArrowUpRight } from 'lucide-react';
import { images } from "../utils/dummy";
import { images1 } from "../utils/dummy";

export default function Offers() {


  return (
    <div className=" flex flex-col gap-8">
      <div>
        <div className=" flex max-sm:flex-col sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <h1 className="itemColor text-[20px] my-2 font-bold">Nuestros aliados</h1>
            <p className=" text-gray-500 max-w-[380px] lg:max-w-[470px]">Conoce a las organizaciones que nos acompañan por una sociedad más inclusiva y en sintonía con el ambiente.Contáctate para conocer más sobre cómo colaborar con Agora Partnerships.</p>
          </div>
          <div className="flex  items-center justify-start gap-2 my-3">
            <h1 className=" text-[16px] font-bold itemColor">Súmate como aliado</h1>
            <div className="  cursor-pointer w-[18px] h-[18px] flex items-center justify-center rounded-full border">
              <ArrowUpRight size={16} className=" itemColor " />
            </div>
          </div>
        </div>
        <div className=" my-10 overflow-hidden  ">
          <div className=" flex mx-10 animate-loop-scroll">

            {images.map((item, index) => (
              <img key={index} src={item} alt="images" className="w-[220px] mr-4" />
            ))}
            {images.map((item, index) => (
              <img key={`duplicate-${index}`} src={item} alt="images" className="w-[220px] mr-4" />
            ))}
          </div>
        </div>

      </div>
      <div className=" my-4">
        <div>
          <h1 className="itemColor text-[20px] my-2 font-bold">Nuestros Financiadores</h1>
          <div className=" my-10 overflow-hidden  ">
            <div className=" flex mx-10 animate-loop-scroll">

              {images1.map((item, index) => (
                <img key={index} src={item} alt="images" className="w-[210px] mr-4" />
              ))}
              {images1.map((item, index) => (
                <img key={`duplicate-${index}`} src={item} alt="images" className="w-[220px] mr-4" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}