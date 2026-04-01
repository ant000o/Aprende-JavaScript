const matriz = [
  [5, 12, 8],
  [21, 3, 14],
  [9, 30, 2]
]

const analizarMatriz = (matriz) => {
    const mayoresA10 = []
    let sumaTotal = 0
    let filaMayorSuma = 0
    let resultadoFila = 0
    let maxNum = 0
    let posicionMayor
    
    for(let i = 0; i < matriz.length; i++){

        let resultadoSumaFila = matriz[i].reduce((acc, num) => acc + num)
        if (resultadoFila < resultadoSumaFila) resultadoFila = resultadoSumaFila, filaMayorSuma = i

        for(let j = 0; j < matriz[i].length; j++){
            if(matriz[i][j] > 10) mayoresA10.push(matriz[i][j])
            sumaTotal = sumaTotal + matriz[i][j]
            if(maxNum < matriz[i][j]) maxNum = matriz[i][j], posicionMayor = [i, j]
        }
    } 
    return {
        mayoresA10,
        sumaTotal,
        filaMayorSuma,
        resultadoFila,
        maxNum,
        posicionMayor
    }
}
console.log(analizarMatriz(matriz));


console.log('')
console.log('')
console.log('------------------');
console.log('')
console.log('')


// VERSION MÁS EFICIENTE :'V
const analizarMatriz2 = (matriz) => {
  const mayoresA10 = []
  let sumaTotal = 0
  let filaMayorSuma = 0
  let maxNum = -Infinity
  let posicionMayor = null

  let mejorSumaFila = -Infinity

  for (let i = 0; i < matriz.length; i++) {
    let sumaFila = 0

    for (let j = 0; j < matriz[i].length; j++) {
      const num = matriz[i][j]

      // suma total
      sumaTotal += num
      sumaFila += num

      // mayores a 10
      if (num > 10) mayoresA10.push(num)

      // máximo global
      if (num > maxNum) {
        maxNum = num
        posicionMayor = [i, j]
      }
    }

    // mejor fila
    if (sumaFila > mejorSumaFila) {
      mejorSumaFila = sumaFila
      filaMayorSuma = i
    }
  }

  return {
    mayoresA10,
    sumaTotal,
    filaMayorSuma,
    numeroMayor: maxNum,
    posicionMayor
  }
}

console.log(analizarMatriz2(matriz));