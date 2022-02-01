import React, { createContext } from 'react';
import "../css/Stepthree.css"
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
export const Name = createContext();
const Stepthree = () => {
    const {plan} = useLocation()?.state
    const [accesslast, setaccesslast] = useState("#e50914 ");
    const changelast = (last)=>{
        setaccesslast(last)
    }
    const navigate = useNavigate()
    const [name, setname] = useState();
    return (
        <div style={{color:"white",width:"369.73px",margin:"80px auto"}}>
            <div className="threedtop">
                <h2>STEP 3 OF 3</h2>
                <h1>Sign up to start your free month</h1>
                <p>Create your Account</p>
            </div>
            
            <Name.Provider value={[name]}>
                {/* <Finish/> */}
            <form action="">
                <input type="text" placeholder='FirstName' onChange={(e)=>setname(e.target.value)} /> 
                <input type="text" placeholder='LastName'  /> 
                <input type="text" placeholder='Email'  /> 
                <input type="password" placeholder='Password' /> 
                <button onMouseEnter={()=>changelast("#f6121d")} onMouseOut={()=>changelast("#e50914")} 
                onClick={()=>navigate("/finish" , {state:{name:name,plan:plan}})
                } style={{backgroundColor:`${accesslast}`,padding:"14px 150px",transition:"all 0.5s ease",width:"401.73px",outline:"none",border:"none",color:"white",fontSize:"18px",cursor:"pointer"}}>CONFIRM</button>
            </form>
           </Name.Provider> 
            
        </div>
    );
}

export default Stepthree;
