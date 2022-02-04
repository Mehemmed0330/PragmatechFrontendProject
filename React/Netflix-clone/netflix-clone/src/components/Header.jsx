import React from 'react';
import "../css/Header.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo  from "../../src/image/logo.png"


const Header = () => {
  const [color, setcolor] = useState("#b81d24");
   
  const setStyle = (color) =>{
    setcolor(color)
  }
  return (
    <div>
        <div className="container">
          {/* <div className="logo">
            <img src={"./image/logo.png"} alt="" />
          </div> */}
          <Link to={"/"}> <img style={{ width: "5.781rem"}} src={logo} alt="" /> </Link>

          {/* <div className="access">
            <span>Register</span>
          </div> */}
          <div className="hoverLink">
          <Link style={{textDecoration:"none",color:`${color}` ,transition:"all 0.5s ease",fontWeight:"700"}} onMouseEnter = {()=>setStyle("#e81e25")} onMouseOut={()=>setStyle("#b81d24")} to={"/stepone"}>Register</Link>

          </div>
        </div>
    </div>
  );
}

export default Header;
