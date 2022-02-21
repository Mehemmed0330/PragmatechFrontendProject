import './App.css';
import {useState, useRef} from "react"
// import Create from "./components/Create"
export const headerPost  =  {
  "Content-Type":"application/json;charset=utf-8",
   "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MzU5NzU4MzYsImF1ZCI6IjI4NWExMDdmMGM5MmNmZGE0NjdkYjIyMWNjYzUwMmY3IiwianRpIjoiMzY4NzEzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCIsImFwaV93cml0ZSJdLCJ2ZXJzaW9uIjoxLCJzdWIiOiI1ZjE5ODAyNGE2ZDkzMTAwMzc4NzA1MmYifQ.ZP8HlEcAthUMlIThvRa-keAxFBkIZ24fL1p_jiFWk_U"
}
function App() {
  const [list, setList] = useState([]);
  const promiseList = useRef([])
  const header = {
    "Content-Type":"application/json;charset=utf-8",
    "Authorization" : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODVhMTA3ZjBjOTJjZmRhNDY3ZGIyMjFjY2M1MDJmNyIsInN1YiI6IjVmMTk4MDI0YTZkOTMxMDAzNzg3MDUyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aVQ18IpQSKo3ThEmEGr3JIMqfU24NvOo974ododdTBk"
  }
  const Send = () => {
    fetch("https://api.themoviedb.org/4/account/5f198024a6d931003787052f/lists", {
      headers: header
    })
      .then(response => {
        return response.json()
      })
      .then(json => {
        json.results.forEach(element => {
          promiseList.current.push(getList(element.id))
        });

        Promise.all(promiseList.current).then(res => {
          Promise.all(res.map(response => response.json())).then(allJson => {
            setList(allJson)
          })
        })

      }).catch(e => console.error(e))
  }
  const getList =(id) =>{
    return fetch("https://api.themoviedb.org/4/list/" + id ,{
      headers:header
    })
  }
  return (
    <div>
      <button onClick = {Send}>Read</button>
      {list.length > 0 && list.map(s => <div key={s.id}>{s.name ?? s.title}</div>)}    </div>
    // <Create/>
  );
}
export default App;
