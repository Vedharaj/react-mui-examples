import React, { useState } from 'react'
import {
    Box,
    Tab,
    Typography
} from "@mui/material";

import {
    TabContext,
    TabList,
    TabPanel
} from "@mui/lab";

import {FaHeart} from 'react-icons/fa6'

const MuiTab = () => {
    const [value, setValue] = useState('1')
  return (
    <TabContext value={value}>
        <Box sx={{borderBottom: 1, borderColor: 'divider'}} width={'300px'}>
            <TabList
               aria-label='tab list'
               onChange={(e,v)=>setValue(v)}
               variant='scrollable'
               scrollButtons='auto'
            >
                <Tab 
                    label="Tab 1" 
                    value="1"
                    icon={<FaHeart />}
                    iconPosition='start' 
                />
                <Tab label="Tab 2" value="2" />
                <Tab label="Tab 3" value="3" />
                <Tab label="Tab 4" value="4" />
                <Tab label="Tab 5" value="5" />
                <Tab label="Tab 6" value="6" />
            </TabList>
        </Box>
        <TabPanel value='1'>
            <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur velit doloremque tempora, in vero autem ut minus qui voluptas odio dolorem maiores error vel similique aliquam est officiis odit delectus.
            </Typography>
        </TabPanel>
        <TabPanel value='2'>
            <Typography variant="body2">
            Lorem et consectetur adipisicing elit. Consequatur velit doloremque tempora, in vero autem ut minus qui voluptas odio dolorem maiores error vel similique aliquam est officiis odit delectus.
            </Typography>
        </TabPanel>
        <TabPanel value='3'>
            <Typography variant="body2">
            Lorem ipsum dolor sicing elit. Consequatur velit doloremque tempora, in vero autem ut minus qui voluptas odio dolorem maiores error vel similique aliquam est officiis odit delectus.
            </Typography>
        </TabPanel>
        <TabPanel value='4'>
            <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur velit doloremque tempora, in vero autem ut minus qui voluptas odio dolorem maiores error vel similique aliquam est officiis odit delectus.
            </Typography>
        </TabPanel>
        <TabPanel value='5'>
            <Typography variant="body2">
            Lorem et consectetur adipisicing elit. Consequatur velit doloremque tempora, in vero autem ut minus qui voluptas odio dolorem maiores error vel similique aliquam est officiis odit delectus.
            </Typography>
        </TabPanel>
        <TabPanel value='6'>
            <Typography variant="body2">
            Lorem ipsum dolor sicing elit. Consequatur velit doloremque tempora, in vero autem ut minus qui voluptas odio dolorem maiores error vel similique aliquam est officiis odit delectus.
            </Typography>
        </TabPanel>
    </TabContext>
  )
}

export default MuiTab