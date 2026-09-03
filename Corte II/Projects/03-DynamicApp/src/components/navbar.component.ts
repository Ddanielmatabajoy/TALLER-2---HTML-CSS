import type { IOption, IOptions } from "../models/options.model";
import { UtilsService } from "../services/utils.service";
import { IconComponent } from "./icon.component";

export class NavbarComponent {
    
    public static getNavbarElement({ currentOption, otherOptions }: IOptions): HTMLElement {
        const navEl = UtilsService.createElement("nav");
        navEl.className = "navbar navbar-expand-md navbar-dark bg-dark shadow";

        //Container
        const containerEl = UtilsService.createElement("div");
        containerEl.className = "container";

        //Title
        const titleEl = this.getTitle(currentOption);
        
        //Toggle Button
        const toggleEl = this.getToggle();
        
        //Options
        const optionsEl = this.getList(otherOptions);
        
        containerEl.append(titleEl);
        containerEl.append(toggleEl);
        containerEl.append(optionsEl);
        navEl.appendChild(containerEl);

        return navEl;
    }

    private static getTitle({ title, icon }: IOption): HTMLAnchorElement {
        const titleEl = UtilsService.createElement("a");
        titleEl.className = "navbar-brand fw-bold";
        const titleIconEl = IconComponent.getIconElement(icon);
        titleIconEl.classList.add("me-2");
        titleEl.append(titleIconEl);
        titleEl.append(title);
        return titleEl;
    }

    private static getToggle(): HTMLButtonElement {
        const toggleEl = UtilsService.createElement("button");
        toggleEl.className = "navbar-toggler";
        toggleEl.type = "button";
        toggleEl.setAttribute("data-bs-toggle", "collapse");
        toggleEl.setAttribute("data-bs-target", "#navbar");
        const spanEl = UtilsService.createElement("span");
        spanEl.className = "navbar-toggler-icon";
        toggleEl.append(spanEl);
        return toggleEl;
    }

    private static getList(options: IOption[]): HTMLDivElement {
        const divEl = UtilsService.createElement("div");
        divEl.id = "navbar";
        divEl.className = "collapse navbar-collapse";
        const ulEl = UtilsService.createElement("ul");
        ulEl.className = "navbar-nav ms-auto gap-3";
        ulEl.append(...this.getNavItems(options));
        divEl.append(ulEl);
        return divEl;
    }

    private static getNavItems(options: IOption[]): HTMLLIElement[] {
        const elements: HTMLLIElement[] = [];
        options.forEach((item) => {
            const iconEl = IconComponent.getIconElement(item.icon);
            iconEl.classList.add("me-2");
            const liEl = UtilsService.createElement("li");
            liEl.className = "nav-item";
            const aEl = UtilsService.createElement("a");
            aEl.className = `btn btn-${item.theme}`;
            aEl.href = item.url;
            aEl.append(iconEl);
            aEl.append(item.title);
            liEl.append(aEl);
            elements.push(liEl);
        });
        return elements;
    }

}