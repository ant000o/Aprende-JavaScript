// Modificar el contenido de elementos

// textContent - Solo texto
// textContent te permite leer y modificar solo el texto de un elemento, ignorando cualquier HTML:

const titulo = document.querySelector('#titulo')

// Leer el contenido
console.log(titulo.textContent) // "¡Hola Mundo!"

// Modificar el contenido
titulo.textContent = "¡Hola JavaScript!"
titulo.textContent = "Contador: " + contador
titulo.textContent = `Usuario: ${nombreUsuario}`

// Características de textContent:

// ✅ Seguro: No interpreta HTML, previene ataques XSS
// ✅ Rápido: Mejor rendimiento que innerHTML
// ❌ Solo texto: No puedes añadir HTML




// innerHTML - HTML completo
// innerHTML te permite leer y modificar el HTML completo dentro de un elemento:

const contenedor = document.querySelector('#contenedor')

// Leer el HTML
console.log(contenedor.innerHTML)

// Modificar con HTML
contenedor.innerHTML = '<p>Nuevo párrafo con <strong>texto en negrita</strong></p>'
contenedor.innerHTML = `
  <div class="card">
    <h3>${titulo}</h3>
    <p>${descripcion}</p>
    <button>Ver más</button>
  </div>
`

// ⚠️ Cuidado con innerHTML:

// ✅ Flexible: Puedes crear estructuras HTML complejas
// ❌ Riesgo de seguridad: Puede ejecutar scripts maliciosos
// ❌ Más lento: Tiene que parsear HTML



// ❌ Peligroso si userData viene del usuario
contenedor.innerHTML = `<p>Hola ${userData}</p>` 

// ✅ Mejor usar textContent para datos del usuario
contenedor.textContent = `Hola ${userData}`









// Modificar atributos

// getAttribute() y setAttribute()

const imagen = document.querySelector('#mi-imagen')
const enlace = document.querySelector('#mi-enlace')

// Leer atributos
console.log(imagen.getAttribute('src'))
console.log(imagen.getAttribute('alt'))
console.log(enlace.getAttribute('href'))

// Modificar atributos
imagen.setAttribute('src', 'nueva-imagen.jpg')
imagen.setAttribute('alt', 'Nueva descripción')
enlace.setAttribute('href', 'https://ejemplo.com')
enlace.setAttribute('target', '_blank')





// Propiedades directas
// Muchos atributos HTML tienen propiedades directas más cómodas de usar:

const input = document.querySelector('#email')
const checkbox = document.querySelector('#acepto-terminos')
const enlace = document.querySelector('#mi-enlace')

// Propiedades comunes
input.value = 'nuevo@email.com'
input.placeholder = 'Introduce tu email'
checkbox.checked = true
enlace.href = 'https://nueva-url.com'

// Atributos booleanos
input.disabled = true
input.required = false
checkbox.checked = true




// removeAttribute()
const imagen = document.querySelector('#imagen')

// Eliminar atributos
imagen.removeAttribute('width')
imagen.removeAttribute('height')

// Verificar si tiene un atributo
if (imagen.hasAttribute('data-id')) {
  console.log('La imagen tiene data-id')
}














// Modificar estilos CSS

// Propiedad style
// Puedes modificar estilos CSS directamente:

const caja = document.querySelector('#caja')

// Modificar estilos individuales
caja.style.backgroundColor = 'red'
caja.style.color = 'white'
caja.style.fontSize = '20px'
caja.style.margin = '10px'
caja.style.display = 'none' // Ocultar elemento

// Propiedades CSS con guiones se convierten a camelCase
caja.style.borderRadius = '10px' // border-radius
caja.style.textAlign = 'center'  // text-align

// Importante: Los estilos aplicados con style son inline y tienen alta prioridad.










// Trabajar con clases CSS
// Mejor práctica: Usar clases CSS en lugar de estilos inline:

