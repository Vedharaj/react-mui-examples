import React from 'react'
import {
    Box,
    Card,
    CardContent,
    CardActions,
    Button,
    Typography,
    CardMedia
} from '@mui/material'

const MuiCard = () => {
  return (
    <Box width="350px"> 
        <Card>
            <CardMedia
                component={'img'}
                height={'140px'}
                image='https://source.unsplash.com/random'
                alt="unsplash image"
            ></CardMedia>
            <CardContent>
                <Typography gutterBottom variant="h5" component='div'>
                    React
                </Typography>
                <Typography variant="body2" color={'text-secondary'}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut unde, sequi nesciunt magni ab magnam.
                </Typography>
            </CardContent>
                <CardActions>
                    <Button size="small" disableRipple>Share</Button>
                    <Button size="small" disableRipple>Learn more</Button>
                </CardActions>
        </Card>
    </Box>
  )
}

export default MuiCard