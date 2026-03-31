// Transformar Arrays
// crear nuevos arrays a partir de los que ya tenemos

// filter -> Un nuevo Array con los elementos que cumplan una condición
const numbers = [1, 2, 3, 4, 5, 6, 7];
const pares = numbers.filter((num) => num % 2 === 0);
console.log(pares);

const strings = ["hola", "adiós", "casa", "coche", "perro", "gato"];
const withA = strings.filter((element) => element.includes("a"));
console.log(withA);

// map -> Un nuevo Array con los elementos transformados
const dobles = numbers.map((num) => num * 2);
console.log(dobles);

const stringsLength = strings.map((string) => string.length);
console.log(stringsLength);

// map + filter -> Un nuevo Array con los elementos transformados y filtrados
const doblesMayoresA5 = numbers
  .map((num) => num * 2) // los multiplica por 2 primero
  .filter((num) => num > 5); // filtra por los mayores a 5
console.log(doblesMayoresA5);

// al reves, filtramos primero los pares y luego multiplicamos por 2
const doubleEvenNumbers = numbers
  .filter((number) => number % 2 === 0) // [2, 4, 6]
  .map((number) => number * 2); // [4, 8, 12]

console.log(doubleEvenNumbers); // [4, 8, 12]

// reduce -> un unico valor a partir de un array
// recibe 2 parametros, una funcion que se ejecutara por cada elemento y un valor inicial, opcional,
// que será donde podremos acumular los valores.
// El primer parámetro de reduce, que es la función que se ejecutará por cada elemento, recibe tres parámetros:
// El acumulador: el valor que se va a ir acumulando en cada iteración
// El elemento actual: el elemento del Array que estamos iterando en ese momento.
// El índice: la posición del elemento actual en el Array.
// Y debe devolver el valor que se va a acumular en cada iteración.

// Ejemplo: sumar todos los elementos de un array
const sum = numbers.reduce(
  (acumulador, numActual) => acumulador + numActual,
  0,
); // <- el 0 es el valor inicial
console.log(sum); // 28
// Iteración 1: el acumulador vale 0 (ya que 0 es el valor inicial) y el elemento actual vale 1. Así que devolvemos 0 + 1 = 1
// Iteración 2: el acumulador vale 1 (el valor que devolvimos en la iteración anterior) y el elemento actual vale 2. Así que devolvemos 1 + 2 = 3
// Iteración 3: el acumulador vale 3 (el valor que devolvimos en la iteración anterior) y el elemento actual vale 3. Así que devolvemos 3 + 3 = 6

console.log(
  "-----------------------------------------------------------------------",
);

// doblar los números pares y sólo quedarnos con los mayores de 5
// const numbers = [1, 2, 3, 4, 5, 6, 7]
const doblarNumerosPares = numbers.reduce((accumulator, currentNumber) => {
    const isEven = currentNumber % 2 === 0;
    const doubled = currentNumber * 2;
    const isGreaterThanFive = doubled > 5;

    // si es par y mayor que 5, lo añadimos al array
    if (isEven && isGreaterThanFive) {
        // para ello devolvemos un nuevo array con el valor actual
        return accumulator.concat(doubled);
    } else {
        // si no, devolvemos lo que ya teníamos
        return accumulator;
    }
}, []); // <- el array vacío es el valor inicial
console.log(doblarNumerosPares);
// Lo interesante en este caso es que no hemos tenido que crear un array intermedio con map y filter.
// Hemos ido acumulando los valores que nos interesaban en cada iteración y los que no nos
// interesaban los hemos descartado devolviendo lo que ya teníamos en el acumulador.

// Nota
// Ten cuidado con reduce. Como puedes ver, su carga cognitiva es mayor que la de map y filter.
// Así que si puedes usar map y filter para hacer lo mismo, hazlo. Sólo usa reduce cuando no te quede más remedio.

console.log(
  "-----------------------------------------------------------------------",
);
// Recibes dos parámetros: una lista de palabras words y una palabra word. Primero, busca el índice de la palabra en la lista. 
// Después, usa ese índice (que será un número) y devuelve todas las palabras de words que sean más largas (length) que el número del índice.
// Ten en cuenta que la palabra word siempre existirá en el array, por lo que no es necesario comprobar si existe o no.
const words = ['perro', 'computador', 'paralelepipedo', 'zanahoria', 'hola', 'chao', 'chile', 'skittles', 'celu', 'agua']
const word = 'agua'
function buscaPalabras(words, word) {
  // tu código aquí
    const wordIndex = words.indexOf(word)
    return words.filter((word) => word.length > wordIndex)
}
console.log(buscaPalabras(words, word));
