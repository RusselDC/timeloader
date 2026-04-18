import { Box, Button, Typography } from "@mui/material"

const CallToAction = () => {
    return (
        <Box sx={{
            width:"100%",
            height:"62%",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            backgroundColor:"#FAF8FF",
            justifyContent:"center",
            py: 20,
            gap : 5
        }}>
            <Typography sx={{
                fontSize: "12px",
                fontWeight:600,
                color:"#0040DF",
                lineHeight: "16px",
                fontFamily: "Manrope",
                letterSpacing: "1px",

            }}>
                READY TO GRADUATE?
            </Typography>
            <Box sx={{
                height:"auto",
                width:"50%",
            }}>
                <Typography sx={{
                    fontSize: "72px",
                    fontWeight:800,
                    lineHeight: "80px",
                    fontFamily: "Manrope",
                    textAlign:"center",
                }}>
                    Navigate your internship
                    with precision.
                </Typography>
            </Box>

            <Button variant="contained" 
                sx={{
                backgroundColor:"#0040DF",
                color:"#fff",
                px: 5,
                py:3,
                fontSize: "20px",
                fontWeight:600,
                lineHeight: "24px",
                fontFamily: "Manrope",
                textTransform:"none",
                }}>
                    Start Your Journey Here
                </Button>
        </Box>
    )
}


export default CallToAction