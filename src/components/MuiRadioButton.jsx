import React, { useState } from 'react'
import {
    Stack,
    FormControl,
    FormLabel,
    FormControlLabel,
    RadioGroup,
    Radio
} from '@mui/material'

const MuiRadioButton = () => {
    const [exprience, setexprience] = useState('')
  return (
    <Stack>
        <FormControl>
            <FormLabel id="job-experience-group">
                Year of exprience
            </FormLabel>
            <RadioGroup
                value={exprience}
                onChange={(e)=>setexprience(e.target.value)}
                name='job-experience-radio'
                aria-labelledby='job-experience-group'
                row
            >
                <FormControlLabel control={<Radio />} value='0-2' label='0-2' />
                <FormControlLabel control={<Radio />} value='3-5' label='3-5' />
                <FormControlLabel control={<Radio />} value='6-10' label='6-10' />
            </RadioGroup>
        </FormControl>
    </Stack>
  )
}

export default MuiRadioButton