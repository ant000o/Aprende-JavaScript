// Que son los prototipos?
// Caracteristica fundamental que permite la herencia entre objetos.
// Cada objeto tiene un prototipo, que es otro objeto del cual hereda propiedades y métodos

// Ejemplo de la vida real: Un prototipo es como el manual de un coche de la misma marca y modelo: 
// cada coche es distinto y tiene su matrícula única, pero todos consultan el mismo manual cuando hay que saber cómo funciona algo.




// Cómo funciona la herencia prototípica
// A diferencia de otros lenguajes que usan clases, JavaScript usa prototipos para la herencia.

// Prototype Chain
//   Objeto (instancia)          Prototipo
//   ┌─────────────┐           ┌─────────────┐
//   │ name: "Ana" │    ──────▶│ walk()      │
//   │ age: 25     │           │ talk()      │
//   │ __proto__   │           │ __proto__   │──▶ null
//   └─────────────┘           └─────────────┘
// Proceso de búsqueda: Cuando intentas acceder a una propiedad, JavaScript:

// Busca en el objeto mismo
// Si no la encuentra, busca en su prototipo
// Si no la encuentra, busca en el prototipo del prototipo
// Continúa hasta llegar a null




// Ejemplo básico:

// Objeto padre (prototipo)
const animal = {
    tipo: 'Mamífero',
    respirar() {
        console.log('Respirando...')
    }
}

// Creamos un objeto que hereda de animal
const perro = Object.create(animal)
perro.raza = 'Labrador'
perro.ladrar = function () {
    console.log('¡Guau!')
}
// Propiedades propias vs heredadas
console.log(perro.raza) // "Labrador" (propio)
console.log(perro.tipo) // "Mamífero" (heredado)

perro.ladrar() // "¡Guau!" (propio)
perro.respirar() // "Respirando..." (heredado)


// La cadena de prototipos se ve así:

//     perro               animal            Object.prototype
// ┌─────────────┐      ┌─────────────┐       ┌─────────────┐
// │ raza        │ ────▶│ tipo        │ ────▶ │ toString()  │──▶ null
// │ ladrar()    │      │ respirar()  │       │ valueOf()   │
// │ __proto__   │      │ __proto__   │       │ __proto__   │
// └─────────────┘      └─────────────┘       └─────────────┘







// Object.create() - La forma moderna
// Object.create() es la manera recomendada de crear herencia. 
// Le pasaríamos como primer parámetro el prototipo del objeto que queremos crear.

const vehiculo = {
    acelerar() {
        console.log('Acelerando...');
    }
}

// Herencia con Object.create()
const coche = Object.create(vehiculo)
coche.ruedas = 4
coche.arrancar = () => console.log('Motor encendido')

const moto = Object.create(vehiculo)
moto.ruedas = 2

// Ambos heredan de vehiculo
coche.acelerar() // "Acelerando..." (heredado)
moto.acelerar() // "Acelerando..." (heredado)







// Object.prototype - El prototipo por defecto
// Cuando creas un objeto con {}, automáticamente hereda de Object.prototype. 
// Pero si quieres crear un objeto sin prototipo, puedes usar Object.create(null), 
// de esta forma no heredará de Object.prototype y no tendrás los métodos y propiedades que hereda por defecto.

// Automáticamente hereda de Object.prototype
const objeto = {}
console.log(objeto.toString()) // [object Object] (heredado)

// Para crear un objeto sin prototipo
const sinPrototipo = Object.create(null)
console.log(sinPrototipo.toString()) // TypeError: sinPrototipo.toString is not a function

// Object.prototype ya tiene algunos métodos que hereda por defecto, como toString(), hasOwnProperty(), isPrototypeOf(), etc.








// Al crear un objeto así { name: 'Ana' } si inspeccionamos el objeto en las herramientas de desarrollo de Chrome, 
// vamos a ver un montón de métodos y propiedades que tiene:

// [[Prototype]]: Object
// - constructor: ƒ Object()
// - hasOwnProperty: ƒ hasOwnProperty()
// - isPrototypeOf: ƒ isPrototypeOf()
// - propertyIsEnumerable: ƒ propertyIsEnumerable()
// - toLocaleString: ƒ toLocaleString()
// - toString: ƒ toString()
// - valueOf: ƒ valueOf()
// - __defineGetter__: ƒ __defineGetter__()
// - __defineSetter__: ƒ __defineSetter__()
// - __lookupGetter__: ƒ __lookupGetter__()
// - __lookupSetter__: ƒ __lookupSetter__()
// - __proto__: Object
// - get __proto__: ƒ __proto__()
// - set __proto__: ƒ __proto__()

// Todos estos métodos y propiedades son heredados de Object.prototype. Ahora bien, hay una propiedad especialmente interesante: __proto__.
// Esta propiedad apunta al prototipo del objeto. En el caso de que el objeto no tenga un prototipo, esta propiedad será null.
// También podemos modificar el prototipo de un objeto con esta propiedad pero no es recomendable.
// De hecho, esta propiedad sólo se usa por temas históricos, 
// a día de hoy está totalmente desaconsejada ya que existe una forma más moderna de recuperar el prototipo de un objeto o modificarlo.









// Object.getPrototypeOf() y Object.setPrototypeOf()

// Con Object.getPrototypeOf() podemos obtener el prototipo de un objeto.

const object = {nombre: 'Ana'}
console.log(Object.getPrototypeOf(object)); // Object.prototype

const perro = Object.create(animal)
console.log(Object.getPrototypeOf(perro));  // animal

const vacio = Object.create(null)
console.log(Object.getPrototypeOf(vacio));  // null


// Con Object.setPrototypeOf() podemos modificar el prototipo de un objeto.
const persona = { nombre: 'Ana' }
Object.setPrototypeOf(persona, null)

// ahora persona no hereda de Object.prototype
console.log(Object.getPrototypeOf(persona)) // null

const perro = Object.create(persona)
console.log(Object.getPrototypeOf(perro)) // persona

// ¡nos hemos equivocado! Vamos a cambiarlo
Object.setPrototypeOf(perro, animal)
console.log(Object.getPrototypeOf(perro)) // animal










// Los prototipos en clave
// JavaScript usa prototipos para la herencia.
// Todos los objetos en JS tienen un prototipo, excepto si los creas con Object.create(null).
// Object.create() es la forma moderna de crear objetos con un prototipo específico.
// Usa Object.getPrototypeOf() y Object.setPrototypeOf() en lugar de __proto__.