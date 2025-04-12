"use client";
import { create } from "zustand";

export namespace ApplicationTheme {

    export enum ApplicationThemeType {
        LIGHT = "light", DARK = "dark"
    }

    export interface ApplicationThemeInterface {
        currentTheme: ApplicationThemeType;
        setTheme: (newTheme: ApplicationTheme.ApplicationThemeType) => void;
        toggleTheme: () => void;
    }

}

export const ApplicationThemeStore = create<ApplicationTheme.ApplicationThemeInterface>((set, get) => ({
    currentTheme: ApplicationTheme.ApplicationThemeType.DARK,
    setTheme: (theme: ApplicationTheme.ApplicationThemeType) => set({ currentTheme: theme }),
    toggleTheme: () => set((state) => ({
        currentTheme: get().currentTheme === ApplicationTheme.ApplicationThemeType.DARK ? ApplicationTheme.ApplicationThemeType.LIGHT : ApplicationTheme.ApplicationThemeType.DARK,
    }))
}))



export default class ApplicationThemeHelper {

    currentTheme: ApplicationTheme.ApplicationThemeType;
    setTheme: (newTheme: ApplicationTheme.ApplicationThemeType) => void;
    toggleTheme: () => void;

    constructor(currentTheme: ApplicationTheme.ApplicationThemeType, setTheme: (newTheme: ApplicationTheme.ApplicationThemeType) => void, toggleTheme: () => void) {
        this.currentTheme = currentTheme;
        this.setTheme = setTheme;
        this.toggleTheme = toggleTheme;
    }

    public isDarkMode(): boolean {
        return this.currentTheme === ApplicationTheme.ApplicationThemeType.DARK;
    }

    public getBackgroundColor(): string {
        return this.currentTheme === ApplicationTheme.ApplicationThemeType.DARK ? "black" : "white";
    }

    public getForegroundColor(): string {
        return this.currentTheme === ApplicationTheme.ApplicationThemeType.DARK ? "white" : "black";
    }

}


