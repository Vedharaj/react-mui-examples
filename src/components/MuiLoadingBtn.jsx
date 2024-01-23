import React from 'react'
import {
    Stack
} from "@mui/material";

import {
    LoadingButton
} from "@mui/lab";


import {MdSave} from "react-icons/md";

const MuiLoadingBtn = () => {
  return (
    <Stack spacing={4} sx={{width: '150px'}}>
        <LoadingButton variant='outlined'>
            submit
        </LoadingButton>
        <LoadingButton loading variant='outlined'>
            submit
        </LoadingButton>
        <LoadingButton loadingIndicator="loading..." variant='outlined'>
            Fetch Data
        </LoadingButton>
        <LoadingButton loadingIndicator="loading..." loading variant='outlined'>
            Fetch Data
        </LoadingButton>
        <LoadingButton
            startIcon={<MdSave />}
            variant='outlined'
        >
            save
        </LoadingButton>
        <LoadingButton
            loading
            startIcon={<MdSave />}
            variant='outlined'
            loadingPosition='start'
        >
            save
        </LoadingButton>
    </Stack>
  )
}

export default MuiLoadingBtn