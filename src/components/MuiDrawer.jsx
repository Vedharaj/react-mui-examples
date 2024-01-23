import React, { useState } from 'react'
import {
    Drawer,
    Box,
    Typography,
    IconButton,
} from "@mui/material";

import {FaBars} from "react-icons/fa6";

const MuiDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <>
        <IconButton
            onClick={()=>setIsDrawerOpen(true)}
            size='large'
            color='inherit'
        >
            <FaBars />
        </IconButton>
        <Drawer 
            anchor='left'
            open={isDrawerOpen}
            onClose={()=>setIsDrawerOpen(false)}
        >
            <Box p={2} width='250px' textAlign='center'>
                <Typography variant='h5'>
                    Sidebar
                </Typography>
            </Box>
        </Drawer>
    </>
  )
}

export default MuiDrawer