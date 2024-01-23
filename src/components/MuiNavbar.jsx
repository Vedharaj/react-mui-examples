import React from 'react'
import BreadCrumbs from './MuiBreadCrumbs'
import Drawer from './MuiDrawer'
import SpeedDial from './MuiSpeedDial'
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button, 
    Stack,
    Box,
} from '@mui/material'

import { MdCatchingPokemon } from "react-icons/md";

const MuiNavbar = () => {
    return (
        <>
            <AppBar color='secondary' position="static">
                <Toolbar>
                    <IconButton edge='start' disableRipple size="large" color='inherit' aria-label='logo'>
                        <MdCatchingPokemon />
                    </IconButton>
                    <Typography variant="h6" component={'div'} sx={{flexGrow: 1}}>POKEMAN</Typography>
                    <Stack direction='row' spacing={2}>
                        <Button color="inherit">Features</Button>
                        <Button color="inherit">Pricing</Button>
                        <Button color="inherit">About</Button>
                        <Button color="inherit">Login</Button>
                    </Stack>
                </Toolbar>
                </AppBar>
                <Box m={2}>
                    <BreadCrumbs />
                    <Drawer />
                </Box>
                <SpeedDial />
        </>
    )
}

export default MuiNavbar