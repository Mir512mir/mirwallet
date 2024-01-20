
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBtn = ({text, active,onClick}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(prevState => !prevState);
    onClick(text)
    console.log("active", text);
    console.log('isActive:', isActive);
  };

  const styleNavBtn = {
    width:"145px",
    height:"49px",
    borderRadius: "10px",
    backgroundColor: active ? "#F8BB18" : "#F3F4F5",
    // text-align: center;
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "21px", /* 150% */
    
  }

  return (
    <button
      className="btn" 
      onClick={handleClick}
      style={styleNavBtn}
    >
      {text}
    </button>
  );
};

export default NavBtn;