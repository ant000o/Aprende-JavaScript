// Arrays
// En los arrays se pueden guardan todo tipo de datos. Ej:
['hola', 2, 3, 4, [2, 1, 5], true, undefined, null]

// como acceder a los elementos del array
const numbers = [1, 2, 3]
console.log(numbers[0])  // 1

// se puede acceder a un elemento, indicandole un numero a otra variable
const position = 1;

console.log(numbers[position])  // 2

// para modificar
numbers[1] = 12
console.log(numbers[1]); // 12

// por que se pudo modificar si lo declaramos como const? porque se nos permite cambiar solo los elementos internos del array
// si hacemos esto:
numbers = 'hola' 
console.log(numbers)    // nos dará el error Assignment to constant variable.