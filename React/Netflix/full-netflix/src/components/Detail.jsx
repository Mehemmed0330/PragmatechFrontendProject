import React from 'react';
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const Detail = () => {
    const {id} = useParams()
    const [data, setData] = useState();

    useEffect(() => {
        fetch("/movie/" + id).then(response =>{
          return response.json()
        }).then(information => setData(information))
      }, [id]);

    return (
        

        <div>
            {data.id}
        </div>
    );
}

export default Detail;
