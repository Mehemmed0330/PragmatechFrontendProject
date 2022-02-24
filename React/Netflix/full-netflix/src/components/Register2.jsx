import React from 'react';
import "../css/Register2.css"
import {useState , useEffect } from "react"
import {useNavigate} from "react-router-dom"

const Register2 = () => {
    const [color, setColor] = useState("#ef6b72");
    const [font , setFont] = useState("#a6a6a6");

    const [colorStandard, setColorStandard] = useState("#ef6b72");
    const [fontStandard, setFontStandard] = useState("#a6a6a6");

    const [colorPremium, setColorPremium] = useState("#ef6b72");
    const [fontPremium, setFontPremium] = useState("#a6a6a6");
    

    // const pass = () =>{
    //     if(color === "rgb(229, 9, 20" || colorStandard === "rgb(229, 9, 20" || colorPremium === "rgb(229, 9, 20" ) {
    //         navigate("/registration3")
    //     }else{
    //         alert("You must select a plan to continue")
    //     }
    // }

    const changeColor = ()=>{
        setColor("rgb(229, 9, 20")
        setFont("rgb(229, 9, 20")
    }

    const changeColorStandard = () => {
        setColorStandard("rgb(229, 9, 20")
        setFontStandard("rgb(229, 9, 20")
    }

    const changeColorPremium = ()=>{
        setColorPremium("rgb(229, 9, 20");
        setFontPremium("rgb(229, 9, 20")
    }



    useEffect(() => {
        if(color === "rgb(229, 9, 20"){
            setColorPremium("#ef6b72")
            setColorStandard("#ef6b72")
            setFontStandard("#a6a6a6")
            setFontPremium("#a6a6a6")

         
        }
        
    }, [color]);

    useEffect(() => {
        if(colorStandard === "rgb(229, 9, 20"){
            setColorPremium("#ef6b72")
            setColor("#ef6b72")
            setFont("#a6a6a6")
            setFontPremium("#a6a6a6")     
        }
    }, [colorStandard]);

    useEffect(() => {
        if(colorPremium === "rgb(229, 9, 20"){
            setColor("#ef6b72")
            setColorStandard("#ef6b72")
            setFont("#a6a6a6")
            setFontStandard("#a6a6a6")
        }
    }, [colorPremium]);
    
    const navigate = useNavigate()

    return (
        <div style = {{width:"1100px", margin:"0px auto",height:"87vh"}}>
            <div className="second-register">
                <div className="top">
                    <h4>STEP 2 OF 3</h4>
                    <h2>Choose a plan that's right for you..</h2>
                    <p>Downgrade or upgrade at any time</p>
                </div>
                <div className="boxes">
                    <div className="left"></div>
                    <div className="right">
                        <div className="box"  style = {{backgroundColor:color}} onClick = {changeColor} >Basic</div>
                        <div className="box" style = {{backgroundColor:colorStandard}} onClick = {changeColorStandard}>Standard</div>
                        <div className="box" style = {{backgroundColor:colorPremium}} onClick = {changeColorPremium}>Premium</div>
                    </div>
                </div>
                <div className="month-item">
                    <div className="item-about">
                        <p>Monthly price after free month ends</p>
                    </div>
                    <div className="item-value">
                        <p className="catagories" style = {{color:font}}>$7.99</p>
                        <p className="catagories" style ={{color:fontStandard}}>$10.99</p>
                        <p className = "catagories" style = {{color:fontPremium}}>$13.99</p>
                    </div>
                </div>
                <div className="month-item different">
                    <div className="item-about">
                        <p>HD available</p>
                    </div>
                    <div className="item-value">
                        <p className="catagories" style = {{color:font}}>NO</p>
                        <p className="catagories" style ={{color:fontStandard}}>YES</p>
                        <p className = "catagories" style = {{color:fontPremium}}>YES</p>
                    </div>
                </div><div className="month-item">
                    <div className="item-about">
                        <p>Ultra HD available</p>
                    </div>
                    <div className="item-value">
                        <p className="catagories" style = {{color:font}}>NO</p>
                        <p className="catagories" style ={{color:fontStandard}}>NO</p>
                        <p className = "catagories" style = {{color:fontPremium}}>YES</p>
                    </div>
                </div><div className="month-item different">
                    <div className="item-about">
                        <p>Screens you can watch on at the same time</p>
                    </div>
                    <div className="item-value">
                        <p className="catagories" style = {{color:font}}>1</p>
                        <p className="catagories" style ={{color:fontStandard}}>2</p>
                        <p className = "catagories" style = {{color:fontPremium}}>4</p>
                    </div>
                </div><div className="month-item">
                    <div className="item-about">
                        <p>Watch on your laptop, TV, phone and tablet</p>
                    </div>
                    <div className="item-value">
                        <p className="catagories" style = {{color:font}}>YES</p>
                        <p className="catagories" style ={{color:fontStandard}}>YES</p>
                        <p className = "catagories" style = {{color:fontPremium}}>YES</p>
                    </div>
                </div><div className="month-item different">
                    <div className="item-about">
                        <p>Unlimited movies and TV shoes</p>
                    </div>
                    <div className="item-value">
                        <p className="catagories" style = {{color:font}}>YES</p>
                        <p className="catagories" style ={{color:fontStandard}}>YES</p>
                        <p className = "catagories" style = {{color:fontPremium}}>YES</p>
                    </div>
                </div>
                
                <footer style = {{padding:"10px"}}>
                <button className= "btn2" onClick = {() => {navigate(color === "rgb(229, 9, 20" || colorStandard === "rgb(229, 9, 20" || colorPremium === "rgb(229, 9, 20" ? "/registration3" :alert("Hi") ,
                 {state:color === "rgb(229, 9, 20" || colorStandard === "rgb(229, 9, 20" || colorPremium === "rgb(229, 9, 20" ? {plan:color === "rgb(229, 9, 20" ? "Basic" :colorStandard === "rgb(229, 9, 20" ? "Standard" : "Premium"} :undefined  })}}>Continue</button>
                </footer>
            </div>
            
        </div>
    );
}

export default Register2;
