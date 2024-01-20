import { Button, Typography } from "@mui/material";
import React from "react";

const customBtnStyle = {
  backgroundColor: "#1A87DD",
  color: "white",
  borderRadius: "10px",
  padding: "10px 25px",
  textTransform:"none",
  textAlign: "center",
  width: "315px",
  height:"49px"

};

const PrimaryBtn = ({ text, onClick, icon = null, disabled = false }) => {
  return (
    <Button
      style={customBtnStyle}
      startIcon={icon}
      onClick={onClick}
      disabled={disabled}
    >
      <Typography fontSize={14}>{text}</Typography>
    </Button>
  );
};

export default PrimaryBtn;
