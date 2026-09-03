/**
 * TODO: UTILITY TYPES EN TYPESCRIPT
 *
 * Los Utility Types son tipos incorporados
 * en TypeScript que nos permiten transformar
 * otros tipos sin tener que volver a escribirlos.
 */


/**
 * TODO: TYPE BASE
 *
 * Utilizaremos este type durante toda la sección.
 */

type Usuario = {
    id: number;
    nombre: string;
    edad: number;
    email: string;
};

const usuario: Usuario = {
    id: 1,
    nombre: "Carlos",
    edad: 28,
    email: "carlos@email.com"
};

console.log(usuario);


/**
 * TODO: PARTIAL
 *
 * Convierte todas las propiedades
 * en opcionales.
 */

type UsuarioParcial = Partial<Usuario>;

const usuarioParcial: UsuarioParcial = {
    nombre: "Laura"
};

console.log(usuarioParcial);


/**
 * TODO: REQUIRED
 *
 * Convierte todas las propiedades
 * en obligatorias.
 */

type UsuarioOpcional = {
    id?: number;
    nombre?: string;
};

type UsuarioCompleto = Required<UsuarioOpcional>;

const usuarioCompleto: UsuarioCompleto = {
    id: 2,
    nombre: "Pedro"
};

console.log(usuarioCompleto);


/**
 * TODO: READONLY
 *
 * Convierte todas las propiedades
 * en solo lectura.
 */

type UsuarioSoloLectura = Readonly<Usuario>;

const usuarioReadonly: UsuarioSoloLectura = {
    id: 3,
    nombre: "Ana",
    edad: 25,
    email: "ana@email.com"
};

console.log(usuarioReadonly);

// Esto produciría un error.
// usuarioReadonly.nombre = "Juan";


/**
 * TODO: PICK
 *
 * Permite seleccionar únicamente
 * las propiedades que necesitamos.
 */

type UsuarioBasico = Pick<Usuario, "nombre" | "email">;

const usuarioBasico: UsuarioBasico = {
    nombre: "Luis",
    email: "luis@email.com"
};

console.log(usuarioBasico);


/**
 * TODO: OMIT
 *
 * Permite excluir una o varias propiedades.
 */

type UsuarioSinId = Omit<Usuario, "id">;

const usuarioSinId: UsuarioSinId = {
    nombre: "María",
    edad: 30,
    email: "maria@email.com"
};

console.log(usuarioSinId);


/**
 * TODO: RECORD
 *
 * Permite crear objetos utilizando un tipo
 * para las llaves y otro para los valores.
 */

type Inventario = Record<string, number>;

const productos: Inventario = {
    Laptop: 10,
    Mouse: 20,
    Teclado: 15
};

console.log(productos);


/**
 * TODO: EXCLUDE
 *
 * Elimina uno o varios tipos
 * de una unión.
 */

type Estado = "Activo" | "Inactivo" | "Pendiente";

type EstadoDisponible = Exclude<Estado, "Pendiente">;

let estado: EstadoDisponible = "Activo";

console.log(estado);

// Esto produciría un error.
// estado = "Pendiente";


/**
 * TODO: EXTRACT
 *
 * Conserva únicamente los tipos
 * indicados.
 */

type Rol = "Admin" | "Editor" | "Usuario";

type RolAdministrativo = Extract<Rol, "Admin" | "Editor">;

let rol: RolAdministrativo = "Admin";

console.log(rol);


/**
 * TODO: NONNULLABLE
 *
 * Elimina null y undefined
 * de un tipo.
 */

type Nombre = string | null | undefined;

type NombreValido = NonNullable<Nombre>;

let nombre: NombreValido = "Carlos";

console.log(nombre);


/**
 * TODO: ¿CUÁNDO UTILIZAR UTILITY TYPES?
 *
 * ✔ Reutilizar tipos.
 * ✔ Evitar duplicar código.
 * ✔ Transformar tipos existentes.
 * ✔ Trabajar con APIs.
 * ✔ Crear modelos para formularios.
 */


/**
 * TODO: RESUMEN
 */

/**
 * Aprendimos:
 *
 * ✔ Partial
 * ✔ Required
 * ✔ Readonly
 * ✔ Pick
 * ✔ Omit
 * ✔ Record
 * ✔ Exclude
 * ✔ Extract
 * ✔ NonNullable
 */


/**
 * Utility Types más utilizados
 *
 * Partial<T>         → Todas las propiedades son opcionales.
 * Required<T>        → Todas las propiedades son obligatorias.
 * Readonly<T>        → Todas las propiedades son de solo lectura.
 * Pick<T, K>         → Selecciona propiedades específicas.
 * Omit<T, K>         → Excluye propiedades específicas.
 * Record<K, T>       → Crea un objeto con llaves y valores tipados.
 * Exclude<T, U>      → Elimina tipos de una unión.
 * Extract<T, U>      → Conserva tipos de una unión.
 * NonNullable<T>     → Elimina null y undefined.
 */

export {};