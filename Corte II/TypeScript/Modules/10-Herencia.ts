/**
 * TODO: HERENCIA EN TYPESCRIPT
 *
 * La herencia permite que una clase
 * reutilice las propiedades y métodos
 * de otra clase.
 *
 * Para heredar utilizamos la palabra
 * reservada extends.
 */


/**
 * TODO: CLASE PADRE
 *
 * La clase padre contiene las propiedades
 * y métodos que serán heredados.
 */

class Persona {

    constructor(
        public nombre: string,
        public edad: number
    ) { }

    saludar(): void {
        console.log(`Hola, soy ${this.nombre}`);
    }

}

const persona = new Persona("Carlos", 28);

persona.saludar();


/**
 * TODO: CLASE HIJA
 *
 * La clase Empleado hereda todas las
 * propiedades y métodos de Persona.
 */

class Empleado extends Persona {

    constructor(
        nombre: string,
        edad: number,
        public cargo: string
    ) {

        super(nombre, edad);

    }

}

const empleado = new Empleado(
    "Ana",
    30,
    "Desarrolladora"
);

console.log(empleado.nombre);
console.log(empleado.edad);
console.log(empleado.cargo);

empleado.saludar();


/**
 * TODO: SUPER
 *
 * super() llama al constructor de la
 * clase padre.
 *
 * Debe ejecutarse antes de utilizar this.
 */

class Estudiante extends Persona {

    constructor(
        nombre: string,
        edad: number,
        public carrera: string
    ) {

        super(nombre, edad);

    }

}

const estudiante = new Estudiante(
    "Laura",
    22,
    "Ingeniería"
);

console.log(estudiante);


/**
 * TODO: HEREDAR MÉTODOS
 *
 * Los métodos de la clase padre también
 * pueden utilizarse desde la clase hija.
 */

estudiante.saludar();


/**
 * TODO: AGREGAR NUEVOS MÉTODOS
 *
 * Una clase hija puede tener sus propios métodos.
 */

class Cliente extends Persona {

    constructor(
        nombre: string,
        edad: number,
        public puntos: number
    ) {

        super(nombre, edad);

    }

    mostrarPuntos(): void {
        console.log(`Puntos: ${this.puntos}`);
    }

}

const cliente = new Cliente(
    "Pedro",
    35,
    150
);

cliente.saludar();
cliente.mostrarPuntos();


/**
 * TODO: SOBRESCRIBIR MÉTODOS
 *
 * Una clase hija puede reemplazar
 * un método heredado.
 */

class Profesor extends Persona {

    constructor(
        nombre: string,
        edad: number,
        public materia: string
    ) {

        super(nombre, edad);

    }

    override saludar(): void {
        console.log(`Hola, soy el profesor ${this.nombre}`);
    }

}

const profesor = new Profesor(
    "Juan",
    45,
    "Matemáticas"
);

profesor.saludar();


/**
 * TODO: UTILIZAR SUPER EN UN MÉTODO
 *
 * Podemos ejecutar primero el método
 * de la clase padre y luego agregar
 * nueva lógica.
 */

class Gerente extends Persona {

    constructor(
        nombre: string,
        edad: number,
        public departamento: string
    ) {

        super(nombre, edad);

    }

    override saludar(): void {

        super.saludar();

        console.log(`Departamento: ${this.departamento}`);

    }

}

const gerente = new Gerente(
    "Marta",
    40,
    "Tecnología"
);

gerente.saludar();


/**
 * TODO: PROTECTED
 *
 * Las propiedades protected pueden
 * utilizarse dentro de las clases hijas.
 */

class Animal {

    constructor(
        protected nombre: string
    ) { }

}

class Perro extends Animal {

    mostrarNombre(): void {
        console.log(this.nombre);
    }

}

const perro = new Perro("Max");

perro.mostrarNombre();


/**
 * TODO: RESUMEN
 */

/**
 * Aprendimos:
 *
 * ✔ extends
 * ✔ super()
 * ✔ Heredar propiedades
 * ✔ Heredar métodos
 * ✔ Crear nuevos métodos
 * ✔ Sobrescribir métodos
 * ✔ override
 * ✔ super.metodo()
 * ✔ protected
 */

/**
 * Palabras clave importantes
 *
 * extends      → Heredar una clase.
 * super()      → Llamar al constructor padre.
 * super.metodo() → Ejecutar un método del padre.
 * override     → Sobrescribir un método heredado.
 * protected    → Acceso desde la clase y sus hijas.
 */

export {}