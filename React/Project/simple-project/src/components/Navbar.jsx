import React from 'react';
import { Link ,NavLink } from 'react-router-dom';
import "./Navbar.css"
import { useState } from 'react';


const Navbar = () => {
    const [link, setLink] = useState("hello");

    const click = ()=>{
        setLink(link)
    }
    return (
        <div>
            <div className="container">
                <div className="navbar">
                    <Link style={{ textDecoration: 'none', color:"red " , padding:"12px 8px", backgroundColor:"black"}} to={"/"}>Home</Link>
                    <Link onClick={click} style={{textDecoration: 'none', color:"red " , padding:"12px 8px", backgroundColor:"black"}} to ={"/contact"}>Contact</Link>
                    <NavLink
                        style={({ isActive }) =>
                        ({
                            color:isActive ? "red":undefined,
                            backgroundColor:"green"
                        })
                           
                        }
                        to="/team">Team
                    </NavLink>  
                      
                       {/* { <div style={{
                            backgroundColor:"green",
                            width:"15px",
                            height:"15px"
                        }}>{setLink(link)}</div>
                        } */}
                        {link}
                        
                 </div>
            </div>
        </div>
    );
}

export default Navbar;
