import React from 'react'
import "./Login.css"
import { useState,useRef } from 'react'

export default function Login() {
    const [ , setRender] = useState({});
    const [answer, setanswer] = useState();
    const [color, setcolor] = useState();
    const nameRef = useRef(false);
    const passwordRef = useRef(false);
    
  

  function focus(){   
      setRender({});
      if (nameRef.current.value === "Mehemmed" && passwordRef.current.value === "2003" ) {
          setanswer("Xos gelmsisiz")
      }else if(nameRef.current.value === "Mehemmed" && passwordRef.current.value !== "2003"){
        setanswer("Ad duzdur")
      }else if(nameRef.current.value !== "Mehemmed" && passwordRef.current.value === "2003"){
        setanswer("Kod duzdur")
      }else{
          setanswer("Cix burdan")
      }
      
  }

    return (
        
        <div className="container">
            <input ref={nameRef} type="text" placeholder='name' /> <br></br>
            <input ref={passwordRef} type="password" placeholder='password' /> <br></br>
            <button onClick={focus}>Click</button>
            <div className="class">{answer}</div>
        </div>            
        
        
    )
}
