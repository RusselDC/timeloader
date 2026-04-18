import { Box, Button } from "@mui/material";
import type { SxProps } from "@mui/material";
import type { buttonConfig } from "./type";




export const ActionButtons = (props : {parentStyle? : SxProps, buttons : buttonConfig[]}) => {

    const {
        parentStyle = {

            display :"flex",
            gap : 2,
        },
        buttons
    } = props

    return <Box sx={parentStyle}>
        {buttons.map((button, index) => {
            const {label, variant, onClick, style} = button
            return <Box key={index}>    
                <Button variant={variant} disableElevation sx={style} onClick={onClick}>
                    {label}
                </Button>
            </Box>
        })}
    </Box>

}