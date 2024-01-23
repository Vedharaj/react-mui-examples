import React, { useState } from 'react'
import {
    BottomNavigation,
    BottomNavigationAction
} from "@mui/material";

import {FaHouse, FaHeart, FaPerson} from "react-icons/fa6";

const MuiBottomNavigation = () => {
    const [value, setValue] = useState(0)
    console.log(value)
    return (
    <BottomNavigation
        sx={{width: '100%', position: 'absolute', bottom: 0}}
        value={value}
        onChange={(e, v)=>setValue(v)}
    >
        <BottomNavigationAction label='Home' icon={<FaHouse />} />
        <BottomNavigationAction label='Favorite' icon={<FaHeart />} />
        <BottomNavigationAction label='Profile' icon={<FaPerson />} />
    </BottomNavigation>
  )
}

export default MuiBottomNavigation