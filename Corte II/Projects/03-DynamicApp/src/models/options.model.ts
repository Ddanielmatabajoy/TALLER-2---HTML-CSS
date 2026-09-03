import type { Theme } from "./theme.model";

export interface IOptions {
    currentOption: IOption;
    otherOptions: IOption[];
}

export interface IOption {
    title: string;
    url: string;
    theme: Theme;
    icon: string;
}