import React, { useState } from 'react'
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography
} from '@mui/material'

import {MdOutlineArrowDropDown} from 'react-icons/md';

const MuiAccordion = () => {
    const [isExpanded, setIsExpanded] = useState(null)
    console.log(isExpanded)
  return (
    <div>
        <Accordion
            expanded={isExpanded === 'panel1'}
            onChange={(e,v)=>setIsExpanded(ps=>ps !== 'panel1' ?'panel1':v)}
        >
            <AccordionSummary
                id="panel1-header"
                aria-controls='panel1-control'
                expandIcon={<MdOutlineArrowDropDown fontSize={'40px'}/>}
            >
                <Typography variant='h5'>Accodtion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant='body2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nihil voluptatibus eius voluptatem, 
                    adipisci ullam corrupti, dolores accusamus quo aut
                     aliquam quidem quibusdam vitae. Optio!
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion
            expanded={isExpanded === 'panel2'}
            onChange={(e,v)=>setIsExpanded(ps=>ps !== 'panel2' ?'panel2':v)}
        >
            <AccordionSummary
                id="panel2-header"
                aria-controls='panel2-control'
                expandIcon={<MdOutlineArrowDropDown fontSize={'40px'}/>}
            >
                <Typography variant='h5'>Accodtion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant='body2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nihil voluptatibus eius voluptatem, 
                    adipisci ullam corrupti, dolores accusamus quo aut
                     aliquam quidem quibusdam vitae. Optio!
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion
            expanded={isExpanded === 'panel3'}
            onChange={(e,v)=>setIsExpanded(ps=>ps !== 'panel3' ?'panel3':v)}
        >
            <AccordionSummary
                id="panel3-header"
                aria-controls='panel3-control'
                expandIcon={<MdOutlineArrowDropDown fontSize={'40px'}/>}
            >
                <Typography variant='h5'>Accodtion 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant='body2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nihil voluptatibus eius voluptatem, 
                    adipisci ullam corrupti, dolores accusamus quo aut
                     aliquam quidem quibusdam vitae. Optio!
                </Typography>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}

export default MuiAccordion