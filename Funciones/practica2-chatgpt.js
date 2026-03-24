// Ejercicio 1: Responde las siguientes preguntas segun este codigo
let mensaje = "Hola";

function mostrarMensaje() {
    let mensaje = "Adiós";
    console.log(mensaje);
}

mostrarMensaje();
console.log(mensaje);
// ¿Qué se imprime primero?
// 'Adiós'
// ¿Qué se imprime después?
// 'Hola'


// Ejercicio 2: Crea una funcion crearUsuario(nombre) y dentro crear variable rol = "usuario"
// la funcion debe retornar un objecto con nombre y rol
function crearUsuario(nombre){
    const rol = "usuario"
    return {
        nombre: nombre,
        rol: rol
    }
}
console.log(crearUsuario("anto"))

// Ejercicio 3: Crea una funcion contador(), debe iniciar en 0, retornar una función
function contador(){
    let contador = 0
    return function(){
        contador++
        return contador
    }
}
const contar = contador()
console.log(contar())
console.log(contar())
console.log(contar())


// Ejercicio 4: Crea una función: crearSaludo(saludo), debe retornar otra función que reciba nombre

function crearSaludo(saludo){
    return function(nombre){
        return saludo + " " + nombre
    }
}
const saludar = crearSaludo("Hola")
console.log(saludar("anto"))

// Ejercicio 5: Crea una funcion crearMultiplicador(numeroBase)
function crearMultiplicador(numeroBase){
    return function(num){
       return num * numeroBase
    }
}
const triplicar = crearMultiplicador(3)
console.log(triplicar(5))
console.log(triplicar(3))