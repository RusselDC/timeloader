import type { NavigateFunction } from "react-router-dom";
import type { buttonConfig } from "../../components/ActionButtons/type";

export const ActionButtonsConfig = (navigate : NavigateFunction) : buttonConfig[] => [
    {
        label : "Back to Home",
        variant : "text",
        onClick : () => navigate("/"),
        style : {
                orderRadius: '8px',
                textTransform: 'none',
                fontSize: "1rem",
                fontFamily: 'Manrope',
                textSpacing: "0.02em",
                color : "#0040DF"
        }
    }
]