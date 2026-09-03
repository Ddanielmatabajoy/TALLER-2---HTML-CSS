/**
 * TODO: GENERICS EN TYPESCRIPT
 *
 * Los Generics permiten crear funciones,
 * clases e interfaces reutilizables que
 * pueden trabajar con diferentes tipos
 * de datos sin perder el tipado.
 */


/**
 * TODO: FUNCIÓN SIN GENERICS
 *
 * Esta función solo funciona con strings.
 */

function obtenerNombre(nombre: string): string {
    return nombre;
}

console.log(obtenerNombre("Carlos"));


/**
 * TODO: FUNCIÓN CON GENERICS
 *
 * Utilizamos <T> para indicar que el tipo
 * será definido cuando llamemos la función.
 */

function obtenerValor<T>(valor: T): T {
    return valor;
}

console.log(obtenerValor("Hola"));
console.log(obtenerValor(100));
console.log(obtenerValor(true));


/**
 * TODO: UTILIZAR DIFERENTES TIPOS
 */

const texto = obtenerValor<string>("TypeScript");
const numero = obtenerValor<number>(500);
const activo = obtenerValor<boolean>(true);

console.log(texto);
console.log(numero);
console.log(activo);


/**
 * TODO: GENERICS CON ARRAYS
 *
 * También podemos utilizar Generics
 * con arrays.
 */

function obtenerPrimerElemento<T>(elementos: T[]): T {

    return elementos[0];

}

console.log(obtenerPrimerElemento([10, 20, 30]));

console.log(obtenerPrimerElemento([
    "Rojo",
    "Azul",
    "Verde"
]));


/**
 * TODO: GENERICS CON OBJETOS
 */

type Usuario = {
    nombre: string;
    edad: number;
};

const usuario = obtenerValor<Usuario>({
    nombre: "Laura",
    edad: 25
});

console.log(usuario);


/**
 * TODO: INTERFACES GENÉRICAS
 *
 * Una interface también puede
 * utilizar Generics.
 */

interface Respuesta<T> {

    datos: T;
    mensaje: string;

}

const respuesta: Respuesta<string> = {

    datos: "Operación exitosa",
    mensaje: "OK"

};

console.log(respuesta);


/**
 * TODO: OTRA INTERFACE GENÉRICA
 */

const respuesta2: Respuesta<number> = {

    datos: 100,
    mensaje: "Total"

};

console.log(respuesta2);


/**
 * TODO: CLASES GENÉRICAS
 *
 * Las clases también pueden
 * trabajar con Generics.
 */

class Caja<T> {

    constructor(
        public contenido: T
    ) { }

}

const cajaTexto = new Caja("Laptop");

console.log(cajaTexto.contenido);

const cajaNumero = new Caja(500);

console.log(cajaNumero.contenido);


/**
 * TODO: GENERICS CON MÚLTIPLES TIPOS
 *
 * Podemos utilizar más de un tipo genérico.
 */

function mostrarDatos<T, U>(
    dato1: T,
    dato2: U
): void {

    console.log(dato1);
    console.log(dato2);

}

mostrarDatos("Carlos", 28);
mostrarDatos(true, "Activo");


/**
 * TODO: ¿CUÁNDO UTILIZAR GENERICS?
 *
 * ✔ Funciones reutilizables.
 * ✔ Clases reutilizables.
 * ✔ Interfaces reutilizables.
 * ✔ Librerías.
 * ✔ APIs.
 */


/**
 * TODO: RESUMEN
 */

/**
 * Aprendimos:
 *
 * ✔ Generics
 * ✔ <T>
 * ✔ Funciones genéricas
 * ✔ Arrays genéricos
 * ✔ Objetos genéricos
 * ✔ Interfaces genéricas
 * ✔ Clases genéricas
 * ✔ Múltiples tipos genéricos
 */

/**
 * Conceptos importantes
 *
 * <T>        → Tipo genérico.
 * <T, U>     → Múltiples tipos genéricos.
 * T[]        → Array del tipo T.
 * interface<T> → Interface genérica.
 * class<T>   → Clase genérica.
 */

export {};