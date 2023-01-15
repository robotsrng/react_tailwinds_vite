import { SidebarItemProps } from "@molecules/SidebarItem/types";

export const SIDEBAR_CONFIG = [
    {
        "label": "Home",
        "icon": "squares",
        "link": "/"
    },
    {
        "label": "Projects",
        "icon": "shopping-cart",
        "link": "/projects",
    }
];
export const AUTH_CONFIG = (authStatus: boolean, logoutFunction: () => void): SidebarItemProps[] => {
    console.log("🚀 | file: sidebarConfig.ts:17 | logoutFunction", logoutFunction);
    console.log("🚀 | file: sidebarConfig.ts:17 | authStatus", authStatus);
    return [
        {
            "label": "Login",
            "icon": "squares",
            "link": "/login",
            "hidden": authStatus

        },
        {
            "label": "Sign up",
            "icon": "squares",
            "link": "/signup",
            "hidden": authStatus

        },
        {
            "label": "Logout",
            "icon": "squares",
            "link": "/",
            "onClick": logoutFunction,
            "hidden": !authStatus
        },
    ];
};
