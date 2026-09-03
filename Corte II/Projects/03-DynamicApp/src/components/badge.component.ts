import type { Theme } from "../models/theme.model";
import { UtilsService } from "../services/utils.service";

export class BadgeComponent {

    public static getBadgeElement(theme: Theme, title: string): HTMLElement {
        const badgeEl = UtilsService.createElement("span");
        badgeEl.className = `badge text-bg-${theme}`;
        badgeEl.append(title);
        return badgeEl;
    }

}