/* En tu CSS */
// .destacado {
//   background-color: yellow;
//   font-weight: bold;
// }

// .oculto {
//   display: none;
// }

// .activo {
//   color: green;
//   border: 2px solid green;
// }





// classList - Manipular clases
const elemento = document.querySelector('#mi-elemento')

// Añadir clases
elemento.classList.add('destacado')
elemento.classList.add('activo', 'importante') // Múltiples clases

// Eliminar clases
elemento.classList.remove('oculto')
elemento.classList.remove('activo', 'destacado')

// Alternar clase (toggle)
elemento.classList.toggle('activo') // Si la tiene la quita, si no la tiene la pone

// Verificar si tiene una clase
if (elemento.classList.contains('activo')) {
  console.log('El elemento está activo')
}

// Reemplazar una clase por otra
elemento.classList.replace('viejo', 'nuevo')












// Crear elementos nuevos
// createElement()

// Crear un nuevo elemento
const nuevoParrafo = document.createElement('p')
const nuevaImagen = document.createElement('img')
const nuevoBoton = document.createElement('button')

// Configurar el elemento
nuevoParrafo.textContent = 'Este es un párrafo creado con JavaScript'
nuevoParrafo.classList.add('parrafo-dinamico')

nuevaImagen.src = 'imagen.jpg'
nuevaImagen.alt = 'Descripción de la imagen'

nuevoBoton.textContent = 'Click me'
nuevoBoton.classList.add('btn', 'btn-primary')




// Añadir elementos al DOM
// appendChild() - Añadir al final
const contenedor = document.querySelector('#contenedor')
const lista = document.querySelector('#mi-lista')

// Añadir al final del contenedor
contenedor.appendChild(nuevoParrafo)
contenedor.appendChild(nuevaImagen)

// Crear y añadir un elemento de lista
const nuevoItem = document.createElement('li')
nuevoItem.textContent = 'Nuevo elemento de lista'
lista.appendChild(nuevoItem)





// insertBefore() - Insertar en posición específica
const lista = document.querySelector('#lista')
const primerItem = lista.querySelector('li')

const nuevoItem = document.createElement('li')
nuevoItem.textContent = 'Insertado al principio'

// Insertar antes del primer elemento
lista.insertBefore(nuevoItem, primerItem)

// Insertar antes de null = insertar al final (como appendChild)
lista.insertBefore(otroItem, null)






// insertAdjacentHTML() - Insertar HTML en posiciones específicas
const elemento = document.querySelector('#elemento')

// beforebegin: antes del elemento
elemento.insertAdjacentHTML('beforebegin', '<p>Antes del elemento</p>')

// afterbegin: al principio del contenido del elemento
elemento.insertAdjacentHTML('afterbegin', '<span>Al principio</span>')

// beforeend: al final del contenido del elemento
elemento.insertAdjacentHTML('beforeend', '<span>Al final</span>')

// afterend: después del elemento
elemento.insertAdjacentHTML('afterend', '<p>Después del elemento</p>')










// Eliminar elementos

// remove() - Eliminar el elemento
const elemento = document.querySelector('#elemento-a-eliminar')

// Eliminar el elemento completamente
elemento.remove()



// removeChild() - Eliminar hijo
const contenedor = document.querySelector('#contenedor')
const elementoAEliminar = document.querySelector('#hijo-a-eliminar')

// Eliminar un hijo específico
contenedor.removeChild(elementoAEliminar)


















// Ejemplos prácticos
// Ejemplo 1: Contador interactivo
let contador = 0

// Seleccionar elementos
const numeroElement = document.querySelector('#numero')
const btnIncrementar = document.querySelector('#incrementar')
const btnDecrementar = document.querySelector('#decrementar')
const btnReset = document.querySelector('#reset')

