<br />
<div align="center">
  <a href="https://github.com/l1zondo/eccomerce-franco-dos">
    </a>
  <h3 align="center">E-Commerce-React-App</h3>

  <p align="center">
     E-commerce con las funcionalidades basicas, sumar producto al carrito, elegir la cantidad del producto, formulario de validacion de compra etc..
    <br />
    <br />
    <a href="https://bejewelled-fairy-4d9706.netlify.app">Link del sitio</a>
  </p>
</div>
<br />
<br />
<br />


# Tabla de contenidos
- [Acerca del Proyecto](#acerca-del-proyecto)
- [Estructura del Proyecto](#estructura-del-proyecto)
  * [Página de inicio o Home](#inicio-o-home)
  * [Página detalle del producto](#página-detalle-del-producto)
  * [Página carrito de compras](#página-carrito-de-compras)
  * [Página de checkout](#página-de-checkout)
  * [Página de compra exitosa](#página-de-compra-exitosa)
- [Tecnologías aplicadas](#tecnologías-aplicadas)
- [Comenzando](#comenzando)
  * [Pre-requisitos](#pre-requisitos)
  * [Instalación](#instalación)
  * [Ejecución](#ejecutando-la-aplicación)
- [Autor](#autor) 
- [Licencia](#licencia) 
- [Mostranos tu apoyo](#mostranos-tu-apoyo) 

<br />
<br />



## Acerca del Proyecto
Este proyecto fue creado en el curso de ReactJs cursando la carrera de FullStack Developer, se trata de un sitio web,
un E-Commerce de indumentaria masculina, el proyecto esta realizado con ReactJs, integre firebase y Firestore y esta estilado con Bootstrap+css, cuenta con una navegacion sencilla y una interfaz simple. Este proyecto permite al usuario navegar por el inicio viendo todos los productos que brinda la pagina y a su vez poder filtrar los productos con su respectiva categoria. Respecto a la compra de los productos el usuario puede elegir cuantos productos va a querer y con solo un click los productos seleccionados se almacenaran en su carrito de compras, sector en el que se finalizaria la compra llenando un formulario de validacion con los datos del comprador. al finalizar la compra el usuario va a recibir un "id" de compra, el cual registra que productos compro el usuario 
<br/>

En relación a los ítems exhibidos en este proyecto, decir que los mismos se encuentran alojados en la nube, haciendo uso del servicio de Firebase & Firestore, al igual que las categorías exhibidas, las cuales se generan de forma totalmente dinámica, lo que posibilita que el proyecto sea escalable y de fácil administración. 
<br/>
<br/>

## Estructura del Proyecto.

### Inicio o Home
Esta es la primera página a la que el usuario accede cuando ingresa al sitio. La misma muestra un listado de todos los productos disponibles. En la parte superior se encuentra el carrito donde se ira sumando toda compra que quiera realizar el usuario.
<br/>
![](./public/readmedoc/inicio.png)



### Página detalle del producto
Muestra el detalle del producto que ha sido seleccionado previamente por el usuario, ya sea desde el Home o desde alguna de las categorías. A través de esta vista el usuario accede a una información más detallada del producto, como puede ser: nombre, descripción, precio, etc. A su vez posibilita que el usuario pueda agregar el ítem al carrito de compras, seleccionando la cantidad deseada y luego clickeando el botón correspondiente.
<br/>
<br/>

![](./public/readmedoc/detalle.png)


### Página carrito de compras
Muestra la información del producto o productos que el usuario ha añadido para la compra, junto con su cantidad, subtotal y total correspondiente. En caso de desearlo, el usuario puede remover los ítems que desee de forma individual (botón en forma de tacho de basura que aparece junto a cada producto) Por último, y para seguir con el proceso de compra, en la parte inferior izquierda se exhibe el botón que lleva al checkout.
<br/>
<br/>
![](./public/readmedoc/carrito.png)



### Página de checkout
Muestra un simple formulario que ha de completarse para finalizar el proceso de compra.

<br/>

![](./public/readmedoc/checkout.png)


### Página de compra exitosa
Muestra la confirmación de la compra realizada por el usuario. Además, provee al usuario con un número de orden de compra único.

![](./public/readmedoc/seguimiento.png)


# Tecnologías aplicadas
Para la construcción de este proyecto se utilizaron múltiples conceptos, en conjunto con una vasta cantidad de librerías. Por nombrar algunas:

* [React.js](https://reactjs.org/): Se utilizó para la creación de la estructura principal del proyecto.
* [React Spinners](https://www.npmjs.com/package/react-spinners): Se utilizó para mostrar el estado de carga de algunos componentes y mejorar así la experiencia del usuario al dar una señal de carga.
* [React Router DOM](https://www.npmjs.com/package/react-router-dom): Se implementó para la navegación de las diferentes secciones.
* [React Bootstrap](https://react-bootstrap.github.io/): Se utilizó para facilitar el armado de la interfaz, haciendo uso de los componentes que provee.
* [Firebase - Firestore](https://firebase.google.com/): Base de datos no relacional alojada en la nube que se utilizó para el manejo de Datos a través de diferentes colecciones que se implementaron.

* *React Hooks*: Se implementaron para el manejo de estados, entre otras cosas.
* *Custom Hooks*: Se implementó para abstraer parte de la lógica y para un mejor control de la información del formulario.
* *Context*: Se utilizó para el manejo de la lógica del carro y para poder pasar esa información entre componentes, sin tener que pasarlo por props.
* *Forms*: Se manipuló data a través de un form en React.
* *Expresiones Regulares*: Se implementaron para la validación de los datos ingresados por el usaurio.
* *GIT*: Indispensable para la prueba y testeo de nuevas funcionalidades.
* *CSS*: Se utilizó para darle estilo propio a algunos componentes.
* *Environmental variables*: Se utilizaron para proteger información sensible.

<br />


# Comenzando

Con estos pasos a seguir podras tener esta app funcionando al 100% ya sea para seguir desarollando o simplemente probarla.


### Pre-requisitos

Debes tener instalado el siguiente software en tu sistema operativo:

* Node
* npm 

utiliza los siguientes comandos para verificar tus versiones de Node y npm si crees que no lo tienes actualizado:

bash
node -v
npm -v




### Instalación
Primero vas a necesitar descargar y/o clonar el repositorio, para ello, seguí los pasos que se detallan a continuación:

* Clone 'https://github.com/l1zondo/eccomerce-franco-dos#readme' repository from GitHub

  bash
  git clone https://github.com/l1zondo/eccomerce-franco-dos#readme
  

   O USANDO SSH

  bash
  git clone https://github.com/l1zondo/eccomerce-franco-dos#readme
  

* Instalar las dependencias<br/>
En la carpeta del proyecto, ejecutá el siguiente comando para instalar las dependencias necesarias.

   bash
   npm install
   


### Ejecutando la aplicación

* Por último, ejecutá la aplicación con este comando:

  bash
  npm start
  


<br />



# Autor

👤 *Franco Lizondo*

- Instagram: [frannlizondo](https://instagram.com/frannlizondo)
- Github: [l1zondo](https://github.com/l1zondo)
- Linkedin: [FrancoLizondo](https://www.linkedin.com/in/franco-lizondo-a77a6a207/)
- Podés escribirme a: lizondofrancoezequiel@gmail.com




# Mostranos tu apoyo

Si te gusto este proyecto no dudes en hacermelo saber! cualquier critica constructiva que sea para mejorar el proyecto, no dudes en comentarla!