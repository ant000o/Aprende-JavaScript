function procesarPedido(producto) {
    return new Promise((resolve, reject) => {
        console.log('Procesando pedido...')
        setTimeout(() => {
            if (typeof producto !== "string" || producto.trim() === "") {
                reject('Producto inválido')
            } else {
                resolve(`Pedido de ${producto} listo`)
            }
        }, 1000);
    })
}

function pagarPedido(pago) {
    return new Promise((resolve, reject) => {
        console.log('Procesando pago...')
        setTimeout(() => {
            if (pago) {
                resolve('Pago exitoso')
            } else {
                reject('Pago rechazado')
            }
        }, 2000);
    })
}


procesarPedido("Pizza")
    .then((resultado) => {
        console.log(resultado)
        return pagarPedido(true)
    })
    .then((resultado) => {
        console.log(resultado)
        console.log('Pedido terminado')
    })
    .catch((error) => {
        console.log(error)
    })