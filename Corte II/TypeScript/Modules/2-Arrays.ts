/**
 * TODO: ARRAYS Y TUPLAS EN TYPESCRIPT
 *
 * Los arrays permiten almacenar múltiples valores
 * del mismo tipo en una sola variable.
 *
 * Las tuplas permiten almacenar una cantidad fija
 * de elementos con tipos específicos.
 */


/**
 * TODO: ARRAYS DE STRINGS
 * Un array de strings únicamente puede almacenar texto.
 */

let frutas: string[] = ["Manzana", "Pera", "Banano"];
console.log(frutas);


/**
 * TODO: ARRAYS DE NUMBERS
 * Un array de numbers únicamente puede almacenar números.
 */

let edades: number[] = [18, 25, 30, 45];
console.log(edades);


/**
 * TODO: ARRAYS DE BOOLEANS
 * Un array de boolean únicamente puede almacenar
 * valores true o false.
 */

let estados: boolean[] = [true, false, true];
console.log(estados);


/**
 * TODO: AGREGAR ELEMENTOS
 * Podemos agregar nuevos elementos utilizando push().
 */

frutas.push("Mango");
console.log(frutas);

// Esto produciría un error.
// frutas.push(100);


/**
 * TODO: ELIMINAR ELEMENTOS
 * Podemos eliminar el último elemento utilizando pop().
 */

frutas.pop();
console.log(frutas);


/**
 * TODO: ACCEDER A UN ELEMENTO
 * Los arrays comienzan en la posición 0.
 */

console.log(frutas[0]);
console.log(frutas[1]);


/**
 * TODO: MODIFICAR UN ELEMENTO
 * Podemos cambiar el valor de una posición específica.
 */

frutas[0] = "Fresa";
console.log(frutas);


/**
 * TODO: RECORRER UN ARRAY
 * Podemos recorrer un array utilizando un ciclo for...of.
 */

for (const fruta of frutas) {
    console.log(fruta);
}


/**
 * TODO: INFERENCIA DE TIPOS
 * TypeScript puede inferir automáticamente
 * el tipo de un array.
 */

let colores = ["Rojo", "Azul", "Verde"];
colores.push("Amarillo");

// Esto produciría un error.
// colores.push(100);

console.log(colores);


/**
 * TODO: ARRAYS DE OBJETOS
 * También podemos almacenar objetos dentro de un array.
 */

let usuarios: { nombre: string; edad: number }[] = [
    {
        nombre: "Carlos",
        edad: 28
    },
    {
        nombre: "Ana",
        edad: 22
    }
];

console.log(usuarios);


/**
 * TODO: TUPLAS
 * Una tupla tiene una cantidad fija de elementos
 * y cada posición posee un tipo específico.
 */

let usuario: [number, string] = [1, "Carlos"];
console.log(usuario);


/**
 * TODO: ACCEDER A UNA TUPLA
 */

console.log(usuario[0]);
console.log(usuario[1]);


/**
 * TODO: OTRA TUPLA
 * Las tuplas pueden combinar diferentes tipos.
 */

let producto: [string, number, boolean] = [
    "Laptop",
    3500,
    true
];

console.log(producto);


/**
 * TODO: READONLY EN TUPLAS
 * Podemos impedir que una tupla sea modificada.
 */

const coordenadas: readonly [number, number] = [10, 20];

console.log(coordenadas);

// Esto produciría un error.
// coordenadas[0] = 30;


/**
 * TODO: RESUMEN
 */

/**
 * Aprendimos:
 *
 * ✔ Arrays tipados
 * ✔ Arrays de strings
 * ✔ Arrays de numbers
 * ✔ Arrays de booleans
 * ✔ Arrays de objetos
 * ✔ push()
 * ✔ pop()
 * ✔ Acceder a elementos
 * ✔ Modificar elementos
 * ✔ Recorrer arrays
 * ✔ Inferencia de tipos
 * ✔ Tuplas
 * ✔ Tuplas readonly
 */

/**
 * TODO: MÉTODOS MÁS UTILIZADOS EN ARRAYS
 *
 * push()
 * Agrega uno o más elementos al final del array.
 *
 * pop()
 * Elimina el último elemento del array.
 *
 * unshift()
 * Agrega uno o más elementos al inicio del array.
 *
 * shift()
 * Elimina el primer elemento del array.
 *
 * at()
 * Obtiene un elemento usando su posición.
 *
 * includes()
 * Verifica si un elemento existe dentro del array.
 *
 * indexOf()
 * Devuelve la posición de un elemento.
 *
 * lastIndexOf()
 * Devuelve la última posición encontrada de un elemento.
 *
 * find()
 * Busca el primer elemento que cumpla una condición.
 *
 * findIndex()
 * Devuelve la posición del primer elemento que cumpla una condición.
 *
 * filter()
 * Crea un nuevo array con los elementos que cumplen una condición.
 *
 * map()
 * Transforma cada elemento y devuelve un nuevo array.
 *
 * forEach()
 * Recorre cada elemento del array.
 *
 * some()
 * Verifica si al menos un elemento cumple una condición.
 *
 * every()
 * Verifica si todos los elementos cumplen una condición.
 *
 * reduce()
 * Reduce todos los elementos a un único valor.
 *
 * sort()
 * Ordena los elementos del array.
 *
 * reverse()
 * Invierte el orden de los elementos.
 *
 * slice()
 * Extrae una parte del array sin modificar el original.
 *
 * splice()
 * Agrega, elimina o reemplaza elementos en cualquier posición.
 *
 * concat()
 * Une dos o más arrays.
 *
 * join()
 * Convierte los elementos del array en un string.
 *
 * flat()
 * Aplana arrays anidados.
 *
 * flatMap()
 * Combina map() y flat().
 *
 * Array.isArray()
 * Verifica si una variable es un array.
 */

export {}