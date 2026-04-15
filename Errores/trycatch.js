// ¿Qué son los errores en JavaScript?
// Un error en JavaScript es una situación excepcional que ocurre durante la ejecución del código 
// y que impide que el programa continúe ejecutándose normalmente y se detiene.

console.log("Antes del error")
// console.log(variableQueNoExiste) // ❌ ReferenceError: variableQueNoExiste is not defined
console.log("Después del error") // ❌ Esta línea nunca se ejecuta


// La sintaxis try/catch
// La estructura try/catch nos permite "intentar" ejecutar código que podría fallar y "capturar" cualquier error que ocurra:

try {
    // Código que podría generar un error
    console.log('Intentando ejecutar código...');
    console.log(variableQueNoExiste);   // ❌ ReferenceError: variableQueNoExiste is not defined
} catch (error) {
    // Código que se ejecuta si hay un error
    console.log('¡Ocurrió un error!:', error.message);
}

console.log('El programa continúa ejecutándose');   // ✅ Esta línea sí se ejecuta





// catch sin parámetro
// Desde las últimas versiones de JavaScript, puedes omitir el parámetro error en el bloque catch:
try {
  console.log(variableQueNoExiste) // ❌ ReferenceError: variableQueNoExiste is not defined
} catch {
  console.log("¡Ocurrió un error!")
}
// Nota
// Esto es útil cuando no necesitas el error o cuando quieres manejar todos los errores de la misma manera. 
// Pero ten en cuenta que si no usas el parámetro error, no podrás acceder a las propiedades del error, como error.name, error.message, error.stack, etc.












// ¡No abuses de try/catch!
// Puedes caer en la tentación de usar try/catch para todo, 
// pero no es una buena práctica cuando hay una alternativa mejor que puede ayudarte a controlar mejor el flujo de tu programa. 
// Por ejemplo, imagina que quieres controlar si un programa divide por cero, puedes usar try/catch para ello...
function getLongitud(texto) {
  try {
    return texto.length
  } catch (error) {
    console.log("No es una cadena de texto")
    return 0
  }
}
// En muchos casos, es mejor evitar usar try/catch y usar if para comprobar posibles problemas antes de ejecutar el código. Hace que el código sea más legible y fácil de entender.

function getLongitud(texto) {
  if (typeof texto !== 'string') return 0
  return texto.length
}











// No abuses de try/catch para acceder a propiedades de objetos
// En el caso de los objetos, puedes usar el operador de encadenamiento opcional ?. 
// para acceder a propiedades de forma segura en lugar de usar try/catch.

const usuario = {
  nombre: "Ana",
  edad: 25
}

// ❌ con try/catch se hace dificil de leer y entender
try {
  console.log(usuario.direccion.calle) // ❌ Error: Cannot read property 'calle' of undefined
} catch (error) {
  console.log("No se pudo acceder a la propiedad:", error.message)
  console.log("Usando valor por defecto")
}

console.log(usuario?.direccion?.calle) // undefined









// A veces no hay más remedio que usar try/catch
// A veces las validaciones que hay que hacer son demasiado complejas. ¿Se pueden hacer? 
// Es posible. Pero el trabajo de validación puede ser extenso y complicado de entender. 
// Por lo que es posible que en estos casos sea mejor usar try/catch. 
// Un ejemplo es cuando quieres transformar un objeto JSON a un objeto JavaScript:

const jsonString = '{"nombre": "Juan", "edad": 30}'
const jsonInvalido = '{"nombre": "Juan", "edad":}'

try {
  const objeto = JSON.parse(jsonString)
  console.log("JSON válido:", objeto)
} catch (error) {
  console.log("Error al parsear JSON:", error.message)
}

try {
  const objeto2 = JSON.parse(jsonInvalido)
  console.log("Este mensaje no se mostrará")
} catch (error) {
  console.log("JSON inválido detectado:", error.message)
}









// El objeto Error
// Cuando ocurre un error, JavaScript crea un objeto Error que contiene información útil:
try {
  let resultado = variableInexistente + 5
} catch (error) {
  console.log("Nombre del error:", error.name)  // "ReferenceError"
  console.log("Mensaje:", error.message)        // "variableInexistente is not defined"
  console.log("Stack trace:", error.stack)      // Información de dónde ocurrió
}
// Propiedades principales del objeto Error:
// error.name: Tipo de error (ReferenceError, TypeError, etc.)
// error.message: Descripción del error
// error.stack: Rastro de la pila de llamadas (útil para debugging)









// Tipos comunes de errores

// ReferenceError
// Estos errores se producen cuando se intenta acceder a una variable que no existe.
console.log(variableQueNoExiste) // ❌ ReferenceError: variableQueNoExiste is not defined


// TypeError
// Ocurre cuando intentas hacer una operación no permitida sobre un tipo de dato. 
// O sea, cuando el valor existe pero lo usas de forma incorrecta. 
// Normalmente se produce cuando intentas acceder a una propiedad de un valor que no es un objeto.
const nope = null
nope.propiedad // ❌ TypeError: Cannot read properties of null (reading 'propiedad')

// Pero también puede ocurrir si intentas ejecutar una función que no existe, 
// valores fuera del contexto esperado, modificar propiedades de un valor que no es mutable, etc.
const numero = 123
numero.toFixed(2) // ❌ TypeError: numero.toFixed is not a function


// SyntaxError
// Cuando la sintaxis de tu código es incorrecto o no lo comprende el motor de JavaScript, te lanzará un error de tipo SyntaxError.
// Falta una comilla
// const nombre = 'midu;
// ❌ SyntaxError: Unterminated string constant.













// Así que... ¿Cuándo usar try/catch?

// Usa try/catch cuando:
// Trabajas con APIs externas
// Parseas JSON
// Accedes a propiedades que podrían no existir
// Realizas operaciones que pueden fallar por factores externos

// No uses try/catch para:
// Controlar el flujo normal de tu programa
// Validaciones simples que puedes hacer con if/else
// Errores que puedes prevenir fácilmente