function crearContador(){
    let counter = 0

    return {
        incrementar: function(){
            counter++
            return counter
        },
        decrementar: function(){
            counter--
            return counter
        },
        valor: function(){
            return counter
        },
        reset: function(){
            counter = 0
            return counter
        }
    }
}

const contador = crearContador()


console.log(contador.incrementar())
console.log(contador.incrementar())
console.log(contador.decrementar())
console.log(contador.valor())
console.log(contador.reset())
