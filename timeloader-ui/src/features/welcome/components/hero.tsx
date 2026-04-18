import { Box, Button, Chip, Typography } from "@mui/material"
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import RestoreIcon from '@mui/icons-material/Restore';
const HeroSection = () => {
    return (
        <Box sx={{
            height:"80%",
            width:"100%",
            display:"flex",
            backgroundColor:"#FAF8FF",
            py:"8%"
        }}>
            <Box sx={{
                height:"100%",
                width:"100%",
                display:"flex",
            }}>
                <Box sx={{
                    height:"100%",
                    width:"50%",
                    px:5,
                }}>
                    <Chip label="NEW : OJT PERFORMANCE LOGS" sx={{
                        letterSpacing:"1.2px",
                        lineHeight:'16px',
                        color:"#57657A",
                        fontWeight:700,
                        bgcolor : "#D5E3FC",
                        mb : '40px'
                    }} 
                    />
                    <Typography sx={{
                        fontWeight: 700,
                        fontSize: '82px',
                        color : "#131B2E",
                        fontFamily: 'Manrope',
                        lineHeight: '90px',
                        mb:'40px'
                    }}>Effortless Time 
                    <span style={{color:"#0040DF"}}>Tracking</span> for Your Internship</Typography>
                    
                    <Typography sx={{
                        fontWeight: 400,
                        fontSize: '20px',
                        color : "#434656",
                        fontFamily: 'Manrope',
                        lineHeight: '30px',
                        mb:"40px",
                    }}>
                        The professional suite for tracking OJT hours, weekly
                        performance logs, and mandatory requirements. Streamline
                        your documentation and focus on your career growth.
                    </Typography>

                    <Box sx={{
                        width:"100%",
                        height:"auto",
                        display:"flex",
                        gap: 2
                    }}>
                        <Button
                            variant="contained"
                            sx={{
                                background: 'linear-gradient(135deg, #0040DF, #2D5BFF)',
                                color: "#FFFFFF",
                                fontWeight: 500,
                                fontSize: '18px',
                                py: '17px',
                                px: '32px',
                                lineHeight:'28px',
                                borderRadius: '8px',
                                textTransform: 'none',
                                boxShadow: 'none',
                            }}
                        >
                            Start Clocking In
                        </Button>
                        <Button
                            variant="text"
                            sx={{   
                                backgroundColor:"white",
                                color: "#0040DF",
                                fontWeight: 500,
                                fontSize: '18px',
                                py: '17px',
                                px: '32px',
                                lineHeight:'28px',
                                borderRadius: '8px',
                                textTransform: 'none',
                                boxShadow: 'none',
                            }}
                        >
                            Watch Demo
                        </Button>
                    </Box>
                </Box>
                <Box sx={{
                    height:"100%",
                    width:"50%",
                    display:"flex",
                    pt:'5%',
                    justifyContent:"center",  
                }}>
                    <Box sx={{
                        height:"fit-content",
                        width:"80%",
                        backgroundColor:"white",
                        borderRadius:"16px",
                        padding : "24px",
                    }}>
                        <Typography sx={{
                            color:"#131B2E",
                            fontWeight: 700,
                            fontSize: '24px',
                            fontFamily: 'Manrope',
                            lineHeight: '32px',
                        }}>Active OJT Session</Typography>

                        <Box sx={{
                            height:"80px",
                            width:"calc(100% - 32px)",
                            backgroundColor:"#F2F3FF",
                            borderRadius:"8px",
                            mt:1.5,
                            border:"2px solid #D5E3FC",
                            display:"flex",
                            padding:"16px",
                        }}>
                            <Box sx={{
                                height:"100%",
                                width:"12%",
                                backgroundColor:"white",
                                borderRadius:"8px",
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center",

                            }}>
                                <AccessAlarmIcon sx={{color:"#0040DF",fontSize:"42px"}}/>
                            </Box>
                            <Box sx={{
                                height:"100%",
                                width:"70%",
                                ml: 3,
                                display:"flex",
                                flexDirection:"column",
                                justifyContent:"center",
                            }}
                            >
                                <Typography sx={{
                                    color:"#131B2E",
                                    fontWeight: 700,
                                    fontSize: '18px',
                                    fontFamily: 'Manrope',
                                    lineHeight: '28px',
                                }}>Clocked In : 08:30 AM</Typography>
                                <Typography sx={{
                                    color:"#131B2E",
                                    fontWeight: 500,
                                    fontSize: '18px',
                                    fontFamily: 'Manrope',
                                    lineHeight: '28px',
                                }}>Bulacan State University</Typography>
                            </Box>


                        </Box>

                        <Box sx={{
                            height:"80px",
                            width:"calc(100% - 32px)",
                            backgroundColor:"#F2F3FF",
                            borderRadius:"8px",
                            mt:2,
                            display:"flex",
                            padding:"16px",
                        }}>
                            <Box sx={{
                                height:"100%",
                                width:"12%",
                                backgroundColor:"white",
                                borderRadius:"8px",
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center",

                            }}>
                                <AssignmentTurnedInIcon sx={{color:"#515F74",fontSize:"42px"}}/>
                            </Box>
                            <Box sx={{
                                height:"100%",
                                width:"70%",
                                ml: 3,
                                display:"flex",
                                flexDirection:"column",
                                justifyContent:"center",
                            }}
                            >
                                <Typography sx={{
                                    color:"#131B2E",
                                    fontWeight: 700,
                                    fontSize: '18px',
                                    fontFamily: 'Manrope',
                                    lineHeight: '28px',
                                }}>Weekly Reflection Log</Typography>
                                <Typography sx={{
                                    color:"#131B2E",
                                    fontWeight: 500,
                                    fontSize: '18px',
                                    fontFamily: 'Manrope',
                                    lineHeight: '28px',
                                }}>Week 12 · Pending Submission</Typography>
                            </Box>

                            


                        </Box>

                        
                        <Box sx={{
                            height:"80px",
                            width:"calc(100% - 32px)",
                            backgroundColor:"#F2F3FF",
                            borderRadius:"8px",
                            mt:2,
                            display:"flex",
                            padding:"16px",
                        }}>
                            <Box sx={{
                                height:"100%",
                                width:"12%",
                                backgroundColor:"white",
                                borderRadius:"8px",
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center",

                            }}>
                                <RestoreIcon sx={{color:"#515F74",fontSize:"42px"}}/>
                            </Box>
                            <Box sx={{
                                height:"100%",
                                width:"70%",
                                ml: 3,
                                display:"flex",
                                flexDirection:"column",
                                justifyContent:"center",
                            }}
                            >
                                <Typography sx={{
                                    color:"#131B2E",
                                    fontWeight: 700,
                                    fontSize: '18px',
                                    fontFamily: 'Manrope',
                                    lineHeight: '28px',
                                }}>Yesterday's Summary</Typography>
                                <Typography sx={{
                                    color:"#131B2E",
                                    fontWeight: 500,
                                    fontSize: '18px',
                                    fontFamily: 'Manrope',
                                    lineHeight: '28px',
                                }}>8 Hours Recorded · Submitted</Typography>
                            </Box>

                            


                        </Box>

                        
                    </Box>
                    
                </Box>


            </Box>

        </Box>
    )



}

export default HeroSection