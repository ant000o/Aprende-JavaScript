// El objeto document
// document es el objeto principal que JavaScript nos da para interactuar con la página web. 
// Es tu punto de entrada al DOM.

console.log(document) // Muestra todo el documento HTML
console.log(document.title) // Título de la página
console.log(document.URL) // URL actual





// Métodos de Selección

// 1. querySelector() - El más versátil
// querySelector() es el método más moderno y flexible. Usa selectores CSS para encontrar elementos.

// Seleccionar por ID
const titulo = document.querySelector('#titulo')

// Seleccionar por clase
const descripcion = document.querySelector('.descripcion')

// Seleccionar por etiqueta
const primerParrafo = document.querySelector('p')

// Selectores más específicos
const botonEnHeader = document.querySelector('header button')
const primerLink = document.querySelector('a[href]')


// Selectores CSS comunes:
// ID (solo encuentra el primero)
document.querySelector('#mi-id')

// Clase (solo encuentra el primero)
document.querySelector('.mi-clase')

// Etiqueta (solo encuentra el primero)
document.querySelector('div')

// Atributo
document.querySelector('[data-id="123"]')
document.querySelector('input[type="email"]')

// Combinados
document.querySelector('div.mi-clase')
document.querySelector('#contenido p.destacado')

// Pseudo-selectores
document.querySelector('li:first-child')
document.querySelector('p:last-of-type')








// 2. querySelectorAll() - Seleccionar múltiples elementos
// Cuando necesites todos los elementos que coincidan con un selector:

// Seleccionar TODOS los párrafos
const todosLosParrafos = document.querySelectorAll('p')

// Seleccionar TODOS los elementos con una clase
const todosLosCards = document.querySelectorAll('.card')

// Seleccionar TODOS los links
const todosLosLinks = document.querySelectorAll('a')

console.log(todosLosParrafos.length) // Cantidad de párrafos encontrados

// Importante: querySelectorAll() devuelve una NodeList, no un array, pero puedes iterarla:

const botones = document.querySelectorAll('button')

// Iterar con forEach
botones.forEach(boton => {
  console.log(boton.textContent)
})

// Convertir a array si necesitas métodos de array
const arrayBotones = Array.from(botones)
const arrayBotones2 = [...botones] // Con spread operator


// Una NodeList
// querySelectorAll() devuelve una NodeList, 
// que es similar a un array pero no es exactamente un array. 
// Puedes iterarla con forEach pero no tiene métodos como map o filter.


// ¿Cómo conviertes la NodeList de querySelectorAll() en un array real?
// Con Array.from(lista) o usando el operador spread [...lista]
// Array.from(nodeList) o el operador spread crean un array real, lo que te permite usar métodos como map, filter o reduce.








// 3. getElementById() - Selección por ID
// Método clásico y rápido para seleccionar por ID:

// Sin el símbolo #
const titulo = document.getElementById('titulo')
const menu = document.getElementById('menu-principal')

// Diferencias con querySelector:

// ✅ Más rápido para IDs
// ❌ Solo funciona con IDs
// ❌ No acepta selectores CSS complejos





// 4. getElementsByClassName() - Selección por clase
// Sin el punto
const cards = document.getElementsByClassName('card')
const botonesPrimarios = document.getElementsByClassName('btn-primary')

// Devuelve una HTMLCollection (similar a NodeList)
console.log(cards.length)





// 5. getElementsByTagName() - Selección por etiqueta
const parrafos = document.getElementsByTagName('p')
const imagenes = document.getElementsByTagName('img')
const divs = document.getElementsByTagName('div')



















// Ejemplos Prácticos
// Ejemplo 1: Página de perfil de usuario

// Seleccionar elementos únicos
const nombreUsuario = document.querySelector('#nombre-usuario')
const avatar = document.querySelector('#avatar')
const email = document.querySelector('.email')

// Seleccionar múltiples elementos
const redesSociales = document.querySelectorAll('.red-social')
const todosLosParrafos = document.querySelectorAll('p')

// Selectores específicos
const twitterLink = document.querySelector('[data-red="twitter"]')
const primerParrafoDeInfo = document.querySelector('.informacion p')

