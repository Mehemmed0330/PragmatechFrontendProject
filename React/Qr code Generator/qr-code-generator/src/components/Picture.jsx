import React from 'react';
import {useEffect ,useState} from "react"

const Picture = () => {
    useEffect(() => {
        fetch("https://cataas.com/cat" , {
            cache: 'no-cache',
        }).then(response => {
            
            return response.blob()
        }).then(image => setImg(URL.createObjectURL(image)))
        
    }, []);
    

    const [img, setImg] = useState();
    return (
        <div>
            <button  onClick={() => window.location.reload(false)}>Change</button> <br/>
            <img src={img} alt="" style = {{white:"200px" , height:"200px"}} /> 
        </div>
    );
}

export default Picture;
