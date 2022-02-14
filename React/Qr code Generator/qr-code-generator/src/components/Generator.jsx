import React from 'react';
import { useState,useEffect } from 'react';
import QRCode from "qrcode"

const Generator = () => {
    const [text, setText] = useState("");
    const [view, setView] = useState(false);
    const [src, setSrc] = useState("");


    const change =() =>{
        setView(true)
    }
    useEffect(() => {
        QRCode.toDataURL(text).then(response =>{
            setSrc(response)
        })
        
    }, [text]);
    
   

    return (
        <div>
            <input type="text" onChange={(e)=>setText(e.target.value)} />
            <button onClick={change}>Generate</button>
            {view ? <img src={src} alt="" /> :""}
            
        </div>
    );
}

export default Generator;
