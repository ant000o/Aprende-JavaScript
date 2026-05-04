// Patrones y Buenas Prácticas

// Ya sabes cómo funcionan export, import y las importaciones dinámicas. 
// Ahora vamos a ver cómo organizar tu código en un proyecto real usando módulos de forma efectiva.

// Estructura de un proyecto con módulos
// Un proyecto bien organizado separa el código por responsabilidad. Cada archivo hace una cosa:

// mi-proyecto/
// ├── index.html
// ├── main.js              ← Punto de entrada
// ├── utils/
// │   ├── index.js         ← Barrel file (re-exporta todo)
// │   ├── formatear.js
// │   ├── validar.js
// │   └── fecha.js
// ├── servicios/
// │   ├── index.js
// │   ├── api.js
// │   └── auth.js
// └── componentes/
//     ├── index.js
//     ├── header.js
//     └── footer.js



// Cada carpeta tiene un index.js que re-exporta todo lo de esa carpeta. Esto se llama patrón barrel file.






// Barrel Files (archivos barril)
// Un barrel file es un archivo index.js que agrupa y re-exporta las exportaciones de todos los módulos de una carpeta:

// utils/formatear.js
export function formatearFecha(fecha) {
  return fecha.toLocaleDateString('es-ES')
}

export function formatearMoneda(cantidad) {
  return cantidad.toFixed(2) + ' €'
}



// utils/validar.js
export function esEmailValido(email) {
  return email.includes('@') && email.includes('.')
}

export function esNumeroPositivo(n) {
  return typeof n === 'number' && n > 0
}



// utils/index.js — El barrel file
export { formatearFecha, formatearMoneda } from './formatear.js'
export { esEmailValido, esNumeroPositivo } from './validar.js'

// Ahora puedes importar todo desde un solo punto:

// main.js — Sin barrel file (verboso)
import { formatearFecha } from './utils/formatear.js'
import { esEmailValido } from './utils/validar.js'

// main.js — Con barrel file (limpio)
import { formatearFecha, esEmailValido } from './utils/index.js'



// Ventajas de los barrel files
// ✅ Imports más limpios: una sola ruta en lugar de varias.
// ✅ Refactorización fácil: si mueves un archivo dentro de la carpeta, solo cambias el barrel file.
// ✅ API pública clara: defines qué es público y qué es interno.

// Cuándo NO usar barrel files
// ❌ Si la carpeta tiene un solo archivo: no necesitas un barrel file.
// ❌ Si re-exportas cientos de cosas: puede causar que se cargue más código del necesario.



// ⚠️ Cuidado: los peligros de los barrel files





// Aunque los barrel files son populares, pueden causar problemas serios en proyectos reales. Es importante que conozcas los riesgos antes de usarlos:

// 1. Destrozan el tree shaking

// Cuando importas una sola función desde un barrel file, 
// el bundler puede acabar cargando todo lo que ese archivo re-exporta:

// Solo necesitas formatearFecha, pero...
import { formatearFecha } from './utils/index.js'

// ...el bundler puede cargar TAMBIÉN validar.js,
// calcular.js y todo lo demás que re-exporte index.js


// Esto hace que tu aplicación pese más de lo necesario. 
// Bundlers como Webpack han mejorado, pero no siempre pueden optimizar esto correctamente, 
// especialmente si los módulos tienen efectos secundarios (código que se ejecuta al importar).





// 2. Tiempos de compilación más lentos

// En proyectos grandes, los barrel files obligan al bundler a procesar todos los módulos 
// de una carpeta cada vez que alguien importa de ella. 
// Si tienes barrel files anidados (un barrel que importa de otro barrel), el problema se multiplica:

// ❌ Barrel files anidados: cada import dispara una cadena
// components/index.js → re-exporta de 50 componentes
// pages/index.js → importa de components/index.js
// app.js → importa de pages/index.js
// Resultado: el bundler procesa TODOS los archivos aunque solo uses uno





// 3. Facilitan las dependencias circulares

// Al concentrar todas las exportaciones en un solo punto, es más fácil crear ciclos sin darte cuenta:

// utils/index.js re-exporta formatear.js y calcular.js
// Si calcular.js importa de utils/index.js para usar formatear...
// ¡Dependencia circular! calcular.js → index.js → calcular.js





// 4. Dificultan encontrar el origen del código

// Cuando todo se importa desde ./utils, pierdes la pista de dónde está realmente cada función. 
// En un proyecto pequeño no importa, pero en uno grande con decenas de archivos, navegar el código se vuelve más difícil.

// ¿Cuál es la alternativa? En muchos casos es mejor importar directamente desde el archivo que contiene la función:

// En lugar de pasar por el barrel file:
import { formatearFecha } from './utils/index.js'

// Importa directamente del archivo origen:
import { formatearFecha } from './utils/formatear.js'

// Es un poco más verboso, pero tu código compila más rápido, pesa menos y es más fácil de rastrear.

// Nota
// 💡 Consejo: usa barrel files solo en carpetas pequeñas con pocos módulos y sin efectos secundarios. 
// Para proyectos grandes, las importaciones directas suelen ser mejor opción.













// Un módulo, una responsabilidad
// Cada módulo debería tener una responsabilidad clara. Si un archivo hace demasiadas cosas, divídelo:

