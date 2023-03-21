import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Read = () => {
    var [students, setstudents] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3005/students")
            .then(response => {
                console.log(response)
                setstudents(students = response.data)
            })
            .catch(err => console.log(err))
    }, [])
    
    return (
        <div>
            <Typography >welcome to my App</Typography>

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id </TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Grade</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map((value, index) => {
                            return <TableRow>
                                <TableCell>{value.id}</TableCell>
                                <TableCell>{value.name}</TableCell>
                                <TableCell>{value.grade}</TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}
export default Read
