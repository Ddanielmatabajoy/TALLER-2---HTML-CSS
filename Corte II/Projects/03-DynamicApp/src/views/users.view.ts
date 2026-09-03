import { BadgeComponent } from "../components/badge.component";
import { NavbarComponent } from "../components/navbar.component";
import type { IOptions } from "../models/options.model";
import type { Theme } from "../models/theme.model";
import type { IUser, Role } from "../models/user.model";
import { UtilsService } from "../services/utils.service";

export class UsersView {

    private readonly users: HTMLBodyElement;
    private readonly tableUsers: HTMLTableSectionElement;

    constructor(){
        this.users = UtilsService.getElement("#users");
        this.tableUsers = UtilsService.getElement("#users-table tbody");
    }

    public renderNavbar(options: IOptions){
        const navbarEl = NavbarComponent.getNavbarElement(options);
        this.users.prepend(navbarEl);
    }

    public renderUsers(users: IUser[]){
        console.log(users);
        this.tableUsers.innerHTML = "";
        users.forEach((user) => {
            this.tableUsers.append(this.renderUser(user));
        });
    }

    private renderUser(user: IUser): HTMLTableRowElement {
        const trEl = UtilsService.createElement("tr");
        
        const idTdEl = UtilsService.createElement("td");
        idTdEl.textContent = user.id.toString();
        trEl.append(idTdEl);
        
        const fullNameTdEl = UtilsService.createElement("td");
        fullNameTdEl.append(this.renderUserFullName(user));
        trEl.append(fullNameTdEl);
        
        const emailTdEl = UtilsService.createElement("td");
        emailTdEl.textContent = user.email;
        trEl.append(emailTdEl);
        
        const ageTdEl = UtilsService.createElement("td");
        ageTdEl.textContent = user.age.toString();
        trEl.append(ageTdEl);
        
        const phoneTdEl = UtilsService.createElement("td");
        phoneTdEl.textContent = user.phone;
        trEl.append(phoneTdEl);

        const roleTd = UtilsService.createElement("td");
        roleTd.append(this.renderUserRole(user.role));
        trEl.append(roleTd)

        return trEl;
    }

    private renderUserFullName(user: IUser): HTMLDivElement {
        const fullName = `${user.firstName} ${user.lastName}`;
        const divEl = UtilsService.createElement("div");
        divEl.className = "d-flex align-items-center gap-2";
        const imgEl = UtilsService.createElement("img");
        imgEl.className = "rounded-circle";
        imgEl.width = 40;
        imgEl.height = 40;
        imgEl.src = user.image;
        imgEl.alt = fullName;
        const spanEl = UtilsService.createElement("span");
        spanEl.append(fullName);
        divEl.append(imgEl);
        divEl.append(spanEl);
        return divEl
    }

    private renderUserRole(role: Role){
        const roleMap: Record<Role, Theme> = {
            "admin": "primary",
            "moderator": "success",
            "user": "warning"
        }
        return BadgeComponent.getBadgeElement(roleMap[role], UtilsService.capitalize(role));
    }

}