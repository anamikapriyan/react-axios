import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Teachers = () => {
    var [Teachers, setTeachers] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3005/Teachers")
            .then(response => {
                console.log(response)
                setTeachers(Teachers = response.data)
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
                <TableCell>class</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {Teachers.map((value, index) => {
                return <TableRow>
                    <TableCell>{value.id}</TableCell>
                    <TableCell>{value.name}</TableCell>
                    <TableCell>{value.class}</TableCell>
                </TableRow>
            })}
        </TableBody>
    </Table>
</TableContainer>

    </div>
  )
}

export default Teachers
