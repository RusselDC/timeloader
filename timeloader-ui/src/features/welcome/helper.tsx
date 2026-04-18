import type { NavigateFunction } from "react-router-dom"
import type { buttonConfig } from "../../components/ActionButtons/type"

export const NavigationItems = () => {
    const path = window.location.pathname
    return [
        {
            label : 'Home',
            isSelected : path === "/"
        },
        {
            label : 'About',
            isSelected : path === "/about"
        },
        {
            label : 'Contact',
            isSelected : path === "/contact"
        }
    ]
}


export const ActionButtonsConfig = (navigate : NavigateFunction) : buttonConfig[] => {
    return [
        {
            label : "Login",
            variant : "text",
            onClick : () => navigate("/login"),
            style : {
                 orderRadius: '8px',
                textTransform: 'none',
                fontSize: "1rem",
                fontFamily: 'Manrope',
                textSpacing: "0.02em",
                color : "#0040DF"
            }
        },
        {
            label : "Sign Up",
            variant : "contained",
            onClick : () => navigate("/signup"),
            style : {
                borderRadius: '8px',
                textTransform: 'none',
                fontSize: "1rem",
                fontFamily: 'Manrope',
                textSpacing: "0.02em",
            }
        }


    ]
}