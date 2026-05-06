// ¿Qué son los eventos?

import { act } from "react"

// Un evento es algo que sucede en la página web:

// 👆 El usuario hace click en un botón
// ⌨️ El usuario escribe en un input
// 🖱️ El usuario mueve el mouse sobre un elemento
// 📋 El usuario envía un formulario
// 🔄 La página termina de cargar

// Los eventos son la base de la interactividad en las páginas web.




// Event Listeners con addEventListener()

// addEventListener() es el método moderno y recomendado para escuchar eventos:

// elemento.addEventListener('tipoDeEvento', funcionQueSeEjecuta)


// Ejemplo básico
<button id="mi-boton">¡Haz click!</button>
const boton = document.querySelector('#mi-boton')

// Escuchar el evento 'click'
boton.addEventListener('click', function() {
  console.log('¡Botón clickeado!')
})

// Con arrow function (más común)
boton.addEventListener('click', () => {
  console.log('¡Botón clickeado!')
})









// Tipos de eventos comunes

// Eventos de Mouse
// click - Click del mouse
const boton = document.querySelector('#boton')

boton.addEventListener('click', () => {
  console.log('Click en el botón')
})

// dblclick - Doble click
const imagen = document.querySelector('#imagen')

imagen.addEventListener('dblclick', () => {
  console.log('Doble click en la imagen')
})

// mouseenter y mouseleave - Entrar y salir con el mouse
const caja = document.querySelector('#caja')

caja.addEventListener('mouseenter', () => {
  caja.style.backgroundColor = 'lightblue'
  console.log('Mouse entró en la caja')
})

caja.addEventListener('mouseleave', () => {
  caja.style.backgroundColor = 'white'
  console.log('Mouse salió de la caja')
})





// Eventos de Teclado
// keydown - Cuando se presiona una tecla
const input = document.querySelector('#mi-input')

input.addEventListener('keydown', (evento) => {
  console.log('Tecla presionada:', evento.key)
  
  if (evento.key === 'Enter') {
    console.log('Se presionó Enter')
  }
})

// keyup - Cuando se suelta una tecla
input.addEventListener('keyup', (evento) => {
  console.log('Tecla soltada:', evento.key)
  console.log('Valor actual del input:', input.value)
})






// Eventos de Formulario
// submit - Envío de formulario
const formulario = document.querySelector('#mi-formulario')

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault() // Evita que se recargue la página
  
  console.log('Formulario enviado')
  // Aquí puedes procesar los datos del formulario
})

// input - Cambio en input (en tiempo real)
const input = document.querySelector('#busqueda')

input.addEventListener('input', () => {
  console.log('Usuario escribiendo:', input.value)
  // Ideal para búsquedas en tiempo real
})

// change - Cambio en input (cuando pierde el foco)
const select = document.querySelector('#pais')

select.addEventListener('change', () => {
  console.log('País seleccionado:', select.value)
})





// Eventos de Ventana
// load - Cuando la página termina de cargar
window.addEventListener('load', () => {
  console.log('Página completamente cargada')
})

// resize - Cuando se redimensiona la ventana
window.addEventListener('resize', () => {
  console.log('Ventana redimensionada')
  console.log('Nuevo ancho:', window.innerWidth)
  console.log('Nueva altura:', window.innerHeight)
})










// El objeto Event
// Cuando ocurre un evento, JavaScript crea un objeto Event con información útil:
boton.addEventListener('click', (evento) => {
  console.log('Objeto evento:', evento)
  console.log('Tipo de evento:', evento.type)        // 'click'
  console.log('Elemento que disparó:', evento.target) // El botón
  console.log('Posición X:', evento.clientX)         // Posición del click
  console.log('Posición Y:', evento.clientY)
})






// Propiedades útiles del objeto Event
input.addEventListener('keydown', (evento) => {
  console.log('Tecla:', evento.key)           // Tecla presionada
  console.log('Código:', evento.code)         // Código físico de la tecla
  console.log('Ctrl presionado:', evento.ctrlKey)  // true/false
  console.log('Shift presionado:', evento.shiftKey) // true/false
  console.log('Alt presionado:', evento.altKey)     // true/false
})


// preventDefault() - Prevenir comportamiento por defecto
const enlace = document.querySelector('#mi-enlace')

enlace.addEventListener('click', (evento) => {
  evento.preventDefault() // Evita que el enlace navegue
  console.log('Click en enlace, pero no navega')
})

