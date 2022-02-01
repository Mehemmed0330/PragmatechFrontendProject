import React from 'react';
import "../css/Steptwo.css"
import { useState , useEffect } from 'react';
import {useNavigate} from "react-router-dom"

const Steptwo = () => {
    const [btnback, setbtnback] = useState("#e50914");
    const actionBack = (backtwo) =>{
        setbtnback(backtwo)
    }
    const [isChossen, setisChossen] = useState(false);
    const [isChossensec, setisChossensec] = useState(false);
    const [isChossenthre, setisChossenthre] = useState(false);
    // const [msj, setmsj] = useState(false);

    // const isalert = () => {
    //     if(isChossen === false && isChossensec === false && isChossenthre === false){
    //         setmsj(alert("You must select a plan to continue.") === msj)
    //     }
    //     else{
            
    //     }
            
       
    // }
    const navigate = useNavigate();

    
    useEffect(() => {
        if (isChossen) {
            setisChossensec(false)
            setisChossenthre(false)
        }
    }, [isChossen]);

    useEffect(() => {
        if (isChossensec) {
            setisChossen(false)
            setisChossenthre(false)
        }
    }, [isChossensec]);

    useEffect(() => {
        if (isChossenthre) {
            setisChossen(false)
            setisChossensec(false)
        }
    }, [isChossenthre]);



    return (
        <div style={{padding:"10px 100px"}}>
            <div className="toptext">
                <h2>STEP 2 OF 3</h2>
                <h1>Choose a plan that's right for you..</h1>
                <p>Downgrade or upgrade at any time</p>
            </div>
            <div className="boxes">
                <div className="box" onClick={()=>{setisChossen(true)}} style = {{backgroundColor:isChossen===true ? "rgb(229, 9, 20)" :"" }}><span>Basic</span></div>
                <div className="box" onClick={()=>{setisChossensec(true)}} style={{backgroundColor:isChossensec ===true ?"rgb(229, 9, 20)" :""}}><span>Standart</span></div>
                <div className="box" onClick={()=>{setisChossenthre(true)}} style={{backgroundColor:isChossenthre ===true ?"rgb(229, 9, 20)" :"" }}><span>Premium</span></div>
            </div>
            <div className="table">
                <table>
                    <tr>
                        <th>Monthly price after free month ends</th>
                        <td  style = {{color:isChossen===true ? "rgb(229, 9, 20)" :""}}>$7.99</td>
                        <td  style={{color:isChossensec ===true ?"rgb(229, 9, 20)" :"" }}>$10.99</td>
                        <td  style={{color:isChossenthre ===true ?"rgb(229, 9, 20)" :"" }}>$13.99</td>
                    </tr>
                    <tr>
                        <th>HD available</th>
                        <td style = {{color:isChossen===true ? "rgb(229, 9, 20)" :""}}>No</td>
                        <td style={{color:isChossensec ===true ?"rgb(229, 9, 20)" :"" }}>Yes</td>
                        <td style={{color:isChossenthre ===true ?"rgb(229, 9, 20)" :"" }}>Yes</td>
                    </tr>
                    <tr>
                        <th>Ultra HD available</th>
                        <td style = {{color:isChossen===true ? "rgb(229, 9, 20)" :""}}>No</td>
                        <td style={{color:isChossensec ===true ?"rgb(229, 9, 20)" :"" }}>No</td>
                        <td style={{color:isChossenthre ===true ?"rgb(229, 9, 20)" :"" }}>Yes</td>
                    </tr>
                    <tr>
                        <th>Screens you can watch on at the same time</th>
                        <td style = {{color:isChossen===true ? "rgb(229, 9, 20)" :""}}>1</td>
                        <td style={{color:isChossensec ===true ?"rgb(229, 9, 20)" :"" }}>2</td>
                        <td style={{color:isChossenthre ===true ?"rgb(229, 9, 20)" :"" }}>4</td>
                    </tr>
                    <tr>
                        <th>Watch on your laptop, TV, phone and tablet</th>
                        <td style = {{color:isChossen===true ? "rgb(229, 9, 20)" :""}}>Yes</td>
                        <td style={{color:isChossensec ===true ?"rgb(229, 9, 20)" :"" }}>Yes</td>
                        <td style={{color:isChossenthre ===true ?"rgb(229, 9, 20)" :"" }}>Yes</td>
                    </tr><tr>
                        <th>Unlimited movies and TV shoes</th>
                        <td style = {{color:isChossen===true ? "rgb(229, 9, 20)" :""}}>Yes</td>
                        <td style={{color:isChossensec ===true ?"rgb(229, 9, 20)" :"" }}>Yes</td>
                        <td style={{color:isChossenthre ===true ?"rgb(229, 9, 20)" :"" }}>Yes</td>
                    </tr><tr>
                        <th>Cancel anytime</th>
                        <td style = {{color:isChossen===true ? "rgb(229, 9, 20)" :""}}>Yes</td>
                        <td style={{color:isChossensec ===true ?"rgb(229, 9, 20)" :"" }}>Yes</td>
                        <td style={{color:isChossenthre ===true ?"rgb(229, 9, 20)" :"" }}>Yes</td>
                    </tr><tr>
                        <th>First month free</th>
                        <td style = {{color:isChossen===true ? "rgb(229, 9, 20)" :""}}>Yes</td>
                        <td style={{color:isChossensec ===true ?"rgb(229, 9, 20)" :"" }}>Yes</td>
                        <td style={{color:isChossenthre ===true ?"rgb(229, 9, 20)" :"" }}>Yes</td>
                    </tr>
                </table>
            </div>
            <div className="acceesstwo">
                <button onClick={()=>{
                    navigate(isChossen === false && isChossensec === false && isChossenthre === false? alert("hi") :"/stepthree",{
                        state: isChossen === false && isChossensec === false && isChossenthre === false ? undefined : {
                        plan: isChossen ? "Basic" : isChossensec ? "Standart" : "Premium"
                        }
                    })
                }} style={{backgroundColor:`${btnback}`,transition:"all 0.5s ease",borderRadius:"3px",fontSize:"17px",padding:"15px 100px",outline:"none",border:"none",color:"white" ,cursor:"pointer"}} onMouseEnter = {()=>actionBack("#f6121d")} onMouseOut = {()=>actionBack("#e50914")}>Contunie</button>
            </div>
        </div>
    );
}

export default Steptwo;
