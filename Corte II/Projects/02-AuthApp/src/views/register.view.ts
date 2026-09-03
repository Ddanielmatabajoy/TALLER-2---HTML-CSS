import type { IRegister } from "../models/auth.model";
import { UtilsService } from "../services/utils.service";

export class RegisterView {

    private readonly form: HTMLFormElement;
    private readonly name: HTMLInputElement;
    private readonly email: HTMLInputElement;
    private readonly password: HTMLInputElement;

    constructor() {
        this.form = UtilsService.getElement<HTMLFormElement>("#register-form");
        this.name = UtilsService.getElement<HTMLInputElement>("#name");
        this.email = UtilsService.getElement<HTMLInputElement>("#email");
        this.password = UtilsService.getElement<HTMLInputElement>("#password");
        //this.form = document.querySelector<HTMLFormElement>("#login-form")!;
        //this.name = document.querySelector<HTMLInputElement>("#name")!;
        //this.email = document.querySelector<HTMLInputElement>("#email")!;
        //this.password = document.querySelector<HTMLInputElement>("#password")!;
    }

    public getForm(): HTMLFormElement {
        return this.form;
    }

    public getFormData(): IRegister {
        return {
            name: this.name.value.trim(),
            email: this.email.value.trim(),
            password: this.password.value.trim(),
        }
    }

}