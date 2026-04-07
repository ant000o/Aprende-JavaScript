const users = [
  {
    id: 1,
    name: "Antonio",
    isActive: true,
    orders: [
      { id: "o1", total: 50 },
      { id: "o2", total: 30 }
    ]
  },
  {
    id: 2,
    name: "Maria",
    isActive: false,
    orders: []
  },
  {
    id: 3,
    name: "Juan",
    isActive: true,
    orders: [
      { id: "o3", total: 100 }
    ]
  }
]

const getActiveUsers = (users) => {
    return users.filter((obj) => obj.isActive === true)
    // MEJORADA ABAJO
    return users.filter(user => user.isActive)
}
console.log(getActiveUsers(users));


console.log('');
console.log('------------------------------------------');
console.log('');







const getUserTotal = (user) => {
    return user.orders.reduce((acc, obj) => acc + obj.total, 0)
}
console.log(getUserTotal(users[0]));

console.log('');
console.log('------------------------------------------');
console.log('');








// const getTopSpender = (users) => {
//     const usersTotals = []
//     for (let i = 0; i < users.length; i++){
//         const total = getUserTotal(users[i])
//         usersTotals.push(total)
//     }
//     return Math.max(...usersTotals)
// }

// PROBLEMA CON ESTA SOLUCION: DEVUELVO EL NUMERO, NO EL USUARIO, EN LA PRACTICA LO ESPERADO SERIA DEVOLVER EL USUARIO
// SOLUCION MEJORADA:
const getTopSpender = (users) => {
    return users.reduce((topUser, currentUser) => {
        return getUserTotal(currentUser) > getUserTotal(topUser)
        ? currentUser
        : topUser
    })
}
console.log(getTopSpender(users));












console.log('');
console.log('------------------------------------------');
console.log('');

// const getTotalRevenue = (users) => {
//     const usersTotals = []
//     for (let i = 0; i < users.length; i++){
//         const total = getUserTotal(users[i])
//         usersTotals.push(total)
//     }
//     return usersTotals.reduce((acc, value) => acc + value)
// }
// ESTA SOLUCION CREA UN ARRAY INTERMEDIO, LUEGO REDUCE. FUNCIONA, PERO NO ES OPTIMO
// VERSION MEJORADA:
const getTotalRevenue = (users) => {
  return users.reduce((total, user) => {
    return total + getUserTotal(user)
  }, 0)
}
console.log(getTotalRevenue(users));







console.log('');
console.log('------------------------------------------');
console.log('');

const getUsersWithOrdersOver = (users, minTotal) => {
    return users.filter((user) => getUserTotal(user) > minTotal)
}
console.log(getUsersWithOrdersOver(users, 79));




console.log('');
console.log('------------------------------------------');
console.log('');





const getUsersSortedBySpending = (users) => {
    return users.toSorted((a, b) => getUserTotal(b) - getUserTotal(a))
}
console.log(getUsersSortedBySpending(users));




// MEJORA GLOBAL:
// RECALCULO MUCHO USANDO getUserTotal(user), ESTO ES COSTOSO EN APPS GRANDES
// MEJORA: 
const getUsersWithTotals = (users) => {
  return users.map(user => ({
    ...user,
    total: getUserTotal(user)
  }))
}
// Y TRABAJO A PARTIR DE ESO