// Mostrar información
console.log('Nombre:', nombreUsuario.textContent)
console.log('Email:', email.textContent)
console.log('Redes sociales encontradas:', redesSociales.length)














// Ejemplo 2: Lista de tareas
// Seleccionar contenedores principales
const app = document.querySelector('#todo-app')
const listaTareas = document.querySelector('#lista-tareas')
const botonAgregar = document.querySelector('#agregar-tarea')

// Seleccionar tareas
const todasLasTareas = document.querySelectorAll('.tarea')
const tareasCompletadas = document.querySelectorAll('.tarea.completada')
const tareasUrgentes = document.querySelectorAll('.tarea.urgente')

// Información útil
console.log('Total de tareas:', todasLasTareas.length)
console.log('Tareas completadas:', tareasCompletadas.length)
console.log('Tareas urgentes:', tareasUrgentes.length)

// Iterar sobre las tareas
todasLasTareas.forEach((tarea, index) => {
    console.log(`Tarea ${index + 1}: ${tarea.textContent}`)
})














// Verificar si un elemento existe
// Importante: Si un elemento no existe, los métodos devuelven null o colecciones vacías:

const elementoQueNoExiste = document.querySelector('#no-existe')
console.log(elementoQueNoExiste) // null

// Siempre verificar antes de usar
if (elementoQueNoExiste) {
  // Solo se ejecuta si el elemento existe
  console.log(elementoQueNoExiste.textContent)
} else {
  console.log('El elemento no fue encontrado')
}

// Forma más concisa
const titulo = document.querySelector('#titulo')
titulo?.classList.add('activo') // Solo se ejecuta si titulo existe












// Diferencias entre los métodos
// Método	                    Devuelve	                Velocidad	        Flexibilidad
// querySelector()	            Primer elemento o null	    Media	            ⭐⭐⭐⭐⭐
// querySelectorAll()	        NodeList	                Media	            ⭐⭐⭐⭐⭐
// getElementById()	            Elemento o null	            Rápida	            ⭐⭐
// getElementsByClassName()	    HTMLCollection	            Rápida	            ⭐⭐⭐
// getElementsByTagName()	    HTMLCollection	            Rápida	            ⭐⭐















// Buenas prácticas

// ✅ Hacer
// Usar querySelector para la mayoría de casos
const boton = document.querySelector('#mi-boton')

// Verificar que el elemento existe
if (boton) {
  // Trabajar con el elemento
}

// Usar nombres descriptivos para variables
const formularioContacto = document.querySelector('#formulario-contacto')
const listaProductos = document.querySelectorAll('.producto')

// Cachear elementos que usarás múltiples veces
const sidebar = document.querySelector('#sidebar')
// Usar sidebar múltiples veces...


// ❌ Evitar
// No seleccionar el mismo elemento repetidas veces
document.querySelector('#titulo').textContent = 'Nuevo título'
document.querySelector('#titulo').style.color = 'red' // ❌ Repetición

// Mejor: seleccionar una vez
const titulo = document.querySelector('#titulo')
titulo.textContent = 'Nuevo título'
titulo.style.color = 'red'

// No asumir que el elemento existe
const elemento = document.querySelector('#puede-no-existir')
elemento.textContent = 'Hola' // ❌ Error si elemento es null








// Consejos para debugging

// Ver qué elementos has seleccionado
const elementos = document.querySelectorAll('.mi-clase')
console.log('Elementos encontrados:', elementos.length)
console.log('Elementos:', elementos)

// Inspeccionar un elemento específico
const boton = document.querySelector('#mi-boton')
console.log('Botón:', boton)
console.log('Texto del botón:', boton?.textContent)
console.log('Clases del botón:', boton?.className)








// Resumen

// DOM es la representación JavaScript de una página web
// document es tu punto de entrada al DOM
// querySelector() es el método más versátil (usa selectores CSS)
// querySelectorAll() para seleccionar múltiples elementos
// Siempre verifica que el elemento existe antes de usarlo
// Cachea elementos que usarás múltiples veces

// En la próxima lección aprenderemos a modificar estos elementos que hemos seleccionado.