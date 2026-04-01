// En js, podemos representar una matriz como un array de arrays

// Creacion de una matriz (2x3)
const matriz = [
    [1, 2, 3],
    [4, 5, 6]
]

// Acceso a elementos de una matriz
let numero = matriz[1][2]
console.log(numero); // 6

console.log('------------------');

// Iteracion sobre matrices
for (let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
        console.log(matriz[i][j])
    }
}
console.log('------------------');
// Tambien se puede iterar con while, for...of y forEach()
matriz.forEach((fila, filaIndex) => {
  fila.forEach((elemento, columnaIndex) => {
    console.log('Fila ' + filaIndex)
    console.log('Columna ' + columnaIndex)
    console.log('Elemento ', elemento)
    console.log('')
  })
})


console.log('------------------');
console.log('')
console.log('')

// Ejemplo práctico de Matrices
// Juego de #

const tablero = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['O', 'O', 'X']
]

// Ahora, para buscar si hay un ganador en el tablero, 
// podemos utilizar un bucle for para iterar sobre cada fila y columna del tablero.
// Si encontramos tres fichas iguales en una fila, columna o diagonal, entonces tenemos un ganador.

// Verifica las lienas horizontales
for (let i = 0; i < 3; i++){
    if (tablero[i][0] === tablero[i][1] && tablero[i][1] === tablero[i][2]){
        console.log(`El ganador es: ${tablero[i][0]}`);        
    } 
    // Verifica las líneas verticales
    else if (
        tablero[0][i] === tablero[1][i] &&
        tablero[1][i] === tablero[2][i]
    ) {
        console.log(`El ganador es: ${tablero[0][i]}`);
    }
}
// Verifica la diagonal de arriba izquierda a derecha abajo
if (
  tablero[0][0] === tablero[1][1] &&
  tablero[1][1] === tablero[2][2]
) {
  console.log(`El ganador es: ${tablero[0][0]}`);
}
// Verifica la diagonal de derecha arriba a izquierda abajo
if (
  tablero[0][2] === tablero[1][1] &&
  tablero[1][1] === tablero[2][0]
) {
  console.log(`El ganador es: ${tablero[0][2]}`);
}

console.log('')
console.log('')
console.log('------------------');
console.log('')
console.log('')


// Recibimos una matriz de cadenas de texto. 
// Tenemos que localizar la posición de la palabra "JavaScript" en la matriz y 
// devolver su posición como un array de dos elementos: el índice de la fila y el índice de la columna.
const matrix = [
  ['HTML', 'CSS', 'JavaScript'],
  ['Java', 'C++', 'Python'],
  ['Ruby', 'Go', 'Swift']
]
function findJavaScript(matrix) {
  // tu código aquí
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] === 'JavaScript'){
                return [i, j]
            }
        }
    }
    return [-1,-1]
}
const position = findJavaScript(matrix)
console.log(position) // -> [0, 2]


