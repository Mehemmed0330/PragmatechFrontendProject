import React from 'react';
import {  useParams } from 'react-router-dom';
import "./Firstuser.css"



const Firstuser = () => {

    const params = useParams();

    
   
    return (
        <div>
            <h1>id:{params.id}</h1>
            <h1>name:{params.name}</h1>
            <h1>surname:{params.surname}</h1>
            <h1>email:{params.email}</h1>
            <h1>street:{params.street}</h1>
            <h1>suite:{params.suite}</h1>
            <h1>city:{params.city}</h1>
            <h1>zipcode:{params.zipcode}</h1>
            <h1>lat:{params.lat}</h1>
            <h1>lng:{params.lng}</h1>
            <h1>phone:{params.phone}</h1>
            <h1>website:{params.website}</h1>
            <h1>company:{params.company}</h1>
            <h1>catchPhrase:{params.catchPhrase}</h1>
            <h1>bs:{params.bs}</h1>






        </div>
    );
}

export default Firstuser;
