import React, { useState } from 'react'
import {
    Stack,
    Autocomplete,
    TextField,
} from '@mui/material'

const skills = ['HTML', 'CSS', "JS", "React", "Javascript", "TypeScriptd"]

const skillsOptions = skills.map((item, index)=>({
    id: index+1,
    label: item
}))

const MuiAutocomplete = () => {
    const [value, setValue] = useState('')
    const [skill, setSkill] = useState(null)
    console.log(value)
    console.log(skill)
    return (
        <Stack width='250px' spacing={5}>
            <Autocomplete 
                options={skills} 
                renderInput={(params)=>{
                    return <TextField {...params} label='skills'/>
                }}
                value={value}
                onChange={(e,v)=>setValue(v)}
                freeSolo
            /> 
            <Autocomplete 
                options={skillsOptions} 
                renderInput={(params)=>{
                    return <TextField {...params} label='skills'/>
                }}
                value={skill}
                onChange={(e,v)=>setSkill(v)}
            /> 
        </Stack>
    )
}

export default MuiAutocomplete