export class CalculatorView {

    constructor() {

        // Suma
        this.sumNumber1 = document.getElementById("sum-number-1");
        this.sumNumber2 = document.getElementById("sum-number-2");
        this.sumButton = document.getElementById("btn-sum");
        this.sumResult = document.getElementById("sum-result");

        // Resta
        this.subtractNumber1 = document.getElementById("subtract-number-1");
        this.subtractNumber2 = document.getElementById("subtract-number-2");
        this.subtractButton = document.getElementById("btn-subtract");
        this.subtractResult = document.getElementById("subtract-result");

        // Multiplicación
        this.multiplyNumber1 = document.getElementById("multiply-number-1");
        this.multiplyNumber2 = document.getElementById("multiply-number-2");
        this.multiplyButton = document.getElementById("btn-multiply");
        this.multiplyResult = document.getElementById("multiply-result");

        // División
        this.divideNumber1 = document.getElementById("divide-number-1");
        this.divideNumber2 = document.getElementById("divide-number-2");
        this.divideButton = document.getElementById("btn-divide");
        this.divideResult = document.getElementById("divide-result");

        // Porcentaje
        this.percentageValue = document.getElementById("percentage-value");
        this.percentageNumber = document.getElementById("percentage-number");
        this.percentageButton = document.getElementById("btn-percentage");
        this.percentageResult = document.getElementById("percentage-result");
    }

    /**
     * Obtiene dos valores numéricos.
     */
    getValues(input1, input2) {
        return {
            number1: parseFloat(input1.value),
            number2: parseFloat(input2.value)
        };
    }

    /**
     * Muestra un resultado.
     */
    showResult(element, value) {
        element.textContent = value;
    }

}