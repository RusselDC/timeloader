import { Box } from "@mui/material"

export const PageContainer = ({children} : {children: React.ReactNode}) => {
    return <Box sx={{
        height:"100%",
        width : "100%",
        overflowY:"scroll",
        overflowX:"hidden",
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    }}>
        {children}

    </Box>
}

