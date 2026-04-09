// Nota
// En el 99% de los casos no vas a necesitar usar nunca Symbol. Yo personalmente creo que es interesante que los conozcas, pero si quieres un aprendizaje muy pragmático de JavaScript, puedes saltártelo y volver más adelante.

// ¿Qué es un Symbol?
// Un Symbol es un valor primitivo que representa un identificador único. Cada símbolo es único, incluso si se crean con la misma descripción. Y también podemos tener un registro global de símbolos, todos con un identificador, para recuperarlos cuando queramos.

// Los símbolos son útiles para crear propiedades de objetos que no colisionen con otras propiedades, incluso si tienen el mismo nombre.

// Cada Symbol es único
let sym1 = Symbol()
let sym2 = Symbol()
let sym3 = Symbol('descripcion')
let sym4 = Symbol('descripcion')

console.log(sym1 === sym2) // false
console.log(sym3 === sym4) // false (¡incluso con la misma descripción!)

console.log(typeof sym1) // "symbol"
// Como todos los tipos primitivos, Symbol es inmutable. Esto es que no se puede modificar su valor una vez creado.





// Creación de Symbols
Symbol()
// Symbol sin descripción
let simbolo = Symbol()
console.log(simbolo) // Symbol()

// Symbol con descripción (solo para depurar)
let simboloConDescripcion = Symbol('mi descripcion')
console.log(simboloConDescripcion) // Symbol(mi descripcion)




// Símbolos globales con Symbol.for()
// ¿Cómo podrías recuperar siempre el mismo símbolo? 
// Hasta ahora hemos visto que siempre que creamos un símbolo es único e irrepetible...

// Con el método Symbol.for(key) puedes buscar símbolos ya creados en un registro global de símbolos. 
// Si ya lo creaste, lo encontrará y te lo devolverá. Si no lo encuentra, lo creará por ti, 
// lo guardará en el registro global de símbolos y te lo devolverá.

// Es una forma de conseguir siempre los símbolos con el mismo valor usando una clave.

// Nota
// ¡No confundas esta clave con la descripción! Son dos cosas totalmente diferentes. 
// La descripción sólo sirve por temas de depuración, para describir el símbolo. La llave que usamos aquí identifica el símbolo.

// Symbol.for() usa un registro global
let global1 = Symbol.for('clave')
let global2 = Symbol.for('clave')

console.log(global1 === global2) // true (¡mismo símbolo!)

// Symbol.keyFor() obtiene la clave del registro
console.log(Symbol.keyFor(global1)) // "clave"

// Los símbolos locales no están en el registro
let local = Symbol('descripcion')
console.log(Symbol.keyFor(local)) // undefined


// Diferencias importantes entre Symbol(description) y Symbol.for(key)
// Symbol() siempre crea uno nuevo
let a = Symbol('test')
let b = Symbol('test')
console.log(a === b) // false

// Symbol.for() reutiliza existentes
let c = Symbol.for('test')
let d = Symbol.for('test')
console.log(c === d) // true

// La descripción de Symbol() y la llave de Symbol.for()
// no tienen nada que ver
console.log(a === c) // false






// Uso como propiedades de objetos
// Uno de los casos de uso de los Symbol es que se pueden usar como propiedades de un objeto. 
// Y como son únicos, no hay posibilidad de colisión con otras propiedades. 
// También se pueden usar para simular propiedades privadas.

// Propiedades únicas
// Símbolos como propiedades únicas
let id = Symbol('id')
let nombre = Symbol('nombre')

let usuario = {
  [id]: 12345,
  [nombre]: 'Juan',
  edad: 30
}

console.log(usuario[id]) // 12345
console.log(usuario[nombre]) // 'Juan'
console.log(usuario.edad) // 30

// No hay conflictos con propiedades string
usuario.id = 'string-id'
usuario.nombre = 'string-nombre'

console.log(usuario[id]) // 12345 (símbolo)
console.log(usuario.id) // 'string-id' (string)
console.log(usuario[nombre]) // 'Juan' (símbolo)
console.log(usuario.nombre) // 'string-nombre' (string)
// Además está información queda no visible en el caso que intentemos enumerar 
// las propiedades del objeto con Object.keys(), Object.getOwnPropertyNames() o for...in.