const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault() // Evita que se recargue la página
  console.log('Formulario procesado sin recargar')
})
















// Ejemplos prácticos
// Ejemplo 1: Contador interactivo completo

// Estado
let contador = 0

// Seleccionar elementos
const numeroElement = document.querySelector('#numero')
const btnIncrementar = document.querySelector('#incrementar')
const btnDecrementar = document.querySelector('#decrementar')
const btnReset = document.querySelector('#reset')
const inputPaso = document.querySelector('#paso')

// Función para actualizar la UI
function actualizarContador() {
    numeroElement.textContent = contador
    
    // Cambiar color según valor
    numeroElement.className = ''    // Limpiar clases
    if (contador > 0) {
        numeroElement.classList.add('positivo')
    } else if (contador < 0) {
        numeroElement.classList.add('negativo')
    }
}

// Event listeners
btnIncrementar.addEventListener('click', () => {
    const paso = parseInt(inputPaso.value) || 1
    contador += paso
    actualizarContador()
})

btnIncrementar.addEventListener('click', () => {
    const paso = parseInt(inputPaso.value) || 1
    contador -= paso
    actualizarContador()
})

btnIncrementar.addEventListener('click', () => {
    contador = 0
    actualizarContador()
})


// Atajos de teclado
document.addEventListener('keydown', (evento) => {
    if (evento.key === 'ArrowUp') {
        evento.preventDefault()
        contador++
        actualizarContador()
    } else if (evento.key === 'ArrowDown') {
        evento.preventDefault()
        contador--
        actualizarContador()
    } else if (evento.key === 'r' || evento.key === 'R') {
        contador = 0
        actualizarContador()
    }
})















// Ejemplo 2: Validación de formulario en tiempo real

// Seleccionar elementos
const formulario = document.querySelector('#formulario-registro')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const confirmarInput = document.querySelector('#confirmar-password')
const btnEnviar = document.querySelector('#btn-enviar')

// Elementos de error
const errorEmail = document.querySelector('#error-email')
const errorPassword = document.querySelector('#error-password')
const errorConfirmar = document.querySelector('#error-confirmar')

// Estado de validación
let validacion = {
    email: false,
    password: false,
    confirmar: false
}

// Función para actualizar el botón de envío
function actualizarBotonEnvio() {
    const todoValido = Object.values(validacion).every(valido => valido)
    btnEnviar.disabled = !todoValido
}

// Validar email
emailInput.addEventListener('input', () => {
    const email = emailInput.value
    const esValido = email.includes('@') && email.includes('.')

    if (email.length === 0) {
        errorEmail.textContent = ''
        validacion.email = false
    } else if (esValido) {
        errorEmail.textContent = ''
        errorEmail.style.color = 'green'
        errorEmail.textContent = '✓ Email válido'
        validacion.email = true
    } else {
        errorEmail.style.color = 'red'
        errorEmail.textContent = '✗ Email no válido'
        validacion.email = false
    }

    actualizarBotonEnvio()
})


// Validar contraseña
passwordInput.addEventListener('input', () => {
    const password = passwordInput.value
    const esValida = password.length >= 6

    if (password.length === 0) {
        errorPassword.textContent = ''
        validacion.password = false
    } else if (esValida) {
        errorPassword.style.color = 'green'
        errorPassword.textContent = '✓ Contraseña válida'
        validacion.password = true
    } else {
        errorPassword.style.color = 'red'        
        errorPassword.textContent = '✗ Mínimo 6 caracteres'
        validacion.password = false
    }

    // Re-validar confirmación si ya tiene contenido
    if (confirmarInput.value.length > 0) {
        confirmarInput.dispatchEvent(new Event('input'))
    }

    actualizarBotonEnvio()
})

// Validar confirmación de contraseña
confirmarInput.addEventListener('input',() => {
    const confirmar = confirmarInput.value
    const password = passwordInput.value
    const coinciden = confirmar === password && confirmar.length > 0

    if (confirmar.length === 0) {
        errorConfirmar.textContent = ''
        validacion.confirmar = false
    } else if (coinciden) {
        errorConfirmar.style.color = 'green'
        errorConfirmar.textContent = '✓ Contraseñas coinciden'
        validacion.confirmar = true
    } else {
        errorConfirmar.style.color = 'red'
        errorConfirmar.textContent = '✗ Las contraseñas no coinciden'
        validacion.confirmar = false
    }

    actualizarBotonEnvio()
})

