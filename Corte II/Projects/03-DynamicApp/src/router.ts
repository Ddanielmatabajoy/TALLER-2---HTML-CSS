import { HomeController } from "./controllers/home.controller";
import { RecipesController } from "./controllers/recipes.controller";
import { UsersController } from "./controllers/users.controller";

export class Router {
    
    static init(): void {

        const page = window.location.pathname.split("/").pop();

        switch(page){

            case "":
            case "index.html":
                new HomeController("/");
                break;
            
            case "users.html":
                new UsersController("users.html");
                break;

            case "recipes.html":
                new RecipesController("recipes.html");
                break;

        }

    }

}