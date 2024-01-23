import React from 'react'
import {Typography} from '@mui/material'

const MuiText = () => {
  return (
    <div>
    <Typography variant='h1'>Header h1</Typography>
    <Typography variant='h2'>Header h2</Typography>
    <Typography variant='h3' gutterBottom>Header h3</Typography>
    <Typography variant='h4'>Header h4</Typography>
    <Typography variant='h5'>Header h5</Typography>
    <Typography variant='h6'>Header h6</Typography>

    <Typography variant='subtitle1'>sub title 1</Typography>
    <Typography variant='subtitle2'>sub title 2</Typography>
    
    <Typography variant='body1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea adipisci maxime quasi repellat minus cumque ut asperiores provident odit commodi quis accusamus animi ipsa, temporibus accusantium magni veniam itaque hic?</Typography>
    <Typography variant='body2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea adipisci maxime quasi repellat minus cumque ut asperiores provident odit commodi quis accusamus animi ipsa, temporibus accusantium magni veniam itaque hic?</Typography>
  </div>
  )
}

export default MuiText