import { DashboardController } from "./controllers/dashboard.controller";
import { LoginController } from "./controllers/login.controller";
import { RegisterController } from "./controllers/register.controller";

export class Router {
    
    static init(): void {

        const page = window.location.pathname.split("/").pop();

        switch(page){

            case "":
            case "index.html":
                new LoginController();
                break;

            case "register.html":
                new RegisterController();
                break;

            case "dashboard.html":
                new DashboardController();
                break;

        }

    }

}