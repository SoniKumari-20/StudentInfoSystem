import { TextField, Typography, Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
export default function UpdateStudent() {
  const [editStudent, setEditStudent] = useState({
    name: "",
    course: "",
    universityName: "",
  });
  const param = useParams();
  const navigate = useNavigate()
  //   console.log(editStudent)

  const handleAddData = (e) => {
    const { name, value } = e.target;
    setEditStudent({ ...editStudent, [name]: value });
  };

  const findStudent = async (id) => {
    let result = await fetch("http://localhost:4200/student/" + param?.id);
    result = await result.json();
    setEditStudent({
      name: result?.name,
      course: result?.course,
      universityName: result?.universityName,
    });
  };

  useEffect(() => {
    findStudent(param?.id);
  }, []);

//   console.log(editStudent);

  const handleUpdate = async (id) => {
    let result = await fetch("http://localhost:4200/student/" + param?.id, {
      method: "PUT",
      body: JSON.stringify(editStudent),
      headers : {
        "Content-Type" : "application/json"
      }
    });
    result = await result.json();
    // console.log(result);
    if(result){
      navigate("/students")
    }
  };
  return (
    <Box sx={{ marginTop: "2%" }}>
      {/* #ef0e89 */}
      <Typography variant="h3" sx={{color:"#8501f9"}}>Update Student's </Typography>
      <Box sx={{ marginTop: "5%" }}>
        <TextField
          placeholder="enter name"
          name="name"
          value={editStudent?.name}
          onChange={(e) => handleAddData(e)}
        ></TextField>
        <br /> <br />
        <TextField
          placeholder="enter course"
          name="course"
          value={editStudent?.course}
            onChange={(e) => handleAddData(e)}
        ></TextField>
        <br /> <br />
        <TextField
          placeholder="enter university Name"
          name="universityName"
          value={editStudent?.universityName}
            onChange={(e) => handleAddData(e)}
        ></TextField>
        <br /> <br />
      </Box>
      <Button color="error" variant="filled" onClick={() => handleUpdate()}>Submit </Button>
    </Box>
  );
}
