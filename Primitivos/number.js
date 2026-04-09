// Características del tipo Number
// JavaScript usa el estándar IEEE 754 para representar números, lo que significa:

// 64 bits de precisión (double precision)
// Rango aproximado: ±1.7976931348623157 × 10^308
// 15-17 dígitos de precisión decimal
// Incluye valores especiales: Infinity, -Infinity y NaN




// Todos estos son tipo 'number'
let entero = 42
let decimal = 3.14159
let negativo = -17
let exponencial = 1.5e10 // 15000000000
let hexadecimal = 0xff // 255
let binario = 0b1010 // 10
let octal = 0o777 // 511

console.log(typeof entero) // "number"
console.log(typeof decimal) // "number"





// Creación de números
// 1. Literals numéricos (la forma más común)
// Enteros
let edad = 25
let temperatura = -5

// Decimales
let precio = 19.99
let pi = 3.14159

// Notación científica
let distancia = 1.5e8 // 150,000,000
let pequeño = 2.5e-4 // 0.00025

// Diferentes bases
let hexColor = 0xff0000 // 16777216 (rojo en hex)
binario = 0b11111111 // 255
octal = 0o377 // 255 (base 8)


// 2. Constructor Number()
// Crear primitivo
let numero = Number('42') // 42
decimal = Number('3.14') // 3.14

let string = '42'
let desdeString = Number(string) // 42
console.log(typeof desdeString) // "number"

// ❌ NO hagas esto, ya que con new creas un objeto
let numeroObjeto = new Number(42)
console.log(typeof numeroObjeto) // "object"


// 3. Conversión desde otros tipos
// Por la naturaleza de JavaScript, vas a poder pasarle casi cualquier cosa a Number() e intentará hacer su mejor esfuerzo para convertirlo a número.
// Desde booleanos
let desde_true = Number(true) // 1
let desde_false = Number(false) // 0

// Casos especiales
let desde_null = Number(null) // 0
let desde_undefined = Number(undefined) // NaN
let desde_string_vacia = Number('') // 0
let desde_string_invalida = Number('abc') // NaN






// Valores especiales
// Hay unas constantes en el objeto Number que representan valores especiales. 
// Además, también hay algunos valores que no se pueden representar con números, 
// como el infinito, el negativo infinito y el NaN.

// Además, Number tiene algunos métodos que te ayudarán a verificarlos.

// Infinity y -Infinity
// Infinity
console.log(1 / 0) // Infinity
console.log(Number.POSITIVE_INFINITY) // Infinity
console.log(Math.pow(10, 1000)) // Infinity

// -Infinity
console.log(-1 / 0) // -Infinity
console.log(Number.NEGATIVE_INFINITY) // -Infinity

// Verificar si es infinito
console.log(Number.isFinite(42)) // true
console.log(Number.isFinite(Infinity)) // false
console.log(isFinite(42)) // true (función global)



// NaN (Not a Number)
// Operaciones que resultan en NaN
console.log(0 / 0) // NaN
console.log(Math.sqrt(-1)) // NaN
console.log(Number('texto')) // NaN
console.log(undefined + 1) // NaN

// NaN es especial: no es igual a sí mismo
console.log(NaN === NaN) // false
console.log(NaN == NaN) // false

// Además, Number tiene algunos métodos que te ayudarán a verificarlos. 
// Existen dos métodos para hacerlo isNaN() y Number.isNaN(). 
// ¿Cuál es la diferencia entre ambos y por qué hay dos?

// isNaN(): Convierte el valor a número primero y luego verifica si es NaN.
// Number.isNaN(): No convierte el valor a número, solo verifica si ya es NaN.

console.log(isNaN('texto')) // true (convierte a número primero)
console.log(Number.isNaN('texto')) // false
// Nota
// isNaN() es una función global y es más antigua. 
// Number.isNaN() es más nueva y sería la forma recomendada de verificar si un valor es NaN a día de hoy.






// Propiedades estáticas importantes

// Valores límite
console.log(Number.MAX_VALUE) // 1.7976931348623157e+308
console.log(Number.MIN_VALUE) // 5e-324 (más pequeño positivo)
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER) // -9007199254740991

// Constantes especiales
console.log(Number.POSITIVE_INFINITY) // Infinity
console.log(Number.NEGATIVE_INFINITY) // -Infinity
console.log(Number.NaN) // NaN

// Epsilon (diferencia mínima entre números)
console.log(Number.EPSILON) // 2.220446049250313e-16









// Métodos de Number
// Métodos de conversión
numero = 123.456789
// toString - convierte a string
console.log(numero.toString()) // "123.456789"
console.log(numero.toString(2)) // "1111011.0111010..." (binario)
console.log(numero.toString(16)) // "7b.74bc6a7ef9db2" (hexadecimal)

// toFixed - fija decimales
console.log(numero.toFixed(2)) // "123.46"
console.log(numero.toFixed(0)) // "123"

// toPrecision - fija dígitos significativos
console.log(numero.toPrecision(4)) // "123.5"
console.log(numero.toPrecision(2)) // "1.2e+2"

