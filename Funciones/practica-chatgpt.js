// Ejercicio 1: Pasar la siguiente funcion a function expression y arrow function
function saludar(nombre) {
  return "Hola " + nombre;
}

// function expression
const saludarExpression = function(nombre) {
    return "Hola " + nombre
}
console.log(saludarExpression("anto"))

// arrow function
const saludarArrow = (nombre) => "Hola " + nombre
console.log(saludarArrow("ant000"))

// Ejercicio 2: Crea una arrow function que reciba dos numeros, los sume y devuelva si el resultado es "par" o "impar".
const parImpar = (a, b) => {
    const num = a + b
    if (num % 2 === 0){
        return "par"
    }else{
        return "impar"
    }
}
console.log(parImpar(6, 5))  // 11 -> impar


// Ejercicio 3: Crea una función que reciba un array de números. Devuelva un nuevo array con cada numero multiplicado por 2

const numeros = [1, 2, 3, 4, 5]

// usamos el metodo de array map, esto crea un nuevo array transformando cada elemento del array original
const dobles = numeros.map(function(elemento){     // tomamos el array original, lo mapeamos, 
    // en su funcion interna (que acepta hasta 3 parametros (elemento, indice, array)) toma el elemento en cada iteracion y lo multiplica por 2.
    return elemento * 2
})

console.log(dobles)

// Tambien se puede hacer como arrow function
const nums = [2, 4, 6, 8, 10]
const doblesArrow = nums.map((x => x * 2))
console.log(doblesArrow)


// Ejercicio 4: Crea una funcion recursiva que reciba un numero n y devuelva la suma de todos los numeros desde 1 hasta n
// Ejemplo: sumarHasta(5) -> 15

const sumarHasta = (n) => {
    if (n === 0){return 0}
    else{
        return n + sumarHasta(n - 1)
    }
}

console.log(sumarHasta(5));
