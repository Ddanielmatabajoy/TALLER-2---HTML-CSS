import { setTitle } from "./utils/functions.js";

/**
 * TODO: ARRAYS
 */

/**
 * CREAR ARRAYS
 */
setTitle("CREAR ARRAYS");
const numeros = [10, 20, 30, 40];
const nombres = ["Ana", "Juan", "Carlos"];
const mixto = ["Hola", 10, true, null ];

/**
 * LEER ARRAYS
 */
setTitle("LEER ARRAY");
const frutas1 = ["Manzana", "Banana", "Naranja"];
console.log(frutas1[0]);
console.log(frutas1[1]);
console.log(frutas1[2]);

/**
 * TAMAÑO ARRAYS
 */
setTitle("TAMAÑO ARRAY");
const frutas2 = ["Manzana", "Banana", "Naranja"];
console.log(frutas2.length);

/**
 * AGREGAR ELEMENTOS A UN ARRAY
 */
setTitle("AGREGAR ELEMENTO A UN ARRAY");
const frutas3 = ["Manzana", "Banana"];
frutas3.push("Pera");
console.log(frutas3);

/**
 * ELIMINAR EL ULTIMO ELEMENTO DE UN ARRAY
 */
setTitle("ELIMINAR ULTIMO ELEMENTO DE UN ARRAY");
const frutas4 = ["Manzana", "Banana", "Pera"];
frutas4.pop();
console.log(frutas4);

/**
 * AGREGAR UN ELEMENTO AL INICIO DEL ARRAY
 */
setTitle("AGREGAR UN ELEMENTO AL INICIO DE UN ARRAY");
const frutas5 = ["Banana", "Pera"];
frutas5.unshift("Manzana");
console.log(frutas5);

/**
 * ELIMINAR EL PRIMER ELEMENTO DE UNA ARRAY
 */
setTitle("ELIMINAR EL PRIMER ELEMENTO DE UN ARRAY");
const frutas6 = ["Manzana", "Banana", "Pera"];
frutas6.shift();
console.log(frutas6);

/**
 * VERIFICAR SI UN ELEMENTO EXISTE
 */
setTitle("VERIFICAR SI UN ELEMENTO EXISTE DENTRO DE UN ARRAY");
const frutas7 = ["Manzana", "Banana", "Pera"];
console.log(frutas7.includes("Banana"));
console.log(frutas7.includes("Mango"));

/**
 * VERIFICAR LA POSICION DE UN ELEMENTO
 */
setTitle("VERIFICAR LA POSICION DE UN ELEMENTO EN UN ARRAY");
const frutas8 = ["Manzana", "Banana", "Pera"];
console.log(frutas8.indexOf("Banana"));
console.log(frutas8.indexOf("Mango"));

/**
 * ORDENAR UN ARRAY
 */
setTitle("ORDENAR UN ARRAY");
const letras = ["d","a","c","b"];
letras.sort();
console.log(letras);

const numeros2 = [40,5,100,20];
numeros2.sort((a,b)=>a-b);
console.log(numeros2);

/**
 * RECORRER UN ARREGLO CON FOR
 */
setTitle("RECORRER UN ARRAY CON FOR");
const frutas9 = ["Manzana","Banana","Pera"];
for(let i=0;i<frutas9.length;i++){
    console.log(frutas9[i]);
}

/**
 * RECORRER UN ARREGLO CON FOR OF
 */
setTitle("RECORRER UN ARRAY CON FOR OF");
const frutas10 = ["Manzana","Banana","Pera"];
for(const fruta of frutas10){
    console.log(fruta);
}