/**
 * TODO: TYPES E INTERFACES EN TYPESCRIPT
 *
 * Tanto los type como las interfaces permiten
 * describir la estructura de un dato.
 *
 * Gracias a ellos evitamos repetir código y
 * hacemos que nuestras aplicaciones sean
 * más fáciles de mantener.
 */


/**
 * TODO: ¿QUÉ ES UN TYPE?
 *
 * Un type crea un alias para un tipo de dato.
 *
 * Podemos reutilizar ese alias todas las veces
 * que sea necesario.
 */

type Usuario = {
    nombre: string;
    edad: number;
    activo: boolean;
};

let usuario1: Usuario = {
    nombre: "Carlos",
    edad: 28,
    activo: true
};

console.log(usuario1);


/**
 * TODO: REUTILIZAR UN TYPE
 */

let usuario2: Usuario = {
    nombre: "Laura",
    edad: 22,
    activo: false
};

console.log(usuario2);


/**
 * TODO: ¿QUÉ ES UNA INTERFACE?
 *
 * Una interface también describe la estructura
 * de un objeto.
 *
 * Su sintaxis es muy parecida a la de un type.
 */

interface Empleado {
    nombre: string;
    cargo: string;
    salario: number;
}

let empleado: Empleado = {
    nombre: "Ana",
    cargo: "Desarrolladora",
    salario: 4500
};

console.log(empleado);


/**
 * TODO: REUTILIZAR UNA INTERFACE
 */

let empleado2: Empleado = {
    nombre: "Pedro",
    cargo: "Diseñador",
    salario: 3800
};

console.log(empleado2);


/**
 * TODO: TYPE VS INTERFACE
 *
 * Para definir objetos simples ambos funcionan
 * prácticamente igual.
 */

type PersonaType = {
    nombre: string;
};

interface PersonaInterface {
    nombre: string;
}

let persona1: PersonaType = {
    nombre: "Carlos"
};

let persona2: PersonaInterface = {
    nombre: "Laura"
};

console.log(persona1);
console.log(persona2);


/**
 * TODO: EXTENDER UN TYPE
 *
 * Podemos crear un nuevo type reutilizando otro.
 */

type Animal = {
    nombre: string;
};

type Perro = Animal & {
    raza: string;
};

let perro: Perro = {
    nombre: "Max",
    raza: "Labrador"
};

console.log(perro);


/**
 * TODO: EXTENDER UNA INTERFACE
 *
 * Las interfaces utilizan la palabra extends.
 */

interface Vehiculo {
    marca: string;
}

interface Carro extends Vehiculo {
    modelo: string;
}

let carro: Carro = {
    marca: "Toyota",
    modelo: "Corolla"
};

console.log(carro);


/**
 * TODO: ¿CUÁNDO USAR TYPE?
 *
 * Utiliza type cuando:
 *
 * ✔ Crear alias de tipos.
 * ✔ Crear tipos personalizados.
 * ✔ Definir tuplas.
 * ✔ Crear Union Types.
 * ✔ Crear Utility Types.
 */


/**
 * TODO: ¿CUÁNDO USAR INTERFACE?
 *
 * Utiliza interface cuando:
 *
 * ✔ Describes objetos.
 * ✔ Trabajas con clases.
 * ✔ Diseñas APIs.
 * ✔ Defines contratos entre componentes.
 */


/**
 * TODO: ¿CUÁL DEBO USAR?
 *
 * En proyectos reales encontrarás ambos.
 *
 * Una recomendación muy común es:
 *
 * - Interface para objetos y clases.
 * - Type para todo lo demás.
 *
 * No existe una regla obligatoria,
 * pero seguir esta convención hace que
 * el código sea más fácil de entender.
 */


/**
 * TODO: RESUMEN
 */

/**
 * Aprendimos:
 *
 * ✔ type
 * ✔ interface
 * ✔ Reutilizar tipos
 * ✔ Reutilizar interfaces
 * ✔ Extender interfaces
 * ✔ Extender types
 * ✔ Diferencias entre ambos
 * ✔ Cuándo utilizar cada uno
 */

export {}