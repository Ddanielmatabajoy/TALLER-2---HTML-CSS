import { setTitle } from "./utils/functions.js";

/**
 * TODO: TEMPLATE LITERALS
 */

/**
 * CONCATENACION TRADICIONAL
 * Antes de ES6 era común escribir.
 * Aunque funciona, cuando el texto crece se vuelve difícil de leer.
 */
setTitle("USO DE LA CONCATENACION TRADICIONAL");
let nombre1 = "Jesus David";
let edad1 = 26;
console.log("Hola, mi nombre es " + nombre1 + " y tengo " + edad1 + " años.");

/**
 * TEMPLATE STRING BASICO
 * Lo que esté dentro de ${} será evaluado por JavaScript.
 * Ahora con ES6:
 */
setTitle("USO DEL TEMPLATE STRING BASICO");
let nombre2 = "Carlos";
let edad2 = 28;
console.log(`Hola, mi nombre es ${nombre2} y tengo ${edad2} años.`);

/**
 * TEMPLATE STRING - OPERACIONES MATEMATICAS
 * No solamente se pueden insertar variables, también operaciones.
 */
setTitle("USO DEL TEMPLATE STRING CON OPERACIONES MATEMATICAS");
let precio = 100;
let iva = 19;
console.log(`Total: ${precio + (precio * iva / 100)}`);

/**
 * TEMPLATE STRING - FUNCIONES
 * No solamente se pueden insertar variables, también llamar funciones.
 */
setTitle("USO DEL TEMPLATE STRING CON FUNCIONES");
function saludar(nombre){
    return `Hola ${nombre}`;
}
console.log(`${saludar("Pedro")}`);

/**
 * TEMPLATE STRING - EXPRESIONES LOGICAS
 * No solamente se pueden insertar variables, también llamar funciones.
 */
setTitle("USO DEL TEMPLATE STRING CON EXPRESIONES LOGICAS");
let edad = 20;
console.log(`¿Es mayor de edad? ${edad >= 18}`);

/**
 * TEMPLATE STRING - OPERADOR TERNARIO
 * No solamente se pueden insertar variables, también llamar funciones.
 */
setTitle("USO DEL TEMPLATE STRING CON OPERADOR TERNARIO");
let nota = 4.2;
console.log(`Resultado: ${nota >= 3 ? "Aprobó" : "Reprobó"}`);