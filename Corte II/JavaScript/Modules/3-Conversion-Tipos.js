import { setTitle } from "./utils/functions.js";

/**
 * TODO: NUMBER()
 * Convierte un valor a tipo Number.
 * NaN significa "Not a Number", indicando que la conversión no fue posible.
 */

setTitle("USO DEL NUMBER()");
let numero = Number("25");
console.log(numero);
console.log(typeof numero);

numero = Number("3.14");
console.log(numero);
console.log(typeof numero);

console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number("Hola"));

/**
 * TODO: STRING()
 * Convierte cualquier valor a texto.
 */

setTitle("USO DEL STRING()");
console.log(String(150));
console.log(String(true));
console.log(String(false));
console.log(String(null));
console.log(String(undefined));
console.log(String([1,2,3]));

/**
 * TODO: BOOLEAN()
 * Convierte un valor a verdadero o falso.
 * Es importante explicar el concepto de Truthy y Falsy.
 */

setTitle("USO DEL BOOLEAN()");

/** Valores que se convierten en false */
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

/** Valores que se convierten en true */
console.log(Boolean(1));
console.log(Boolean(-10));
console.log(Boolean("Hola"));
console.log(Boolean({}));

/** Dato importante: aunque un arreglo vacío ([]) no tenga elementos, 
 * es un objeto y por eso es truthy. 
 * */
console.log(Boolean([]));

/**
 * TODO: PARSEINT()
 * Extrae únicamente la parte entera de una cadena.
 */

setTitle("USO DEL PARSEINT()");
console.log(parseInt("20"));
console.log(parseInt("20.85"));
console.log(parseInt("100px"));
console.log(parseInt("abc"));
console.log(parseInt("15 años"));

/**
 * TODO: PARSEFLOAT()
 * Convierte un texto a número decimal.
 */

setTitle("USO DEL PARSEFLOAT()");
console.log(parseFloat("15.89"));
console.log(parseFloat("8.5 metros"));
console.log(parseFloat("20"));
console.log(parseFloat("Hola"));
