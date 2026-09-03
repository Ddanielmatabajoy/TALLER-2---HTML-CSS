import type { ILogin } from "../models/auth.model";
import { UtilsService } from "../services/utils.service";

export class LoginView {

    private readonly form: HTMLFormElement;
    private readonly email: HTMLInputElement;
    private readonly password: HTMLInputElement;

    constructor() {
        this.form = UtilsService.getElement<HTMLFormElement>("#login-form");
        this.email = UtilsService.getElement<HTMLInputElement>("#email");
        this.password = UtilsService.getElement<HTMLInputElement>("#password");
        //this.form = document.querySelector<HTMLFormElement>("#login-form")!;
        //this.email = document.querySelector<HTMLInputElement>("#email")!;
        //this.password = document.querySelector<HTMLInputElement>("#password")!;
    }

    public getForm(): HTMLFormElement {
        return this.form;
    }

    public getFormData(): ILogin {
        return {
            email: this.email.value.trim(),
            password: this.password.value.trim(),
        }
    }

    public cleanForm(): void {
        this.form.reset();
    }

}