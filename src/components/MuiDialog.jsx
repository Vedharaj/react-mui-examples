import React, { useState } from 'react'
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from "@mui/material"

const MuiDialog = () => {
    const [open, setOpen] = useState(false)
  return (
    <div>
        <Button onClick={()=>setOpen(true)}>Open Dialog</Button>
        <Dialog 
            aria-labelledby='dialog'
            open={open}N
            onClose={()=>setOpen(false)}
            >
            <DialogTitle id="dialog-title">submit the test?</DialogTitle>
            <DialogContent id="dialog-descriptions">
                <DialogContentText>
                    Are you sure you want to submit the test? you will not be 
                    able to edit after submitted
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus>Submit</Button>
                <Button onClick={()=>setOpen(false)}>cancel</Button>
            </DialogActions>
        </Dialog>
    </div>
  )
}

export default MuiDialog