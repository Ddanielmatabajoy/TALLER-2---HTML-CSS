import { setTitle } from "./utils/functions.js";

/**
 * TODO: CICLOS
 */

/**
 * CICLO FOR
 * Se utiliza cuando conocemos cuántas veces se repetirá el proceso.
 */
setTitle("USO DEL CICLO FOR");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

/**
 * CICLO WHILE
 * Se utiliza cuando no sabemos exactamente cuántas veces se repetirá el proceso.
 * Primero evalúa la condición.
 * Si es falsa, nunca entra al ciclo.
 */
setTitle("USO DEL CICLO WHILE");
let contador1 = 1;
while (contador1 <= 5) {
    console.log(contador1);
    contador1++;
}

/**
 * CICLO DO WHILE
 * Primero ejecuta.
 * Después pregunta.
 * Esto garantiza que el código se ejecute al menos una vez.
 */
setTitle("USO DEL CICLO DO WHILE");
let contador2 = 1;
do {
    console.log(contador2);
    contador2++;
} while (contador2 <= 5);