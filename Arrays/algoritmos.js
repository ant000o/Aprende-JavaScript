const nums = [1, 34, 45, 55, 67, 85, 100]
// Algoritmo para encontrar el número mayor
function findMaxAlgorithm(array) {
  let max = array[0] // recuperamos el primer elemento del array

  // recorremos el array desde el segundo elemento
  for (let i = 1; i < array.length; i++) {
    // ¿es el elemento actual mayor que el máximo?
    if (array[i] > max) {
      // si es así, lo guardamos como nuevo máximo
      max = array[i]
    }
  }
  // devolvemos el máximo número que hemos encontrado
  return max;
}
console.log(findMaxAlgorithm(nums));

// En JavaScript podríamos usar el método Math.max para encontrar el número mayor de un array. 
// Se usaría así: Math.max(...array). Pero por motivos didácticos, hemos creado nuestro propio algoritmo. 
// Siempre que puedas, te recomiendo usar Math.max en su lugar.
const maxNum = Math.max(...nums);
console.log(maxNum);

// Complejidad algorítmica
// Para calcular, tener en cuenta el numero de operaciones que se realizan
// En programación se usa la notación O(n) para indicar que el número de operaciones que se 
// realizan es igual al número de elementos del array. En este caso, n es el número de elementos del array.

// Busqueda binaria
// Algoritmo para buscar el numero 55 en un array
function findNumber(array, number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      return true
    }
  }

  return false
}
// Obviamente, podríamos usar el método .includes() para comprobar si un array contiene un elemento. 
// Pero por motivos didácticos, hemos creado nuestro propio algoritmo. 
// Siempre que puedas, te recomiendo usar .includes() en su lugar.

// La complejidad de ese algoritmo es O(n)

// Existe un algoritmo muy popular llamado búsqueda binaria que nos permite encontrar un elemento en un array ordenado en O(log n). 
// Es decir, el número de operaciones que se realizan es igual al logaritmo del número de elementos del array. ¿Qué significa esto?.

// Imagina que tenemos un array de 10 elementos. 
// Si aplicamos la búsqueda binaria, el número de operaciones que se realizan es igual a 3. 
// Si tenemos un array de 100 elementos, el número de operaciones que se realizan es igual a 6. 
// ¿Ves la diferencia? ¡Es mucho más rápido!

// Para aplicar la búsqueda binaria, tenemos que tener en cuenta que el array tiene que estar ordenado de menor a mayor. Si no, no funcionará.

console.log('')
console.log('')
console.log('------------------');
console.log('')
console.log('')


// Implementación de la búsqueda binaria
// la idea es ir dividiendo el array en mitades hasta encontrar el elemento
// si el elemento es mayor a la mitad de la derecha, busca en la izquierda y al revés
function busquedaBinaria(array, elemento) {
  let index = 0 // primer elemento del array
  let final = array.length - 1 // último elemento del array a buscar
  
  // mientras el índice sea menor o igual que el final
  // seguiremos buscando
  while (index <= final) {
    // calculamos la mitad del array
    // como puede ser impar, usamos Math.floor para redondear hacia abajo
    const mitad = Math.floor((index + final) / 2)
    
    // si el elemento de la mitad es igual al elemento que estamos buscando
    // entonces hemos encontrado el elemento
    if (array[mitad] === elemento) {
      return mitad
    } else if (array[mitad] < elemento) {
      // si el elemento de la mitad es menor que
      // el elemento que estamos buscando
      // entonces tenemos que buscar en la mitad derecha
      index = mitad + 1
    } else {
      // si el elemento de la mitad es mayor que
      // el elemento que estamos buscando
      // entonces tenemos que buscar en la mitad izquierda
      final = mitad - 1
    }
  }
  
  // si llegamos hasta aquí, es que no hemos encontrado el elemento
  // devolvemos -1, para indicar que no se ha encontrado
  return -1
}
console.log(busquedaBinaria(nums, 55));
// En JavaScript podríamos usar el método Array.prototype.indexOf para encontrar el índice de un elemento en un array. 
// Se usaría así: array.indexOf(elemento). Pero por motivos didácticos, hemos creado nuestro propio algoritmo. 
// Siempre que puedas, te recomiendo usar Array.prototype.indexOf en su lugar.



// Ejercicio práctico:
// En una biblioteca queremos saber qué libro es el que menos páginas tiene y el que más páginas. 
// Por suerte, no hay dos libros con el mismo número de páginas.

// Necesitamos que la función reciba un array de números, sin ordenar, 
// y que devuelva un array de dos posiciones con el índice del libro con menos páginas y el índice del libro con más páginas.
const words = [213, 321, 434, 653, 123, 231, 544, 325, 85, 286]
function minAndMaxWord(words) {
  let minIdx = 0
  let maxIdx = 0
  for (let i = 1; i < words.length; i++) {
    if (words[i] < words[minIdx]) minIdx = i
    if (words[i] > words[maxIdx]) maxIdx = i
  }
  return [minIdx, maxIdx]
}
console.log(minAndMaxWord(words));
