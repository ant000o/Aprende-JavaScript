const numeros = [1, 2, 3, 4, 5]

// para la suma primero lo haremos con for, y luego con el metodo de array reduce, que esta hecho justamente para acumular valores.

// con for
const sumaFor = (numeros) => {
    let acumulador = 0;
    for (let i = 0; i < numeros.length; i++){
        acumulador = acumulador + numeros[i];
    }
    return acumulador
}
console.log("Suma hecha con for loop: " + sumaFor(numeros))



// con metodo reduce
// array.reduce((acumulador, elementoActual) => {
//     // aquí combinamos ambos
// }, valorInicial)
const valorInicial = 0;
// reduce recorre el array y va acumulando un resultado en una sola variable.
const suma = numeros.reduce(
    (acumulador, valorActual) => {
        return acumulador + valorActual;
    },
    valorInicial    // este es el segundo argumento de reduce, desde ese index empezará la acumulación
);
console.log("Suma hecha con método reduce: " + suma)

// 💡 Otra forma de entenderlo

// Imagina que el acumulador es una cajita donde guardas el resultado:

// Empieza en 0
// Le sumas 1 → ahora tiene 1
// Le sumas 2 → ahora tiene 3
// Le sumas 3 → ahora tiene 6
// etc...



// Promedio
const promedio = (suma, numeros) => suma / numeros.length
console.log("Promedio: " + promedio(suma, numeros))


// Pares con for loop
const paresFor = (numeros) => {
    const pares = []
    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] % 2 === 0){
            pares.push(numeros[i])
        }
    }
    return pares;
}
console.log("Pares con for loop: " + paresFor(numeros));


// Pares con filter
const pares = numeros.filter((numero) => {
    return numero % 2 === 0
})
console.log("Pares con método filter: " + pares)




// Impares con for loop
const impares = (numeros) => {
    const impares = []
    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] % 2 === 0){
            continue
        }else{
            impares.push(numeros[i])
        }
    }
    return impares;
}
console.log("Impares con for loop: " + impares(numeros));

// Impares con método filter
const imparesFilter = numeros.filter((numero) => numero % 2 !== 0)
console.log("Impares con método filter: " + imparesFilter)






// Funcion analizar numeros
const analizarNumeros = (numeros) => {        
    return {
        suma: suma,
        promedio: promedio(suma, numeros),
        pares: pares,
        impares: impares(numeros)
    }
}

console.log(analizarNumeros(numeros))
// {
//   suma: 15,
//   promedio: 3,
//   pares: [2, 4],
//   impares: [1, 3, 5]
// }

// PROBLEMA CON MI FUNCION FINAL:
// 👉 Está usando variables externas (suma, pares, etc.)

// ❌ Problema:
// No es reutilizable
// Depende de variables globales
// En React esto te rompería cosas




// VERSION CORREGIDA CHATGPT
const analizarNumerosGpt = (numeros) => {
    const suma = numeros.reduce((acc, num) => acc + num, 0)

    const promedio = suma / numeros.length

    const pares = numeros.filter(num => num % 2 === 0)

    const impares = numeros.filter(num => num % 2 !== 0)

    return {
        suma,
        promedio,
        pares,
        impares
    }
}

console.log(`\nVERSION CORREGIDA CHATGPT, ME ACORTÓ CALETA JKFDSHFKJSD`)
console.log(analizarNumeros(numeros))