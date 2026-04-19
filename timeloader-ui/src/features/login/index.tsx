import { useNavigate } from "react-router-dom"
import { useRef } from 'react'
import NavBar from "../../components/NavBar"
import PageContainer from "../../components/PageContainer"
import { ActionButtonsConfig } from "./helpers"
import ActionButtons from "../../components/ActionButtons"
import Footer from "../../components/Footer"
import { Box, Button, Typography } from "@mui/material"
import LoginIcon from '@mui/icons-material/Login';
import * as Yup from 'yup';
import FormBuilder from '../../components/FormBuilder';
import type { FormBuilderRef } from "../../components/FormBuilder/formbuilder"
import axios from "axios"
import { useSnackbar } from "notistack"

const fields = [
  { name: 'email', label: 'Email', validation: Yup.string().email().required(), type: 'text' as const },
  { name: 'password', label: 'Password', validation: Yup.string().min(6).required(), type: 'password' as const },
];





const Login = () => {
    const navigate = useNavigate()
    const formRef = useRef<FormBuilderRef>(null)
    const {enqueueSnackbar} = useSnackbar()



    const handleSubmit = async (values: Record<string, unknown>) => {
    try{
        const response = await axios.post("/api/login", values)
        globalThis.localStorage.setItem("token", response.data.token)
        navigate("/dashboard")
    }catch(error){
        console.error("Login failed", error)
        enqueueSnackbar("Login failed. Please try again.", { variant: "error", autoHideDuration : 3000})
    }
}

    return (
        <PageContainer>
            <NavBar actionButtons={<ActionButtons buttons={ActionButtonsConfig(navigate)} />}/>
            <Box sx={{
                display : "flex",
                alignItems : "center",
                justifyContent : "center",
                flexDirection : "column",
                pt:10,
                boxSizing : "border-box",
                height : "79.3%",
                backgroundColor : "#F2F3FF",
            }}>
                
                <Box sx={{
                    width : "25%",
                    backgroundColor : "#FFFFFF",
                    borderRadius : "8px",
                    px : 2,
                    py : 4,
                    display : "flex",
                    flexDirection : "column",
                    gap : 2
                }}>
                    <Box sx={{
                        textAlign : "center",
                        width:"100%",
                        display : "flex",
                        flexDirection : "column",
                        gap : 0.5       
                    }}>
                         <Typography sx={{
                            fontFamily : "Manrope",
                            fontSize : "28px",
                            fontWeight : 700,

                         }}>Welcome Back</Typography>
                         <Typography sx={{
                            fontFamily : "Manrope",
                            fontSize : "16px",

                         }}>Access your internship application dashboard</Typography>
                    </Box>

                    <FormBuilder ref={formRef} fields={fields} onSubmit={handleSubmit} />

                    <Button onClick={() => formRef.current?.submit()} variant="contained" sx={{
                        py:2,
                        borderRadius : "8px",
                    }}>
                        Login  <LoginIcon sx={{ml:1}}/>
                    </Button>

                    <Box sx={{
                        display : "flex",
                        justifyContent : "center",
                        gap : 1,
                        width : "100%",
                    }}>
                        <Typography sx={{
                            fontFamily : "Manrope",
                            fontSize : "14px",}}>Don't have an account?</Typography>
                        <Typography onClick={() => navigate("/signup")} sx={{
                            fontFamily : "Manrope",
                            fontSize : "14px",
                            color : "#4B6CB7",
                            cursor : "pointer",
                            fontWeight : 500,
                            "&:hover" : {
                                textDecoration : "underline"
                            }
                        }}>Sign Up</Typography>
                    </Box>
                </Box>


                <Box sx={{
                    display : "flex",
                    justifyContent : "center",
                    width : "100%",
                    my :2,
                }}>
                    <Typography sx={{
                        fontFamily : "Manrope",
                        fontSize : "14px",
                        color : "#888888",
                    }}>Or continue with</Typography>
                </Box>

                <Box sx={{
                    display : "flex",
                    width : "27%"
                }}>
                    <ActionButtons parentStyle={{
                        width : "100%",
                        display : 'flex',
                        gap : 2,

                    }} 
                    buttons={[
                        {
                            label : "Google",
                            onClick : () => console.log("Google Login"),
                            variant : "outlined" as const,
                            style : {
                                backgroundColor : "#FFF",
                                width : "50%",
                                color : "black",
                                borderColor : "#C4C5D9",
                                
                            }
                        },
                        {
                            label : "GitHub",
                            onClick : () => console.log("GitHub Login"),
                            variant : "outlined" as const,
                            style : {
                                backgroundColor : "#FFF",
                                width : "50%",
                                color : "black",
                                borderColor : "#C4C5D9",
                            }
                        }
                    ]}/>

                </Box>
                    

                



            </Box>
            <Footer/>
        </PageContainer>
    )   
}

export default Login