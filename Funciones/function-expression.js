// Function Expression

const suma = function(a, b){
    return a + b
}

console.log(suma(2, 3)) // 5

// La function expression se puede asignar a una variable, esta quedaria como una función anónima, es decir, sin nombre.
// Al usar una function expression, evitamos que pase Hoisting.


// -----------------------

console.log(resta (3, 2)) // 1

// Hoisting es que cuando se compila, la funcion se lee primero y se guarda, por lo tanto no importa que la usamos antes de siquiera crearla

function resta(a, b){
    return a - b
}


// Con una function expression, nos dará error si tratamos de usar la funcion antes de declararla

console.log(multiplicacion(5, 3)) // error Cannot access 'multiplicacion' before initialization

const multiplicacion = function(a, b){
    return a * b
}