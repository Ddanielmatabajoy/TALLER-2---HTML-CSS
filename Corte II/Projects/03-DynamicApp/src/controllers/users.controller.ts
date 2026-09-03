import { DataService } from "../services/data.service";
import { UsersView } from "../views/users.view";

export class UsersController {
    
    private readonly usersView = new UsersView();
    private readonly dataService = new DataService();

    constructor(currentUrl: string){
        this.renderNavbar(currentUrl);
        this.renderUsers();
    }

    private renderNavbar(currentUrl: string){
        this.usersView.renderNavbar(this.dataService.getOptions(currentUrl));
    }

    private async renderUsers(){
        const users = await this.dataService.getUsers();
        this.usersView.renderUsers(users);
    }
    
}