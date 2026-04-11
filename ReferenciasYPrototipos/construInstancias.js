// Funciones constructoras e instancias

// Qué son las funciones constructoras?
// Son funciones especiales para crear múltiples objetos con la misma estructura
// Se llaman con new y crean instancias (copias) del objeto.

// Analogía: Una función constructora es como un molde para hacer galletas. 
// El molde define la forma, y cada galleta que haces es una instancia única pero con la misma estructura.

// Funcion constructora (se escribe con mayuscula por convención)
function Persona(nombre, edad){
    this.nombre = nombre
    this.edad = edad
}

// Creamos instancias
const ana = new Persona('Ana', 25)
const carlos = new Persona('Carlos', 30)

console.log(ana.nombre) // "Ana"
console.log(carlos.nombre) // "Carlos"
console.log(ana.edad) // 25
console.log(carlos.edad) // 30
// ¿Qué es el this? 
// Es una referencia al objeto que se está creando. 
// En este caso, this se refiere a la instancia de la persona que se está creando.






// Qué hace la palabra new
// Cuando usas new con una función constructora, JavaScript hace 4 cosas automáticamente:

function Persona2(nombre) {
  // 1. Crea un objeto vacío: this = {}
  // 2. Establece el prototipo: this.__proto__ = Persona2.prototype
  this.nombre = nombre
  // 3. Ejecuta el código de la función
  // 4. Retorna this automáticamente
}

const pepe = new Persona2('Pepe')
// Diagrama del proceso:

//      new Persona2('Pepe')
//             ↓
//    1. this = {}
//    2. this.__proto__ = Persona.prototype
//    3. this.nombre = 'Pepe'
//    4. return this
//             ↓
//         Objeto ana








// La propiedad prototype
// Toda funcion constructora tiene una propiedad especial llamada prototype.
// Ahí es donde ponemos los métodos que queremos que compartan todas las instancias.
function Coche(marca, modelo){
  this.marca = marca
  this.modelo = modelo
}

// Añadimos métodos al prototype
Coche.prototype.acelerar = function () {
  console.log(`${this.marca} ${this.modelo} está acelerando`);
}

Coche.prototype.frenar = function () {
  console.log(`${this.marca} ${this.modelo} está frenando`);
}

// Creamos instancias
const coche1 = new Coche('Toyota', 'Corolla')
const coche2 = new Coche('Honda', 'Civic')

// Ambos pueden usar los métodos del prototype
coche1.acelerar() // "Toyota Corolla está acelerando"
coche2.frenar() // "Honda Civic está frenando"












// prototype vs __proto__
// ¿Qué diferencia hay entre prototype y __proto__? ¡Es muy importante y uno de los errores más comunes en JavaScript!

// prototype (solo en funciones constructoras)
// Es una propiedad de las funciones constructoras
// Nos ayuda a definir qué métodos tendrán las instancias

// __proto__ (en todos los objetos)
// Es una propiedad de las instancias
// Apunta al prototype de la función constructora

function Animal(nombre){
  this.nombre = nombre
}

// Animal.prototype.dormir = () => console.log(`${this.nombre} está durmiendo`);   // ESTO NO SE PUEDE, LAS ARROW FUNCTION NO TIENEN SU PROPIO this
Animal.prototype.dormir = function() {
  console.log(`${this.nombre} está durmiendo`);   
} 

const perro = new Animal('Rex')

// prototype vs __proto__
console.log(Animal.prototype) // "object"
console.log(perro.__proto__) // "object"

// Ambos apuntan al mismo prototipo
console.log(Animal.prototype === perro.__proto__) // true
// Diagrama visual:

//     Función Animal              Instancia perro
//  ┌─────────────────────┐      ┌─────────────────────┐
//  │ function Animal()   │      │ nombre: "Rex"       │
//  │                     │      │                     │
//  │ prototype: {        │◀─────┤ __proto__           │
//  │   dormir() {...}    │      │                     │
//  │   constructor: ...  │      └─────────────────────┘
//  │ }                   │
//  └─────────────────────┘







// Propiedades vs Métodos
// Buena práctica: Las propiedades específicas van en la función constructora, los métodos compartidos van en el prototype.

function Persona3(nombre, edad){
  // Propiedades específicas de cada instancia
  this.nombre = nombre
  this.edad = edad
}

// Métodos compartidos en el prototype
Persona3.prototype.saludar = function () {
  console.log(`Hola, soy ${this.nombre}`)
}

Persona3.prototype.cumplirAnios = function () {
  this.edad++
  console.log(`¡Feliz cumpleaños! Ahora tengo ${this.edad} años`)
}

const dina = new Persona3('Dina', 25)
const arka = new Persona3('Arka', 30)

dina.saludar() // "Hola, soy Dina"
arka.saludar() // "Hola, soy Arka"
dina.cumplirAnios() // "¡Feliz cumpleaños! Ahora tengo 26 años"










// ¿Por qué usar prototype?
// Eficiencia de memoria
// Sin prototype, cada instancia tendría su propia copia del método:

