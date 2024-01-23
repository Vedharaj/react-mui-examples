import {Stack, Badge} from "@mui/material";
import {FaMessage} from "react-icons/fa6";

const MuiBadge = () => {
  return (
    <Stack spacing={4} direction='row'>
        <Badge badgeContent={5} color='primary'>
            <FaMessage fontSize={'38px'}/>
        </Badge>
        <Badge badgeContent={7} color='error'>
            <FaMessage fontSize={'38px'}/>
        </Badge>
        <Badge variant='dot' color='error'>
            <FaMessage fontSize={'38px'}/>
        </Badge>
    </Stack>
  )
}

export default MuiBadge