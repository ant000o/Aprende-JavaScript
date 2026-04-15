// Hasta ahora hemos visto cómo capturar errores con try/catch. 
// Pero también podemos crear y lanzar nuestros propios errores usando throw y new Error(). 
// Esto nos permite crear mensajes de error más específicos y útiles para nuestras aplicaciones.

// ¿Qué son los errores personalizados?
// Los errores personalizados son errores que nosotros creamos y lanzamos intencionalmente cuando detectamos que algo no está bien en nuestro código. 
// En lugar de dejar que JavaScript lance un error genérico, podemos crear errores más descriptivos.
// En lugar de dejar que esto cause un error genérico:
function dividir(a, b) {
  return a / b // Si b es 0, devuelve Infinity (no es útil)
}

// Podemos lanzar un error personalizado:
function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir por cero")
  }
  return a / b
}




// La palabra clave throw
// throw es la palabra clave que usamos para lanzar (o "arrojar") un error. 
// Cuando JavaScript encuentra throw, inmediatamente detiene la ejecución y busca el bloque catch más cercano.

function validarEdad(edad) {
  if (edad < 0) {
    throw new Error("La edad no puede ser negativa")
  }
  
  if (edad > 150) {
    throw new Error("La edad parece incorrecta")
  }
  
  return edad
}

try {
  console.log(validarEdad(25))  // 25
  console.log(validarEdad(-5))  // ❌ Error: La edad no puede ser negativa
  console.log(validarEdad(200)) // Esta línea nunca se ejecuta
} catch (error) {
  console.log("Error:", error.message)
}








// Creando errores con new Error()
// La forma más común de crear un error personalizado es usando new Error():

// // Crear un error simple
// throw new Error("Algo salió mal")

// // Crear un error con información específica
// throw new Error(`El usuario ${nombre} no fue encontrado`)

// // Error con contexto
// throw new Error(`Valor inválido: esperaba un número, recibí ${typeof valor}`)









// Ejemplos prácticos
// Ejemplo 1: Validación de datos de usuario
function crearUsuario(datos){
    // Validar que se proporcionen los datos
    if (!datos) {
        throw new Error("Los datos del usuario son requeridos")
    }
    
    // Validar email
    if (!datos.email || !datos.email.includes("@")) {
        throw new Error("Se requiere un email válido");
    }

    return {
        id: Date.now(),
        nombre: datos.nombre,
        email: datos.email,
        edad: datos.edad
    }
}

// Uso con manejo de errores
try {
  crearUsuario({
    nombre: "midu",
    email: "correo-inválido",
    edad: 16
  })
} catch (error) {
  console.log("Error creando usuario:", error.message)
}










// Tipos de errores personalizados
// Aunque new Error() es lo más común, también puedes crear diferentes tipos de errores:

// Error genérico
// throw new Error("Error general")

// // TypeError para errores de tipos
// throw new TypeError("Se esperaba un string, se recibió un number")

// // RangeError para valores fuera de rango
// throw new RangeError("El valor debe estar entre 1 y 100")

// // ReferenceError para referencias inválidas
// throw new ReferenceError("La variable no está definida")










// Creando clases de error personalizadas
// No necesitas limitarte a usar Error o los tipos de errores que ya existen como TypeError, RangeError, ReferenceError, etc. 
// Puedes crear tus propias clases de error, totalmente personalizadas para tus necesidades. 
// Para ello, sólo tienes que extender la clase Error y crear tu propia clase de error.

class ErrorValidacion extends Error {
    constructor(campo, valor) {
        super(`Error de validación en el campo '${campo}': ${valor}`)
        this.name = "ErrorValidacion"
        this.campo = campo
        this.valor = valor
    }
}

class ErrorAutenticacion extends Error {
    constructor(mensaje) {
        super(mensaje)
        this.name = "ErrorAutenticacion"
    }
}

// Uso
function validarUsuario(datos) {
    if (!datos.email) {
        throw new ErrorValidacion("email", "es requerido")
    }
    
    if (!datos.password) {
        throw new ErrorValidacion("password", "es requerido")
    }
    }

    function autenticarUsuario(email, password) {
    if (password !== "123456") {
        throw new ErrorAutenticacion("Credenciales incorrectas")
    }
}

// Lo mejor de crear este tipo de errores es que 
// puedes acceder a las propiedades de la clase extendida e 
// incluso detectar el tipo de error con instanceof para hacer un control más granular de los errores:

// Manejo específico por tipo de error
try {
    validarUsuario({email: "", password: "123"})
    autenticarUsuario("user@test.com", "wrong")
} catch (error) {
    if (error instanceof ErrorValidacion) {
        console.log(`Error de validación en ${error.campo}: ${error.valor}`);
    } else if (error instanceof ErrorAutenticacion) {
        console.log(`Error de autenticación: ${error.message}`)
    } else {
        console.log(`Error desconocido: ${error.message}`)
    }
}