import { Box, LinearProgress, Typography } from "@mui/material"
import SpeedIcon from '@mui/icons-material/Speed';
import TouchAppOutlinedIcon from '@mui/icons-material/TouchAppOutlined';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
const Features = () => {
    return (
         <Box sx={{
            height:"100%",
            width:"100%",
            backgroundColor:"#F2F3FF",
            py:"2.5%",
            px:"2%",

        }}>
            <Typography sx={{
                fontWeight : 700,
                fontSize : "36px",
                fontFamily : "Manrope"
            }}>
                Core Features
            </Typography>
            <Box sx={{
                width:"40%",
                height:"10px",
                mb: "6%"
            }}>
                <Typography sx={{
                    fontWeight : 400,
                    fontSize : "18px",
                    fontFamily : "Manrope",
                    color:"#434656",
                }}>
                    Designed specifically for the modern internship experience. Everything you need to track,
                    log, and report your progress.
                </Typography>
            </Box>


            <Box sx={{                                                                                  
                height:"70%",
                width:"96%",
                display:"flex",
                gap : 3,
                mb:3,
            }}>

                <Box sx={{
                    height:"100%",
                    width :"75%",
                    backgroundColor:"white",
                    borderRadius: "6px",
                    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
                    px:5,
                    py:6,
                    boxSizing:"border-box",
                }}>
                    <Box sx={{width:"100%", height:"fit-content", display:"flex", flexDirection:"column", gap:4, mb:4}}>
                        <SpeedIcon sx={{color:"#2D5BFF", fontSize:"62px"}}/>
                        <Typography sx={{
                            fontWeight : 700,
                            fontSize : "30px",
                            fontFamily : "Manrope",
                        }}>
                            Real-time Progress Dashboard
                        </Typography>
                        <Box sx={{
                            width: "50%",
                        }}>
                            <Typography sx={{
                                fontWeight : 400,
                                fontSize : "18px",
                                fontFamily : "Manrope",
                                color:"#434656",
                            }}>
                                Instantly track your total required OJT hours vs. completed
                                hours. Visualize your journey towards graduation with
                                precision data analytics and predictive completion dates.
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{
                        width:"100%",
                        height:"40%",
                        backgroundColor:"#F2F3FF",
                        borderRadius: "6px",
                        px:4,
                        py:2,
                        boxSizing:"border-box",
                        display:"flex",
                        flexDirection:"column",
                        gap : 2
                    }}>
                        <Box sx={{
                            width:"100%",
                            height:"fit-content",
                            display:"flex",
                            justifyContent:"space-between",
                            alignItems:"center",
                        }}>
                            <Typography sx={{
                                fontWeight : 700,
                                fontSize : "18px",
                                fontFamily : "Manrope",
                            }}>
                                Total Progress
                            </Typography>

                            <Typography sx={{
                                fontWeight : 700,
                                fontSize : "18px",
                                fontFamily : "Manrope",
                                color : "#0040DF"
                            }}>
                                320 / 600 Hours
                            </Typography>
                        </Box>

                        <LinearProgress variant="determinate" value={53.33} sx={{
                            borderRadius: "6px",
                            height: "12px", 
                        }} />

                        <Box sx={{
                            height:"100%",
                            width:"100%",
                            display:"flex",
                            gap: 1.5,
                            p:1.5
                        }}>
                            <Box sx={{
                                height:"100%",
                                width:"50%",
                                backgroundColor:"white",
                                display:"flex",
                                flexDirection:"column",
                                alignItems:"center",
                                textAlign:"center",
                                py:1.5,
                                boxSizing:"border-box",
                            }}>
                                <Typography sx={{
                                    fontWeight : 500,
                                    fontSize : "14px",
                                    fontFamily : "Manrope",
                                    color: "#515F74"

                                }}>
                                    THIS WEEK
                                </Typography>

                                <Typography sx={{
                                    fontWeight : 700,
                                    fontSize : "20px",
                                    fontFamily : "Manrope",
                                    color: "black"

                                }}>
                                    40h
                                </Typography>
                            </Box>
                            <Box sx={{
                                height:"100%",
                                width:"50%",
                                backgroundColor:"white",
                                display:"flex",
                                flexDirection:"column",
                                textAlign:"center",
                                alignItems:"center",
                                py:1.5,
                                boxSizing:"border-box",
                            }}>
                                <Typography sx={{
                                    fontWeight : 500,
                                    fontSize : "14px",
                                    fontFamily : "Manrope",
                                    color: "#515F74"

                                }}>
                                    REMAINING
                                </Typography>
                                <Typography sx={{
                                    fontWeight : 700,
                                    fontSize : "20px",
                                    fontFamily : "Manrope",
                                    color: "black"

                                }}>
                                    260h
                                </Typography>
                            </Box>
                        </Box>

                    </Box>

                </Box>

                <Box sx={{
                    height:"100%",
                    width :"25%",
                    gap:3,
                    display:"flex",
                    flexDirection:"column",
                }}>
                    <Box sx={{
                        height:"50%",
                        width:"100%",
                        backgroundColor:"#2D5BFF",
                        borderRadius: "6px",
                        boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
                        p:4,
                        boxSizing:"border-box",
                        gap:3,
                        display:"flex",
                        flexDirection:"column"
                    }}>
                        <TouchAppOutlinedIcon sx={{color: "white", fontSize: "40px"}}/>
                        <Typography sx={{
                            fontWeight : 700,
                            fontSize : "24px",
                            lineHeight: "32px",
                            fontFamily : "Manrope",
                            color:"white"

                        }}>
                            One-Tap Clock In/Out
                        </Typography>

                        <Typography sx={{
                            fontWeight : 300,
                            fontSize : "16px",
                            fontFamily : "Manrope",
                            color:"white"
                        }}>
                            Log your daily OJT hours with a single tap. GPS-
                            verified entries ensure accuracy and integrity
                            for your supervisor's peace of mind.
                        </Typography>
                    </Box>

                    <Box sx={{
                        height:"50%",
                        width:"100%",
                        backgroundColor:"white",
                        borderRadius: "6px",
                        boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
                        p:4,
                        boxSizing:"border-box",
                        gap:3,
                        display:"flex",
                        flexDirection:"column"
                    }}>
                        <InsertCommentOutlinedIcon sx={{color: "black", fontSize: "40px"}}/>
                        <Typography sx={{
                            fontWeight : 700,
                            fontSize : "24px",
                            lineHeight: "32px",
                            fontFamily : "Manrope",
                            color:"black"

                        }}>
                            Weekly Reflection Logs
                        </Typography>

                        <Typography sx={{
                            fontWeight : 300,
                            fontSize : "16px",
                            fontFamily : "Manrope",
                            color:"black"
                        }}>
                            Seamlessly draft and submit summaries of your
                            learning experiences directly to your supervisor
                            for digital sign-off.
                        </Typography>
                    </Box>


                </Box>


            </Box>
        </Box>
    )
}

export default Features