// ❌ Mal: un archivo que hace de todo
// mega-utils.js
export function formatearFecha(fecha) { /* ... */ }
export function validarEmail(email) { /* ... */ }
export function calcularIVA(precio) { /* ... */ }
export function enviarFormulario(datos) { /* ... */ }
export function animarElemento(elem) { /* ... */ }

// ✅ Bien: cada archivo con su responsabilidad
// utils/formatear.js → Funciones de formato
// utils/validar.js   → Funciones de validación
// utils/calcular.js  → Funciones de cálculo
// servicios/api.js   → Comunicación con el servidor
// ui/animaciones.js  → Animaciones








// Convenciones de nombrado

// Archivos
// mi-funcion.js       ← kebab-case para archivos de utilidades
// MiClase.js          ← PascalCase para archivos que exportan una clase


// Exportaciones

// Funciones y variables: camelCase
export function calcularTotal(items) { /* ... */ }
export const precioBase = 9.99

// Clases: PascalCase
export class CarritoCompra { /* ... */ }

// Constantes fijas: SCREAMING_SNAKE_CASE
export const MAX_INTENTOS = 3
export const API_URL = 'https://api.ejemplo.com'












// Patrón: módulos de configuración
// Centraliza la configuración en un módulo que otros importan:

// config.js
export const CONFIG = {
  apiUrl: 'https://api.ejemplo.com',
  maxIntentos: 3,
  timeout: 5000,
  idioma: 'es'
}


// servicios/api.js
import { CONFIG } from '../config.js'

export async function obtenerDatos(endpoint) {
  const respuesta = await fetch(CONFIG.apiUrl + endpoint)
  return respuesta.json()
}

// Si mañana cambia la URL de la API, solo tocas config.js.














// Patrón: módulo fachada (Facade)
// Crea un módulo que simplifica una API compleja exponiendo solo lo necesario:

// almacenamiento.js
// Fachada que simplifica el uso de localStorage

export function guardar(clave, valor) {
  localStorage.setItem(clave, JSON.stringify(valor))
}

export function leer(clave) {
  const valor = localStorage.getItem(clave)
  return valor ? JSON.parse(valor) : null
}

export function eliminar(clave) {
  localStorage.removeItem(clave)
}


// app.js
import { guardar, leer } from './almacenamiento.js'

guardar('usuario', { nombre: 'Ana', edad: 25 })
const usuario = leer('usuario')
console.log(usuario.nombre) // 'Ana'

// Si mañana decides cambiar localStorage por otra tecnología, solo cambias almacenamiento.js.










// Errores habituales al trabajar con módulos

// 1. Dependencias circulares
// Ocurre cuando el módulo A importa de B, y B importa de A:

// ❌ Dependencia circular
// a.js
import { b } from './b.js'
export const a = 'A usa ' + b

// b.js
import { a } from './a.js'
export const b = 'B usa ' + a // 💥 'a' puede ser undefined

// Solución: reorganiza el código para romper el ciclo. Mueve lo compartido a un tercer módulo:

// ✅ Sin dependencia circular
// compartido.js
export const valorBase = 'base'

// a.js
import { valorBase } from './compartido.js'
export const a = 'A: ' + valorBase

// b.js
import { valorBase } from './compartido.js'
export const b = 'B: ' + valorBase




// 2. Olvidar la extensión del archivo
// En el navegador, necesitas la extensión en las rutas de importación:

// ❌ Error en el navegador (sin extensión)
import { sumar } from './operaciones'

// ✅ Correcto en el navegador
import { sumar } from './operaciones.js'

// Nota
// 💡 En proyectos con bundlers (como Vite, Webpack) generalmente puedes omitir la extensión, porque el bundler la resuelve por ti.




// 3. Importar sin usar
// ❌ Importas algo que no usas
import { sumar, restar, multiplicar } from './operaciones.js'
console.log(sumar(2, 3)) // Solo usas sumar

// ✅ Importa solo lo que necesitas
import { sumar } from './operaciones.js'
console.log(sumar(2, 3))

// Las herramientas modernas (tree shaking) pueden eliminar las importaciones no usadas, pero es mejor ser explícito.












// Ejemplo completo: un mini proyecto
// Veamos cómo se organiza un pequeño proyecto usando todo lo que hemos aprendido:

// config.js
export const API_URL = 'https://jsonplaceholder.typicode.com'


// servicios/api.js
import { API_URL } from "../config.js";

export async function obtenerUsuarios() {
    const respuesta = await fetch(`${API_URL}/users`)
    return respuesta.json()
}

export async function obtenerUsuario(id) {
    const respuesta = await fetch(`${API_URL}/users/${id}`)
    return respuesta.json()
}


// utils/formatear.js
export function formatearNombre(usuario){
    return `${usuario.name} (${usuario.email})`
}


// main.js
import { obtenerUsuarios } from "./servicios/api.js";
import { formatearNombre } from "./utils/formatear.js";

async function main(){
    const usuarios = await obtenerUsuarios()

    usuarios
        .map(formatearNombre)
        .forEach(nombre => console.log(nombre))
}

main()

// Cada archivo tiene una sola responsabilidad, 
// las dependencias son claras y explícitas, 
// y el código es fácil de entender y mantener.