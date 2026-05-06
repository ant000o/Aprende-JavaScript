// Ejemplo 2: Validación de formulario en tiempo real

// Seleccionar elementos
const formulario = document.querySelector('#formulario-registro')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const confirmarInput = document.querySelector('#confirmar-password')
const btnEnviar = document.querySelector('#btn-enviar')

// Elementos de error
const errorEmail = document.querySelector('#error-email')
const errorPassword = document.querySelector('#error-password')
const errorConfirmar = document.querySelector('#error-confirmar')

// Estado de validación
let validacion = {
    email: false,
    password: false,
    confirmar: false
}

// Función para actualizar el botón de envío
function actualizarBotonEnvio() {
    const todoValido = Object.values(validacion).every(valido => valido)
    btnEnviar.disabled = !todoValido
}

// Validar email
emailInput.addEventListener('input', () => {
    const email = emailInput.value
    const esValido = email.includes('@') && email.includes('.')

    if (email.length === 0) {
        errorEmail.textContent = ''
        validacion.email = false
    } else if (esValido) {
        errorEmail.textContent = ''
        errorEmail.style.color = 'green'
        errorEmail.textContent = '✓ Email válido'
        validacion.email = true
    } else {
        errorEmail.style.color = 'red'
        errorEmail.textContent = '✗ Email no válido'
        validacion.email = false
    }

    actualizarBotonEnvio()
})


// Validar contraseña
passwordInput.addEventListener('input', () => {
    const password = passwordInput.value
    const esValida = password.length >= 6

    if (password.length === 0) {
        errorPassword.textContent = ''
        validacion.password = false
    } else if (esValida) {
        errorPassword.style.color = 'green'
        errorPassword.textContent = '✓ Contraseña válida'
        validacion.password = true
    } else {
        errorPassword.style.color = 'red'        
        errorPassword.textContent = '✗ Mínimo 6 caracteres'
        validacion.password = false
    }

    // Re-validar confirmación si ya tiene contenido
    if (confirmarInput.value.length > 0) {
        confirmarInput.dispatchEvent(new Event('input'))
    }

    actualizarBotonEnvio()
})

// Validar confirmación de contraseña
confirmarInput.addEventListener('input',() => {
    const confirmar = confirmarInput.value
    const password = passwordInput.value
    const coinciden = confirmar === password && confirmar.length > 0

    if (confirmar.length === 0) {
        errorConfirmar.textContent = ''
        validacion.confirmar = false
    } else if (coinciden) {
        errorConfirmar.style.color = 'green'
        errorConfirmar.textContent = '✓ Contraseñas coinciden'
        validacion.confirmar = true
    } else {
        errorConfirmar.style.color = 'red'
        errorConfirmar.textContent = '✗ Las contraseñas no coinciden'
        validacion.confirmar = false
    }

    actualizarBotonEnvio()
})

// Manejar envío del formulario
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()

    console.log('Formulario válido enviado:');
    console.log('Email:', emailInput.value);
    console.log('Password:', passwordInput.value);
    
    // Aquí harías la petición al servidor
    alert('¡Registro exitoso!')
})