import React from 'react'
import {
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemButton,
    ListItemAvatar,
    Avatar,
    Divider,
} from "@mui/material";

import {MdEmojiEmotions, MdEmojiNature, MdEmojiFlags} from "react-icons/md";

const MuiList = () => {
  return (
    <Box bgcolor={'primary.main'} color={'#fff'}>
        <List>
            <ListItem>
                <ListItemIcon>
                    <MdEmojiEmotions color='#fff' fontSize={'30px'}/>
                </ListItemIcon>
                <ListItemText primary='List Item 1' secondary='this is list of mui'/>
            </ListItem>
            <Divider />
            <ListItem>
                <ListItemIcon>
                    <MdEmojiNature color='#fff' fontSize={'30px'}/>
                </ListItemIcon>
                <ListItemText primary='List Item 2' secondary='this is list of mui'/>
            </ListItem>
            <Divider />
            <ListItem>
                <ListItemIcon>
                    <MdEmojiFlags color='#fff' fontSize={'30px'}/>
                </ListItemIcon>
                <ListItemText primary='List Item 3' secondary='this is list of mui'/>
            </ListItem>
            <Divider />
            <ListItem>
                <ListItemAvatar>
                    <Avatar src="https://randomuser.me/api/portraits/women/79.jpg" />
                </ListItemAvatar>
                <ListItemText primary='List Item 4' secondary='this is list of mui'/>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar src="https://randomuser.me/api/portraits/women/78.jpg" />
                    </ListItemAvatar>
                    <ListItemText primary='List Item 5' secondary='this is list of mui'/>
                </ListItemButton>
            </ListItem>
        </List>
    </Box>
  )
}

export default MuiList