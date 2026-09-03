import { setTitle } from "./utils/functions.js";

/**
 * TODO: DECLARACION DE VARIABLES
 */

/**
 * LET - Permite crear variables cuyo valor puede cambiar.
 */
setTitle("USO DEL LET");
let edad = 25;
console.log(edad);
edad = 26;
console.log(edad);

/**
 * CONST - Se utiliza para valores que no deberían cambiar.
 * Error - PI = 5;
 */
setTitle("USO DEL CONST");
const PI = 3.1416;
console.log(PI);

/**
 * VAR - Antes de ES6 se utilizaba var. 
 * Actualmente se recomienda utilizar: LET y CONST.
 * Ya que tienen un comportamiento más seguro y predecible.
 * Nota: Aunque encontrarás mucho código antiguo usando var, 
 * en proyectos modernos es recomendable utilizar let y const.
 */
setTitle("USO DEL VAR");
var ciudad = "Cali";
console.log(ciudad);

/**
 * TODO: TIPOS DE DATOS
 */

/**
 * STRING (Cadena de texto) Representa texto.
 */
setTitle("USO DEL STRING");
let nombre = "Carlos";
console.log(nombre);
console.log(typeof nombre);

/**
 * NUMBER Representa números enteros y decimales.
 */
setTitle("USO DEL NUMBER");
let semestre = 4;
let altura = 1.75;
console.log(semestre);
console.log(altura);
console.log(typeof semestre, typeof altura);

/**
 * BOOLEAN Representa valores de verdadero o falso.
 */
setTitle("USO DEL BOOLEAN");
let activo = true;
let aprobado = false;
console.log(activo);
console.log(aprobado);
console.log(typeof activo, typeof aprobado);

/**
 * UNDEFINED Significa que una variable fue declarada pero aún no tiene un valor asignado.
 */
setTitle("USO DEL UNDEFINED");
let direccion;
console.log(direccion);
console.log(typeof direccion);

/**
 * NULL Representa la ausencia intencional de un valor.
 * Aunque typeof null devuelve "object", esto es un error histórico del lenguaje 
 * que se mantiene por compatibilidad.
 */
setTitle("USO DEL NULL");
let usuario = null;
console.log(usuario);
console.log(typeof usuario);

/**
 * OBJECT Un objeto agrupa información relacionada mediante pares clave-valor.
 */
setTitle("USO DEL OBJECT");
let persona = {
    nombre: "Ana",
    edad: 25,
    ciudad: "Bogotá"
};
console.log(persona);
console.log(typeof persona);

/**
 * ARRAY Un array almacena múltiples valores en una sola variable.
 * Aunque conceptualmente un arreglo es una colección ordenada, 
 * técnicamente en JavaScript es un tipo especial de objeto.
 */
setTitle("USO DEL ARRAY");
let frutas = [
    "Manzana",
    "Pera",
    "Mango"
];
console.log(frutas);
console.log(typeof frutas);