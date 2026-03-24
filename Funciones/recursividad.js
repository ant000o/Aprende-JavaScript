// Recursividad 
// La recursividad es cuando se llama a una funcion dentro de esta misma.
// Toda función recursiva necesita:
// 1. Un caso base → para detener la recursión
// 2. Un caso recursivo → donde la función se llama a sí misma

function cuentaAtras(numero){
    if(numero < 0) {return}  // Condicion de salida

    console.log(numero)      // Imprimir numero actual

    cuentaAtras(numero - 1)  // Llamamos a la funcion restándole 1 al numero actual, creando un bucle
}

cuentaAtras(5);


// Crearemos una funcion para calcular el factorial de un número.
// el factorial de un numero es el resultado de multiplicar ese numero por todos los anteriores 
// (ej. factorial de 5 = 5*4*3*2*1 = 120)

function factorial(n) {
    if (n === 0 || n === 1){            // Condicion de salida
        return 1                        // El factorial de 0 y 1 es 1
    } else {
        return n * factorial(n - 1)     // Multiplicará el numero actual por su numero anterior hasta llegar a 1, donde se aplica la condicion.
    }
}

const resultado = factorial(5);  // podemos guardar el resultado en una variable

console.log(resultado)




// Ejercicio -> Escribe una función que calcule la suma de los primeros n números enteros de forma recursiva. 
// Por ejemplo: suma(3) -> 1 + 2 + 3 = 6


function sumaRecursiva(num){
    if (num === 0){
        return 0
    } else {
        return num + sumaRecursiva(num - 1)     
    }
}

console.log(sumaRecursiva(5))  // Esto se evalúa como:
// 5 + sumaRecursiva(4)
// 5 + 4 + sumaRecursiva(3)
// 5 + 4 + 3 + sumaRecursiva(2)
// ...
// hasta llegar a sumaRecursiva(0), que retorna 0



// Ejercicio -> Escribe una función que calcule la sucesión de Fibonacci de forma recursiva. 
// La sucesión de Fibonacci es una serie de números que empieza por 0 y 1 y cada número es la suma de los dos anteriores. 
// Por ejemplo: fibonacci(6) -> 8 (0, 1, 1, 2, 3, 5, 8)

function fibonacci(n){
    if (n < 2){           // condicion de salida (fibonacci 0 = 0 y fibonacci 1 = 1)
        return n
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2)  // suma de los 2 numeros anteriores
    }
}

console.log(fibonacci(6))