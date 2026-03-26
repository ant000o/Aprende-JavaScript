// Métodos y propiedades de los Arrays
// length, nos indica cuantos elementos hay en un array
const arr = [1, 'hola', [3, 5, 6], 'chao']
console.log(arr.length);  // 4


// y tambien podemos usarlo para cortar los elementos a la cantidad que queramos
arr.length = 2
console.log(arr); // [1, 'hola']


// metodos = funciones ya incorporadas en los arrays
const perros = ['rottweiler', 'shiba inu', 'galgo']

perros.push('akita', 'poodle', 'corgi')  // agrega akita a la lista y retorna el nuevo length

perros.pop()  // elimina el ultimo de la lista y lo retorna

perros.shift()  // elimina el primero de la lista y lo retorna

perros.unshift('alaskan', 'husky', 'maltes')  // agrega un elemento al principio y retorna el nuevo length

console.log(perros);


// concatenar arrays
const nums = [1, 2, 3]
const nums2 = [4, 5]
// metodo concat
const allNums = nums.concat(nums2)
console.log(allNums);  // [1, 2, 3, 4, 5]

// operador spread
//                        1, 2, 3     4, 5
const allNumbersSpread = [...nums, ...nums2]  // los puntitos significa que toma los elementos del array especificado
console.log(allNumbersSpread);

// ### **Ejercicio práctico**

// En un restaurante se reciben pedidos de comida a domicilio. Vamos a escribir una función **`procesarPedido`** que recibe un pedido, que es un array de platos. Lo que debemos hacer es:

// - El primer elemento lo sacamos del array, ya que es el nombre del cliente.
// - Añadimos al principio del array la cadena de texto "bebida", ya que es una promoción que tenemos.
// - Después añadimos al final del array el nombre del usuario que sacamos antes.

// Recuerda que debes devolver el array modificado:
function procesarPedido(pedidos) {
    const name = pedidos.shift()
    pedidos.unshift("Bebida")
    pedidos.push(name)
    return pedidos
}
console.log(procesarPedido(['anto', 'McCheddar', 'Papitas Medianas']))