// toExponential - notación científica
console.log(numero.toExponential()) // "1.23456789e+2"
console.log(numero.toExponential(2)) // "1.23e+2"




// Métodos estáticos de verificación
// isInteger - verifica si es entero
console.log(Number.isInteger(42)) // true
console.log(Number.isInteger(42.0)) // true
console.log(Number.isInteger(42.1)) // false

// isSafeInteger - verifica si está en rango seguro
console.log(Number.isSafeInteger(123)) // true
console.log(Number.isSafeInteger(Math.pow(2, 53))) // false

// isFinite - verifica si es finito
console.log(Number.isFinite(42)) // true
console.log(Number.isFinite(Infinity)) // false

// isNaN - verifica si es NaN
console.log(Number.isNaN(NaN)) // true
console.log(Number.isNaN('texto')) // false




// Métodos de parsing
// parseInt - convierte a entero
console.log(Number.parseInt('42')) // 42
console.log(Number.parseInt('42.7')) // 42
console.log(Number.parseInt('42px')) // 42
console.log(Number.parseInt('px42')) // NaN

// Con base específica
console.log(Number.parseInt('FF', 16)) // 255
console.log(Number.parseInt('1010', 2)) // 10

// parseFloat - convierte a decimal
console.log(Number.parseFloat('42.7')) // 42.7
console.log(Number.parseFloat('42.7px')) // 42.7
console.log(Number.parseFloat('px42.7')) // NaN






// Operaciones matemáticas básicas
let a = 10
let b = 3

// Operadores básicos
console.log(a + b) // 13 (suma)
console.log(a - b) // 7 (resta)
console.log(a * b) // 30 (multiplicación)
console.log(a / b) // 3.3333333333333335 (división)
console.log(a % b) // 1 (módulo/resto)
console.log(a ** b) // 1000 (exponenciación)

// Operadores de incremento/decremento
let contador = 5
console.log(++contador) // 6 (pre-incremento)
console.log(contador++) // 6 (post-incremento, luego contador = 7)
console.log(--contador) // 6 (pre-decremento)
console.log(contador--) // 6 (post-decremento, luego contador = 5)






// Precisión y problemas comunes
// Sobre los problemas de precisión decimal
// Como hemos visto, los números en JavaScript no son perfectos. Hay algunos problemas de precisión que debemos tener en cuenta.

// Problema clásico de punto flotante
// Este problema es muy conocido. Mucha gente, de forma erronea, cree que es algo específico de JavaScript. 
// En realidad es algo que afecta a muchos lenguajes de programación.

// Problema clásico de punto flotante
console.log(0.1 + 0.2) // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3) // false
// Esto ocurre porque los números en JavaScript se representan en formato binario de punto flotante, 
// lo que puede causar errores de precisión a la hora de hacer operaciones.

// Soluciones
function sumarDecimales(a, b, decimales = 2) {
  return Number((a + b).toFixed(decimales))
}
console.log(sumarDecimales(0.1, 0.2)) // 0.3

// Usando Number.EPSILON para comparaciones
function sonIguales(a, b) {
  return Math.abs(a - b) < Number.EPSILON
}
console.log(sonIguales(0.1 + 0.2, 0.3)) // true









// Conversiones automáticas (coerción)
// Uno de los problemas más comunes que se pueden dar es cuando intentamos hacer operaciones con números y uno de ellos es un string. 
// JavaScript intentará convertir el string a número y luego hacer la operación. A este paso se le conoce como coerción.

// La coerción es un proceso que se realiza automáticamente por el lenguaje cuando intentamos hacer operaciones con valores de tipos diferentes. 
// En este caso, si detecta que uno de los valores es un número y el otro es un string, intentará convertir el string a número y luego hacer la operación.

// Nota
// Siempre que puedas, deberías evitar esto y siempre trabajar con conversiones explícitas. Así te evitas sorpresas.

// Conversión implícita en operaciones
console.log('5' + 3) // "53" (concatenación)
console.log('5' - 3) // 2 (resta numérica)
console.log('5' * 3) // 15 (multiplicación)
console.log('5' / 3) // 1.6666... (división)

// Conversión con operador unario +
console.log(+'42') // 42
console.log(+true) // 1
console.log(+false) // 0
console.log(+'') // 0
// Nota
// El operador unario + es una forma de convertir un string a número, si no lo es ya.







// Límites de enteros seguros
// Enteros seguros
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER + 1) // 9007199254740992
console.log(Number.MAX_SAFE_INTEGER + 2) // 9007199254740992 (¡es igual!)
// Nota
// Para hacer operaciones con números más grandes que el límite de enteros seguros, puedes usar el tipo BigInt. Lo veremos más adelante.




// Palabras finales sobre number
// Un sólo tipo: number para enteros y decimales
// IEEE 754: Estándar de punto flotante de 64 bits
// Valores especiales: Infinity, -Infinity, y NaN
// Métodos útiles: Para conversión, formateo y validación
// Conversiones: Automáticas en muchas operaciones
// Limitaciones: Problemas de precisión y límites de enteros seguros
// Es importante entender las limitaciones de precisión y usar las herramientas adecuadas para trabajar con números de manera segura y precisa.