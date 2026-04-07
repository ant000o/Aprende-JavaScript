const spiderman = {
    name: 'Spidey',
    universe: 42,
    powers: ['web', 'invisibility', 'spider-sense']
}

// Estructura de control: for...in

for (const property in spiderman) {
  console.log(`${property}: ${spiderman[property]}`);
}
// -> name: Spidey
// -> universe: 42
// -> powers: web,invisibility,spider-sense

console.log('');
console.log('');
console.log('');
console.log('--------------');
console.log('');
console.log('');
console.log('');

// Transformar el objeto a Array
console.log(
    Object.keys(spiderman)      // le pasamos el objeto del que queremos extraer las keys y pasarlas a un array
);

const properties = Object.keys(spiderman)
console.log(properties.length) // 3
properties.forEach(property => {
  console.log(property)
})
// -> name
// -> universe
// -> powers

console.log('');
console.log('--------------');
console.log('');

console.log(
    Object.values(spiderman)    // extraemos los values para un array
);

const values = Object.values(spiderman)
values.forEach(value => {
  console.log(value)
})
// -> Spidey
// -> 42
// -> [ 'web', 'invisibility', 'spider-sense' ]

console.log('');
console.log('--------------');
console.log('');

console.log(
    Object.entries(spiderman)   // nos entrega un array de arrays, cada posicion tendra 2 posiciones (key, value)
);
const entries = Object.entries(spiderman)
entries.forEach(entry => {
  console.log(entry)
})
// -> [ 'name', 'Spidey' ]
// -> [ 'universe', 42 ]
// -> [ 'powers', [ 'web', 'invisibility', 'spider-sense' ] ]
const entries2 = Object.entries(spiderman)
entries2.forEach(entry => {
  const property = entry[0]
  const value = entry[1]
  console.log(`${property}: ${value}`)
})
console.log('');
console.log('');
console.log('--------------');
console.log('');
console.log('');

const keys = Object.keys(spiderman)
keys.forEach(key => {
    console.log(spiderman[key]);
})


console.log('');
console.log('');
console.log('');
console.log('');
console.log('--------------');
console.log('');
console.log('');
console.log('');
console.log('');
// Tienes una función que recibe un objeto como parámetro. 
// La función debe retornar un array con el nombre de las propiedades que su tipo sea boolean.
// Por ejemplo, para el objeto { a: true, b: 42, c: false } 
// la función debe retornar ['a', 'c'] ya que son las dos propiedades que tienen valores booleanos.
const obj = { a: true, b: 42, c: false }
function getKeysOfBooleanValues(obj) {
    // tu código aquí
    let keys = []
    for (const property in obj){
        if (typeof obj[property] === 'boolean'){
            keys.push(property)
        }else{continue}
    }
    return keys
}
console.log(getKeysOfBooleanValues(obj));



// MEJOR SOLUCIÓN:
function getKeysOfBooleanValues(obj) {
    return Object.keys(obj).filter(key => typeof obj[key] === 'boolean')
}
