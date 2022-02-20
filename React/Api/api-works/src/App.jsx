import './App.css';
import {useState} from "react"
import Create from "./components/Create"
export const headerPost  =  {
  "Content-Type":"application/json;charset=utf-8",
   "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MzU5NzU4MzYsImF1ZCI6IjI4NWExMDdmMGM5MmNmZGE0NjdkYjIyMWNjYzUwMmY3IiwianRpIjoiMzY4NzEzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCIsImFwaV93cml0ZSJdLCJ2ZXJzaW9uIjoxLCJzdWIiOiI1ZjE5ODAyNGE2ZDkzMTAwMzc4NzA1MmYifQ.ZP8HlEcAthUMlIThvRa-keAxFBkIZ24fL1p_jiFWk_U"
}


function App() {
  const [list, setList] = useState([]);
  const header = {
    "Content-Type":"application/json;charset=utf-8",
    "Authorization" : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODVhMTA3ZjBjOTJjZmRhNDY3ZGIyMjFjY2M1MDJmNyIsInN1YiI6IjVmMTk4MDI0YTZkOTMxMDAzNzg3MDUyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aVQ18IpQSKo3ThEmEGr3JIMqfU24NvOo974ododdTBk"
  }



    const Send = ()=>{
      fetch("https://api.themoviedb.org/4/account/5f198024a6d931003787052f/lists" , {
        method:"GET",
        headers:header
      })
      .then(response => {
        return response.json()
      })
      .then(json => {
        json.results.forEach( ent => {
          getList(ent.id)
        });
      })
      .catch(e => console.error(e))
    }
      
  

  const getList = (id) =>{
    fetch("https://api.themoviedb.org/4/list/" + id ,{
      headers:header

    }).then(data => data.json())
    .then(data => {
      setList(prevList => [...data.results , ...prevList])
    })
    .catch(data => console.error(data))
  }

  return (
    // <div>
    //   <button onClick = {Send}>Read</button>
    //   { list.map(element => <div key = {element.id}>{element.name ?? element.title}</div>) }
    // </div>
    <Create/>
  );
}

export default App;
