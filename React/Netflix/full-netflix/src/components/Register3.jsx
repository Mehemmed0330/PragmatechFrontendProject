import React from 'react';
import "../css/Register3.css"
import {useNavigate , useLocation} from "react-router-dom"
import {useState} from "react"

const Register3 = () => {
    const {plan} = useLocation()?.state
    const navigate = useNavigate()
    const [name, setName] = useState();
    
    
    
    return (
        <div style = {{color: "#e5e5e5" , padding :"0px 4%" , height:"87.3vh", display:"flex" , alignItems:"center", justifyContent:"center"}}>
            <div className="container-register3">
                <div className="top-text">
                    <h2>STEP 3 OF 3</h2>
                    <p>Sign up to start your free month</p>
                    <h4>Create your Account</h4>
                </div>
                <div className="form">
                    <input type="text"  placeholder='FirstName' onChange = {e => setName(e.target.value)} /> 
                    <input type="text" placeholder = 'LastName'/> 
                    <input type="password" placeholder='Password'/> 
                    <input type="text" placeholder='Email'/> 
                    <button className ="btn3" onClick = {() => navigate("/success", {state:{name:name,plan:plan}})}>CONFIRM</button>
                    
                    
                </div>
            </div>
        </div>
    );
}

export default Register3;
