import { DataService } from "../services/data.service";
import { RecipesView } from "../views/recipes.view";

export class RecipesController {

    private readonly recipesView = new RecipesView();
    private readonly dataService = new DataService();

    constructor(currentUrl: string){
        this.renderNavbar(currentUrl);
        this.renderRecipes();
    }

    private renderNavbar(currentUrl: string){
        this.recipesView.renderNavbar(this.dataService.getOptions(currentUrl));
    }

    private async renderRecipes(){
        const recipes = await this.dataService.getRecipes();
        this.recipesView.renderRecipes(recipes);
    }

}