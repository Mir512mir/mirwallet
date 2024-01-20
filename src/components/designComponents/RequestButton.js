import { Button, Typography  } from "@mui/material";
import React from "react";

const requestBtnStyle = {
  backgroundColor: "#1A87DD",
  borderRadius: "10px",
  textTransform:"none",
  width: "150px",
  height: "49px",
  
}
const Requestbutton = ({ text, onClick, icon = null, disabled = false }) => {
    
  return (
  
    <Button  
      style={requestBtnStyle}
      startIcon={icon}
      onClick={onClick}
      disabled={disabled}
>
      <Typography sx={{ color: 'white' }} fontSize={12} >{text}</Typography>
    </Button>
  );
};

export default Requestbutton;
