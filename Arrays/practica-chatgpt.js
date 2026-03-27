// Ejercicio 1: segun un array, entregar un nuevo array con los numeros * 2, entregar otro con numeros mayores a 5 y la suma total
const numeros = [3, 7, 2, 9, 12, 5]

const dobles = numeros.map((x) => x * 2)
console.log(dobles);

const mayores = numeros.filter(num => num > 5)
console.log(mayores);

const suma = numeros.reduce((prevNum, currentNum) => {
    return prevNum + currentNum
}, valorInicial = 0)
console.log(suma);

// Ejercicio 2: Con el mismo array de numeros, devolver la suma de los numeros pares multiplicados por 3
const pares = numeros.filter((num) => {
    if (num % 2 === 0){
        return num
    }
})
const multi = pares.map((x) => x * 3)
const operacion = multi.reduce((p, a) => p + a)

console.log(operacion);

// Ejercicio 3: Strings
const nombres = ["antonio", "juan", "pedro", "ana"]
for (let i = 0; i < nombres.length; i++){
    nombres[i] = nombres[i].toUpperCase()
}
console.log(nombres);
// ***VERSION MODERNA***
const mayus = nombres.map(n => n.toUpperCase())
console.log(mayus);

// Ejercicio 4: Transformar numeros de un array
const nums = [1, 2, 3, 4, 5]
const transformed = nums.map((x) => x * x)
console.log(transformed);



console.log("**********************************************");
// Ejercicio 5: desde el array productos: 
// obtener solo productos precio > 50
// obtener solo nombres
// calcular total de precios 
const productos = [
    { nombre: "Laptop", precio: 1000 },
    { nombre: "Mouse", precio: 20 },
    { nombre: "Teclado", precio: 50 }
]

const cincuenta = () => {
    let masDeCincuenta = []
    for (let i = 0; i < productos.length; i++){
        const precio = productos[i]["precio"]
        if (precio > 50){
            masDeCincuenta.push(precio)
        }
    }
    return masDeCincuenta
}
// console.log(cincuenta());
// ***VERSION QUE DEBERIA HABER HECHO***
const caros = productos.filter(p => p.precio > 50)
console.log(caros)





const names = () => {
    let nombres = []
    for (let i = 0; i < productos.length; i++){
        const nombre = productos[i]["nombre"]
        nombres.push(nombre)
    }
    return nombres
}
// console.log(names());
// ***VERSION QUE DEBERIA HABER HECHO***
const nombres2 = productos.map(p => p.nombre)
console.log(nombres2)





const precios = () => {
    let precios = []
    for (let i = 0; i < productos.length; i++){
        const precio = productos[i]["precio"]
        precios.push(precio)
    }
    return precios
}
// const total = precios().reduce((x, y) => x + y, initVal = 0)
// ***VERSION QUE DEBERIA HABER HECHO***
const total = productos.reduce((acc, p) => acc + p.precio, 0)
console.log(total)