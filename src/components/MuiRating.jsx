import React, { useState } from 'react'
import {
    Stack,
    Rating
} from '@mui/material'

import {FaHeart, FaRegHeart} from 'react-icons/fa6'

const MuiRating = () => {
    const [rating, setRating] = useState(null)

    const handleRatingChange = (_, v) => {
        setRating(ps=>ps===v? null: v)
    }
  return (
    <Stack spacing={4}>
        <Rating value={rating} onChange={handleRatingChange}/>
        <Rating value={rating} size='large' onChange={handleRatingChange} precision={0.5}/>
        <Rating
            style={{color: 'red'}}
            size='large'
            value={rating}
            onChange={handleRatingChange} 
            icon={<FaHeart fontSize={'inherit'} />}
            emptyIcon={<FaRegHeart fontSize={'inherit'} />}
        />
        <Rating
            style={{color: 'red'}}
            value={3}
            icon={<FaHeart fontSize={'inherit'} />}
            emptyIcon={<FaRegHeart fontSize={'inherit'} />}
            readOnly
        />
    </Stack>
  )
}

export default MuiRating