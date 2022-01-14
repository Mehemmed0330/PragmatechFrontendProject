import React from 'react'
import { useState,useRef } from 'react'

export default function Login() {
    const [ , setRender] = useState({});
    const [answer, setanswer] = useState();
    const nameRef = useRef();
    const passwordRef = useRef();

  function focus(){   
      setRender({});
      if (nameRef.current.value === "Mehemmed" && passwordRef.current.value === "2003" ) {
          setanswer("Xos gelmsisiz")
      }else if(nameRef.current.value === "Mehemmed" || passwordRef.current.value === " "){
        setanswer("Ad duzdur")
      }else if(nameRef.current.value === " " || passwordRef.current.value === "2003"){
        setanswer("Kod duzdur")
      }else{
          setanswer("Cix burdan")
      }
      
  }

    return (
        <>
        <div className="contaienr">
        <input ref={nameRef} type="text" />
        <input ref={passwordRef} type="password" />
        <button onClick={focus}>Click</button>
        <div className="class">{answer}</div>
        </div>            
        </>
        
    )
}
