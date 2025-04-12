export namespace ApplicationPageModel {

    export interface NavbarItem {
        displayName: string;
        navigationDestination: string;
        loginRequired: boolean;
    }

    export const navigationBarLinks: Array<NavbarItem> = [
        {displayName: "Home", navigationDestination: "/", loginRequired: false},
        {displayName: "LogIn / SignUp", navigationDestination: "/registration", loginRequired: false},
        {displayName: "ECommerce", navigationDestination: "/registration", loginRequired: true},
        {displayName: "Category", navigationDestination: "/registration", loginRequired: true},
    ]

}