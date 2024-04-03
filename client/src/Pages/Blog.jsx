import person from '../assets/person.png'
import Card from '../components/Card'
import { useState, useEffect } from 'react'
import { publicRequest } from '../request'
import Pagination from '../components/Pagination'


export default function Blog() {
  const [data, setData] = useState([])
  const [filtered, setFiltered] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [cardsPerPage] = useState(6)



  //Implementacion del useEffect React Hook para el proceso de Fetching data desde la Base de Datos
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await publicRequest.get('/service')
        setData(res.data)

      } catch (err) {
        console.log(err)
      }

    }

    getData()
  }, [])


  //Proceso para implementar la Filtracion de Datos.
  const handleClick = (type) => {
    if (type === "Todos") {
      setFiltered(null)
    } else {
      const result = data.filter((item) => item.category === type)
      setFiltered(result)
    }

  }


  //Procedimiento para integrar Paginacion

  const indexLast = currentPage * cardsPerPage

  const indexFirst = indexLast - cardsPerPage

  let paginate = []

  if (Array.isArray(data)) {
    paginate = data.slice(indexFirst, indexLast)
  } else {
    console.log.error("Card is not an array or is undefined")
  }

  const paginations = (pageNumber) => {
    setCurrentPage(pageNumber);
    const element = document.getElementById("topOfPage")
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };





  return (
    <div className=" my-8 md:padding-x  padding-y 2xl:max-w-[1800px] 2xl:m-auto">
      <div className="flex md:flex-row flex-col md:items-start justify-normal gap-6">
        <div className=" flex-1 blue text-white  rounded-xl h-[340px] p-20 max-sm:p-6 ">
          <div>
            <h1 className=" text-[12px]">NUESTRO BLOG</h1>
            <p className=" md:text-[34px]  my-4 text-[22px] font-semibold">Conoce nuestros últimos artículos y noticias</p>
          </div>
        </div>
        <div className="flex-1 ">
          <img src={person} alt="image" className=' w-full h-[340px] object-cover rounded-xl' />
        </div>
      </div>
      <div id="topOfPage" className=' m-auto max-w-[1050px] my-10 rounded-xl p-6 text-gray-700'>
        <div className=' flex  md:flex-row flex-col gap-2 md:items-baseline justify-normal flex-wrap'>
          <button className=' text-sm blue py-2 px-3 border-none rounded-lg text-white ' onClick={() => handleClick("Todos")}>Todos </button>
          <button className=' text-sm py-2 px-3 border-none rounded-lg hover:blue hover:text-white' onClick={() => handleClick("Convocatoria abierta")}>Convocatoria abierta </button>
          <button className=' text-sm py-2 px-3 border-none rounded-lg hover:blue hover:text-white' onClick={() => handleClick("Oportunidad Laboral")}>Oportunidad Laboral </button>
          <button className=' text-sm py-2 px-3 border-none rounded-lg hover:blue hover:text-white' onClick={() => handleClick("Programa")}>Programa</button>
          <button className=' text-sm py-2 px-3 border-none rounded-lg hover:blue hover:text-white' onClick={() => handleClick("Programa en ejecución")}>Programa en ejecución</button>
          <button className=' text-sm py-2 px-3 border-none rounded-lg hover:blue hover:text-white' onClick={() => handleClick("Programas ejecutados")}>Programas ejecutados </button>
          <button className=' text-sm py-2 px-3 border-none rounded-lg hover:blue hover:text-white' onClick={() => handleClick("Sala de Prensa")} >Sala de Prensa </button>
          <button className=' text-sm py-2 px-3 border-none rounded-lg hover:blue hover:text-white' onClick={() => handleClick("Blog")}  >Blog </button>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-4 max-sm:grid-cols-1'>
        {filtered ? filtered.map((item) => (
          <Card item={item} key={item._id} />

        )) : (
          paginate.map((item) => (
            <Card item={item} key={item._id} />
          )

          ))}

      </div>
      <Pagination
        totalCards={data?.length}
        cardsPerPage={cardsPerPage}
        paginations={paginations}
      />

    </div>
  )
}