import React, { useState } from 'react'
import {
    Button,
    Snackbar,
} from "@mui/material";

const MuiSnackbar = () => {
  const [open, setOpen] = useState(false)
  const handleClose = (e,r) => {
    if(r==='clickaway'){
        return
    }
    setOpen(false)
  }
    return (
    <div>
        MuiSnackbar
        <Button onClick={()=>setOpen(true)}>
            Submit
        </Button>
        <Snackbar
            message='Form Submitted Successfully'
            autoHideDuration={4000}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
            }}
        />
    </div>
  )
}

export default MuiSnackbar