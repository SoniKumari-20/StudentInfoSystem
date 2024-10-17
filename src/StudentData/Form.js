import { TextField, Typography, Box, Button } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./style.css"

export default function Form() {
  const [studentData, setStudentData] = useState({
    name : "",
    course : "",
    universityName : ""
  })
  const navigate = useNavigate()
  const handleAddData = (e)=>{
    const {name, value} = e.target;
    // console.log(name, value)
    setStudentData({ ...studentData, [name] : value})
  }

  const handleSubmitData = async()=>{
    if(!studentData?.name === "" || !studentData?.course === "" || !studentData?.universityName === ""){
      alert("enter student Data")
    }else{
      let fetchUrl = await fetch("http://localhost:4200/student",{
        method : "POST",
        body : JSON.stringify(studentData),
        headers:{
          "Content-Type" : "application/json"
        }
      })
      let result = await fetchUrl.json()
      if(result){
        navigate("/students")
      }
    }  
  }
 
  return (
    <>
    <div className='student'>
    <h2 data-text="Studenthub..." >Studenthub...</h2>
    </div>
    <Box sx={{width:"35%",}} className="form">
        <Box className="form_inner">
        <Typography variant='h5' color="white" >Student Form </Typography><br />
            <TextField placeholder='enter name' error={studentData?.name === ""} name="name" onChange={(e)=>handleAddData(e)}></TextField><br /> <br />
            <TextField placeholder='enter course' name="course" error={studentData?.course === ""} onChange={(e)=>handleAddData(e)}></TextField><br /> <br />
            <TextField placeholder='enter university Name' error={studentData?.universityName === ""} name="universityName" onChange={(e)=>handleAddData(e)}></TextField><br /> <br />
            <Button size='large'  variant='contained' sx={{marginBottom : "2%", backgroundColor:"black"}} onClick={()=>handleSubmitData()}>Submit </Button>
        </Box>
    </Box>
    </>
  )
}