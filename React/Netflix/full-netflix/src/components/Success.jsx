import React from 'react';
import {useLocation , useNavigate} from "react-router-dom"
const Success = () => {
    const {name , plan} = useLocation().state
    const navigate = useNavigate()
    return (
        <div style={{height:"87.3vh" , color:"white" , display:"flex", justifyContent:"center"}}> 
            <div style = {{width:"700px" , margin:"100px auto"}}>
                <h2>Congratulations, <span style={{color:"red"}}>{name}!</span></h2>
                <h1 style = {{fontSize:"25px"}}>You've registered for the <span style={{color:"red"}}>{plan}</span> plan, <br/>
                    but don't worry, we wont charge you until your trials up.
                </h1>
                <button onClick = {() => navigate("")}
                 style = {{width:"100%" ,textAlign:"center",padding:"10px" , backgroundColor :"#e50914" , outline:"none", color:"white", fontSize:"18px" , border:"none" ,cursor:"pointer"}}>START BROWSING</button>
            </div>
        </div>
    );
}

export default Success;
