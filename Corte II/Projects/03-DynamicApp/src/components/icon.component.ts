import { UtilsService } from "../services/utils.service";

export class IconComponent {

    public static getIconElement(icon: string): HTMLElement {
        const iconEl = UtilsService.createElement("i");
        iconEl.className = `bi bi-${icon}`;
        return iconEl;
    }

}