let sym = Symbol('oculto')
let obj = {
  visible: 'se ve',
  [sym]: 'oculto'
}

console.log(Object.keys(obj)) // ['visible']
console.log(Object.values(obj)) // ['se ve']

for (let key in obj) {
  console.log(key) // solo 'visible'
}
// Si quieres obtener los símbolos específicamente, puedes usar el método Object.getOwnPropertySymbols(). 
// Te dará un array con los símbolos que tiene el objeto.

console.log(Object.getOwnPropertySymbols(obj)) // [Symbol(oculto)]

// ¡Ojo con los objetos con símbolos a JSON!
// Ten en cuenta, que si intentas convertir un objeto con símbolos a JSON con JSON.stringify(), tampoco aparecerán en el resultado.

obj = {
  [Symbol('test')]: 'test'
}

console.log(JSON.stringify(obj)) // {}







// Conversión a cadena de texto
// Como los Symbol son valores primitivos, no se convierten automáticamente a string. 
// Por eso no puedes concatenarlos directamente con el operador + o usar plantillas de cadena de texto.

sym = Symbol('test')

// ❌ Esto no funciona
// console.log('Mi símbolo: ' + sym) // TypeError: Cannot convert a Symbol value to a string

// ✅ Conversión explícita

// Usando el método toString()
console.log('Mi símbolo: ' + sym.toString()) // "Mi símbolo: Symbol(test)"

// Usando la función String()
console.log('Mi símbolo: ' + String(sym)) // "Mi símbolo: Symbol(test)"







// Más casos de uso prácticos
// Constantes únicas
// En diccionarios o enumeradores con muchos valores diferentes, en lugar de utilizar cadenas de texto, 
// podrías crear un símbolo para cada valor. De esta forma te aseguras de que no hay colisiones de nombres.

// Estados de una aplicación
const ESTADOS = {
  CARGANDO: Symbol('cargando'),
  COMPLETADO: Symbol('completado'),
  ERROR: Symbol('error'),
  ERROR_DESCONOCIDO: Symbol('error')
}

function cambiarEstado(nuevoEstado) {
  switch (nuevoEstado) {
    case ESTADOS.CARGANDO:
      console.log('Cargando...')
      break
    case ESTADOS.COMPLETADO:
      console.log('¡Completado!')
      break
    case ESTADOS.ERROR:
      console.log('Error occurred')
      break
    case ESTADOS.ERROR_DESCONOCIDO:
      console.log('Error desconocido')
      break
    default:
      console.log('Estado desconocido')
  }
}

cambiarEstado(ESTADOS.CARGANDO) // "Cargando..."




// 4. Protocolo de comunicación
// Definir un protocolo usando símbolos
const EVENTOS = {
  CONECTAR: Symbol.for('app.conectar'),
  DESCONECTAR: Symbol.for('app.desconectar'),
  MENSAJE: Symbol.for('app.mensaje')
}

let manager = new EventManager()

manager.on(EVENTOS.CONECTAR, () => console.log('Conectado'))
manager.on(EVENTOS.MENSAJE, (msg) => console.log('Mensaje:', msg))

manager.emit(EVENTOS.CONECTAR) // "Conectado"
manager.emit(EVENTOS.MENSAJE, 'Hola!') // "Mensaje: Hola!"






// Resumiendo los Symbol()
// Los Symbol son útiles para:

// Identificadores únicos: Cada símbolo es único, incluso con la misma descripción
// Propiedades privadas: Crear propiedades que no aparecen en enumeraciones normales
// Evitar colisiones: Especialmente útil en bibliotecas y frameworks
// Constantes únicas: Para estados, tipos o categorías que deben ser únicos
// Características importantes:

// Son primitivos, no objetos
// No se convierten automáticamente a string
// No aparecen en for...in ni Object.keys()
// Symbol.for() usa un registro global
// Los símbolos son una herramienta avanzada pero muy poderosa para crear APIs más robustas y evitar conflictos de nombres en JavaScript.