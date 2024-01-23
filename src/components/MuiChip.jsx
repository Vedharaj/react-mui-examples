import {
    Stack,
    Chip,
    Avatar
} from "@mui/material";

import {SiSimkl} from "react-icons/si";

const MuiChip = () => {
  return (
    <Stack direction='row' spacing={4}>
        <Chip label='chip' color='info' />
        <Chip label='chip outline' color='primary' variant='outlined'/>
        <Chip 
            label='chip outlined' 
            color='secondary' 
            variant='outlined'
            avatar={<Avatar>vd</Avatar>}
        />
        <Chip 
            label='chip outline' 
            color='secondary' 
            variant='outline'
            icon={<SiSimkl />}
        />
        <Chip 
            label='chip outline' 
            color='error' 
            variant='outline'
            onClick={()=>alert("clicked")}
            onDelete={()=>alert("delete handler called")}
        />
    </Stack>
  )
}

export default MuiChip