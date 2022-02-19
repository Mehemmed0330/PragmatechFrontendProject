import React from 'react';
import Members from "../components/Members"

const House = ({number}) => {
    return (
        <div>
            <h1>{number.deaths}</h1>
            <Members members={number.members} />
        </div>
    );
}

export default House;
