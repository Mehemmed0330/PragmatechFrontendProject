import React from 'react';
import {useEffect,useState} from "react"
import {useParams} from "react-router-dom"


const Detail = () => {
    const {id} = useParams()
    // console.log(id)

    const header = {
        "Content-Type": "application/json;charset=utf-8",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODVhMTA3ZjBjOTJjZmRhNDY3ZGIyMjFjY2M1MDJmNyIsInN1YiI6IjVmMTk4MDI0YTZkOTMxMDAzNzg3MDUyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aVQ18IpQSKo3ThEmEGr3JIMqfU24NvOo974ododdTBk"
      }
        const [data, setData] = useState([]);
      console.log(data)
     useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/" + id , {
            headers:header
        }).then(response => {return response.json()})
        .then(data => {
            setData(data)
        })
    }, []);
    return (
        <div style = {{color:"white"}}>
            {data.title}
           
        </div>
    );
}

export default Detail;
