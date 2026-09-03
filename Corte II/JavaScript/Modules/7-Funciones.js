import { setTitle } from "./utils/functions.js";

/**
 * TODO: FUNCIONES
 */

/**
 * FUNCIONES SIMPLE
 */
setTitle("USO DE FUNCIONES SIMPLES");
function saludar1() {
    console.log("¡Hola, bienvenido al curso!");
}

saludar1();

/**
 * FUNCIONES CON PARAMETROS
 * Los parámetros permiten que una función reciba información.
 */
setTitle("USO DE FUNCIONES CON PARAMETROS");
function saludar2(nombre) {
    console.log(`Hola ${nombre}`);
}

saludar2("Carlos");
saludar2("María");
saludar2("Pedro");

/**
 * FUNCIONES CON DOS PARAMETROS
 * Los parámetros permiten que una función reciba información.
 */
setTitle("USO DE FUNCIONES CON DOS PARAMETROS");
function sumar1(numero1, numero2) {
    console.log(numero1 + numero2);
}

sumar1(5, 8);
sumar1(20, 10);

/**
 * FUNCIONES CON PARAMETROS POR DEFECTO
 * Los parámetros permiten que una función reciba información.
 */
setTitle("USO DE FUNCIONES CON PARAMETROS POR DEFECTO");
function saludar3(nombre = "Invitado") {
    console.log(`Hola ${nombre}`);
}

saludar3();
saludar3("Laura");

/**
 * FUNCIONES CON RETORNO
 * Los parámetros permiten que una función reciba información.
 */
setTitle("USO DE FUNCIONES CON RETORNO");
function sumar2(a, b) {
    return a + b;
}

console.log(sumar2(5, 4));

/**
 * FUNCIONES DE FLECHA
 */
setTitle("USO DE FUNCIONES DE FLECHA");
const sumar3 = function (a, b) {
    return a + b;
};

const sumar4 = (a, b) => {
    return a + b;
};

const sumar5 = (a, b) => a + b;

console.log(sumar3(5,2));
console.log(sumar4(5,2));
console.log(sumar5(5,2));