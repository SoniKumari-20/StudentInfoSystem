import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
export default function Todo() {
  const [student, setStudent] = useState([]);

  const fetchStudentData = async () => {
    try {
      let fetchStudent = await fetch("http://localhost:4200/studentList");
      fetchStudent = await fetchStudent.json();
      setStudent(fetchStudent);
      console.log(fetchStudent);
    } catch {
      console.log("No Data Found");
    }
  };
  useEffect(() => {
    fetchStudentData();
  }, []);

  const handleDelete = async (id) => {
    let result = await fetch("http://localhost:4200/student/" + id, {
      method: "DELETE",
    });
    result = await result.json();
    if (result) {
      fetchStudentData();
    }
  };

  return (
    <>
    <Link to={"/"}>
    <Typography  sx={{alignSelf : "left", margin:"1%"}}>Go To Student Form</Typography>
    </Link>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" color="#ef0e89" sx={{marginTop:"2%"}}>
        Student's List
      </Typography>
      {student ? (
        <TableContainer component={Paper} sx={{ width: "75%", marginTop:"2%" }}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Roll No</TableCell>
                <TableCell align="center">Student's Name</TableCell>
                <TableCell align="center">Course</TableCell>
                <TableCell align="center">University's Name</TableCell>
                <TableCell align="center">Edit</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {student?.map((item, id) => (
                <TableRow
                  key={id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{id+1}</TableCell>
                  <TableCell component="th" scope="item">
                    {item.name}
                  </TableCell>
                  <TableCell align="left">{item.course}</TableCell>
                  <TableCell align="center">{item.universityName}</TableCell>
                  <TableCell align="center">
                    <Link to={"/students/" + item?._id}>
                      <Button variant="contained" color= "secondary" size="small">
                        Edit
                      </Button>
                    </Link>
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      onClick={() => handleDelete(item?._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <>
          <Typography variant="h4">Sorry!! NO Data Found</Typography>
        </>
      )}
    </Box>
    </>
  );
}
