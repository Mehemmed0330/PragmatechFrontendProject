import React from 'react';
import "../css/Steptwo.css"
import { useState } from 'react';

const Steptwo = () => {
    const [btnback, setbtnback] = useState("#e50914");
    const actionBack = (backtwo) =>{
        setbtnback(backtwo)
    }
    const [isChossen, setisChossen] = useState(false);
    const [isChossensec, setisChossensec] = useState(false);
    const [isChossenthre, setisChossenthre] = useState(false);

    
    return (
        <div style={{padding:"10px 100px"}}>
            <div className="toptext">
                <h2>STEP 2 OF 3</h2>
                <h1>Choose a plan that's right for you..</h1>
                <p>Downgrade or upgrade at any time</p>
            </div>
            <div className="boxes">
                <div className="box" onClick={()=>{setisChossen(true)}} style = {{backgroundColor:isChossen===true ? "rgb(229, 9, 20)" :""}}><span>Basic</span></div>
                <div className="box" onClick={()=>{setisChossensec(true)}} style={{backgroundColor:isChossensec ===true ?"rgb(229, 9, 20)" :"" }}><span>Standart</span></div>
                <div className="box"  onClick={()=>{setisChossenthre(true)}} style={{backgroundColor:isChossenthre ===true ?"rgb(229, 9, 20)" :"" }}><span>Premium</span></div>
            </div>
            <div className="table">
                <table>
                    <tr>
                        <th>Monthly price after free month ends</th>
                        <td onClick={()=>{setisChossen(true)}} style = {{color:isChossen===true ? "rgb(229, 9, 20)" :""}}>$7.99</td>
                        <td onClick={()=>{setisChossensec(true)}} style={{color:isChossensec ===true ?"rgb(229, 9, 20)" :"" }}>$10.99</td>
                        <td onClick={()=>{setisChossenthre(true)}} style={{color:isChossenthre ===true ?"rgb(229, 9, 20)" :"" }}>$13.99</td>
                    </tr>
                    <tr>
                        <th>HD available</th>
                        <td onClick={()=>{setisChossen(true)}} style = {{color:isChossen===true ? "rgb(229, 9, 20)" :""}}>No</td>
                        <td onClick={()=>{setisChossensec(true)}} style={{color:isChossensec ===true ?"rgb(229, 9, 20)" :"" }}>Yes</td>
                        <td onClick={()=>{setisChossenthre(true)}} style={{color:isChossenthre ===true ?"rgb(229, 9, 20)" :"" }}>Yes</td>
                    </tr>
                    <tr>
                        <th>Ultra HD available</th>
                        <td onClick={()=>{setisChossen(true)}} style = {{color:isChossen===true ? "rgb(229, 9, 20)" :""}}>No</td>
                        <td onClick={()=>{setisChossensec(true)}} style={{color:isChossensec ===true ?"rgb(229, 9, 20)" :"" }}>No</td>
                        <td onClick={()=>{setisChossensec(true)}} style={{color:isChossensec ===true ?"rgb(229, 9, 20)" :"" }}>Yes</td>
                    </tr>
                    <tr>
                        <th>Screens you can watch on at the same time</th>
                        <td onClick={()=>{setisChossen(true)}} style = {{color:isChossen===true ? "rgb(229, 9, 20)" :""}}>1</td>
                        <td onClick={()=>{setisChossensec(true)}} style={{color:isChossensec ===true ?"rgb(229, 9, 20)" :"" }}>2</td>
                        <td onClick={()=>{setisChossensec(true)}} style={{color:isChossensec ===true ?"rgb(229, 9, 20)" :"" }}>4</td>
                    </tr>
                    <tr>
                        <th>Watch on your laptop, TV, phone and tablet</th>
                        <td onClick={()=>{setisChossen(true)}} style = {{color:isChossen===true ? "rgb(229, 9, 20)" :""}}>Yes</td>
                        <td onClick={()=>{setisChossensec(true)}} style={{color:isChossensec ===true ?"rgb(229, 9, 20)" :"" }}>Yes</td>
                        <td onClick={()=>{setisChossensec(true)}} style={{color:isChossensec ===true ?"rgb(229, 9, 20)" :"" }}>Yes</td>
                    </tr><tr>
                        <th>Unlimited movies and TV shoes</th>
                        <td onClick={()=>{setisChossen(true)}} style = {{color:isChossen===true ? "rgb(229, 9, 20)" :""}}>Yes</td>
                        <td onClick={()=>{setisChossensec(true)}} style={{color:isChossensec ===true ?"rgb(229, 9, 20)" :"" }}>Yes</td>
                        <td onClick={()=>{setisChossensec(true)}} style={{color:isChossensec ===true ?"rgb(229, 9, 20)" :"" }}>Yes</td>
                    </tr><tr>
                        <th>Cancel anytime</th>
                        <td onClick={()=>{setisChossen(true)}} style = {{color:isChossen===true ? "rgb(229, 9, 20)" :""}}>Yes</td>
                        <td onClick={()=>{setisChossensec(true)}} style={{color:isChossensec ===true ?"rgb(229, 9, 20)" :"" }}>Yes</td>
                        <td onClick={()=>{setisChossensec(true)}} style={{color:isChossensec ===true ?"rgb(229, 9, 20)" :"" }}>Yes</td>
                    </tr><tr>
                        <th>First month free</th>
                        <td onClick={()=>{setisChossen(true)}} style = {{color:isChossen===true ? "rgb(229, 9, 20)" :""}}>Yes</td>
                        <td onClick={()=>{setisChossensec(true)}} style={{color:isChossensec ===true ?"rgb(229, 9, 20)" :"" }}>Yes</td>
                        <td onClick={()=>{setisChossensec(true)}} style={{color:isChossensec ===true ?"rgb(229, 9, 20)" :"" }}>Yes</td>
                    </tr>
                </table>
            </div>
            <div className="acceesstwo">
                <button style={{backgroundColor:`${btnback}`,transition:"all 0.5s ease",borderRadius:"3px",fontSize:"17px",padding:"15px 100px",outline:"none",border:"none",color:"white" ,cursor:"pointer"}} onMouseEnter = {()=>actionBack("#f6121d")} onMouseOut = {()=>actionBack("#e50914")}>Contunie</button>
            </div>
        </div>
    );
}

export default Steptwo;
