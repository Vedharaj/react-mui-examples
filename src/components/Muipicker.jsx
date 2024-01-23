import React, { useState } from 'react'
import {DatePicker, TimePicker, DateTimePicker} from "@mui/x-date-pickers";
import {Stack, TextField} from "@mui/material";

const Muipicker = () => {
    const [selectedTime, setSelectedTime] = useState(null)
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedDateTime, setSelectedDateTime] = useState(null)
    return (
    <Stack spacing={4}>
        <DatePicker 
            label="Birthday" 
            value={selectedDate}
            onChange={(v)=>setSelectedDate(v)}
        />
        <TimePicker 
            label="Time Picker" 
            value={selectedTime}
            onChange={(v)=>setSelectedTime(v)}
        />
        <DateTimePicker 
            label="Date Time Picker" 
            value={selectedDateTime}
            onChange={(v)=>setSelectedDateTime(v)}
        />
    </Stack>
  )
}

export default Muipicker