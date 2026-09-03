import { BadgeComponent } from "../components/badge.component";
import { NavbarComponent } from "../components/navbar.component";
import type { IOptions } from "../models/options.model";
import type { IRecipe } from "../models/recipe.model";
import { UtilsService } from "../services/utils.service";

export class RecipesView {

    private readonly recipes: HTMLBodyElement;
    private readonly recipesList: HTMLDivElement;

    constructor(){
        this.recipes = UtilsService.getElement("#recipes");
        this.recipesList = UtilsService.getElement("#recipes-list");
    }

    public renderNavbar(options: IOptions){
        const navbarEl = NavbarComponent.getNavbarElement(options);
        this.recipes.prepend(navbarEl);
    }

    public renderRecipes(recipes: IRecipe[]){
        console.log(recipes);
        this.recipesList.innerHTML = "";
        recipes.forEach((recipe) => {
            this.recipesList.append(this.renderRecipe(recipe));
        });
    }

    private renderRecipe(recipe: IRecipe): HTMLDivElement {
        const colEl = UtilsService.createElement("div");
        colEl.className = "col";
        const articleEl = UtilsService.createElement("article");
        articleEl.className = "card h-100 shadow-sm";
        articleEl.append(this.renderRecipeImage(recipe));
        articleEl.append(this.renderRecipeCard(recipe));
        colEl.append(articleEl);
        return colEl;
    }

    private renderRecipeImage(recipe: IRecipe): HTMLImageElement {
        const imgEl = UtilsService.createElement("img");
        imgEl.className = "card-img-top";
        imgEl.src = recipe.image;
        imgEl.alt = recipe.name;
        return imgEl;
    }

    private renderRecipeCard(recipe: IRecipe): HTMLDivElement {
        const cardEl = UtilsService.createElement("div");
        cardEl.className = "card-body d-flex flex-column";

        const titleEl = UtilsService.createElement("h5");
        titleEl.className = "card-title";
        titleEl.append(recipe.name);

        const subtitleEl = UtilsService.createElement("p");
        subtitleEl.className = "text-secondary mb-3";

        const infoEl = UtilsService.createElement("div");
        infoEl.className = "d-flex flex-wrap gap-2 mb-3";
        infoEl.append(BadgeComponent.getBadgeElement("success", recipe.difficulty));        
        infoEl.append(BadgeComponent.getBadgeElement("warning", `${recipe.prepTimeMinutes + recipe.cookTimeMinutes} min`));        
        infoEl.append(BadgeComponent.getBadgeElement("info", `${recipe.servings} servings`));

        const ratingEl = UtilsService.createElement("div");
        ratingEl.className = "small text-muted mb-3";
        ratingEl.append(`⭐ ${recipe.rating} (${recipe.reviewCount} reviews)`);

        const typeEl = UtilsService.createElement("div");
        typeEl.className = "mt-auto";
        typeEl.append(BadgeComponent.getBadgeElement("primary", recipe.mealType[0]));

        cardEl.append(titleEl);
        cardEl.append(subtitleEl);
        cardEl.append(infoEl);
        cardEl.append(ratingEl);
        cardEl.append(typeEl);

        return cardEl;
    }

}