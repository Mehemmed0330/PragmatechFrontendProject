import React, { Component } from 'react';
import { Link,NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return <div style={{}}>
        <div style={{position:"absolute",display:"flex",alignItems:"center",justifyContent:"space-around",padding:"40px 0px",width:"100%",zIndex:"1000"}}>
        <div className="logo">
            <Link to={'/'} style = {{
                color:"white",
                textDecoration:"none",
                fontSize:"28px",
                fontWeight:"600",
                

            }}>Architect</Link>
        </div>
        <div className="navbar">
            <NavLink to="/"
            style={({ isActive }) =>
            isActive ? {color:"blue",textDecoration:"none",fontSize:"20px",fontWeight:"500"} : {textDecoration:"none",color:"green",fontSize:"20px",fontWeight:"500"}
          }
            >Home</NavLink>
            <NavLink to= "/projects"
            style={({ isActive }) =>
            isActive ? {color:"blue",textDecoration:"none",fontSize:"20px",fontWeight:"500"} : {textDecoration:"none", color:"green", fontSize:"20px",fontWeight:"500"}
          }
            >Projects</NavLink>
            <NavLink to= "/services"
            style={({ isActive }) =>
            isActive ? {color:"blue",textDecoration:"none",fontSize:"20px",fontWeight:"500"} : {textDecoration:"none", color:"green" ,fontSize:"20px",fontWeight:"500"}
          }
            >Services</NavLink>
            <NavLink to= "/blog"
            style={({ isActive }) =>
            isActive ? {color:"blue",textDecoration:"none",fontSize:"20px",fontWeight:"500"} : {textDecoration:"none", color:"green" ,fontSize:"20px",fontWeight:"500"}
          }
            >Blog</NavLink>
        </div>
        </div>
        
    </div>;
  }
}
