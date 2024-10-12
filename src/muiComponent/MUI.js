import React from "react";
import {
  Box,
  TextField,
  Card,
  Avatar,
  Divider,
  Button,
  Typography,
  Checkbox,
  Input,
  SvgIcon,
} from "@mui/material";

export const MUI = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          variant="filled"
          sx={{
            backgroundColor: "rgb(197, 198, 202)",
            borderRadius: "50px",
            color: "blue",
            fontSize: "15px",
          }}
          height="25px"
          width="150px"
        >
          Create Shipment
        </Box>
        <Typography variant="h4" component="h4" color="blue">
          hipdox
        </Typography>
        <Typography></Typography>
      </Box>

      <Box
        component="div"
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Box>
          <Card
            variant="filled"
            sx={{
              backgroundImage:
                "linear-gradient( rgb(50, 62, 228),white, white)",
              height: "300px",
              width: "300px",
              marginTop: "-350px",
            }}
          >
            <Avatar
              sx={{
                marginTop: "15px",
                marginLeft: "40%",
                height: "70px",
                width: "70px",
              }}
            />
            <Typography
              component="h5"
              color="blue"
              fontWeight="bold"
              marginTop="30px"
            >
              {" "}
              JOHNY WALKER{" "}
            </Typography>
            <Typography> 2 J EXPRESS PVT LTD</Typography>
            <Typography> USER ID : EZS-21732-AA1 </Typography>
            <Typography>IEC : 3264827</Typography>
            <Typography> Personal Info</Typography>
            <Typography
              component="h3"
              fontWeight="bolder"
              fontSize="20px"
              color="rgb(50, 62, 228)"
            >
              {" "}
              Company Info
            </Typography>
          </Card>
        </Box>
        <Box sx={{ width: "50%", textAlign: "left", marginTop: "20px" }}>
          <Typography variant="h5" component="h5" color="blue">
            Company Info
          </Typography>
          <Typography component="h6" size="small" sx={{ marginTop: "5px" }}>
            Company Name
          </Typography>
          <TextField label="ENTER COMPANY NAME" size="small" />
          <Typography component="h6" sx={{ marginTop: "10px" }}>
            Business Name
          </Typography>
          <TextField label="ENTER BUSINESS NAME" size="small" />{" "}
          <Checkbox></Checkbox> same as company name
          <Typography sx={{ marginTop: "10px" }}>Address Line 1</Typography>
          <TextField label="ENTER YOUR ADDRESS" size="small" />
          <Typography component="h6" sx={{ marginTop: "10px" }}>
            Address Line 2
          </Typography>
          <TextField label="ENTER YOUR ADDRESS" size="small" />
          <Box component="div" sx={{ display: "flex" }}>
            <Typography component="h6" sx={{ marginTop: "10px" }}>
              Country
            </Typography>
            <Typography
              component="h6"
              sx={{ marginTop: "10px", marginLeft: "200px" }}
            >
              State
            </Typography>
          </Box>
          <TextField label="ENTER COUNTRY" size="small" />
          <TextField
            label="ENTER STATE"
            size="small"
            sx={{ marginLeft: "30px", borderRadius: "20px" }}
          />
          <Typography component="h6" sx={{ marginTop: "10px" }}>
            ZIP code
          </Typography>
          <TextField label="ENTER ZIP CODE" size="small" />
          <Typography component="h6" sx={{ marginTop: "10px" }}>
            IEC code
          </Typography>
          <TextField label="ENTER YOUR NUMBER" size="small" />
          <Typography component="h6" sx={{ marginTop: "10px" }}>
            Mail id
          </Typography>
          <TextField label="ENTER MAIL ID" size="small" />
          <Typography component="h6" sx={{ marginTop: "10px" }}>
            Contact
          </Typography>
          <TextField label="ENTER YOUR CONTACT" size="small" />
          <Button
            variant="outlined"
            size="small"
            sx={{ marginTop: "10px", marginLeft: "75%", borderRadius: "10px" }}
          >
            save changes
          </Button>
        </Box>
      </Box>
    </div>
  );
};
