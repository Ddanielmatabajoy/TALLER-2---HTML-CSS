import { setTitle } from "./utils/functions.js";

/**
 * PROBLEMA DE LA REFERENCIA
 */
let persona1 = {
    nombre: "Juan"
};
let persona2 = persona1;
persona2.nombre = "Carlos";
console.log(persona1.nombre);
console.log(persona2.nombre);

/**
 * ROMPIENDO LA REFERENCIA
 */
const persona3 = {
    nombre: "Juan",
    edad: 30
};
const persona4 = {
    ...persona3
};
persona4.nombre = "Carlos";
console.log(persona3.nombre);
console.log(persona4.nombre);

/**
 * OPERADOR SPREAD
 * Spread significa "descomponer" un objeto o un arreglo en sus elementos.
 */
const grupo1 = ["Ana", "Juan"];
const grupo2 = ["Pedro", "Laura"];

const grupoCompleto = [
    ...grupo1,
    ...grupo2
];

console.log(grupoCompleto);

/**
 * OPERADOR SPREAD - Sobrescribir propiedades
 */
const persona5 = {
    nombre: "Juan",
    edad: 20
};

const actualizada = {
    ...persona5,
    edad: 30
};

console.log(actualizada);

/**
 * Desestructuración de Arrays
 */
const colores = [
    "Rojo",
    "Azul",
    "Verde"
];
const [primero, segundo] = colores;
console.log(primero);
console.log(segundo);

/**
 * Desestructuración de Objetos
 */
const persona6 = {
    nombre: "María",
    edad: 28,
    ciudad: "Bogotá"
};
const {nombre, ciudad} = persona6;
console.log(nombre);
console.log(ciudad);

/**
 * Cambiar el nombre de una propiedad
 */
const persona7 = { nombre: "Jesus" }
const { nombre: nombrePersona } = persona7;
console.log(nombrePersona);

/**
 * Asignar valores por defecto
 */
const configuracion = { tema: "Oscuro" };
const { tema, idioma = "Español" } = configuracion;
console.log(tema);
console.log(idioma);