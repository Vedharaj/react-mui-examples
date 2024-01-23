import React from 'react'
import {
    Stack,
    IconButton,
    Tooltip
} from "@mui/material";

import {MdDelete, MdSave, MdSaveAs} from "react-icons/md";

const MuiTooltip = () => {
  return (
    <Stack direction='row' spacing={4}>
        <Tooltip title='delete'>
            <IconButton>
                <MdDelete />
            </IconButton>
        </Tooltip>
        <Tooltip title='delete' placement="right"> 
            <IconButton>
                <MdSave />
            </IconButton>
        </Tooltip>
        <Tooltip title='delete' placement="right" arrow> 
            <IconButton>
                <MdSaveAs />
            </IconButton>
        </Tooltip>
        <Tooltip 
            title='delete' 
            placement="right" 
            arrow
            enterDelay={500}
            leaveDelay={500}
        > 
            <IconButton>
                <MdSaveAs />
            </IconButton>
        </Tooltip>
    </Stack>
  )
}

export default MuiTooltip