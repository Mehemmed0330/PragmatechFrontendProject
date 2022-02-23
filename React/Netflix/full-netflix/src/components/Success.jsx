import React from 'react';
import {useLocation} from "react-router-dom"
const Success = () => {
    const {name} = useLocation().state
    return (
        <div style={{height:"100vh" , color:"white"}}> 
            {name}
        </div>
    );
}

export default Success;
