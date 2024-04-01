


export default function Form() {
  return (
    <div className=" padding-x py-10 bgGray text-white rounded-xl">
      <h1 className=' text-[30px] max-w-[380px]'>Suscribete a nuestro Newsletter</h1>
      <form className=' my-8' >
        <div className=' flex  sm:flex-row flex-col sm:items-baseline sm:justify-normal gap-4 '>
          <div className=" flex-1 flex-col gap-6 flex">
            <div>
              <input type="text" placeholder='Nombre *' className='text-white placeholder-white  input w-[90%] ' />
            </div>
            <div>
              <input type="text" placeholder='Apellido *' className='text-white placeholder-white  input  w-[90%]' />
            </div>
            <div>
              <input type="text" placeholder='Correo Electronico *' className='text-white placeholder-white  input w-[90%]' />
            </div>
          </div>
          <div className=" flex-1 flex-col gap-6 flex">
            <div>
              <input type="text" placeholder='Profesion *' className='text-white placeholder-white  input w-[90%] ' />
            </div>
            <div>
              <input type="text" placeholder='Empresa *' className='text-white placeholder-white  input w-[90%] ' />
            </div>
            <div>
              <input type="text" placeholder='Pais *' className='text-white placeholder-white  input w-[90%] ' />
            </div>
          </div>
        </div>
        <button className=' my-6 py-[4px] px-6 rounded-2xl background border-none cursor-pointer text-white'>Enviar</button>
      </form>
    </div>
  )
}