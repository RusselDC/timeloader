import type { SxProps } from "@mui/material"

export type buttonConfig = {
    label : string,
    variant : "text" | "contained" | "outlined",
    onClick : () => void,
    style : SxProps
}