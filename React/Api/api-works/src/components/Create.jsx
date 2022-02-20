import React from 'react';
import UseCreate from "../hook/UseCreate"
import { useRef } from 'react';

const Create = () => {
    const {isLoading , CreateList} = UseCreate()
    const inputRef = useRef()
    return (
        <div style={{ textAlign:"center" ,margin:"250px"}}>
            <input type="text" placeholder = "Add list" style={{padding:"10px" , fontSize:"18px"}} ref = {inputRef} />  <br />
            <button onClick = {()=> {CreateList(inputRef.current.value)}}>Create  list</button> <br />
            {isLoading ? "Hazirlanir" :"Hazirla"}
        </div>
    );
}

export default Create;
