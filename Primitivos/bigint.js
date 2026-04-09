// ¿Por qué necesitamos BigInt?
// El tipo number en JavaScript tiene un límite de precisión para enteros seguros. Mira este ejemplo paso a paso:

// Límite del tipo number
const bigNumber = 30000000000000000
console.log(bigNumber) // 30000000000000000

// Si le sumaramos 1 a este número, el resultado debería ser:
// 30000000000000001

// Pero si lo intentas sumar con JS, el resultado es diferente:
console.log(bigNumber + 1) // 30000000000000000
console.log(bigNumber + 2) // 30000000000000000 (¡igual!)

// Incluso con números grandes, puedes perder precisión
let numeroGrande = 1234567890123456789
console.log(numeroGrande) // 1234567890123456800 (¡redondeado!)
// BigInt soluciona este problema permitiendo enteros de cualquier tamaño:

// Con BigInt mantenemos la precisión
let numeroGrandeBigInt = 1234567890123456789n
console.log(numeroGrandeBigInt) // 1234567890123456789n (¡exacto!)
console.log(numeroGrandeBigInt + 1n) // 1234567890123456790n (¡exacto!)










// Creación de BigInt
// Para crear un BigInt, puedes usar el sufijo n al final del número o usar el constructor BigInt(). 
// Además, ten en cuenta que como es un tipo primitivo, el operador typeof te devolverá bigint.

// 1. Literal BigInt (sufijo 'n')
// Enteros con sufijo 'n'
let grande1 = 123n
let grande2 = 9007199254740991n
let grande3 = 1234567890123456789012345678901234567890n

console.log(typeof grande1) // "bigint"



// 2. Constructor BigInt()
// También puedes usar el constructor BigInt() para crear un BigInt. 
// Esto te permitirá pasar un número entero o una cadena de texto para crearlo:

// Desde número (si está en rango seguro)
let desdeEntero = BigInt(123) // 123n
let desdeEnteroGrande = BigInt(9007199254740991) // 9007199254740991n

// Desde string
let desdeString = BigInt('123456789012345678901234567890')
// 123456789012345678901234567890n

// Desde string hexadecimal
let desdeHex = BigInt('0x1fffffffffffff') // 9007199254740991n

// Desde string binaria
let desdeBin = BigInt('0b11111111111111111111111111111111')

// Desde una variable
let numeroGrandeEnString = '123456789012345678901234567890'
let desdeVariable = BigInt(numeroGrandeEnString) // 123456789012345678901234567890n



// 3. Limitaciones en la creación
// Debes tener en cuenta algunas consideraciones a la hora de crear de los BigInt para no tener problemas:

// ❌ No funciona con decimales
// BigInt(3.14) // RangeError: The number 3.14 cannot be converted to a BigInt

// ❌ No funciona con números que ya están fuera del rango seguro de Number
// BigInt(Number.MAX_SAFE_INTEGER + 1) // Puede dar resultados inesperados

// ❌ No funciona con strings inválidos
// BigInt("abc") // SyntaxError: Cannot convert abc to a BigInt








// Operaciones con BigInt
// Igual que con los números, también en los BigInt puedes usar los operadores aritméticos, de comparación y bitwise.

// Operaciones aritméticas básicas
let a = 100n
let b = 200n
// Operaciones básicas
console.log(a + b) // 300n
console.log(a - b) // -100n
console.log(a * b) // 20000n
console.log(b / a) // 2n (división entera)
console.log(b % a) // 0n (módulo)
console.log(a ** 2n) // 10000n (exponenciación)

// ¡Ojo! La división siempre es entera, no te da los decimales
console.log(7n / 2n) // 3n (no 3.5)
console.log(10n / 3n) // 3n (no 3.333...)




// Comparaciones
let x = 100n
let y = 200n
// Comparaciones funcionan normalmente
console.log(x < y) // true
console.log(x > y) // false
console.log(x === 100n) // true
console.log(x !== y) // true

// Comparación con números regulares
console.log(100n == 100) // true (coerción)
console.log(100n === 100) // false (tipos diferentes)
console.log(100n < 101) // true
console.log(100n > 99) // true




