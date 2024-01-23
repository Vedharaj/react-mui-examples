import React from 'react'
import {
    Stack,
    ImageList,
    ImageListItem,
    ImageListItemBar
} from '@mui/material'

const MuiImageList = () => {
  return (
    <Stack spacing={4}>
        <ImageList
            sx={{width: 500, height: 450}}
            cols={3}
            rowHeight={164}
        >
            {Array(10).fill().map((v, i)=>(
                <ImageListItem key={i}>
                    <img src="https://source.unsplash.com/random?movie,game,music" alt='img1' loading='lazy'/>
                </ImageListItem>
            ))}
        </ImageList>
        <ImageList
            sx={{width: 500, height: 450}}
            cols={3}
            variant='woven'
            gap={5}
        >
            {Array(10).fill().map((v, i)=>(
                <ImageListItem key={i}>
                    <img src="https://source.unsplash.com/random" alt='img1' loading='lazy'/>
                </ImageListItem>
            ))}
        </ImageList>
        <ImageList
            sx={{width: 500, height: 450}}
            cols={3}
            gap={8}
        >
            {Array(10).fill().map((v, i)=>(
                <ImageListItem key={i}>
                    <img src="https://source.unsplash.com/random?movie" alt='img1' loading='lazy'/>
                    <ImageListItemBar title="vedha" />
                </ImageListItem>
            ))}
        </ImageList>
    </Stack>
  )
}

export default MuiImageList