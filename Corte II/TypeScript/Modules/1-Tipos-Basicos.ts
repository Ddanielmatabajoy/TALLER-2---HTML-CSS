/**
 * TODO: TIPOS BÁSICOS EN TYPESCRIPT
 * 
 * TypeScript nos permite especificar el tipo de dato 
 * que una variable puede almacenar.
 */


/**
 * TODO: STRING
 * Un string representa texto.
 * Si intentamos asignar otro tipo de dato,TypeScript mostrará un error.
 */

let nombre: string = "Carlos";
console.log(nombre);
//nombre = 100;


/**
 * TODO: NUMBER
 * El tipo number sirve para números enteros y decimales.
 */

let edad: number = 28;
let precio: number = 19.99;
let temperatura: number = -5;

console.log(edad);
console.log(precio);
console.log(temperatura);


/**
 * TODO: BOOLEAN
 * Un boolean únicamente puede almacenar true o false.
 */

let esMayorDeEdad: boolean = true;
let estaLogueado: boolean = false;

console.log(esMayorDeEdad);
console.log(estaLogueado);


/**
 * TODO: NULL
 * null representa la ausencia intencional de un valor.
 */
let respuesta: null = null;
console.log(respuesta);


/**
 * TODO: UNDEFINED
 * undefined significa que una variable aún no tiene un valor asignado.
 */

let dato: undefined = undefined;

console.log(dato);


/**
 * TODO: INFERENCIA DE TIPOS
 * TypeScript puede descubrir automáticamente el tipo de una variable.
 */
let ciudad = "Cali";
let cantidad = 50;
let activo = true;

// No fue necesario escribir:

// let ciudad: string
// let cantidad: number
// let activo: boolean

console.log(ciudad);
console.log(cantidad);
console.log(activo);


/**
 * TODO: DIFERENCIA ENTRE TIPADO EXPLÍCITO E IMPLÍCITO
 */

// Tipado explícito. Nosotros indicamos el tipo.
let pais: string = "Colombia";

// Tipado implícito. TypeScript lo deduce automáticamente.
let moneda = "COP";

console.log(pais);
console.log(moneda);


/**
 * TODO: CAMBIAR EL VALOR DE UNA VARIABLE
 * Podemos cambiar el valor siempre que siga siendo del mismo tipo.
 */

let color: string = "Rojo";
console.log(color);

color = "Azul";
console.log(color);

// Esto produciría un error.
// color = 25;


/**
 * TODO: TYPEOF
 * JavaScript tiene el operador typeof, 
 * que nos indica el tipo del dato en tiempo de ejecución.
 */
// JavaScript tiene el operador typeof,
// que nos indica el tipo del dato en tiempo
// de ejecución.

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof esMayorDeEdad);


/**
 * TODO: RESUMEN
 */

/**
 * Tipos básicos aprendidos:
 * string
 * number
 * boolean
 * null
 * undefined
 * bigint
 * symbol
 * 
 * También vimos:
 * ✔ Tipado explícito
 * ✔ Inferencia de tipos
 * ✔ typeof
 */

export {}