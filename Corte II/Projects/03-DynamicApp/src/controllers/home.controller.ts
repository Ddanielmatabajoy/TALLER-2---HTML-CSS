import { DataService } from "../services/data.service";
import { HomeView } from "../views/home.view";

export class HomeController {

    private readonly homeView = new HomeView();
    private readonly dataService = new DataService();

    constructor(currentUrl: string){
        this.homeView.renderOptions(this.dataService.getOptions(currentUrl).otherOptions);
    }

}