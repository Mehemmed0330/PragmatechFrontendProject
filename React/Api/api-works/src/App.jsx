import './App.css';
import {useState} from "react"


function App() {
  const [list, setList] = useState([]);

  const readData = () => {
      fetch("https://api.themoviedb.org/4/account/5f198024a6d931003787052f/lists" , {
        method:"GET",
        headers:{
          "Content-Type":"application/json;charset=utf-8",
          "Authorization" : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODVhMTA3ZjBjOTJjZmRhNDY3ZGIyMjFjY2M1MDJmNyIsInN1YiI6IjVmMTk4MDI0YTZkOTMxMDAzNzg3MDUyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aVQ18IpQSKo3ThEmEGr3JIMqfU24NvOo974ododdTBk"
        }
      })
      .then(response => {
        return response.json()
      })
      .then(json => {
        json.results.map( ent => {
          getList(ent.id)
        });
      })
      .catch(e => console.error(e))
  }

  const getList = (id) =>{
    fetch("https://api.themoviedb.org/4/list/" + id ,{
      headers:{
        "Content-Type":"application/json;charset=utf-8",
        "Authorization" : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODVhMTA3ZjBjOTJjZmRhNDY3ZGIyMjFjY2M1MDJmNyIsInN1YiI6IjVmMTk4MDI0YTZkOTMxMDAzNzg3MDUyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aVQ18IpQSKo3ThEmEGr3JIMqfU24NvOo974ododdTBk"
      }
    }).then(data => data.json())
    .then(data => {
      setList(prevList => data.results.concat(prevList))
    })
    .catch(data => console.error(data))
  }

  return (
    <div>
      <button onClick ={readData}>Read</button>
      { list.map(element => <div key = {element.id}>{element.name ?? element.title}</div>) }
    </div>
  );
}

export default App;
