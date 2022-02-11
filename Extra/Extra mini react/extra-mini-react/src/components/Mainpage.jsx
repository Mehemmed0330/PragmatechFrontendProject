import React from 'react';
import {useEffect , useState } from 'react'
import {useNavigate} from "react-router-dom"

const MainPage = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts").then(response =>{
        return response.json()
      }).then(information => setData(information))
    }, []);
    const navigate = useNavigate();
    
    return (
      <div style={{display:"flex",flexWrap:"wrap" , justifyContent:"space-around"}}>
        {data?.map((user) => (
          <div style={{}} key={user.id}>
            <div style={{border:"1px solid black" , margin:"10px" ,  backgroundColor:"yellow"}}  onClick = {()=> navigate("/detail/" + user.id)}>
              <div style={{fontSize:"16px" , margin:"10px", padding:"5px" , width:"300px",height:"50px"}}>
                {user.id}. <br />
                {user.title} <br />    
                </div>
            </div>
          </div>
        ))}
      </div>
    );
}

export default MainPage;
