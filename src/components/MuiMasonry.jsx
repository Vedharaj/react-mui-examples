import React from 'react'
import {
    Masonry,
} from "@mui/lab";

import {
    Box,
    Paper,
} from "@mui/material";

const heights = new Array(10).fill(4).map(i=>i*Math.floor(Math.random()*100))

const MuiMasonry = () => {
    console.log(heights)
  return (
    <Box sx={{width: 500, minHeight: 600}}>
        <Masonry columns={4} spacing={1}>
            {heights.map((v,i)=>(
                <Paper
                    key={i}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: v,
                        border: '1px solid'
                    }}
                >
                {i+1}
                </Paper>
            ))}
        </Masonry>
    </Box>
)
}

export default MuiMasonry