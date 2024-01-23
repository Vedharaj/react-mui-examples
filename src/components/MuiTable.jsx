import React from 'react'
import {
    Paper,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TableContainer
} from "@mui/material";

import {data} from "../data";

const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{maxHeight: '300px'}}>
        <Table stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>First name</TableCell>
                    <TableCell>Last name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell align='center'>Gender</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map(i=>(
                    <TableRow key={i.id}>
                        <TableCell>{i.first_name}</TableCell>
                        <TableCell>{i.last_name}</TableCell>
                        <TableCell>{i.email}</TableCell>
                        <TableCell align='center'>{i.gender}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default MuiTable