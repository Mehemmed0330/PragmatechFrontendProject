import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState(0)
  const [X, setX] = useState()
  const [Y, setY] = useState()
  
  
  console.log(state)

 
  const clc = () =>{
    setState(state+1)
    if (state %2 ===0) {
      setX(state === "X")
    }else{
      console.log()
    }
  
  }

  return (
    <div className="App">
      <div className="container">
        <div className="box" onClick={clc}>{state}</div>
        <div className="box" onClick={clc}>{state}</div>
        <div className="box" onClick={clc}>{state}</div>
        <div className="box" onClick={clc}>{state}</div>
        <div className="box" onClick={clc}>{state}</div>
        <div className="box" onClick={clc}>{state}</div>
        <div className="box" onClick={clc}>{state}</div>
        <div className="box" onClick={clc}>{state}</div>
        <div className="box" onClick={clc}>{state}</div>
        
      </div>
    </div>
  );
}

export default App;
