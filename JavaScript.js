document.addEventListener("DOMContentLoaded", () => {
//SELECTORES

    //Seleccionar eleemnto por medio de la clase
  const botonHeader = document.querySelector(".header__boton");
  //Cambiar o adicionar texto a un elemento
  botonHeader.textContent = "Haz clic aquí";
  //Evento de que al hacer doble click, se cree una clase que tenga estilos CSS
  botonHeader.addEventListener("dblclick",() =>{
    botonHeader.classList.add("header__boton-click")
  });
  //Poner nombre de clase a un elemento
  botonHeader.className = "Botoncito"
  //Mostrar la clase a consola
  console.log(botonHeader.className)
   //Poner nombre de clase a un elemento
  botonHeader.className = "header__boton"
   //Mostrar la clase a consola
  console.log(botonHeader.className)

  //ATRIBUTOS GLOBALES

  //Hacer editable un elemento 
  const subtitulo = document.querySelector(".header__subtitulo")
  subtitulo.contentEditable = false ;
  //Hacer que este escrito en otra direccion
  subtitulo.dir = "ltr"

  //Ocultar elemento
  const video = document.querySelector(".contenido-principal__video")
  

  //Definir orden de aparicion de TAB
  //Aplicar estilos a varios elementos que pertenecen a un node.list
  const elementosNavegacion = document.querySelectorAll(".header__navegacion-enlace")
  if(elementosNavegacion.length >=2){
    for(let i= 0; i< elementosNavegacion.length; i++){
        numeroElemento = elementosNavegacion[i]
        numeroElemento.tabIndex = 0;
        numeroElemento.title = "Click para mas informacion"
    }
    
  }

  //ATRIBUTOS DE INPUTS

  const input = document.getElementById("input")
  //Renombrar clase elemento
  input.className = "inputFooter"
  //Definir un valor por defecto al input
  input.value = ""
  console.log(input.value)
  //Definir tipo de input
  input.type = "text"
  //Definir el tipo de archivo a recibir
  input.type = 'file'
  input.accept = '.pdf'
  //Definir tipo de input
  input.type = "password"
  input.setAttribute("minlength","4")
  //Hacer obligatorio o no
  input.required = true;


  //CLASS LIST Y METODOS

  //Poner clase a un elemento
  const botonInput = document.getElementById("botonRandom")
  botonInput.classList.add("botonInput")
  console.log(botonInput.className)

  //Muestra nombre de la clase segun su posicion en lista
  console.log(numeroElemento.classList.item(1))

 //Reemplazar una clase por otra de un  elemento

  botonInput.classList.replace('botonInput',"botonRandom")

  //Verifica si elemento tiene el nombre de esa clase
  console.log(botonInput.classList.contains("botonRandom"))

  //Agregar clase si no existe, si ya existe QUITARLA

  botonInput.classList.toggle("botonDinamico")
  botonInput.classList.remove("botonRandom")
  console.log(botonInput.className)

  //Crear un elemento de un contenedor
  const nuevoSubtitulo = document.createElement("h2")
  nuevoSubtitulo.textContent = "Redes Sociales"

  const contenedorFooter = document.querySelector(".footer__seccion-derecha")
  contenedorFooter.appendChild(nuevoSubtitulo)

  //Obtencion de Elementos Child()

  const listaNavegacion = document.querySelector(".header__navegacion-lista")
  console.log(listaNavegacion.firstElementChild.textContent)
  //Seleccionar ultimo hijo
  console.log(listaNavegacion.lastElementChild.textContent)
  //Seleccionar toda la info de hijos
  console.log(listaNavegacion.childNodes)
  //SABER SOLO LISTA HTML de hijos
  console.log(listaNavegacion.children)

  //Metodos de un Child()

  //Remplazar Child

  const nuevoChild = document.createElement("li")
  nuevoChild.textContent = "Nuevo Child"
  const antiguoChild = listaNavegacion.children[4]
  

  //RemoveChild 

  listaNavegacion.removeChild(antiguoChild)
  console.log(listaNavegacion.children)

  //HasChild

  console.log(listaNavegacion.hasChildNodes())

  //ParentElement

  const subtituloHeader = document.querySelector(".header__subtitulo")
  console.log(subtituloHeader.parentElement)

  //previousSibling
  console.log(subtituloHeader.previousElementSibling)

  //nextElementSibling
  console.log(subtituloHeader.nextElementSibling)


  //SECCION WINDOW

  //open

  //let nuevaPestana = window.open("https://google.com.co")

  //Close
 //nuevaPestana.close()

 //verificar closed

 //console.log(nuevaPestana.closed)

 //Detener carga de pagina

 //nuevaPestana.stop

 //mostrar recuadro en pestana

 /*window.alert("Bienvenido")

 //Imprimir pagina
 window.print()

 //pedir input 

 /let nombreUsuario = window.prompt("Digita tu nombre de usuario")
 //Confimrar input
 let verificacion = window.confirm("Estas seguro que ese es tu nombre?")
 if(verificacion)
    alert(`Hola ${nombreUsuario}`)
else{
    alert("Acceso denegado a la pagina")
    window.close()
    window.stop()    
}*/

//saber direccion actual
console.log(location.href)

//redirigir a otra pagina
//location.href = "www.spotify.com"

//saber el dominio en el que estoy
console.log(location.hostname)

//saber la ruta exacta en la que estoy

console.log(location.pathname)

//saber el protocolo en el que estoy
console.log(location.protocol)

//Seleccionar elelemnto por su clase
const barraBusqueda = document.querySelector(".header__barra-busqueda")
barraBusqueda.placeholder = "Escribe tu busqueda aca"
//Ver el tipo de atributo que es ele elemento
console.log(barraBusqueda.getAttribute("type"))
//Quitar placeholder
barraBusqueda.removeAttribute("placeholder")
//Definir atributo con valor al atributo
barraBusqueda.setAttribute("placeholder","Buscar aca")
//Seleccionar y definir nuevo atributo de tipo href a un elemento de navegacion
const primerElementoNavegacion = document.querySelector(".header__navegacion-enlace")
primerElementoNavegacion.setAttribute("href","https://youtube.com")

//EVENTOS

botonHeader.addEventListener("click", function(){
    botonHeader.style.backgroundColor = "green"
})

const apartadoSecciones = document.querySelector(".header__caminos")
const primerBotonSecciones = apartadoSecciones.firstElementChild
console.log(primerBotonSecciones)



//Stop Propagation (Detener disparadores de eventos despues de este)
primerBotonSecciones.addEventListener("click",function(e){
    e.stopPropagation(); //ESTO ES PIEZA CLAVE DEL STOP PROPAGATION
    console.log("Tipo de evento ocurrido:" + e.type)
    console.log("Elemnto Objetivo:" + e.target)
});

const segundoBotonSeccion = document.querySelector('.header__caminos :nth-child(3)');
segundoBotonSeccion.addEventListener("mouseover", (e)=>   {
    segundoBotonSeccion.style.backgroundColor = "blue"
    console.log("Lo que ocurrio: "+ e.type)
})

  console.log(botonInput.className)

  botonInput.addEventListener("keyup",function(e){
    botonInput.backgroundColor = "green"
    console.log("TECLA PRESIONADA:" + e.key)
  });



window.addEventListener("load",function(e){
    console.log("Se ha cargado correctamente:")

    console.log(e.type)
  });

  window.addEventListener("beforeunload",function(e){
    console.log("MENSAJEEE")

    console.log(e.type)
  });

  window.addEventListener("resize",function(e){
    console.log("Se cambio el tamanio de pagina"+ e.type)
  })

  window.addEventListener("scroll",()=>{
    console.log("Se ha hecho scroll")
  })

  //SET TIMERS, CLEAR TIMERS, SET INTERVAL TIMERS, CLEAR INTERVAL

  //APARECER ELEMENTO despues de 3 segundos
video = setTimeout(()=>{
    video.hidden= false;
},3000);    

//DESPUES PONER CLEAR TIME OUT, DEPUES PONER SET INTERVAL, despues poner Clear Interval

























});