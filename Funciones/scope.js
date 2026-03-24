// Scope
// Es el contexto en que los valores y expresiones son visibles o pueden sers referenciados

// Ejemplo, una variable global se puede llamar dentro de una funcion, 
// pero una local (dentro de la funcion) no se puede llamar fuera de esta.

let saludo = "Hola"  // Variable global

function saludar(){
    let nombre = "anto";  // Variable local
    return saludo + " " + nombre  // puede usar ambas variables
}
console.log(saludar());  // Hola anto

console.log(saludo) // Hola
// console.log(nombre) // error nombre is not defined



// LOS ÁMBITOS INFERIORES PUEDEN ACCEDER A LOS SUPERIORES PERO NO AL REVÉS.

let global = 'Soy global'

function externa() {
  let externa_var = 'Soy de la función externa'
  
  function interna() {
    let interna_var = 'Soy de la función interna'
    
    // Puede acceder a todas:
    console.log(interna_var)  // "Soy de la función interna"
    console.log(externa_var)  // "Soy de la función externa"  
    console.log(global)       // "Soy global"
  }
  
  // Aquí sólo puedes acceder a "externa_var" y "global"
  interna()
  // console.log(interna_var) // ❌ Error: no puede acceder
}

// Aquí sólo puedes acceder a la variable "global"
externa()


// Tipos de Scope
// 1. Scope Global
let colorFavorito = 'azul' // Scope global

function mostrarColor() {
  console.log(colorFavorito) // Puede acceder
}

function cambiarColor() {
  colorFavorito = 'rojo' // Puede modificar
}

mostrarColor() // "azul"
cambiarColor()
mostrarColor() // "rojo"


// 2. Scope de Funcion
function calcular() {
  let resultado = 10 * 5 // Solo existe dentro de esta función
  return resultado
}

console.log(calcular()) // 50 ✅
// console.log(resultado) // ❌ Error: resultado is not defined

// 3. Scope de Bloque (con let y const)
// Variables declaradas dentro de {} (if, for, while, etc.):
if (true) {
  let dentroDelBloque = 'Solo aquí'
  var fueraDelBloque = 'Disponible fuera'
  
  console.log(dentroDelBloque) // ✅ Funciona
}

// console.log(dentroDelBloque) // ❌ Error
console.log(fueraDelBloque) // ✅ "Disponible fuera"

// Importante: var no respeta el scope de bloque, pero let y const sí. Igualmente, a día de hoy, 
// deberías evitar usar var y usar siempre let y const.