// Operaciones bitwise
// Las operaciones bitwise son operaciones que se realizan bit a bit. 
// Suelen ser operaciones más avanzadas que las aritméticas y de comparación. Y también son compatibles con los BigInt.

let bits1 = 0b1010n // 10n
let bits2 = 0b1100n // 12n

// Operadores bitwise
console.log(bits1 & bits2) // 8n (AND)
console.log(bits1 | bits2) // 14n (OR)
console.log(bits1 ^ bits2) // 6n (XOR)
console.log(~bits1) // -11n (NOT)
console.log(bits1 << 2n) // 40n (shift left)
console.log(bits1 >> 1n) // 5n (shift right)








// Restricciones importantes
// Ya hemos visto algunas restricciones a la hora de crear los BigInt. 
// Pero también existen algunas restricciones a la hora de usarlos. 
// Algunas de ellas, como mezclar con Number sin convertir explícitamente, suelen dar muchos problemas a los desarrolladores:

// No se puede mezclar con Number
let bigint = 100n
let number = 50
// ❌ Esto no funciona
// console.log(bigint + number) // TypeError: Cannot mix BigInt and other types

// ✅ Hay que convertir explícitamente
console.log(bigint + BigInt(number)) // 150n
console.log(Number(bigint) + number) // 150

// ✅ O usar comparaciones que permiten coerción
console.log(bigint > number) // true



// No funciona con Math
let grande = 100n

// ❌ Math no acepta BigInt
// Math.sqrt(grande) // TypeError: Cannot convert a BigInt value to a number
// Math.max(10n, 20n) // TypeError

// ✅ Usa operaciones nativas de BigInt
console.log(grande ** 2n) // 10000n para potencias



// No se puede usar con JSON
let objeto = {
  numero: 42,
  grande: 123n
}

// ❌ JSON.stringify no maneja BigInt
// JSON.stringify(objeto) // TypeError: Do not know how to serialize a BigInt

// ✅ Solución: convertir a string
let objetoSerializable = {
  numero: objeto.numero,
  grande: objeto.grande.toString()
}

console.log(JSON.stringify(objetoSerializable))
// {"numero":42,"grande":"123"}







// Métodos de BigInt
// Métodos estáticos
// BigInt.asIntN() - convierte a entero con signo de N bits
console.log(BigInt.asIntN(8, 300n)) // 44n (300 en 8 bits con signo)

// BigInt.asUintN() - convierte a entero sin signo de N bits
console.log(BigInt.asUintN(8, 300n)) // 44n (300 en 8 bits sin signo)
console.log(BigInt.asUintN(8, -1n)) // 255n (-1 en 8 bits sin signo)






// Conversiones
// De BigInt a otros tipos
grande = 123456789n

// A Number (cuidado con la precisión)
let comoNumber = Number(grande) // 123456789
console.log(typeof comoNumber) // "number"

// A String
let comoString = String(grande) // "123456789"
let comoStringDirect = grande.toString() // "123456789"

// A Boolean
let comoBoolean = Boolean(grande) // true
console.log(Boolean(0n)) // false



// De otros tipos a BigInt
// Desde Number (solo enteros en rango seguro)
let desdeNumber = BigInt(42) // 42n

// Desde String
desdeString = BigInt('123456789012345678901234567890')

// Desde Boolean
let desdeTrue = BigInt(true) // 1n
let desdeFalse = BigInt(false) // 0n






// Palabras finales sobre BigInt
// BigInt es esencial cuando necesitas precisión en enteros grandes. Suele usarse en temas de criptografía o financieros, ya que es importante no perder información al hacer operaciones con números muy grandes.

// Enteros muy grandes: Más allá de Number.MAX_SAFE_INTEGER
// Precisión exacta: Sin pérdida de precisión en enteros
// Limitaciones importantes:

// No se mezcla con Number sin conversión explícita
// No funciona con Math
// No se serializa automáticamente en JSON
// Sólo para enteros (no decimales)
// Soporte limitado en navegadores antiguos
// BigInt es una herramienta poderosa para casos específicos donde la precisión de enteros grandes es crítica.