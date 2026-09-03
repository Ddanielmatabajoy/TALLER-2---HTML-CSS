import type { IRegister } from "../models/auth.model";
import { AuthService } from "../services/auth.service";
import { UtilsService } from "../services/utils.service";
import { RegisterView } from "../views/register.view";

export class RegisterController {

    private readonly registerView = new RegisterView();
    private readonly authService = new AuthService();

    constructor(){
        this.initEvents();
    }

    initEvents(){
        this.registerView.getForm().addEventListener("submit", (event) => {
            event.preventDefault();
            this.registerUser();
        });
    }

    registerUser(){
        const dataUser: IRegister = this.registerView.getFormData();
        const success: Boolean = this.authService.register(dataUser);
        if(!success){
            alert("El correo ya está registrado");
            return;
        }
        alert("Usuario Creado de Forma Exitosa");
        UtilsService.redirecTo("/");
    }

}