import type { ILogin } from "../models/auth.model";
import { AuthService } from "../services/auth.service";
import { UtilsService } from "../services/utils.service";
import { LoginView } from "../views/login.view";

export class LoginController {

    private readonly loginView = new LoginView();
    private readonly authService = new AuthService();

    constructor(){
        this.initEvents();
    }

    initEvents(): void {
        this.loginView.getForm().addEventListener("submit", (event) => {
            event.preventDefault();
            this.login();
        });
    }

    login(): void {
        const credentials: ILogin = this.loginView.getFormData();
        const success: Boolean = this.authService.login(credentials);
        if(!success) {
            alert("Credenciales Incorrectas");
            return;
        }
        alert("Usuario Logeado de Forma Exitosa");
        UtilsService.redirecTo("dashboard.html");
    }

}