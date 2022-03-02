import React from 'react';
import Logo from "../images/Logo.png"
import "../css/Header.css"
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { setSearch } from '../components/redux/slices/search'

const Header = () => {


    const dispatch = useDispatch()

    const change = (e) => {
        const value = e.target.value

        dispatch(setSearch(value))
    }
    return (
        <div className="header">
            <div className="head">
                <Link to="/" ><img src={Logo} alt="" style={{ width: "92.5px", display: "inline-bloc" }} /></Link>
                <input type="text"  onChange={change}/>
                <Link to = "/registration" style = {{textDecoration:"none"}}><span className="register">Register</span></Link>
            </div>
        </div>
    );
}

export default Header;
