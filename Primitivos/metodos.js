// JS nos permite trabajar con tipos de datos primitivos como si fueran objetos
// Qué son los tipos primitivos?
// Datos que NO son un objeto y NO tienen métodos
// Estos son todos tipos primitivos
let string = 'Hola mundo'
let number = 42
let bigint = 123n  // números enteros grandes
let boolean = true
let undefined = undefined
let symbol = Symbol('id')  // símbolos como identificador único
let nulo = null

// ¿Cómo pueden los primitivos tener métodos?
// Gracias a Object Wrappers. 
// Cuando intentas acceder a un método o propiedad de un primitivo, JavaScript automáticamente:
// Crea temporalmente un objeto wrapper alrededor del valor primitivo
// Ejecuta el método en ese objeto
// Destruye el objeto wrapper inmediatamente después

let texto = 'JavaScript'

// Cuando escribes texto.toUpperCase(), JavaScript hace esto internamente:
// 1. Crea: new String("JavaScript")
// 2. Llama al método: new String("JavaScript").toUpperCase()
// 3. Devuelve el resultado: "JAVASCRIPT"
// 4. Destruye el objeto temporal

// Demostrando que los primitivos siguen siendo primitivos
// Podemos demostrar que los primitivos no son objetos de varias formas:
// 1. Usando typeof
texto = 'Hola'
console.log(typeof texto) // "string" (no "object")

// 2. Intentando asignar propiedades
texto.nuevaPropiedad = 'valor'
console.log(texto.nuevaPropiedad) // undefined (¡no se guardó!)

// 3. Comparando con objetos reales
let textoObjeto = new String('Hola')
console.log(typeof textoObjeto) // "object"
console.log(texto === textoObjeto) // false
// Nota
// NUNCA crees una instancia de String, Number, BigInt, Boolean o Symbol. Es innecesario y no es recomendable.

// Para terminar...
// Los tipos primitivos en JavaScript no son objetos, 
// pero JavaScript nos permite trabajar con ellos como si lo fueran mediante object wrappers temporales.
// Esta característica hace que el lenguaje sea más fácil de usar, pero es importante entender que:
// Los primitivos siguen siendo primitivos
// Los métodos se ejecutan en objetos temporales
// No puedes agregar propiedades persistentes a primitivos
// null y undefined no tienen object wrappers