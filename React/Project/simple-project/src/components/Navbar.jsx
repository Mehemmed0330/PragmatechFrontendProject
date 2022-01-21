import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
            <div className="container">
                <div className="navbar">
                    <Link to={"/"}>Home</Link>
                    <Link to ={"/contact"}>Contact</Link>
                    <Link to ={'/team'}>Team</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
