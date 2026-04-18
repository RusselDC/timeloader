import { Box, Button } from "@mui/material"

type ButtonStates = {
    isSelected:boolean,
    label : string
}



const NavigationButtons = ({buttons} : {buttons : ButtonStates[]}) => {
    return (
        <Box sx={{
            width:"auto",
            display : "flex",
            gap : 2
        }}>

            {buttons.map((button, index) => (
                <Button key={index} variant="text"
                    sx={{
                        color : button.isSelected ? "#0040DF" : "#515F74",
                                fontWeight: 700,
                                fontSize: "1rem",
                                fontFamily: 'Manrope',
                                textSpacing: "0.02em",
                                textTransform: 'none', 
                                borderRadius: 0,
                            ...(button.isSelected ? {
                                borderBottom: '2px solid #0040DF'
                            } : {})
                        }}
                >{button.label}</Button>
            ))}

        </Box>
    )
}

export default NavigationButtons