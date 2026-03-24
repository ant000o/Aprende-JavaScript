// Closure
// Un closure (clausura) es cuando una función "recuerda" las variables de su scope padre.
// Permite acceder al scope de una función externa desde una función interna. Los closures se crean cada vez que se define una función.

function crearContador() {
  let cuenta = 0 // Variable en el scope padre
  
  return function() {
    cuenta++ // La función interna "recuerda" cuenta
    return cuenta
  }
}

const contar = crearContador()

console.log(contar()) // 1
console.log(contar()) // 2
console.log(contar()) // 3

// ¡La variable 'cuenta' sigue existiendo!

// ¿Cómo funciona?
// crearContador() crea una variable cuenta
// Devuelve una función que usa esa variable
// Aunque crearContador() termina, la función devuelta mantiene acceso a cuenta
// Cada vez que llamamos contador(), modifica la misma variable cuenta


//  Ejemplos prácticos de closures
// 1. Múltiples Contadores Independientes
function crearContador() {
  let cuenta = 0
  
  return function() {
    cuenta++
    return cuenta
  }
}

const contador1 = crearContador()
const contador2 = crearContador()

// contador1 y contador2 son independientes
// y cada uno tiene su propia copia de la variable "cuenta"

console.log(contador1()) // 1
console.log(contador1()) // 2

console.log(contador2()) // 1 (independiente)
console.log(contador1()) // 3
console.log(contador2()) // 2


// 2. También con parámetros
// No sólo pasa con las variables dentro de la función, 
// también podemos acceder a los parámetros de la función padre.
function crearSaludador(saludo){
    return function(nombre){
        return saludo + ", " + nombre + "!"
    }
}

const saludoEspañol = crearSaludador("Hola")
const saludoFrances = crearSaludador("Bonjour")
const saludoIngles = crearSaludador("Hi")

console.log(saludoEspañol('Dina'))
console.log(saludoFrances('Cote'))
console.log(saludoIngles('Anto'))

// 3. Datos Privados con Closures
// Una utilidad de los closures es crear datos privados. 
// De forma que no se pueda acceder a ellos desde fuera de la función, pero sí desde dentro.
// Así podemos devolver un objeto con métodos que nos permitan acceder a los datos privados y 
// asegurarnos de que no se puedan modificar desde fuera.
function crearPersona(nombreInicial) {
  let nombre = nombreInicial // Variable "privada"
  let edad = 0
  
  return {
    getNombre: function() {
      return nombre
    },
    setNombre: function(nuevoNombre) {
      nombre = nuevoNombre
    },
    getEdad: function() {
      return edad
    },
    cumplirAnos: function() {
      edad++
      return edad
    }
  }
}

const persona = crearPersona('Juan')

console.log(persona.getNombre()) // "Juan"
persona.setNombre('Carlos')
console.log(persona.getNombre()) // "Carlos"
console.log(persona.cumplirAnos()) // 1

// No podemos acceder directamente a las variables privadas
console.log(persona.nombre) // undefined
console.log(persona.edad)   // undefined


// Closures vs Variables Globales
// ❌ Problema con Variables Globales
// ❌ Variables globales - pueden ser modificadas por cualquiera
let contador = 0

function incrementar() {
  contador++
  return contador
}

function decrementar() {
  contador--
  return contador
}

// Problema: cualquier código puede modificar 'contador'
contador = 1000 // ¡Ups! Se rompió nuestro contador


// SOLUCIÓN CON CLOSURES
// ✅ Closure - datos protegidos
function crearContador() {
  let contador = 0 // Variable privada
  
  return {
    incrementar: function() {
      contador++
      return contador
    },
    decrementar: function() {
      contador--
      return contador
    },
    obtenerValor: function() {
      return contador
    }
  }
}

const miContador = crearContador()

console.log(miContador.incrementar()) // 1
console.log(miContador.incrementar()) // 2
console.log(miContador.decrementar()) // 1

// No podemos acceder directamente a 'contador'
// miContador.contador = 1000 // No funciona