import { Button, TextField, Typography,}from '@mui/material'
import axios from 'axios'
import React, {useState} from 'react'

const Moviehome = (props) => {
  
    var [movie,setMovie]=useState(props.data)
    const handleChange =(e)=>{
      setMovie({...movie,[Name]:value}) 
      console.log(movie)

    }
        
}
const saveData=()=>{
    console.log("Button Clicked")
    if(props.method === "post"){
    axios.post(" http://localhost:3000/students",movie)
    .then(response=>{
        alter("succesfully added")
      //in above line is used to inform the user or site the data is added
    })
    .catch(error=>{
        alter("failed")
    })
}
else if(props.method ==="put"){axios.put(" http://localhost:3000/students"+movie.id,movie)
.then((response)=>{
  console.log("put data"+response.data)
  alert("sucess")
  window.location.reload(false);
})
.catch((error)=>{
  console.log(err) 
})}
}

  return (
    <div>
      <Typography variant='h6'>Add movies details</Typography><br></br>
<br></br>
<TextField label="moviename" variant='outlined' name='year' value={movie.name}onchange={hsndlechange }

<TableCell><Button onclick={()=>deletestudent(value.id)}>delete</Button></TableCell>
<TableCell><Button color='sucess' onClick={()=>updateValue(value)}>Update</Button></TableCell>

  )

  }

export default Viewmovie
