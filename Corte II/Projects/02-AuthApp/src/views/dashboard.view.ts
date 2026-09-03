import type { IUser } from "../models/auth.model";
import { UtilsService } from "../services/utils.service";

export class DashboardView {

    private readonly userName: HTMLElement;
    private readonly userEmail: HTMLElement;
    private readonly currentDate: HTMLElement;
    private readonly logout: HTMLButtonElement;

    constructor() {
        this.userName = UtilsService.getElement<HTMLElement>("#user-name");
        this.userEmail = UtilsService.getElement<HTMLElement>("#user-email");
        this.currentDate = UtilsService.getElement<HTMLElement>("#current-date");
        this.logout = UtilsService.getElement<HTMLButtonElement>("#logout");
        //this.name = document.querySelector<HTMLElement>("#name")!;
        //this.email = document.querySelector<HTMLElement>("#email")!;
        //this.date = document.querySelector<HTMLElement>("#date")!;
        //this.logout = document.querySelector<HTMLButtonElement>("#logout")!;
    }

    public getLogout(): HTMLButtonElement {
        return this.logout;
    }

    public setData({ name, email }: IUser): void {
        this.userName.textContent = name;
        this.userEmail.textContent = email;
        this.currentDate.textContent = `${new Date().toLocaleDateString()}`;
    }

}