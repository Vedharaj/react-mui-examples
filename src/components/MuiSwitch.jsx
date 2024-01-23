import React, { useState } from 'react'
import {
    FormControlLabel,
    Switch,
    Box
} from '@mui/material'

import {deepPurple} from '@mui/material/colors'

const MuiSwitch = () => {
    const [value, setValue] = useState(false)
  return (
    <Box>
        <FormControlLabel 
            label="Dark"
            control={
                <Switch
                    style={{color: deepPurple[600]}}
                    checked={value}
                    onChange={(e)=>setValue(ps=>!ps)}
                    disableRipple
                />
            }
        />
    </Box>
  )
}

export default MuiSwitch