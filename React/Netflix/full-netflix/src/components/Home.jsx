import React from 'react';
import {useEffect} from "react"
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import {useRef} from "react"


const Home = () => {
    const [data, setData] = useState([]);
    const dataRef = useRef([])
    const navigate = useNavigate();
    const header = {
        "Content-Type": "application/json;charset=utf-8",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODVhMTA3ZjBjOTJjZmRhNDY3ZGIyMjFjY2M1MDJmNyIsInN1YiI6IjVmMTk4MDI0YTZkOTMxMDAzNzg3MDUyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aVQ18IpQSKo3ThEmEGr3JIMqfU24NvOo974ododdTBk"
      }
    useEffect(() => {
        fetch("https://api.themoviedb.org/4/account/5f198024a6d931003787052f/lists" , {
            headers:header
        })
        .then(response => {return response.json()})
        .then(data => {
            data.results.forEach(element =>{
                dataRef.current.push(getList(element.id))
            })

            Promise.all(dataRef.current).then(res => {
                Promise.all(res.map(response => response.json())).then(allJson => {
                    setData(allJson)
                })
            })
        }).catch(put => console.error(put))
    }, []);
    
    const getList = (id) => {
        return fetch("https://api.themoviedb.org/4/list/" + id , {
            headers:header
        })
    }

    return (
        <div>
            {data.map(e => <div key = {e.id}>  <img src={`https://www.themoviedb.org/t/p/w500${e.backdrop_path}`} alt="" style={{height:"100px", width:"200px"}} onClick = {() => navigate("/detail/" + e.id) } /> </div>)}
        </div>
    );
}

export default Home;
