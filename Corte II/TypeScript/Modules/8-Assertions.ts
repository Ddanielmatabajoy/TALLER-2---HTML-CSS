/**
 * TODO: TYPE ASSERTIONS EN TYPESCRIPT
 *
 * Una Type Assertion le indica a TypeScript
 * que trate un valor como un tipo específico.
 *
 * No modifica el dato en tiempo de ejecución,
 * únicamente ayuda al compilador.
 */


/**
 * TODO: ASSERTION CON "as"
 *
 * La forma más utilizada de realizar una
 * Type Assertion es utilizando la palabra "as".
 */

let valor: unknown = "Hola TypeScript";

let mensaje = valor as string;

console.log(mensaje);
console.log(mensaje.toUpperCase());


/**
 * TODO: ASSERTION CON TIPOS DE OBJETOS
 */

type Usuario = {
    nombre: string;
    edad: number;
};

let datos: unknown = {
    nombre: "Carlos",
    edad: 28
};

let usuario = datos as Usuario;

console.log(usuario.nombre);
console.log(usuario.edad);


/**
 * TODO: ASSERTION EN ARRAYS
 */

let lista: unknown = [10, 20, 30];

let numeros = lista as number[];

console.log(numeros);

console.log(numeros[0]);


/**
 * TODO: ASSERTION CON FUNCIONES
 */

function mostrarTexto(texto: unknown): void {

    const mensaje = texto as string;

    console.log(mensaje.toUpperCase());

}

mostrarTexto("Bienvenido");


/**
 * TODO: NON-NULL ASSERTION (!)
 *
 * El operador ! le indica a TypeScript
 * que un valor no será null ni undefined.
 */

let nombre: string | null = "Carlos";

console.log(nombre!.toUpperCase());


/**
 * TODO: EJEMPLO CON NULL
 */

function imprimirNombre(nombre: string | null): void {

    if (nombre !== null) {
        console.log(nombre.toUpperCase());
    }

}

imprimirNombre("Laura");


/**
 * TODO: DIFERENCIA ENTRE AS Y !
 *
 * as
 * ----
 * Convierte un valor al tipo indicado.
 *
 * !
 * ----
 * Le dice a TypeScript que el valor
 * nunca será null o undefined.
 */


/**
 * TODO: ¿CUÁNDO UTILIZAR TYPE ASSERTIONS?
 *
 * ✔ Cuando conocemos el tipo real del dato.
 * ✔ Al trabajar con librerías externas.
 * ✔ Al manipular datos desconocidos (unknown).
 * ✔ Al acceder a elementos del DOM.
 *
 * Evita utilizarlas si TypeScript puede
 * inferir correctamente el tipo.
 */


/**
 * TODO: RESUMEN
 */

/**
 * Aprendimos:
 *
 * ✔ Type Assertions
 * ✔ Operador as
 * ✔ Assertions con objetos
 * ✔ Assertions con arrays
 * ✔ Non-Null Assertion (!)
 * ✔ Diferencias entre as y !
 */

/**
 * TODO: Operadores importantes
 *
 * as        → Convertir un valor a un tipo específico.
 * !         → Indicar que un valor no será null ni undefined.
 * unknown   → Tipo seguro para datos desconocidos.
 * null      → Ausencia intencional de un valor.
 * undefined → Valor no inicializado.
 */

/**
 * EJEMPLO
 * Hay un ejemplo que es el caso de uso más común de las Type Assertions: el DOM.
 * querySelector() puede devolver distintos tipos de elementos o incluso null. Con as
 * HTMLInputElement le indicamos a TypeScript que esperamos específicamente un <input>.
 * const input = document.querySelector("#nombre") as HTMLInputElement;
 */

export {}