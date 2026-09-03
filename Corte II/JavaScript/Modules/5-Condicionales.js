import { setTitle } from "./utils/functions.js";

/**
 * TODO: CONDICIONALAES
 */

/**
 * CONDICIONAL IF
 * Aprender a controlar el flujo de un programa tomando decisiones según una o varias condiciones.
 */
setTitle("USO DEL CONDICIONAL IF");
let edad1 = 20;
if (edad1 >= 18) {
    console.log("Eres mayor de edad.");
}

/**
 * CONDICIONAL IF ELSE
 * Cuando necesitamos ejecutar un bloque si la condición es verdadera y otro diferente cuando es falsa.
 */
setTitle("USO DEL CONDICIONAL IF ELSE");
let edad2 = 15;
if (edad2 >= 18) {
    console.log("Puedes ingresar.");
} else {
    console.log("Acceso denegado.");
}

/**
 * CONDICIONAL ELSE IF
 * Se utiliza cuando existen más de dos posibilidades.
 */
setTitle("USO DEL CONDICIONAL ELSE IF");
let nota = 82;
if (nota >= 90) {
    console.log("Excelente");
} else if (nota >= 70) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

/**
 * CONDICIONAL TERNARIO
 * Es una forma abreviada de escribir un if...else.
 */
setTitle("USO DEL CONDICIONAL TERNARIO");
let edad3 = 20;
console.log(edad3 >= 18 ? "Mayor de edad" : "Menor de edad");

/**
 * CONDICIONAL SWITCH
 * Es útil cuando una misma variable puede tener muchos valores posibles.
 */
setTitle("USO DEL CONDICIONAL SWITCH");
let dia = 3;
switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    default:
        console.log("Día no válido");
}