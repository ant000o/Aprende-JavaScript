// Arrow Function

const decirMensaje = (mensaje) => {
    return mensaje + " buh"
}

console.log(decirMensaje("hola"))

// Las arrow function tambien son funciones anonimas y son siempre expresiones (se debe asignar a una variable) 
// funcionan más que nada para ahorrar lineas.

// si la funcion es muy corta, se puede dejar en una sola linea, se puede usar el return implicito

const sumar = (a, b) => a + b

console.log(sumar(3, 7)) // 10