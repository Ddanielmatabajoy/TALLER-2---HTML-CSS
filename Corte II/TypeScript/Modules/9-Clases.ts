/**
 * TODO: CLASES EN TYPESCRIPT
 *
 * Una clase es una plantilla que nos permite
 * crear objetos con las mismas propiedades
 * y comportamientos.
 */


/**
 * TODO: CREAR UNA CLASE
 */

class Persona {

    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

}

const persona = new Persona("Carlos", 28);

console.log(persona);


/**
 * TODO: ACCEDER A LAS PROPIEDADES
 */

console.log(persona.nombre);
console.log(persona.edad);


/**
 * TODO: MODIFICAR PROPIEDADES
 */

persona.nombre = "Juan";
persona.edad = 30;

console.log(persona);


/**
 * TODO: MÉTODOS
 *
 * Una clase también puede tener funciones.
 */

class Usuario {

    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    saludar(): void {
        console.log(`Hola ${this.nombre}`);
    }

}

const usuario = new Usuario("Laura");

usuario.saludar();


/**
 * TODO: PUBLIC
 *
 * Es el modificador por defecto.
 * Sus propiedades pueden accederse
 * desde cualquier parte.
 */

class Producto {

    public nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

}

const producto = new Producto("Laptop");

console.log(producto.nombre);


/**
 * TODO: PRIVATE
 *
 * Solo puede utilizarse dentro de la clase.
 */

class CuentaBancaria {

    private saldo: number;

    constructor(saldo: number) {
        this.saldo = saldo;
    }

    mostrarSaldo(): void {
        console.log(this.saldo);
    }

}

const cuenta = new CuentaBancaria(5000);

cuenta.mostrarSaldo();

// Esto produciría un error.

// console.log(cuenta.saldo);


/**
 * TODO: PROTECTED
 *
 * protected permite acceder únicamente
 * desde la clase y sus clases hijas.
 */

class Animal {

    protected nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

}


/**
 * TODO: READONLY
 *
 * readonly impide modificar una propiedad
 * después de crear el objeto.
 */

class Cliente {

    readonly id: number;

    constructor(id: number) {
        this.id = id;
    }

}

const cliente = new Cliente(1);

console.log(cliente.id);

// Esto produciría un error.

// cliente.id = 10;


/**
 * TODO: SIMPLIFICAR EL CONSTRUCTOR
 *
 * TypeScript permite declarar las propiedades
 * directamente en el constructor.
 */

class Empleado {

    constructor(
        public nombre: string,
        public cargo: string,
        private salario: number
    ) { }

    mostrarInformacion(): void {

        console.log(this.nombre);
        console.log(this.cargo);

    }

}

const empleado = new Empleado(
    "Ana",
    "Desarrolladora",
    5000
);

empleado.mostrarInformacion();


/**
 * TODO: THIS
 *
 * this hace referencia al objeto actual.
 */

class Auto {

    constructor(
        public marca: string,
        public modelo: string
    ) { }

    mostrarAuto(): void {

        console.log(this.marca);
        console.log(this.modelo);

    }

}

const auto = new Auto(
    "Toyota",
    "Corolla"
);

auto.mostrarAuto();


/**
 * TODO: RESUMEN
 */

/**
 * TODO: Aprendimos:
 *
 * ✔ Clases
 * ✔ Constructor
 * ✔ Propiedades
 * ✔ Métodos
 * ✔ public
 * ✔ private
 * ✔ protected
 * ✔ readonly
 * ✔ this
 * ✔ Constructor abreviado
 */

/**
 * TODO: Palabras clave importantes
 *
 * class        → Crear una clase.
 * constructor  → Inicializar un objeto.
 * this         → Hace referencia al objeto actual.
 * new          → Crear una instancia.
 * public       → Acceso desde cualquier lugar.
 * private      → Acceso únicamente dentro de la clase.
 * protected    → Acceso dentro de la clase y sus hijas.
 * readonly     → Propiedad de solo lectura.
 */

export {}