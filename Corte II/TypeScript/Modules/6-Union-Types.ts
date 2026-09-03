/**
 * TODO: UNION TYPES EN TYPESCRIPT
 *
 * Los Union Types permiten que una variable
 * pueda almacenar más de un tipo de dato.
 *
 * Para ello utilizamos el operador |.
 */


/**
 * TODO: UNION TYPES BÁSICOS
 * Una variable puede almacenar un string o un number.
 */

let codigo: string | number = "A001";

console.log(codigo);

codigo = 100;

console.log(codigo);

// Esto produciría un error.
// codigo = true;


/**
 * TODO: PARÁMETROS CON UNION TYPES
 * Una función puede recibir diferentes tipos
 * de datos.
 */

function imprimir(valor: string | number): void {
    console.log(valor);
}

imprimir("Hola");
imprimir(500);


/**
 * TODO: LITERAL TYPES
 *
 * Podemos limitar los valores permitidos.
 */

type Estado = "Activo" | "Inactivo" | "Pendiente";

let estado: Estado = "Activo";

console.log(estado);

// Esto produciría un error.
// estado = "Cancelado";


/**
 * TODO: TYPE NARROWING
 *
 * TypeScript puede identificar automáticamente
 * el tipo utilizando typeof.
 */

function mostrarDato(valor: string | number): void {

    if (typeof valor === "string") {
        console.log(valor.toUpperCase());
    }

    if (typeof valor === "number") {
        console.log(valor.toFixed(2));
    }

}

mostrarDato("typescript");
mostrarDato(1500);


/**
 * TODO: ANY
 *
 * any desactiva completamente el sistema
 * de tipos de TypeScript.
 *
 * No es recomendable utilizarlo.
 */

let dato: any = "Hola";

dato = 100;
dato = true;
dato = [];
dato = {};

console.log(dato);


/**
 * TODO: UNKNOWN
 *
 * unknown también puede almacenar cualquier dato,
 * pero obliga a verificar su tipo antes de utilizarlo.
 */

let valor: unknown = "Carlos";

if (typeof valor === "string") {
    console.log(valor.toUpperCase());
}


/**
 * TODO: NEVER
 *
 * never representa un valor que nunca debería existir.
 *
 * Generalmente aparece en funciones que
 * nunca terminan correctamente.
 */

function lanzarError(mensaje: string): never {
    throw new Error(mensaje);
}

// lanzarError("Ha ocurrido un error");


/**
 * TODO: INTERSECTION TYPES
 *
 * Permiten combinar varios tipos en uno solo.
 *
 * Para ello utilizamos el operador &.
 */

type Persona = {
    nombre: string;
};

type Contacto = {
    telefono: string;
};

type PersonaContacto = Persona & Contacto;

let persona: PersonaContacto = {
    nombre: "Carlos",
    telefono: "3001234567"
};

console.log(persona);


/**
 * TODO: UNION DE OBJETOS
 */

type Cuadrado = {
    lado: number;
};

type Circulo = {
    radio: number;
};

type Figura = Cuadrado | Circulo;

let figura1: Figura = {
    lado: 10
};

let figura2: Figura = {
    radio: 5
};

console.log(figura1);
console.log(figura2);


/**
 * TODO: TYPE NARROWING CON IN
 *
 * También podemos utilizar el operador in
 * para identificar propiedades.
 */

function mostrarFigura(figura: Figura): void {

    if ("lado" in figura) {
        console.log(`Cuadrado: ${figura.lado}`);
    }

    if ("radio" in figura) {
        console.log(`Círculo: ${figura.radio}`);
    }

}

mostrarFigura(figura1);
mostrarFigura(figura2);


/**
 * TODO: RESUMEN
 */

/**
 * Aprendimos:
 *
 * ✔ Union Types (|)
 * ✔ Literal Types
 * ✔ Type Narrowing
 * ✔ typeof
 * ✔ any
 * ✔ unknown
 * ✔ never
 * ✔ Intersection Types (&)
 * ✔ Union de Objetos
 * ✔ Operador in
 */

export {}