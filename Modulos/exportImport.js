// Export: compartiendo código
// Cuando creas un módulo, por defecto nada es accesible desde fuera. Necesitas marcar explícitamente lo que quieres compartir con la palabra clave export.

// Named Exports (exportaciones nombradas)
// La forma más común de exportar es usando named exports. Puedes exportar cualquier cosa: variables, funciones, clases...

// operaciones.js
export function sumar(a, b) {
  return a + b
}

export function restar(a, b) {
  return a - b
}

export const PI = 3.14159


// También puedes exportar todo al final del archivo, en lugar de poner export delante de cada declaración:

// operaciones.js
function sumar(a, b) {
  return a + b
}

function restar(a, b) {
  return a - b
}

const PI = 3.14159

export { sumar, restar, PI }





// Export Default (exportación por defecto)
// Cada módulo puede tener una sola exportación por defecto. Se usa cuando el módulo tiene un elemento principal que quieres exportar:

// Usuario.js
export default class Usuario {
  constructor(nombre) {
    this.nombre = nombre
  }

  saludar() {
    return `Hola, soy ${this.nombre}`
  }
}


// También puedes exportar funciones como default:

// formatear.js
export default function formatear(texto) {
  return texto.trim().toLowerCase()
}

// Nota
// ⚠️ Solo puede haber un export default por módulo. Si intentas poner más de uno, tendrás un error.







// Combinar Named Exports y Default Export
// Un módulo puede tener un default export y varios named exports a la vez:

// math.js
export default function sumar(a, b) {
  return a + b
}

export function restar(a, b) {
  return a - b
}

export function multiplicar(a, b) {
  return a * b
}

export const PI = 3.14159







// Import: usando código de otros módulos
// Para usar lo que otro módulo exporta, usas la palabra clave import.

// Importar Named Exports
// Para importar named exports, usas llaves {} con el nombre exacto de lo que quieres importar:

// app.js
import { sumar, restar, PI } from './operaciones.js'

console.log(sumar(2, 3))  // 5
console.log(restar(10, 4)) // 6
console.log(PI)            // 3.14159
// Los nombres deben coincidir exactamente con los de la exportación. 
// No puedes inventarte nombres nuevos (bueno, sí puedes, pero usando as, que veremos en un momento).

// Importar un Default Export
// Para importar un default export, no uses llaves y puedes ponerle el nombre que quieras:

// app.js
import Usuario from './Usuario.js'
// o podrías llamarlo como quieras:
// import Persona from './Usuario.js'

const user = new Usuario('Ana')
console.log(user.saludar()) // 'Hola, soy Ana'



// Importar Default y Named juntos
// app.js
import sumar, { restar, multiplicar, PI } from './math.js'

console.log(sumar(2, 3))       // 5
console.log(restar(10, 4))      // 6
console.log(multiplicar(3, 4))  // 12
// El default va primero, sin llaves, y los named van entre llaves.









// Renombrar con as
// ¿Qué pasa si importas dos funciones con el mismo nombre de diferentes archivos? Usas as para renombrarlas:

// Renombrar al importar
// Tenemos dos módulos con función 'formatear'
import { formatear as formatearTexto } from './texto.js'
import { formatear as formatearNumero } from './numero.js'

formatearTexto('hola mundo')  // usa la función de texto.js
formatearNumero(1234.5)        // usa la función de numero.js

// Renombrar al exportar
// También puedes renombrar al exportar:

// texto.js
function formatearInterno(texto) {
  return texto.toUpperCase()
}

export { formatearInterno as formatear }









// Importar todo con *
// Si quieres importar todo lo que exporta un módulo, puedes usar * as:

// app.js
import * as Operaciones from './operaciones.js'

console.log(Operaciones.sumar(2, 3))  // 5
console.log(Operaciones.restar(10, 4)) // 6
console.log(Operaciones.PI)            // 3.14159
// Esto crea un objeto con todas las exportaciones como propiedades. 
// Es útil cuando un módulo exporta muchas cosas y no quieres listar todas.

// Nota
// 💡 Si el módulo tiene un export default, estará disponible como Operaciones.default.







// Re-exportar desde otro módulo
// Puedes re-exportar lo que otro módulo exporta. 
// Esto es útil para crear archivos índice que agrupan varias exportaciones:

// operaciones/sumar.js
export function sumar(a, b) {
  return a + b
}

// operaciones/restar.js
export function restar(a, b) {
  return a - b
}

// operaciones/index.js — Re-exporta todo
export { sumar } from './sumar.js'
export { restar } from './restar.js'
// Ahora puedes importar desde un solo punto:

// app.js
import { sumar, restar } from './operaciones/index.js'

// También puedes re-exportar todo de un módulo:

// operaciones/index.js
export * from './sumar.js'
export * from './restar.js'









// Errores comunes
// 1. Olvidar las llaves en named imports
// ❌ Esto intenta importar el default export (que no existe)
import sumar from './operaciones.js'

// ✅ Correcto: llaves para named exports
import { sumar } from './operaciones.js'


// 2. Nombre incorrecto en named import
// ❌ El módulo exporta 'sumar', no 'suma'
import { suma } from './operaciones.js'

// ✅ El nombre debe coincidir exactamente
import { sumar } from './operaciones.js'


// 3. Múltiples export default
// ❌ Solo puede haber UN export default por módulo
export default function sumar(a, b) { return a + b }
export default function restar(a, b) { return a - b }

// ✅ Usa named exports para exportar múltiples cosas
export function sumar(a, b) { return a + b }
export function restar(a, b) { return a - b }











// Resumen
// Sintaxis	                                Qué hace
// export function foo()	                Named export
// export default function()	            Default export (solo 1 por módulo)
// export { a, b }	                        Named exports al final
// import { a, b } from './mod.js'	        Importar named exports
// import Foo from './mod.js'	            Importar default export
// import { a as b } from './mod.js'	    Importar y renombrar
// import * as Mod from './mod.js'	        Importar todo
// export { a } from './otro.js'	        Re-exportar