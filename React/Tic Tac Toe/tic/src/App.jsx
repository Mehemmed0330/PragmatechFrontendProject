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
  const [winner,setWinner] = useState(null);
  const [isFinished,setIsFinished] = useState(false);
 
  const click = (id) => {
    setValue(pre=>{
      let copyPre = [...pre];
      let index = copyPre.findIndex(item=>item.id === id);
      copyPre[index].element = fell;
      if((copyPre[0].element === "X" && copyPre[1].element === "X" && copyPre[2].element === "X") || (copyPre[3].element === "X" && copyPre[4].element === "X" && copyPre[5].element === "X") || (copyPre[6].element === "X" && copyPre[7].element === "X" && copyPre[8].element === "X") || (copyPre[0].element === "X" && copyPre[3].element === "X" && copyPre[6].element === "X")|| (copyPre[1].element === "X" && copyPre[4].element === "X" && copyPre[7].element === "X") || (copyPre[2].element === "X" && copyPre[5].element === "X" && copyPre[8].element === "X")|| (copyPre[0].element === "X" && copyPre[4].element === "X" && copyPre[8].element === "X")|| (copyPre[2].element === "X" && copyPre[4].element === "X" && copyPre[6].element === "X")) {
        setWinner("X");
        setIsFinished(true);
      }
      if((copyPre[0].element === "O" && copyPre[1].element === "O" && copyPre[2].element === "O") || (copyPre[3].element === "O" && copyPre[4].element === "O" && copyPre[5].element === "O") || (copyPre[6].element === "O" && copyPre[7].element === "O" && copyPre[8].element === "O") || (copyPre[0].element === "O" && copyPre[3].element === "O" && copyPre[6].element === "O")|| (copyPre[1].element === "O" && copyPre[4].element === "O" && copyPre[7].element === "O") || (copyPre[2].element === "O" && copyPre[5].element === "O" && copyPre[8].element === "O")|| (copyPre[0].element === "O" && copyPre[4].element === "O" && copyPre[8].element === "O")|| (copyPre[2].element === "O" && copyPre[4].element === "O" && copyPre[6].element === "O")) {
        setWinner("O");
        setIsFinished(true);
      }
      
      return copyPre
    });
     setFell(pre=> pre === "X" ? "O" : "X") 
  }

  return (
    <div className="App">
      {isFinished && <span>Qalib {winner}-dir</span>}
      <div style={{display:"flex",flexWrap:"wrap"}}>
       {value.map((item,index)=>{
        return( <div className="container" key={item.id}>
          <div style={isFinished ? {pointerEvents:"none"}:{}} className="box" onClick={()=>click(item.id)}>{item.element}</div>
        </div>
        )
       })}
        </div>
      </div>
   
  );
}

export default App;
