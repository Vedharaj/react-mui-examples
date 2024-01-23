import React, { useState } from 'react';
import {
    Button,
    Stack,
    IconButton,
    ButtonGroup,
    ToggleButtonGroup,
    ToggleButton,
} from '@mui/material';

import {FaHeart, FaBold, FaUnderline, FaItalic} from 'react-icons/fa';

const MuiButtons = () => {

    const [format, setFormat] = useState(null)

    const handleToggleButton = (_, v)=>{
        setFormat(v)
        console.log(v);
    }

  return (
    <Stack spacing={5} direction='column'>
        <Stack spacing={2} direction='row'>
            <Button variant='outlined'>outlined</Button>
            <Button variant='contained'>contained</Button>
            <Button variant='text'>text</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant='contained' color='primary'>Primary</Button>
            <Button variant='contained' color='secondary'>Secondary</Button>
            <Button variant='contained' color='success'>Success</Button>
            <Button variant='contained' color='warning'>Warning</Button>
            <Button variant='contained' color='info'>Info</Button>
            <Button variant='contained' color='error'>Error</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant='outlined' color='primary'>Primary</Button>
            <Button variant='outlined' color='secondary'>Secondary</Button>
            <Button variant='outlined' color='success'>Success</Button>
            <Button variant='outlined' color='warning'>Warning</Button>
            <Button variant='outlined' color='info'>Info</Button>
            <Button variant='outlined' color='error'>Error</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant='text' color='primary'>Primary</Button>
            <Button variant='text' color='secondary'>Secondary</Button>
            <Button variant='text' color='success'>Success</Button>
            <Button variant='text' color='warning'>Warning</Button>
            <Button variant='text' color='info'>Info</Button>
            <Button variant='text' color='error'>Error</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant='contained' size='small'>Small</Button>
            <Button variant='contained' size='medium'>Medium</Button>
            <Button variant='contained' size='large'>Large</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant='contained' startIcon={<FaHeart />} disableElevation>Medium</Button>
            <Button variant='contained' endIcon={<FaHeart />} disableRipple>Medium</Button>
            <IconButton aria-label='heart' color='success'><FaHeart /></IconButton>
        </Stack>

        <Stack spacing={2} direction='row'>
            <ButtonGroup 
                variant='contained'
                color='info'
            >
                <Button>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
            </ButtonGroup>
        </Stack>
        <Stack spacing={2} direction='row'>
            <ButtonGroup 
                variant='contained'
                orientation='vertical'
                color='secondary'
            >
                <Button>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
            </ButtonGroup>
        </Stack>
        <Stack spacing={2} direction='row'>
            <ToggleButtonGroup
                size='large'
                color='info'
                value={format}
                onChange={handleToggleButton}
                exclusive>
                <ToggleButton value={'bold'}><FaBold /></ToggleButton>
                <ToggleButton value={'italic'}><FaItalic /></ToggleButton>
                <ToggleButton value={'underline'}><FaUnderline /></ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    </Stack>
  )
}

export default MuiButtons