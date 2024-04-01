import { useState, useEffect } from 'react'

export default function Header() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    "https://agora2030.org/wp-content/uploads/2024/01/Banner-cel-1-jpg.webp",
    "https://agora2030.org/wp-content/uploads/2024/01/Formando-Catalizadores_Cel-1-jpg.webp"
  ]

 


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 6000)


    return () => clearInterval(interval)
  }, [images.length])



  return (
    <div className=" w-[100%] ">
      <div className=' max-sm:hidden'>
        <img src="https://agora2030.org/wp-content/uploads/2024/01/Banner-sitio-web-1-jpg.webp" alt="image" className=" w-[100%] h-[full]" />
      </div>
      <div className=' max-sm:block hidden my-20 '>

        {images.map((item, index)=> (
          <div className='slider-image-container absolute top-0 left-0' key={index}>
          <img src={item} alt="" className={`transition-transform duration-1000 transform ${
                   currentIndex === index ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                } `} />
        </div>
        ))}
      </div>
    </div>
  )
}