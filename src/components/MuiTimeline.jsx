import React from 'react'
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineSeparator,
    TimelineDot,
    TimelineContent,
    TimelineOppositeContent
} from "@mui/lab";

const MuiTimeline = () => {
  return (
    <Timeline position='alternate'>
        <TimelineItem>
            <TimelineOppositeContent color='primary'>
                09:10 AM
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
                <TimelineContent>City A</TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent color='primary'>
                10:00 AM
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color='secondary' variant='outlined'/>
                <TimelineConnector />
            </TimelineSeparator>
                <TimelineContent>City B</TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent color='primary'>
                10:30 AM
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot />
            </TimelineSeparator>
                <TimelineContent>City C</TimelineContent>
        </TimelineItem>
    </Timeline>
    )
}

export default MuiTimeline