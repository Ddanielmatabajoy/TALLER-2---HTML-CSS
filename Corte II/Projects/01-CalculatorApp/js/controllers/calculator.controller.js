import { CalculatorModel } from "../models/calculator.model.js";
import { CalculatorView } from "../views/calculator.view.js";

export class CalculatorController {

    model = new CalculatorModel();
    view = new CalculatorView();

    constructor() {
        this.initEvents();
    }

    initEvents() {
        this.view.sumButton.addEventListener("click", () => {
            this.calculateSum();
        });

        this.view.subtractButton.addEventListener("click", () => {
            this.calculateSubtract();
        });

        this.view.multiplyButton.addEventListener("click", () => {
            this.calculateMultiply();
        });

        this.view.divideButton.addEventListener("click", () => {
            this.calculateDivide();
        });

        this.view.percentageButton.addEventListener("click", () => {
            this.calculatePercentage();
        });
    }

    calculateSum() {
        const { number1, number2 } = this.view.getValues(
            this.view.sumNumber1,
            this.view.sumNumber2
        );
        const result = this.model.sum(number1, number2);
        this.view.showResult(this.view.sumResult, result);
    }

    calculateSubtract() {
        const { number1, number2 } = this.view.getValues(
            this.view.subtractNumber1,
            this.view.subtractNumber2
        );
        const result = this.model.subtract(number1, number2);
        this.view.showResult(this.view.subtractResult, result);
    }

    calculateMultiply() {
        const { number1, number2 } = this.view.getValues(
            this.view.multiplyNumber1,
            this.view.multiplyNumber2
        );
        const result = this.model.multiply(number1, number2);
        this.view.showResult(this.view.multiplyResult, result);
    }

    calculateDivide() {
        const { number1, number2 } = this.view.getValues(
            this.view.divideNumber1,
            this.view.divideNumber2
        );
        try {
            const result = this.model.divide(number1, number2);
            this.view.showResult(this.view.divideResult, result);
        } catch (error) {
            this.view.showResult(this.view.divideResult, error.message);
        }

    }

    calculatePercentage() {
        const { number1, number2 } = this.view.getValues(
            this.view.percentageValue,
            this.view.percentageNumber
        );
        const result = this.model.percentage(number1, number2);
        this.view.showResult(this.view.percentageResult, result);
    }

}