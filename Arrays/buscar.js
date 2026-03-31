// Métodos para buscar en un Array

const perros = ["alaskan", "akita", "shiba"];

// indexOf  ->  en que posicion está el elemento?
const shibaIndex = perros.indexOf("shiba");
console.log(shibaIndex);

// includes -> el elemento existe en el Array?
const akitaExists = perros.includes("akita");
console.log(akitaExists);
// includes tambien sirve con strings -> 'Hola mundo'.includes('Hola') // true

// includes es la forma más sencilla y corta, sin embargo,
// si queremos verificar que un elemento cumple una condicion, entonces usamos otros metodos

// some -> alguno de los elementos cumple con la condición?
const alaskanExists = perros.some((perro) => perro === "alaskan"); // some recibe una funcion como argumento y
// esa funcion recibe como argumento cada uno de los elementos del array y retorna un boolean
console.log(alaskanExists); // true

// lo anterior se puede hacer con includes, pero a some le podemos crear funciones más complejas para pasarle
// funcion que verifique si hay un string que tiene más de 3 caracteres
const names = ["Leo", "Isa", "Ían", "Lea"];

const nombreLargo = names.some((name) => name.length > 3);
console.log(nombreLargo);
// some no itera más allá del elemento que ya cumple con la condicion dentro del array
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const tieneNumeroMayorA5 = numbers.some((num) => {
  console.log(`Estoy iterando sobre el numero ${num}`); // -> Imprime hasta el número 6
  return num > 5;
});
console.log(tieneNumeroMayorA5); // true

// every -> todos los elementos cumplen con la condicion?
// funciona similar a some, pero retorna true solo si todos los elementos del array tambien retornan true
// ¿Todos los emojis son felices?
const emojis = ["😀", "😂", "😍", "😭", "🥺", "😎"];
const todosSonFelices = emojis.every((emoji) => emoji === "😀");
console.log(todosSonFelices); // -> false

// ¿Todos los números son pares?
const nums = [2, 4, 7, 10, 12];
const todosSonPares = nums.every((number) => number % 2 === 0);
console.log(todosSonPares); // -> false

// ¿Todos los strings son mayores a 3 caracteres?
const nombres = ["Miguel", "Juan", "Itziar", "Isabel"];
const todosLosNombresSonLargos = nombres.every((name) => name.length > 3);
console.log(todosLosNombresSonLargos); // -> true

// Al igual que some, el método every deja de iterar sobre el Array en cuanto
// encuentra un elemento que NO cumple con la condición.

// find -> Devuelve el primer elemento que cumple con la condición
// similar a some y every, se pasa una funcion como argumento que retorne un booleano,
// aunque el metodo find en si retorna el elemento.
const numeros = [13, 27, 44, -10, 81];
// encuentra el primer número negativo
const firstNegativeNumber = numeros.find((number) => number < 0);

console.log(firstNegativeNumber); // -> -10
// si no encuentra ningun elemento que cumpla con la condicion, retorna undefined
// find deja de iterar cuando encuentra un elemento que cumpla la condicion, al igual que some.

// findIndex -> Devuelve el índice del primer elemento que cumple con la condición
// similar a find, pero devuelve el indice del elemento
// encuentra el índice del primer número negativo
const firstNegativeNumberIndex = numeros.findIndex((number) => number < 0);

console.log(firstNegativeNumberIndex); // -> 3

// ahora puedes usar el índice para acceder al elemento
console.log(numeros[firstNegativeNumberIndex]); // -> -10

// Si no encuentra ningún elemento que cumpla con la condición, el método findIndex retorna -1.

console.log(
  "-----------------------------------------------------------------------",
);
// Ejercicio práctico
// Crear una función que reciba un array de palabras y devuelva true si
// todas las palabras terminan con la letra "a" y false si al menos una palabra no termina con la letra "a".
// Usa el método endsWith() de string para resolverlo.
const words = ["manzana", "arka", "telepatia", "dina"];
function acabanEnA(words) {
  // tu código aquí
  return words.every((word) => word.endsWith("a"));
}
console.log(acabanEnA(words));