// ❌ Ineficiente - cada instancia tiene su propia función
function PersonaMala(nombre) {
  this.nombre = nombre
  this.saludar = function () {
    console.log(`Hola, soy ${this.nombre}`)
  }
}

// ✅ Eficiente - todas las instancias comparten la misma función
function PersonaBuena(nombre) {
  this.nombre = nombre
}

PersonaBuena.prototype.saludar = function () {
  console.log(`Hola, soy ${this.nombre}`)
}
// Comparación de memoria:

//   PersonaMala (ineficiente)         PersonaBuena (eficiente)
// ┌─────────────────────────────┐   ┌─────────────────────────────┐
// │ ana1: {                     │   │ ana2: {                     │
// │   nombre: "Ana",            │   │   nombre: "Ana",            │
// │   saludar: function() {...} │   │   __proto__: {              │
// │ }                           │   │     saludar: function(){}  │
// │                             │   │   }                         │
// │ carlos1: {                  │   │ }                           │
// │   nombre: "Carlos",         │   │                             │
// │   saludar: function() {...} │   │ carlos2: {                  │
// │ }                           │   │   nombre: "Carlos",         │
// └─────────────────────────────┘   │   __proto__: ───────────────┼──┐
//                                   │ }                           │  │
//                                   └─────────────────────────────┘  │
//                                     ↑_________________________________│
//                                     Misma función compartida











// Verificar instancias
// JavaScript nos da herramientas para verificar si un objeto es instancia de una constructor function:

function Vehiculo(tipo){
  this.tipo = tipo
}

const coche = new Vehiculo('automóvil')
const moto = new Vehiculo('motocicleta')

// instanceof - verifica si un objeto es instancia de una función
console.log(coche instanceof Vehiculo) // true
console.log(moto instanceof Vehiculo) // true
console.log(coche instanceof Array) // false

// constructor - referencia a la función que creó el objeto
console.log(coche.constructor === Vehiculo) // true
console.log(moto.constructor === Vehiculo) // true










// Herencia con Constructor Functions
// Puedes crear jerarquías de herencia combinando constructor functions:

// Constructor padre
function Juego(nombre){
  this.nombre = nombre
}

Juego.prototype.iniciar = function() {
  console.log(`${this.nombre} está iniciando`);
} 

// Constructor hijo
function Tipo(nombre, genero){
  Juego.call(this, nombre) // Llama al constructor padre
  this.genero = genero
}

// Establecemos la herencia
Tipo.prototype = Object.create(Juego.prototype)
Tipo.prototype.constructor = Tipo

// Añadimos métodos específicos
Tipo.prototype.favorito = function() {
  console.log(`${this.nombre} se agregó a favoritos`);
} 

const gow = new Tipo('God of War', 'Acción, Aventura y Fantasía')
gow.iniciar()   // "God of War está iniciando"
gow.favorito()  // "God of War se agregó a favoritos" 

// Cadena de prototipos resultante (Prototype Chain):
// gow → Tipo.prototype → Juego.prototype → Object.prototype → null







console.log('');
console.log('');
console.log('------------------------------------------');
console.log('');
console.log('');





// Ejercicio práctico
// Crea una función constructora llamada Producto que:

// Reciba nombre y precio como parámetros y los asigne con this
// Tenga un método aplicarDescuento(porcentaje) que reduzca el precio según el porcentaje
// Tenga un método mostrarInfo() que devuelva una cadena de texto con el nombre y precio

function Producto(nombre, precio) {
  this.nombre = nombre
  this.precio = precio
}

Producto.prototype.aplicarDescuento = function(porcentaje) {
  this.precio = this.precio * (1 - porcentaje / 100)
  return this.precio
}

Producto.prototype.mostrarInfo = function() {
  return `${this.nombre} - $${this.precio}`
}


// Yo lo hice con prototype, pero midu esperaba esto:
// function Producto(nombre, precio) {
  // this.nombre = nombre
  // this.precio = precio
  // this.aplicarDescuento = function(porcentaje) {
  //   this.precio = this.precio * (1 - porcentaje / 100)
  // }
  // this.mostrarInfo = function() {
  //   return this.nombre + ": " + this.precio + "€"
  // }
// }



const pizza = new Producto('Pizza', 3000)

console.log(pizza.mostrarInfo())
pizza.aplicarDescuento(20)
console.log(pizza.mostrarInfo())












// Para que quede claro...
// Funciones constructoras:

// Se escriben con mayúscula por convención
// Se llaman con new para crear instancias
// this se refiere a la nueva instancia
// La propiedad prototype:

// Solo existe en las funciones
// Define métodos compartidos por todas las instancias
// Es más eficiente que definir métodos en cada instancia
// Instancias (objetos):

// Son objetos creados con new
// Tienen acceso a métodos del prototype
// Su __proto__ apunta al prototype de la función
// Ventajas de usar funciones constructoras:

// ✅ Reutilización de código
// ✅ Eficiencia de memoria
// ✅ Herencia estructurada
// ✅ Verificación de tipos con instanceof
// Este sistema de constructor functions fue la base de la programación orientada a objetos en JavaScript antes de que llegaran las clases modernas de ES6.