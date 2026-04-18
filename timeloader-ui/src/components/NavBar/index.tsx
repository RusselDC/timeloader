import { Box, Typography } from "@mui/material"
import type { JSX } from "react"

const NavBar = ({navigation, actionButtons} : {navigation? : JSX.Element, actionButtons? : JSX.Element}) => {
    return (
        <Box sx={{
            py: 1.5,
            display: "flex",
            justifyContent:"space-between",
            alignItems:"center",
            backgroundColor: "#F2F3FF",
            px :5
        }}>
            <Typography sx={{
                fontWeight: 700,
                fontSize: "1.5rem",
                fontFamily: 'Manrope',
                textSpacing: "0.02em",
            }}>
                Time Loader
            </Typography>

            {navigation}

            {actionButtons}

            
        </Box>
    )
}

export default NavBar