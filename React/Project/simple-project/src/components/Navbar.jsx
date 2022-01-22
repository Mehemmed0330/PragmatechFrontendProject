import React from 'react';
import { Link ,NavLink } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
            <div className="container">
                <div className="navbar">
                    <Link style={{ textDecoration: 'none', color:"red " , padding:"12px 8px", backgroundColor:"black"}} to={"/"}>Home</Link>
                    <Link style={{textDecoration: 'none', color:"red " , padding:"12px 8px", backgroundColor:"black"}} to ={"/contact"}>Contact</Link>
                    <NavLink
                        style={({ isActive }) =>
                        isActive ? {
                            color:"red"
                            }  : undefined
                        }
                        to="/team">Team</NavLink>          

          
                 </div>
            </div>
        </div>
    );
}

export default Navbar;
