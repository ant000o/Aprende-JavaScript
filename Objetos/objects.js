// Los objetos son una coleccion de propiedades y metodos que definen un elemento a traves de una clave y un valor

// Para crear un objeto abrimos {} y ponemos sus propiedades, las cuales se separan en: key, value
// key es un string y value es el valor que queramos
const gameSystem = {
    name: 'PS5',
    price: 550,
    company: 'Sony',
    games: ['God of War', 'The Last of Us'],
    specs: {
        cpu: 'AMD',
        gpu: 'AMD',
        ram: 16,
        disk: 800
    },
    // en los objetos tambien podemos poner funciones,
    // las funciones que estan en los objetos se llaman métodos. Ejemplo:
    runGame (game){
        console.log(game);
        
    }
}

// otro ejemplo:
const persona = {
  name: 'Dani',
  age: 30,
  isWorking: true,
  family: ['Miguel', 'Maria'],
  address: {
    street: 'Calle de la piruleta',
    number: 13,
    city: 'Barcelona'
  },
  walk: function () { // <- método
    console.log('Estoy caminando')
  }
}


// Como acceder a sus propiedades o métodos
console.log(gameSystem.price * 2);   // de price * 2
console.log(gameSystem.games[0]);    // del array
console.log(gameSystem.specs.disk);  // del objeto anidado
console.log(gameSystem.runGame('Elden Ring'));  // del metodo

// Otra manera de acceder, no tan recomendada
const propertyName = 'company'
console.log(gameSystem[propertyName]);   // Sony

// Añadir y modificar propiedades de un objeto
const mascota = {name: 'Luke'}
mascota.age = 1  // agregamos age
console.log(mascota);
mascota.age = 1.5   // modificamos
console.log(mascota);
delete mascota.age  // eliminamos age
console.log(mascota);


console.log('')
console.log('')
console.log('------------------');
console.log('')
console.log('')

// Tenemos una función que recibe dos parámetros. name y subs. Haz que la función devuelva un objeto con la siguiente información:
// name con el valor del parámetro name
// subscribers con el valor del parámetro subs
// hash, con el valor de la longitud del string name multiplicado por el parámetro subs
// Un método getStatus que devuelva el texto El canal de <name> tiene <subs> suscriptores. 
// Por ejemplo, para name = 'Dani' y subs = 100, el método getStatus devolvería El canal de Dani tiene 100 suscriptores.
// ¡Ojo! El método getStatus debe devolver el texto, NO imprimirlo por consola.

function createObject(name, subs) {
  // tu código aquí
    return {
        name,
        subscribers: subs,
        hash: name.length * subs,
        getStatus: function () {
          return `El canal de ${this.name} tiene ${this.subscribers} suscriptores`
        }
    }
}
console.log(createObject('Miguel', 100).getStatus());
