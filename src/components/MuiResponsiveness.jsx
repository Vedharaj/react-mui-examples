import React from 'react'
import {
    Box
} from "@mui/material";

const MuiResponsiveness = () => {
  return (
    <Box sx={{
        height: 300,
        width: {
            xs: 100,
            sx: 200,
            md: 300,
            lg: 400,
            xl: 500,

        },
        bgcolor: 'primary.main'
    }}>
    </Box>
)
}

export default MuiResponsiveness