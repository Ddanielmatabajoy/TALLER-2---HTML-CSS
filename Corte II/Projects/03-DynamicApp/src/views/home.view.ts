import { IconComponent } from "../components/icon.component";
import type { IOption } from "../models/options.model";
import { UtilsService } from "../services/utils.service";

export class HomeView {

    private readonly homeOptions: HTMLDivElement;
    
    constructor(){
        this.homeOptions = UtilsService.getElement<HTMLDivElement>("#home-options");
    }

    public renderOptions(options: IOption[]){
        this.homeOptions.innerHTML = "";
        options.forEach((option) => {
            this.homeOptions.append(this.createOption(option));
        });
    }

    private createOption(option: IOption): HTMLAnchorElement {
        const { icon, theme, url, title } = option;
        const iconEl = IconComponent.getIconElement(icon);
        iconEl.classList.add(`me-2`);
        const linkEl = UtilsService.createElement("a");
        linkEl.className = `btn btn-${theme} btn-lg`;
        linkEl.href = url;
        linkEl.append(iconEl);
        linkEl.append(title);
        return linkEl;
    }

}