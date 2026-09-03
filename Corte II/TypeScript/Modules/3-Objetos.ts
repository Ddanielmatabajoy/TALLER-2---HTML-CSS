/**
 * TODO: OBJETOS EN TYPESCRIPT
 *
 * Un objeto permite agrupar múltiples valores
 * relacionados utilizando propiedades.
 */


/**
 * TODO: OBJETO BÁSICO
 * Podemos definir el tipo de cada propiedad
 * dentro del objeto.
 */

let usuario: {
    nombre: string;
    edad: number;
    activo: boolean;
} = {
    nombre: "Carlos",
    edad: 28,
    activo: true
};

console.log(usuario);


/**
 * TODO: ACCEDER A LAS PROPIEDADES
 * Podemos acceder utilizando la notación punto.
 */

console.log(usuario.nombre);
console.log(usuario.edad);
console.log(usuario.activo);


/**
 * TODO: MODIFICAR PROPIEDADES
 * Podemos cambiar el valor de una propiedad
 * siempre que respete su tipo.
 */

usuario.nombre = "Juan";
usuario.edad = 30;

console.log(usuario);

// Esto produciría un error.
// usuario.edad = "Treinta";


/**
 * TODO: AGREGAR NUEVAS PROPIEDADES
 *
 * No podemos agregar propiedades que
 * no fueron definidas en el tipo.
 */

// usuario.email = "correo@email.com";


/**
 * TODO: OBJETOS ANIDADOS
 * Un objeto puede contener otros objetos.
 */

let empleado: {
    nombre: string;
    cargo: string;
    direccion: {
        ciudad: string;
        pais: string;
    };
} = {
    nombre: "Ana",
    cargo: "Desarrolladora",
    direccion: {
        ciudad: "Cali",
        pais: "Colombia"
    }
};

console.log(empleado);


/**
 * TODO: ACCEDER A OBJETOS ANIDADOS
 */

console.log(empleado.direccion.ciudad);
console.log(empleado.direccion.pais);


/**
 * TODO: PROPIEDADES OPCIONALES
 *
 * El símbolo ? indica que una propiedad
 * puede existir o no.
 */

let producto: {
    nombre: string;
    precio: number;
    descuento?: number;
} = {
    nombre: "Laptop",
    precio: 3500
};

console.log(producto);

// Podemos agregar la propiedad más adelante.

producto.descuento = 10;

console.log(producto);


/**
 * TODO: PROPIEDADES READONLY
 *
 * readonly impide modificar una propiedad
 * después de crear el objeto.
 */

let cliente: {
    readonly id: number;
    nombre: string;
} = {
    id: 1,
    nombre: "Pedro"
};

console.log(cliente);

// Esto produciría un error.
// cliente.id = 5;

cliente.nombre = "Carlos";

console.log(cliente);


/**
 * TODO: INFERENCIA DE TIPOS
 *
 * TypeScript puede inferir automáticamente
 * el tipo del objeto.
 */

let mascota = {
    nombre: "Firulais",
    edad: 5,
    vacunado: true
};

console.log(mascota);

// TypeScript ya sabe que nombre es string.
// mascota.nombre = 20;


/**
 * TODO: ARRAY DE OBJETOS
 *
 * Los arrays pueden almacenar objetos.
 */

let estudiantes: {
    nombre: string;
    nota: number;
}[] = [
    {
        nombre: "Carlos",
        nota: 4.5
    },
    {
        nombre: "Laura",
        nota: 3.8
    },
    {
        nombre: "Juan",
        nota: 5
    }
];

console.log(estudiantes);


/**
 * TODO: RECORRER UN ARRAY DE OBJETOS
 */

for (const estudiante of estudiantes) {
    console.log(estudiante.nombre);
    console.log(estudiante.nota);
}


/**
 * TODO: DESESTRUCTURACIÓN
 *
 * Podemos extraer propiedades de un objeto
 * en variables independientes.
 */

const { nombre, edad } = usuario;

console.log(nombre);
console.log(edad);


/**
 * TODO: RESUMEN
 */

/**
 * Aprendimos:
 *
 * ✔ Objetos
 * ✔ Tipado de objetos
 * ✔ Acceder a propiedades
 * ✔ Modificar propiedades
 * ✔ Objetos anidados
 * ✔ Propiedades opcionales (?)
 * ✔ Propiedades readonly
 * ✔ Inferencia de tipos
 * ✔ Arrays de objetos
 * ✔ Desestructuración
 */

/**
 * TODO: Métodos más utilizados de Object
 *
 * Object.keys()      → Obtiene un array con las llaves del objeto.
 * Object.values()    → Obtiene un array con los valores del objeto.
 * Object.entries()   → Obtiene un array con pares [llave, valor].
 * Object.assign()    → Copia o combina uno o varios objetos.
 * Object.freeze()    → Hace un objeto completamente inmutable.
 * Object.seal()      → Impide agregar o eliminar propiedades.
 * Object.hasOwn()    → Verifica si una propiedad pertenece al objeto.
 *
 * Operadores importantes
 *
 * delete             → Elimina una propiedad del objeto.
 * in                 → Verifica si una propiedad existe.
 * typeof             → Obtiene el tipo de un dato.
 *
 * TODO: Sintaxis útil
 *
 * ... (Spread)       → Copiar o combinar objetos.
 * { }                → Desestructuración de objetos.
 */

export {}