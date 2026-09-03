import { setTitle } from "./utils/functions.js";

/**
 * TODO: ARITMETICOS
 * Son los operadores que permiten realizar operaciones matemáticas.
 */

setTitle("USO DE LA SUMA(+)");
let a = 10;
let b = 5;
console.log(a + b);

setTitle("USO DE LA RESTA(-)");
let c = 10;
let d = 5;
console.log(a - b);

setTitle("USO DE LA MULTIPLICACION(*)");
let e = 10;
let f = 5;
console.log(a * b);

setTitle("USO DE LA DIVISION(/)");
let g = 10;
let h = 5;
console.log(a / b);

setTitle("USO DEL MODULO(%)");
let numero = 17;
console.log(numero % 2);

/**
 * TODO: ASIGNACIÓN
 */

setTitle("USO DE LA ASIGNACION SIMPLE (=)");
let semestre = 3;
console.log(semestre);

setTitle("USO DE LA SUMA Y ASIGNACION (+=)");
let puntos = 10;
puntos += 5;
console.log(puntos);

setTitle("USO DE LA RESTA Y ASIGNACION (-=)");
let dinero = 100;
dinero -= 30;
console.log(dinero);

setTitle("USO DE LA MULTIPLICACION Y ASIGNACION (*=)");
let cantidad = 8;
cantidad *= 4;
console.log(cantidad);

setTitle("USO DE LA DIVISION Y ASIGNACION (/=)");
let total = 100;
total /= 4;
console.log(total);

setTitle("USO DEL MODULO Y ASIGNACION (%=)");
let numeroModulo = 17;
numeroModulo %= 5;
console.log(numeroModulo);

/**
 * TODO: COMPARACIÓN
 * Estos operadores siempre devuelven un valor booleano (true o false).
 */

/** 
 * Nota: Aunque == existe, en JavaScript moderno se recomienda usar === 
 * para evitar conversiones implícitas. 
 */
setTitle("USO DE LA IGUALDAD (==)");
console.log(5 == "5");

/** Compara tanto el valor como el tipo de dato. */
setTitle("USO DE LA IGUALDAD ESTRICTA (===)");
console.log(5 === "5");

setTitle("USO DE LA DIFERENTE (!=)");
console.log(10 != 5);

setTitle("USO DE LA DIFERENTE ESTRICTO (!==)");
console.log(10 !== "10");

setTitle("USO DE LA MAYOR QUE (>)");
console.log(20 > 15);

setTitle("USO DE LA MENOR QUE (<)");
console.log(5 < 2);

setTitle("USO DE LA MAYOR O IGUAL (>=)");
console.log(18 >= 18);

setTitle("USO DE LA MENOR O IGUAL (<=)");
console.log(15 <= 20);

/**
 * TODO: LOGICOS
 * Se utilizan para combinar expresiones booleanas.
 */

/** Solo devuelve true cuando ambas condiciones son verdaderas. */
setTitle("USO DEL AND (&&)");
let edad = 22;
let tieneLicencia = true;
console.log(edad >= 18 && tieneLicencia);

/** Devuelve true cuando al menos una condición es verdadera. */
setTitle("USO DEL OR (||)");
let esAdministrador = false;
let esEditor = true;
console.log(esAdministrador || esEditor);

/** Invierte el valor booleano. */
setTitle("USO DEL NOT (!)");
let activo = true;
console.log(!activo);

/**
 * TODO: INCREMENTO Y DECREMENTO
 */

setTitle("USO DEL INCREMENTO (++)");
let contador = 1;
contador++;
console.log(contador);

setTitle("USO DEL DECREMENTO (--)");
let vidas = 5;
vidas--;
console.log(vidas);