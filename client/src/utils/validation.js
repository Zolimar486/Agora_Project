import * as countries from 'countries-list';


const validateNombre= ({nombre, setNombreError})=>{
  return nombre && nombre.length< 3 ? setNombreError("Campo muy corto") : setNombreError("")

}

const validateApellido = ({apellido, setApellidoError})=>{
  return apellido && apellido.length < 3 ? setApellidoError("Campo muy corto") : setApellidoError("")
}

const validateCorreo = ({correo, setCorreoError}) => {
  const emailRegular = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;

  return correo && !correo.match(emailRegular)? setCorreoError("Correo Invalido" ): setCorreoError("");

};

const validateProfesion = ({profesion, setProfesionError})=>{
  return profesion && profesion.length < 3 ? setProfesionError("Campo muy corto") : setProfesionError("")

}

const validateEmpresa= ({empresa, setEmpresaError})=>{
  return empresa && empresa.length < 3 ? setEmpresaError("Campo muy corto") : setEmpresaError("")

}

const validatePais = ({ pais, setPaisError }) => {
 
  
  if (!pais) {
    setPaisError("");
  } else {
    const country = Object.values(countries.countries).find(
      (data) => data.name.toLowerCase() === pais.toLowerCase()
    );

    if (!country) {
      setPaisError("Por favor, seleccione un país válido");
    } else {
      setPaisError("");
    }
  }
 
};



export { validateNombre, validateApellido, validateCorreo, validateProfesion, validateEmpresa, validatePais };
