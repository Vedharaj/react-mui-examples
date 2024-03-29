import React from 'react'
import {
    Box,
    Stack,
    Divider,
    Grid,
    Paper
} from '@mui/material'

const MuiLayout = () => {
  return (
    <Paper sx={{padding: '32px'}}>
    <Stack 
      sx={{border: "1px solid"}}
      direction={"row"}
      spacing={2}
      divider={<Divider orientation='vertical' flexItem />}
    >
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "20px",
          "&:hover": {
              backgroundColor: 'primary.light'
          }
        }}
      >
          MuiLayout
      </Box>
      <Box
        sx={{
          backgroundColor: "warning.main",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "20px",
          "&:hover": {
              backgroundColor: 'warning.light'
          }
        }}
      >
          MuiLayout
      </Box>
    </Stack>
    <Grid container my={4} spacing={2}>
        <Grid item xs={6}>
            <Box bgcolor="primary.light" p={2}>Item 1</Box>
        </Grid>
        <Grid item xs={6}>
            <Box bgcolor="success.light" p={2}>Item 2</Box>
        </Grid>
        <Grid item xs={6}>
            <Box bgcolor="warning.light" p={2}>Item 3</Box>
        </Grid>
        <Grid item xs={6}>
            <Box bgcolor="error.light" p={2}>Item 4</Box>
        </Grid>
    </Grid>
    </Paper>
  )
}

export default MuiLayout