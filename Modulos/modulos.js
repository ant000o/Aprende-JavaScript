// Los módulos permiten dividir tu código en archivos separados, 
// donde cada archivo tiene una responsabilidad clara y puede compartir funcionalidad con los demás.


// ES Modules: módulos nativos de JavaScript
// En 2015, con ES6 (ECMAScript 2015), JavaScript añadió su propio sistema de módulos al lenguaje: los ES Modules (ESM). Es el estándar que funciona tanto en navegadores como en Node.js.

// Las principales ventajas de ES Modules son:
// ✅ Estándar del lenguaje: no necesitas herramientas externas.
// ✅ Funciona en navegadores y en Node.js.
// ✅ Análisis estático: las herramientas pueden analizar las importaciones sin ejecutar el código.
// ✅ Carga asíncrona: no bloquean el navegador.
// ✅ Encapsulación real: cada módulo tiene su propio scope.


// Cómo usar ES Modules en el navegador
// Para usar módulos en HTML, solo necesitas añadir type="module" al <script>:

<script type="module" src="app.js"></script>
// Con type="module", el archivo app.js se comporta como un módulo:
// - Tiene su propio scope (las variables no son globales).
// - Puede usar import y export.
// - Se carga de forma asíncrona (como si tuviera defer).
// - Se ejecuta en modo estricto ('use strict') automáticamente.





// Cómo usar ES Modules en Node.js
// En Node.js, tienes dos opciones para usar ES Modules:

// Opción 1: Usa la extensión .mjs:

// utils.mjs
export function formatear(texto) {
  return texto.toUpperCase()
}


// Opción 2: Añade "type": "module" en tu package.json:
// {
//   "name": "mi-proyecto",
//   "type": "module"
// }

// Con la Opción 2, todos los archivos .js del proyecto se tratan como módulos ES.

// Resumen
// Sistema	Año	Sintaxis	Dónde funciona
// Scripts globales	1995	<script>	Navegador
// IIFE	~2000	(function(){})()	Navegador
// CommonJS	2009	require / module.exports	Node.js
// ES Modules	2015	import / export	Navegador + Node.js


// Los ES Modules son el estándar actual y lo que deberías usar en tus proyectos.