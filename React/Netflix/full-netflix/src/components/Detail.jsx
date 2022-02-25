import React from 'react';
import {useEffect,useState} from "react"
import {useParams} from "react-router-dom"


const Detail = () => {
    const {id} = useParams()

    const header = {
        "Content-Type": "application/json;charset=utf-8",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODVhMTA3ZjBjOTJjZmRhNDY3ZGIyMjFjY2M1MDJmNyIsInN1YiI6IjVmMTk4MDI0YTZkOTMxMDAzNzg3MDUyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aVQ18IpQSKo3ThEmEGr3JIMqfU24NvOo974ododdTBk"
      }
      const [data, setData] = useState([]);
      useEffect(() => {
        fetch("https://api.themoviedb.org/4/account/5f198024a6d931003787052f/lists", {
            headers:header
        })
        .then(response => {return response.json()})
        .then(data => {
            data.results.forEach(element =>{
                getList(element.id)
            })

            Promise.all(data).then(res => {
                console.log(res)
            })
        }).catch(put => console.error(put))
    }, []);
    
    const getList = (id) => {
        return fetch("https://api.themoviedb.org/4/list/" + id, {
            headers:header
        }).then(response => {return response.json()})
        .then(data => {
            setData(prevData => data.results.concat(prevData))
        }).catch(put => console.error(put))
    }
    return (
        <div style = {{color:"white"}}>
            {data.id}
        </div>
    );
}

export default Detail;
