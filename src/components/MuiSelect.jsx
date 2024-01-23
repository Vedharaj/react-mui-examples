import React, { useState } from 'react'
import {Stack, TextField, MenuItem} from '@mui/material'

const MuiSelect = () => {
    const [country, setcountry] = useState('')
    const [countries, setcountries] = useState([])
    
    const handleCountry = (e)=>{
        console.log(e.target.value);
        setcountry(e.target.value)
    }
    
    const handleCountries = (e)=>{
        const value = e.target.value
        console.log(value, countries);
        setcountries(value)
    }
  return (
    <Stack spacing={8}>
        <TextField
            label='select country'
            value={country}
            onChange={handleCountry}
            select
            fullWidth
            required
            helperText={"select your country"}
        >
            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='US'>USA</MenuItem>
            <MenuItem value='AU'>Australia</MenuItem>
        </TextField>
        <TextField
            label='select country'
            value={countries}
            onChange={handleCountries}
            select
            fullWidth
            required
            SelectProps={{
                multiple: true
            }}
            helperText={"select your country"}
        >
            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='US'>USA</MenuItem>
            <MenuItem value='AU'>Australia</MenuItem>
        </TextField>
    </Stack>
  )
}

export default MuiSelect