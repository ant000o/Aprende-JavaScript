const gamesystem = {
    name: 'PS5',
    price: 500,
    specs: {
        cpu: 'AMD',
        gpu: 'AMD'
    }
}

// Si intentamos acceder a una propiedad de un objeto que no existe... ¡se romperá nuestra aplicación!
console.log(gamesystem.specifications) // -> undefined
// console.log(gamesystem.specifications.ram) 
// ❌ Uncaught TypeError: Cannot read property 'ram' of undefined

// hay varias maneras de poder confirmar si una propiedad existe
// Evitando el error con if
if (typeof gamesystem.specifications === 'object') {
  console.log(gamesystem.specifications.ram)
} else {
  console.log('No hay especificaciones')
}

// El operador in para comprobar si una propiedad existe
// Este operador comprueba si una propiedad existe en un objeto y devuelve true o false:
console.log('name' in gamesystem) // -> true
console.log('specifications' in gamesystem) // -> false
console.log('specs' in gamesystem) // -> true

if ('specifications' in gamesystem) {
  console.log(gamesystem.specifications.ram)
} else {
  console.log('No hay especificaciones')
}
// ¡Pero ojo! ¿Qué pasa si la propiedad existe pero su valor es undefined?

const gamesystem2 = {
  name: 'PS5',
  price: 550,
  specifications: undefined,
}

console.log('specifications' in gamesystem) // -> true

// gamesystem.specifications.ram
// ❌ Uncaught TypeError: Cannot read property 'ram' of undefined
// El operador in puede ser interesante para comprobar si una propiedad existe en un objeto, pero no nos sirve para comprobar si el valor de esa propiedad es undefined y habría que hacer comprobaciones extra para evitar el error.

if (
  'specifications' in gamesystem &&
  gamesystem.specifications !== undefined &&
  gamesystem.specifications !== null) {
  console.log(gamesystem.specifications.ram)
} else {
  console.log('No hay especificaciones')
}


// Mucho código para algo tan simple. Por suerte, existe una forma más sencilla de hacerlo.

// Operador de encadenamiento opcional, ?. (Optional Chaining)
// una manera corta de comprobar si una propiedad existe
console.log(gamesystem.specifications?.cpu)
// -> undefined, sin producir ningún error
console.log(gamesystem.specs?.cpu)
// -> AMD Ryzen Zen 2

// Este operador es especialmente útil en aplicaciones con datos dinámicos, 
// donde no siempre podemos garantizar la estructura exacta de nuestros objetos.
const user = {
  name: 'Peter',
  settings: {
    theme: 'dark',
    notifications: {
      email: true,
      push: false,
      marketing: undefined
    }
  }
}

// la forma clásica de acceder a una propiedad anidada
// de forma segura
// let email = undefined
// if (user && user.settings &&
//   user.settings.notifications &&
//   user.settings.notifications.email) {
//   email = user.settings.notifications.email
// }

// console.log(email) // -> true

// con Optional Chaining Operator
const email = user?.settings?.notifications?.email
console.log(email) // -> true





console.log('');
console.log('');
console.log('');
console.log('');
console.log('--------------');
console.log('');
console.log('');
console.log('');
console.log('');



// Somos un equipo de submarinistas. Estamos explorando el fondo marino pero no sabemos qué nos vamos a encontrar porque vamos casi a ciegas. 
// Vamos con un pequeño robot y funciona con un programa que recibe tres parámetros:

// Un objeto con la información del fondo marino
// Una cadena de texto con el nombre del lugar que queremos explorar
// Una cadena de texto con el nombre del objeto que queremos encontrar
// Por ejemplo. Con el objeto ocean que nos llega como primer parámetro, podemos explorar el lugar deep y buscar el objeto treasure. 
// Así que intentaríamos acceder a ocean.deep.treasure.

// Si lo encontramos el robot nos devuelve true y si no lo encuentra nos devuelve false. 
// Sólo necesitamos saber si lo hemos encontrado o no, no necesitamos saber su valor.

// Vamos a necesitar asegurarnos que el robot no se rompa, que cuesta mucho dinero, 
// en el caso que no pueda encontrar el lugar o el objeto que le hemos pedido. 
// Así que vamos a usar el operador de encadenamiento opcional para evitar errores.

// Pista: ¡Recuerda que en una clase anterior hemos visto cómo podemos acceder a una propiedad de un objeto usando una variable! 
// Por ejemplo, si tenemos un objeto person y una variable key con el valor name, 
// podemos acceder a la propiedad name del objeto person usando person[key] y sería como hacer person.name.

const ocean = {
  deep: {
    treasure: "oro",
    fish: false
  },
  reef: {
    coral: true
  }
};

function searchInOcean(ocean, section, item) {
    // tu código aquí
    return ocean?.[section]?.[item] != null    // MEJOR RESPUESTA AAAAAAAA

    if (ocean?.[section]?.[item]){
        return true
    }else{
        return false
    }

}

console.log(searchInOcean(ocean, "deep", "treasure"));
