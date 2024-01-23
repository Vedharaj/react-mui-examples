import React, { useState } from 'react'
import {
    Checkbox,
    FormControl,
    FormLabel,
    FormGroup,
    FormControlLabel,
    Box,
} from '@mui/material'

import {
  FaBookmark,
  FaRegBookmark,
  FaRegCircle,
  FaCircle
} from 'react-icons/fa'

const MuiCheckbox = () => {
  const [value, setValue] = useState(false)
  const [skills, setSkills] = useState([])

  const handleSkillChange = (e)=>{
    const val = e.target.value
    const index = skills.indexOf(val)
    if(index === -1){
      setSkills(ps=>[...ps, val])
    }else{
      setSkills(ps=>ps.filter(i=> i !== val))
    }
    console.log(skills);
  }
  return (
    <Box>
      <Box>
        <FormControlLabel 
          control={<Checkbox disableTouchRipple value={value} onChange={(e)=>setValue(e.target.value)}/>} 
          label="I accept terms and conditions"
        />
        <Checkbox
          size='large'
          color='success'
          icon={<FaRegBookmark />}
          value={value} 
          onChange={(e)=>setValue(e.target.value)}
          checkedIcon={<FaBookmark />}
          disableRipple
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel id="skill">Skill</FormLabel>
          <FormGroup
            aria-labelledby='skill'
            row
          >
          <FormControlLabel
            control={
              <Checkbox
                icon={<FaRegCircle />}
                checkedIcon={<FaCircle />}
                checked={skills.includes('HTML')}
                onChange={handleSkillChange}
                disableTouchRipple
              />
            }
            value={'HTML'}
            label="HTML"
          />
          <FormControlLabel 
            control={
              <Checkbox 
                checked={skills.includes('CSS')}
                onChange={handleSkillChange}
                disableTouchRipple
              />
            }
            value={'CSS'}
            label="CSS"
          />
          <FormControlLabel 
            control={
              <Checkbox 
                checked={skills.includes('JS')}
                onChange={handleSkillChange}
                disableTouchRipple
              />
            }
            value={'JS'} 
            label="JS"
          />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  )
}

export default MuiCheckbox