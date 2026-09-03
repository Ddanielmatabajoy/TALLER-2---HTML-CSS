/**
 * TODO: ENUMS EN TYPESCRIPT
 *
 * Un enum permite agrupar un conjunto
 * de constantes relacionadas bajo un mismo nombre.
 *
 * Son útiles cuando un valor solo puede
 * pertenecer a un conjunto definido.
 */


/**
 * TODO: ENUM NUMÉRICO
 *
 * Por defecto los valores comienzan en 0
 * y aumentan automáticamente.
 */

enum EstadoPedido {
    Pendiente,
    EnProceso,
    Enviado,
    Entregado
}

console.log(EstadoPedido.Pendiente);
console.log(EstadoPedido.EnProceso);
console.log(EstadoPedido.Enviado);
console.log(EstadoPedido.Entregado);


/**
 * TODO: ASIGNAR UN ENUM A UNA VARIABLE
 */

let estado: EstadoPedido = EstadoPedido.EnProceso;

console.log(estado);


/**
 * TODO: ENUM CON VALORES PERSONALIZADOS
 *
 * Podemos indicar desde qué número
 * comenzará el enum.
 */

enum Prioridad {
    Baja = 1,
    Media,
    Alta
}

console.log(Prioridad.Baja);
console.log(Prioridad.Media);
console.log(Prioridad.Alta);


/**
 * TODO: ENUM DE STRINGS
 *
 * También podemos utilizar cadenas
 * de texto como valores.
 */

enum Rol {
    Administrador = "ADMIN",
    Editor = "EDITOR",
    Usuario = "USER"
}

console.log(Rol.Administrador);
console.log(Rol.Editor);
console.log(Rol.Usuario);


/**
 * TODO: UTILIZAR ENUMS EN FUNCIONES
 */

function mostrarRol(rol: Rol): void {
    console.log(`Rol: ${rol}`);
}

mostrarRol(Rol.Administrador);
mostrarRol(Rol.Usuario);

// Esto produciría un error.
// mostrarRol("ADMIN");


/**
 * TODO: RECORRER UN ENUM
 *
 * Object.keys() devuelve las propiedades
 * del enum.
 */

console.log(Object.keys(Rol));


/**
 * TODO: OBJECT.VALUES()
 *
 * Object.values() devuelve los valores
 * del enum.
 */

console.log(Object.values(Rol));


/**
 * TODO: CONST ENUM
 *
 * const enum mejora el rendimiento
 * porque TypeScript reemplaza el valor
 * durante la compilación.
 */

const enum DiasSemana {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes
}

let dia = DiasSemana.Lunes;

console.log(dia);


/**
 * TODO: ¿CUÁNDO UTILIZAR ENUMS?
 *
 * Los enums son útiles cuando
 * tenemos un conjunto fijo de valores.
 *
 * Ejemplos:
 *
 * ✔ Estados de un pedido.
 * ✔ Roles de usuario.
 * ✔ Días de la semana.
 * ✔ Niveles de acceso.
 * ✔ Prioridades.
 */


/**
 * TODO: ENUM VS LITERAL TYPES
 *
 * Ambos sirven para representar
 * un conjunto limitado de valores.
 *
 * En proyectos modernos muchas personas
 * prefieren utilizar Literal Types porque
 * generan menos código JavaScript.
 *
 * Los enums siguen siendo útiles cuando
 * necesitamos constantes reutilizables.
 */


/**
 * TODO: RESUMEN
 */

/**
 * Aprendimos:
 *
 * ✔ Enum numérico
 * ✔ Enum con valores personalizados
 * ✔ Enum de strings
 * ✔ Utilizar enums en funciones
 * ✔ Object.keys()
 * ✔ Object.values()
 * ✔ Const enum
 * ✔ Cuándo utilizar enums
 */

export {}