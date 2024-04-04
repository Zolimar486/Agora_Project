

## Documentación del Proyecto: Clon de Agora 2030

### Descripcion del Proyecto

<p>
Proyecto basado en desarrollar  un clon del sitio web existente Agora 2030 utilizando React. La aplicación resultante como tal debe tener al menos dos páginas: la página principal con un formulario de contacto funcional y una página de Blog que consuma una API para mostrar los artículos.
</p>

### Tecnologías Utilizadas en el Proyecto

#### Front-end 

- React : Librearia de JavaScript para el desarrollo del Front-end.
- Tailwind: Css Framework utilizado para la maquetación y estilización del sitio.
- Axios: Libreria instalada para llevar a cabo las peticiones de HTTP y consumir la API del Blog.
- React-router-dom: Utilizado para la navegación entre las distintas páginas de la aplicación.

#### Back-end

- NodeJs: Framework de Javacript para desarrollar servidores web.
- Express: Framework de NodeJs para crear aplicaciones web y servicios API.
- Mongoose: Libreria usada para crear esquema de datos.
- MongoDb: Servicio de gestión de almacenamiento de datos.
- Cloudinary: Solución de almacenamiento para almacenar archivos multimedia.
- Postman: Herramienta utilizada para testear los API end-points.

###  Prácticas Implementadas

- Componentización: La interfaz se divide en componentes reutilizables como  Navbar, Header, Footer.
- Responsividad: Se ha asegurado la compatibilidad con dispositivos móviles y diferentes tamaños de pantalla mediante el uso de estilos responsivos de Tailwind CSS.
- Uso de Hooks de React: Se utilizan useState, useEffect y otros hooks para el manejo del ciclo de vida y el estado de los componentes.

###  Mejora Implementadas

- Diseño Responsivo: Se ha implementado un diseño responsivo  utilizando las utilidades de Tailwind CSS para mejorar la experiencia del usuario en dispositivos móviles.
- Animaciones Sutiles: Se han agregado animaciones sutiles utilizando transiciones y animaciones de Tailwind CSS y haciendo uso de la libreria framer-motion para hacer la interfaz más atractiva y dinámica.
- Rediseño de la Sección de Suscripción al Newsletter: Se ha realizado un rediseño significativo en la sección de suscripción al boletín informativo. Se ha reestructurado esta sección para mejorar su estética y funcionalidad.
-  Rediseño de la acción de accesibilidad : Se ha rediseñado la acción de accesibilidad con el objetivo de mejorar la usabilidad y la experiencia del usuario al hacer que la navegación sea más intuitiva y accesible. el despliegue hacia abajo permite una mejor visibilidad de las opciones de accesibilidad disponibles, ya que se extienden verticalmente frente al usuario, lo que facilita la exploración y selección de las diferentes opciones.




## Implementación del Servicio API y Enrutamiento

### Diseño y Creación del Servicio API

<p>
Diseño del servicio API que será responsable de proporcionar los datos necesarios para la página de Blog.  Se ha creado utilizando Node.js y Express.js.
</p>

### Routers y Controladores

#### Rutas Implementadas

- /api/service: Realiza una solicitud POST para crear el contenido  del Blog y devuelve la lista de información relacionado con el Blog .
- /api/post: Realiza una solicitud POST para permitir al usuario crear y mandar información para las suscripción del Newsletter.

### Integración con la Aplicación Frontend

<p>
La aplicación frontend consume los datos proporcionados por el servicio API a través de Axios y React Hooks. Las rutas definidas en el frontend coinciden con las rutas definidas en el servicio API para garantizar una comunicación eficiente entre el frontend y el backend.
</p>

### Despliegue

<p>
El proyecto ha sido desplegado en Vercel y la URL del sitio desplegado es https://agora-project-cyan.vercel.app/
</p>

