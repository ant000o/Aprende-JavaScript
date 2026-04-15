// finally es un bloque adicional que siempre se ejecuta, sin importar si ocurrió un error o no. 
// Es perfecto para código de limpieza o tareas que deben completarse sin importar si hay errores o no.


// ¿Cómo funciona y para qué sirve?
// Finally es un bloque opcional que se puede añadir después de try/catch. 

// Su código siempre se ejecuta, independientemente de si:
// - El código en try se ejecuta correctamente
// - Ocurre un error y se ejecuta catch
// - Se usa return dentro de try o catch

try {
    // Código que puede fallar
    console.log('Ejecutando código...')
} catch (error) {
    // Manejo de errores
    console.log('Error:', error.message)
} finally {
    // ✅ Este código SIEMPRE se ejecuta
    console.log("Limpieza completada")
}



// Sintaxis completa
// La estructura completa de try/catch/finally es:
try {
  // Código a intentar ejecutar
} catch (error) {
  // Manejo de errores (opcional)
} finally {
  // Código que siempre se ejecuta (opcional)
}
// Nota: Puedes usar try/finally sin catch, pero no puedes usar finally sin try.



// Ejemplos prácticos
// Ejemplo 1: Limpieza de recursos
function procesarArchivo(archivo){
    let recurso = null

    try {
        console.log('Abriendo archivo...');
        recurso = abrirArchivo(archivo)

        console.log('Procesando datos...');
        let datos = procesarDatos(recurso)
        
        return datos
    } catch (error) {
        console.log('Error procesando archivo:', error.message);
        return null
    } finally {
        // ✅ Siempre cerrar el archivo, haya error o no
        if (recurso) {
            console.log('Cerrando archivo...');
            cerrarArchivo(recurso)
        }
    }
}

// Ejemplo 2: Finally con return
function ejemplo(){
    try {
        return 'valor desde try'
    } catch (error) {
        return 'valor desde catch'
    } finally {
        // ⚠️ Si pones return aquí, sobrescribe los otros returns
        return 'valor desde finally'
    }
}
ejemplo() // -> 'valor desde finally'











// Finally vs return
// Una característica importante de finally es que se ejecuta incluso cuando hay un return:
function conReturn() {
  try {
    console.log("1. En try")
    return "Desde try"
  } finally {
    console.log("2. En finally")
  }
  console.log("3. Después de try/finally") // ❌ Nunca se ejecuta
}

console.log("Resultado:", conReturn())
// Salida:
// "1. En try"
// "2. En finally"
// "Resultado: Desde try"










// Try/finally sin catch
// Puedes usar finally sin catch cuando solo necesites ejecutar código de limpieza:

function soloFinally() {
  try {
    console.log("Ejecutando operación...")
    operacionRiesgosa()
  } finally {
    console.log("Limpieza ejecutada")
  }
}
// Si ocurre un error, finally se ejecuta pero el error se propaga













// Orden de ejecución
// El orden siempre es:
// - try: Se ejecuta primero
// - catch: Sólo si hay error
// - finally: Siempre se ejecuta al final
function mostrarOrden() {
  console.log("Antes de try/catch/finally")
  
  try {
    console.log("1. En try")
    throw new Error("Error de prueba")
  } catch (error) {
    console.log("2. En catch")
  } finally {
    console.log("3. En finally")
  }
  
  console.log("Después de try/catch/finally")
}

mostrarOrden()
// Salida:
// "Antes de try/catch/finally"
// "1. En try"
// "2. En catch"
// "3. En finally"
// "Después de try/catch/finally"








// Los puntos clave de finally
// finally siempre se ejecuta, sin importar si hay errores o returns
// Es perfecto para código de limpieza y liberación de recursos
// Se puede usar con o sin catch
// Ten cuidado con los returns dentro de finally
// Mantén el código de finally simple y enfocado en limpieza