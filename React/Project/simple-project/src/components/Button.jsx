import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = () => {
    const navigate =  useNavigate()
    return (
        <div>
            <button onClick={()=>{
                navigate({
                    pathname:"/"
                })
            }}>Home -a kecid</button>

        </div>
    );
}

export default Button;
