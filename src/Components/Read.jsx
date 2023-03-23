import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Read = () => {
    var[update,setUpdate]=useState(false)
    var [students, setstudents] = useState([])
    var[singlevalue,setstudents]=useState([])
    
    useEffect(() => {
        axios.get("http://localhost:3005/students")
            .then(response => {
                console.log(response)
                setstudents(students = response.data)
            })
            .catch(err => console.log(err))
    }, [])
    const updateValue =(value)=>{
        setSinglevalue(value);
        setUpdate(true);

    }
    const deletestudent=(id)=>{
        console.log("delete clicked"+id)
        axios.delete("http://localhost:3005/students/"+id)
        .then(response=>{
            alert("deleted")
            window.location.reload(false)
        })
    }
    var finalJSX = <TableContainer>
                 <Table>
                 <TableHead>
            
                 <TableRow>
                    <TableCell>id </TableCell>
                    <TableCell>name</TableCell>
                    <TableCell>grade</TableCell>
                    <TableCell>delete</TableCell>
                    <TableCell>Update</TableCell>
                </TableRow>
           
           
            </TableHead> <TableBody>
                {students.map((value, index) => {
                    return <TableRow>
                        <TableCell>{value.id}</TableCell>
                        <TableCell>{value.name}</TableCell>
                        <TableCell>{value.grade}</TableCell>
                        <TableCell><Button onclick={()=>deletestudent(value.id)}>delete</Button></TableCell>
                        <TableCell><Button color='sucess' onClick={()=>updateValue(value)}>Update</Button></TableCell>
                         </TableRow>
                })}
                </TableBody>
        </Table>
    </TableContainer>
    
    return (
        <div>
        <br></br>
        <br></br>    
        </div>
    )
}
export default Read
