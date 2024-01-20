import { Button, Typography  } from "@mui/material";
import React from "react";

const sendBtnStyle = {
  backgroundColor: "#F8BB18",
  borderRadius: "10px",
  padding: "10px 25px",
  textTransform:"none",
  width: "100px",
  height: "40px",
}

const Sendbtn = ({ text, onClick, icon = null, disabled = false }) => {
    
  return (
  
    <Button  
      style={sendBtnStyle}
      startIcon={icon}
      onClick={onClick}
      disabled={disabled}

>
      <Typography sx={{ color: '#1A1A1A' }} fontSize={12} >{text}</Typography>
    </Button>
  );
};

export default Sendbtn;
