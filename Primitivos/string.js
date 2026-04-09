// Creación de strings
// Hay varias formas de crear strings en JavaScript:

// 1. String literals (la forma más común)
// Comillas simples
let nombre = 'Miguel'
// Comillas dobles
let apellido = "Ángel"

// 2. Template literals - La forma moderna
// Hay otra forma moderna de crear cadenas de texto: los template literals. Son especialmente útiles para interpolar variables y strings multilínea.
nombre = 'Ana'
let edad = 25

// Interpolación de variables
let presentacion = `Me llamo ${nombre} y tengo ${edad} años`

// Strings multilínea
let poema = `
  Roses are red,
  Violets are blue,
  JavaScript is awesome,
  And so are you!
`
// Expresiones dentro de template literals
let calculo = `El resultado de 5 + 3 es: ${5 + 3}`





// Propiedades y metodos de los strings
// Propiedad length:
let palabra = 'JavaScript'
console.log(palabra.length) // 10
let vacio = ''
console.log(vacio.length) // 0
let espacios = '   '
console.log(espacios.length) // 3







// Metodos de busqueda:
const frase = 'JavaScript es genial y JavaScript es potente'

// indexOf - encuentra la primera ocurrencia
console.log(frase.indexOf('JavaScript')) // 0
// -> significa que encontró la primera ocurrencia de 'JavaScript'
//    en la posición 0

console.log(frase.indexOf('a')) // 1
// -> significa que encontró la primera ocurrencia de 'a'
//    en la posición 1

console.log(frase.indexOf('Python')) // -1 (no encontrado)
// -> cuando no encuentra la cadena de texto, devuelve -1

// lastIndexOf - encuentra la última ocurrencia
console.log(frase.lastIndexOf('JavaScript')) // 23
// -> significa que encontró la última ocurrencia de 'JavaScript'
//    en la posición 23 de la cadena

// includes - verifica si contiene un substring
console.log(frase.includes('genial')) // true
console.log(frase.includes('Python')) // false

// startsWith y endsWith
console.log(frase.startsWith('JavaScript')) // true
console.log(frase.endsWith('potente')) // true

console.log(frase.startsWith('Python')) // false
// -> significa que la cadena de texto NO comienza con 'Python'





// Métodos de extracción
// Estos métodos no modifican el string original, sino que devuelven siempre un nuevo string.
const texto = 'JavaScript Programming'

// slice - extrae una porción
console.log(texto.slice(0, 10)) // "JavaScript"
console.log(texto.slice(11)) // "Programming"
console.log(texto.slice(-11)) // "Programming" (desde el final)

// substring - similar a slice pero no acepta índices negativos
console.log(texto.substring(0, 10)) // "JavaScript"

// substr - extrae desde un índice con una longitud específica
console.log(texto.substr(11, 7)) // "Program"




// Métodos de transformación
let texto2 = '  JavaScript Programming  '

// Cambio de caso
console.log(texto2.toLowerCase()) // "  javascript programming  "
console.log(texto2.toUpperCase()) // "  JAVASCRIPT PROGRAMMING  "

// Eliminación de espacios
console.log(texto2.trim()) // "JavaScript Programming"
console.log(texto2.trimStart()) // "JavaScript Programming  "
console.log(texto2.trimEnd()) // "  JavaScript Programming"

// Reemplazo
let frase2 = 'Me gusta Python y Python es genial'
console.log(frase2.replace('Python', 'JavaScript'))
// "Me gusta JavaScript y Python es genial"

// replaceAll - reemplaza todas las ocurrencias
console.log(frase2.replaceAll('Python', 'JavaScript'))
// "Me gusta JavaScript y JavaScript es genial"
// Nota
// Siempre que transformes una cadena de texto, 
// siempre vas a crear un nuevo string que deberemos asignar a una variable nueva si queremos conservar el resultado de la transformación.





// Métodos de división y unión
// split - convierte string en array
let lenguajes = 'JavaScript,Python,Java,C++'
let arrayLenguajes = lenguajes.split(',')
console.log(arrayLenguajes) // ["JavaScript", "Python", "Java", "C++"]

let frase3 = 'Hola mundo JavaScript'
let palabras = frase3.split(' ')
console.log(palabras) // ["Hola", "mundo", "JavaScript"]

// repeat - repite el string
let risa = 'ja'
console.log(risa.repeat(3)) // "jajaja"

// padStart y padEnd - rellena el string
let numero = '5'
console.log(numero.padStart(3, '0')) // "005"
console.log(numero.padEnd(3, '0')) // "500"





// Métodos de verificación
let codigo = 'ABC123'

// charAt - obtiene el carácter en una posición
console.log(codigo.charAt(0)) // "A"
console.log(codigo.charAt(3)) // "1"

// charCodeAt - obtiene el código Unicode
console.log(codigo.charCodeAt(0)) // 65 (código de 'A')

// match - busca coincidencias con expresiones regulares
let email = 'usuario@example.com'
let resultado = email.match(/@(.+)\./)
console.log(resultado[1]) // "example"





// Los strings son inmutables
// Es importante recordar que los strings en JavaScript son inmutables. 
// Esto significa que no puedes cambiar un string existente, siempre crearás uno nuevo. 
// Así que tendrás siempre que asignar el resultado de la operación a una variable nueva.
let texto3 = 'Hola'
let nuevoTexto = texto3.toUpperCase()

console.log(texto3) // "Hola" (sin cambios)
console.log(nuevoTexto) // "HOLA" (nuevo string)

// Esto no funciona como esperarías
texto3[0] = 'h'
console.log(texto3) // "Hola" (sin cambios)





