import './App.css';
import {useEffect,useState} from "react"

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then(response =>{
      return response.json()
    }).then(information => setData(information))
  }, []);
  
  return (
    <div style={{display:"flex",flexWrap:"wrap" , justifyContent:"space-around"}}>
      {data?.map((user) => (
        <div style={{}} key={user.id}>
          <div style={{border:"1px solid black" , margin:"10px" ,  backgroundColor:"yellow"}}>
            <div style={{fontSize:"16px" , margin:"20px", padding:"10px" , width:"500px",height:"200px"}}>
              {user.id}
              {user.title}
              {user.body}
              </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
