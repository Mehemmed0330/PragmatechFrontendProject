import React from 'react';
import "../css/Stepone.css"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import access from "../../src/image/access.png"
const Stepone = () => {
    const [btncolor, setbtncolor] = useState("#f6121d");

    const changeColor = (background)=>{
        setbtncolor(background);
    }
    const navigate = useNavigate();

    return (
        <div style={{color:"white"}}>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"25%",margin:"150px auto"}}>
                <div className="image">
                    <img src={access} alt="" />
                </div>
                <div className="text">
                    <h2>STEP 1 OF 3</h2>
                    <h1>Choose Your Plan.</h1>
                    <p>Choose from any of our three plans,
                        and you won't be charged until after
                        your free month ends.
                    </p>
                    <button style={{backgroundColor:`${btncolor}`,transition:"all 0.5s ease",cursor:"pointer",fontSize:"17px",color:"white",padding:" 10px 50px",borderRadius:"3px",border:"none",outline:"none"}} onMouseEnter={()=>changeColor("#e50914")} onMouseOut = {()=>changeColor("#f6121d")} onClick ={
                        ()=> navigate("/steptwo")
                    }>SEE THE PLANS</button>
                </div>
            </div>
        </div>
    );
}

export default Stepone;
