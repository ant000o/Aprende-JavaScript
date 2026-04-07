// Atajo al crear un objeto
// Creamos un objeto con algunas de sus propiedades usando como valor algunas variables que ya tenemos.
const name = 'Spidey'
const universe = 42
const spiderman = {
    // name: name,
    // universe: universe,
    // si la propiedad y la variable tienen el mismo nombre, podemos omitir el valor
    name,
    universe,
    powers: ['web', 'invisibility', 'spider-sense'],
}

// Destructuración: el atajo al recuperar propiedades
// recuperamos el valor y lo guardamos en una variable
// const universe = spiderman.universe
console.log(universe) // 42

const powers = spiderman['powers'][1]
console.log(powers) // 'invisibility'

console.log('');
console.log('--------------');
console.log('');


// Atajo Destructuring:
// (tener en cuenta que la variable que se creará tendrá el mismo nombre que la propiedad que estamos recuperando)
const spidey = {universo: 42, nombre: 'Peter Parker', poderes: ['telaraña', 'fuerza sobrehumana', 'sentido aracnido']}
// podemos recuperar tantas propiedades como queramos, separando por coma
const { universo, nombre, poderes } = spidey
console.log(universo) // 42
console.log(nombre) // 'Peter Parker'
console.log(poderes) // ['telaraña', 'fuerza sobrehumana', 'sentido aracnido']



// Renombrar variables y valores por defecto
// Si quieres que la variable que se crea tenga un nombre diferente al de la propiedad, puedes hacerlo así:
const { universe: universeNumber } = spiderman
console.log(universeNumber) // 42
// Lo que estamos haciendo es recuperar la propiedad universe pero crear la constante con el nombre universeNumber.


// Si la propiedad no existe, podemos asignarle un valor por defecto:
const { isAvenger = false } = spiderman
console.log(isAvenger) // false
// Esto es muy útil, por ejemplo, para recuperar opciones o configuración del usuario que quizás
// no ha definido todos los valores pero tenemos claro qué comportamiento queremos que tenga nuestra aplicación por defecto.


// Objetos anidados y atajo
const spiderman2 = {
  name: 'Spidey',
  universe: 42,
  powers: ['web', 'invisibility', 'spider-sense'],
  partner: {
    namePartner: 'Mary Jane',
    universe: 42,
    powers: ['red hair', 'blue eyes']
  }
}
// Para acceder a las propiedades de un objeto anidado, podemos usar la notación de corchetes o la notación de punto:
console.log(spiderman2.partner.namePartner) // 'Mary Jane'
console.log(spiderman2['partner']['namePartner']) // 'Mary Jane'


// Si queremos recuperar la propiedad name del objeto partner y guardarla en una variable, podemos hacerlo así:
// const { partner } = spiderman
// const { namePartner } = partner
// console.log(namePartner) // 'Mary Jane'


// Pero también podemos hacerlo en una sola línea:
const {
  partner: { namePartner }
} = spiderman2
console.log(namePartner) // 'Mary Jane'
// Lo que estamos haciendo es: del objeto spiderman extrae la propiedad partner, y de esta, extrae la propiedad name. Como resultado sólo crearemos la variable name con el valor 'Mary Jane'.


