import { Box, Typography } from "@mui/material"

export const Footer = () => {
    return (
        <Box sx={{
            width:"100%",
            height:"3%",
            backgroundColor:"#F2F3FF",
            px:3,
            py:6,
            display:"flex",
            justifyContent:"space-between"


        }}> 
            <Box sx={{
                display:"flex",
                flexDirection:"column",
                gap:3,
            }}>
                <Typography sx={{
                    fontFamily:"Manrope",
                    fontSize: "18px",
                    fontWeight: 600,
                    lineHeight:"16px",
                    color:"#131B2E"
                }}>TimeLoader</Typography>
                <Typography sx={{
                    fontFamily:"Manrope",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight:"16px",
                    color:"#515F74"
                }}>@2023 TimeLoader. All rights reserved.</Typography>
            </Box>

            <Box sx={{
                display:"flex",
                flexDirection:"row",
                gap:3,
                justifyContent:"space-between",
                pr:5
            }}>
               <Typography sx={{
                    fontFamily:"Manrope",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight:"16px",
                    color:"#515F74"
                }}>Privacy Policy</Typography>

                <Typography sx={{
                    fontFamily:"Manrope",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight:"16px",
                    color:"#515F74"
                }}>Terms of Service</Typography>

                <Typography sx={{
                    fontFamily:"Manrope",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight:"16px",
                    color:"#515F74"
                }}>Contact</Typography>
            </Box>

        </Box>
    )
}
