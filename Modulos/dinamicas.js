// Importaciones Dinámicas, cargan modulos bajo demanda, caundo realmente se necesitan


// Import estático vs dinámico
// Import estático (lo que ya conoces)

// Se carga SIEMPRE al inicio, antes de ejecutar nada
import { sumar } from './operaciones.js'

// Características del import estático:
// Se escribe al principio del archivo (es obligatorio).
// Se carga antes de ejecutar cualquier código del módulo.
// No puede estar dentro de un if, un for o una función.
// El navegador puede analizar las dependencias antes de ejecutar.





// Import dinámico: import()
// El import dinámico usa import() como una función que devuelve una Promesa:

// Se carga solo cuando ejecutas esta línea
const modulo = await import('./operaciones.js')
modulo.sumar(2, 3)  // 5

// Características del import dinámico:
// Se puede usar en cualquier parte del código (dentro de funciones, condicionales, etc.).
// Devuelve una Promesa que se resuelve con el módulo.
// El módulo se carga solo cuando se ejecuta esa línea.
// Perfecto para cargar código bajo demanda.




// Sintaxis del import dinámico
// import() devuelve una Promesa, así que puedes usarlo con .then() o con async/await:
// Con async/await
async function cargarModulo() {
  const { sumar, restar } = await import('./operaciones.js')
  console.log(sumar(2, 3))  // 5
  console.log(restar(10, 4)) // 6
}

cargarModulo()


// Con .then()
import('./operaciones.js').then(modulo => {
  console.log(modulo.sumar(2, 3))  // 5
  console.log(modulo.restar(10, 4)) // 6
})


// Importar un default export dinámicamente
// Si el módulo tiene un export default, lo encuentras en la propiedad .default:
const modulo = await import('./Usuario.js')
const Usuario = modulo.default

const user = new Usuario('Ana')

// O desestructurando:

const { default: Usuario } = await import('./Usuario.js')
const user = new Usuario('Ana')



// Casos de uso prácticos
// 1. Carga condicional
// Cargar un módulo solo si se cumple una condición:
const idioma = navigator.language

if (idioma.startsWith('es')) {
  const { saludos } = await import('./i18n/es.js')
  console.log(saludos.bienvenida) // '¡Hola!'
} else {
  const { saludos } = await import('./i18n/en.js')
  console.log(saludos.bienvenida) // 'Hello!'
}

// Sin importaciones dinámicas, tendrías que cargar todos los idiomas siempre, aunque solo uses uno.




// 2. Carga bajo demanda (lazy loading)
// Cargar funcionalidad pesada solo cuando el usuario la necesita:

// Solo cargamos el editor cuando el usuario hace clic
const boton = document.querySelector('#abrir-editor')

boton.addEventListener('click', async () => {
  const { crearEditor } = await import('./editor.js')
  crearEditor()
})
// Esto es muy útil para:
// Editores de texto que pesan mucho
// Gráficas y visualizaciones complejas
// Funcionalidades premium que no todos los usuarios usan




// 3. Rutas dinámicas
// Construir la ruta del módulo con variables. Esto no es posible con import estático:

async function cargarPagina(nombrePagina) {
  const modulo = await import(`./paginas/${nombrePagina}.js`)
  modulo.renderizar()
}

cargarPagina('inicio')    // carga ./paginas/inicio.js
cargarPagina('contacto')  // carga ./paginas/contacto.js

// // Nota
// ⚠️ Ten cuidado con las rutas dinámicas: 
// asegúrate de validar la entrada para evitar cargar módulos no deseados. 
// Nunca uses valores directamente del usuario sin validar.





// 4. Módulos opcionales con fallback
// Intentar cargar un módulo y manejar el error si no está disponible:

async function cargarAnalytics() {
  try {
    const { iniciar } = await import('./analytics.js')
    iniciar()
  } catch (error) {
    console.warn('Analytics no disponible:', error.message)
    // La aplicación sigue funcionando sin analytics
  }
}










// Import dinámico y rendimiento
// Las importaciones dinámicas son una herramienta clave para mejorar el rendimiento de aplicaciones web. 
// El concepto clave es code splitting (división de código):

// Sin code splitting:
// ┌──────────────────────────────────┐
// │  bundle.js (500 KB)              │
// │  ┌────┐ ┌────┐ ┌────┐ ┌──────┐  │
// │  │App │ │Edit│ │Graf│ │Admin │  │
// │  └────┘ └────┘ └────┘ └──────┘  │
// └──────────────────────────────────┘
// → El usuario descarga TODO aunque solo use App

// Con code splitting:
// ┌──────────────┐
// │ app.js (50KB)│  ← Se carga siempre
// └──────────────┘
//   ┌──────────────┐
//   │ editor.js    │  ← Solo cuando abre editor
//   └──────────────┘
//   ┌──────────────┐
//   │ graficas.js  │  ← Solo cuando ve gráficas
//   └──────────────┘
//   ┌──────────────┐
//   │ admin.js     │  ← Solo si es administrador
//   └──────────────┘
// → Carga inicial mucho más rápida









// Diferencias clave entre import estático y dinámico

// Característica	        import estático	                            import() dinámico
// Sintaxis	                import { x } from './mod.js'	            await import('./mod.js')
// Ubicación	            Solo al inicio del archivo	                En cualquier parte
// Carga	                Siempre, antes de ejecutar	                Solo cuando se ejecuta la línea
// Resultado	            Los valores directamente	                Una Promesa
// Ruta	                    Solo strings literales	                    Puede usar variables
// Análisis	                Estático (optimizable)	                    Dinámico (en runtime)








// Cuándo usar cada uno
// Import estático: para dependencias que siempre necesitas. Es la opción por defecto y más sencilla.
// Import dinámico: para código que no siempre se necesita, como funcionalidades opcionales, internacionalización, o módulos pesados.

// Nota
// 💡 En la mayoría de casos, usa import estático. Reserva el dinámico para optimización de rendimiento o carga condicional.