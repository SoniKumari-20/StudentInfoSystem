import { TextField, Typography, Box, Button } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Form() {
  const [studentData, setStudentData] = useState({
    name : "",
    course : "",
    universityName : ""
  })
  const navigate = useNavigate()
  const handleAddData = (e)=>{
    const {name, value} = e.target;
    setStudentData({ ...studentData, [name] : value})
  }

  const handleSubmitData = async()=>{
    let fetchUrl = await fetch("http://localhost:4200/student",{
      method : "POST",
      body : JSON.stringify(studentData),
      headers:{
        "Content-Type" : "application/json"
      }
    })
    let result = await fetchUrl.json()
    console.log(result)
    if(result){
      navigate("/students")
    }
  }
 
  return (
    <Box sx={{marginTop:"2%"}}>
        <Typography variant='h3' color="#ef0e89" >Student Form </Typography>
        <Box sx={{marginTop:"5%"}}>
            <TextField placeholder='enter name' name="name" onChange={(e)=>handleAddData(e)}></TextField><br /> <br />
            <TextField placeholder='enter course' name="course" onChange={(e)=>handleAddData(e)}></TextField><br /> <br />
            <TextField placeholder='enter university Name' name="universityName" onChange={(e)=>handleAddData(e)}></TextField><br /> <br />
        </Box>
        <Button size='large' color='primary' variant='contained' onClick={()=>handleSubmitData()}>Submit </Button>
    </Box>
  )
}

