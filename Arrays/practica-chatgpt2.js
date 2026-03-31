// Ejercicio 1: buscar + transformar
const usuarios = [
  { nombre: "Antonio", edad: 21 },
  { nombre: "Juan", edad: 17 },
  { nombre: "Ana", edad: 25 },
];
const firstOlder = usuarios.find((user) => user.edad > 18);
console.log(firstOlder);

// Ejercicio 2: some / every
// Con el mismo array, devuelve:
// true si al menos uno es menor de edad
// true si todos son mayores de edad
const isOneOlder = usuarios.some((user) => user.edad > 18);
console.log(isOneOlder);
const isEveryoneOlder = usuarios.some((user) => user.edad > 18);
console.log(isEveryoneOlder);

// Ejecicio 3: sort real
// ordena de mayor a menor precio
const productos = [
  { nombre: "Laptop", precio: 1000 },
  { nombre: "Mouse", precio: 20 },
  { nombre: "Teclado", precio: 50 },
];
const decreciente = productos.toSorted((a, b) => b.precio - a.precio);
console.log(decreciente);

// Ejercicio 4: combinacion
const numeros = [10, 3, 8, 20, 15];
// Devuelve:
// el número más grande
// el número más pequeño
numeros.sort((a, b) => b - a);
// const grandePequeño = [numeros[0], numeros[numeros.length - 1]]

// version más épica
const resultado = numeros.reduce(
  (acc, num) => {
    return {
      max: num > acc.max ? num : acc.max,
      min: num < acc.min ? num : acc.min,
    };
  },
  { max: -Infinity, min: Infinity },
);

const grandePequeño = [resultado.max, resultado.min];
console.log(grandePequeño);

// Ejercicio 5: Devuelve solo los nombres que:
// empiezan con "a"
// tienen más de 5 letras
const nombres = ["ana", "antonio", "andres", "juan", "alberto"];
// const conditions = nombres.filter((name) => name.startsWith('a')).filter((name) => name.length > 5)
// un poquito más eficiente
const conditions = nombres.filter(
  (name) => name.startsWith("a") && name.length > 5,
);
console.log(conditions);
