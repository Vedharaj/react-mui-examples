import React from 'react'
import {Stack, Avatar, AvatarGroup} from "@mui/material";

const MuiAvatar = () => {
  return (
    <Stack spacing={4} direction='column'>
        <Stack spacing={4} direction='row'>
            <Avatar sx={{
                bgcolor: 'primary.main'
            }}>VS</Avatar>
            <Avatar sx={{
                bgcolor: 'secondary.main'
            }}>VS</Avatar>
        </Stack>
        <Stack spacing={4} direction='row'>
            <Avatar
                alt="rojlah"
                src="https://randomuser.me/api/portraits/women/78.jpg"
            />
            <Avatar
                alt="vedha"
                src="https://randomuser.me/api/portraits/men/78.jpg"
            />
        </Stack>
        <Stack spacing={4} direction='row'>
            <Avatar
                sx={{width: 60, height: 60}}
                alt="rojlah"
                src="https://randomuser.me/api/portraits/women/78.jpg"
            />
            <Avatar
                sx={{width: 60, height: 60}}
                alt="vedha"
                src="https://randomuser.me/api/portraits/men/78.jpg"
            />
        </Stack>
        <Stack spacing={4} direction='row'>
            <Avatar
                variant="square"
                sx={{width: 60, height: 60}}
                alt="rojlah"
                src="https://randomuser.me/api/portraits/women/78.jpg"
            />
            <Avatar
                variant="square"
                sx={{width: 60, height: 60}}
                alt="vedha"
                src="https://randomuser.me/api/portraits/men/78.jpg"
            />
        </Stack>
        <Stack spacing={4} direction='row'>
            <AvatarGroup
                max={4}
            >
                <Avatar
                    alt="rojlah"
                    src="https://randomuser.me/api/portraits/women/78.jpg"
                />
                <Avatar
                    alt="vedha"
                    src="https://randomuser.me/api/portraits/men/78.jpg"
                />        
                <Avatar
                    alt="rojlah"
                    src="https://randomuser.me/api/portraits/women/78.jpg"
                />
                <Avatar
                    alt="vedha"
                    src="https://randomuser.me/api/portraits/men/78.jpg"
                />        
                <Avatar
                    alt="rojlah"
                    src="https://randomuser.me/api/portraits/women/78.jpg"
                />
                <Avatar
                    alt="vedha"
                    src="https://randomuser.me/api/portraits/men/78.jpg"
                />        
            </AvatarGroup>
        </Stack>
        <Stack spacing={4} direction='row'>
            <AvatarGroup
                max={4}
            >
                <Avatar
                    sx={{width: 60, height: 60}}
                    alt="rojlah"
                    src="https://randomuser.me/api/portraits/women/78.jpg"
                />
                <Avatar
                    alt="vedha"
                    sx={{width: 60, height: 60}}
                    src="https://randomuser.me/api/portraits/men/78.jpg"
                />        
                <Avatar
                    alt="rojlah"
                    sx={{width: 60, height: 60}}
                    src="https://randomuser.me/api/portraits/women/78.jpg"
                />
                <Avatar
                    alt="vedha"
                    sx={{width: 60, height: 60}}
                    src="https://randomuser.me/api/portraits/men/78.jpg"
                />      
            </AvatarGroup>
        </Stack>
    </Stack>
  )
}

export default MuiAvatar