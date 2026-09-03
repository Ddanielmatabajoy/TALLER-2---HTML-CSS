/**
 * TODO: FUNCIONES EN TYPESCRIPT
 *
 * Las funciones permiten agrupar un conjunto de
 * instrucciones para reutilizarlas cuando sea necesario.
 */


/**
 * TODO: FUNCIÓN SIN PARÁMETROS
 * Una función puede no recibir parámetros
 * ni retornar un valor.
 */

function saludar(): void {
    console.log("¡Hola Mundo!");
}

saludar();


/**
 * TODO: FUNCIÓN CON PARÁMETROS
 * Podemos indicar el tipo de cada parámetro.
 */

function saludarPersona(nombre: string): void {
    console.log(`Hola ${nombre}`);
}

saludarPersona("Carlos");

// Esto produciría un error.
// saludarPersona(100);


/**
 * TODO: MÚLTIPLES PARÁMETROS
 */

function sumar(a: number, b: number): number {
    return a + b;
}

let resultado = sumar(10, 5);

console.log(resultado);


/**
 * TODO: TIPO DE RETORNO
 * Después de los paréntesis indicamos
 * el tipo que devuelve la función.
 */

function multiplicar(a: number, b: number): number {
    return a * b;
}

console.log(multiplicar(4, 5));


/**
 * TODO: VOID
 * Una función void no retorna ningún valor.
 */

function mostrarMensaje(mensaje: string): void {
    console.log(mensaje);
}

mostrarMensaje("Bienvenido al curso");


/**
 * TODO: PARÁMETROS OPCIONALES
 * El símbolo ? indica que un parámetro
 * es opcional.
 */

function presentar(nombre: string, edad?: number): void {

    console.log(`Nombre: ${nombre}`);

    if (edad !== undefined) {
        console.log(`Edad: ${edad}`);
    }
}

presentar("Ana");
presentar("Carlos", 28);


/**
 * TODO: PARÁMETROS POR DEFECTO
 * Podemos asignar un valor por defecto.
 */

function saludarUsuario(nombre: string = "Invitado"): void {
    console.log(`Hola ${nombre}`);
}

saludarUsuario();
saludarUsuario("Pedro");


/**
 * TODO: ARROW FUNCTIONS
 * Es una forma más corta de escribir funciones.
 */

const restar = (a: number, b: number): number => {
    return a - b;
};

console.log(restar(20, 8));


/**
 * TODO: ARROW FUNCTION SIMPLIFICADA
 * Si únicamente retornamos una expresión,
 * podemos omitir las llaves y el return.
 */

const dividir = (a: number, b: number): number => a / b;

console.log(dividir(20, 4));


/**
 * TODO: FUNCIÓN QUE RETORNA UN OBJETO
 */

function crearUsuario(nombre: string, edad: number): {
    nombre: string;
    edad: number;
} {
    return {
        nombre,
        edad
    };
}

console.log(crearUsuario("Laura", 22));


/**
 * TODO: FUNCIÓN QUE RECIBE UN OBJETO
 */

function mostrarUsuario(usuario: {
    nombre: string;
    edad: number;
}): void {

    console.log(usuario.nombre);
    console.log(usuario.edad);
}

mostrarUsuario({
    nombre: "Carlos",
    edad: 28
});


/**
 * TODO: FUNCIÓN QUE RECIBE UN ARRAY
 */

function mostrarNumeros(numeros: number[]): void {

    for (const numero of numeros) {
        console.log(numero);
    }

}

mostrarNumeros([10, 20, 30, 40]);


/**
 * TODO: RESUMEN
 */

/**
 * Aprendimos:
 *
 * ✔ Funciones
 * ✔ Parámetros
 * ✔ Tipo de retorno
 * ✔ void
 * ✔ Parámetros opcionales
 * ✔ Parámetros por defecto
 * ✔ Arrow Functions
 * ✔ Funciones que retornan objetos
 * ✔ Funciones que reciben objetos
 * ✔ Funciones que reciben arrays
 */

/**
 * TODO: Métodos y conceptos importantes relacionados con funciones
 *
 * return            → Retorna un valor desde la función.
 * void              → Indica que la función no retorna nada.
 * =>                → Sintaxis de Arrow Function.
 * ?                 → Parámetro opcional.
 * =                 → Valor por defecto de un parámetro.
 * typeof            → Obtener el tipo de un dato.
 * ... (Rest)        → Recibe múltiples argumentos.
 * ... (Spread)      → Expande los elementos de un array u objeto.
 */

/**
 * TODO: REST PARAMETERS
 * Permiten recibir una cantidad variable
 * de argumentos.
 */

function sumarTodos(...numeros: number[]): number {

    let total = 0;

    for (const numero of numeros) {
        total += numero;
    }

    return total;
}

console.log(sumarTodos(10, 20));
console.log(sumarTodos(10, 20, 30));
console.log(sumarTodos(10, 20, 30, 40));

export {}