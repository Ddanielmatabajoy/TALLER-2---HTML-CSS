import { setTitle } from "./utils/functions.js";

const estudiantes = [
    { nombre: "Ana", edad: 20, nota: 4.8 },
    { nombre: "Juan", edad: 17, nota: 3.9 },
    { nombre: "Carlos", edad: 22, nota: 4.5 },
    { nombre: "Laura", edad: 19, nota: 2.8 },
    { nombre: "Pedro", edad: 25, nota: 5.0 }
];

/**
 * TODO: FOREATCH
 * Recorre cada elemento del arreglo.
 * No devuelve un nuevo arreglo.
 * Se utiliza cuando solo queremos ejecutar alguna acción.
 */
setTitle("USO DEL FOREATCH");
estudiantes.forEach(estudiante => {
    console.log(estudiante.nombre);
});

/**
 * TODO: MAP
 * Transforma todos los elementos del arreglo.
 * Siempre devuelve un nuevo arreglo.
 */setTitle("USO DEL MAP");
const nombres = estudiantes.map(estudiante => estudiante.nombre);
console.log(nombres);

/**
 * TODO: FILTER
 * Filtra los elementos que cumplen una condición.
 */
setTitle("USO DEL FILTER");
const mayores = estudiantes.filter(estudiante => estudiante.edad >= 18);
console.log(mayores);

/**
 * TODO: FIND
 * Busca el primer elemento que cumpla una condición.
 */
setTitle("USO DEL FIND");
const estudiante = estudiantes.find(estudiante => estudiante.nombre === "Carlos");
console.log(estudiante);

/**
 * TODO: REDUCE
 *  sirve para acumular datos, filtrar, mapear o reestructurar colecciones complejas 
 * en una sola operación sin necesidad de usar bucles for tradicionales.
 */
const numeros = [5, 12, 8, 130, 44];

const sumaTotal = numeros.reduce((acumulador, valorActual) => {
  return acumulador + valorActual;
}, 0);

console.log(sumaTotal);