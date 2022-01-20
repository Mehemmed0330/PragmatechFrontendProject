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
  ]);
 
  const [fell, setFell] = useState("X")

 
  const click = (id) => {
    setValue(pre=>{
      let copyPre = [...pre];
      let index = copyPre.findIndex(item=>item.id === id);
      copyPre[index].element = fell;
      
      
      return copyPre
    });
     setFell(pre=> pre === "X" ? "O" : "X") 
  }

  return (
    <div className="App">
      
      <div style={{display:"flex",flexWrap:"wrap"}}>
       {value.map((item,index)=>{
        return( <div className="container" key={item.id}>
          <div  className="box" onClick={()=>click(item.id)}>{item.element}</div>
        </div>
        )
       })}
        </div>
      </div>
   
  );
}

export default App;
