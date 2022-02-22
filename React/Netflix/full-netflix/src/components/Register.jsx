import React from 'react';
import Success from "../images/Success.png"
import "../css/Register.css"
import {useNavigate} from "react-router-dom"

const Register = () => {
    const navigate = useNavigate()
    return (
        <div className = "Container">
            <div className="alert">
                <img src={Success} alt="" style = {{width:"50px"}} />
                <h4 style = {{fontSize:"13px"}}>Step <span>1</span> of <span>3</span> </h4>
                <h1 style = {{fontSize:"23px"}}>Choose Your Plan.</h1>
                <p style = {{fontSize:"17px"}}>Choose from any of our three plans,
                and you won't be charged until after
                your free month ends.</p>
                <button className = "btn" onClick = {() => navigate("/registration2")}>SEE THE PLANS</button>
            </div>
            
        </div>
    );
}

export default Register;