// Función para actualizar la visualización
function actualizadorContador() {
    numeroElement.textContent = contador

    // Cambiar color según el valor
    if (contador > 0) {
        numeroElement.style.color = 'green'
    } else if (contador < 0) {
        numeroElement.style.color = 'red'
    } else {
        numeroElement.style.color = 'black'
    }
}


// Event listeners
btnIncrementar.addEventListener('click', () => {
    contador++
    actualizadorContador()
})

btnDecrementar.addEventListener('click', () => {
    contador--
    actualizadorContador()
})

btnReset.addEventListener('click', () => {
    contador = 0
    actualizadorContador()
})













// Ejemplo 2: Lista de tareas dinámica

// Seleccionar elementos
const input = document.querySelector('#nueva-tarea')
const btnAgregar = document.querySelector('#agregar')
const listaTareas = document.querySelector('#lista-tareas')

// Función para agregar tareas
function agregarTarea() {
    const textoTarea = input.value.trim()

    if (textoTarea === '') {
        alert('Por favor, escribe una tarea')
        return
    }

    
    // Crear elementos
    const li = document.createElement('li')
    const span = document.createElement('span')
    const btnEliminar = createElement('button')


    // Configurar elementos
    span.textContent = textoTarea
    btnEliminar.textContent = 'Eliminar'
    btnEliminar.classList.add('btn-eliminar')


    // Ensamblar la tarea
    li.appendChild(span)
    li.appendChild(btnEliminar)

    // Agregar a la lista
    listaTareas.appendChild(li)


    // Limpiar input
    input.value = ''


    // Event listener para eliminar
    btnEliminar.addEventListener('click', () => {
        li.remove()
    })
}

// Event listener para agregar 
btnAgregar.addEventListener('click', agregarTarea)

// Agregar con Enter
input.addEventListener('keypress', (e) => {
    if (e.key === 'Eneter') {
        agregarTarea()
    }
})













// Ejemplo 3: Cambiar tema de la página
const btnToggleTheme = document.querySelector('#toggle-theme')
const body = document.body

// Estado del tema
let temaOscuro = false

btnToggleTheme.addEventListener('click', () => {
    temaOscuro = !temaOscuro

    if (temaOscuro) {
        body.classList.add('dark-theme')
        btnToggleTheme.textContent = '☀️ Modo Claro'
    } else {
        body.classList.remove('dark-theme')
        btnToggleTheme.textContent = '🌙 Modo Oscuro'
    }
})























// Buenas prácticas

// ✅ Hacer
// Usar textContent para texto simple
elemento.textContent = textoDelUsuario

// Usar classList para manipular clases
elemento.classList.add('activo')

// Crear elementos paso a paso para mayor claridad
const card = document.createElement('div')
card.classList.add('card')
card.innerHTML = `
  <h3>${titulo}</h3>
  <p>${descripcion}</p>
`

// Verificar que el elemento existe
const elemento = document.querySelector('#mi-elemento')
if (elemento) {
  elemento.textContent = 'Nuevo texto'
}



// ❌ Evitar
// No usar innerHTML para datos del usuario (riesgo XSS)
elemento.innerHTML = `<p>Hola ${datosDelUsuario}</p>` // ❌ Peligroso

// No manipular estilos inline excesivamente
elemento.style.color = 'red'
elemento.style.fontSize = '20px'
elemento.style.margin = '10px'
// ❌ Mejor usar clases CSS

// No crear elementos con innerHTML cuando puedes usar createElement
contenedor.innerHTML += '<p>Nuevo párrafo</p>' // ❌ Recrea todo el contenido






// Resumen

// textContent: Para modificar solo texto (más seguro)
// innerHTML: Para modificar HTML completo (cuidado con la seguridad)
// setAttribute()/getAttribute(): Para manipular atributos
// classList: Para trabajar con clases CSS (mejor práctica)
// createElement(): Para crear nuevos elementos
// appendChild(): Para añadir elementos al DOM
// remove(): Para eliminar elementos