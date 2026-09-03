import type { IOption, IOptions } from "../models/options.model";
import type { IRecipe, IRecipeResponse } from "../models/recipe.model";
import type { IUser, IUserResponse } from "../models/user.model";

export class DataService {

    public getOptions(currentUrl: string = ''): IOptions {
        const defaultOption: IOption = {
            icon: "exclamation-circle",
            theme: "secondary",
            title: "No Title",
            url: "/"
        }
        const options: IOption[] = [
            {
                title: "Home App",
                url: "/",
                theme: "primary",
                icon: "house"
            },
            {
                title: "Users App",
                url: "users.html",
                theme: "success",
                icon: "people"
            },
            {
                title: "Recipes App",
                url: "recipes.html",
                theme: "warning",
                icon: "file-text"
            }
        ];
        const currentOption = options.find((option) => option.url === currentUrl) ?? defaultOption;
        const otherOptions = options.filter((option) => option.url != currentUrl);
        return {
            currentOption,
            otherOptions
        }
    }

    public async getUsers(): Promise<IUser[]> {
        const response = await fetch("https://dummyjson.com/users");
        const data: IUserResponse = await response.json();
        return data.users;
    }

    public async getRecipes(): Promise<IRecipe[]>{
        const response = await fetch("https://dummyjson.com/recipes");
        const data: IRecipeResponse = await response.json();
        return data.recipes;
    }

}