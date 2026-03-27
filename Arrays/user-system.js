const usuarios = [
    { nombre: "Antonio", edad: 25, activo: true },
    { nombre: "Juan", edad: 17, activo: false },    
    { nombre: "Ana", edad: 30, activo: true }
]

const analizarUsuarios = (usuarios) => {
    const activos = usuarios.filter(user => user.activo === true)
    const mayores = usuarios.filter(user => user.edad >= 18)
    const nombres = usuarios.map(user => user.nombre)
    const totalEdades = usuarios.reduce((acc, user) => acc + user.edad, 0)
    const promedioEdad = totalEdades / usuarios.length

    return {
        activos,
        mayores,
        nombres,
        totalEdades,
        promedioEdad
    }
}

console.log(analizarUsuarios(usuarios))