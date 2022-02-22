import React from 'react';
import Logo from "../images/Logo.png"
import "../css/Header.css"
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="head">
                <Link to = "/" ><img src={Logo} alt="" style = {{width:"92.5px", display:"inline-bloc"}}/></Link>
                <Link to = "/registration" style = {{textDecoration:"none"}}><span className="register">Register</span></Link>
            </div>
        </div>
    );
}

export default Header;
