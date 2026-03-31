// de un array con compras, crear una funcion analizarCompras, que reciba compras
// y develva: 
//   {
//   total: number,
//   tecnologia: [...],
//   alimentos: [...],
//   productosCaros: [...], // > 100
//   nombres: [...]
// }

const compras = [
    { producto: "Laptop", precio: 1000, categoria: "tecnologia" },
    { producto: "Mouse", precio: 20, categoria: "tecnologia" },
    { producto: "Pan", precio: 2, categoria: "alimentos" },
    { producto: "Leche", precio: 3, categoria: "alimentos" }
]

const analizarCompras = (compras) => {

    const total = compras.reduce((acc, p) => acc + p.precio, 0)
    const tecnologia = compras.filter((compras) => compras.categoria === "tecnologia")
    const alimentos = compras.filter((compras) => compras.categoria === "alimentos")
    const productosCaros = compras.filter((compras) => compras.precio > 100)
    const nombres = compras.map(compras => compras.producto)
    const totalTec = tecnologia.reduce((acc, p) => acc + p.precio, 0)

    return {
        total,
        tecnologia,
        alimentos,
        productosCaros,
        nombres,
        totalTec
    }
}

console.log(
    analizarCompras(compras)
);