// Conseguimos usuarios
async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok){
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const users = await response.json()
        // console.log('Usuarios encontrados:', users[0]);
        return users
    } catch (error) {
        console.log('Error:', error);
        return []  // así no rompe el flujo
    }
}


// Funcion para filtrar por ciudad
function filterUsersByCity(users, city){
    return users.filter(user => user.address.city === city)
}


// Funcion para transformar datos
function mapUsers(users) {
    return users.map(user => ({
        name: user.name,
        email: user.email,
        city: user.address.city
    }))
}

async function main() {
    const users = await getUsers()

    const filtered = filterUsersByCity(users, 'Gwenborough')

    const mapped = mapUsers(filtered)

    console.log(mapped)
}

const [users1, users2] = await Promise.all([
    getUsers(),
    getUsers()
])


const users = await getUsers()

const [filtered, mapped] = await Promise.all([
  Promise.resolve(filterUsersByCity(users, 'Gwenborough')),
  Promise.resolve(mapUsers(users))
])

console.log(filtered)
console.log(mapped)