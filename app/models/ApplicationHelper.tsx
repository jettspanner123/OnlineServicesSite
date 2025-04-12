import React from "react";
import {ApplicationTheme} from "@/app/models/ThemeStore";
import CSS from "csstype";


export namespace ApplicationHelperTypes {
    export interface MousePosition {
        x: number;
        y: number;
    }

    export interface Dimension {
        width: number | string;
        height: number | string;
    }

    export type HorizontalPadding = string | number;
    export type VerticalPadding = string | number;
    export type Color = string;

    export interface ButtonProps {
        styles?: React.CSSProperties;
        text: string;
        action: () => void;
    }
}

export class ApplicationHelper {
    public static current: ApplicationHelper = new ApplicationHelper();
    private constructor() {

    }

    public homeScreenElementWidth: string = "90vw";
    public homeScreenVerticalPadding: ApplicationHelperTypes.VerticalPadding = "10rem";

    public royalGoldenGrey: ApplicationHelperTypes.Color = "#222222";

    public getInvertedColor(whatTheme: ApplicationTheme.ApplicationThemeType): string {
        return whatTheme == ApplicationTheme.ApplicationThemeType.DARK ? ApplicationTheme.ApplicationThemeType.LIGHT : ApplicationTheme.ApplicationThemeType.DARK;
    }

    public getBorderColor(whatTheme: ApplicationTheme.ApplicationThemeType): string {
        return whatTheme == ApplicationTheme.ApplicationThemeType.DARK ? "#ffffff20" : "rgba(0,0,0,1)";
    }

    public setWindowLocation(to: string): void {
        React.useEffect(() => {
            window.location.assign(to);
        }, [])
    }

    public getCurrentPageName(wantSlash: boolean = true): string {
        const [pathName, setPathName] = React.useState<string>("");
        React.useEffect((): void => {
            if(wantSlash) {
               setPathName(window.location.pathname);
            } else {
               setPathName(window.location.pathname.replace("/", ""));
            }
        }, [])
        return pathName;
    }

    public getWindowWidth(): number {
        const [windowWidth, setWindowWidth] = React.useState<number>(0);
        const resize = () => {
            const {innerWidth} = window;
            setWindowWidth(innerWidth);
        }

        React.useEffect(() => {
            resize();
            window.addEventListener("resize", resize);
            return () => window.removeEventListener("resize", resize);
        }, [])

        return windowWidth;
    }

    public getWindowHeight(): number {
        const [windowHeight, setWindowHeight] = React.useState<number>(0);
        const resize = () => {
            const {innerHeight} = window;
            setWindowHeight(innerWidth);
        }

        React.useEffect(() => {
            resize();
            window.addEventListener("resize", resize);
            return () => window.removeEventListener("resize", resize);
        }, [])

        return windowHeight;
    }

    public getWindowDimensions(): ApplicationHelperTypes.Dimension {
        let windowWidth: number = this.getWindowWidth();
        let windowHeight: number = this.getWindowHeight();
        return {width: windowWidth, height: windowHeight};
    }



    public RenderEngin(someFunc: () => void, dependencyArray: readonly any[] = []) {
        return React.useEffect(someFunc, dependencyArray)
    }

    getMousePosition(): ApplicationHelperTypes.MousePosition {
        const [mousePosition, setMousePosition] = React.useState<ApplicationHelperTypes.MousePosition>({x: 0, y: 0});

        React.useEffect((): void => {
            window.addEventListener("mousemove", (mouseEvent: MouseEvent) => {
                setMousePosition({x: mouseEvent.clientX, y: mouseEvent.clientY})
            })
        }, [])

        return mousePosition;
    }
}