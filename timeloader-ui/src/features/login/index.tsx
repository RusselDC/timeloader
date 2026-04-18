import { useNavigate } from "react-router-dom"
import NavBar from "../../components/NavBar"
import PageContainer from "../../components/PageContainer"
import { ActionButtonsConfig } from "./helpers"
import ActionButtons from "../../components/ActionButtons"
import Footer from "../../components/Footer"
import { Box, Typography } from "@mui/material"

import * as Yup from 'yup';
import FormBuilder from '../../components/FormBuilder';

const fields = [
  { name: 'email', label: 'Email', validation: Yup.string().email().required(), type: 'text' as const },
  { name: 'password', label: 'Password', validation: Yup.string().min(6).required(), type: 'password' as const },
];


const Login = () => {
    const navigate = useNavigate()

    return (
        <PageContainer>
            <NavBar actionButtons={<ActionButtons buttons={ActionButtonsConfig(navigate)} />}/>
            <Box sx={{
                display : "flex",
                alignItems : "center",
                flexDirection : "column",
                pt:10,
                boxSizing : "border-box",
                height : "79.3%",
                backgroundColor : "#F2F3FF",
            }}>
                
                <Box sx={{
                    height :"60%",
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
                        gap : 1
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
                </Box>

                <Box sx={{
                    height :"60%",
                    width : "25%",
                    backgroundColor : "#FFFFFF",
                    borderRadius : "8px",
                    px : 2,
                    py : 4,
                    display : "flex",
                    flexDirection : "column",
                    gap : 2
                }}>

                    <FormBuilder fields={fields} onSubmit={(values) => console.log(values)} />
                </Box>

            </Box>
            <Footer/>
        </PageContainer>
    )   
}

export default Login