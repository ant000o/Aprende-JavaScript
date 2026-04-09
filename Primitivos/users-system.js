// “Sistema de validación y procesamiento de usuarios”
// Esto es MUY cercano a frontend real (formularios + APIs).

const rawUsers = [
  {
    id: " 001 ",
    name: " Antonio ",
    email: "ANTONIO@MAIL.COM",
    age: "21"
  },
  {
    id: "002",
    name: "maria",
    email: "maria@mail",
    age: "not defined"
  },
  {
    id: "003",
    name: "JUAN",
    email: "juan@mail.com",
    age: "12"
  }
]



// 1. Normalizar usuarios
// Debe:
// id → sin espacios
// name → capitalizado ("Antonio")
// email → lowercase + trim
// age → number (si no es válido → null)

// ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
// const normalizeUsers = (users) => {
//     users.forEach(user => {
//         user.id = user.id.trim()
//         user.name = user.name.trim().toLowerCase().split(' ').map((letra) => letra.charAt(0).toUpperCase() + letra.slice(1)).join(' ')
//         user.email = user.email.toLowerCase().trim()
//         user.age = Number(user.age)
//         if (isNaN(user.age)) user.age = null
//     }); 
//     return users
// }
// console.log(normalizeUsers(rawUsers));
// ⚠️ Estás mutando el array original

// ✅ Mejor enfoque (INMUTABLE)
const normalizeUsers = (users) => {
    return users.map(user => ({
        ...user,
        id: user.id.trim(),
        name: user.name
            .trim()
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' '),
        email: user.email.toLowerCase().trim(),
        age: isNaN(Number(user.age)) ? null : Number(user.age)
    }))
}

// 💡 Regla clave desde ahora:
// ❌ modificar datos
// ✅ crear nuevos datos
// 👉 Esto es CRÍTICO para React

const normalized = normalizeUsers(rawUsers)








console.log('');
console.log('------------------------------------------');
console.log('');








// 2. Validar emails
// solo usuarios con email válido
// regla simple:
// debe incluir "@" y "."

const getValidUsers = (users) =>  users.filter((user) => user.email.includes('@') && user.email.includes('.'))
console.log(getValidUsers(normalized));


console.log('');
console.log('------------------------------------------');
console.log('');









// 3. Obtener adultos
// edad >= 18
// ignorar null

const getAdults = (users) => users.filter((user) => user.age >= 18)
console.log(getAdults(normalized));



console.log('');
console.log('------------------------------------------');
console.log('');










// 4. Buscar usuario por id (dinámico)
// usar lo que aprendiste:
// strings
// comparación
// limpieza de datos
// ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
// const findUser = (users, id) => users.filter((user) => user.id === id)
// users.filter(...)
// 👉 Problema:
// devuelves array, pero debería ser 1 usuario

// ✅ Mejor:
const findUser = (users, id) =>
    users.find(user => user.id === id) ?? null
console.log(findUser(normalized, '002'));


console.log('');
console.log('------------------------------------------');
console.log('');










// 5. EXTRA
// Retorna:
// {
//   total: X,
//   validEmails: X,
//   adults: X
// ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
// const getUsersSummary = (users) => {
//     const total = users.length
//     const validEmails = getValidUsers(users).map((user) => user.email)
//     const adults = getAdults(users).map((user) => user.name)
//     return {
//         total,
//         validEmails,
//         adults
//     }
// }
// 👉 Estás devolviendo arrays, pero el enunciado pedía números

// ✅ Mejor:
const getUsersSummary = (users) => {
    return {
        total: users.length,
        validEmails: getValidUsers(users).length,
        adults: getAdults(users).length
    }
}
console.log(getUsersSummary(normalized));