import {
    Stack,
    Skeleton,
    Avatar,
    Typography,
    Box
} from "@mui/material";
import { useState, useEffect } from "react";

const img = 'https://source.unsplash.com/random/256x144';

const MuiSkeleton = () => {
    const [loading, setLoading] = useState(true)
    const [imgUrl, SetImgUrl] = useState(null)

    const fetchData = async() => {
        try {
            // console.log('started fetching...')
            await fetch(img)
                .then(res=>res.blob())
                .then(b=>URL.createObjectURL(b))
                .then(url=>{
                    SetImgUrl(url)
                    setLoading(false)
                })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    
  return (
    // <Stack spacing={4}>
    //     <Skeleton variant="text" />
    //     <Skeleton variant="rectangular" width={'250px'}  height="250px"/>
    //     <Skeleton variant="rectangular" animation="wave" width={'250px'}  height="250px"/>
    //     <Skeleton variant="circular" width={'250px'}  height="250px" />
    // </Stack>
    <Box>
        <Stack spacing={4}>
            {
                loading ?(
                    <Skeleton
                        variant="rectangle"
                        width={'254px'}
                        height={'144px'}
                    />
                ) : (
                    <img 
                        src={imgUrl}
                        alt='skeleton'
                        width="256px"
                        height={"144px"}
                    />
                )
            }
            {
                loading ?(
                    <Skeleton 
                        variant="circular"
                        width={'40px'}
                        height={'40px'}
                        animation="wave"
                    />
                ): (
                    <Avatar>VD</Avatar>
                )
            }
            <Stack sx={{width: "80%"}}>
                {
                    loading ?(
                        <>
                            <Typography variant="body1">
                                <Skeleton variant="text" width="100%" animation="wave" />
                            </Typography>
                            <Typography variant="body2">
                                <Skeleton variant="text" width="100%" animation="wave" />
                            </Typography>
                        </>
                    ):(
                        <>
                            <Typography variant="body1">
                                Lorem ipsum dolor sit.
                            </Typography>
                            <Typography variant="body2">
                                Lorem ipsum dolor sit amet consectetur.
                            </Typography>
                        </>
                    )
                }
            </Stack>
        </Stack>
    </Box>
  )
}

export default MuiSkeleton