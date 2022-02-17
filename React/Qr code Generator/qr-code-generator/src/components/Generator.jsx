import React from 'react';
import { useState,useEffect } from 'react';


const Generator = () => {
    const [temp, setTemp] = useState("");
    const [word, setWord] = useState("");
    const [bgColor, setBgColor] = useState("ffffff");
    const [qrCode, setQrCode] = useState("");  
    const [view, setView] = useState(false)  
   
    useEffect(() => {
        setQrCode
     (`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${100}x${100}&bgcolor=${bgColor}`);
      }, [word, bgColor]);
      

      function handleClick() {
        setView(true)
        setWord(temp);
      }

    return (
        <div style = {{textAlign:"center"}}>
        <div >
          <input type="text" onChange={
            (e) => {setTemp(e.target.value)}}
            placeholder="Enter text to encode" />
          <button className="button" 
            onClick={handleClick}>
            Generate
          </button>
        </div>
        <div>
          <h5>Background Color:</h5>
          <input type="color" onChange={(e) => 
          { setBgColor(e.target.value.substring(1)) }} />
        </div>
      
      <div> <br/>
        {view ? <img src={qrCode} alt="" />  :  null}
        
      </div>
            
        </div>
    );
}

export default Generator;
