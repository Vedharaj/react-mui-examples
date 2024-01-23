import React, {useState} from 'react'
import {Stack, TextField, InputAdornment} from '@mui/material'

const MuiTextField = () => {
    const [value, setvalue] = useState('')

  return (
    <Stack spacing={10} direction='column'>
    <Stack spacing={2} direction='row'>
        <TextField label={'name'} variant='outlined'/>
        <TextField label={'name'} variant='filled'/>
        <TextField label={'name'} variant='standard'/>
    </Stack>
    
    <Stack spacing={2} direction='column'>
        <TextField 
            label='form input' 
            required
            error={!value}
            onChange={setvalue}
            helperText={!value ? 'required!' : 'enter your details'}/>
        <TextField 
            label="password"
            type='password'
            helperText="password must be eight character"
        />
        <TextField value={'hello friends'} inputProps={{readOnly: true}}/>
    </Stack>

    <Stack spacing={2} direction='row'>
        <TextField 
            label="Amount" 
            InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>
            }}
        />    
        <TextField 
            label="Weight" 
            InputProps={{
                endAdornment: <InputAdornment position="end">kg</InputAdornment>
            }}
        />    
    </Stack>
    </Stack>
  )
}

export default MuiTextField