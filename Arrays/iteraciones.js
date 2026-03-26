// Cómo recorrer un array
let frutas = ['cereza' , 'uva', 'pera']

// Con while
let i = 0
while (i < frutas.length){
    console.log(frutas[i])
    i++
}

// Con for
for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

// También podrías recorrer el array en orden inverso, empezando desde el último elemento hasta el primero, 
// usando i-- en lugar de i++.
for (let i = frutas.length - 1; i >= 0; i--) {
  console.log(frutas[i]) // imprime el elemento en la posición i
}

// for...of
for (const fruta of frutas){
    console.log(fruta);
}

console.log('---------------------------------------');

// metodo para iterar el array
// frutas.forEach(function(elemento, index, originalArray){
//     console.log('index: ' + index);
//     console.log(elemento);    
// })
// más cortito
frutas.forEach(element => {
    console.log(element); 
});




console.log('-----------------------------------------------------------------');
// ***Ejercicio Práctico***
// Dada una lista de números, escribe una función en JavaScript que devuelva la suma de todos los números pares en la lista. 
// La función deberá iterar sobre cada número en la lista, comprobar si el número es par y, si es así, añadirlo a la suma total. 
// Usa el bucle que quieras para solucionarlo.
const numeros = [1, 2, 3, 4, 5, 6]    // la suma de los pares debe dar 12

function sumarPares(numeros) {
  let suma = 0
  // tu código aquí
  for (let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 === 0){
      suma = suma + numeros[i]
    }
  }
  return suma
}
console.log(sumarPares(numeros))