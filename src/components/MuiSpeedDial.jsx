import React from 'react'
import {
    SpeedDial,
    SpeedDialAction,
    SpeedDialIcon
} from "@mui/material";

import {FaCopy, FaShare, FaPrint} from "react-icons/fa6";

const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel='speed dial'
      sx={{position: 'absolute', bottom:16, right:16}}
      icon={<SpeedDialIcon />}
    >
        <SpeedDialAction icon={<FaCopy />} tooltipTitle='copy' />
        <SpeedDialAction icon={<FaPrint />} tooltipTitle='print' />
        <SpeedDialAction icon={<FaShare />} tooltipTitle='share' />
    </SpeedDial>
  )
}

export default MuiSpeedDial;