// Manejar envío del formulario
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()

    console.log('Formulario válido enviado:');
    console.log('Email:', emailInput.value);
    console.log('Password:', passwordInput.value);
    
    // Aquí harías la petición al servidor
    alert('¡Registro exitoso!')
})















// Ejemplo 3: Galería de imágenes interactiva
// Seleccionar Elementos
const imagenGrande = document.querySelector('#imagen-grande')
const miniaturas = document.querySelector('#miniatura')
const btnAnterior = document.querySelector('#anterior')
const btnSiguiente = document.querySelector('#imagen-grande')

let imagenActual = 0

// Función para cambiar imagen
function cambiarImagen(indice) {
    // Actualizar imagen grande
    imagenGrande.src = miniaturas[indice].dataset.src
    imagenGrande.alt = miniaturas[indice].alt

    // Actualizar clases activas
    miniaturas.forEach(mini => mini.classList.remove('activa'))
    miniaturas[indice].classList.add('activa')

    // Actualizar indice actual
    imagenActual = indice
}

// Botones de navegación
btnAnterior.addEventListener('click', () => {
    const nuevoIndice = imagenActual === 0 ? miniaturas.length - 1 : imagenActual - 1
    cambiarImagen(nuevoIndice)
})

btnSiguiente.addEventListener('click', () => {
    const nuevoIndice = imagenActual === miniaturas.length - 1 ? 0 : imagenActual + 1
    cambiarImagen(nuevoIndice)
})

// Navegación con teclado
document.addEventListener('keydown', (evento) => {
    if (evento.key === 'ArrowLeft') {
        btnAnterior.click()
    } else if (evento.key === 'ArrowRight') {
        btnSiguiente.click()
    }
})



















// Event Delegation (Delegación de Eventos)
// Cuando tienes muchos elementos similares, en lugar de añadir un event listener a cada uno, puedes usar delegación:

{/* 
  <ul id="lista-tareas">
    <li>Tarea 1 <button class="eliminar">X</button></li>
    <li>Tarea 2 <button class="eliminar">X</button></li>
    <li>Tarea 3 <button class="eliminar">X</button></li>
    <!-- Se pueden añadir más dinámicamente -->
  </ul> 
*/}


const lista = document.querySelector('#lista-tareas')

// Un solo event listener en el contenedor padre
lista.addEventListener('click', (evento) => {
  // Verificar si se clickeó un botón de eliminar
  if (evento.target.classList.contains('eliminar')) {
    const tarea = evento.target.parentElement
    tarea.remove()
  }
})

// Añadir nuevas tareas dinámicamente
function agregarTarea(texto) {
  const li = document.createElement('li')
  li.innerHTML = `${texto} <button class="eliminar">X</button>`
  lista.appendChild(li)
  // ¡El event listener ya funciona automáticamente!
}





// Remover Event Listeners
function manejarClick() {
  console.log('Click manejado')
}

const boton = document.querySelector('#boton')

// Añadir
boton.addEventListener('click', manejarClick)

// Remover (debe ser la misma función)
boton.removeEventListener('click', manejarClick)








// Buenas prácticas
// ✅ Hacer
// Usar addEventListener (método moderno)
boton.addEventListener('click', manejarClick)

// Usar arrow functions para funciones simples
boton.addEventListener('click', () => {
  console.log('Click simple')
})

// Usar preventDefault cuando sea necesario
formulario.addEventListener('submit', (evento) => {
  evento.preventDefault()
  // Procesar formulario
})

// Delegación para elementos dinámicos
contenedor.addEventListener('click', (evento) => {
  if (evento.target.matches('.boton-dinamico')) {
    // Manejar click
  }
})



// ❌ Evitar
// No usar onclick (método antiguo)
boton.onclick = manejarClick // ❌ Solo permite un listener

// No crear funciones anónimas si necesitas removerlas
boton.addEventListener('click', function() {
  console.log('No se puede remover')
}) // ❌ No se puede remover después

// No añadir muchos listeners iguales
elementos.forEach(elemento => {
  elemento.addEventListener('click', mismaFuncion) // ❌ Ineficiente
})






// Resumen

// Eventos: Acciones que ocurren en la página (click, keydown, submit, etc.)
// addEventListener(): Método moderno para escuchar eventos
// Objeto Event: Contiene información útil sobre el evento
// preventDefault(): Previene el comportamiento por defecto
// Event Delegation: Técnica eficiente para elementos dinámicos
// Los eventos son la clave para crear páginas interactivas y dinámicas