// Comparación de strings
// Como todos los tipos primitivos, los strings se pueden comparar usando los operadores de comparación.
// Comparación exacta
console.log('JavaScript' === 'JavaScript') // true (iguales)
console.log('JavaScript' === 'javascript') // false (diferencias entre mayúsculas y minúsculas)

// Comparación sin distinguir mayúsculas/minúsculas
let a = 'JavaScript'
let b = 'javascript'
console.log(a.toLowerCase() === b.toLowerCase()) // true

// Mirar si dos cadenas de texto son diferentes
console.log('JavaScript' !== 'Python') // true
console.log('JavaScript' !== 'javascript') // true (diferencias entre mayúsculas y minúsculas)
console.log('JavaScript' !== 'JavaScript') // false (iguales)

// Orden lexicográfico
console.log('apple' < 'banana') // true
console.log('Apple' < 'apple') // true (mayúsculas van antes)






// Caracteres especiales en cadenas de texto

// Comillas dentro de strings
let comillas = 'Él dijo: "Hola mundo"'
let comillasSimplesEnDobles = "It's a beautiful day"
let comillasDobles = 'Él dijo: "Hola mundo"'
// Si usamos template literals, podemos usar comillas simples o dobles dentro de la cadena de texto sin ningún problema.
// Template literals
comillas = `Él dijo: "Hola mundo"`
comillasSimplesEnDobles = `It's a beautiful day`
comillasDobles = `Él dijo: "Hola mundo"`


// Pero qué pasa si no queremos usar template literals y 
// tenemos tanto comillas simples como dobles en una misma cadena de texto. 
// Pero existe otra forma de usar comillas dentro de cadenas de texto y es usando el carácter de escape \:
// Caracteres de escape
comillas = "Él dijo: \"Hola mundo\""
let comillasSimples = 'It\'s a beautiful day'

console.log(comillas) // "Él dijo: "Hola mundo""
console.log(comillasSimples) // "It's a beautiful day"
// Lo que hace el carácter de escape es que el carácter que sigue a él se interpreta como un carácter normal y no como cierre de la cadena de texto. 
// Ahora, ¿qué pasa si en realidad queremos usar una barra invertida en una cadena de texto? Entonces, podemos usar dos barras invertidas.
// Caracteres especiales
// let barra = 'C:\\Users\\Documents'
// console.log(barra) // "C:\Users\Documents"




// Tabuladores y nuevas líneas
// Los tabuladores y las nuevas líneas se pueden representar con el carácter de escape \t y \n respectivamente.
const tabulador = "Hola\t\tMundo"
const nuevaLinea = 'Hola\nMundo'

console.log(tabulador)
// 'Hola		Mundo'

console.log(nuevaLinea)
// 'Hola
// Mundo'





// Unicode
// Unicode es un estándar que permite representar caracteres de cualquier idioma en la web. 
// En JavaScript, podemos usar el carácter de escape \u seguido del código Unicode del carácter. 
// Así podemos representar emojis y otros símbolos especiales:

// Unicode
let emoji = '❤️' // ❤️
let emojiUnicode = '\u2764\uFE0F' // ❤️

let simbolo = '\u00A9' // ©
console.log(emoji, emojiUnicode, simbolo);
// Nota
// Como ves, ten en cuenta que no necesitas usar el carácter de escape \u para representar emojis. 
// Lo puedes hacer directamente. Sólo es un ejemplo para que veas que usando el carácter de escape \u puedes representar cualquier carácter Unicode.







// Conversión a string
// Conversión explícita
numero = 42
let numeroTexto = String(numero) // "42"
let numeroTexto2 = numero.toString() // "42"
// Conversión implícita
resultado = 'El número es: ' + 42 // "El número es: 42"
let template = `El número es: ${42}` // "El número es: 42"







// Casos de uso comunes
// Validación de entrada
function validarEmail(email) {
  return email.includes('@') && email.includes('.')
}

function validarContrasena(password) {
  return (
    (password.length >= 8 && password.includes('@')) ||
    password.includes('#') ||
    password.includes('$')
  )
}
// Nota
// Validar un email es MUCHO más complejo que esto. Para hacerlo correctamente, deberías usar una expresión regular (y no son sencillas). 
// Pero es un ejemplo sencillo para que veas cómo se puede usar el método includes para verificar si una cadena de texto contiene un substring.


// Formateo de texto
function formatearNombre(nombre) {
  return nombre
    .trim()
    .toLowerCase()
    .split(' ')
    .map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1))
    .join(' ')
}

console.log(formatearNombre('  MIGUEL ANGEL  ')) // "Miguel Angel"


// Procesamiento de datos
// Limpiar y procesar datos CSV
let csvData = 'nombre,edad,ciudad\nJuan,25,Madrid\nAna,30,Barcelona'
let lineas = csvData.split('\n')
let headers = lineas[0].split(',')
let datos = lineas.slice(1).map((linea) => linea.split(','))

console.log(headers) // ["nombre", "edad", "ciudad"]
console.log(datos) // [["Juan", "25", "Madrid"], ["Ana", "30", "Barcelona"]]






// Para terminar con los strings...
// Los strings en JavaScript son un tipo de dato que representa una secuencia de caracteres. 
// Son muy útiles para representar texto y son muy fáciles de manipular. 
// Algunas de sus características son:

// Inmutables: Una vez creados, no se pueden modificar, sólo crear nuevos
// Versátiles: Múltiples formas de crearlos y manipularlos
// Ricos en métodos: Gran cantidad de métodos útiles para búsqueda, transformación y manipulación
// Unicode: Soporte completo para caracteres especiales y emojis

// Dominar el trabajo con strings es fundamental para cualquier desarrollador JavaScript, 
// ya que la manipulación de texto es una tarea muy común en el desarrollo web.

