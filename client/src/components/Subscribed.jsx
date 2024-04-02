import {useState, useEffect} from 'react'
import { publicRequest } from '../request'
import InlineError from './InlineError'
import { validateApellido, validateCorreo, validateEmpresa, validateNombre, validatePais, validateProfesion } from '../utils/validation'


export default function Subscribed() {
  const [nombre, setNombre]= useState("")
  const [apellido, setApellido]= useState("")
  const [correo, setCorreo]= useState("")
  const [empresa, setEmpresa]=useState("")
  const [profesion, setProfesion]=useState("")
  const [pais, setPais]= useState("")
  const [nombreError, setNombreError]= useState("")
  const [apellidoError, setApellidoError]=useState("")
  const [correoError, setCorreoError]=useState("")
  const [empresaError, setEmpresaError]= useState("")
  const [profesionError, setProfesionError]= useState("")
  const [paisError, setPaisError]=useState("") 
  const [message, setMessage]= useState(false)


  const data= ()=>{
    setNombre("")
    setApellido("")
    setCorreo("")
    setEmpresa("")
    setProfesion("")
    setPais("")
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    console.log("Country selected:", pais); //
    try{
      const res= await publicRequest.post('/post', {
        nombre,
        apellido,
        correo,
        empresa,
        profesion,
        pais
      })

      res.data && data()
      setMessage(true)

    }catch(err){
      console.log(err)
    }

  }

  useEffect(()=>{
    validateNombre({nombre, setNombreError})
    validateApellido({apellido, setApellidoError})
    validateCorreo({correo, setCorreoError})
    validateEmpresa({empresa, setEmpresaError})
    validateProfesion({profesion, setProfesionError})
    validatePais({ pais, setPaisError })

  },[nombre, apellido,correo,empresa, pais, profesion])

  useEffect(()=>{
    const interval = setInterval(() => {
        setMessage(false)
    }, 3000);
    return ()=> clearInterval(interval)
  },[message])

  

  return (
    <div className="backgroundShadow padding-x py-14 rounded-lg">
      <div className=" grid md:grid-cols-[1fr,3fr] grid-cols-1">
        <div className="">
          <img src="https://agora2030.org/wp-content/uploads/2024/01/Banner-cel-1-jpg.webp" alt="image" className="w-full h-[380px] " />
        </div>
        <div className="bg-white pl-2 ">
          <h1 className=' text-[30px] max-w-[380px] text-gray-900 '>Suscribete a nuestro Newsletter</h1>
          <form className=' my-8' onSubmit={handleSubmit} >
            <div className=' flex  sm:flex-row flex-col sm:items-baseline sm:justify-normal gap-4 '>
              <div className=" flex-1 flex-col gap-6 flex">
                <div>
                  <input type="text" placeholder='Nombre *' className=' text-gray-500  input w-[90%] ' onChange={(e)=> setNombre(e.target.value)} value={nombre} />
                  {nombreError && <InlineError error={nombreError} />}

                </div>
                <div>
                  <input type="text" placeholder='Apellido *' className='text-gray-500  input  w-[90%]' onChange={(e)=> setApellido(e.target.value)} value={apellido} />
                  {apellidoError && <InlineError error={apellidoError} />}
                </div>
                <div>
                  <input type="text" placeholder='Correo Electronico *' className='text-gray-500   input w-[90%]' onChange={(e)=> setCorreo(e.target.value)} value={correo}/>
                  {correoError && <InlineError error={correoError} />}
                </div>
              </div>
              <div className=" flex-1 flex-col gap-6 flex">
                <div>
                  <input type="text" placeholder='Profesion *' className='text-gray-500   input w-[90%] ' onChange={(e)=> setProfesion(e.target.value)} value={profesion} />
                  {profesionError && <InlineError error={profesionError} />}
                </div>
                <div>
                  <input type="text" placeholder='Empresa *' className='text-gray-500   input w-[90%] ' onChange={(e)=> setEmpresa(e.target.value)} value={empresa} />
                  {empresaError && <InlineError error={empresaError} />}
                </div>
                <div>
                  <input type="text" placeholder='Pais *' className='text-gray-500   input w-[90%] ' onChange={(e)=> setPais(e.target.value)} value={pais} />
                  {paisError && <InlineError error={paisError} />}
                </div>
              </div>
            </div>
            <button className=' my-4 py-[4px] px-6 rounded-2xl background border-none cursor-pointer text-white' type='submit'>Enviar</button>
            {message && 
              <p className=' text-pink-600'>¡Gracias por suscribirte a nuestro Newsletter!</p>
            }
          </form>
        </div>
      </div>
    </div>
  )
}