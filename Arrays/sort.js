// sort -> ordenar arrays
const numeros = [5, 10, 2, 25, 7];

// para aplicar el metodo sort en este caso, le tenemos que pasar una funcion de comparacion como argumento
// sin la funcion, ordenará los numeros en base a su valor como cadena de texto
numeros.sort(function (a, b) {
  // Un valor negativo si el primer argumento debe aparecer antes que el segundo.
  // Un valor positivo si el segundo argumento debe aparecer antes que el primero.
  // Cero si ambos argumentos son iguales.
  return a - b; // printeara la lista en orden creciente
});

// simplificado
numeros.sort((a, b) => b - a); // aqui printeará la lista en orden decreciente

console.log(numeros);

// sort() y toSorted()
// sort modifica el array original, con toSorted podemos evitar eso, pero su soporte en browsers es limitado
let nums = [5, 10, 2, 25, 7];

let numerosOrdenados = nums.toSorted((a, b) => {
  return a - b;
});

console.log(numerosOrdenados); // [2, 5, 7, 10, 25]
console.log(nums); // [5, 10, 2, 25, 7]

// También podrías usar el operador de propagación (...) para crear una copia del array original y ordenarla:
let numbers = [5, 10, 2, 25, 7];

const copiaNumeros = [...numbers];
// ordenamos la copia y no el original
copiaNumeros.sort((a, b) => a - b);

console.log(copiaNumeros); // [2, 5, 7, 10, 25]
console.log(numbers); // [5, 10, 2, 25, 7]

console.log("-------------------------------------------------------");
// Recibes una lista de números. Debes ordenar los números de menor a mayor según su valor absoluto.
// Eso quiere decir que los números negativos pierden el signo y se ordenan como si fueran positivos.
// Por ejemplo, si recibes [5, -10, -2, -25, -7] deberías devolver [-2, 5, -7, -10, -25].
// Puedes usar el método Math.abs(num) para obtener el valor absoluto de un número.
const numeritos = [5, -10, -2, -25, -7];
function sortAbsoluteNumbers(numbers) {
  // tu código aquí
  return numbers.sort((a, b) => Math.abs(a) - Math.abs(b));    // esto muta el array, para no mutarlo usariamos toSorted
}

console.log(sortAbsoluteNumbers(numeritos));
