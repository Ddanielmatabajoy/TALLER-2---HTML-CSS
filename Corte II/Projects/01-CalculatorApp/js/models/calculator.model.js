export class CalculatorModel {

    /**
     * Suma dos números.
     */
    sum(number1, number2) {
        return number1 + number2;
    }

    /**
     * Resta dos números.
     */
    subtract(number1, number2) {
        return number1 - number2;
    }

    /**
     * Multiplica dos números.
     */
    multiply(number1, number2) {
        return number1 * number2;
    }

    /**
     * Divide dos números.
     */
    divide(number1, number2) {

        if (number2 === 0) {
            throw new Error("No es posible dividir entre cero.");
        }

        return number1 / number2;
    }

    /**
     * Calcula un porcentaje.
     * Ejemplo:
     * 20% de 150 = 30
     */
    percentage(value, percentage) {
        return value * (percentage / 100);
    }

}