import React from 'react'
import {
    Stack,
    CircularProgress,
    LinearProgress
} from "@mui/material";

const MuiProgress = () => {
  return (
    <Stack spacing={4}>
        <CircularProgress color='success'/>
        <CircularProgress />
        <CircularProgress variant='determinate' value={60}/>
        
        <LinearProgress color='success'/>
        <LinearProgress />
        <LinearProgress variant='determinate' value={60}/>
    </Stack>
  )
}

export default MuiProgress