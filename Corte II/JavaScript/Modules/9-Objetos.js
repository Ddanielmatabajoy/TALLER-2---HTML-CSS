import { setTitle } from "./utils/functions.js";

/**
 * TODO: OBJECTS
 */

/**
 * CREAR OBJETO SIMPLE
 */
setTitle("CREAR OBEJETO SIMPLE");
const persona1 = {
    nombre: "Juan",
    edad: 28,
    ciudad: "Cali"
};
console.log(persona1);

/**
 * ACCEDER A LAS PROPIEDADES DE UN OBJETO
 */
setTitle("ACCEDER A PROPIEDADES");
const persona2 = {
    nombre: "Juan",
    edad: 28
};
console.log(persona2.nombre, persona2.edad);

/**
 * OBJETOS DENTRO DE OBJETOS
 */
setTitle("OBJETOS DENTRO DE OBJETOS");
const estudiante1 = {
    nombre: "Laura",
    edad: 20,
    direccion: {
        ciudad: "Cali",
        barrio: "Granada",
        pais: "Colombia"
    }
};
console.log(estudiante1);

/**
 * ARRAYS DENTRO DE OBJETOS
 */
setTitle("ARRAYS DENTRO DE OBJETOS");
const estudiante2 = {
    nombre: "Laura",
    materias: [
        "Matemáticas",
        "Programación",
        "Bases de Datos"
    ]
};
console.log(estudiante2);

/**
 * METODOS DENTRO DE OBJETOS
 */
setTitle("METODOS DENTRO DE OBJETOS");
const persona3 = {
    nombre: "Carlos",

    saludar() {
        console.log("Hola");
    }
};
persona3.saludar();

/**
 * KEYS DE OBJETOS
 */
setTitle("KEYS DE OBJETOS");
const persona = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Cali"
};
console.log(Object.keys(persona));