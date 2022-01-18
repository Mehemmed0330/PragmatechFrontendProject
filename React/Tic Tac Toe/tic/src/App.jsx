import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState([
    {id:1,element:null},
    {id:2,element:null},
    {id:3,element:null},
    {id:4,element:null},
    {id:5,element:null},
    {id:6,element:null},
    {id:7,element:null},
    {id:8,element:null},
    {id:9,element:null}
  ])
 

  return (
    <div className="App">

       {value.map((item,index)=>{
        return( <div className="container" key={item.id}>
          <div className="box">{index.element}</div>
          

        </div>
        )
       })}
        
      </div>
   
  );
}

export default App;
