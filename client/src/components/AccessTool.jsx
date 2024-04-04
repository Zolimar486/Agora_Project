import React, { useState } from 'react';
import { Accessibility, ZoomIn, Space, Barcode, AlignVerticalSpaceAround, Contrast, Lightbulb, RotateCcw, Eye } from 'lucide-react'
import { useFontSize } from '../Context/FontSizeContext';



const AccessTool = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { increaseTextSize, increaseLineSpacing, increaseWordSpacing, toggleGrayscale, toggleHighContrast, toggleNegativeContrast, resetAll } = useFontSize();

  return (
    <div className="fixed top-[60px] left-0 z-[9999] font-poppins">

      <button
        className=" bg-blue-700 p-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >

        <Accessibility size={36} className=' text-white' />
      </button>


      <div className={`absolute top-16  bg-white shadow-md w-[200px]  rounded-md overflow-hidden element ${isOpen ? "max-h-[400px]" : "max-h-[0px]"}`}>

        <div className='p-2'>
          <h2 className=' text-gray-900 font-semibold'>Herramientas de Accessibilidad</h2>
          <div className=' p-1'>
            <div className=' flex items-start justify-start gap-2 my-1'>
              <ZoomIn size={16} className=' text-gray-800' />
              <div className=' flex flex-col gap-2'>
                <p className="text-gray-800 font-medium text-sm cursor-pointer" onClick={increaseTextSize}>Aumentar Texto</p>

              </div>
            </div>
          </div>
          <div className='p-1'>
            <div className=' flex items-start justify-start gap-2 my-1'>
              <  Space size={16} className=' text-gray-800' />
              <div className=' flex flex-col gap-2'>
                <p className="text-gray-800 font-medium text-sm cursor-pointer" onClick={increaseLineSpacing}>Separar Líneas</p>

              </div>
            </div>
          </div>
          <div className='p-1'>
            <div className=' flex items-start justify-start gap-2 my-1'>
              <AlignVerticalSpaceAround size={16} className=' text-gray-800' />
              <div className=' flex flex-col gap-2'>
                <p className="text-gray-800 font-medium text-sm cursor-pointer" onClick={increaseWordSpacing}>Separar Palabras</p>

              </div>
            </div>
          </div>

          <div className='p-1'>
            <div className=' flex items-start justify-start gap-2 my-1'>
              < Barcode size={16} className=' text-gray-800' />
              <div className=' flex flex-col gap-2'>
                <p className="text-gray-800 font-medium text-sm cursor-pointer" onClick={toggleGrayscale}>Escala de Grises</p>

              </div>
            </div>
          </div>
          <div className='p-1'>
            <div className=' flex items-start justify-start gap-2 my-1'>
              < Contrast size={16} className=' text-gray-800' />
              <div className=' flex flex-col gap-2'>
                <p className="text-gray-800 font-medium text-sm cursor-pointer" onClick={toggleHighContrast} >Alto Contraste</p>

              </div>
            </div>
          </div>
          

          <div className='p-1'>
            <div className=' flex items-start justify-start gap-2 my-1'>
              <  Eye size={16} className=' text-gray-800' />
              <div className=' flex flex-col gap-2'>
                <p className="text-gray-800 font-medium text-sm cursor-pointer" onClick={toggleNegativeContrast} >Contraste Negativo</p>

              </div>
            </div>
          </div>

          <div className='p-1'>
            <div className=' flex items-start justify-start gap-2 my-1'>
              <  RotateCcw size={16} className=' text-gray-800' />
              <div className=' flex flex-col gap-2'>
                <button className="text-gray-800 font-medium text-sm cursor-pointer" onClick={resetAll}>
                  Restablecer
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default AccessTool;
