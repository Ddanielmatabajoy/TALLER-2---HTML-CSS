import type { IUser } from "../models/auth.model";
import { AuthService } from "../services/auth.service";
import { UtilsService } from "../services/utils.service";
import { DashboardView } from "../views/dashboard.view";

export class DashboardController {

    private readonly dashboardView = new DashboardView();
    private readonly authService = new AuthService();

    constructor(){
        this.initEvents();
        this.setUserInformation();
    }

    private initEvents(){
        this.dashboardView.getLogout().addEventListener("click", () => this.authService.logout());
    }

    private setUserInformation(){
        const user: IUser | null = this.authService.getUser();
        if(!user){
            alert("No existe una sesión del usuario");
            UtilsService.redirecTo("/");
            return;
        }
        this.dashboardView.setData(user);
    }

}